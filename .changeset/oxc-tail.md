---
"@osdk/vite-plugin-status-reporter": patch
"@osdk/vite-plugin-superrepo": patch
"@osdk/vite-plugin-oac": patch
"@osdk/widget.vite-plugin": patch
"@osdk/create-widget": patch
"@osdk/create-app": patch
"@osdk/cli": patch
---

Migrate the remaining low-risk tail packages (the CLIs, create-app/create-widget and their template packages, vite plugins, e2e sandboxes and generated fixtures, tools, and internal test libraries) to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (twelfth increment of the repo-wide oxc migration). Each package is reformatted with oxfmt, with any newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving. Only the generator packages remain on ESLint.
