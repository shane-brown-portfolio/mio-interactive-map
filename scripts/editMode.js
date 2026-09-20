// Edit Mode: lets the player add/edit/delete pins directly on the map.
// Changes live in the localStorage overlay from edits.js; Export Data turns
// that overlay + the base data into a full data.js replacement.

let editMode = false;
const editModeBtn = document.getElementById('editModeBtn');

editModeBtn.addEventListener('click', () => {
  editMode = !editMode;
  editModeBtn.classList.toggle('active', editMode);
  viewport.classList.toggle('edit-active', editMode);
  if (!editMode) closePopup();
});

function createMarker(x, y) {
  // Starts uncategorized as a plain gray pin with no icon
  const marker = {
    id: genId(),
    x,
    y,
    type: null,
    title: 'New Pin',
    desc: '',
    color: '#999999'
  };

  // Not persisted yet: only committed to the edits overlay once Save is clicked
  MAP_DATA.markers.push(marker);
  pinsWorld.appendChild(createPinElement(marker));
  applyFilters();
  refreshSidebarCounts();
  updateProgress();
  return marker;
}

function updateMarker(id, patch)
{
  const marker = MAP_DATA.markers.find(m => m.id === id);

  if (!marker)
    return;
  if (patch.type)
    patch.color = typeColors[patch.type] || marker.color;

  Object.assign(marker, patch);

  // First Save on a freshly-created pin is what commits it to the overlay
  if (id === freshMarkerId && !edits.customMarkers.includes(marker))
    edits.customMarkers.push(marker);

  const customMarker = edits.customMarkers.find(m => m.id === id);
  if (customMarker) {
    Object.assign(customMarker, patch);
  }
  else {
    edits.markerEdits[id] = Object.assign(edits.markerEdits[id] || {}, patch);
  }
  saveEdits();

  const pinEl = pinsWorld.querySelector(`.pin[data-id="${id}"]`);
  if (pinEl) {
    pinEl.title = marker.title;
    pinEl.dataset.type = marker.type;
  }
  syncPinVisual(marker);
  renderSidebar();
  applyFilters();
}

function deleteMarker(id) {
  const wasCustom = edits.customMarkers.some(m => m.id === id);

  // A freshly-created pin that was never Saved has no overlay entry to undo
  const wasUncommitted = id === freshMarkerId && !wasCustom;
  
  MAP_DATA.markers = MAP_DATA.markers.filter(m => m.id !== id);

  if (wasCustom) {
    edits.customMarkers = edits.customMarkers.filter(m => m.id !== id);
  }
  else if (!wasUncommitted && !edits.deletedMarkerIds.includes(id)) {
    edits.deletedMarkerIds.push(id);
  }

  if (!wasUncommitted) {
    delete edits.markerEdits[id];
    saveEdits();
  }

  collected.delete(id);
  saveCollected();

  const pinEl = pinsWorld.querySelector(`.pin[data-id="${id}"]`);
  if (pinEl)
    pinEl.remove();

  renderSidebar();
  applyFilters();
  updateProgress();
}

// Bundles a new category + its first type together, since a marker needs a type uid to attach to
function createCategory(catLabel, color, typeLabel) {
  const catUid = genId();
  const typeUid = genId();
  const category = { uid: catUid, label: catLabel, types: [{ uid: typeUid, label: typeLabel, icon: null }] };
  MAP_DATA.categories.push(category);
  edits.customCategories.push(category);
  saveEdits();
  typeMeta[typeUid] = {
    label: typeLabel,
    icon: null,
    categoryLabel: catLabel
  };
  typeColors[typeUid] = color;
  catColors[catUid] = color;
  return typeUid;
}

// Adds a new type under an already-existing category (base or user-created)
// Color is a category-level attribute, so the type just inherits it
function createType(catUid, label) {
  const category = MAP_DATA.categories.find(c => c.uid === catUid);
  const typeUid = genId();
  const type = {
    uid: typeUid,
    label,
    icon: null
  };
  category.types.push(type);

  // A user-created category is already tracked by reference in customCategories,
  // so only a type added to a base category needs its own overlay entry
  if (!edits.customCategories.includes(category))
    edits.customTypes.push({ catUid, type });
  saveEdits();

  typeMeta[typeUid] = {
    label,
    icon: null,
    categoryLabel: category.label
  };
  typeColors[typeUid] = catColors[catUid];
  return typeUid;
}

// Click empty map space in Edit Mode to drop a new pin there
viewport.addEventListener('click', (e) => {
  if (!editMode || dragMoved || e.target.closest('.pin'))
    return;
  
  const vRect = viewport.getBoundingClientRect();
  const cx = e.clientX - vRect.left, cy = e.clientY - vRect.top;
  const x = (cx - tx) / scale / worldW, y = (cy - ty) / scale / worldH;

  if (x < 0 || x > 1 || y < 0 || y > 1)
    return;

  const marker = createMarker(x, y);
  freshMarkerId = marker.id;
  openPopup(marker, pinsWorld.querySelector(`.pin[data-id="${marker.id}"]`));
});

document.getElementById('exportData').addEventListener('click', () => {
  const json = JSON.stringify(
    {
      title: MAP_DATA.title,
      image: MAP_DATA.image,
      categories: MAP_DATA.categories,
      markers: MAP_DATA.markers
    },
    null, 2
  );
  const blob = new Blob([`const MAP_DATA = ${json};\n`], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  a.click();
  URL.revokeObjectURL(url);
});
