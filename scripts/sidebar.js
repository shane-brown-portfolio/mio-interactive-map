// Category/type filters in the sidebar: toggling shows the matching pins on the map.
// Also filters out already-collected pins when "Show collected pins" is off.

const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
};

const settings = store.get('mio-settings', { showCollected: true, hiddenTypes: [] });
const hiddenTypes = new Set(settings.hiddenTypes || []);
function saveSettings() {
  store.set('mio-settings', { showCollected: settings.showCollected, hiddenTypes: Array.from(hiddenTypes) });
}

// Icons are plain white so category/type color is used for sidebar list
const catColors = {};
const typeColors = {};
MAP_DATA.categories.forEach(cat => {
  const uids = cat.types.map(t => t.uid);
  const first = MAP_DATA.markers.find(m => uids.includes(m.type));
  catColors[cat.uid] = (first && first.color) || '#999999';
  cat.types.forEach(t => {
    const firstOfType = MAP_DATA.markers.find(m => m.type === t.uid);
    typeColors[t.uid] = (firstOfType && firstOfType.color) || '#999999';
  });
});

const categoryList = document.getElementById('categoryList');
const showCollectedInput = document.getElementById('showCollected');

function catCount(cat) {
  const uids = cat.types.map(t => t.uid);
  const items = MAP_DATA.markers.filter(m => uids.includes(m.type));
  return { done: items.filter(m => collected.has(m.id)).length, total: items.length };
}
function typeCount(uid) {
  const items = MAP_DATA.markers.filter(m => m.type === uid);
  return { done: items.filter(m => collected.has(m.id)).length, total: items.length };
}

function renderSidebar() {
  // Full re-render wipes the DOM, so grab which categories were expanded first
  const existingCats = categoryList.querySelectorAll('details.cat');
  const isFirstRender = existingCats.length === 0;
  const openUids = new Set();
  existingCats.forEach((det, i) => {
    if (det.open) openUids.add(MAP_DATA.categories[i].uid);
  });

  categoryList.innerHTML = '';
  MAP_DATA.categories.forEach((cat, i) => {
    const cc = catCount(cat);
    const det = document.createElement('details');
    det.className = 'cat';
    det.open = isFirstRender ? i === 0 : openUids.has(cat.uid);
    det.innerHTML = `
      <summary>
        <span class="cat-dot" style="background:${catColors[cat.uid]}"></span>
        <span>${cat.label}</span>
        <span class="cat-count">${cc.done}/${cc.total}</span>
      </summary>
      <div class="cat-actions">
        <button type="button" data-act="all" data-cat="${cat.uid}">Show all</button>
        <button type="button" data-act="none" data-cat="${cat.uid}">Hide all</button>
      </div>
    `;
    cat.types.forEach(t => {
      const tc = typeCount(t.uid);
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'type-row' + (hiddenTypes.has(t.uid) ? ' disabled' : '');
      row.dataset.type = t.uid;
      row.innerHTML = `
        <span class="type-icon" style="background:${typeColors[t.uid]}"><img src="${t.icon}" alt=""></span>
        <span class="tname">${t.label}</span>
        <span class="tcount">${tc.done}/${tc.total}</span>
      `;
      det.appendChild(row);
    });
    categoryList.appendChild(det);
  });

  // Clicking a row just flips its own hidden/shown state
  categoryList.querySelectorAll('.type-row').forEach(row => {
    row.addEventListener('click', () => {
      const uid = row.dataset.type;
      const nowDisabled = row.classList.toggle('disabled');
      if (nowDisabled) hiddenTypes.add(uid); else hiddenTypes.delete(uid);
      saveSettings();
      applyFilters();
    });
  });

  // Show all/Hide all set every type in the category at once, then re-renders
  categoryList.querySelectorAll('button[data-act]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = MAP_DATA.categories.find(c => c.uid === btn.dataset.cat);
      cat.types.forEach(t => {
        if (btn.dataset.act === 'all') hiddenTypes.delete(t.uid); else hiddenTypes.add(t.uid);
      });
      saveSettings();
      renderSidebar();
      applyFilters();
    });
  });
}

function applyFilters() {
  pinsWorld.querySelectorAll('.pin').forEach(pin => {
    const hiddenByType = hiddenTypes.has(pin.dataset.type);
    const hiddenByDone = collected.has(pin.dataset.id) && !settings.showCollected;
    pin.classList.toggle('hidden', hiddenByType || hiddenByDone);
  });
}

// Updates just the done/total counts in place
function refreshSidebarCounts() {
  categoryList.querySelectorAll('.cat').forEach((det, i) => {
    const cat = MAP_DATA.categories[i];
    det.querySelector('.cat-count').textContent = `${catCount(cat).done}/${catCount(cat).total}`;
    det.querySelectorAll('.type-row').forEach(row => {
      row.querySelector('.tcount').textContent = `${typeCount(row.dataset.type).done}/${typeCount(row.dataset.type).total}`;
    });
  });
}

showCollectedInput.checked = settings.showCollected;
showCollectedInput.addEventListener('change', (e) => {
  settings.showCollected = e.target.checked;
  saveSettings();
  applyFilters();
});

// Methods to show all and hide all item types for the entiry map
document.getElementById('showAllTypes').addEventListener('click', () => {
  hiddenTypes.clear();
  saveSettings();
  renderSidebar();
  applyFilters();
});
document.getElementById('hideAllTypes').addEventListener('click', () => {
  MAP_DATA.categories.forEach(cat => cat.types.forEach(t => hiddenTypes.add(t.uid)));
  saveSettings();
  renderSidebar();
  applyFilters();
});

// Reset the pin progress for the user across all map pins
document.getElementById('resetProgress').addEventListener('click', () => {
  if (!confirm("Reset all progress? This can't be undone.")) return;
  collected.clear();
  saveCollected();
  pinsWorld.querySelectorAll('.pin.done').forEach(pin => pin.classList.remove('done'));
  updateProgress();
  refreshSidebarCounts();
});

renderSidebar();
applyFilters();
