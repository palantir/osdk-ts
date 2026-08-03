<!-- cspell:words Hackweek Rehydrator TPAS Templatize Templatizer aliasable codepaths inlines remapper spts unaliased unrepresentable bidirectionality conftest coverton hackweek interceptable officeassignment officenetwork osdks rehydrator remappable retarget shrinkwrapping staticmethod templatize templatizer unconfigured -->

# Iteration loop and integration test suite

## 0. The premise this document is written against

**Every generated OSDK ships an alias file, and every generated OSDK reads it at runtime.** There is
no flag, no "alias-aware mode", no dual codepath. The file is a first-class generator output that
sits next to `index.ts` in the emitted package, and the generated JavaScript carries **no compiled-in
default** for anything the file covers — `$resolveObjectType("Employee")` takes one argument, not two,
and a key that is missing from the active file is a hard error.

That is a deliberately stronger position than "a remapping file that overrides baked-in values", and
it is worth being explicit about why, because it changes what the test suite has to prove:

- **One codepath ships.** The path exercised in CI is the path that runs in production. A
  fallback-when-absent design means the identity case and the remapped case take different branches,
  and the branch nobody runs locally is the one that runs after a Marketplace install.
- **The file is the complete, auditable inventory** of everything environment-specific in the SDK.
  You can answer "what does this artifact assume about its stack?" by reading one JSON file rather
  than grepping compiled output.
- **Marketplace's job really does reduce to producing a file.** Not to producing a file that agrees
  with values also present somewhere else.

### What that changes about testing

Three consequences, and the rest of this document follows from them.

1. **Source-identity of generated code stops being an invariant.** Every committed fixture tree
   changes, once. The `git diff --exit-code` gate (§3) keeps all of its value — it just needs one
   baseline-moving commit, after which it guards the new shape exactly as it guarded the old.

2. **The parity claim has to be re-anchored on recorded request streams.** Source bytes can no longer
   be identical to `main`, so the thing that must be identical is what goes over the wire. Capture the
   request stream from `main` _before_ any generator change, commit it as a fixture, and make it the
   oracle. This is the single most important preparatory step of the week and it costs an hour.

3. **A new failure class appears: key completeness.** With no compiled-in defaults, a resolver call
   whose key is absent from the file is a runtime failure in a place that used to be impossible to get
   wrong. The generator emits both the calls and the file in the same pass, so this is a pure
   invariant — and it must be enforced structurally, then tested anyway (§2.1).

So the two things to prove locally, in seconds, without CI and without a Foundry stack:

1. **Parity** — an alias-aware OSDK reading its own packaged file produces a request stream
   byte-identical to the pre-change OSDK's.
2. **Correctness** — with a remapping file layered on top, SDK-A (generated against ontology A)
   produces the same request stream that SDK-B (generated natively against renamed ontology B)
   produces.

Claim 2 is the strong one, and the repo already contains almost everything needed to state it.

## 1. The tight loop

Three terminals.

```sh
# 1 — keep sibling build/esm fresh (cross-package imports resolve through build/esm, not src)
pnpm exec turbo watch transpileEsm --filter='@osdk/client^...' --filter='@osdk/generator^...'

# 2 — generator inner loop: pure in-memory, ~2s, no deps
cd packages/generator && pnpm exec vitest

# 3 — client outer loop
cd packages/client && pnpm exec vitest src/ontology src/objectSet src/__tests__/aliases
```

Single file, verified at ~1.8s:

```sh
cd packages/generator && pnpm exec vitest run src/v2.0/generateClientSdkVersionTwoPointZero.test.ts
cd packages/client   && pnpm exec vitest run src/ontology/StandardOntologyProvider.test.ts
```

Once `@osdk/aliases` exists, add a fourth, and keep it fast — it is a dependency-free leaf, so its
suite should run in well under a second:

```sh
cd packages/aliases && pnpm exec vitest
```

**The one gotcha that will waste an hour.** Bare `pnpm exec vitest` in `packages/client` with stale
sibling builds fails confusingly — e.g. `TypeError: wireInterfaceTypeV2ToSdkObjectDefinition is not a function` from `loadInterfaceMetadata.ts:35`. Fix in ~6s, and it also runs
`client.test.ontology`'s codegen:

```sh
pnpm exec turbo run transpileEsm --filter='@osdk/client^...'
```

Snapshot updates: `pnpm exec vitest run -u` in the package. (`pnpm updateSnapshots` exists only for
`@osdk/api`.)

## 2. Layer 1 — generator output, in memory (~2s)

`packages/generator/src/v2.0/generateClientSdkVersionTwoPointZero.test.ts` (2972 lines) already
captures the **entire emitted file map as inline snapshots** and additionally compiles the emitted
source with the real TypeScript compiler API. Two helpers do the work:

- `packages/generator/src/util/test/createMockMinimalFiles.ts` — `getFiles()` is literally
  `Object.fromEntries(writeFile.mock.calls)`, a `path → source` map. `dumpFilesToConsole()` is the
  debug hatch.
- `packages/generator/src/util/test/compileThis.ts` — in-memory `ts.createProgram` returning
  `getPreEmitDiagnostics`. The existing test asserts zero errors (filtering only code 2792).

The only normalization applied is the client version (`tweakedFilesForSnapshotConsistency`,
`:2959-2972`); **everything else is byte-exact.**

Because the alias file is written through the same `MinimalFs` as every other emitted file, **it lands
in `getFiles()` for free** and appears in the inline snapshot next to the sources. That is the cheapest
possible review surface for the schema: the JSON and the code that reads it are visible in one diff.

What to assert here:

- The emitted `.js` contains the getters and **no literal API names outside the alias file**. Worth a
  regex assertion, not just eyeballing a snapshot — this is the property the whole project claims.
- `compileThis` reports zero new errors.
- The emitted `.d.ts` is **unchanged from `main`**. This is the one byte-identity claim that survives,
  and it is the whole reason the design is type-safe:

```sh
# spot-check by hand once
cd packages/client.test.ontology
diff <(git show HEAD:build/types/.../Employee.d.ts) build/types/.../Employee.d.ts
```

- The alias file **serializes deterministically** — sorted keys, stable formatting. Two independent
  reasons: the `git diff --exit-code` gate below, and `function-registry`'s explicit requirement that
  _"Marketplace reconciliation should be idempotent, so we need to use a deterministic serializer to
  prevent two identical installations from creating different images"_
  (`AliasesLayerResolver`). Test it by generating twice and comparing strings.

### 2.1 The new invariant: key completeness

Make it structurally impossible first, then test it anyway.

**Structurally:** every resolver call the emitter produces goes through one helper, which records
`(kind, aliasKey, value)` into a per-SDK collector. The alias file is serialized _from_ that collector
at the end of the run. There is then no way to emit a call without emitting its key, because the same
data produces both.

**Tested anyway**, because the collector can still be bypassed by a hand-written template string:

```ts
it("every resolver call in the emitted output has a key in the emitted alias file", () => {
  const files = helper.getFiles();
  const aliases = JSON.parse(files["/foo/aliases.json"]);
  const called = new Set<string>();
  for (const [path, src] of Object.entries(files)) {
    if (!path.endsWith(".ts")) continue;
    for (const m of src.matchAll(/\$resolve(\w+)\(\s*"([^"]+)"/g)) {
      called.add(`${m[1]}:${m[2]}`);
    }
  }
  expect([...called].sort()).toEqual(keysOf(aliases).sort());
});
```

Assert **both directions**. A missing key is a runtime crash; an orphaned key is dead weight that
Marketplace will be asked to remap and that nobody will notice is unused.

Then assert the runtime half: delete one key from a valid file and confirm the client throws an error
that names the key, the kind, and the file path. A silent `undefined` reaching `objectSetUtils`
produces `{"type":"base","objectType":undefined}` and a confusing 400 from the server — that is the
failure mode this test exists to prevent.

### 2.2 The renamed-ontology rewriter is already here

Add an alias-aware variant next to the existing `fooBarTodoWireOntology` using the `immer`-based
`changeNames(...)` rewriter already defined at `:33-100`. This is precisely the tool for building the
"renamed ontology B" oracle in Layer 4, and it already exists.

## 3. Layer 2 — byte-identity of committed generated trees (free, already built)

The repo commits generated SDK trees to git and has CI run `git diff --exit-code` after every job that
transitively triggers `codegen`. Four checkpoints in `.github/workflows/ci.yml` (`:114`, `:174`,
`:223`, `:389`). Every `transpile`/`typecheck`/`lint` task `dependsOn: ["codegen"]`, so **you cannot
build anything without regenerating the fixtures first**.

Reproduce locally exactly as CI does:

```sh
pnpm exec turbo run transpile transpileTypes
git diff --exit-code && test -z "$(git ls-files --others --exclude-standard)"
```

Coverage: **~192 committed generated files across six real ontologies** — `e2e.generated.catchall`
(89), `e2e.generated.api-namespace.local` (11), `.dep` (8), `e2e.sandbox.peopleapp` (58),
`e2e.sandbox.officeassignment` (16), `e2e.sandbox.todoapp` (10).

**The one-time baseline move.** Under the always-on design this gate goes red on the first generator
commit, for every fixture at once. Handle it deliberately rather than by reflex:

1. **Before touching the generator**, record the request-stream fixtures (§4) from `main`. Once the
   trees are regenerated there is no way back to the old bytes short of `git stash`.
2. Land the generator change and the regenerated trees **in one commit**, with nothing else in it.
   That commit's diff is the human-reviewable statement of what the design does to every SDK in the
   repo — read it, it is the best review artifact the project will produce.
3. From the next commit on, the gate is as strong as it ever was, and it now also covers the alias
   files, since they are committed alongside the trees.

Two holes to close first, both of which get worse under this design:

- **`e2e.sandbox.officenetwork` commits 54 generated files and has no `codegen` script** (turbo reports
  `<NONEXISTENT>`). A generator change that alters its output is invisible to the diff gate. Its
  `ontology.json` is 91 KB — the widest single surface in the repo. **Add a `codegen` script**; it is a
  two-line change and buys real coverage. Under the always-on design this matters more than before:
  those 54 files would keep their old, literal-bearing shape while every other fixture moved, and the
  inconsistency would be invisible.
- `client.test.ontology`'s output is gitignored (regenerated from `LegacyFauxFoundry` code, not JSON),
  so cosmetic changes there are caught nowhere textually — only behaviorally. It is also the ontology
  most of the client suite runs against, so its alias file is the one most likely to be subtly wrong
  with no diff to show for it. Lean on §4 for it.

`e2e.generated.1.1.x` (107 files) is the intentionally frozen legacy 1.x SDK. Leave it, and exclude it
from the generator change. Note that 1.x had the _opposite_ shape — it put properties, links and even
the ontology RID into runtime values
(`e2e.generated.1.1.x/src/generatedNoCheck/Ontology.ts:36-40`) — so the 1.x→2.x migration already did
most of the work this project depends on.

## 4. Layer 3 — the request recorder (build this first; ~10 lines)

**Do this before any generator change.** It is the only way to capture the pre-change baseline, and
the baseline is the whole parity claim.

There is **no request-recording harness in the repo**. There is exactly one test that asserts an
ordered request stream, and it records URL paths only —
`packages/client/src/ontology/StandardOntologyProvider.test.ts` (65 lines):

```ts
testSetup.apiServer.events.on("request:start", ({ request }) => {
  loads.push(new URL(request.url).pathname);
});
// …
expect(loads).toEqual([
  "/api/v2/ontologies/ri.ontology.main.ontology.698267cc-…/objectTypes/Employee/fullMetadata",
  "/api/v2/ontologies/ri.ontology.main.ontology.698267cc-…/objectSets/loadObjects",
  "/api/v2/ontologies/ri.ontology.main.ontology.698267cc-…/interfaceTypes/FooInterface",
]);
```

`startNodeApiServer` (`packages/shared.test/src/setupServers.ts`) **already computes method, URL and
the exact JSON body** and throws them into a logger:

```ts
apiServer.events.on("request:start", async ({ request, requestId }) => {
  const blob = await request.clone().blob();
  logger("request:start", requestId)?.debug(
    `${request.method} ${request.url}`,
    blob.type === "application/json" ? await blob.text() : blob,
  );
});
```

Push those onto an opt-in array exposed on `TestSetup` and **all 31 `startNodeApiServer` call sites get
request recording for free**:

```ts
export interface TestSetup<C> {
  apiServer: SetupServer;
  auth: () => Promise<string>;
  fauxFoundry: FauxFoundry;
  client: C;
  /** Ordered log of every request, when `recordRequests: true`. */
  requests: RecordedRequest[];
}
export interface RecordedRequest {
  method: string;
  /** pathname + sorted search params, so ordering isn't spuriously load-bearing */
  url: string;
  /** raw body text — compared as a string so JSON key order is pinned */
  body: string | undefined;
}
```

An alternative slot: the leading `msw.http.all("*", async () => { await delay(0); })` at
`setupServers.ts:47-49`, which returns `undefined` and falls through to the faux handlers.

### Determinism — three things to neutralize

- `crypto.randomUUID()` in `FauxFoundry`'s default ontology RID, in `FauxDataStore`'s minted
  `ri.phonograph2-objects.main.object.${crypto.randomUUID()}`, and in `TypeHelpers.createActionRid()`.
  Pass an explicit `defaultOntology` and explicit `$rid`s.
- Timestamps — already pinned; every `vitest.config.mts` sets
  `fakeTimers: { toFake: ["setTimeout", "clearTimeout", "Date"] }`.
- Auth is already the constant `Bearer myAccessToken`.

**Body comparison must be string-based, not `toMatchObject`.** The only pattern in the repo that pins
property ordering is `packages/client/src/object/aggregate.test.ts:145-162`, which does
`toHaveBeenCalledWith(exactUrl, { body: JSON.stringify({…}) })`. That is the right tool for a
byte-identity claim; `toMatchObject` will let a reordered body through.

### 4.1 Capture the baseline, commit it, and never regenerate it casually

Write the programs from the table in §5 once, run them on `main`, and commit the recordings as JSON
fixtures under `packages/client/src/__tests__/aliases/__baselines__/`.

These files are **the contract with the old world**. Regenerating them is how the parity claim gets
silently discarded, so make that expensive on purpose:

- No `-u` path. Update them only by deleting and re-recording against a `main` checkout, with the
  reason in the commit message.
- Put a header comment in each file saying so — a `README.md` in the directory that nobody opens is
  not sufficient friction.

## 5. Layer 4 — the differential suite (the real deliverable)

Five modes, and the existing suites parameterized over them. A parameterization harness partly exists
already on the local branch: `packages/shared.test/src/alias-mode-setup.ts` writes a temp
`aliases.json`, points `ALIASES_JSON_FILE` at it and resets the cache;
`packages/shared.test/src/alias-test-utils.ts` holds the mapping table; `build-aliases-json.ts`
constructs the file. It needs reworking for the layered model (there is now always a packaged file
underneath), but the shape is right.

| Mode                | Active file                                            | Assertion                                                       |
| ------------------- | ------------------------------------------------------ | --------------------------------------------------------------- |
| `packaged`          | the SDK's own generated file, nothing else             | stream **string-equal to the committed `main` baseline** (§4.1) |
| `identity-override` | external file repeating the packaged values verbatim   | stream string-equal to `packaged`                               |
| `remapped`          | external file with target names                        | stream equal to the **native oracle** (below)                   |
| `legacy`            | old-format file with no `ontology` member              | falls through to the packaged file; equals `packaged`           |
| `incomplete`        | external file with `ontology` present but one key gone | throws, naming the key, the kind and the source                 |

`packaged` is the mode that runs in every ordinary unit test in the repo, for free, because it is
simply "the SDK works". `legacy` and `incomplete` are cheap and they pin the two semantics that are
easiest to get wrong when the layering code is refactored six months from now: back-compat is
**file-level and permissive**, key resolution is **strict**.

### The native oracle

This is what makes mode `remapped` a real proof rather than a snapshot of our own opinion.

1. Take an ontology `A` (`LegacyFauxFoundry`'s default, or `TodoWireOntology`).
2. Derive `B` by renaming entities, using the existing `changeNames(...)` immer rewriter at
   `generateClientSdkVersionTwoPointZero.test.ts:33-100`.
3. Generate **SDK-A** from `A` and **SDK-B** from `B`, both in-memory via `createMockMinimalFiles` (or
   on disk into a tmpdir for the client-level tests). Both now come with their own alias files.
4. Register ontology **B** in `FauxFoundry` and serve it.
5. Run the same user program twice: once with **SDK-B on its own packaged file** (the native path),
   once with **SDK-A plus an A→B override file** (the alias path).
6. Assert the two recorded request streams are string-identical.

```ts
it.each(MODES)("stream matches oracle in %s mode", async (mode) => {
  const { requests } = await runProgram(mode);
  expect(requests).toEqual(
    mode === "remapped" ? oracleRequests : baselineRequests,
  );
});
```

Cover, at minimum, one program per wire shape — these are the shapes that actually differ:

| Program                                 | Why it matters                                                    |
| --------------------------------------- | ----------------------------------------------------------------- |
| `client(Employee).fetchPage()`          | object apiName in the **body**, ontology RID in the path          |
| `.where({ fullName: … })`               | property names, `fullyQualifyPropName`                            |
| `.orderBy` / `$select`                  | `remapPropertyNames`, `remapSelectV2`                             |
| `.aggregate("prop:max")` + `$groupBy`   | the two paths that currently _skip_ namespace qualification       |
| `.pivotTo("lead")`                      | link names; directional, per-object-type scoping                  |
| `emp.$link.lead.fetchOne()`             | `getDollarLink` on the response side                              |
| `client(FooInterface).fetchPage()`      | `interfaceBase`, `preview: true`, the namespace-derivation trap   |
| `emp.$as(FooInterface)`                 | `interfaceMap` literal-keyed lookup                               |
| `applyAction(promoteEmployeeObject, …)` | apiName in the **URL path**, `unsanitizedApiName` preference      |
| `executeFunction(addOne, …)`            | apiName in path + `version` query param                           |
| `.withProperties({…})`                  | RDP wire tree: link + property refs, no generated metadata at all |
| edit batch / transaction                | `EditRequestManager` property maps                                |

### Round-trip, not just outbound

Register ontology **B** in `FauxFoundry` and assert the aliased SDK-A can _actually read the response_
— `emp.fullName` must resolve even though the server returned `full_name`, and `emp.$objectType` must
be what downstream code expects. This is the direction api-gateway handles today by rewriting
responses, and it is the part most likely to be quietly broken. See
[04](./04-hardest-problems.md) §1.

`@osdk/faux` makes this cheap: `handleOpenApiCall` builds its msw route **by invoking the real
generated platform-SDK function with a stub `fetch`** and registering a handler at exactly the URL it
produced (`packages/faux/src/handlers/util/handleOpenApiCall.ts:114-189`), so the mock route matches
the SDK's URL construction by definition.

## 6. Layer 5 — `@osdk/aliases` in isolation (new, fast, and where the semantics live)

The new leaf package is where the rules that everything else assumes are actually decided, so test it
directly rather than only through the client. It has no dependencies, so the suite is milliseconds.

- **Layering precedence**, as a table-driven test over the four sources: injected override →
  `ALIASES_JSON_FILE` → `RESOURCES_JSON_FILE` (live preview) → the SDK's packaged file. Assert the
  full precedence matrix, not just the happy path; this is the part a future refactor will break.
- **Back-compat parsing.** Feed it real `aliases.json` payloads from `function-registry`'s existing
  test fixtures — an old file with `custom`/`models`/`egressConnections` and no `ontology` member must
  parse cleanly and contribute no ontology entries. Copy the fixtures in verbatim rather than writing
  approximations; the point is compatibility with what that repo actually emits.
- **Validation is loud.** Today's reader in `@osdk/functions` does `JSON.parse` + cast with **no
  runtime validation**, so a schema mismatch fails silently at some later call site. The new parser
  should reject a malformed file at load with the path and the offending member. Test the rejections,
  including `version` present but unrecognized, and `ontology` present but not an object.
- **Strict key resolution.** Unknown key throws; the message names the kind, the key, and which source
  the active file came from. This is the diagnostic a Marketplace installer will actually see.
- **Two philosophies, deliberately.** The existing `Aliases.model()`/`custom()` accessors throw with an
  "Available aliases:" hint; the ontology resolvers throw too, but they are called from _generated_
  code rather than author code, so the message needs to name the generator, not blame the user. Keep
  both and assert both messages — the Python prototype has the two philosophies in one module with no
  comment explaining it.
- **Caching and invalidation.** `PUBLISHED` mode is memoized module-level with `resetPublishedCache()`
  for tests; `LIVE_PREVIEW` is deliberately uncached for hot reload but currently `stat`s, reads and
  re-parses on **every resolver call** — and generated code now calls resolvers per request. Assert an
  mtime-checked read: same mtime → one parse; bumped mtime → re-parse.
- **No `fs`, no `process`, in the core entrypoint.** Assert it mechanically — import the root
  entrypoint's built output and scan for those identifiers, or check the `exports` map wiring. The
  browser story depends on this staying true and it will regress the first time someone adds a
  convenience helper. See [01](./01-implementation-plan.md) §3.

## 7. Gates that will bite

Run before pushing:

```sh
pnpm turbo transpile                        # cross-package build issues
pnpm turbo check-api --filter=@osdk/client --filter=@osdk/api --filter=@osdk/aliases
pnpm turbo test --filter=@osdk/generator --filter=@osdk/client \
                --filter=@osdk/aliases --filter=@osdk/functions --filter=@osdk/unit-testing
pnpm updateSnapshots --filter=@osdk/api     # if ObjectSet/Osdk.Instance hover output moved
git diff --exit-code
git ls-files --modified --others --exclude-standard | xargs npx dprint fmt
```

- **`mrl check`** — a new package is now certain, not hypothetical. `@osdk/aliases` needs the canonical
  `tsconfig.json` / `vitest.config.mts` / `turbo.json` / `api-extractor.json` set, an `etc/` report, and
  a changeset. Do this on Monday; discovering the monorepo lint conventions on Friday is a bad trade.
- **`check-api`** covers only four packages today (`api`, `client`, `functions`, `unit-testing`) and runs
  with `--local`, i.e. it _writes_ `etc/*.report.api.md`. CI catches drift via `git diff --exit-code`,
  not via api-extractor's exit code. Add `@osdk/aliases` to the set — its whole value is being a stable
  contract that generated code compiles against.
- **`__quickinfo_snapshot__`** (`packages/api/src/__quickinfo_snapshot__/`) pins the compiler-rendered
  hover string for `ObjectSet`, `Osdk.Instance`, actions, queries, etc. It also has a compile-time
  exhaustiveness gate — `expectTypeOf<keyof ObjectSet<…>>().toEqualTypeOf<ProbedObjectSetMethods | SkippedObjectSetMethods>()` — so **adding any public `ObjectSet` member fails typecheck** until it's
  listed. Read `packages/api/src/__quickinfo_snapshot__/README.md` before adding probes; the
  load-bearing rule is that a probe must render the same string TS shows on hover (no
  `Expand<T>`/`Force<T>`). The getter change should move nothing here — if it does, that is a real
  finding.
- **`@osdk/functions` and `@osdk/unit-testing` both consume `@osdk/client.test.ontology` generator output
  at runtime.** `@osdk/unit-testing` reads `objectType.primaryKeyApiName` and `objectType.apiName` off
  the generated const and invariants if they're missing — a getter is fine, a getter that throws because
  no alias file resolved is **not**. These two packages are the most likely place to discover that a test
  harness constructs a generated const outside any package context. Run both suites early.
- **`packages/client/src/intellisense.test.ts`** drives a real tsserver and asserts hover/completion
  output. Changed generated type shapes move it.
- **`cspell`** — `e2e.generated.catchall`, `.local`, `.dep` each run `cspell --quiet .` over their
  generated output. The alias files are committed into those packages, so **every alias key is now
  spellchecked**. Namespaced API names in generated JSON are a plausible new failure; check it on the
  first regeneration rather than in CI.
- **`check-attw`** — `attw --pack` on `e2e.generated.catchall`. Now load-bearing in a new way: the
  packaged alias file has to be reachable from the published package, so `files` / `exports` must
  include it. `attw` will catch an unreachable export; it will _not_ catch a JSON file missing from
  `files`. Verify with `npm pack --dry-run` once.

## 8. Offline coverage summary

The entire CI suite is offline — `grep -rn "FOUNDRY_STACK\|FOUNDRY_USER_TOKEN" .github/` returns
nothing, and the only real-stack packages (`e2e.sandbox.catchall`, `e2e.sandbox.oauth`) are never
executed in CI, only typechecked and linted. Everything in this document runs with no credentials.

For a genuinely end-to-end offline check of the _generated package_ (not just the file map),
`packages/e2e.test.foundry-sdk-generator` stands up an in-process MSW faux Foundry, generates two real
npm packages through `foundry-sdk-generator`, runs `attw --pack` on both, and the three `tests/verify-*`
packages then `tsc` + `node` against the result under four Node versions.

This is now the most valuable integration test in the repo for this project, because it is the only
place that exercises **a real installed npm package resolving its own packaged alias file through real
module resolution** — which is exactly the mechanism that has to work inside a function image. Add two
legs to it: one that runs the verify packages unmodified (proving the packaged file resolves), and one
that sets `ALIASES_JSON_FILE` to a remapped file and asserts the requests change. That second leg is
Track 1 of [03](./03-end-to-end-target.md), in miniature, with no stack and no Verdaccio.
