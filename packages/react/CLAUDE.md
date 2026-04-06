# @osdk/react

React hooks for type-safe Foundry ontology access. Wraps `ObservableClient` from `@osdk/client/unstable-do-not-use`.

This file covers development-time guidance only.

## Related Documentation

- [`AGENTS.md`](./AGENTS.md) -- hook usage rules, correct patterns, anti-patterns, and export listings. Read this first when working with hooks as a consumer
- [`CHANGELOG.md`](./CHANGELOG.md) -- version history and feature additions
- Observable client internals: [`packages/client/src/observable/CLAUDE.md`](../client/src/observable/CLAUDE.md) -- architecture of the subscription/cache layer that powers all hooks

## Architecture

All hooks follow the same pattern:
1. Get `observableClient` from `OsdkContext2` via `React.useContext`
2. Create a subscription via `makeExternalStore()` which bridges Observer -> `useSyncExternalStore`
3. Return memoized result object

**Two provider systems exist**:
- `OsdkProvider` (legacy, `src/OsdkContext.ts`) -- only provides `Client`, no observable support
- `OsdkProvider2` (new, `src/new/OsdkContext2.ts`) -- provides both `Client` and `ObservableClient`

New hooks go in `src/new/`. Do NOT add hooks to the root `src/` directory.

## Export Path Rules

| Import path | What belongs here | Stability |
|-------------|-------------------|-----------|
| `@osdk/react` | Legacy only: `OsdkProvider`, `useOsdkClient` | Stable |
| `@osdk/react/experimental` | All new hooks | Experimental |
| `@osdk/react/unstable-do-not-use` | Internal plumbing | Unstable |
| `@osdk/react/experimental/admin` | Platform API hooks (requires `@osdk/foundry.admin`) | Experimental |

When adding a new hook:
1. Create the hook file in `src/new/`
2. Export it from `src/public/experimental.ts`
3. Do NOT export from `src/index.ts` (that is the legacy entry point)

## Testing

- `vitest` with `pool: "forks"`, `happy-dom` environment
- Fake timers: `setTimeout`, `clearTimeout`, `Date`
- Use `@testing-library/react` with `renderHook`, `act`, and `waitFor`
- Mock `ObservableClient` with `vi.fn()`, wrap in `OsdkContext2.Provider`:
  ```tsx
  const mockClient = { applyAction: vi.fn(), ... } as unknown as ObservableClient;
  const wrapper = ({ children }) => (
    <OsdkContext2.Provider value={{ client: {} as never, observableClient: mockClient }}>
      {children}
    </OsdkContext2.Provider>
  );
  renderHook(() => useYourHook(...), { wrapper });
  ```

## Critical Conventions

- **No `useEffect`** -- use `useMemo` + `useSyncExternalStore` for subscriptions
- **No early returns for loading** -- always render through loading states (see root CLAUDE.md React section)
- **`enabled` parameter disables hooks** -- do NOT conditionally call hooks
- **Canonicalize options** -- hooks like `useOsdkObjects` call `observableClient.canonicalizeOptions()` to stabilize where/orderBy references, preventing unnecessary re-subscriptions
- **`makeExternalStoreAsync`** exists for subscriptions returning `Promise<Unsubscribable>` (e.g., `observeAggregation` with objectSet). Uses an `isActive` flag to handle cleanup-before-resolve race conditions
