// Clicking a pin opens a small popup with its info and a button to toggle it
// as completed. Completed pins get a `.done` class (see pins.css) so they
// read as more transparent on the map. In Edit Mode the popup instead shows
// editable fields (see editMode.js for the toggle + pin creation).

const popup = document.getElementById('popup');
const popupType = document.getElementById('popupType');
const popupTitle = document.getElementById('popupTitle');
const popupDesc = document.getElementById('popupDesc');
const popupComplete = document.getElementById('popupComplete');

const editTitle = document.getElementById('editTitle');
const editDesc = document.getElementById('editDesc');
const editCategory = document.getElementById('editCategory');
const itemTypeField = document.getElementById('itemTypeField');
const editItemType = document.getElementById('editItemType');
const newFields = document.getElementById('newFields');
const newLabel = document.getElementById('newLabel');
const newColor = document.getElementById('newColor');
const newTypeNameField = document.getElementById('newTypeNameField');
const newTypeLabel = document.getElementById('newTypeLabel');
const popupError = document.getElementById('popupError');
const popupSave = document.getElementById('popupSave');
const popupDelete = document.getElementById('popupDelete');

let activeId = null;
let activePinEl = null;

// Tracks a pin just created by clicking empty map space
// Closing the popup without hitting Save discards it
let freshMarkerId = null;

function updateCompleteButton() {
  const isDone = collected.has(activeId);
  popupComplete.textContent = isDone ? 'Completed ✓' : 'Mark completed';
  popupComplete.classList.toggle('done', isDone);
}

// Category dropdown drives the Item Type dropdown: a category must be picked
// before Item Type is shown at all, and it's always scoped to that category
function populateCategorySelect(selectedCatUid) {
  editCategory.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-';
  editCategory.appendChild(placeholder);
  MAP_DATA.categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.uid;
    opt.textContent = cat.label;
    editCategory.appendChild(opt);
  });
  const newCatOpt = document.createElement('option');
  newCatOpt.value = '__newcat__';
  newCatOpt.textContent = '+ New category…';
  editCategory.appendChild(newCatOpt);
  editCategory.value = selectedCatUid;
}

// Item Type list scoped to one category, plus the option to add a new type to it
// Starts on "-" rather than silently guessing the first type
function rebuildItemTypeOptions(catUid, selectedUid) {
  const cat = MAP_DATA.categories.find(c => c.uid === catUid);
  editItemType.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '-';
  editItemType.appendChild(placeholder);
  cat.types.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.uid;
    opt.textContent = t.label;
    editItemType.appendChild(opt);
  });
  const newOpt = document.createElement('option');
  newOpt.value = '__newtype__';
  newOpt.textContent = '+ New item type…';
  editItemType.appendChild(newOpt);
  editItemType.value = selectedUid || '';
}

// Color is a per-category attribute: a new type inherits its category's color
function showNewFields(kind) {
  newFields.hidden = false;
  newLabel.placeholder = kind === 'category' ? 'New category name' : 'New item type name';
  newColor.hidden = kind !== 'category';
}

function hideNewFields() {
  newFields.hidden = true;
}

// Reflects a marker's actual stored type/color onto its pin
function syncPinVisual(marker) {
  const pinEl = pinsWorld.querySelector(`.pin[data-id="${marker.id}"]`);
  if (!pinEl)
    return;
  const meta = typeMeta[marker.type];
  pinEl.style.setProperty('--pin-color', marker.color);
  pinEl.innerHTML = meta && meta.icon ? `<img src="${meta.icon}" alt="${meta.label}">` : '';
}

// Live preview: gray with no icon until a category is picked, then displays item type's icon on top
function previewPinAppearance() {
  if (!activePinEl)
    return;
  let color = '#999999', icon = null, label = '';
  if (editCategory.value === '__newcat__') {
    color = newColor.value;
  }
  else if (editItemType.value === '__newtype__') {
    color = catColors[editCategory.value];
  }
  else if (editItemType.value) {
    const meta = typeMeta[editItemType.value];
    color = typeColors[editItemType.value];
    icon = meta.icon;
    label = meta.label;
  }
  else if (editCategory.value) {
    color = catColors[editCategory.value];
  }
  activePinEl.style.setProperty('--pin-color', color);
  activePinEl.innerHTML = icon ? `<img src="${icon}" alt="${label}">` : '';
}

function showFieldError(msg) {
  popupError.textContent = msg;
  popupError.hidden = false;
}

function clearFieldErrors() {
  popupError.hidden = true;
}

// A new pin starts blank ("-") so the user must pick a specific category
function populateCategoryFields(selectedTypeUid, blank) {
  const cat = MAP_DATA.categories.find(c => c.types.some(t => t.uid === selectedTypeUid));
  populateCategorySelect(blank ? '' : cat.uid);
  if (blank) {
    itemTypeField.hidden = true;
    editItemType.innerHTML = '';
  }
  else {
    itemTypeField.hidden = false;
    rebuildItemTypeOptions(cat.uid, selectedTypeUid);
  }
  hideNewFields();
  newTypeNameField.hidden = true;
  clearFieldErrors();
}

editCategory.addEventListener('change', () => {
  clearFieldErrors();
  const v = editCategory.value;
  if (v === '__newcat__') {
    itemTypeField.hidden = true;
    showNewFields('category');
    newTypeNameField.hidden = false;
    previewPinAppearance();
    return;
  }
  newTypeNameField.hidden = true;
  hideNewFields();
  if (v === '') {
    itemTypeField.hidden = true;
    editItemType.innerHTML = '';
    previewPinAppearance();
    return;
  }
  itemTypeField.hidden = false;
  rebuildItemTypeOptions(v);
  previewPinAppearance();
});

editItemType.addEventListener('change', () => {
  clearFieldErrors();
  if (editItemType.value === '__newtype__') {
    showNewFields('type');
  }
  else {
    hideNewFields();
  }
  previewPinAppearance();
});

newColor.addEventListener('input', previewPinAppearance);

function openPopup(marker, pinEl) {
  activeId = marker.id;
  const meta = typeMeta[marker.type];
  popupType.textContent = meta ? `${meta.categoryLabel} • ${meta.label}` : '';
  popupTitle.textContent = marker.title;
  popupDesc.innerHTML = marker.desc || ''; // desc is HTML (e.g. "<p>...</p>")
  popupDesc.hidden = !marker.desc;
  updateCompleteButton();

  editTitle.value = marker.title || '';
  editDesc.value = marker.desc || '';
  populateCategoryFields(marker.type, freshMarkerId === marker.id);
  popup.classList.toggle('edit-mode', editMode);

  popup.classList.add('open');
  activePinEl = pinEl;
  positionPopup();
}

// Re-run any time the pin moves on screen (zoom/pan), so the popup tracks it
// instead of staying put or repositioning off the old spot
function positionPopup() {
  if (!activePinEl)
    return;
  const vRect = viewport.getBoundingClientRect();
  const pRect = activePinEl.getBoundingClientRect();
  const pw = popup.offsetWidth, ph = popup.offsetHeight;

  // Center above the pin, but keep it on screen and flip below if it'd clip the top
  let left = pRect.left - vRect.left + pRect.width / 2 - pw / 2;
  let top = pRect.top - vRect.top - ph - 10;
  left = Math.max(8, Math.min(left, vRect.width - pw - 8));
  if (top < 8)
    top = pRect.bottom - vRect.top + 10;
  popup.style.left = left + 'px';
  popup.style.top = top + 'px';
}

// Item Type appearing, or the new-category/new-type fields, changes the popup's own height,
// so reposition the popup so it doesn't grow down over the pin
new ResizeObserver(positionPopup).observe(popup);

function closePopup() {
  if (freshMarkerId && freshMarkerId === activeId) {
    deleteMarker(freshMarkerId);
  }
  else if (activeId) {
    // Undo any live preview that wasn't saved
    const marker = MAP_DATA.markers.find(m => m.id === activeId);
    if (marker)
      syncPinVisual(marker);
  }
  freshMarkerId = null;
  popup.classList.remove('open');
  activeId = null;
  activePinEl = null;
}

pinsWorld.addEventListener('click', (e) => {
  const pinEl = e.target.closest('.pin');
  if (!pinEl)
    return;
  const marker = MAP_DATA.markers.find(m => m.id === pinEl.dataset.id);
  if (!marker)
    return;
  openPopup(marker, pinEl);
});

popupComplete.addEventListener('click', () => {
  if (!activeId)
    return;
  setCollected(activeId, !collected.has(activeId));
  updateCompleteButton();
  refreshSidebarCounts();
  applyFilters();
});

popupSave.addEventListener('click', () => {
  if (!activeId)
    return;
  clearFieldErrors();

  if (editCategory.value === '') {
    showFieldError('Choose a category.');
    return;
  }

  let typeUid;
  if (editCategory.value === '__newcat__') {
    const catLabel = newLabel.value.trim();
    const typeLabel = newTypeLabel.value.trim();
    if (!catLabel) {
      showFieldError('Enter a name for the new category.');
      return;
    }
    if (!typeLabel) {
      showFieldError('Enter a name for the new item type.');
      return;
    }
    typeUid = createCategory(catLabel, newColor.value, typeLabel);
  }
  else if (editItemType.value === '__newtype__') {
    const label = newLabel.value.trim();
    if (!label) {
      showFieldError('Enter a name for the new item type.');
      return;
    }
    typeUid = createType(editCategory.value, label);
  }
  else if (editItemType.value === '') {
    showFieldError('Choose an item type.');
    return;
  }
  else {
    typeUid = editItemType.value;
  }
  updateMarker(activeId, {
    title: editTitle.value.trim() || 'Untitled',
    desc: editDesc.value,
    type: typeUid
  });
  freshMarkerId = null;
  closePopup();
});

popupDelete.addEventListener('click', () => {
  if (!activeId)
    return;
  if (!confirm('Delete this pin?'))
    return;
  deleteMarker(activeId);
  freshMarkerId = null;
  closePopup();
});

document.getElementById('popupClose').addEventListener('click', closePopup);

// Close on any click outside the popup, unless clicking onto another pin
document.addEventListener('click', (e) => {
  if (popup.classList.contains('open') && !e.target.closest('#popup')) {
    closePopup();
    if (!e.target.closest('.pin'))
      e.stopPropagation();
  }
}, true);
