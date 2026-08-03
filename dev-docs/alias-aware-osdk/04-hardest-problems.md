<!-- cspell:words Hackweek Rehydrator TPAS Templatize Templatizer aliasable codepaths inlines remapper spts unaliased unrepresentable bidirectionality conftest coverton hackweek interceptable officeassignment officenetwork osdks rehydrator remappable retarget shrinkwrapping staticmethod templatize templatizer unconfigured -->

# The hardest parts

Ranked by expected cost, with a correction to two of the three candidates in the original framing.

**Short version.** The hardest problem is not interfaces, links or RDPs. It is **property names,
because in TypeScript they exist only as erased type-level keys and therefore have to be remapped
inside `@osdk/client` in both directions** — and the response direction is work api-gateway does for
us today and would stop doing. Interfaces are second, for one specific reason: a namespace-derivation
rule that is computed independently at compile time and at runtime, and diverges silently. **RDPs
are the easiest of the three**, not the hardest.

---

## 1. Property names, and the response direction — the structural blocker

### Why it is hard

In Python this was free. Property names are emitted as **runtime values**:

```python
# resources/snapshots/foundry_osdk/ontology/search/_airport_object_type.py:22-30
city:    ClassVar["StringObjectTypeProperty"]  = Properties.string("city")
country: ClassVar["StringObjectTypeProperty"]  = Properties.string("country")
```

A one-line template change aliases them. (The prototype didn't even do that — `object_property()`
exists, is unit-tested, and has **zero call sites in the generator**. Net effect: an aliased object
type with any renamed property produces requests naming the **new type with the old property
names**.)

In TypeScript, property names appear in generated JavaScript **nowhere**. They exist only as keys of
`Props` / `PropertyKeys`, derived from `CompileTimeMetadata<Q>["properties"]`, inside the optional,
never-assigned `__DefinitionMetadata?` slot. `tsc` erases all of it. The user writes:

```ts
client(Employee).where({ fullName: { $eq: "John" } }).fetchPage({
  $select: ["fullName"],
});
```

and the string `"fullName"` originates in _user code_, typed by an erased type. There is no generated
value to intercept.

### Consequence A — outbound: ten choke points in `@osdk/client`

| Concern                            | Function                                                                                  | Location                                                        |
| ---------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `where`                            | `modernToLegacyWhereClause` → `handleWherePair` → `fullyQualifyPropName`                  | `internal/conversions/modernToLegacyWhereClause.ts:63-190`      |
| `orderBy`                          | `remapPropertyNames`                                                                      | `fetchPage.ts:599-618`, applied `:669`                          |
| `select`/`selectV2`                | `remapSelectV2`                                                                           | `fetchPage.ts:551-596`                                          |
| aggregation metrics                | `modernToLegacyAggregationClause`                                                         | `internal/conversions/modernToLegacyAggregationClause.ts:33-66` |
| group-by                           | `modernToLegacyGroupByClause`                                                             | `internal/conversions/modernToLegacyGroupByClause.ts:25-83`     |
| RDP `selectProperty` / `aggregate` | `createWithPropertiesObjectSet`                                                           | `derivedProperties/createWithPropertiesObjectSet.ts:61-142`     |
| timeseries / media / geotime       | `createTimeseriesProperty`, `createMediaReferenceProperty`, `createGeotimeSeriesProperty` | `packages/client/src/`                                          |
| edits                              | `EditRequestManager`, `toPropertyDataValue`                                               | `packages/functions/src/transactions/`                          |

Three sentinels must pass through **untranslated** — `$title` → `{type:"titleProperty"}`,
`$primaryKey` → `{type:"primaryKeyProperty"}` (`modernToLegacyWhereClause.ts:138-141`), and RDP names,
which are client-invented and not ontology entities (`:142-146`). api-gateway gets this right and
explicitly excludes derived properties (`FilterUtils.java:190-194`) and passes title/primary-key
selectors through (`PropertySets.java:370-419`). Copy that behavior exactly.

### Consequence B — inbound: work api-gateway does today that we would stop doing

This is the part that is easy to miss and expensive to discover late. Today the gateway rewrites
**responses** so the OSDK only ever sees source-environment names:

- `__apiName`/`$apiName` **and every property key**, rebuilt from the SDK's declared property set
  (`OntologyMarketplaceMapperImplV2.java:190-241`)
- aggregation response group keys, including struct-field suffix preservation
  (`AggregationResponseTranslator.java:256-273`)
- `ObjectTypeV2.properties`, **filtered to the SDK's declared set** so target-only properties don't
  leak (`ObjectTypeV2Converter.java:42-97`)
- link type sides, with **unbound links dropped entirely** (`LinkSideV2Converter.java:12-31`)

Remove the server mapper and the client sees **target** names. It must map back, because:

- `OntologyProvider` fetches metadata **by API name from the target server**
  (`loadFullObjectMetadata.ts:26-35`), so `objDef.properties` holds _target_ keys.
- `createOsdkObject` exposes whatever the server returned, so `emp.fullName` breaks if the target
  property is `full_name`.
- `$objectType` on an instance is the **server-returned** concrete type, and it flows onward into
  action parameters (`toDataValue.ts:127-132` builds
  `{objectTypeApiName: value.$objectType, primaryKeyValue: value.$primaryKey}`) and into `$as`
  (which indexes `objDef.interfaceMap[target]`, `getDollarAs.ts:114`).
- `createOsdkInterface` resolves each property through
  `objDef.interfaceImplementations?.[interfaceDef.apiName]?.[p]`, falling back to
  `objDef.interfaceMap![…][p]` (`createOsdkInterface.ts:154,171`) — all target-named.

So property aliasing is inherently **bidirectional**, and the natural place for it is the
`OntologyProvider` boundary: an alias-aware provider that translates fetched target metadata into
source-named metadata before caching it. That is a clean design _and_ the reason `OntologyProvider`'s
factory being an already-existing unexposed parameter of `createMinimalClient` (`:55-59`) is the most
valuable single fact in the codebase for this project.

### Two pre-existing defects that an alias layer amplifies

- **Aggregation and group-by fields skip `fullyQualifyPropName` entirely**, unlike `where` and
  `orderBy`. Interface aggregations on unqualified names already send unqualified fields.
- `isWireObjectSet`'s allow-list omits `withProperties`, `asType`, `nearestNeighbors` and
  `interfaceLinkSearchAround` (`util/WireObjectSet.ts:19-29`), so such object sets are silently
  struct-walked when passed as action parameters.

### The mitigation

This whole section collapses to nothing under Design B (ontology-RID-only, stable API names) — see
[01](./01-implementation-plan.md) §6. Which is the argument for shipping B first and treating
property remapping as additive.

---

## 2. Interfaces — the sharpest individual bug class

The original framing was "users hardcode concrete object type instances which won't exist on target
environments." Real, but not the worst of it. Four distinct problems, in order of nastiness.

### 2.1 The namespace-derivation asymmetry — a silent type/runtime divergence

At **generation** time the generator strips a property's namespace **iff it matches the interface's
namespace** (`maybeStripNamespace`, `wireObjectTypeV2ToSdkObjectConstV2.ts:218-229`). That produces
the compile-time `Props` keys and `PropertyKeys` union.

At **runtime** the _same rule_ is re-derived independently, twice, against the **server-fetched** API
name:

```ts
// object/convertWireToOsdkObjects/createOsdkInterface.ts:78, 151-152
const [objApiNamespace] = extractNamespace(interfaceDef.apiName);
// …
const [apiNamespace, apiName] = extractNamespace(p);
const exposedName = apiNamespace === objApiNamespace ? apiName : p;
```

```ts
// internal/conversions/fullyQualifyPropName.ts:25-31 — the inverse, for outgoing fields
const [objApiNamespace] = extractNamespace(objectOrInterface.apiName);
const [fieldApiNamespace, fieldShortName] = extractNamespace(fieldName);
return fieldApiNamespace == null && objApiNamespace != null
  ? `${objApiNamespace}.${fieldShortName}`
  : fieldName;
```

And there is a **third** implementation at the type level (`OsdkObjectFrom.ts:93-106`,
`NamespaceOf` / `MaybeStripNamespaces`), which string-parses the interface's _literal_ API name.

So if an alias changes an interface's **namespace** — e.g. `com.example.local.SomeInterface` →
`com.other.SomeInterfaceV2` — the runtime-exposed property keys and the outgoing wire field names
both shift, while the compile-time `Props` keeps the old stripping. **Types and runtime diverge
silently, with no error anywhere.** Note the existing test mapping table on the local branch uses
namespaced aliased names (`Employee → com.remapped.EmployeeV2`) — which for an interface would trip
exactly this. Worth an explicit test.

Three ways out, in order of preference:

1. **Forbid namespace changes** in alias values; validate at load and throw. Cheapest, and defensible
   — Marketplace already refuses to combine API-name overrides with install prefixes for this class
   of reason (`shapes.yml:859-886`).
2. **Alias property names alongside the type name**, so the stripping is consistent by construction.
3. **Stop re-deriving the namespace at runtime** — thread the _generated_ namespace through instead
   of parsing the server's API name. The most correct, the most invasive.

### 2.2 There is no reference implementation to copy

api-gateway does **not** remap interfaces at all, at four layers simultaneously:

- `ResourceBindings.interfaceTypes` exists and **TPAS populates it correctly**
  (`OntologySdkMarketplaceIntegration.java:812-861` builds `interfaceTypes` with reconciled
  `localRid` + verbatim `boundApiName`) — but
  `MarketplaceBindingV2CacheLoader.translateBindingsV2` never calls `getInterfaceTypes()`.
- `MarketplaceBindingV2` has **no interface field at all**, and `OntologyMarketplaceMapper` has no
  `getBoundInterfaceType`.
- `getInterfaceType` accepts the marketplace params but uses them only to pick the ontology
  (`OntologiesApiResourceV2.java:940-957`).
- `ObjectSetVisitor.visitInterfaceBase` (`:428-437`) and `visitAsType` (`:380-390`) bypass the
  mapper, and `ObjectSetManagerImpl.mapMarketplaceObjectTypeApiName:577` explicitly disables
  remapping when `interfaceTypesInScope`.

Good news: this is where the alias approach is **strictly better**, and the binding data already
exists in TPAS. Bad news: nobody has ever made interface remapping work, so there is no oracle to
diff against — the differential suite in [02](./02-iteration-and-testing.md) §5 has to be the oracle.

### 2.3 `implementedBy` and `$as` are source-named by design, and that is fine

`implementedBy: ['Employee', 'Person']` is a hardcoded list of source-environment object type API
names — but it is **type-only**, and the runtime reads the fetched `objectDef.implements`
(`StandardOntologyProvider.ts:56`). Similarly, `PropMapToObject` /`PropMapToInterface` /
`OtHasNonLocalInterfaceImpl` index `interfaceMap` / `inverseInterfaceMap` /
`interfaceImplementations` by the **literal** `ApiNameAsString<…>` (`OsdkObjectFrom.ts:74,112,132-137`).

**Both the key and the lookup come from the same generation run, so they are self-consistent.** That
is the enabling fact: changing runtime names while leaving type-level literals alone is type-safe.
The rule to write down and enforce in review is _never alias a generated type; only a generated
value._

One live hazard: `$as` accepts a **bare string** (`getDollarAs.ts:76-134`), so user code can write
`emp.$as("FooInterface")` with a source-env literal that never passes through a resolver. Downcasts
are already blocked when any implementation is non-local (`:53-74`).

### 2.4 `narrowToType` mutates shared client state keyed on API name

```ts
// objectSet/createObjectSet.ts:392-401
const existingMapping = clientCtx.narrowTypeInterfaceOrObjectMapping[objectTypeDef.apiName];
invariant(!existingMapping || existingMapping === objectTypeDef.type, …);
clientCtx.narrowTypeInterfaceOrObjectMapping[objectTypeDef.apiName] = objectTypeDef.type;
```

If aliasing can ever collapse two distinct generated types onto one wire name, this invariant fires
spuriously. Another argument for keeping alias keys unique by construction (full API names).

---

## 3. Links — middling, with one design trap

`pivotTo` reads **zero fields** of the link definition; the name is a caller string typed by
`LinkNames<Q> = keyof CompileTimeMetadata<Q>["links"]`:

```ts
// objectSet/createObjectSet.ts:353-371
objectType.type === "object"
  ? { type: "searchAround", objectSet, link }
  : { type: "interfaceLinkSearchAround", objectSet, interfaceLink: link };
```

So links are the same class of problem as properties — remap in the client, at four sites:
`createSearchAround`, `getDollarLink` (`:37-140`), `fetchLinksPage` (`:51-60`), and
`createWithPropertiesObjectSet.ts:38-48`.

**The trap: link API names are directional and only unique per object-type pair.** api-gateway
indexes them twice, once per direction, each keyed by the _target_ object type RID, and documents
why (`OntologyMarketplaceMapperImplV2.java:97-101`):

> _We can't just compare object type RIDs because of self-reference links. We can't just compare link
> type names because of the case where a Marketplace link type has the same name in both directions,
> but the corresponding local API names are different._

The Python prototype uses a flat global `links: {alias: {apiName}}` — that will collide. Nest links
under the owning object/interface type ([01](./01-implementation-plan.md) §2.2b); the client always
has the owning type in hand at every one of the four sites.

Secondary asymmetry to watch: the two `Link` types mean different things by `targetType`.
`ObjectTypeDefinition.Link.targetType` is an **API name** (`ObjectTypeDefinition.ts:134-138`);
`InterfaceDefinition.Link.targetType` is `"object" | "interface"` with the name in
`targetTypeApiName` (`InterfaceDefinition.ts:38-46`). Any generic link-remapping helper must branch.

---

## 4. RDPs — the easiest of the three, and worth saying so

**Derived properties are not generated at all.** No `derivedProperties`/`withProperties`/`rdp`
identifiers exist anywhere in `packages/generator/src`. They are constructed entirely at the call
site (`createObjectSet.ts:280-301` → `derivedProperties/createWithPropertiesObjectSet.ts`). So RDPs
need **nothing alias-specific** beyond whatever links and properties get — they are a _consumer_ of
those fixes, not a separate problem.

(This is where Python differs and where the intuition that RDPs are hard probably comes from: the
Python generator _does_ emit ~36 RDP builder files, and the prototype **missed all of them**. They
hold the only remaining `link="…"` literals in the generated tree.)

Three genuine RDP-specific notes:

- `extractRdpDefinition` resolves result types against **fetched** metadata —
  `objDef.links[objectSet.link].targetType` (`:72-77`) and
  `objDef.properties[definition.operation.selectedPropertyApiName]` (`:121-129`). If the outbound
  remapping and the metadata namespace disagree, RDP result typing silently disagrees with the
  declared type. Fixing this at the `OntologyProvider` boundary (§1) fixes it here for free.
- `interfaceLinkSearchAround` **throws** in `extractRdpDefinition` (`:197-201`), so interface-link
  RDPs are already unsupported. Don't chase it.
- `createWithPropertiesObjectSet`'s `pivotTo` always emits `searchAround`, never the interface
  variant (`:38-48`) — a pre-existing gap, not caused by aliasing.

---

## 5. Environment and delivery — the quiet risks

**Ranked as "things that will surprise you", not "things that are intellectually hard".**

1. **Import direction — decided.** Generated code calling a resolver inverts today's dependency graph:
   `@osdk/functions` peer-depends on `@osdk/client`, and generated SDKs depend on `@osdk/api`. The
   resolvers therefore live in a **new dependency-free leaf package, `@osdk/aliases`**, with
   `@osdk/functions` re-exporting for compatibility (see [01](./01-implementation-plan.md) §3 for the
   rejected `@osdk/api`-subpath alternative). This was the one expensive-to-revisit choice and it is
   now off the risk list — but the follow-on obligation is real: `@osdk/aliases` must stay leaf, which
   needs a mechanical test asserting no `fs`/`process` reference outside the `/node` entrypoint
   ([02](./02-iteration-and-testing.md) §6).

   **A new risk takes its place, and it is bigger than the one it replaced: the file is now
   load-bearing on every codepath.** Under the always-on design there is no unaliased mode to fall
   back to. If the packaged `aliases.json` fails to ship — excluded from the `files` array, dropped by
   a bundler, unreadable under a strict `exports` map — every generated SDK breaks completely rather
   than degrading. That is why `npm pack --dry-run` is a gate and why
   `packages/e2e.test.foundry-sdk-generator` becomes the most valuable integration test in the repo:
   it is the only one that exercises real module resolution of a packaged alias file.
2. **Browsers.** `process.env` + `fs` have no browser equivalent. Node functions are fine (verified:
   no bundler in the functions build path, `node_modules` shipped verbatim, `fs.readFileSync` present
   in the published `build/esm/aliases/loaders.js`). A browser story needs an explicit injection API
   on `createClient`. Out of scope for the week — but state it, because "the OSDK now reads a file"
   sounds alarming to anyone who ships one to a browser.
3. **Per-call cost.** `LIVE_PREVIEW` mode is deliberately uncached, and currently `stat`s, reads and
   re-parses the file on **every resolver call** — and generated code calls resolvers per request and
   per property access. Add an mtime check.
4. **Two things runtime indirection cannot reach.** `internalDoNotUseMetadata.rid` is consumed at
   _build_ time to stamp widget manifests
   (`widget.vite-plugin/src/build-plugin/buildWidgetSetManifest.ts:113-123`,
   `validateWidgetConfig.ts:80`). And `foundry-sdk-generator` writes the **entire source ontology**
   to disk as `UNSTABLE_DO_NOT_USE/ontology-metadata.json` (`generateOntologyMetadata.ts:34-43`) —
   the largest environment-specific artifact in a published SDK, invisible to any name indirection.
   Both need separate stories; neither blocks the demo.
5. **Five copies of the schema, three already stale — going to four, with one of them validated.**
   The two generated TS mirrors and `functions-typescript-packages`' `resourceAliases.ts` all lag the
   Conjure source (3 categories vs 6), and `@osdk/functions`'s `src/aliases/types.ts` is hand-written.
   Every one of them does `JSON.parse` + cast with **no runtime validation**, so a mismatch fails
   silently at runtime instead of loudly at build. The plan improves this rather than adding to it:
   `@osdk/aliases` ships a real parser and validator ([05](./05-aliases-file-schema.md) §5),
   `@osdk/functions` drops its hand-written copy and re-exports, and the copy that generated code
   depends on becomes the one that is checked. Five to four, and the load-bearing one is honest.

   The specific validation that earns its place first: all six legacy members present. A generated
   file missing them crashes `@osdk/functions`'s `loadPublishedAliases()` outright, because it calls
   `Object.entries()` on five of them unguarded ([05](./05-aliases-file-schema.md) §3.3). That is a
   cross-package failure the type system cannot see.
6. **`version: 1` is dead.** Required in Conjure, hardcoded in two places
   (`AliasUtils.java:29`, `AliasesLayerResolver.java:35`), read by nobody. Every existing reader
   would silently accept `version: 2`. Don't rely on it for compatibility; use optional members.
7. **The deprecation is long.** Existing installed OSDKs depend on the api-gateway path, and
   `resourceBindings.ontology` being **mandatory** in the cache loader
   (`MarketplaceBindingV2CacheLoader.java:147-149`, `SafeIllegalStateException`) means old TPAS
   entries hard-fail rather than degrade. Both paths coexist indefinitely; nothing gets deleted this
   quarter.

---

## 6. Where the week will actually go

If Design B (ontology-RID-only) is the Friday target, the hard parts above are **additive rather
than blocking**, and the week is spent on:

- `packages/aliases` and the generator getters + emitter (mechanical, ~1 day)
- the request recorder and differential harness (~1 day, and it is reusable forever) — with the
  baselines recorded from `main` **before** the generator changes, since the always-on design moves
  the committed fixtures once and there is no flag to recover the old output with
- the `function-registry` Conjure ratification (long-lead, start Tuesday — but no longer blocking,
  since the schema is defined in [05](./05-aliases-file-schema.md) and iterated locally)

If Design A (full name remapping) is the Friday target, the week goes to §1 — properties in both
directions — and §2.1, the namespace asymmetry. That is a two-week shape, not a one-week shape.
