---
"@osdk/widget.vite-plugin": patch
---

Fail widget builds that set Vite's `base` to anything other than `/`, with an error saying how to fix it. Foundry serves widget files from the root path, so other bases can't load.
