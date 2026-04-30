---
"@osdk/react": major
"@osdk/client": minor
"@osdk/react-components": patch
"@osdk/react-devtools": patch
"@osdk/cbac-components": patch
---

GA: promote modern hooks from `@osdk/react/experimental` to the main entry, rename `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`, consolidate to a single `OsdkProvider`. Promote `ObservableClient` and supporting types out of `@osdk/client/unstable-do-not-use` to a new stable `@osdk/client/observable` entry so the GA hooks no longer depend on a "do not use" entry point.

#### `@osdk/client` (minor)

- new stable entry point `@osdk/client/observable` exposes `createObservableClient`, `ObservableClient` (and its `CacheEntry`, `CacheSnapshot`, `CanonicalizedOptions`, `CanonicalizeOptionsInput`, `Observer`, `ObserveLinks`, `ObserveAggregationArgs`, `ObserveFunctionCallbackArgs`, `ObserveFunctionOptions`, `ObserveObjectCallbackArgs`, `ObserveObjectsCallbackArgs`, `ObserveObjectSetArgs`, `Unsubscribable` types), and the supporting `ActionSignatureFromDef`, `QueryParameterType`, `QueryReturnType` types
- these symbols are removed from `@osdk/client/unstable-do-not-use`; import them from `@osdk/client/observable` instead

#### `@osdk/react` (major)

- `@osdk/react/experimental` and `@osdk/react/experimental/admin` are removed; import the provider and hooks (`OsdkProvider`, `useOsdkObjects`, `useOsdkObject`, `useOsdkAction`, `useLinks`, `useObjectSet`, `useOsdkAggregation`, `useOsdkFunction`, `useOsdkFunctions`, `useStableObjectSet`, `useRegisterUserAgent`, `useDebouncedCallback`, devtools registry re-exports) directly from `@osdk/react`
- admin / CBAC platform hooks (`useFoundryUser`, `useCurrentFoundryUser`, `useFoundryUsersList`, `useMarkings`, `useMarkingCategories`, `useUserViewMarkings`, `useCbacBanner`, `useCbacMarkingRestrictions`) now live at `@osdk/react/platform-apis` and still require the optional `@osdk/foundry.admin` + `@osdk/foundry.core` peers
- the previous `OsdkProvider2` is now just `OsdkProvider`. The legacy `OsdkProvider` is gone, but `useOsdkClient` and `useOsdkMetadata` keep working since the new provider supplies the same `client` shape
- `useOsdkClient2` is removed; the unified `useOsdkClient` now reads from the modern context (same `client` shape)
- `peerDependencies` on `@osdk/api` and `@osdk/client` bump from `^2.8.0` to `^2.14.0` so `@osdk/react@1.0` cannot install against a `@osdk/client` that lacks the new `./observable` entry

#### `@osdk/react-components` (patch)

- update internal imports for `@osdk/react` GA — `@osdk/react/experimental` → `@osdk/react` and `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`
- update `QueryParameterType` import from `@osdk/client/unstable-do-not-use` → `@osdk/client/observable`
- bump `@osdk/react` peer range to `^1.0.0`

#### `@osdk/react-devtools` (patch)

- update observable-related imports from `@osdk/client/unstable-do-not-use` → `@osdk/client/observable`

#### `@osdk/cbac-components` (patch)

- update internal imports for `@osdk/react` GA — `@osdk/react/experimental` → `@osdk/react` and `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`

#### Migration

For consumers upgrading from `@osdk/react@0.x`:

- `import { ... } from "@osdk/react/experimental"` → `import { ... } from "@osdk/react"`
- `import { ... } from "@osdk/react/experimental/admin"` → `import { ... } from "@osdk/react/platform-apis"` (still requires the optional `@osdk/foundry.admin` + `@osdk/foundry.core` peers)
- `<OsdkProvider2 ...>` → `<OsdkProvider ...>` (the legacy `OsdkProvider` is removed; the modern provider takes its name)
- `useOsdkClient2()` → `useOsdkClient()` (the unified hook reads from the modern context — same `client` shape, no API change at the call site)
- bump `@osdk/client` and `@osdk/api` to `^2.14.0` to satisfy the new peer ranges

For consumers reaching directly into `@osdk/client/unstable-do-not-use` for observable APIs:

- `import { createObservableClient, ObservableClient, ... } from "@osdk/client/unstable-do-not-use"` → `import { ... } from "@osdk/client/observable"`
- the symbols moved: `createObservableClient`, `ObservableClient`, `CacheEntry`, `CacheSnapshot`, `CanonicalizedOptions`, `CanonicalizeOptionsInput`, `Observer`, `ObserveLinks`, `ObserveAggregationArgs`, `ObserveFunctionCallbackArgs`, `ObserveFunctionOptions`, `ObserveObjectCallbackArgs`, `ObserveObjectsCallbackArgs`, `ObserveObjectSetArgs`, `Unsubscribable`, `ActionSignatureFromDef`, `QueryParameterType`, `QueryReturnType`
