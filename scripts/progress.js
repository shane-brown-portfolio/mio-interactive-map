// Drives the progress bar in the top header:
//    How many pins the player has collected out of the total

function loadCollected() {
  try {
    return new Set(JSON.parse(localStorage.getItem('mio-collected')) || []);
  } catch (e) {
    return new Set();
  }
}
function saveCollected() {
  localStorage.setItem('mio-collected', JSON.stringify(Array.from(collected)));
}

const collected = loadCollected();

const progressFill = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');

function totalPinCount() {
  return MAP_DATA.markers.length;
}

function updateProgress() {
  const total = totalPinCount();
  const done = collected.size;
  progressFill.style.width = (total ? (done / total) * 100 : 0) + '%';
  progressLabel.textContent = `${done} / ${total}`;
}

// Toggles a marker's collected state, syncs its pin's look, and persists the change
function setCollected(id, isCollected) {
  if (isCollected) collected.add(id); else collected.delete(id);
  saveCollected();
  const pin = pinsWorld.querySelector(`.pin[data-id="${id}"]`);
  if (pin) pin.classList.toggle('done', isCollected);
  updateProgress();
}

pinsWorld.querySelectorAll('.pin').forEach(pin => {
  if (collected.has(pin.dataset.id)) pin.classList.add('done');
});

updateProgress();
