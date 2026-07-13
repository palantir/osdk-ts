# @osdk/vite-plugin-status-reporter

## 0.6.0

### Minor Changes

- 255154c: Migrate the remaining low-risk tail packages (the CLIs, create-app/create-widget and their template packages, vite plugins, e2e sandboxes and generated fixtures, tools, and internal test libraries) to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (twelfth increment of the repo-wide oxc migration). Each package is reformatted with oxfmt, with any newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving. Only the generator packages remain on ESLint.

### Patch Changes

- Updated dependencies [255154c]
  - @osdk/vite-plugin-superrepo@0.9.0

## 0.5.0

### Patch Changes

- Updated dependencies [57c7950]
  - @osdk/vite-plugin-superrepo@0.8.0

## 0.4.0

### Patch Changes

- Updated dependencies [4e2a115]
  - @osdk/vite-plugin-superrepo@0.7.0

## 0.3.0

### Minor Changes

- ea6bdb0: Respect superrepo service discovery.

  `vite-plugin-superrepo` now reads `.palantir/.<service>-discovery.json` files
  written by `foundry start` and installs Vite dev proxies for `ontology`,
  `typescript-functions`, `python-functions`, and `platform-api-proxy`
  automatically. The `/api` prefix is routed through the platform-API proxy;
  more-specific ontology routes (`/api/v2`) take precedence. New discovery
  files are picked up via Vite's own chokidar watcher and trigger a dev-server
  restart.

  **Breaking** (`@osdk/vite-plugin-status-reporter`): the required
  `gatewayAddrFile` option has been removed. The plugin now resolves the
  status-server URL from `.palantir/.status-server-discovery.json` by walking
  up to the nearest `foundry.yml`, matching the discovery flow the
  foundry-cli already publishes.

### Patch Changes

- Updated dependencies [ea6bdb0]
- Updated dependencies [aee7366]
  - @osdk/vite-plugin-superrepo@0.6.0

## 0.2.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

## 0.1.0

### Minor Changes

- e729602: Will be used to emit status of the app for status server
