# MIO: Memories in Orbit Tracker

An interactive, browser-based **map and collectible tracker** for *MIO: Memories in Orbit*, letting players track their progress finding upgrades, key items, abilities, mods, lore, and more across the game's world.

## Introduction

This project overlays a pin-based tracker on top of the game's map image, featuring:

- Pins for every collectible, upgrade, NPC, boss, and point of interest
- Per-item completion tracking with a running progress bar
- Category/type filtering from the sidebar
- A built-in editor for adding, moving, and re-categorizing pins directly on the map

## Features

- **Pan & zoom map** with draggable pins
- **Sidebar filtering** by category and item type, with per-category "show all" / "hide all"
- **Progress tracking**: mark pins as collected, with counts per category/type and an overall progress bar
- **Popups** with title, subtitle, and Markdown-formatted description for each pin
- **Edit Mode**: add new pins, drag existing ones, edit their details, or create new categories/item types on the fly
- **Export Data**: dump the current map data (base data + your local edits merged) as a ready-to-use `data.js`
- All progress and edits persist locally via `localStorage`

## Installation

1. Clone or download the repository
2. Open `index.html` in your browser

> No build steps or dependencies required

## Usage

- Pan by dragging the map, zoom with the `+`/`−` controls or your scroll wheel
- Click a pin to open its popup, then use **Mark completed** to track progress
- Use the sidebar to show/hide pins by category or item type, and toggle whether collected pins stay visible
- **Reset all progress** clears your collected state (asks for confirmation first)

### Edit Mode

- Toggle **Edit Mode**, then click anywhere on the map to drop a new pin
- Drag any pin to reposition it
- Use the popup to set a pin's title, subtitle, description, category, and item type, or create new ones inline
- **Export Data** produces an updated `data.js` containing your changes, for committing back into the project

## Project Structure

### Core Files

- `index.html` - Page layout and structure
- `data.js` - Base map data: categories, item types, and marker positions
- `map.png` - The game's map image

### Scripts

- `edits.js` - Merges locally saved edits into `MAP_DATA` (loads right after `data.js`)
- `pins.js` - Renders a pin element for every marker
- `progress.js` - Tracks and persists which pins are marked collected
- `sidebar.js` - Category/type filter list and its counts
- `popup.js` - Pin detail popup, including Markdown rendering
- `viewport.js` - Pan/zoom handling for the map
- `editMode.js` - Add/move/edit/delete pins and categories, plus data export

### Styling

- `base.css`, `header.css` - Page layout and header
- `progress-bar.css` - Header progress bar
- `sidebar.css` - Sidebar filter list
- `map.css`, `pins.css` - Map viewport and pin markers
- `popup.css` - Pin detail popup

## Dependencies

This project uses no external libraries except [marked](https://github.com/markedjs/marked) (vendored in `scripts/vendor/`) for rendering Markdown in pin descriptions.

Built entirely with:
- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## Troubleshooting

**Progress or edits disappeared**
- Progress and edits are stored in `localStorage`, scoped to the browser/profile you're using, so clearing site data or switching browsers won't carry them over

**A pin's icon isn't showing**
- User-created item types have no icon by default and render as a plain colored circle

## Acknowledgements

- **Game:** *MIO: Memories in Orbit*
