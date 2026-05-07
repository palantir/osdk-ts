---
"@osdk/react-components": patch
---

Cap the Combobox popup at 320px (configurable via `--osdk-combobox-popup-max-height`) with overflow scrolling. Long option lists no longer push other UI off-screen — they scroll inside the popup. A short browser window still gets a smaller cap because the rule resolves to `min(320px, var(--available-height))`.
