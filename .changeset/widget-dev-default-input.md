---
"@osdk/widget.vite-plugin": patch
"@osdk/create-widget.template.react.v2": patch
---

Widget dev mode now uses `index.html` when the Vite config doesn't set `build.rollupOptions.input`, the same default Vite uses for builds. The widget template no longer sets `input`; projects with more than one widget still list their HTML files there.
