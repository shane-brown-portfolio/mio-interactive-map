// Persists user-made pin/category edits in localStorage as an overlay on top
// of the base MAP_DATA, since a static page has no server to save files to.
// Must load right after data.js so everything else sees the merged result.

const editStore = {
  get() {
    try {
      return JSON.parse(localStorage.getItem('mio-edits')) || {};
    }
    catch (e) {
      return {};
    }
  },
  set(v) {
    try {
      localStorage.setItem('mio-edits', JSON.stringify(v));
    }
    catch (e) {}
  }
};

const edits = Object.assign(
  {
    customCategories: [],
    customTypes: [],
    customMarkers: [],
    markerEdits: {},
    deletedMarkerIds: []
  },
  editStore.get()
);

function saveEdits() {
  editStore.set(edits);
}

MAP_DATA.categories.push(...edits.customCategories);
// customTypes are types added to a pre-existing (base) category
edits.customTypes.forEach(({ catUid, type }) => {
  const cat = MAP_DATA.categories.find(c => c.uid === catUid);
  if (cat)
    cat.types.push(type);
});
MAP_DATA.markers.push(...edits.customMarkers);
MAP_DATA.markers = MAP_DATA.markers.filter(m => !edits.deletedMarkerIds.includes(m.id));
Object.entries(edits.markerEdits).forEach(([id, patch]) => {
  const marker = MAP_DATA.markers.find(m => m.id === id);
  if (marker)
    Object.assign(marker, patch);
});

function genId() {
  return 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
