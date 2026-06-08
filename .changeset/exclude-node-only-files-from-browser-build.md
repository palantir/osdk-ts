---
"@osdk/api": patch
"@osdk/client": minor
"@osdk/react": patch
---

Stop shipping Node-only test infrastructure in the browser builds of `@osdk/api` and `@osdk/client`.

- `@osdk/api`: the `__quickinfo_snapshot__/` test harness (formerly `probeUtils.ts` + `probes/*.ts`) is renamed under the existing `testUtils.` prefix convention so the transpile tool drops it from every build target. Pure test infrastructure; no runtime surface change.
- `@osdk/client`: the `./internal-node` subpath export is removed. The TypeScript-language-server harness it pointed at (`tsserver.ts`) has moved to a new private workspace package, `@osdk/shared.test.intellisense`, which both `@osdk/client` and `@osdk/react` consume as a dev dependency. This eliminates the `node:events` / `node:fs/promises` / `node:path` imports from the browser build and removes the project-internal subpath from the published client API.
