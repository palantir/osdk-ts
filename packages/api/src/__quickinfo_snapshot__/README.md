# Quickinfo snapshots

This directory captures the rendered quickinfo output of high-traffic
SDK types (currently `ObjectSet` methods — `where`, `subscribe`,
`fetchPage`, `asyncIter`, `aggregate`, `withProperties`, …). Quickinfo
is the TypeScript-compiler-rendered type string editors show as the
hover tooltip; pinning it means future type-graph refactors that change
what users see hovering those expressions will surface as snapshot
diffs.

## Philosophy

These snapshots aren't a type-correctness test. The goal is to make the
hover output users actually see in their editor visible in code review,
so we can notice when it stops being reasonable (a refactor leaks an
internal helper into the tooltip, a generic stops resolving, an
overload renders as `any`, etc.). Snapshot diffs are meant to be read,
not just to fail.

That makes one rule load-bearing:

> **A probe must render the same string TS would show on hover.**

Concretely, only use type expressions a user would write in their own
code:

- ✅ `Parameters<F>[N]`, `ReturnType<F>`, `Awaited<P>`, `NonNullable<T>`
- ✅ Index access (`Foo["bar"]`) and instantiation expressions
  (`typeof fn<T>`)
- ✅ Pre-instantiated aliases as shorthand (`type L = Listener<EmployeeApiTest>;`)
- ❌ `Expand<T> = { [K in keyof T]: T[K] }` — flattens an interface to a
  structural literal that hover never shows
- ❌ `Force<T> = [T][0]` / `Reduce<T> = T extends T ? T : never` — coax
  a conditional alias to evaluate when hover would have shown the
  unevaluated form
- ❌ Anything else that produces a richer or more reduced view than the
  editor tooltip

When a probe lands as just an opaque alias name (e.g.
`ObjectSetSubscription.Options<E, ...>`), don't reach for `Expand` to
"make the snapshot useful." Instead, drill in the way a user would —
hover `options.properties`, hover `builder.where` — by switching to
per-field index access (`Options["properties"]`,
`Builder["where"]`). The result is still hover-faithful, and the
snapshot now shows the part you actually wanted to pin.

## Layout

- `probeUtils.ts` — the reusable renderer. Loads probes files via the
  TypeScript compiler API, walks `declare const probe_*: T;`
  declarations, and returns one TS-formatted snapshot string per
  probes file.
- `probes/<surface>.ts` — one file per type-graph surface we want to
  pin (e.g. `probes/objectSet.ts`, `probes/osdkInstance.ts`).
- `quickInfoTypes.test.ts` — single test entry point. Auto-discovers every
  `probes/*.ts` file and asserts each one against
  `__snapshots__/<surface>.snap` via `toMatchFileSnapshot`.
- `__snapshots__/<surface>.snap` — one snapshot file per surface,
  containing `type probe_<name> = ...;` declarations with their JSDoc
  descriptions. Each file is syntactically valid TypeScript so
  reviewers can read it like source.

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

In the snapshot file, each probe lands as `/** <description> */` plus
`type <probe_name> = <rendered>;`, so the snapshot reads like a
documented TypeScript module.

### Type-utility cheat sheet

Useful built-ins for sculpting the type you want to snapshot:

- `Parameters<F>[N]` — the Nth parameter type of a function/method.
  Example: `Parameters<ObjectSet<E>["where"]>[0]` for the clause arg.
- `ReturnType<F>` — the return type of a function/method.
- `Awaited<T>` — unwrap a `Promise<X>` to `X`.
- `typeof <value>` — reference a value's type. Combine with TS 4.7+
  instantiation-expression syntax `typeof fn<T>` to capture what a
  generic method returns when called with a specific type argument.
  See `_withProperties` in `probes/objectSet.ts` for an example.
- Index access (`Foo["bar"]`, `Tuple[0]`) — drill into an
  object/tuple.

## How to add a probe

1. Pick the right `probes/<surface>.ts` (or create a new one for a new
   surface — the test auto-discovers it).
2. Add `declare const probe_<name>: <YourType>;` with a JSDoc above
   describing what user-facing code yields this quickinfo.
3. From the repo root: `pnpm updateSnapshots --filter=@osdk/api` (or
   `pnpm updateSnapshots` from `packages/api/`).
4. Commit the probe file and the updated `__snapshots__/*.snap`.

## How to update an existing snapshot

If a refactor intentionally changes a type's quickinfo output:

1. Run `pnpm updateSnapshots` (same command as above).
2. Inspect the resulting diff — the change should look like the
   improvement you intended.
3. Commit the updated `.snap` file. Reviewers will see the before/after
   directly in the diff.
