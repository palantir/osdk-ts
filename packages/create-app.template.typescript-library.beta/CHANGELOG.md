# @osdk/create-app.template.typescript-library.beta

## 2.51.0

## 2.50.0

### Minor Changes

- 5e380f2: Template scripts express every check as a standard lint/typecheck/test task instead of a bespoke `check` script, so a scaffolded project's verification runs under the same tasks its CI already runs. The TypeScript Library template folds formatting into `lint` (`ultracite check`); the React template gains a `typecheck` script (`tsc --noEmit`). Both drop their standalone `check` script.
- a754871: Reverting "Lowercase generated package.json name fields" (#3681) due to unintended side effects.

## 2.49.0

### Minor Changes

- 98c7343: Fix the TypeScript Library template so a freshly scaffolded project passes `ultracite check`: exclude package.json/tsconfig.json from oxfmt (their key order is owned by the package manager and tsc) and remove the stray blank line between imports in oxlint.config.ts

## 2.48.0

### Minor Changes

- 079b488: Lowercase the generated package.json name field so scaffolded projects with uppercase names are npm-publishable

## 2.47.0

## 2.46.0

## 2.45.0

## 2.44.0

## 2.43.0

## 2.42.0

## 2.41.0

## 2.40.0

## 2.39.0

## 2.38.0
