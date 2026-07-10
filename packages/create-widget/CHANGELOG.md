# @osdk/create-widget

## 3.40.0

### Minor Changes

- 164ed08: Update dev mode guidance
- 566ecd3: Add the `u` (unicode) flag to regular expressions to satisfy the require-unicode-regexp lint rule

### Patch Changes

- @osdk/generator-utils@2.43.0

## 3.39.0

### Minor Changes

- 0db78bb: Update React template OSDK dependency ranges.
- cbcdce1: Re-enable the oxlint rules the `**/*.{js,mjs,cjs}` override had disabled and delete the override, so JS build scripts, bin shims, and config files are held to the same ruleset as TypeScript. Changes are behavior-preserving (lint/format fixes to build tooling only).
- 255154c: Migrate the remaining low-risk tail packages (the CLIs, create-app/create-widget and their template packages, vite plugins, e2e sandboxes and generated fixtures, tools, and internal test libraries) to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (twelfth increment of the repo-wide oxc migration). Each package is reformatted with oxfmt, with any newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving. Only the generator packages remain on ESLint.

### Patch Changes

- @osdk/generator-utils@2.42.0

## 3.38.0

### Patch Changes

- @osdk/generator-utils@2.41.0

## 3.37.0

### Patch Changes

- @osdk/generator-utils@2.40.0

## 3.36.0

### Patch Changes

- @osdk/generator-utils@2.39.0

## 3.35.0

### Patch Changes

- @osdk/generator-utils@2.38.0

## 3.34.0

### Patch Changes

- @osdk/generator-utils@2.37.0

## 3.33.0

### Patch Changes

- @osdk/generator-utils@2.36.0

## 3.32.0

### Patch Changes

- @osdk/generator-utils@2.35.0

## 3.31.0

### Patch Changes

- @osdk/generator-utils@2.34.0

## 3.30.0

### Patch Changes

- @osdk/generator-utils@2.33.0

## 3.29.0

### Patch Changes

- @osdk/generator-utils@2.32.0

## 3.28.0

### Patch Changes

- @osdk/generator-utils@2.31.0

## 3.27.0

### Patch Changes

- @osdk/generator-utils@2.30.0

## 3.26.0

### Patch Changes

- @osdk/generator-utils@2.29.0

## 3.25.0

### Patch Changes

- @osdk/generator-utils@2.28.0

## 3.24.0

### Patch Changes

- @osdk/generator-utils@2.27.0

## 3.23.0

### Patch Changes

- @osdk/generator-utils@2.26.0

## 3.22.0

### Patch Changes

- @osdk/generator-utils@2.25.0

## 3.21.0

### Patch Changes

- @osdk/generator-utils@2.24.0

## 3.20.0

### Patch Changes

- @osdk/generator-utils@2.23.0

## 3.19.0

### Patch Changes

- @osdk/generator-utils@2.22.0

## 3.18.0

### Patch Changes

- @osdk/generator-utils@2.21.0

## 3.17.0

### Patch Changes

- @osdk/generator-utils@2.20.0

## 3.16.0

### Patch Changes

- @osdk/generator-utils@2.19.0

## 3.15.0

### Patch Changes

- @osdk/generator-utils@2.18.0

## 3.14.0

### Patch Changes

- @osdk/generator-utils@2.17.0

## 3.13.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

### Patch Changes

- Updated dependencies [56c5630]
  - @osdk/generator-utils@2.16.0

## 3.12.0

### Patch Changes

- @osdk/generator-utils@2.15.0

## 3.11.0

### Minor Changes

- bab1421: Add check for bundling to ensure entry points work even if dev deps change.

### Patch Changes

- @osdk/generator-utils@2.14.0

## 3.10.0

### Patch Changes

- @osdk/generator-utils@2.13.0

## 3.9.0

### Patch Changes

- @osdk/generator-utils@2.12.0

## 3.8.0

### Patch Changes

- @osdk/generator-utils@2.11.0

## 3.7.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

### Patch Changes

- Updated dependencies [f01a8f4]
  - @osdk/generator-utils@2.10.0

## 3.6.0

### Minor Changes

- 4794c87: We are fixing unexported devDependencies by adding them as dependencies

### Patch Changes

- @osdk/generator-utils@2.9.0

## 3.5.0

### Minor Changes

- 322c5bc: Simulated release
- 35f2f1a: Add Media inputs/outputs for Queries

## 3.5.0-beta.32

## 3.5.0-beta.31

## 3.5.0-beta.30

## 3.5.0-beta.29

## 3.5.0-beta.28

## 3.5.0-beta.27

## 3.5.0-beta.26

## 3.5.0-beta.25

## 3.5.0-beta.24

## 3.5.0-beta.23

## 3.5.0-beta.22

## 3.5.0-beta.21

## 3.5.0-beta.20

## 3.5.0-beta.19

## 3.5.0-beta.18

## 3.5.0-beta.17

## 3.5.0-beta.16

## 3.5.0-beta.15

## 3.5.0-beta.14

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

## 3.5.0-beta.13

## 3.5.0-beta.12

## 3.5.0-beta.11

## 3.5.0-beta.10

## 3.5.0-beta.9

## 3.5.0-beta.8

## 3.5.0-beta.7

## 3.5.0-beta.6

## 3.5.0-beta.5

## 3.5.0-beta.4

## 3.5.0-beta.3

## 3.5.0-beta.2

## 3.4.0-beta.14

## 3.4.0-beta.13

## 3.4.0-beta.12

## 3.4.0-beta.11

## 3.4.0-beta.10

## 3.4.0-beta.9

## 3.4.0-beta.8

## 3.4.0-beta.7

## 3.4.0-beta.6

## 3.4.0-beta.5

## 3.4.0-beta.4

## 3.4.0-beta.3

## 3.4.0-beta.2

### Minor Changes

- 265b09b: Update generated `.npmrc` file

## 3.3.0-beta.11

## 3.3.0-beta.10

## 3.3.0-beta.9

## 3.3.0-beta.8

## 3.3.0-beta.7

## 3.3.0-beta.6

## 3.3.0-beta.5

## 3.3.0-beta.4

## 3.3.0-beta.3

## 3.3.0-beta.2

## 3.2.5

## 3.2.4

## 3.2.3

## 3.2.2

## 3.2.1

## 3.2.0

### Patch Changes

- 322c5bc: Simulated release

## 3.2.0-beta.5

## 3.2.0-beta.4

## 3.2.0-beta.3

## 3.2.0-beta.2

## 3.1.0-beta.5

## 3.1.0-beta.4

### Minor Changes

- 544bfda: Update widget bootstrapping instructions

## 3.1.0-beta.3

## 3.1.0-beta.2

## 3.0.0-beta.6

## 3.0.0-beta.5

### Minor Changes

- f8db93d: improve media upload (beta)

## 3.0.0-beta.4

## 3.0.0-beta.3

## 2.2.0-beta.2

## 2.1.0

### Patch Changes

- 322c5bc: Simulated release
- 21e33a5: Upgrade consola to 3.4.0
- 317b555: Release
- ffc1e6e: Add --repository option to create-widget

## 2.1.0-beta.11

## 2.1.0-beta.10

### Minor Changes

- 317b555: Release

## 2.1.0-beta.9

## 2.1.0-beta.8

## 2.1.0-beta.7

## 2.1.0-beta.6

### Minor Changes

- ffc1e6e: Add --repository option to create-widget

## 2.1.0-beta.5

## 2.1.0-beta.4

## 2.1.0-beta.3

### Minor Changes

- 21e33a5: Upgrade consola to 3.4.0

## 2.1.0-beta.2

## 2.0.0

### Minor Changes

- 776ae5d: Initial create widget CLI
- ff1ece7: Update create-widget template README and autoVersion strategy
- 314ae66: Move from "views" naming to "widgets"
- 255a8f1: Add minimal React widget template without OSDK
- 14bb6d2: Address comments on new minimal widget template
- 83e7ea3: Move from a single-widget to widget set model for custom widget libraries
- d430386: Rename unstable create-widget --widgetSetRid arg to --widgetSet

## 2.0.0-beta.16

### Minor Changes

- 255a8f1: Add minimal React widget template without OSDK
- 14bb6d2: Address comments on new minimal widget template

## 2.0.0-beta.15

## 2.0.0-beta.14

## 2.0.0-beta.13

### Minor Changes

- ff1ece7: Update create-widget template README and autoVersion strategy

## 2.0.0-beta.12

## 2.0.0-beta.11

### Minor Changes

- d430386: Rename unstable create-widget --widgetSetRid arg to --widgetSet

## 2.0.0-beta.10

## 2.0.0-beta.9

## 2.0.0-beta.8

### Minor Changes

- 83e7ea3: Move from a single-widget to widget set model for custom widget libraries

## 2.0.0-beta.7

## 2.0.0-beta.6

### Minor Changes

- 314ae66: Move from "views" naming to "widgets"

## 2.0.0-beta.5

## 2.0.0-beta.4

## 0.3.0-beta.3

## 0.3.0-beta.2

## 0.3.0-beta.1

## 0.2.0

### Minor Changes

- 776ae5d: Initial create widget CLI
