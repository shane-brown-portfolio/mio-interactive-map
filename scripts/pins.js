// Draws a marker button on the map for every pin in MAP_DATA, positioned
// using each pin's stored x/y (a fraction of the map's width/height, so
// pins land in the right spot at any zoom level).

const pinsWorld = document.getElementById('world');

// MAP_DATA only stores a type id on each marker, lookup from that id to the type's label/icon/category
const typeMeta = {};
MAP_DATA.categories.forEach(category => {
  category.types.forEach(type => {
    typeMeta[type.uid] = {
      label: type.label,
      icon: type.icon,
      categoryLabel: category.label
    };
  });
});

// Icon is optional: user-created categories are just a plain colored circle
function createPinElement(marker) {
  const meta = typeMeta[marker.type];
  const pin = document.createElement('button');
  pin.className = 'pin';
  pin.style.left = (marker.x * 100) + '%';
  pin.style.top = (marker.y * 100) + '%';
  pin.style.setProperty('--pin-color', marker.color);
  pin.title = marker.title;
  pin.dataset.id = marker.id;
  pin.dataset.type = marker.type;
  pin.innerHTML = meta.icon ? `<img src="${meta.icon}" alt="${meta.label}">` : '';
  return pin;
}

function renderPins() {
  MAP_DATA.markers.forEach(marker => pinsWorld.appendChild(createPinElement(marker)));
}

renderPins();
