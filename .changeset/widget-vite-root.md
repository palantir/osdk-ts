---
"@osdk/widget.vite-plugin": patch
---

Find widget project files from Vite's root in builds and dev mode. Widgets now build and run in dev mode when the Vite config sets `root`, for example to `src`, or when Vite runs from a parent directory, as in `vite build my-widget`. The plugin searches up from the root for `foundry.config.json` and reads `package.json` and `resources.json` from the same directory.
