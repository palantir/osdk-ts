---
"@osdk/create-app.template.typescript-library.beta": patch
"@osdk/create-app": patch
---

Fix the TypeScript Library template so a freshly scaffolded project passes `ultracite check`: exclude package.json/tsconfig.json from oxfmt (their key order is owned by the package manager and tsc) and remove the stray blank line between imports in oxlint.config.ts
