<!-- cspell:words Hackweek Rehydrator TPAS Templatize Templatizer aliasable ashugar chokepoints codepaths cyoon hackweek inlines mvail objectsets osdks preallocation rehydrator remappable remapper shrinkwrap shrinkwrapping skondapalli spts templatize templatizer thirdpartyapps unaliased unrewritten unrepresentable -->

# 08 — The server side

Tier 1 now exists on the client: a generated SDK carries an `aliases.json` at a known path inside
its package (`packages/e2e.sandbox.todoapp/src/generatedNoCheck2/aliases.json` is the first real
one). This document establishes what has to change on the Foundry side for that artifact to displace
the api-gateway remapping, and what actually gates deleting the remapping rather than merely
disusing it.

Every claim about server code cites file and line. Claims I could not verify are marked
**[unverified]** and say why.

## 0. Provenance

Read directly, at the versions checked out under `~/IdeaProjects` on 2026-08-03:
`api-gateway`, `third-party-application-service`, `function-registry`, `function-execution`,
`functions-typescript-runtime`, `marketplace`, `ontology-metadata-service`, and
`~/PyCharmProjects/python-osdk`.

Not reached: any runtime/production data (so "is this code path actually exercised" is inference in
the two places noted), and the Python functions runtime component that populates
`SDK_IDENTIFIER_MAPPING` — `functions-python-runtime` is checked out but no setter for that context
var exists in it or in `python-osdk`, so the producer is **[unverified]**.

---

## 1. The remapping surface is not where the docs say it is

`00-project-summary.md` and `04-hardest-problems.md` describe "~30 remapping sites in
`OntologiesApiResourceV2`". The magnitude is right; the location is wrong, and the difference
matters for scoping deletion.

`OntologiesApiResourceV2.java` is 2316 lines and takes `Optional<SdkPackageRid>` /
`Optional<SdkVersion>` on **35 public operations**, which matches the OpenAPI surface exactly —
`grep -c 'name: sdkPackageRid' api-gateway-openapi/src/main/openapi/v2/ontologies-v2-api.yml` is 35,
and that is the only file in the repo declaring them (schemas at
`api-gateway-openapi/src/main/openapi/v2/ontologies-v2-api.yml:317,322`).

But that class contains only **6** calls into the mapper (`OntologiesApiResourceV2.java:2080, 2094, 2126, 2128, 2152, 2198`) plus one inline response rewrite (`:2174`) and the ontology-RID
substitution (`:2042`). The actual rewriting is **45 `OntologyMarketplaceMapper` call sites across 17
non-test files**, mostly in `adapters/ontology-adapters`:

| File                                                                 | Sites                                | Direction | Rewrites                                               |
| -------------------------------------------------------------------- | ------------------------------------ | --------- | ------------------------------------------------------ |
| `ontology/actions/TransactionEditRemapper.java`                      | 8 (`:57,71,86,98,99,114,115,135`)    | request   | object types, links, properties                        |
| `v2/OntologiesApiResourceV2.java`                                    | 6 (`:2080,2094,2126,2128,2152,2198`) | both      | object type, properties, link, action, response object |
| `objectsets/visitor/ObjectSetVisitor.java`                           | 4 (`:133,410,486` + 1)               | both      | object types, links                                    |
| `v2/ObjectTypeV2Converter.java`                                      | 3 (`:44,47,120`)                     | response  | object type name, property allow-list, property names  |
| `v2/LinkSideV2Converter.java`                                        | 3 (`:20,23,25`)                      | response  | link binding gate, link name, **object type name**     |
| `ontology/properties/PropertySets.java`                              | 3 (`:86,380,389`)                    | request   | properties, struct fields                              |
| `objectsets/visitor/ObjectSetToIdentifiersVisitor.java`              | 3 (`:115,277,319`)                   | request   | object types, links                                    |
| `objectsets/visitor/ObjectSetToCurrentObjectTypeApiNameVisitor.java` | 3 (`:45,47,50`)                      | both      | search-around round trip                               |
| `ontology/ontologies/OntologyManagerImpl.java`                       | 2 (`:1679,1683`)                     | response  | object type + properties                               |
| `ontology/filters/FilterUtils.java`                                  | 2 (`:212,223`)                       | request   | properties, struct fields                              |
| `objectsets/visitor/MultiObjectTypeObjectSetVisitor.java`            | 2 (`:129,344`)                       | request   | links, object types                                    |
| `ontology/order/OrderByConverter.java`                               | 1 (`:60`)                            | request   | properties                                             |
| `ontology/aggregations/AggregationGroupByVisitor.java`               | 1 (`:419`)                           | request   | properties                                             |
| `ontology/aggregations/AggregationMetricVisitor.java`                | 1 (`:145`)                           | request   | properties                                             |
| `ontology/aggregations/AggregationRequestTranslator.java`            | 1 (`:127`)                           | request   | properties                                             |
| `ontology/aggregations/AggregationResponseTranslator.java`           | 1 (`:264`)                           | response  | property names in group keys                           |
| `objectsets/ObjectSetManagerImpl.java`                               | 1 (`:612`) + inline `:571-592`       | response  | `__apiName` override                                   |

Direction is decodable from the method name, and the convention is **inverted relative to TPAS**:
in api-gateway `getBound*` resolves the SDK's baked-in source name to the target environment
(request direction) and `getLocal*` resolves back to the SDK's source name (response direction) —
see the 13-method interface at
`adapters-api/ontology-adapters-api/.../marketplace/OntologyMarketplaceMapper.java` and the
implementation at
`adapters/ontology-adapters/.../marketplace/OntologyMarketplaceMapperImplV2.java:57-66` (bound) and
`:190-241` (`mapObjectType`, response). In TPAS the same words mean the opposite: `localRid` is the
target environment and `boundApiName` is the source
(`third-party-application-service-api/src/main/conjure/resource-bindings.yml:13-17`).

Three carve-outs already exist in the current implementation and are worth knowing because they are
places where remapping is silently absent today:

- **Interfaces are not remapped at all.** `MarketplaceBindingV2` has no interface field
  (`adapters-api/third-party-app-adapters-api/.../thirdpartyapps/MarketplaceBindingV2.java:26-48`),
  the cache loader never calls `getInterfaceTypes()`
  (`adapters/third-party-app-adapters/.../thirdpartyapps/cache/MarketplaceBindingV2CacheLoader.java`),
  and object remapping is explicitly switched off when interfaces are in scope:
  `ObjectSetManagerImpl.java:577` — `if (marketplaceBinding.isEmpty() || interfaceTypesInScope) { return ontologyObjectV2; }`. `ObjectSetVisitor.visitInterfaceBase` (`:428-437`) does not consult
  the mapper.
- **Derived properties are excluded.** `FilterUtils.java:189-193` returns the identifier untouched
  when `objectSchema.isPropertyDerived(propertyIdentifier)`.
- **Unbound links are dropped from responses**, not passed through:
  `LinkSideV2Converter.java:20` returns `Optional.empty()` when `hasLocalLinkTypeBinding` is false.

Two capabilities are refused outright when the shrinkwrap params are present: action edits
(`OntologiesApiResourceV2.java:2222-2244`, call sites `:1449,1495,1521,1551`) and branches on
queries (`:1715-1717`). Mismatched params — exactly one of the pair — is a 400
(`:2209-2220`). Both of the pair absent is a clean, fully-supported no-op; this matters in §6.

### What Tier 1 actually retires

Tier 1 covers the ontology RID, object, interface, action and query names. Mapping that onto the
table: roughly **20 of the 45 sites** become dead, but only **one file** disappears entirely —
`adapters/ontology-adapters/.../marketplace/QueryMarketplaceMapperImpl.java` (51 lines), which does
nothing but resolve a `VersionedQueryApiName` to a `VersionedQueryRid`. Seven of the seventeen files
(the four aggregation classes, `FilterUtils`, `OrderByConverter`, `PropertySets`) are pure Tier 2
and Tier 1 does not touch them at all. Every other file retains at least one property or link site.

**So Tier 1's server-side payoff is not deletion.** It is (a) dead code that no longer has to be
kept correct, and (b) an end to the recurring tax: `git log` on `OntologiesApiResourceV2.java` shows
157 commits since 2024-01-01, of which 19 are marketplace work, and the pattern is one follow-up per
new endpoint — `36382efe09 AggregateObjectsV2 shrinkwrap (#9548)`, `67a147bee5 Move actions to v2 shrinkwrap (#9425)`, `76f615f6db [Transactions] Add marketplace support for Transactions (#13245)`,
running from `95a8acf740 Add marketplace mapping (#5093)` (2023-11-30) to `c6db0aa699` (2026-05-01).
Deleting the subsystem requires Tier 2.

---

## 2. Marketplace already rewrites an `aliases.json` — for exactly the wrong content

The claim in `00-project-summary.md` that Marketplace "already stacks a new OCI layer to do exactly
this" is **confirmed, and stronger than stated**: it is already live for the TypeScript OSDK function
block type specifically.

`function-registry/.../marketplace/blocks/installation/resolver/AliasesLayerResolver.java` builds an
`AliasesFile`, serializes it with a deterministic mapper (`:36-42`, ordered so reconciliation stays
idempotent), uploads it as a layer and appends it to the image
(`:66-70`: `deterministicUploadFileAsLayer` then `deterministicAddLayerToImage`). Its only caller is
`ContainerFunctionsArtifactsResolverImpl.java:119-138`, reached from
`AbstractContainerFunctionsMarketplaceReconciler.java:147-157`, and
`TypeScriptOsdkFunctionsMarketplaceReconciler.java:62-63` **extends that abstract reconciler** and
implements `getAliasesToWrite()` at `:174-176`. The pipe is end to end and already runs for OSDK
function blocks at install.

Three concrete gaps, all in `function-registry`, none in api-gateway:

1. **The path is a compile-time constant.**
   `AliasesLayerResolver.java:33` — `ALIASES_FILE_PATH = "app/var/data/aliases.json"`. The mechanism
   underneath is fully generic: `ArtifactsDockerManager.deterministicUploadFileAsLayer` takes
   `pathInLayer` as a parameter (`adapters-api/.../ArtifactsDockerManager.java:125-132`). An OSDK's
   `aliases.json` lives inside its npm package (`node_modules/<pkg>/aliases.json`), a path that
   varies per SDK and that nothing in function-registry currently knows. This is the one place a new
   input is needed, not a new mechanism.
2. **The schema has no ontology kinds.** `DefaultAliases` has six
   (`function-registry-api/src/main/conjure/scope/aliases.yml:17-27`: `custom`, `models`,
   `egressConnections`, `datasets`, `mediasets`, `streams`), and the resolver populates only three of
   those six (`AliasesLayerResolver.java:81-90` — datasets, mediasets and streams are left empty), so
   each kind is hand-written code, not generic. The source type says so explicitly:
   `function-registry-api/src/main/conjure/scope/scope.yml:14-15` — _"Only Platform SDK resources
   (not Ontology SDK resources) have aliases for now, but more types of aliases can be added here in
   the future."_ This is the exact extension `05-aliases-file-schema.md` proposes, and it lands in
   two Conjure files plus three builder methods.
3. **Target API names are not available where the layer is written.** This is the real cost, and it
   is not obvious. `OntologyMappingRehydrator` resolves target shapes at install time, but
   `ObjectTypeMapping` carries only rid + id (`OntologyMappingRehydrator.java:198-210`) and
   `PropertyTypeMapping` likewise (`:212-241`) — no API name. The marketplace contract has the field
   but declares it empty: `ResolvedObjectTypeShape.apiName` is
   `optional<ObjectTypeApiName>` with the doc _"Optional due to backwards compatibility. Currently
   empty, in future OMS versions it will always be populated"_
   (`marketplace/marketplace-api/src/main/conjure/shapes/ontology-types.yml:34-37`); the identical
   comment appears on the property (`:177-180`), link (`:264-267`), action (`:467-470`) and interface
   (`:754-757`) shapes, and there is already an error type
   `MissingApiNameForResolvedObjectTypeShape` (`:1073-1076`) for when it is expected and absent.

   Interfaces are the exception — `OntologyMappingRehydrator.java:251-273` throws if the resolved
   interface API name is absent, so for interfaces it must be populated on current OMS, which means
   the "Currently empty" comment is at least partly stale. Whether objects and actions are populated
   today is **[unverified]** without a live stack.

   The data itself exists server-side: OMS computes target object, property and interface API names
   during install preallocation
   (`ontology-metadata-service/ontology-metadata-marketplace/.../BulkOntologyEntityApiNamesResolver.java:728-734`
   for objects, `:783-789` for properties, `:794+` for interfaces, gated by
   `preallocateObjectTypeFieldApiNames` at `:719` and configured via
   `OntologyMarketplacePreallocateEntityApiNamesConfiguration`). It is used for OMS-internal
   validation and is not surfaced on the marketplace resolved shapes. So this is plumbing across an
   existing service boundary, not new computation — but it is a cross-team change in OMS and
   marketplace, and it is the critical path for the whole project.

Note that Tier 1 needs much less of this than Tier 2 does. For the ontology RID — the single most
valuable rewrite — function-registry already has the target: the install-location ontology is
already threaded through (`TypeScriptOsdkFunctionsMarketplaceReconciler.java:255-266`, `:258`
`.ontologyOverride(...)`) and `AbstractContainerFunctionsMarketplaceReconciler.java:160-170` resolves
the target SDK shape. A rewrite that fills only `defaults.ontologies` requires no OMS change at all.

---

## 3. `StableApiNameBindings` exists, is exactly Design B, and nothing produces it

This is the most useful finding in the document.

`third-party-application-service-api/src/main/conjure/resource-bindings.yml:64-77`:

```yaml
StableApiNameBindings:
  docs: Only the ontology RID mapping, for SDKs that enforce API name stability.
  fields:
    ontology: OntologyBinding

ResourceBindingsV2:
  docs: Resource bindings for an SDK, distinguishing SDKs that enforce API name stability.
  union:
    resourceBindings:
      type: ResourceBindings
      docs: Full entity bindings. Remap all entity API names.
    stableApiNameBindings:
      type: StableApiNameBindings
      docs: Only the ontology RID mapping. Entity API names are stable; do not remap them.
```

So the docs' claim is **confirmed at the type level**: the ontology-RID-only variant is precisely
`StableApiNameBindings`, and TPAS has already modeled the union that distinguishes the two regimes.
`OntologyBinding` is `{localRid, localApiName}` (`:39-42`) — it has no `boundApiName`, unlike every
other binding, because the SDK's baked-in ontology name is never needed; api-gateway substitutes the
RID wholesale at `OntologiesApiResourceV2.java:2041-2043`. That asymmetry is the reason the ontology
axis is already "stable-API-name"-shaped and the reason Tier 1's `ontologies` map is the cheapest
part of the design.

**But the arm is unreachable.** `getResourceBindingsV3` unconditionally wraps the exhaustive arm:

```java
// third-party-application-service/.../resources/SdkResource.java:306-311
public ResourceBindingsV2 getResourceBindingsV3(
        AuthHeader authHeader, SdkPackageRid sdkPackageRid, SdkVersion sdkVersion) {
    permissionManager.checkCanViewSdk(authHeader, sdkPackageRid);
    return ResourceBindingsV2.resourceBindings(
            resourceBindingsV2Cache.get(SdkPackageRidAndVersion.of(sdkPackageRid, sdkVersion)));
}
```

The test names say as much: `getResourceBindingsV3WrapsBindingsAsExhaustive`
(`third-party-application-service/src/test/.../SdkResourceTest.java:876`,
`tpa-service-edge/src/test/.../EdgeSdkResourceTest.java:204`). Nothing in the repo constructs
`stableApiNameBindings` outside an integration-test assertion
(`.../integration/marketplace/OntologySdkMarketplaceIntegrationTest.java:808`).

The reason it cannot be produced is that **nothing is persisted that would let TPAS choose an arm**.
`StoredSdkVersionMetadataV2` (`third-party-application-storage-api/src/main/conjure/storage.yml:357-368`)
carries `sdkVersion`, `dataScope`, `ontologyInfo`, per-registry SDK ids, `ontologyPackageRid` and
`sourceBranch` — no capability or stability field. Adding one is the missing piece.

Two further facts about how bindings are built at install, both from
`OntologySdkMarketplaceIntegration.java:812-861` (`reconcileOntologyInfo`):

- The asymmetry is uniform and deliberate: every `localRid` is passed through
  `reconciler.reconcile(...)`, and every `boundApiName` is copied verbatim from the packaged block
  (objects `:821-831`, links `:832-841`, actions `:842-846`, interfaces `:847-851`, functions
  `:852-859`). The one exception is the ontology (`:815-820`), where **both** `localRid` and
  `localApiName` come from the reconciler — there is no source name to preserve.
- TPAS **does** populate `interfaceTypes` (`:847-851`). api-gateway simply never reads it
  (§1). If interface remapping were ever wanted, the server-side data is already there.

Finally, api-gateway is on the wrong endpoint version:
`MarketplaceBindingV2CacheLoader.java:55` calls `getResourceBindingsV2`, whose return type is the
bare `ResourceBindings` (`sdk-service-api.yml:271-285`) and therefore cannot express the stable arm.
V3 (`:286-298`) is the one that can. That makes "migrate api-gateway from V2 to V3" a small change
with outsized leverage — see §6. Note also that the loader hard-fails on a missing ontology binding
(`MarketplaceBindingV2CacheLoader.java:147-149`, `SafeIllegalStateException`) rather than degrading,
and that it case-converts action names from TPAS's kebab-case to lowerCamel (`:45-46`, applied
`:100-103`) — a normalization the alias file will have to reproduce or deliberately drop.

---

## 4. Tier 1 is not symmetric

Three Tier-1 identifiers are rewritten in the **response** direction today, so removing request-side
remapping alone is not sufficient:

1. **`__apiName` on every returned object.** Overwritten with the SDK's source object-type name in
   three places: `OntologiesApiResourceV2.java:2174`
   (`propertyMap.put(PropertyApiName.valueOf("__apiName"), PropertyValue.of(userDefinedObjectType.get()))`),
   `ObjectSetManagerImpl.java:571-592`, and `OntologyMarketplaceMapperImplV2.java:233`.
2. **`ObjectTypeV2.apiName`** in metadata responses — `ObjectTypeV2Converter.java:43-45`.
3. **`LinkTypeSideV2.objectTypeApiName`** — `LinkSideV2Converter.java:25`, an object type name
   echoed inside a link response.

The client consumes (1) verbatim and fans it out:

```ts
// packages/client/src/object/convertWireToOsdkObjects.ts:283-288
// Backend returns as __apiName but we want to stick to $ structure
obj.$apiName ??= obj.__apiName;
obj.$objectType = obj.$apiName;
```

and `$objectType` then flows _back out_ into request bodies —
`packages/client/src/util/toDataValue.ts:129` and
`packages/client/src/util/toDataValueQueries.ts:150`, both
`objectTypeApiName: value.$objectType`. (Doc `04-hardest-problems.md` cites these under
`packages/client/src/actions/toDataValue.ts`, which does not exist; the paths above are the real
ones.)

That round trip **closes correctly** under the alias design: the SDK sends target names, the server
returns target names unrewritten, and the client echoes target names back. The failures are not on
the wire, they are at the type level and in user code:

- `packages/api/src/OsdkBase.ts:25` declares `readonly $apiName: Q["apiName"]`, a literal type from
  the generated definition. If `apiName` remains a source-environment literal in the `.d.ts` while
  the runtime value is a target name, the type is a lie — silently, since nothing checks it.
- Any user code comparing `$apiName` or `$objectType` against a string literal breaks, and so does
  anything keying a map by generated name against a server-returned name.
- `packages/client/src/util/objectSetUtils.ts:20-32` (`resolveBaseObjectSetType`) is the single
  request-side choke point for object and interface names, which is what makes the outbound half
  tractable; there is no equivalent single point inbound — `__apiName` is read at
  `objectSet/fetchLinksPage.ts:88`, `objectSet/ObjectSetListenerWebsocket.ts:550,607`,
  `scenarios/ScenarioClient.ts:258-260,330-348`, `util/isOntologyObjectV2.ts:24`.

One encouraging precedent: Marketplace install **already hard-enforces API-name stability for
interfaces**. `OntologyMappingRehydrator.java:251-273` throws
`inputInterfaceApiNameDoesNotMatchPackagedApiName` if the target interface's API name differs from
the packaged one. A stability policy is therefore already shipped for one entity kind — the
precedent, and the error type, exist. (Interface _property_ divergence is currently only logged:
`:287-295`, with a `TODO(cyoon)`.)

---

## 5. How the two layers compose

Client-side resolution and server-side remapping are both name translations, so the question is what
happens when both are active. The answer depends entirely on whether the installed `aliases.json` has
been rewritten, and there are three states.

**State A — file not rewritten, params still sent. This is today's reality and it is safe.**
function-registry writes only `custom` / `models` / `egressConnections` into the file
(`AliasesLayerResolver.java:81-90`) and `ResourceAliases` has no ontology kinds at all
(`scope.yml:14-15`), so an installed SDK's alias file still carries source-environment names. The
client resolves to source names, the server remaps source → target, and behavior is identical to
baking the strings in. **Tier 1 shipping does not change Marketplace behavior**, which is what makes
it deployable ahead of any server work.

**State B — file rewritten, params still sent. Every affected request fails.** This is the
double-remap state, and the failure mode is now definitively established rather than guessed. All
three Tier-1 entity lookups miss **strictly**, throwing a typed not-found error — none of them passes
the input through and none returns an `Optional`:

| Lookup                                           | Miss behavior                                                       | Line                                         |
| ------------------------------------------------ | ------------------------------------------------------------------- | -------------------------------------------- |
| `getBoundObjectType`                             | `orElseThrow(marketplaceSdkObjectMappingNotFound)`                  | `OntologyMarketplaceMapperImplV2.java:58-64` |
| `getLocalObjectType` (response)                  | `orElseThrow(marketplaceSdkObjectMappingNotFound)`                  | `:70-75`                                     |
| `getBoundActionType`                             | `orElseThrow(marketplaceSdkActionMappingNotFound)`                  | `:169-172`                                   |
| `getBoundQueryTypeAdapter` / `getBoundQueryType` | `orElseThrow(marketplaceSdkQueryMappingNotFound)`                   | `QueryMarketplaceMapperImpl.java:43-49`      |
| `getBoundLinkType`                               | `orElseThrow`, plus a second `throw` when the direction check fails | `:90-95`, `:117-118`                         |

This corrects an earlier guess in this project's notes that object types might be laxer than links
because `ObjectSetVisitor.java:410` wraps a link lookup in `.orElseGet(...)`. They are not: the
strictness is uniform, and that `orElseGet` guards the _absence of a mapper_, not a lookup miss. So
State B is a **hard failure on every request touching a rewritten name** — `getBoundObjectType` is
handed a target name, `objectTypesByLocalApiName` is keyed on TPAS `boundApiName` (source names), the
key is absent, and the request 404s. Loud rather than silent, which is the better of the two possible
failure modes, but it means the rewrite and the switch that stops sending the params are **the same
lever and must be flipped together**. They can be: both are decided in one place at packaging time
(`TypeScriptOsdkFunctionTemplatizer.java:100-114`), so State B need never exist in production.

The ontology RID is the exception and cannot double-remap in any state:
`OntologiesApiResourceV2.java:2041-2043` discards the `{ontology}` path segment entirely when a
binding is present and substitutes `marketplaceBinding.getOntologyRid()`. Whatever the client
resolves — source RID or target RID — the server overwrites it with the target. Idempotent by
construction. This is a second reason an ontology-only rewrite (§2) is the safe first increment:
it is the one axis where the two layers cannot conflict.

**State C — file rewritten, params dropped. The target state.** Names never round-trip through the
mapper, and the response-side rewrites in §4 stop firing, so `__apiName` arrives as the target name
and agrees with the client's own alias file.

One residual divergence worth noting for State B, if it is ever reached in testing: the response path
stays accidentally _self_-consistent, because the server rewrites `__apiName` back to the source name
(`:2174`) and the client feeds that same source name back out through `$objectType`
(`util/toDataValue.ts:129`). Consistently source-named end to end. But it disagrees with what the
client's own resolvers would produce for the same object, so anything comparing `$objectType` to a
resolver-derived name mismatches — a silent divergence sitting underneath the loud request-path
failure.

A last composition seam, unrelated to state: TPAS stores action names kebab-case and api-gateway
converts them to lowerCamel (`MarketplaceBindingV2CacheLoader.java:45-46`, applied `:100-103`), while
the generated alias file keys actions kebab-case (`"complete-todo"` in the todoapp file). Harmless
today because nothing joins the two, but whoever writes the rewriter must reproduce that conversion
or the join will silently miss.

### What this implies the alias file must carry

Comparing the emitted file against the keys the server actually looks up:

**Queries line up exactly — verified.** `e2e.generated.catchall/src/generatedNoCheck/aliases.json`
has 11 query entries and every one carries both `apiName` and `version`, plus
`id: {rid: <FunctionRid>, version}`. api-gateway's map key is
`record VersionedQueryApiName(QueryApiName queryApiName, Optional<FunctionVersion> version)` and it
resolves to `VersionedQueryRid(functionRid, version)` (`QueryMarketplaceMapperImpl.java:43-49`). So
the file already carries both the source-side key **and** the target-side shape, which makes queries
the best-aligned of the five kinds — better aligned than object types, which carry no property RIDs.
One narrow asymmetry: the server's `version` is `Optional` while the emitter always writes one, so a
query that legitimately has no version would fail record equality and throw
`marketplaceSdkQueryMappingNotFound`. All 11 fixtures have versions, so I could not construct that
case; whether a version-less query is reachable in practice is **[unverified]**.

Three things the schema does not carry and will need:

1. **Property RIDs on object types.** Object properties carry only `apiName`
   (`"id": {"apiName": "id"}`), while interface shared-property entries do carry `id.rid`. Marketplace
   and TPAS reconcile RID-first — `PropertyTypeBinding.localRid`
   (`resource-bindings.yml:44-47`), and `reconcileOntologyInfo` passes every `localRid` through
   `reconciler.reconcile(...)` — so a rewriter cannot join object properties by name alone. Irrelevant
   for Tier 1, blocking for Tier 2.
2. **Link identity and direction.** `links` is currently `{}`. A name-keyed map cannot express what
   the server needs: `OntologyMarketplaceMapperImplV2.java:97-101` spells out why, and its key is
   `QualifiedLinkTypeApiName(ObjectTypeRid, LinkTypeApiName)` with a subsequent direction check
   against `boundSourceToTargetApiName` / `boundTargetToSourceApiName` (`:102-118`). A link entry will
   need link RID plus source and target object RIDs plus direction.
3. **A capability or provenance marker.** Nothing in the file says "this SDK is alias-aware" — which
   is what the packaging step in §6 has to detect — and nothing says "this file has been rewritten",
   which would let a client refuse State B rather than 404 through it. No server-side field supplies
   this either (`StoredSdkVersionMetadataV2` has no capability field; `OntologySdk` carries only rid +
   version), so it is a schema concern rather than a new stored field.

Two identifiers where the alias file and the server simply do not correspond, both benign:
`ontologies[].branch` has no server counterpart at all (branches are _rejected_ alongside marketplace
queries, `OntologiesApiResourceV2.java:1715-1717`), and `primaryKeyApiName` — nominally Tier 1 — is
remapped server-side as a _property_, through the Tier 2 machinery and gated on the property
allow-list (`ObjectTypeV2Converter.java:71-74`). It is the one Tier 1 identifier whose server
counterpart does not retire with Tier 1.

---

## 6. Retiring the server-side sites

**The switch is not in api-gateway.** api-gateway needs no change to stop remapping: the params are
`Optional` on all 35 operations, and `marketplaceParametersPresentV2`
(`OntologiesApiResourceV2.java:2209-2220`) errors only when exactly one of the pair is present.
Send neither and every mapper site is bypassed via `Optional.empty()` at `:2058-2068`.

The params have exactly two producers, and both are gated on a mapping supplied by the runtime
rather than baked into the SDK:

```ts
// functions-typescript-runtime/packages/functions-typescript-runtime/src/runtime/marketplaceUtils.ts:16-19
const { rid, version } =
  marketplaceMapping?.sdkIdentifierMappings?.values().next().value?.to ?? {};

if (!rid || !version) return fetchFn;
```

```python
# python-osdk/foundry-sdk-generator/foundry_sdk_generator/templates/package/_client_config.py.jinja2:76-81
sdk_identifier_mapping = maybe_get_value_from_context(context_vars=[SDK_IDENTIFIER_MAPPING])
original_identifier = SdkIdentifier(rid=__package_rid__, version=__version__) if sdk_identifier_mapping else None
remapped_identifier = sdk_identifier_mapping.get(original_identifier) if original_identifier else None
if remapped_identifier:
    default_params["sdkPackageRid"] = remapped_identifier.rid
    default_params["sdkVersion"] = remapped_identifier.version
```

The Python context var defaults to `None`
(`python-osdk/foundry-sdk-runtime/foundry_sdk_runtime/context_vars.py:38-39`); its producer is
**[unverified]** (§0). The TypeScript chain is fully traced:

| Stage                                                  | Where                                                                                                                                                                                                                        |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Package time — decide whether to emit a mapping at all | `function-registry/.../blocks/creation/v2/templatizer/TypeScriptOsdkFunctionTemplatizer.java:93-95`, `templatizeFoundryAccessMapping` `:100-114`                                                                             |
| Install time — rehydrate it onto the spec              | `TypeScriptOsdkFunctionsMarketplaceReconciler.java:218-225`; `rehydrateOntologySdkAccessMapping` at `AbstractContainerFunctionsMarketplaceReconciler.java:160-170`                                                           |
| Stored                                                 | `FunctionSpec.experimental.marketplaceMapping`                                                                                                                                                                               |
| Invoke time — convert to runtime shape                 | `function-execution/function-executor/.../converters/RuntimeApiConverter.java:194-209` (`:205` `.sdkIdentifierMappings(...)`), Conjure at `function-executor-api/src/main/conjure/function-executor-runtime-api.yml:346-364` |
| Client                                                 | `marketplaceUtils.ts:16-19` above                                                                                                                                                                                            |

**Consequence: the off switch already exists and is already `Optional`, and it lives at packaging
time.** `templatizeFoundryAccessMapping` declining to emit an `OntologySdk` entry turns off remapping
for that block, in both languages, with no api-gateway change, no OSDK change and no SDK version
floor. That is the good news.

The bad news is what that implies for deletion: the decision is baked into the _published block_, so
every block published before the switch keeps sending the params indefinitely unless it is
re-packaged, and nothing forces re-packaging. Deletion is gated on a census of installed blocks, not
on a date.

### Sequence

1. **Extend the alias schema and the layer writer** — `scope/scope.yml:9-28`,
   `scope/aliases.yml:17-27`, `AliasesLayerResolver.java:81-90`, and make
   `ALIASES_FILE_PATH` (`:33`) a parameter. Start with `defaults.ontologies` only: it needs no OMS
   change (§2) and it covers the ontology RID, which is the substitution at
   `OntologiesApiResourceV2.java:2041-2043` that every one of the 35 operations depends on.
2. **Teach the packaging step to detect an alias-aware SDK.** Nothing records this today:
   `StoredSdkVersionMetadataV2` has no capability field (`storage.yml:357-368`) and `OntologySdk`
   carries only rid + version (`function-registry-api/src/main/conjure/marketplace/mappings.yml:84`).
   `SourceOntologySdk.version` is available at templatize time so a version floor is _expressible_,
   but it is the wrong signal — "alias-aware" is a property of the generator that produced the SDK,
   not of the SDK's own semver. The cheapest marker is the presence of the ontology kinds in the
   packaged `aliases.json`, which the templatizer can read from the artifact it is already handling;
   that needs no new stored field on either side.
3. **Flip step 1 for new blocks** — `templatizeFoundryAccessMapping` stops emitting the `OntologySdk`
   entry when step 2 says the SDK is alias-aware. New installs stop sending the params. Old installs
   are unaffected. This is where the behavior change actually lands, and steps 1–3 are a quarter's
   work if OMS is not on the critical path (i.e. if scoped to `ontologies`).
4. **Migrate api-gateway from `getResourceBindingsV2` to `getResourceBindingsV3`** —
   `MarketplaceBindingV2CacheLoader.java:55`. Small, and it is the precondition for everything after
   it, because V2's return type cannot express the stable arm (§3). Do it early; it is independent of
   steps 1–3.
5. **Add the stability flag to TPAS and start returning `stableApiNameBindings`** — a field on
   `StoredSdkVersionMetadataV2` plus a branch at `SdkResource.java:306-311`. api-gateway keeps
   working (it still receives the ontology RID) while the entity bindings stop being served, which
   makes step 3 enforceable rather than advisory. `MarketplaceBindingV2CacheLoader.java:147-149`
   already requires the ontology binding, so the stable arm satisfies it unchanged.
6. **Census, then delete.** Instrument the two chokepoints — `SdkResource.java:299-303` and
   `tpa-service-edge/.../EdgeSdkResource.java:79` — with a metric on distinct `sdkPackageRid` still
   requesting exhaustive bindings. Deletion is safe when that reaches zero, which requires the tail
   of pre-step-3 blocks to be re-packaged or retired.
7. Only then does code come out — and per §1 that is ~20 sites and one file
   (`QueryMarketplaceMapperImpl.java`). The other sixteen files stay until Tier 2.

### The honest answer on timeline

A quarter gets steps 1–5: the ontology-RID alias rewrite, the capability marker, api-gateway on V3,
and new installs no longer sending the params. That is real value — it stops the per-endpoint tax
documented in §1 and it is the whole of the mechanism.

Deleting the remapping is a different question and is gated on two things that are not in this
project's control: Tier 2 (property and link names, which own the majority of the 45 sites and all
seven of the pure-Tier-2 files), and the census in step 6. Anyone who describes Tier 1 as "deleting
the api-gateway remapping" is describing step 7, which is years out. Tier 1 makes the code dead;
Tier 2 makes it deletable.

---

## 7. Asks for other teams

| Team              | Ask                                                                                                                                                                                                                                     | Size                                                                        |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| function-registry | Ontology kinds on `ResourceAliases` / `DefaultAliases`; parameterize `ALIASES_FILE_PATH`; populate `defaults.ontologies` from the install-location ontology                                                                             | small, self-contained                                                       |
| api-gateway       | Migrate `MarketplaceBindingV2CacheLoader:55` from `getResourceBindingsV2` to `getResourceBindingsV3`                                                                                                                                    | small, unblocks everything                                                  |
| TPAS              | Stability flag on `StoredSdkVersionMetadataV2`; branch `SdkResource:306-311` to return the already-defined `stableApiNameBindings` arm                                                                                                  | small; the type work is done                                                |
| OMS / marketplace | Populate `apiName` on `ResolvedObjectTypeShape` / `ResolvedActionTypeShape` / `ResolvedPropertyShape` (`ontology-types.yml:34,467,177`), which the schema already anticipates and `BulkOntologyEntityApiNamesResolver` already computes | the critical path for Tier 2; not needed for a Tier-1 ontology-only rewrite |
