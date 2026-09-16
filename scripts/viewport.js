// Lets the player drag the map around and zoom in/out with the scroll wheel,
// the +/- buttons, or the reset button. Handles loading the map image and
// sizing the map area to match it.

const viewport = document.getElementById('viewport');
const world = document.getElementById('world');
const basemap = document.getElementById('basemap');

// Size of the map image in pixels, set once it loads
let worldW = 0, worldH = 0;

// Current zoom level and map position. minScale is "fully zoomed out"
let scale = 1, minScale = 0.1, tx = 0, ty = 0;

// Tracks an in-progress drag
let dragging = false, dragMoved = false, lastX = 0, lastY = 0;

// Keep the map from being dragged past its own edges
function clamp() {
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  const ww = worldW * scale, wh = worldH * scale;
  tx = ww <= vw ? (vw - ww) / 2 : Math.min(0, Math.max(vw - ww, tx));
  ty = wh <= vh ? (vh - wh) / 2 : Math.min(0, Math.max(vh - wh, ty));
}

// Push the current position/zoom onto the map
function apply() {
  clamp();
  world.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
}

// Zoom out and center so the whole map is visible
function fitView() {
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  minScale = Math.min(vw / worldW, vh / worldH) * 0.98;
  scale = minScale;
  tx = (vw - worldW * scale) / 2;
  ty = (vh - worldH * scale) / 2;
  apply();
}

// Zoom in/out while keeping the point under (cx, cy) in the same spot
function zoomAt(cx, cy, factor) {
  const newScale = Math.min(8, Math.max(minScale, scale * factor));
  const wx = (cx - tx) / scale, wy = (cy - ty) / scale;
  scale = newScale;
  tx = cx - wx * scale;
  ty = cy - wy * scale;
  apply();
}

// Scroll/trackpad zoom, centered on the cursor
viewport.addEventListener('wheel', (e) => {
  e.preventDefault();
  const rect = viewport.getBoundingClientRect();
  zoomAt(e.clientX - rect.left, e.clientY - rect.top, e.deltaY < 0 ? 1.2 : 1 / 1.2);
}, { passive: false });

// Click and drag panning
viewport.addEventListener('pointerdown', (e) => {
  dragging = true; dragMoved = false;
  lastX = e.clientX; lastY = e.clientY;
  viewport.setPointerCapture(e.pointerId);
  viewport.classList.add('dragging');
});

viewport.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  const dx = e.clientX - lastX, dy = e.clientY - lastY;
  // Small movements don't count as a drag, so a click still works
  if (Math.abs(dx) + Math.abs(dy) > 4) dragMoved = true;
  if (dragMoved) {
    tx += dx; ty += dy;
    lastX = e.clientX; lastY = e.clientY;
    apply();
  }
});

function endDrag() {
  dragging = false;
  viewport.classList.remove('dragging');
}
viewport.addEventListener('pointerup', endDrag);
viewport.addEventListener('pointercancel', endDrag);

// Zoom buttons, centered on the middle of the screen
document.getElementById('zoomIn').addEventListener('click', () => {
  const r = viewport.getBoundingClientRect();
  zoomAt(r.width / 2, r.height / 2, 1.3);
});
document.getElementById('zoomOut').addEventListener('click', () => {
  const r = viewport.getBoundingClientRect();
  zoomAt(r.width / 2, r.height / 2, 1 / 1.3);
});
document.getElementById('zoomReset').addEventListener('click', fitView);
window.addEventListener('resize', fitView);

// Load the map image, then size the map area to match it and fit it on screen
document.addEventListener('DOMContentLoaded', () => {
  basemap.addEventListener('load', () => {
    worldW = basemap.naturalWidth;
    worldH = basemap.naturalHeight;
    world.style.width = worldW + 'px';
    world.style.height = worldH + 'px';
    fitView();
  });
  basemap.src = MAP_DATA.image;
});
