---
"@osdk/widget.vite-plugin": patch
"@osdk/widget.client": patch
"@osdk/widget.api": patch
---

Add a mapTileLayer parameter whose value is a renderable MapLibre style, so widgets can pass it to a map without translating any fields. The new `MapTileLayerStyle` type is defined in terms of MapLibre's own style specification. `@maplibre/maplibre-gl-style-spec` is a regular dependency of `@osdk/widget.api`, so consumers receive the required types automatically when installing the package.
