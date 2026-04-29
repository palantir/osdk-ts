---
"@osdk/react": major
"@osdk/react-components": patch
"@osdk/cbac-components": patch
---

GA: promote modern hooks from `@osdk/react/experimental` to the main entry, rename `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`, consolidate to a single `OsdkProvider`

#### `@osdk/react` (major)

- `@osdk/react/experimental` and `@osdk/react/experimental/admin` are removed; import the provider and hooks (`OsdkProvider`, `useOsdkObjects`, `useOsdkObject`, `useOsdkAction`, `useLinks`, `useObjectSet`, `useOsdkAggregation`, `useOsdkFunction`, `useOsdkFunctions`, `useStableObjectSet`, `useRegisterUserAgent`, `useDebouncedCallback`, devtools registry re-exports) directly from `@osdk/react`
- admin / CBAC platform hooks (`useFoundryUser`, `useCurrentFoundryUser`, `useFoundryUsersList`, `useMarkings`, `useMarkingCategories`, `useUserViewMarkings`, `useCbacBanner`, `useCbacMarkingRestrictions`) now live at `@osdk/react/platform-apis` and still require the optional `@osdk/foundry.admin` + `@osdk/foundry.core` peers
- the previous `OsdkProvider2` is now just `OsdkProvider`. The legacy `OsdkProvider` is gone, but `useOsdkClient` and `useOsdkMetadata` keep working since the new provider supplies the same `client` shape
- `useOsdkClient2` is removed; the unified `useOsdkClient` now reads from the modern context (same `client` shape)

#### `@osdk/react-components` (patch)

- update internal imports for `@osdk/react` GA — `@osdk/react/experimental` → `@osdk/react` and `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`
- bump `@osdk/react` peer range to `^1.0.0`

#### `@osdk/cbac-components` (patch)

- update internal imports for `@osdk/react` GA — `@osdk/react/experimental` → `@osdk/react` and `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`
