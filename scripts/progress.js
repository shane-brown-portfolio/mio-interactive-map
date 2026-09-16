// Drives the progress bar in the top header:
//    How many pins the player has collected out of the total

const collected = new Set();

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

updateProgress();
