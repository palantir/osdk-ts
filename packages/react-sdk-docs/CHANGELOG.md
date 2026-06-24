# @osdk/react-sdk-docs

## 0.10.0

### Minor Changes

- 58b3367: Migrate @osdk/language-models, @osdk/react-sdk-docs, and @osdk/typescript-sdk-docs to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (second increment of the repo-wide oxc migration)

## 0.9.0

### Minor Changes

- 5ff7aa5: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.61.0` to `2.63.0`. The OntologyScenarios endpoints now expose a `preview` query-param slot, so `createScenario` and the `EXPERIMENTAL_ScenarioClient` read methods pass `{ preview: true }` directly instead of relying on a fetch-level URL rewrite.

## 0.8.0

### Minor Changes

- 8965bdf: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

## 0.7.0

### Minor Changes

- 60aff19: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

## 0.6.0

### Minor Changes

- bb0817b: Fix misleading patterns in @osdk/react and @osdk/react-components docs that were confusing downstream coding agents and humans alike.

  • react-sdk-docs `reactProviderSetup` and `clientSetup` snippets now pass a real ontology RID placeholder to `createClient` instead of `{{{packageName}}}` (which resolves to the npm SDK package name, not the ontology RID)
  • Stop pretending `$` is exported from the user's SDK — `$` is a local alias users sometimes create; docs now use `client(Type)` directly, matching the pattern already used in getting-started.md / cache-management.md
  • Standardize the SDK placeholder on `@my/osdk` across all docs (was a mix of `@my/osdk`, `@YourApp/sdk`, `@your-app/sdk`) and add a `:::note About @my/osdk` callout to each react-components doc that imports from it
  • Fix several broken/missing imports in code snippets: `cache-management.md` setup block was using `createClient` / `createObservableClient` / `authProvider` without importing or defining any of them; `advanced-queries.md` derived-property fragments were missing `Employee` and `useOsdkObjects` imports
  • Fix `querying-data.md` self-referential typo "_Stable - available from both `@osdk/react` and `@osdk/react`_" → second should be `@osdk/react/experimental`
  • Fix `advanced-queries.md` duplicate `const { data }` declaration that would not compile
  • Remove unused `useOsdkObject` import from one `advanced-queries.md` snippet
  • Install commands now show npm / pnpm / yarn alternatives with a tip block recommending users skip the step if their tooling already installs dependencies — fixes Pilot running `pnpm` in npm-managed projects and the install-race-with-harness issue

## 0.5.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

## 0.4.0

### Minor Changes

- f522327: Render the object-action-parameter alternative hint as a block comment so the trailing comma the template appends after non-last entries isn't swallowed by a line comment

## 0.3.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

## 0.2.0

### Minor Changes

- e431384: add react sdk docs snippets package
- 8561a8b: Render custom type fields in function doc snippets instead of empty `{}`
- 325ec58: fix snippet version key to match dev console sdk version

## 0.2.0-beta.1

### Minor Changes

- 8561a8b: Render custom type fields in function doc snippets instead of empty `{}`

## 0.2.0-beta.0

### Minor Changes

- e431384: add react sdk docs snippets package
