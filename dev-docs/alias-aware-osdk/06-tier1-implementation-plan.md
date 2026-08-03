<!-- cspell:words codepaths customizer hackweek officeassignment officenetwork osdks peopleapp remapper spts unaliased -->

# Tier 1 implementation plan

## Context

A generated v2 TypeScript OSDK bakes environment-specific identifiers into its runtime
JavaScript. Move an SDK to another Foundry stack and it breaks, which is why api-gateway's
`OntologiesApiResourceV2` carries ~30 server-side remapping sites for Marketplace-installed
SDKs. The design work is done and lives in docs [00](./00-project-summary.md)–[05](./05-aliases-file-schema.md)
plus the three [fixtures](./fixtures/); this document turns it into code.

The surface is small because compilation erases nearly everything: properties, links,
`interfaceMap`, `inverseInterfaceMap`, `titleProperty`, and action `parameters` all collapse
into a never-assigned `__DefinitionMetadata?` type slot and are re-fetched at runtime. This is
now verified rather than reasoned: the erasure holds in all three pipelines that compile a
generated SDK — babel ESM and tsup/esbuild CJS (`monorepo.tool.transpile`), and `tsc` via
`foundry-sdk-generator/src/generate/betaClient/compileInMemory.ts`. What actually survives into
`.js` is a handful of strings per entity. Replacing those strings with getters that consult a
runtime alias file is enough to make requests indistinguishable from a natively generated SDK.

Two decisions are already made and this plan is written to them:

- **Tier 1 only.** Ontology RID/branch, object `apiName`, object `primaryKeyApiName`,
  interface `apiName`, action **`unsanitizedApiName`** (not `apiName` — see
  [The getter pattern](#the-getter-pattern)), query `apiName`/`version`. Property and link
  remapping (Tier 2) is **not** implemented — see [Known limitation](#known-limitation-tier-2).
  Of these eight, `primaryKeyApiName` is emitted but never reaches the wire; the rest do.
- **Direct `@osdk/aliases` import.** Generated code imports resolvers from a new published
  package rather than re-exporting them through a per-SDK shim. This buys a single shared
  registry (a host can inject one override that all loaded SDKs see) at the cost of a new peer
  dependency everywhere an SDK is consumed.

**Always on.** Every generated OSDK emits and reads the file. No flag, no dual codepath, no
compiled-in default. Resolvers take one argument — the source-environment alias — so a missing
key is a hard error, not a silent fallback to a stale name.

The goal is for `aliases.json` to become the artifact's complete, auditable inventory of what it
assumes about its stack. Tier 1 does not reach that, and the plan should not claim it does:
several paths still ship environment-specific identifiers the file neither records nor rewrites
— see [Why `aliases.json` is not yet a complete inventory](#why-aliasesjson-is-not-yet-a-complete-inventory).

---

## Phase 0 — Record baselines before touching the generator

Every tracked `generatedNoCheck` tree moves in this project. Record what "before" looks like
from clean `main` first, so the one baseline-moving commit can be reviewed as a diff rather
than a regeneration.

- ~264 tracked files will move: `e2e.generated.catchall` (89),
  `e2e.sandbox.peopleapp` (58), `e2e.sandbox.officenetwork` (54),
  `examples-extra/docs_example` (17), `e2e.sandbox.officeassignment` (16),
  `e2e.generated.api-namespace.local` (11), `e2e.sandbox.todoapp` (10),
  `e2e.generated.api-namespace.dep` (8), `react-sdk-docs` (1).
- `e2e.generated.1.1.x` (107 files) is a frozen fossil — `private: true`, no `codegen` script
  and no `build` script, so it publishes nothing and no generator in this repo can regenerate
  it. Untouched, and not a gap: there is no `packages/generator/src/v1.1/`, and every caller
  reaches `generateClientSdkVersionTwoPointZero`.
- **`e2e.sandbox.officenetwork`'s checked-in output is stale.** It does have a `codegen` script,
  but its tree was generated against `$ExpectedClientVersion = '2.7.0'` where every other tree
  is on `'2.52.0'`, and it predates the `$branch` export. Regenerating it therefore produces a
  large diff mostly unrelated to the alias work. Regenerate it in its own commit before Phase 5
  so it does not contaminate the baseline diff.
- `client.test.ontology/src/generatedNoCheck` is untracked (rebuilt by
  `generateMockOntology.js`), so it sits outside the diff gate.

Capture, on clean `main`: the recorded HTTP request traces for the e2e suites (see Phase 6)
and `pnpm turbo transpile` output. These are the "unchanged behavior" oracle.

---

## Phase 1 — New package `@osdk/aliases` (`packages/aliases/`)

A dependency-free leaf library. Model the package layout on `@osdk/api`; register it in
`.monorepolint.config.mjs` under the **`"oxc migrated libraries with check-api"`** archetype
(alongside `@osdk/api`, `@osdk/functions`, `@osdk/unit-testing`) so it gets `checkApi`, the oxc
toolchain, and an `etc/aliases.report.api.md`.

### `src/AliasesFile.ts`

The normative types, transcribed from [05-aliases-file-schema.md](./05-aliases-file-schema.md)
§1 — `AliasesFile`, `DefaultAliases`, and the per-entity value types (`OntologyValue`,
`ObjectTypeValue`, `InterfaceTypeValue`, `ActionTypeValue`, `QueryTypeValue`, `PropertyValue`,
`LinkValue`, `RidIdentifier`, `VersionedRidIdentifier`). Plus:

- `parseAliasesFile(json: unknown): AliasesFile` — structural validation per §5, throwing with
  the offending path.
- `serializeAliasesFile(file: AliasesFile): string` — deterministic sorted-key emission
  (§1.4). Shared by the generator's emitter and by tests, so there is exactly one serializer.

**Hard constraint (§3):** `loadPublishedAliases()` in
`packages/functions/src/aliases/loaders.ts` calls `Object.entries()` **unguarded** on
`datasets`, `mediasets`, `streams`, `models`, `egressConnections`, and `custom`.
`Object.entries(undefined)` throws. Every file we emit must include all six legacy maps, as
`{}` when empty. Put this in `serializeAliasesFile` so it cannot be forgotten, and assert it
in a test.

### `src/registry.ts`

Four layers, highest wins: **programmatic override → `ALIASES_JSON_FILE` →
`RESOURCES_JSON_FILE` → packaged**. Resolution across layers is _permissive and layered_;
resolution of an individual key is _strict_. That asymmetry is the central semantic rule.

```ts
export function registerPackagedAliases(sdkId: string, file: AliasesFile): void;
export function setAliasOverride(file: AliasesFile | undefined): void;
```

- `registerPackagedAliases` merges into a single packaged layer. Two SDKs in one process
  (e.g. `e2e.generated.api-namespace.local` + `.dep`) both register; a key registered twice
  with _different_ values throws naming both `sdkId`s. Identical values are a no-op, which is
  the common case for SDKs over the same ontology.
- The merged view is computed lazily on first resolve and memoized; `setAliasOverride` clears
  the memo.

`registry.ts` also defines `$describeLayers()` (used to build the missing-key error message) and
`$resetAliasRegistry()`. Both are `export`ed from the module but are **unreachable from outside
the package**: `src/index.ts` re-exports only `registerPackagedAliases` and `setAliasOverride`,
and the `./*` subpath maps to `build/*/public/*`, where the only file is `node.ts`. So there is
no `@osdk/aliases/registry` entry point. This is deliberate for `$describeLayers` — it is an
error-message helper, not API — but it means **external tests cannot reset registry state
between cases**. Any consumer-side test that needs a clean registry has to either use
`setAliasOverride(undefined)` (which clears the override layer but not the packaged one) or run
in a fresh module registry. If a future phase wants real teardown, `$resetAliasRegistry` has to
be promoted into `src/public/` and the API report regenerated — it is not a re-export away.

Environment layers are read through the package `exports` map, not a runtime `typeof process`
sniff. The original design used the **`"node"` export condition**, so the env layer would
activate automatically. **That turned out to be unimplementable here** and the shipped design
differs — three alternatives were tried and empirically ruled out:

- The `"node"` condition itself: monorepolint's `ourExportsConvention` compares the `exports`
  object with exact `JSON.stringify` equality, and its fixer silently _deletes_ a hand-added
  `"node"` key. Not overridable per package.
- A `process.env.TARGET` build guard: leaves `import * as fs from "node:fs"` standing in
  `build/browser/`.
- A package `imports` map: Node rejects it (`Invalid "imports" target`).
- `publishConfig.exports`: also mrl-checked, and invisible to workspace-linked consumers.

**Shipped instead:** an explicit `@osdk/aliases/node` subpath that installs the loader as an
import side effect. `src/index.ts` (browser/default) has no env layer and never references
`node:fs`.

The cost is real and must be documented wherever `ALIASES_JSON_FILE` is mentioned: it requires
`import "@osdk/aliases/node"` once per process, and **without that import the env var is a
silent no-op** — the run looks like a success and quietly uses the packaged layer. Any harness
relying on the env var should assert a known-remapped value early and throw, rather than trust
it took effect.

### `src/resolve.ts`

```ts
export function $resolveOntologyRid(sourceRid: string): string;
export function $resolveOntologyBranch(sourceRid: string): string | undefined;
export function $resolveObjectType(alias: string): string;
export function $resolvePrimaryKey(typeAlias: string): string;
export function $resolveInterfaceType(alias: string): string;
export function $resolveAction(alias: string): string;
export function $resolveQuery(alias: string): string;
export function $resolveQueryVersion(alias: string): string;
export function $resolveProperty(typeAlias: string, propAlias: string): string;
export function $resolveLink(typeAlias: string, linkAlias: string): string;
```

Every one throws on a missing key, with a message naming the map, the key, and the layers
consulted. `$resolveProperty`/`$resolveLink` ship and are tested but are **not called by
generated code in Tier 1** — the emitter already writes the data, so Tier 2 becomes an
emitter-side change only.

---

## Phase 2 — Generator: collect and emit the file

`@osdk/generator` takes a normal dependency on `@osdk/aliases`.

**Collector** — `packages/generator/src/aliases/AliasesCollector.ts`. A small class with
`addOntology`, `addObject`, `addInterface`, `addAction`, `addQuery`, and
`build(): AliasesFile`. Add `aliases: AliasesCollector` to
`packages/generator/src/GenerateContext/GenerateContext.ts` (it has no collector today) and
construct it in `generateClientSdkVersionTwoPointZero.ts` where `ctx` is built.

Keys are **source-environment wire API names**, never namespace-stripped — use `fullApiName`,
not `shortApiName`. The `ontologies` map is keyed by the source ontology RID and is always
populated, even when `ontologyApiNamespace != null` and the SDK exports no `$ontologyRid`.

**Emitter** — `packages/generator/src/v2.0/generateAliasesFile.ts`, called **last** in
`generateClientSdkVersionTwoPointZero.ts` (after `generatePerObjectDataFiles`,
`generatePerInterfaceDataFiles`, `generatePerActionDataFiles`,
`generatePerQueryDataFilesV2`), so the collector is complete. Writes two files to `outDir`:

- `aliases.json` — canonical, via `serializeAliasesFile`. The auditable,
  Marketplace-rewritable artifact.
- `aliases.ts` — `export const $packagedAliases: AliasesFile = { … };` with the same content.
  This is what actually ships (see Phase 4).

  The annotation must be **explicit**, not `satisfies`. The first cut emitted
  `= { … } satisfies AliasesFile`, which typechecks fine in isolation but breaks consumers:
  generated SDKs are transpiled with `--isolatedDeclarations`, under which `satisfies` does not
  count as an explicit type annotation, and the build fails with
  `TS9010: Variable must have an explicit type annotation`. This surfaces only in a full
  `pnpm turbo transpile` (it took down `@osdk/e2e.generated.api-namespace.dep#transpileCjs`), not
  in the generator's own unit tests — so `generateAliasesFile.test.ts` now asserts the emitted
  form directly, both positively and with a `not.toContain("satisfies AliasesFile")` guard.

---

## Phase 3 — Generator: replace baked strings with resolvers

### Registration rides the `$osdkMetadata` import

`packages/generator/src/v2.0/generateMetadata.ts` gains, above the existing exports:

```ts
import { registerPackagedAliases } from "@osdk/aliases";
import { $packagedAliases } from "./aliases.js";
registerPackagedAliases("<package name>", $packagedAliases);
```

**Every** generated object, interface, action, and query const already imports `$osdkMetadata`
from `OntologyMetadata.ts` in order to set `osdkMetadata: $osdkMetadata`. So registration is
guaranteed to have run before any resolver getter can fire — including through deep imports —
with no extra import line per file.

`$ontologyRid` is consumed as a bare string (`createClient(url, $ontologyRid, auth)` in
e.g. `packages/e2e.sandbox.todoapp/src/foundryClient.ts:24`), so it must stay
`export const $ontologyRid: string`. It becomes eagerly resolved at module init:

```ts
export const $ontologyRid: string = $resolveOntologyRid(
  "ri.ontology.main.ontology.…",
);
export const $branch: string | undefined = $resolveOntologyBranch(
  "ri.ontology.main.ontology.…",
);
```

Eager means a bad alias file fails at import rather than at first request. That is the
intended "the file is load-bearing" behavior, but note it: `setAliasOverride` called _after_
importing the SDK will not retroactively change `$ontologyRid`. Tests must set the override,
or the env var, before importing.

**`$branch` has no coverage from shipped artifacts.** Every alias file the generator emits sets
`branch: null` — verified across all ten generated `aliases.json` files and all three
`packages/aliases/src/__fixtures__/*.json`. `branch` rides the query string only when non-null,
so with a packaged file `?branch=` never appears and a broken `$resolveOntologyBranch` would be
invisible in a recorded trace. The differential suite gets around this by having
`remapAliases.ts` **synthesize** a branch onto the remapped ontology
(`ontology.branch = { rid: REMAPPED_BRANCH_RID }`) purely so the resolver becomes observable —
its appearance in the URL is itself the assertion. Treat that as scaffolding, not evidence about
real SDKs: nothing we ship today exercises this path, and the first genuinely branch-bearing
alias file will be the first real test of it.

### The getter pattern

Verified against the repo's TypeScript 5.5.4, with one correction to the original claim: a
getter leaves the emitted `.d.ts` **byte-identical** (confirmed via `tsc --emitDeclarationOnly`

- `diff`), but a _bare_ getter does **not** satisfy a literal-typed property —
  `get apiName() { return $resolveObjectType("Todo"); }` fails with
  `TS2322: Type 'string' is not assignable to type '"Todo"'`. Each getter needs an
  `as "<literal>"` cast on the return. The cast is what makes the erasure claim hold: the
  declared type stays the literal, only the runtime value becomes dynamic.

**Object** — `wireObjectTypeV2ToSdkObjectConstV2.ts` (the `export const ${shortApiName} = {…} satisfies … as …` template around :138-150). `apiName:` and `primaryKeyApiName:` become:

```ts
get apiName() { return $resolveObjectType("com.example.Todo") as "Todo"; },
get primaryKeyApiName() { return $resolvePrimaryKey("com.example.Todo") as "id"; },
```

`primaryKeyType` and `internalDoNotUseMetadata.rid` stay literal.

**`primaryKeyApiName` is emitted but inert on the wire.** Every runtime read of it in
`packages/client` goes through _fetched_ metadata, not the generated const:
`createObjectSet.ts:397` builds the `withPk` filter from
`clientCtx.ontologyProvider.getObjectDefinition(...)`, and the same holds at
`BulkObjectLoader.ts:180`, `SpecificLinkQuery.ts:221`, `getDollarLink.ts:49`,
`createOsdkObject.ts:294`, and `buildObjectSetFromLinkDef.ts:89`. Confirmed empirically:
remapping `Employee.primaryKeyApiName` leaves `field: "employeeId"` unchanged in the emitted
request. So resolving it is correct for user code that reads `Todo.primaryKeyApiName` directly,
but it changes no request. Of the eight Tier 1 axes, this is the one that does not reach the
wire — it becomes load-bearing only once Tier 2 remaps properties, since a primary key is a
property and the two must move together (schema rule 4:
`primaryKeyApiName === properties[pk].apiName`). Keep emitting it; do not claim it as a
working remap in a demo.

**Interface** — same shape at `wireInterfaceTypeV2ToSdkObjectConst.ts:221-228`, using
`$resolveInterfaceType`.

**Action and query** are built with `stringify()`
(`packages/generator/src/util/stringify.ts`), which always emits `key: value` and therefore
**cannot** emit a getter. For each, drop the key from `stringify` with a
`() => undefined` customizer and append the getter to the object literal by hand,
next to the existing `osdkMetadata: $osdkMetadata` line:

- `generatePerActionDataFiles.ts` `createV2Object()` (~:244) → `$resolveAction` applied to
  **`unsanitizedApiName`, not `apiName`**. `apiName` is the camelized TS identifier and must
  stay literal; `unsanitizedApiName` is the wire name, and it is what actually reaches the
  server — `applyAction.ts:133,140,163,171` and `fetchMetadata.ts:62` read
  `unsanitizedApiName ?? apiName`. It is always populated
  (`wireActionTypeV2ToSdkActionMetadata.ts:39` falls back to `input.apiName`), so never elide
  it, even when it equals `apiName`. Resolving `apiName` instead would remap nothing.
- `generatePerQueryDataFiles.ts` (~:229-239) → `$resolveQuery` for `apiName` and
  `$resolveQueryVersion` for `version`. `baseProps` comes from
  `wireQueryTypeV2ToSdkQueryDefinitionNoParams` and always carries `version`, so the emitter
  always writes `version` into the alias entry and the resolver never needs a fallback.
  Validation rule: a hand-written alias file must carry `version` for every query.

---

## Phase 4 — Packaging and dependency propagation

**The `.json` does not currently ship.**
`packages/monorepo.tool.transpile/bin/transpile2.mjs:207-211` globs only `src/index.ts`,
`src/public/*.ts`, `src/public/**/*.ts`, so a `.json` under `src/generatedNoCheck/` never
reaches `build/`. Two consequences:

1. `aliases.ts` is the load-bearing carrier of the packaged defaults — it compiles like any
   other generated module. This is why Phase 2 emits both.
2. Add a copy step so `aliases.json` also lands in `build/`, and add it to the affected
   packages' `files` arrays. Without this, Marketplace has nothing in the artifact to rewrite,
   which is the whole eventual point. It is a few lines; do it now rather than as follow-up.

**Peer dependency.** `@osdk/aliases` gets the same treatment `@osdk/client` gets — a peer, not
a regular dep, because the registry is module-level and a host injecting an override must
reach the same instance.

- `packages/foundry-sdk-generator/src/generate/betaClient/generatePackage.ts:38-40` —
  `betaPeerDependencies` goes from `{ "@osdk/client": undefined }` to also include
  `"@osdk/aliases": undefined`; it resolves through the existing
  `resolveDependenciesFromFindUp`. Update the `generatePackageJson` snapshot.
- In-repo consumers of generated SDKs add `"@osdk/aliases": "workspace:~"`:
  `e2e.generated.catchall`, `e2e.generated.api-namespace.local`, `.dep`, the `e2e.sandbox.*`
  apps, `client.test.ontology`, `examples-extra/docs_example`, `react-sdk-docs`.
  monorepolint's `alphabeticalDependencies` will want them sorted.
- **create-app / create-widget templates need almost nothing.** Their
  `templates/package.json.hbs` reference `{{osdkPackage}}` — the customer's own generated SDK,
  which carries the peer itself. Only the three that hard-code `@osdk/client`
  (`create-app.template.tutorial-todo-app.beta`,
  `create-app.template.tutorial-todo-aip-app.beta`, `create-widget.template.react.v2`) should
  list `@osdk/aliases` alongside it, for symmetry.

Add one changeset in `.changeset/` covering `@osdk/aliases`, `@osdk/generator`, and
`@osdk/foundry-sdk-generator`.

---

## Phase 5 — Regenerate baselines (one commit)

A single commit that runs every package's `codegen` script and nothing else, so the ~264-file
diff is reviewable in isolation from the logic changes. Verify by eye that the diff is
exclusively (a) new `aliases.ts` / `aliases.json` files, (b) `apiName` / `primaryKeyApiName` /
`version` literals turning into getters, (c) the `OntologyMetadata.ts` registration block.
After this commit, generated output should stop moving.

---

## Phase 6 — Tests

**Emitter, in `@osdk/generator`:**

- Byte-equality: generating against `TodoWireOntology` produces exactly
  [`fixtures/aliases.todo.identity.json`](./fixtures/aliases.todo.identity.json). That fixture
  was built as the identity fixed point precisely to serve as this oracle. Use the existing
  `createMockMinimalFiles` harness
  (`getFiles = () => Object.fromEntries(writeFile.mock.calls)`).
- Key completeness in both directions: every entity in the ontology has an alias entry, and
  every alias entry corresponds to a real entity.
- All six legacy maps present and `{}`.

**Runtime, in `@osdk/aliases`:** layer precedence, missing-key throws naming the map and key,
cross-SDK conflict detection, and — using
[`fixtures/aliases.todo.incomplete.json`](./fixtures/aliases.todo.incomplete.json) — that a
missing `objects.Todo.properties.body` is tolerated in Tier 1 while a missing
`actions.deleteTodos` throws, and that omitting
`interfaces.SomeInterface.properties.SomeProperty.id` **succeeds** (proving `id`'s optionality
is real, not lazy).

**Differential, end to end:** `packages/shared.test/src/setupServers.ts` already has the hook
we need — `apiServer.events.on("request:start", …)` in `startNodeApiServer`. Add a recorder
behind it that captures method + path + body, and run the e2e suite in three modes:

One trap in that harness: `startNodeApiServer`'s `clientFactory` is invoked with
`fauxFoundry.defaultOntologyRid` (`setupServers.ts:95`), i.e. the ontology RID is handed to the
client directly by the test scaffolding rather than read from the SDK's `$ontologyRid`. **Any
test built on `startNodeApiServer`'s client therefore never exercises `$resolveOntologyRid`**,
no matter how thoroughly it asserts on the resulting URLs — the RID in the path came from the
faux server, not from the alias file. The differential suite has to construct its client from
the SDK's own exported `$ontologyRid` to close that gap. Worth stating explicitly because the
resulting traces look completely convincing either way.

| mode                | setup                                                   | expectation                                                                                                                            |
| ------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `packaged`          | no env var                                              | traces byte-identical to the Phase 0 baseline                                                                                          |
| `identity-override` | `ALIASES_JSON_FILE=fixtures/aliases.todo.identity.json` | identical to `packaged`                                                                                                                |
| `remapped`          | `ALIASES_JSON_FILE=fixtures/aliases.todo.remapped.json` | object/interface/action/query names in URLs and bodies are the `foo.bar.*` targets; **property and link names are unchanged** (Tier 1) |

**Correction — the original rationale for `identity-override` was inverted.** This plan claimed
`identity-override` vs `packaged` is what catches a literal that survived the getter rewrite. It
is not, and a negative control proved it: with `get apiName()` reverted to a literal on a built
`Employee.js`, `identity-override produces a byte-identical trace to packaged` **still passed**.
Of course it did — identity aliases and surviving literals are the same strings, so the two
traces agree either way. That assertion is structurally incapable of detecting the failure it was
supposed to detect.

What each mode actually buys:

- **`remapped`**, plus a sentinel sweep that prefixes _every_ name and walks all exported
  definitions, is what catches surviving literals. Under the same negative control, 6 of 12
  tests failed — all of them from this family.
- **`identity-override`** catches resolution that _fires but returns something subtly wrong_: a
  bad lookup key, a partial layer shadowing the packaged one, a normalizer applied on one path
  and not the other. Real value, different value. It is a correctness check on the resolver, not
  a liveness check on the rewrite.
- **`packaged`** pins the baseline so the other two have something to differ from.

Generalizing, because this trap is easy to re-set: an oracle whose two sides coincide in the
failure case proves nothing. Any assertion added here should be paired with a negative control —
break the thing on purpose, confirm the test goes red — before it is trusted.

---

## Verification

```sh
pnpm turbo typecheck --filter=@osdk/aliases --filter=@osdk/generator --filter=@osdk/foundry-sdk-generator
pnpm turbo test --filter=@osdk/aliases --filter=@osdk/generator
pnpm turbo check-api --filter=@osdk/aliases          # commit etc/aliases.report.api.md
pnpm --dir packages/e2e.sandbox.catchall vitest run
pnpm turbo transpile                                 # global; catches cross-package breaks
pnpm mrl check                                       # monorepolint
git ls-files --modified --others --exclude-standard | xargs npx dprint fmt
```

Note: `npx dprint check` at the repo root reports a **pre-existing** failure in
`benchmarks/tests/primary/src/helpers.js:65:5` unrelated to this work.

Manual end-to-end demo: run `e2e.sandbox.todoapp` against the mock server with no env var,
then with `ALIASES_JSON_FILE` pointed at the remapped fixture, and diff the recorded traces.
The object/action/query names should change and nothing else should.

---

## Known limitation: Tier 2

**Property and link names are not aliased.** A Tier 1 SDK installed into an environment where
a property was renamed (`body` → `text`) will send the source name and get a 4xx. The
`remapped` fixture deliberately encodes exactly this case — namespace-prefixed _types_ but
bare, independently renamed _properties_ and _links_ — so the gap is visible in the test suite
rather than discovered in the field.

The full fix, for when it is picked up:

1. **Request direction.** Property names reach the wire from many call sites — `where` clauses,
   `select`, `orderBy`, aggregation groupings, action parameter keys, and `$link` traversals.
   The primary key is the worst of them: it appears both as a `where` field and as a response
   key (`BulkObjectLoader.ts:180-181,239-240`, `SpecificLinkQuery.ts:221,238`,
   `reloadDataAsFullObjects.ts:58`, `buildObjectSetFromLinkDef.ts:89`,
   `createObjectSet.ts:397`), and some sites read it from the generated const (source-named)
   while others read it from fetched metadata (target-named). Those two diverge the moment
   aliasing is real, so Tier 2 has to reconcile them, not just rewrite one.
2. **Response direction.** Server responses come back target-named and must be rewritten to
   source names before user code sees them (`createOsdkObject.ts:294,312,321,338`,
   `getDollarLink.ts:49,100`).
3. **Where it belongs.** Not in the generator — in `@osdk/client`, at the `OntologyProvider`
   layer. `createMinimalClient.ts:55-59` already takes an unexposed
   `createOntologyProviderFactory` parameter, which is the natural seam: wrap the provider so
   metadata it returns is source-named while requests it issues are target-named. Tier 1
   deliberately touches zero client code; Tier 2 cannot avoid it.
4. **The oracle needs extending first.**
   `generateClientSdkVersionTwoPointZero.test.ts:111-117` uses
   `changeNames(ontology, { objects, spts, interfaces, actions, queries })` — it has **no
   ability to rename properties or links**. Extending that immer rewriter is a prerequisite for
   any credible Tier 2 differential test.

`$resolveProperty` and `$resolveLink` already exist and are tested, and the emitter already
writes `properties` and `links` into every alias file, so Tier 2 needs no schema change and no
new file format — only consumers.

## Other known gaps

- **`e2e.sandbox.officenetwork`'s generated tree is stale**, not unscripted — see Phase 0.
  Regenerating it is a prerequisite for a reviewable Phase 5 diff.
- **`client.test.ontology/src/generatedNoCheck` is untracked**, so its output is outside the
  git diff gate; correctness there rests on the runtime tests alone.
- **Marketplace rewriting is not implemented.** This plan ships the artifact Marketplace would
  rewrite and the runtime that reads it; the install-time OCI layer that swaps the file is a
  separate piece of work.

### Why `aliases.json` is not yet a complete inventory

Four paths ship or hard-code stack-specific identifiers that the alias file does not account
for. None of them breaks a remapped SDK's OSDK request path — that claim still holds — but each
one falsifies the claim that the file is the artifact's whole story, and the widget manifest
breaks the widget.

- **`foundry-sdk-generator` publishes the entire un-erased ontology.**
  `generatePackage.ts:103-107` writes `ontologyInfo.requestedMetadata` — the same
  `OntologyFullMetadata` object handed to the generator at `:89` — verbatim to
  `UNSTABLE_DO_NOT_USE/ontology-metadata.json`, and `generatePackageJson.ts:70-74` publishes it
  as a public `exports` subpath, with no `files` array in the generated `package.json` to
  restrict what gets packed. That payload contains every object-type RID, every property RID and
  apiName, action parameter names, and the ontology RID and apiName — so a customer SDK ships in
  the clear exactly what erasure and aliasing were supposed to remove, and Marketplace would
  have to rewrite it too. `--ontologyJsonOnly` (`generatePackage.ts:58-65`) writes the same
  payload as `ontology.json`. Phase 4 of this plan edits `generatePackage.ts:38-40`; this sits
  sixty lines below and is easy to walk past.
- **Object and interface type RIDs stay literal by design.**
  `wireObjectTypeV2ToSdkObjectConstV2.ts:146-148` and
  `wireInterfaceTypeV2ToSdkObjectConst.ts:225-227` emit
  `internalDoNotUseMetadata: { rid: … }` unconditionally — ~60 distinct RIDs (39 object-type, 21
  interface) across the tracked generated trees. They are inert for `@osdk/client`: zero reads
  across `client/src`, `api/src`, `react/src`, `react-components/src`, and `functions/src`, so a
  remapped SDK still issues correct requests. The emitted `aliases.json` already carries these
  RIDs under `objects.<X>.id.rid` and `interfaces.<X>.id.rid`, so closing this needs a consumer,
  not a schema change.
- **The widget manifest bakes those RIDs into a deployed artifact.**
  `widget.vite-plugin/src/build-plugin/buildWidgetSetManifest.ts:113-124` reads
  `parameter.allowedType.internalDoNotUseMetadata.rid` off the generated const and writes it as
  `objectTypeRids` / `allowedType` into `.palantir/widgets.config.json` in `dist/`, and
  `common/validateWidgetConfig.ts:80` hard-requires it. So a widget built against one stack
  carries that stack's RIDs into what it publishes, where they are not inert. **Tier 1 cannot
  fix this even in principle**: Tier 1 resolves apiNames, and this needs a rid→rid mapping plus a
  resolver on the emitted literal.
- **babel ESM sourcemaps embed the full pre-erasure source.** `transpile2.mjs:415-437` writes
  `result.map` through untouched; `transformTypes()` clears `result.map.sourcesContent` at
  `:130` but `transpileWithBabel` never does. Every `build/esm/**/*.js.map` therefore contains
  the complete TypeScript source — every property name and object-type RID that erasure
  removed from the `.js` — and `build/esm` is in the published `files` array. Scope is in-repo
  published packages only; customer SDKs are unaffected because the beta path sets no
  `sourceMap`. `.d.cts` output and retained JSDoc are parallel un-rewritten copies of the same
  names.
