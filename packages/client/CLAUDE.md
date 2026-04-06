# @osdk/client

Runtime client for Foundry ontology access. Creates typed clients that execute OSDK operations (object reads, actions, queries) against a Foundry stack.

## Entry Points

- `createClient(url, ontologyRid, tokenProvider)` -- standard client for ontology CRUD
- `createPlatformClient(url, tokenProvider)` -- client for non-ontology Foundry platform APIs
- `createObservableClient(client)` -- reactive wrapper (see `src/observable/`)

## Export Paths

| Path | Purpose |
|------|---------|
| `@osdk/client` | Public stable API: `createClient`, `createPlatformClient` |
| `@osdk/client/internal` | Semi-public internals (used by other `@osdk/*` packages) |
| `@osdk/client/internal-node` | Node-specific internals |
| `@osdk/client/unstable-do-not-use` | ObservableClient and types consumed by `@osdk/react` |
| `@osdk/client/*` (wildcard) | Maps to `src/public/*.ts` |

When adding new public API, add a barrel export in the appropriate `src/public/*.ts` file and update `package.json` exports if adding a new sub-path.

## Code Style

- **Prefer functions over classes** for tree-shaking (see `src/CLAUDE.md`)
- **`process.env.NODE_ENV` guards**: Debug/logging code MUST be wrapped in `if (process.env.NODE_ENV !== "production")` blocks. Babel strips these in production builds. Do NOT extract these checks into helper functions or the dead-code elimination will break
- **No `console.log`**: ESLint errors on it. Use the pino-based logger pattern in `src/logger/`

## Testing

- `vitest` with `pool: "forks"` (NOT threads -- required for process isolation)
- Fake timers enabled for `setTimeout`, `clearTimeout`, `Date`
- Run: `pnpm turbo test --filter=@osdk/client` or `pnpm --dir packages/client vitest run`
- Test ontology stubs: `@osdk/client.test.ontology` package provides mock ontology definitions

## Key Architectural Decisions

- The `Client` is stateless -- it holds configuration but no cache. State lives in `ObservableClient`'s `Store`
- `sideEffects: false` in package.json -- all code must be tree-shakeable
- Uses `conjure-lite` for Foundry API communication, not raw fetch
- `@wry/trie` powers efficient canonicalization of query parameters in the observable layer
