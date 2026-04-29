# @osdk/client

Runtime client for Foundry ontology access. Creates typed clients that execute OSDK operations (object reads, actions, queries) against a Foundry stack.

## Related Documentation

- [`src/CLAUDE.md`](./src/CLAUDE.md) -- code style (prefer functions over classes)
- [`src/observable/CLAUDE.md`](./src/observable/CLAUDE.md) -- observable client architecture and related docs

## Entry Points

- `createClient(url, ontologyRid, tokenProvider)` -- standard client for ontology CRUD
- `createPlatformClient(url, tokenProvider)` -- client for non-ontology Foundry platform APIs

## Export Paths

| Path | Purpose |
|------|---------|
| `@osdk/client` | Public stable API: `createClient`, `createPlatformClient` |
| `@osdk/client/internal` | Semi-public internals (used by other `@osdk/*` packages) |
| `@osdk/client/internal-node` | Node-specific internals |
| `@osdk/client/unstable-do-not-use` | Experimental APIs consumed by `@osdk/react` |
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

## Intellisense Tests

`src/intellisense.test.ts` verifies that TypeScript IDE hints and completions work correctly (hover docs, completion suggestions, etc.). Each test case has a corresponding helper file in `src/intellisense.test.helpers/`.

When to add a new intellisense test:
- You change the public API types (new properties, changed generics, renamed fields)
- You add new type-level features (orderBy suggestions, property docs, query parameter hints)
- You want to ensure JSDoc comments surface correctly in IDE hover

To add one: create a helper file in `src/intellisense.test.helpers/{testName}.ts` with sample code, then add a test case in `intellisense.test.ts` that opens the helper and asserts on QuickInfo/Completions at specific positions.

## Key Architectural Decisions

- The `Client` caches ontology metadata but does not cache object data
- Uses `conjure-lite` for Foundry API communication, not raw fetch
