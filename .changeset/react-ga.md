---
"@osdk/react": major
"@osdk/react-components": patch
"@osdk/cbac-components": patch
"@osdk/create-app.template.react.beta": patch
"@osdk/create-widget.template.react.v2": patch
"@osdk/create-app.template.tutorial-todo-app.beta": patch
"@osdk/create-app.template.tutorial-todo-aip-app.beta": patch
---

GA: promote modern hooks from `@osdk/react/experimental` to the main entry, rename `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`, consolidate to a single `OsdkProvider`

#### `@osdk/react` (major)

- `@osdk/react/experimental` and `@osdk/react/experimental/admin` are removed; import the provider and hooks (`OsdkProvider`, `useOsdkObjects`, `useOsdkObject`, `useOsdkAction`, `useLinks`, `useObjectSet`, `useOsdkAggregation`, `useOsdkFunction`, `useOsdkFunctions`, `useStableObjectSet`, `useRegisterUserAgent`, `useDebouncedCallback`, devtools registry re-exports) directly from `@osdk/react`
- admin / CBAC platform hooks (`useFoundryUser`, `useCurrentFoundryUser`, `useFoundryUsersList`, `useMarkings`, `useMarkingCategories`, `useUserViewMarkings`, `useCbacBanner`, `useCbacMarkingRestrictions`) now live at `@osdk/react/platform-apis` and still require the optional `@osdk/foundry.admin` + `@osdk/foundry.core` peers
- the previous `OsdkProvider2` is now just `OsdkProvider`. The legacy `OsdkProvider` is gone, but `useOsdkClient` and `useOsdkMetadata` keep working since the new provider supplies the same `client` shape

#### `@osdk/react-components` (patch)

- update internal imports for `@osdk/react` GA — `@osdk/react/experimental` → `@osdk/react` and `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`
- bump `@osdk/react` peer range to `^1.0.0`

#### `@osdk/cbac-components` (patch)

- update internal imports for `@osdk/react` GA — `@osdk/react/experimental` → `@osdk/react` and `@osdk/react/experimental/admin` → `@osdk/react/platform-apis`

#### create-app / create-widget react templates (patch)

- swap raw / mock placeholders for typed `@osdk/react` hooks: `create-app.template.react.beta` Osdk component and `create-widget.template.react.v2` Widget actively call `useOsdkObjects` against the first `$Objects` entry; tutorial `useProjects` / `useProjectTasks` (todo-app.beta + todo-aip-app.beta) replace vague "implement with the Ontology SDK" hints with concrete commented `useOsdkObjects` / `useOsdkAction` / `useOsdkFunction` examples
- bump `@osdk/react` dep range in template `package.json.hbs` files to `^2.8.0`
