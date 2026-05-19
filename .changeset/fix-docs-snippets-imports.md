---
"@osdk/react-sdk-docs": patch
"@osdk/react-components": patch
"@osdk/cbac-components": patch
---

Fix misleading patterns in @osdk/react and @osdk/react-components docs that were confusing downstream coding agents and humans alike.

• react-sdk-docs `reactProviderSetup` and `clientSetup` snippets now pass a real ontology RID placeholder to `createClient` instead of `{{{packageName}}}` (which resolves to the npm SDK package name, not the ontology RID)
• Stop pretending `$` is exported from the user's SDK — `$` is a local alias users sometimes create; docs now use `client(Type)` directly, matching the pattern already used in getting-started.md / cache-management.md
• Standardize the SDK placeholder on `@my/osdk` across all docs (was a mix of `@my/osdk`, `@YourApp/sdk`, `@your-app/sdk`) and add a `:::note About @my/osdk` callout to each react-components doc that imports from it
• Fix several broken/missing imports in code snippets: `cache-management.md` setup block was using `createClient` / `createObservableClient` / `authProvider` without importing or defining any of them; `advanced-queries.md` derived-property fragments were missing `Employee` and `useOsdkObjects` imports
• Fix `querying-data.md` self-referential typo "_Stable - available from both `@osdk/react` and `@osdk/react`_" → second should be `@osdk/react/experimental`
• Fix `advanced-queries.md` duplicate `const { data }` declaration that would not compile
• Remove unused `useOsdkObject` import from one `advanced-queries.md` snippet
• Install commands now show npm / pnpm / yarn alternatives with a tip block recommending users skip the step if their tooling already installs dependencies — fixes Pilot running `pnpm` in npm-managed projects and the install-race-with-harness issue
