# Hover-type snapshots

This directory captures the rendered hover output of high-traffic SDK
types (currently `ObjectSet` methods — `where`, `subscribe`, `fetchPage`,
`asyncIter`, `aggregate`, `withProperties`, …). Future type-graph
refactors that change what users see when they hover over those
expressions will surface here as snapshot diffs.

## Layout

- `probeUtils.ts` — the reusable renderer. Loads a probes file via the
  TypeScript compiler API, walks `declare const probe_*: T;`
  declarations, and returns one rendered+formatted entry per probe.
- `<surface>Probes.ts` — one file per type-graph surface we want to
  pin. `objectSetProbes.ts` is the only one today; new surfaces should
  add a sibling file (e.g. `osdkInstanceProbes.ts`).
- `hoverTypes.test.ts` — single test entry point. One `describe` block
  per surface; each block calls `snapshotProbes("<name>Probes.ts")`
  plus any surface-specific compile-time assertions.

## How a probe file works

Every probe declares a variable whose type is the thing we want to pin,
with a one-line JSDoc describing the user-facing intent — the renderer
fails loudly if a JSDoc is missing.

```ts
/** The clause argument of objectSet.where(...). */
declare const probe_where_clause_param: Parameters<
  ObjectSet<EmployeeApiTest>["where"]
>[0];
```

The snapshot value is prefixed with the JSDoc as a leading `// …`
comment so the rendered type is self-documenting.

### Type-utility cheat sheet

Useful built-ins for sculpting the type you want to snapshot:

- `Parameters<F>[N]` — the Nth parameter type of a function/method.
  Example: `Parameters<ObjectSet<E>["where"]>[0]` for the clause arg.
- `ReturnType<F>` — the return type of a function/method.
- `Awaited<T>` — unwrap a `Promise<X>` to `X`.
- `typeof <value>` — reference a value's type. Combine with TS 4.7+
  instantiation-expression syntax `typeof fn<T>` to capture what a
  generic method returns when called with a specific type argument.
  See `_withProperties` in `objectSetProbes.ts` for an example.
- Index access (`Foo["bar"]`, `Tuple[0]`) — drill into an
  object/tuple.

## How to add a probe

1. Pick the right `<surface>Probes.ts` (or create a new one for a new
   surface, plus a `describe` block in `hoverTypes.test.ts` calling
   `snapshotProbes("<surface>Probes.ts")`).
2. Add `declare const probe_<name>: <YourType>;` with a JSDoc above
   describing what user-facing code yields this hover.
3. From the repo root: `pnpm updateSnapshots --filter=@osdk/api` (or
   `pnpm updateSnapshots` from `packages/api/`).
4. Commit the probe file and the updated `__snapshots__/*.snap`.

## How to update an existing snapshot

If a refactor intentionally changes a type's hover output:

1. Run `pnpm updateSnapshots` (same command as above).
2. Inspect the resulting diff — the change should look like the
   improvement you intended.
3. Commit the updated `.snap` file. Reviewers will see the before/after
   directly in the diff.
