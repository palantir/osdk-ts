# ObjectSet hover-type snapshots

This directory captures the rendered hover output of high-traffic
`ObjectSet` methods (`where`, `subscribe`, `fetchPage`, `asyncIter`,
`aggregate`, `withProperties`, …). Future type-graph refactors that
change what users see when they hover over `ObjectSet`-typed expressions
will surface here as snapshot diffs.

## How it works

`probes.ts` declares variables whose types are the things we care about
hovering over. Every probe has a one-line JSDoc above it describing the
user-facing intent — the test fails loudly if one is missing.

```ts
/** The clause argument of objectSet.where(...). */
declare const probe_where_clause_param: Parameters<
  ObjectSet<EmployeeApiTest>["where"]
>[0];
```

`renderHovers.test.ts` loads `probes.ts` via the TypeScript compiler API,
calls `checker.typeToString` on each `probe_*` declaration, formats the
output through `dprint` for diff readability, and snapshots one entry per
probe. Each snapshot value is prefixed with the JSDoc as a leading
`// …` comment so the rendered type is self-documenting.

## How to add a probe

1. Add `declare const probe_<name>: <YourType>;` to `probes.ts`, with a
   JSDoc above describing what user-facing code yields this hover.
2. From the repo root: `pnpm updateSnapshots --filter=@osdk/api`
   (or `pnpm updateSnapshots` from `packages/api/`).
3. Commit `probes.ts` and the updated `__snapshots__/*.snap`.

## How to update an existing snapshot

If a refactor intentionally changes a type's hover output:

1. Run `pnpm updateSnapshots` (same command as above).
2. Inspect the resulting diff — the change should look like the
   improvement you intended.
3. Commit the updated `.snap` file. Reviewers will see the before/after
   directly in the diff.

## What's covered

`probes.ts` contains a `KnownObjectSetMethods` union enumerating every
member of `ObjectSet`. The split is documentation only:
`ProbedObjectSetMethods` for things that have a probe; `SkippedObjectSetMethods`
for things we've intentionally chosen not to snapshot (internal markers,
trivial `this` returns, methods covered by sibling probes, etc.).

If a new member is added to `ObjectSet`, the type-level assertion in
`renderHovers.test.ts` fails to typecheck until the new key is
acknowledged in `KnownObjectSetMethods` — at which point the author
decides whether to add a probe or to mark it skipped.
