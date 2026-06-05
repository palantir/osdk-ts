---
"@osdk/react-components": patch
"@osdk/react-components-styles": patch
---

Show pressed and toggled-on states on FilterList header buttons (search, remove, overflow) so users get visible feedback when clicking or when the button is selected. The pressed/toggled background uses the theme-aware active-surface color so the state is clearly visible in both light and dark mode. The Keeping/Excluding mode picker reads as a single dropdown control whose selected (Excluding) state reuses the default trigger styling and is signalled by the exclude icon and label alone, keeping the two states visually consistent.
