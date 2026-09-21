---
"@osdk/widget.vite-plugin": patch
"@osdk/widget.client": patch
"@osdk/widget.api": patch
---

Add a mapTileLayer parameter with a `{ styleJsonUrl: string }` value that widgets can pass to a compatible map renderer. Keep the API independent of MapLibre and Mapbox packages; the renderer loads the style document and its resources.
