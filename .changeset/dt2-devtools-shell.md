---
"@osdk/react-devtools": patch
---

rework the devtools shell to render base tabs, add a close control, and always boot closed

• the panel renders its tab bar and body from the base-tab list instead of a hardcoded set
• add an explicit close (X) control alongside minimize, and always start collapsed on page load
• remove the old compute, intercept, and debugging tabs and lift in-panel tooltips above the panel
