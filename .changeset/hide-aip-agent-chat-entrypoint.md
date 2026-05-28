---
"@osdk/react-components": minor
---

Hide the experimental `aip-agent-chat` subpath export and drop the `@osdk/aip-core` peer dependency. `@osdk/aip-core` is currently unpublished, which caused installs of `@osdk/react-components` to fail without `--legacy-peer-deps`. The source for `AipAgentChat` remains in-tree and the entrypoint will be restored once `@osdk/aip-core` ships publicly.
