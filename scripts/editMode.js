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
    subtitle: '',
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

// Drag an existing pin in Edit Mode to nudge its x/y instead of panning the map
let pinDragMoved = false;
let draggingPin = null, dragStartFracX = 0, dragStartFracY = 0, dragStartClientX = 0, dragStartClientY = 0;

pinsWorld.addEventListener('pointerdown', (e) => {
  const pinEl = e.target.closest('.pin');
  if (!editMode || !pinEl)
    return;

  const marker = MAP_DATA.markers.find(m => m.id === pinEl.dataset.id);
  if (!marker)
    return;

  e.stopPropagation(); // keep viewport's own pointerdown from starting a map pan
  draggingPin = { marker, pinEl };
  pinDragMoved = false;
  dragStartFracX = marker.x;
  dragStartFracY = marker.y;
  dragStartClientX = e.clientX;
  dragStartClientY = e.clientY;
  pinEl.setPointerCapture(e.pointerId);
});

pinsWorld.addEventListener('pointermove', (e) => {
  if (!draggingPin)
    return;
  const dx = e.clientX - dragStartClientX, dy = e.clientY - dragStartClientY;
  if (Math.abs(dx) + Math.abs(dy) > 4)
    pinDragMoved = true;
  if (!pinDragMoved)
    return;

  const { marker, pinEl } = draggingPin;
  marker.x = Math.min(1, Math.max(0, dragStartFracX + dx / scale / worldW));
  marker.y = Math.min(1, Math.max(0, dragStartFracY + dy / scale / worldH));
  pinEl.style.left = (marker.x * 100) + '%';
  pinEl.style.top = (marker.y * 100) + '%';
  if (activePinEl === pinEl)
    positionPopup();
});

pinsWorld.addEventListener('pointerup', () => {
  if (!draggingPin)
    return;
  const { marker } = draggingPin;
  draggingPin = null;
  if (pinDragMoved)
    updateMarker(marker.id, { x: marker.x, y: marker.y });
});

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
