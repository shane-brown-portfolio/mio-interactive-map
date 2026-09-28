// Lets the player drag the map around and zoom in/out with the scroll wheel,
// the +/- buttons, or the reset button. Handles loading the map image and
// sizing the map area to match it.

const viewport = document.getElementById('viewport');
const world = document.getElementById('world');
const basemap = document.getElementById('basemap');

// Size of the map image in pixels, set once it loads
let worldW = 0, worldH = 0;

// Current zoom level and map position. minScale is "fully zoomed out"
let scale = 1, minScale = 0.1, maxScale = 8, tx = 0, ty = 0;

const ZOOM_STEP = 1.3;
const START_CLICKS_IN = 1;
const MAX_CLICKS_IN = 6;

// Tracks an in-progress drag
let dragging = false, dragMoved = false, lastX = 0, lastY = 0;

// Cached viewport size/position, so zooming doesn't force the browser to
// re-measure the page on every scroll tick
let viewportRect = viewport.getBoundingClientRect();

function updateViewportRect() {
  viewportRect = viewport.getBoundingClientRect();
}

// Keep the map from being dragged past its own edges
function clamp() {
  const vw = viewportRect.width, vh = viewportRect.height;
  const ww = worldW * scale, wh = worldH * scale;
  tx = ww <= vw ? (vw - ww) / 2 : Math.min(0, Math.max(vw - ww, tx));
  ty = wh <= vh ? (vh - wh) / 2 : Math.min(0, Math.max(vh - wh, ty));
}

// Push the current position/zoom onto the map
function apply() {
  clamp();
  world.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  if (popup.classList.contains('open'))
    positionPopup();
}

// Zoom out and center so the whole map is visible
function fitView() {
  updateViewportRect();
  const vw = viewportRect.width, vh = viewportRect.height;
  const fitScale = Math.min(vw / worldW, vh / worldH) * 0.98;
  minScale = fitScale * Math.pow(ZOOM_STEP, START_CLICKS_IN);
  maxScale = minScale * Math.pow(ZOOM_STEP, MAX_CLICKS_IN);
  scale = minScale;
  tx = (vw - worldW * scale) / 2;
  ty = (vh - worldH * scale) / 2;
  apply();
}

// Zoom in/out while keeping the point under (cx, cy) in the same spot
function zoomAt(cx, cy, factor) {
  const newScale = Math.min(maxScale, Math.max(minScale, scale * factor));
  const wx = (cx - tx) / scale, wy = (cy - ty) / scale;
  scale = newScale;
  tx = cx - wx * scale;
  ty = cy - wy * scale;
  apply();
}

// Scroll/trackpad zoom, centered on the cursor. The actual zoom is batched with
// requestAnimationFrame instead of redrawing the map image once per event.
let pendingZoom = null, zoomQueued = false;
viewport.addEventListener('wheel', (e) => {
  e.preventDefault();
  pendingZoom = {
    x: e.clientX - viewportRect.left,
    y: e.clientY - viewportRect.top,
    factor: e.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP
  };
  if (!zoomQueued) {
    zoomQueued = true;
    requestAnimationFrame(() => {
      zoomQueued = false;
      if (pendingZoom)
        zoomAt(pendingZoom.x, pendingZoom.y, pendingZoom.factor);
      pendingZoom = null;
    });
  }
}, { passive: false });

// Click and drag panning
viewport.addEventListener('pointerdown', (e) => {
  dragging = true;
  dragMoved = false;
  lastX = e.clientX;
  lastY = e.clientY;

  // Capturing on a pin steals its click event, so skip it there
  if (!e.target.closest('.pin'))
    viewport.setPointerCapture(e.pointerId);

  viewport.classList.add('dragging');
});

viewport.addEventListener('pointermove', (e) => {
  if (!dragging)
    return;
  const dx = e.clientX - lastX, dy = e.clientY - lastY;
  // Small movements don't count as a drag, so a click still works
  if (Math.abs(dx) + Math.abs(dy) > 4)
    dragMoved = true;
  if (dragMoved) {
    tx += dx;
    ty += dy;
    lastX = e.clientX;
    lastY = e.clientY;
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
  zoomAt(viewportRect.width / 2, viewportRect.height / 2, ZOOM_STEP);
});
document.getElementById('zoomOut').addEventListener('click', () => {
  zoomAt(viewportRect.width / 2, viewportRect.height / 2, 1 / ZOOM_STEP);
});
document.getElementById('zoomReset').addEventListener('click', fitView);
window.addEventListener('resize', fitView);

const SIDEBAR_WIDTH = 280;
const SIDEBAR_ANIM_MS = 150;

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

// Guards against second click starting an overlapping animation
let sidebarAnimFrame = null;

function animateSidebar(sidebarEl, toggleEl, collapsed) {
  if (sidebarAnimFrame !== null)
    cancelAnimationFrame(sidebarAnimFrame);

  const wasFitted = Math.abs(scale - minScale) < 0.001;
  const fromWidth = collapsed ? SIDEBAR_WIDTH : 0;
  const toWidth = collapsed ? 0 : SIDEBAR_WIDTH;
  const tx0 = tx, ty0 = ty;
  const startLeft = viewport.getBoundingClientRect().left;
  const start = performance.now();

  function frame(now) {
    const t = Math.min(1, (now - start) / SIDEBAR_ANIM_MS);
    const width = fromWidth + (toWidth - fromWidth) * easeOutCubic(t);
    sidebarEl.style.width = width + 'px';
    toggleEl.style.left = (width + 8) + 'px';

    if (wasFitted) {
      // Resize viewport if fully zoomed out
      updateViewportRect();
      fitView();
    }
    else {
      // Hold the map's screen position fixed while closing sidebar when zoomed in
      const currentLeft = viewport.getBoundingClientRect().left;
      tx = tx0 - (currentLeft - startLeft);
      ty = ty0;
      world.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    }

    if (t < 1) {
      sidebarAnimFrame = requestAnimationFrame(frame);
    }
    else {
      sidebarAnimFrame = null;
      sidebarEl.classList.toggle('collapsed', collapsed);
      sidebarEl.style.width = '';
      toggleEl.style.left = '';
      updateViewportRect();
      apply();
    }
  }
  sidebarAnimFrame = requestAnimationFrame(frame);
}

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
