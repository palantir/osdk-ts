# @osdk/vite-plugin-superrepo

## 0.10.0

### Minor Changes

- 566ecd3: Add the `u` (unicode) flag to regular expressions to satisfy the require-unicode-regexp lint rule

## 0.9.0

### Minor Changes

- 255154c: Migrate the remaining low-risk tail packages (the CLIs, create-app/create-widget and their template packages, vite plugins, e2e sandboxes and generated fixtures, tools, and internal test libraries) to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (twelfth increment of the repo-wide oxc migration). Each package is reformatted with oxfmt, with any newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving. Only the generator packages remain on ESLint.

## 0.8.0

### Minor Changes

- 57c7950: Respect subpaths when proxying API requests

## 0.7.0

### Minor Changes

- 4e2a115: Fix race where a late-publishing service (e.g. python-functions waiting on ontology discovery) is silently absent from the proxy table. Vite's `server.restart()` dedups concurrent calls, so a change event arriving while a restart is in flight is dropped; chokidar can additionally swallow `add` for files not present at watch-time under `ignoreInitial: true`. The watcher now restarts in a loop until the discovery fingerprint is stable, and polls discovery state once per second as a fallback for missed `add` events.

## 0.6.0

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

- aee7366: Wire up the platform API proxy & log proxied requests

## 0.5.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

## 0.4.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

## 0.3.0

### Minor Changes

- 3390ea2: Resolve Python objectSet/object UUID references recursively and detect edit functions via output dataType when ontologyProvenance is absent

## 0.2.0

### Minor Changes

- 3bc5ff7: Implement superrepo plugin
- 0ba4c0c: Support discovering Python edit functions

## 0.2.0-beta.1

### Minor Changes

- 0ba4c0c: Support discovering Python edit functions

## 0.2.0-beta.0

### Minor Changes

- 3bc5ff7: Implement superrepo plugin

### Patch Changes

- @osdk/client@2.8.0-beta.20
