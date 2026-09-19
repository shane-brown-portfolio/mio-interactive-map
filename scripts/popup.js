// Clicking a pin opens a small popup with its info and a button to toggle it
// as completed. Completed pins get a `.done` class (see pins.css) so they
// read as more transparent on the map.

const popup = document.getElementById('popup');
const popupType = document.getElementById('popupType');
const popupTitle = document.getElementById('popupTitle');
const popupDesc = document.getElementById('popupDesc');
const popupComplete = document.getElementById('popupComplete');

let activeId = null;

function updateCompleteButton() {
  const isDone = collected.has(activeId);
  popupComplete.textContent = isDone ? 'Completed ✓' : 'Mark completed';
  popupComplete.classList.toggle('done', isDone);
}

function openPopup(marker, pinEl) {
  activeId = marker.id;
  const meta = typeMeta[marker.type];
  popupType.textContent = `${meta.categoryLabel} • ${meta.label}`;
  popupTitle.textContent = marker.title;
  popupDesc.innerHTML = marker.desc || ''; // desc is HTML (e.g. "<p>...</p>")
  popupDesc.hidden = !marker.desc;
  updateCompleteButton();

  popup.classList.add('open');
  const vRect = viewport.getBoundingClientRect();
  const pRect = pinEl.getBoundingClientRect();
  const pw = popup.offsetWidth, ph = popup.offsetHeight;
  let left = pRect.left - vRect.left + pRect.width / 2 - pw / 2;
  let top = pRect.top - vRect.top - ph - 10;
  left = Math.max(8, Math.min(left, vRect.width - pw - 8));
  if (top < 8) top = pRect.bottom - vRect.top + 10;
  popup.style.left = left + 'px';
  popup.style.top = top + 'px';
}

function closePopup() {
  popup.classList.remove('open');
  activeId = null;
}

pinsWorld.addEventListener('click', (e) => {
  const pinEl = e.target.closest('.pin');
  if (!pinEl) return;
  const marker = MAP_DATA.markers.find(m => m.id === pinEl.dataset.id);
  if (!marker) return;
  openPopup(marker, pinEl);
});

popupComplete.addEventListener('click', () => {
  if (!activeId) return;
  setCollected(activeId, !collected.has(activeId));
  updateCompleteButton();
});

document.getElementById('popupClose').addEventListener('click', closePopup);

// Close on any interaction outside the popup
document.addEventListener('pointerdown', (e) => {
  if (popup.classList.contains('open') && !e.target.closest('#popup')) closePopup();
});
