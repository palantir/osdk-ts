---
"@osdk/create-app.template.typescript-library.beta": patch
"@osdk/create-app.template.react.beta": patch
"@osdk/create-app": patch
---

Template scripts express every check as a standard lint/typecheck/test task instead of a bespoke `check` script, so a scaffolded project's verification runs under the same tasks its CI already runs. The TypeScript Library template folds formatting into `lint` (`ultracite check`); the React template gains a `typecheck` script (`tsc --noEmit`). Both drop their standalone `check` script.
