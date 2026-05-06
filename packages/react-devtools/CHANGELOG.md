# @osdk/react-devtools

## 0.5.0

### Minor Changes

- 203331e: GA: promote modern hooks from `@osdk/react/experimental` to the main entry, rename `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`, consolidate to a single `OsdkProvider`. Promote `ObservableClient` and supporting types out of `@osdk/client/unstable-do-not-use` to a new stable `@osdk/client/observable` entry so the GA hooks no longer depend on a "do not use" entry point. The previous import paths and symbol names are kept as `@deprecated` shims so 0.x consumers can upgrade without code changes.

  #### `@osdk/client` (minor)
  - new stable entry point `@osdk/client/observable` exposes `createObservableClient`, `ObservableClient` (and its `CacheEntry`, `CacheSnapshot`, `CanonicalizedOptions`, `CanonicalizeOptionsInput`, `Observer`, `ObserveLinks`, `ObserveAggregationArgs`, `ObserveFunctionCallbackArgs`, `ObserveFunctionOptions`, `ObserveObjectCallbackArgs`, `ObserveObjectsCallbackArgs`, `ObserveObjectSetArgs`, `Unsubscribable` types), and the supporting `ActionSignatureFromDef`, `QueryParameterType`, `QueryReturnType` types
  - these symbols are still re-exported from `@osdk/client/unstable-do-not-use` as `@deprecated` shims; new code should import from `@osdk/client/observable`

  #### `@osdk/react` (minor)
  - `OsdkProvider`, `useOsdkObjects`, `useOsdkObject`, `useOsdkAction`, `useLinks`, `useObjectSet`, `useOsdkAggregation`, `useOsdkFunction`, `useOsdkFunctions`, `useStableObjectSet`, `useRegisterUserAgent`, `useDebouncedCallback`, devtools registry re-exports are now exported directly from `@osdk/react`
  - admin / CBAC platform hooks (`useFoundryUser`, `useCurrentFoundryUser`, `useFoundryUsersList`, `useMarkings`, `useMarkingCategories`, `useUserViewMarkings`, `useCbacBanner`, `useCbacMarkingRestrictions`) now live at `@osdk/react/platform-apis` and still require the optional `@osdk/foundry.admin` + `@osdk/foundry.core` peers
  - the previous `OsdkProvider2` is now just `OsdkProvider`. The legacy `OsdkProvider` body is gone, but `useOsdkClient` and `useOsdkMetadata` keep working since the new provider supplies the same `client` shape
  - `<OsdkProvider>` no longer accepts an `observableClient` prop. The provider always derives its `ObservableClient` from `client` so the two cannot diverge. Tests that need to stub the observable layer should import `TestOsdkProvider` from `@osdk/react/testing`. `OsdkProvider2` (the deprecated alias) inherits this — it also no longer accepts `observableClient`
  - `useOsdkClient2` is unified into `useOsdkClient`; the unified hook now reads from the modern context (same `client` shape)
  - `peerDependencies` on `@osdk/api` and `@osdk/client` resolve to `^2.15.0` so `@osdk/react@2.15` cannot install against a `@osdk/client` that lacks the new `./observable` entry

  #### `@osdk/react-components` (patch)
  - update internal imports for `@osdk/react` GA — `@osdk/react/experimental` → `@osdk/react` and `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`
  - update `QueryParameterType` import from `@osdk/client/unstable-do-not-use` → `@osdk/client/observable`
  - bump `@osdk/react` peer range to `^2.15.0`

  #### `@osdk/react-devtools` (patch)
  - update observable-related imports from `@osdk/client/unstable-do-not-use` → `@osdk/client/observable`

  #### `@osdk/cbac-components` (patch)
  - update internal imports for `@osdk/react` GA — `@osdk/react/experimental` → `@osdk/react` and `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`

  #### Compatibility shims

  These keep working in `@osdk/react@2.15` and `@osdk/client@2.15`, marked `@deprecated` so editors surface a strikethrough:
  - `import { ... } from "@osdk/react/experimental"` re-exports everything now exported from `@osdk/react`, plus `OsdkProvider as OsdkProvider2` and `useOsdkClient as useOsdkClient2`
  - `import { ... } from "@osdk/react/experimental/admin"` re-exports everything now exported from `@osdk/react/platform-apis`
  - `import { createObservableClient, ObservableClient, ... } from "@osdk/client/unstable-do-not-use"` re-exports the symbols now in `@osdk/client/observable`
  - `import { ... } from "@osdk/react/experimental/aip"` is unchanged — AIP is still in beta

  These shims will be removed in a future major.

  #### Migration

  For consumers upgrading from `@osdk/react@0.x`:
  - `import { ... } from "@osdk/react/experimental"` → `import { ... } from "@osdk/react"`
  - `import { ... } from "@osdk/react/experimental/admin"` → `import { ... } from "@osdk/react/platform-apis"` (still requires the optional `@osdk/foundry.admin` + `@osdk/foundry.core` peers)
  - `<OsdkProvider2 ...>` → `<OsdkProvider ...>` (the modern provider takes the bare name)
  - if you were passing `observableClient={...}` to `<OsdkProvider>` or `<OsdkProvider2>` (in tests), import `TestOsdkProvider` from `@osdk/react/testing` and use that instead — production code does not need to change
  - `useOsdkClient2()` → `useOsdkClient()` (the unified hook reads from the modern context — same `client` shape, no API change at the call site)
  - bump `@osdk/client` and `@osdk/api` to `^2.15.0` to satisfy the new peer ranges

  For consumers reaching directly into `@osdk/client/unstable-do-not-use` for observable APIs:
  - `import { createObservableClient, ObservableClient, ... } from "@osdk/client/unstable-do-not-use"` → `import { ... } from "@osdk/client/observable"`
  - the symbols moved: `createObservableClient`, `ObservableClient`, `CacheEntry`, `CacheSnapshot`, `CanonicalizedOptions`, `CanonicalizeOptionsInput`, `Observer`, `ObserveLinks`, `ObserveAggregationArgs`, `ObserveFunctionCallbackArgs`, `ObserveFunctionOptions`, `ObserveObjectCallbackArgs`, `ObserveObjectsCallbackArgs`, `ObserveObjectSetArgs`, `Unsubscribable`, `ActionSignatureFromDef`, `QueryParameterType`, `QueryReturnType`

## 0.4.0

### Minor Changes

- 645363b: fix devtools: errors panel surfaces console.error, uncaught errors, and unhandled rejections; compute tab classifies success-without-usage as its own state instead of failure; pause network blocks all OSDK traffic regardless of recording; rename getCacheEntries to loadCacheEntries (deprecated alias kept); add OsdkAppErrorBoundary for production render-error capture; emit OSDK_PAUSE_BLOCK MonitorEvent; bind unwrapped prototype methods on the wrapped ObservableClient so callers (e.g. canonicalizeOptions, which uses private fields) don't fail with "Receiver must be an instance of class ObservableClientImpl".
- 3e8db28: add devtools registration, vite plugin, and e2e wiring

## 0.3.0

### Minor Changes

- 41b94dc: implement v0 of react devtools panel

## 0.2.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

## 0.1.0

### Minor Changes

- 89def41: patch bump associated with BlueprintJS upgrade
