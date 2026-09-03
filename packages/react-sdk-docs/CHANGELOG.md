# @osdk/react-sdk-docs

## 0.18.0

### Minor Changes

- bbbeca8: Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.75.0`, which reinstates the `streamingExecute` query endpoint as a Server-Sent Events (`text/event-stream`) stream. The experimental `executeStreamingFunction` helper is reimplemented on top of it and no longer throws: it yields each result as it arrives, flattening batched results so array-returning queries emit one element at a time.

## 0.17.0

### Minor Changes

- ae47ac3: Fix FilterList's `HAS_LINK` filter, which previously sent an unsupported `$isNotNull` operator and was silently rejected by the server. `HAS_LINK` and `LINKED_PROPERTY` now filter by deriving a `$count` of matching linked objects and no longer use object-set `intersect`.

  Fix `LINKED_PROPERTY` excluding: source rows with no linked object at all are now retained (previously dropped).

  Consumer notes:
  - `HAS_LINK` and `LINKED_PROPERTY` do not appear in `onFilterClauseChanged` (they cannot be expressed as a `WhereClause`). Wire `onEffectiveObjectSet` and pass the returned `ObjectSet` to the table to see them applied.
  - `LINKED_PROPERTY` no longer requires `reverseLinkName` — the count-based narrowing does not need the reverse traversal.
  - Removed bad documentation `$isNotNull` in `useOsdkObjects` snippets.

## 0.16.0

### Minor Changes

- ab557b4: Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.73.0`. `ObjectTypeInterfaceImplementation` now requires an `actionTypes` field, and the generally available media set `read`, `info`, `metadata` and `uploadMedia` endpoints no longer accept a `preview` parameter.

## 0.15.0

### Minor Changes

- c40b6e5: Remove the experimental `__EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference` export. To upload media, pass `{ data, fileName }` directly to an Action's media parameter; the client uploads it via `uploadMedia` and links the resulting media item.

## 0.14.0

### Minor Changes

- c14abb8: Streaming query execution is not currently supported in the TypeScript OSDK, so the experimental `executeStreamingFunction` helper now throws. Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.70.0`. The ontology-as-code full-metadata converters now populate the object type `aliases` and `datasources` fields.

## 0.13.0

### Minor Changes

- 7ae7004: Revert re-enabling the `unicorn/no-useless-switch-case` oxlint rule; the rule is disabled again and the explicit `case` labels are restored. Behavior-preserving with no runtime or API changes.
- 9ef0982: Fix empty {} placeholder for interface action parameters in docs

## 0.12.0

### Minor Changes

- 62f9714: Re-enable the `unicorn/no-useless-switch-case` oxlint rule and drop the redundant empty `case` labels that fell straight through to `default`. Behavior-preserving with no runtime or API changes.

## 0.11.0

### Minor Changes

- cbcdce1: Re-enable the oxlint rules the `**/*.{js,mjs,cjs}` override had disabled and delete the override, so JS build scripts, bin shims, and config files are held to the same ruleset as TypeScript. Changes are behavior-preserving (lint/format fixes to build tooling only).

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
