---
"@osdk/vite-plugin-status-reporter": minor
"@osdk/vite-plugin-superrepo": minor
---

Respect superrepo service discovery.

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
