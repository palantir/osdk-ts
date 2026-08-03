<!-- cspell:words Hackweek Rehydrator TPAS Templatize Templatizer aliasable codepaths inlines remapper spts unaliased unrepresentable bidirectionality conftest coverton hackweek interceptable officeassignment officenetwork osdks rehydrator remappable retarget shrinkwrapping staticmethod templatize templatizer unconfigured -->

# Implementation plan

## 1. What static information the file must carry

The question to answer is: _what does the generator know at generation time that the SDK needs at
runtime, that is environment-specific?_ For a v2 TypeScript OSDK the answer is much smaller than for
Python, because `tsc` erases nearly all of it (see [00](./00-project-summary.md) §4).

Split into three tiers.

### Tier 1 — reaches the wire from the generated `.js` (must be in the file)

| Value                                  | Wire position                                             | Source in generator                          |
| -------------------------------------- | --------------------------------------------------------- | -------------------------------------------- |
| ontology RID                           | URL path `{0}` on every call                              | `generateMetadata.ts:37`                     |
| ontology branch RID                    | query param on nearly every call                          | `generateMetadata.ts:38-39`                  |
| object type API name                   | request **body**, `{type:"base", objectType}`             | `wireObjectTypeV2ToSdkObjectConstV2.ts:142`  |
| **primary key property name**          | `where`-clause field **and** response key                 | `wireObjectTypeV2ToSdkObjectConstV2.ts`      |
| interface API name                     | request **body**, `{type:"interfaceBase", interfaceType}` | `wireInterfaceTypeV2ToSdkObjectConst.ts:228` |
| action API name (`unsanitizedApiName`) | URL path segment                                          | `generatePerActionDataFiles.ts`              |
| query API name                         | URL path segment                                          | `generatePerQueryDataFiles.ts`               |
| query version                          | query param, only when `isFixedVersion`                   | `generatePerQueryDataFiles.ts`               |

`primaryKeyApiName` was missing from earlier drafts of this table and is the one genuinely surprising
entry, so it is worth spelling out. It is a **property** name that gets baked into generated code, and
it reaches the wire in both directions: as a `where` field (`BulkObjectLoader.ts:180-181,239-240`,
`SpecificLinkQuery.ts:221,238`, `reloadDataAsFullObjects.ts:58`, `buildObjectSetFromLinkDef.ts:89`,
`createObjectSet.ts:397`) and as a response key (`createOsdkObject.ts:294,312,321,338`,
`getDollarLink.ts:49,100`). The trap: some of those sites read it from the **generated const**
(`objDef`/`def`, source-named) and others from **fetched metadata** (`objMetadata`/`metadata`,
target-named). Today those always agree. Under aliasing they diverge unless the generated const is
resolver-backed — which is why it gets a required field of its own on `ObjectTypeValue` rather than
riding along in `properties`.

One more Tier 1 subtlety, in the other direction: an action's **sanitized** `apiName` must stay a
literal. `applyAction.ts:133,140,163,171` and `fetchMetadata.ts:62` read
`unsanitizedApiName ?? apiName`; only `unsanitizedApiName` is a wire name, and `apiName` is the
TS-facing identity used as an object key. `EnhancedAction` sets `unsanitizedApiName` unconditionally
from `raw.apiName`, so the fallback never fires — but the emitter must not start eliding it when the
two are equal, or an unresolved literal reaches the wire. Assert that in the generator test.

### Tier 2 — reaches the wire but only ever as a _caller-supplied string_ (must be in the file, remapped in the client)

These never appear in generated JavaScript. They exist only as type-level keys derived from
`__DefinitionMetadata`, and the value that goes over the wire is whatever the user typed.

| Value                          | Where it enters the wire                                                                                                                                                      |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| property API names             | `where`, `orderBy`, `select`/`selectV2`, aggregation fields, group-by fields, struct-field selectors, transaction-edit property maps, timeseries/media/geotime `propertyName` |
| link API names                 | `pivotTo` → `searchAround`, `$link`, `fetchLinksPage`, RDP `pivotTo`                                                                                                          |
| interface property (SPT) names | interface `where`/`select`/`orderBy` via `fullyQualifyPropName`                                                                                                               |

### Tier 3 — does _not_ need to be in the file

Deliberately excluded, with reasons, so nobody adds them speculatively:

- **Everything in `__DefinitionMetadata`** other than names — `titleProperty`, `implements`,
  `implementedBy`, `interfaceMap`, `displayName`, `status`, action `parameters`, query `output`.
  The client re-fetches all of it from the target server through `OntologyProvider`, which uses the
  _same_ `@osdk/generator-converters` functions the generator uses.
- **`internalDoNotUseMetadata.rid`** — never read by `@osdk/client`. It is a _build-time_ input to
  widget manifests (`widget.vite-plugin/src/build-plugin/buildWidgetSetManifest.ts:113-123`,
  `validateWidgetConfig.ts:80`). Runtime indirection cannot help it; widgets need their own story.
- **Action / query parameter names.** Object-typed action params serialize duck-typed from the
  instance (`toDataValue.ts:111-132` reads `$primaryKey`/`$objectType`), and the parameter _keys_
  come from `ActionMetadata` fetched from the target server. Add only if a concrete failure appears.
- **Object type / property RIDs** as a _resolution mechanism_. The generated SDK never sends a RID, and
  resolving by RID would require a RID→apiName hop at runtime. Not for the first cut. Note this is
  narrower than it was in earlier drafts: the schema in [05](./05-aliases-file-schema.md) _does_ carry
  an optional `id: {rid}` on every ontology entry, but strictly as **provenance** — populated by the
  generator, matched on by Marketplace's rehydration, and never read by the resolvers. Carrying it now
  costs nothing and means the runtime hop, if it is ever wanted, is not a schema change.

### 2. The alias file

#### 2.0 Where the schema lives, and where the file lives

Two decisions that shape everything downstream.

**The schema is defined here, in TypeScript, and is backwards-compatible with `function-registry`'s
Conjure type.** `@osdk/aliases/src/AliasesFile.ts` holds the types and a real runtime parser; that is
the source of truth we iterate against this week. The Conjure change in `function-registry` is then a
_ratification_ of a format that already works, not a prerequisite for starting — which takes the
long-lead schema review off the critical path entirely.

Compatibility is achievable because the change is purely additive: five new optional members on
`DefaultAliases` (`ontologies`, `objects`, `interfaces`, `actions`, `queries`), sitting alongside the
existing six rather than nested under a wrapper. An existing file parses under the new reader (members
absent → no ontology entries), and a new file parses under existing readers, which ignore unknown
members — verified, not assumed: the generated `DefaultAliases.Builder` carries
`@JsonIgnoreProperties(ignoreUnknown = true)`.

Compatibility also runs in a direction that is easy to miss and does gate the week: a generated
`aliases.json` **must** carry all six legacy members, as `{}` when empty, because
`@osdk/functions`'s `loadPublishedAliases()` calls `Object.entries()` on five of them with no guards
and `Object.entries(undefined)` throws. Full analysis in [05](./05-aliases-file-schema.md) §3.

This also collapses a real mess. There are currently **five copies** of this schema — the Conjure
source, two generated TypeScript mirrors, `functions-typescript-packages`' `resourceAliases.ts`, and
`@osdk/functions`'s hand-written `src/aliases/types.ts` — and three of them are stale (3 categories vs
the source's 6). `@osdk/functions` should drop its hand-written copy and re-export `@osdk/aliases`,
taking five down to four and making the one that generated code depends on the one that is validated.

**Every generated SDK ships its own alias file, and reads it at runtime.** The generator emits
`aliases.json` into the package alongside `index.ts`, populated with the source environment's values,
and emits resolver calls that carry **no compiled-in default**. Consequences:

- There is one codepath, and CI runs it. No "with aliases" / "without aliases" branch where the branch
  that runs after a Marketplace install is the one nobody exercises locally.
- The file is the complete, auditable inventory of what the artifact assumes about its stack.
- It still works in a browser, because the file is part of the module graph and gets bundled — see §3.2
  for the load order. Reading a file from disk is an _override_ path, not the base case.

#### 2.1 Shape

**The normative schema now lives in its own document: [05](./05-aliases-file-schema.md).** It has the
TypeScript definition, the Conjure mirror, the backwards-compatibility analysis in both directions,
a completeness table against the verified generator inventory, the validation rules, and an explicit
list of what the file does _not_ cover. Three ready-to-use fixtures live in
[`fixtures/`](./fixtures/).

The one-line summary, because the rest of this section refers to it: five new optional members
(`ontologies`, `objects`, `interfaces`, `actions`, `queries`) sit **flat under `defaults`**, alongside
the existing six, each a `Record<string, Value>` keyed by the source-environment wire API name — except
`ontologies`, which is keyed by source ontology RID. Values carry a required `apiName` (the target wire
name) and an optional `id: {rid}` (provenance). `ObjectTypeValue` additionally carries a required
`primaryKeyApiName`.

Flat rather than nested under an `ontology` wrapper: it keeps every member of `defaults` a uniform
map, which is what lets the parser, the validator and the deterministic serializer be one code path.
The cost is that those five names are now reserved in a namespace shared with platform resources
([05](./05-aliases-file-schema.md) §1.3).

#### 2.2 Five schema decisions, made deliberately

**(a) Alias keys are the full generated API name, never namespace-stripped.**
The Python prototype uses `strip_namespace(apiName)` as the key
(`foundry-sdk-generator/.../identifiers.py:370-383`), which collapses `com.a.Flight` and
`com.b.Flight` onto `"Flight"`, silently, last-writer-wins. Use the value the generator already
has — `EnhancedBase.fullApiName` — so the key is unique by construction and is exactly what an
identity file maps it back to. That makes the emitted call trivially auditable:
`$resolveObjectType("com.example.local.Thing")`.

**(b) Links and properties nest under their owning type.**
Link API names are **directional and only unique per object-type pair**. api-gateway learned this
the hard way and now indexes link types twice, once per direction, each keyed by the _target_ object
type RID, with the reason spelled out at `OntologyMarketplaceMapperImplV2.java:97-101`:

> _We can't just compare object type RIDs because of self-reference links. We can't just compare
> link type names because of the case where a Marketplace link type has the same name in both
> directions, but the corresponding local API names are different._

The Python prototype uses a flat global `links: {alias: {apiName}}`. That will collide. Nesting
under the owning type gives the client exactly the `(objectType, linkName)` pair it has in hand at
`createSearchAround` and `getDollarLink`.

**(c) The ontology members are optional _in the format_, mandatory _in generator output_.**
These are different claims and conflating them is how the design gets watered back down to a
remapping file. The wire format keeps `objects`/`interfaces`/`actions`/`queries`/`ontologies` optional
so that an `aliases.json` written before this change still parses — that is the back-compat guarantee,
and it applies at the **override** layers. But a file emitted by the generator always has them, fully
populated; an SDK whose packaged file lacks them is a broken SDK, not a legacy one, and should fail
loudly.

The corresponding runtime rule: **file-level resolution is permissive and layered, key-level
resolution is strict.** An override file with no `objects` member contributes nothing and the
packaged file shows through. An override file _with_ an `objects` member that is missing a key the
generated code asks for is an error, because it means the remapper and the generator disagree about
what this SDK contains. `AliasUtils.getEmptyAliasesFile()` already exists for the permissive shape
(today only tests call it).

**(d) `version` stays `1`.**
It is required in the Conjure type, hardcoded to `1` in two places
(`AliasUtils.java:29`, `AliasesLayerResolver.java:35`) and **read by nobody** — every existing reader
would silently accept `version: 2`. Bumping it buys nothing and would break the older readers that do
not validate it. Adding an optional member is backwards compatible; leave the number alone, note the
dead field, and have the new parser _validate_ it so at least one reader in the fleet is honest.

**(e) Serialization is deterministic — sorted keys, stable formatting.**
Two independent reasons. `function-registry` already requires it, in as many words:
_"Marketplace reconciliation should be idempotent, so we need to use a deterministic serializer to
prevent two identical installations from creating different images"_ (`AliasesLayerResolver`). And the
generator's output is committed to git and gated by `git diff --exit-code`, so a nondeterministic map
iteration would produce phantom diffs across ~192 fixture files. Emit through a sorting serializer
from the first commit; retrofitting determinism after fixtures are committed is a bad afternoon.

#### 2.3 The install-time API-name-vs-RID choice

`ResolvedObjectTypeShape.apiName` in Marketplace is `optional` and — per its own docs —
_"Currently empty, in future OMS versions it will always be populated"_
(`marketplace/marketplace-api/src/main/conjure/shapes/ontology-types.yml:27`). So at install time
you get a **target RID**, not a target API name.

Two options:

- **Resolve at install time** — rehydration asks OMS for the API name and writes it into
  `aliases.json`. Simple; the file is self-contained; but it goes stale if the target entity is
  renamed after install.
- **Store the target RID and resolve at runtime** — exactly the double hop api-gateway does
  (`sourceApiName → targetRid → currentApiName`). Robust against renames, but requires the OSDK to
  make a metadata call it doesn't make today.

**Recommendation: write the API name (option 1) for the hackweek**, and leave room in
`ObjectTypeValue` for an optional `rid` so option 2 can be layered on. Note the trade-off
explicitly in the schema docs — this is a real regression against today's behavior and should be a
conscious one.

## 3. `@osdk/aliases` — a new dependency-free leaf package

### 3.1 Why a new package, and not `@osdk/functions`

Generated SDKs depend on `@osdk/api`. `@osdk/functions` peer-depends on `@osdk/client`. Having
generated code import a resolver from `@osdk/functions` inverts the dependency graph, drags the whole
Functions runtime into every SDK that has nothing to do with Functions, and couples the OSDK's most
foundational contract to a package whose reason for existing is a different product surface.

So: **`@osdk/aliases`, a leaf with zero runtime dependencies.** Generated SDKs import it, `@osdk/client`
imports it, and `@osdk/functions` re-exports it so `Aliases.model()` and friends keep working from
their current import path. This was flagged in earlier drafts as "the one decision that is expensive to
change later" — it is now made, and Monday's job is to create the package rather than to debate it.

The alternative considered and rejected was an `@osdk/api` subpath export. It avoids a new package
(and the `mrl check` config set, the api-extractor report, the changeset), but `@osdk/api` is
deliberately type-only in spirit; giving it a module with runtime behavior, a filesystem-touching
conditional export and a module-level cache is a worse long-term shape than one small leaf.

```
packages/aliases/
  src/AliasesFile.ts      types + parser + validation   (the local schema, §2.0)
  src/registry.ts         layered source registry, precedence, caching
  src/resolve.ts          the resolver functions generated code calls
  src/node.ts             side-effecting: registers the env-var/fs source
```

`src/node.ts` is a separate entrypoint under the package `exports` map so that the root entrypoint
contains **no `fs` and no `process`** — assert this mechanically ([02](./02-iteration-and-testing.md)
§6). `@osdk/functions` imports `@osdk/aliases/node` for its side effect, which is what wires up
`ALIASES_JSON_FILE` and `RESOURCES_JSON_FILE` inside a function image.

### 3.2 Load order

Highest priority wins, per key:

| # | Source                      | Set by                                                | Present in          |
| - | --------------------------- | ----------------------------------------------------- | ------------------- |
| 1 | explicit injection          | `createClient` option / `registerAliasSource()`       | tests, embedders    |
| 2 | `ALIASES_JSON_FILE`         | image build; **replaced at install by the OCI layer** | published functions |
| 3 | `RESOURCES_JSON_FILE`       | the local dev server                                  | live preview        |
| 4 | the SDK's own packaged file | the generator                                         | **always**          |

Layer 4 is why nothing has a compiled-in default: the base layer is a real file, produced at generation
time, that always exists. Layers 1–3 are overrides. A Marketplace install works by making layer 2 win,
which is exactly the OCI-layer swap `AliasesLayerResolver` already performs for sources and models.

An override that omits the `ontology` member (an old-format file) contributes nothing and layer 4 shows
through — that is the back-compat path, and it is the reason precedence is per-source-file rather than
per-key merged across all four.

### 3.3 The resolver API

Note the shape change from earlier drafts: **one argument, not two.** There is no default to pass.
Every resolver takes the source-environment alias and returns the target-environment wire name; the
argument is always a key into the file, never a fallback value.

```ts
// @osdk/aliases
export function $resolveOntologyRid(sourceRid: string): string;
export function $resolveOntologyBranch(sourceRid: string): string | undefined;
export function $resolveObjectType(alias: string): string;
export function $resolvePrimaryKey(typeAlias: string): string;
export function $resolveInterfaceType(alias: string): string;
export function $resolveAction(alias: string): string;
export function $resolveQuery(alias: string): string;
export function $resolveQueryVersion(alias: string): string | undefined;
export function $resolveProperty(typeAlias: string, propAlias: string): string;
export function $resolveLink(typeAlias: string, linkAlias: string): string;
```

The two ontology resolvers take an argument for the same reason the rest do: `defaults.ontologies` is
a keyed map like every other member, keyed by the **source** ontology RID (the only stable identity an
ontology has in an OSDK — `$ontologyRid` is the only thing that reaches a request). So the emitted
call is `$resolveOntologyRid("ridHere")`. See [05](./05-aliases-file-schema.md) §1.1 and §8; the
alternative — a zero-argument resolver that asserts the map has exactly one entry — also works and is
the only real open question left in the schema.

Three rules:

1. **Strict resolution, loud failure.** An unknown key throws, with a message naming the kind, the key,
   and _which source the active file came from_ — that last part is the diagnostic a Marketplace
   installer will actually be staring at. This is a reversal of the "total function with silent
   fallback" rule from earlier drafts, and the reversal is the point: with no compiled-in default there
   is nothing to silently fall back to, and a missing key means the generator and the remapper disagree
   about what this SDK contains. Failing at the first `fetchPage` beats sending
   `{"type":"base","objectType":undefined}` and debugging a 400.

   The existing `Aliases.model()`/`custom()` accessors also throw, with an "Available aliases:" hint —
   so the two families now agree on _behavior_ while differing in _audience_. Author code that names a
   missing model made a typo; generated code that names a missing object type was mis-remapped. Word
   the messages accordingly, and say so in a comment; the Python prototype has both philosophies in one
   module with nothing explaining it.

2. **Cache with an explicit invalidation hook.** `PUBLISHED` mode is already memoized module-level with
   `resetPublishedCache()` exported for tests. `LIVE_PREVIEW` is deliberately uncached for hot reload —
   but it currently `stat`s, reads and re-parses the file on _every resolver call_, and generated code
   now calls resolvers per request. Add an mtime check.

3. **`@osdk/client` reads the registry, never the filesystem.** Tier 2 remapping (§4.1) needs the
   resolved map, and it gets it by importing the root `@osdk/aliases` entrypoint. `@osdk/client` runs in
   browsers; keep every `fs`/`process` touch behind `@osdk/aliases/node`.

## 4. Why TypeScript is harder than Python — and where

This is the crux of the project. Python's prototype is a **pure generator change**: 10 Jinja
templates, ~38 substitution sites, zero runtime changes beyond a new `aliases` package. That is not
available in TypeScript.

|                        | Python OSDK                                                                                                                                                                                                                      | TypeScript OSDK                                                                                                                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Where identifiers live | Runtime methods. `api_name()` is a `@staticmethod` returning a string; property names are runtime class vars (`Properties.string("city")`); links are runtime `link="…"` strings. **Everything is interceptable in a template.** | Split. Six runtime keys per entity; **everything else erased** into a never-assigned `__DefinitionMetadata?` type slot.                                                                                     |
| Property names         | Emitted as runtime values → aliasable in the template                                                                                                                                                                            | **Type-only.** `Props` / `PropertyKeys` are derived from `CompileTimeMetadata<Q>["properties"]`. The caller writes `.where({ fullName: … })`; the generated code never sees it.                             |
| Link names             | Emitted as runtime `link="…"`                                                                                                                                                                                                    | **Type-only.** `LinkNames<Q> = keyof CompileTimeMetadata<Q>["links"]`. `pivotTo` passes the caller's string straight through and reads _zero_ fields of the link definition (`createObjectSet.ts:353-371`). |
| Type identity          | No compile-time literal types. Renaming a returned string is free.                                                                                                                                                               | Literal types everywhere, plus `satisfies`, plus **literal-keyed type-level indexing**: `NonNullable<CompileTimeMetadata<TO>["interfaceMap"]>[ApiNameAsString<FROM>]` (`OsdkObjectFrom.ts:74,112,132-137`). |
| Choke-point count      | **One.** `object_type_api_name()` feeds every object-set operation via the hand-written runtime (`ontology_object_set.py:131-133`).                                                                                              | **Two layers.** Generated-const getters for Tier 1; `@osdk/client` conversion functions for Tier 2.                                                                                                         |
| Runtime metadata       | Fetched sparsely                                                                                                                                                                                                                 | `OntologyProvider` already fetches full metadata by apiName and _is_ the source of truth for properties, links and `interfaceMap`. Helps a lot — and creates the response-direction problem (§4.2).         |
| File access            | `os.environ` + `open()`                                                                                                                                                                                                          | `process.env` + `fs` in Node; **nothing** in a browser. Needs a client-injection API.                                                                                                                       |

### 4.1 Consequence: aliasing cannot be done in the generator alone

Tier 2 identifiers must be remapped inside `@osdk/client`. The choke points already exist — they
are the functions that today do namespace qualification and name remapping:

| Concern                  | Function                                                                 | Location                                                                                    |
| ------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `where` field names      | `modernToLegacyWhereClause` → `handleWherePair` → `fullyQualifyPropName` | `internal/conversions/modernToLegacyWhereClause.ts:63-190`, `fullyQualifyPropName.ts:21-33` |
| `orderBy`                | `remapPropertyNames`                                                     | `fetchPage.ts:599-618`, applied `:669`                                                      |
| `select` / `selectV2`    | `remapSelectV2`                                                          | `fetchPage.ts:551-596`                                                                      |
| aggregation metrics      | `modernToLegacyAggregationClause`                                        | `internal/conversions/modernToLegacyAggregationClause.ts:33-66`                             |
| group-by                 | `modernToLegacyGroupByClause`                                            | `internal/conversions/modernToLegacyGroupByClause.ts:25-83`                                 |
| `pivotTo`                | `createSearchAround`                                                     | `objectSet/createObjectSet.ts:353-371`                                                      |
| `$link`                  | `getDollarLink`                                                          | `object/convertWireToOsdkObjects/getDollarLink.ts:37-140`                                   |
| bulk links               | `fetchLinksPage`                                                         | `objectSet/fetchLinksPage.ts:51-60`                                                         |
| RDP link + property refs | `createWithPropertiesObjectSet`                                          | `derivedProperties/createWithPropertiesObjectSet.ts:38-142`                                 |
| edits                    | `EditRequestManager` / `toPropertyDataValue`                             | `packages/functions/src/transactions/`                                                      |

Two pre-existing defects to fix while you are in there, because an alias layer will amplify both:

- **Aggregation and group-by fields skip `fullyQualifyPropName` entirely**, unlike `where` and
  `orderBy`. Interface aggregations on unqualified names already send unqualified fields.
- `isWireObjectSet`'s allow-list omits `withProperties`, `asType`, `nearestNeighbors` and
  `interfaceLinkSearchAround` (`util/WireObjectSet.ts:19-29`), so such object sets are silently
  struct-walked when passed as action parameters.

### 4.2 Consequence: the response direction becomes our problem

api-gateway rewrites responses so the OSDK sees _source_-environment names — `__apiName`, every
property key, aggregation group keys, link sides, and `ObjectTypeV2.properties` filtered to the
SDK's declared set. If we remove server remapping, the client receives **target** names and must map
back, in at least these places:

- `createOsdkObject` property exposure and `$objectType` — and `$objectType` flows onward into
  action parameters (`toDataValue.ts:127-132`) and `$as` (which checks
  `objDef.interfaceMap[target]`).
- `AggregationsResults` group keys.
- `createOsdkInterface` property resolution via `objDef.interfaceImplementations` /
  `interfaceMap` (`createOsdkInterface.ts:154,171`).

This bidirectionality is the deep reason property aliasing is expensive, and the strongest argument
for the reduced-scope design in §6.

### 4.3 What TypeScript makes _easier_

- **The Tier 1 surface is five strings per SDK plus one or two per entity** — vs. Python's ~38
  template sites across 10 files.
- **The getter pattern keeps types untouched.** Verified: the emitted `.d.ts` is byte-identical
  (`export declare const Employee: Employee;`), and `satisfies` accepts a getter whose declared
  return type is the literal.
- **Type-level lookups keyed by literal API names are self-consistent** — both the key
  (`interfaceMap: { FooInterface: … }`) and the lookup (`ApiNameAsString<FROM>`) come from the same
  generation run. Changing runtime names without changing type-level literals is type-safe.
- **`OntologyProvider`'s factory is already an unexposed parameter** of `createMinimalClient`
  (`:55-59`).
- **No bundler** in the functions build path, so `fs` genuinely works.

## 5. Work plan

### Phase 0 — foundations (½ day)

- **Record the pre-change request-stream baselines** ([02](./02-iteration-and-testing.md) §4.1). Do
  this first. Once the generator changes, the old bytes are gone and the parity claim goes with them.
- Create `packages/aliases` with the canonical monorepo config set and run `mrl check`. Move the six
  resolvers off the local `coverton/alias-aware-osdks` branch (18 files, +1792/−7) into it, plus the
  `shared.test` alias-mode harness and the three aliased client suites.
- Change the resolver signatures to **one argument** and strict failure (§3.3) — the branch currently
  has the `(alias, default)` shape inherited from the Python prototype.
- Change alias keys from namespaced-and-remapped test values to **full generated API names** (§2.2a).
- Nest links and properties under their owning type (§2.2b) — the branch currently has a flat `links`
  map, also from Python.
- Write the parser and validator for the local schema (§2.0), and point `@osdk/functions`'s
  hand-written `types.ts` at it.
- Add `resetCache()` / mtime-checked preview loading.

### Phase 1 — generator emits the file and the resolver calls (1 day)

Five template edits, all mechanical, plus one new emitter:

| File                                                               | Change                                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `generator/src/v2.0/wireObjectTypeV2ToSdkObjectConstV2.ts:139-149` | `apiName:` → `get apiName() { return $resolveObjectType("<full>"); }` + import |
| `generator/src/v2.0/wireInterfaceTypeV2ToSdkObjectConst.ts:~228`   | same with `$resolveInterfaceType`                                              |
| `generator/src/v2.0/generatePerActionDataFiles.ts:~244`            | `unsanitizedApiName` and `apiName` getters via `$resolveAction`                |
| `generator/src/v2.0/generatePerQueryDataFiles.ts:~229`             | `apiName` + `version` getters via `$resolveQuery`/`$resolveQueryVersion`       |
| `generator/src/v2.0/generateMetadata.ts:32-51`                     | `$ontologyRid` / `$branch` become resolver calls                               |
| **new** `generator/src/v2.0/generateAliasesFile.ts`                | emit `aliases.json` from the collector                                         |

**Emit the calls and the file from one collector.** Every resolver call goes through a helper that
records `(kind, aliasKey, value)`; the file is serialized from what was recorded. Key completeness
then holds by construction rather than by discipline — see [02](./02-iteration-and-testing.md) §2.1
for the tests that check it anyway, and why an orphaned key is nearly as bad as a missing one.

**No flag.** Earlier drafts gated this behind `--aliasAware` to keep the committed fixtures
byte-identical while iterating. Under the always-on design that is no longer available, and trying to
preserve it would mean shipping the dual codepath the design exists to avoid. Instead: land the
generator change and all ~192 regenerated fixture files in **one commit containing nothing else**, and
read that diff carefully — it is the clearest statement of what this project does to every SDK in the
repo. The `git diff --exit-code` gate is fully restored on the following commit, and now covers the
alias files too. [02](./02-iteration-and-testing.md) §3 has the procedure and the two fixture holes to
close before doing it.

Two packaging details that are easy to miss and annoying to discover late: `aliases.json` must be in
the package's `files` array (`npm pack --dry-run` to confirm), and the generated import of it must
resolve under every module setting the SDK is consumed with. Prefer emitting a tiny generated `.ts`
module that inlines or imports the JSON over relying on a JSON import assertion.

### Phase 2 — client remaps Tier 2 (1–2 days)

- Add an optional `aliases` field to `MinimalClient` (`MinimalClientContext.ts:33-56`). Note the
  object is `Object.freeze`d at `createMinimalClient.ts:94-98` — set it during construction.
- Thread it through the ten choke points in §4.1.
- Wire the injection point: `createMinimalClient`'s existing sixth parameter
  `createOntologyProviderFactory` (`:55-59`) for metadata-cache keying, plus `ontologyRid: string | Promise<string>` (`createClient.ts:440`) which is already async-capable.
- Response direction (§4.2) — scope explicitly. See §6.

### Phase 3 — the file's other producers (parallel track, other repos)

See [03](./03-end-to-end-target.md). Five files in `function-registry`, following the groove
`AliasesTemplatizer` → `AliasesRehydrator` → `AliasesLayerResolver` already cuts for sources.

Because the schema is defined locally (§2.0), **none of this blocks Phase 1 or 2**. The generator
produces conforming files on day one; `function-registry` becomes a second producer of the same format
rather than the definition of it. The Conjure change is a ratification step to schedule early for
review latency, not a dependency.

## 6. Recommended scoping: two designs, ship the small one first

**Design A — full name remapping.** Everything above. Reaches parity with api-gateway, including
installs where the user remaps to _pre-existing_ target entities with different API names.

**Design B — ontology-RID-only.** The alias file carries **only** `ontology.rid` (+ branch).
Entity API names are assumed stable across install. This is exactly TPAS's
`StableApiNameBindings` — _"Only the ontology RID mapping. Entity API names are stable; do not remap
them."_ (`resource-bindings.yml:64-78`) — and it is consistent with Marketplace's own architectural
position: `adr/2022-08-15 - Approaches for Ontology prefix.md:33-40` rejected API-name prefixing
_specifically because_ OSDK and Functions reference entities by API name, and
`OverrideOntologyEntityApiNamesShape` (`shapes.yml:859-886`) makes name overriding an opt-in,
explicitly-cautioned toggle that Marketplace refuses to combine with install prefixes.

Design B is **one resolver call in one generated file** and covers the common case — a block that
_creates_ its ontology entities on install, which get the source API names. Design A is needed only
when the installer remaps onto existing, differently-named entities.

The always-on premise cuts across this axis rather than along it: under Design B every SDK still ships
an alias file and still reads it at runtime, the file just carries only `ontology.rid` and `branchRid`
while entity API names stay literal in the generated code. So the file, the package, the load order,
the parser and the test harness are all shared, and Design A adds sections to a file that already
exists and resolver calls to a mechanism that already runs in production. That is the property that
makes the ordering below safe.

**Recommendation:** build Design A's _mechanism_ (schema, resolvers, generator getters, client
choke-point threading), but make **Design B the thing that works end to end by Friday**, and treat
property/link/response remapping as the stretch. That ordering means the demo depends on the least
code, and the hard parts in [04](./04-hardest-problems.md) are additive rather than blocking.

## 7. Lessons already paid for by the Python prototype

Worth copying:

- Alias at the single accessor that builds the request, not at N call sites.
- Parameterize the _existing_ test suite over `["no_aliases", "with_aliases"]` rather than writing
  alias-only tests (`foundry-sdk-generator/tests/conftest.py:797-830`).
- Hoist a resolved local when the same value is used as both a request field and a response-dict
  key — the interface-cast path needed this
  (`snapshots/foundry_osdk/ontology/objects/flight/_flight.py:531-556`).

Worth avoiding:

- `(aliasKey, default) => value` with silent fallback. It is the natural shape when the file is an
  optional overlay, and it is exactly what makes the identity path and the remapped path different
  codepaths. The always-on design removes the second argument and with it the temptation.
- Namespace-stripped alias keys (collide silently).
- Resolvers written but never called — `object_property()` and `ontology_rid()` both exist, are
  unit-tested, and have zero call sites in the generator. Net effect: an aliased object type with any
  renamed property produces requests naming the **new type with the old property names**. This is the
  failure the collector-driven emission in Phase 1 makes structurally impossible: a resolver with no
  call sites contributes no keys, and the completeness test asserts the file's key set and the emitted
  call set are equal **in both directions**, so an orphan is as loud as an omission.
- RDP builders missed entirely — `_derived_properties/**` still holds the only remaining
  `link="…"` literals in the generated tree.
- `LIVE_PREVIEW` parsing only `custom` and `models`, discarding the ontology sections that are
  right there in the fixture — so live-preview ontology aliasing is a no-op.
- A fixture that nests the ontology sections under `defaults` while the loader reads them from the
  top level, undetected because the tests that exercise those paths patch the loader instead of
  reading the file.
- `search_around(link_name)` dispatching on a dict keyed by the _default_ API name while typed by a
  `Literal` — a string key masquerading as a type. The TypeScript equivalent is any `LinkNames<Q>`
  or `$link` key: the **type** stays source-named (correct, and required), so the **runtime** lookup
  must be keyed the same way and translated only at the wire boundary.
