---
"@osdk/react-components": patch
"@osdk/react-devtools": patch
"@osdk/cbac-components": patch
"@osdk/widget.vite-plugin": patch
---

Extend oxfmt formatting to css, scss, and html in oxc-migrated packages. These file types were previously left unformatted (dprint had no css/html plugin); they are now covered by oxfmt and reformatted accordingly. yaml stays excluded because the only yaml in migrated packages is mustache-template documentation that oxfmt would corrupt.
