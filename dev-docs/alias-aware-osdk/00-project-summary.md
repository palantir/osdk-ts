<!-- cspell:words Hackweek Rehydrator TPAS Templatize Templatizer aliasable codepaths inlines remapper spts unaliased unrepresentable bidirectionality conftest coverton hackweek interceptable officeassignment officenetwork osdks rehydrator remappable retarget shrinkwrapping staticmethod templatize templatizer unconfigured -->

# Alias-aware OSDK — project summary

## 1. The problem

A generated OSDK is a **build artifact of one Foundry environment**. It contains identifiers —
ontology RID, object type API names, action API names, query API names and versions — that only
mean something on the stack it was generated against.

Foundry Functions package that OSDK, plus the function source and `node_modules`, into an OCI
image. That image _is_ the function. When the function is packaged into a Marketplace block and
installed into a different environment, the user remaps ontology entities to entities that exist
there — but **the image is copied bit-for-bit**. Nothing inside it changes. So at runtime the
OSDK still asks for source-environment entities on a stack where they don't exist.

## 2. How this is solved today: server-side remapping

The fix lives in **api-gateway**, and the OSDK is not modified at all.

**Client side** is a single `fetch` decorator in the TypeScript functions runtime —
`functions-typescript-runtime/packages/functions-typescript-runtime/src/runtime/marketplaceUtils.ts`
appends two query parameters to every gateway call:

```ts
const SDK_PACKAGE_RID_QUERY_PARAM = "sdkPackageRid";
const SDK_VERSION_QUERY_PARAM = "sdkVersion";
// …
url.searchParams.append(SDK_PACKAGE_RID_QUERY_PARAM, rid);
url.searchParams.append(SDK_VERSION_QUERY_PARAM, version);
```

installed in the middleware chain alongside `traceAwareFetch`/`retryableFetch` at
`.../src/runtime/utils.ts:27,120`. The values come from
`MarketplaceMapping.sdkIdentifierMappings[].to`, delivered per-invocation over the
function-executor runtime API (`function-execution/function-executor-api/src/main/conjure/function-executor-runtime-api.yml:313-364`).

**Server side**, `sdkPackageRid` + `sdkVersion` are declared on **35 operations** in
`api-gateway/api-gateway-openapi/src/main/openapi/v2/ontologies-v2-api.yml` and validated as a
pair (`OntologiesApiResourceV2.java:214-217`, `:2209-2220`). There is no filter or interceptor —
all **99 occurrences live inline in one class**, `OntologiesApiResourceV2.java`. Each
marketplace-aware method opens with the same prologue:

```java
Optional<MarketplaceBindingV2> marketplaceBinding =
        getMarketplaceBindingV2(authHeader, sdkPackageRid, sdkVersion);
OntologyRid ontologyRid = toOntologyRidWithMigrationMapping(authHeader, ontology, marketplaceBinding);
Optional<OntologyMarketplaceMapper> ontologyMarketplaceMapper =
        marketplaceBinding.map(b -> getMarketplaceMapperV2(b, ontologyRid, ontologyBranchRid));
```

The binding comes from **third-party-application-service** (`SdkService.getResourceBindingsV2`,
`sdk-service-api.yml:271-285`), Caffeine-cached per `(authHeader, sdkPackageRid, sdkVersion)`
(`ThirdPartyApplicationManagerImpl.java:20-47`). Its payload,
`third-party-application-service-api/src/main/conjure/resource-bindings.yml`, is the authoritative
remap contract — every entry pairs a **target-environment RID** with the **source-environment API
name**:

```yaml
ObjectTypeBinding:
  fields:
    localRid: ids.ObjectTypeRid          # target env
    boundApiName: ids.ObjectTypeApiName  # source env, copied verbatim
    propertyTypeBindings: list<PropertyTypeBinding>
```

`OntologyMarketplaceMapperImplV2` then does a **double hop** — `sourceApiName → targetRid → current target apiName` — so post-install renames in the target ontology are absorbed
transparently. Notably, when a binding is present the `{ontology}` path segment is **not even
resolved**; the binding's ontology RID wins outright (`OntologiesApiResourceV2.java:2032-2046`).

Remapping is **bidirectional**. Requests are rewritten on the way in (object-set trees, filters,
`select`/`selectV2`, `orderBy`, aggregation group-bys and metrics, struct-field selectors,
transaction edit property maps, action and query path params) and **responses are rewritten on the
way out** so the OSDK only ever sees source-environment names: `__apiName`/`$apiName` and every
property key (`OntologyMarketplaceMapperImplV2.java:190-241`), aggregation response group keys
(`AggregationResponseTranslator.java:256-273`), `ObjectTypeV2.properties` — _filtered to the SDK's
declared property set_ so target-only properties don't leak (`ObjectTypeV2Converter.java:42-97`),
and link type sides, where **unbound links are dropped from the response entirely**
(`LinkSideV2Converter.java:12-31`).

### What this approach costs

- ~30 remap sites in one 2000+-line Java class, each of which must be individually retrofitted
  when a new ontology feature ships. The changelog reads as a two-year trail of
  `"Fix shrinkwrap logic"`, `"Move actions to v2 shrinkwrap"`, `"Fix shrinkwrap for unknown properties on objects"`.
- **Interfaces are entirely unsupported**, at four layers simultaneously. TPAS _does_ reconcile
  interface bindings correctly (`OntologySdkMarketplaceIntegration.java:812-861` builds
  `interfaceTypes`), and `ResourceBindings.interfaceTypes` carries them, but
  `MarketplaceBindingV2CacheLoader.translateBindingsV2` never reads them, `MarketplaceBindingV2`
  has no field to hold them, `getInterfaceType` uses the binding only to pick the ontology
  (`:940-957`), and `ObjectSetManagerImpl.mapMarketplaceObjectTypeApiName:577` explicitly disables
  remapping when `interfaceTypesInScope`.
- **Shared property types and value types have no binding kind at all.**
  `getObjectTypeFullMetadata` leaks target-env SPT api names via
  `objectTypeAdapter.getSptApiNameToApiName()` (`:2259`).
- **`applyAction` with `returnEdits` is hard-rejected** rather than remapped
  (`checkUnsupportedMarketplaceActionOptions`, `:2222-2244`) — and it falls back to
  `ActionsClientImpl.SHOULD_RETURN_ALL_EDITS_DEFAULT` when the caller doesn't specify.
- `branch` + marketplace on `executeQueryV2` throws (`:1716-1718`).
- No docs anywhere in api-gateway. The tests are the spec.

## 3. The mechanism we want to reuse: Functions aliases

Functions already solved "an immutable image must reference different resources after install" for
**models and sources**, via a JSON file swapped at install time.

**The file.** `/app/var/data/aliases.json`, located at runtime _only_ via the
`ALIASES_JSON_FILE` env var. Three independent constants agree on the path:
`functions-typescript/.../PublishOsdkFunctionImageTask.java:71`,
`functions-python/.../PublishFunctionImageTask.java:106-107`,
`function-registry/.../AliasesLayerResolver.java:33-35`. Schema is Conjure —
`function-registry/function-registry-api/src/main/conjure/scope/aliases.yml`:

```yaml
AliasesFile:
  fields:
    defaults: DefaultAliases
    version: integer
DefaultAliases:
  fields:
    custom:            map<scope.Alias, CustomValue>
    models:            map<scope.Alias, ModelValue>
    egressConnections: map<scope.Alias, EgressConnectionValue>
    datasets:          map<scope.Alias, DatasetValue>
    mediasets:         map<scope.Alias, MediasetValue>
    streams:           map<scope.Alias, StreamValue>
```

**`DefaultAliases` has no ontology member — that is the gap this project fills.** The exclusion is
deliberate and documented twice, in `scope/scope.yml:10-15`: _"Only Platform SDK resources (not
Ontology SDK resources) have aliases for now."_

**Who writes it.** At publish, `WriteAliasesFileTask` projects the author-maintained
`resources.json` into `aliases.json` (`AliasUtils.getValidatedAliasesFile`), and the image builder
adds it to the metadata layer _and sets the env var_
(`PublishOsdkFunctionImageTask.java:223-232`). At install, `AliasesLayerResolver` serializes a
**new** `aliases.json` and **stacks it as an additional OCI layer over the same image**, shadowing
the published file — no rebuild:

```java
LayerUploadResult layerResult = dockerManager.deterministicUploadFileAsLayer(
        authHeader, repositoryRid, imageName, aliasesJson, ALIASES_FILE_PATH, ALIASES_FILE_MODE, ownership);
Digest newManifestDigest =
        dockerManager.deterministicAddLayerToImage(authHeader, repositoryRid, imageName, imageRef, layerResult);
```

Packaging/install is a symmetric templatize→rehydrate pair with three declared remapping
strategies (`container-commons.yml:63-92`): `stringParameter` (becomes a user-editable install
parameter), `remappableRid` (points at a real Marketplace entity input shape, resolved to a target
RID — this is what sources use), and `static` (pass-through — what models use today, meaning
**models are not actually remappable yet**).

**The reader.** `@osdk/functions` already ships it — `packages/functions/src/aliases/`, exported as
`export * as Aliases from "./aliases/index.js"` (`packages/functions/src/index.ts:37`), with six
accessors of identical shape:

```ts
export function model(alias: string): Model {
  const resolvedAliases = loadResolvedAliases();
  if (!(alias in resolvedAliases.models)) { /* throw with available aliases */ }
  return resolvedAliases.models[alias];
}
```

Two environments (`packages/functions/src/aliases/environment.ts`): `ALIASES_JSON_FILE` →
`PUBLISHED` (parsed once, module-level cache), `RESOURCES_JSON_FILE` → `LIVE_PREVIEW` (deliberately
uncached, so a developer editing resources in their workspace gets hot reload).

**Critically de-risking**: TypeScript functions are compiled with **`tsc` only — no bundler**
(`TypescriptCompileTask.java:21-27`; zero hits for webpack/esbuild/rollup/vite in the OSDK plugin),
`node_modules` ships verbatim as its own image layer, and `@osdk/functions` resolves to Babel-
transpiled ESM. The `fs.readFileSync` in `loaders.ts` survives intact — verified in the shipped
artifact `packages/functions/build/esm/aliases/loaders.js:17,29`. The webpack config that _would_
break `fs` (`target: "webworker"`) belongs solely to the legacy v1 plugin, which never participates
in aliases.

## 4. What a generated TS OSDK actually bakes in

This is the finding that makes the project tractable. Almost nothing survives compilation.

The emitter template (`packages/generator/src/v2.0/wireObjectTypeV2ToSdkObjectConstV2.ts:139-149`)
produces a runtime value with **six keys**:

```ts
export const Employee = {
  type: "object",
  apiName: "Employee",
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: "employeeId",
  primaryKeyType: "integer",
  internalDoNotUseMetadata: { rid: "ri.ontology.main.object-type.401ac022-…" },
} satisfies Employee & {
  internalDoNotUseMetadata: { rid: string };
} as Employee;
```

Everything else — all properties, all links, `interfaceMap`, `inverseInterfaceMap`,
`titleProperty`, `implements`, `implementedBy`, `displayName`, `status`, the type-level `rid` —
lives in the optional, **never-assigned** `__DefinitionMetadata?` slot and is erased by `tsc`.
Actions suppress `rid`/`parameters`/`modifiedEntities`/`status`/`description` via an explicit
kill-list (`generatePerActionDataFiles.ts:246-255`); queries do the same (`generatePerQueryDataFiles.ts:230-236`).

| Kind      | Keys present in emitted `.js`                                                                            |
| --------- | -------------------------------------------------------------------------------------------------------- |
| object    | `type`, `apiName`, `osdkMetadata`, `primaryKeyApiName`, `primaryKeyType`, `internalDoNotUseMetadata.rid` |
| interface | `type`, `apiName`, `osdkMetadata`, `internalDoNotUseMetadata.rid`                                        |
| action    | `apiName`, `type`, `unsanitizedApiName`, `osdkMetadata`                                                  |
| query     | `apiName`, `type`, `version`, `isFixedVersion`, `osdkMetadata`                                           |
| SDK-level | `$ontologyRid`, `$branch`, `$osdkMetadata.extraUserAgent`                                                |

Of those, the ones that reach the wire:

- **`$ontologyRid`** — the `{0}` in every URL. `$branch` — a query param on nearly every call.
- **Object / interface `apiName`** — travels **in the request body**, not the path, through a single
  choke point, `packages/client/src/util/objectSetUtils.ts:20-32`:
  ```ts
  return objectType.type === "interface"
    ? { type: "interfaceBase", interfaceType: objectType["apiName"] as string }
    : { type: "base", objectType: objectType["apiName"] as string };
  ```
- **Action `unsanitizedApiName ?? apiName`** — a URL path segment (`applyAction.ts:133,140,163,171`).
- **Query `apiName`** — a URL path segment; `version` a query param, only when `isFixedVersion`
  (`applyQuery.ts:70,83`).

Three properties of the existing architecture make this a good fit:

1. **`OntologyProvider` is already a complete runtime metadata resolution layer**
   (`packages/client/src/ontology/OntologyProvider.ts:37-68`) — four apiName-keyed async caches
   feeding the same `@osdk/generator-converters` functions the generator uses. The client already
   treats the _server_ as the source of truth for properties, links and `interfaceMap`. Its factory
   is already a parameter of `createMinimalClient` (`:55-59`) that `createClientInternal` simply
   never passes — swapping in an alias-aware provider needs no new API.
2. **A two-name indirection is already shipped**: actions carry both a camelized TS identifier and
   the raw wire name (`EnhancedAction.ts:23-28`), and every runtime call site prefers the wire name.
3. **Namespaced dependency SDK packages already ship without an ontology RID at all** —
   `generateMetadata.ts:36` omits `$ontologyRid`/`$branch` when `ontologyApiNamespace != null`.
   There is precedent for externalizing it.

## 5. Proposed solution

Move remapping **out of api-gateway and into the artifact**.

1. **Every generated OSDK ships an alias file and reads it at runtime.** Not an optional overlay on
   top of baked-in values — the file _is_ where the environment-specific values live. The generator
   emits `aliases.json` into the package alongside `index.ts`, carrying the ontology RID/branch,
   object types (+ property names), links, interfaces, actions and queries, and it emits resolver
   calls that carry **no compiled-in default**.

   This is a stronger position than "add a remapping file", and deliberately so. One codepath ships,
   so the path CI exercises is the path that runs after a Marketplace install. The file becomes the
   complete, auditable inventory of what the artifact assumes about its stack. And Marketplace's job
   really does reduce to producing a file, rather than producing a file that has to agree with values
   that also exist somewhere else.

2. **Define the format here, compatibly.** The schema lives in TypeScript in a new leaf package, with
   a real runtime parser, and is backwards-compatible with `function-registry`'s Conjure `AliasesFile`
   — five new optional members on `DefaultAliases` (`ontologies`, `objects`, `interfaces`, `actions`,
   `queries`), flat alongside the existing six. The Conjure change becomes a ratification of a format
   that already works rather than a prerequisite, which takes cross-repo schema review off the critical
   path. It also collapses one of the five drifting copies of this schema that exist today
   ([01](./01-implementation-plan.md) §2.0). The normative definition, the compatibility proof in both
   directions, and three ready-to-use fixtures are in [05](./05-aliases-file-schema.md).

   Compatibility was verified rather than assumed, and it is not symmetric. New file → old reader is
   safe (`@JsonIgnoreProperties(ignoreUnknown = true)` on the generated `DefaultAliases.Builder`). But
   the reverse imposes a hard constraint: a generated file **must** carry all six legacy members, as
   `{}` when empty, or `@osdk/functions`'s `loadPublishedAliases()` throws — it calls `Object.entries()`
   on five of them with no guards.

3. **Put the resolvers in `@osdk/aliases`, a dependency-free leaf.** Generated SDKs depend on
   `@osdk/api`; `@osdk/functions` peer-depends on `@osdk/client`. Having generated code import from
   `@osdk/functions` would invert the graph and drag the Functions runtime into every SDK. A leaf
   package avoids that, and `@osdk/functions` re-exports it so existing `Aliases.model()` callers are
   unaffected. Filesystem and `process.env` access sits behind a separate `@osdk/aliases/node`
   entrypoint so the root stays browser-safe ([01](./01-implementation-plan.md) §3).

4. **Emit resolver calls instead of literals** in the generator, using the getter form that keeps the
   `.d.ts` byte-identical. Resolution is layered by source — injected override, `ALIASES_JSON_FILE`,
   live-preview `RESOURCES_JSON_FILE`, then the SDK's own packaged file — and **strict per key**: an
   active file missing a key the generated code asks for is a loud error, because it means the
   remapper and the generator disagree about what this SDK contains.

5. **Remap in `@osdk/client`** for the identifiers that never appear in generated JS at all — property
   names and link names — at the existing conversion choke points (`modernToLegacyWhereClause`,
   `remapSelectV2`, `remapPropertyNames`, `modernToLegacyAggregationClause`, `createSearchAround`,
   `getDollarLink`). See [01](./01-implementation-plan.md) §4 for why this is unavoidable in TypeScript
   and was free in Python.

6. **Have Marketplace install write the file**, following the groove
   `AliasesTemplatizer` → `AliasesRehydrator` → `AliasesLayerResolver` already cuts for sources — which
   works by making `ALIASES_JSON_FILE` win over the packaged file, exactly as the OCI layer swap does
   today. The install-side pattern to copy is TPAS's `reconcileOntologyInfo`
   (`OntologySdkMarketplaceIntegration.java:812-861`): reconcile the **RID** to the target, copy the
   **API name** from the source verbatim. That asymmetry is the whole trick.

Result: requests from the installed OSDK carry no `sdkPackageRid`/`sdkVersion` and are
byte-indistinguishable from requests made by an OSDK generated natively in the target environment.
Marketplace remapping reduces to _producing a file_.

### Why this is strictly better where it matters

- **Interfaces**: TPAS already reconciles interface bindings; api-gateway just doesn't read them.
  An alias file carrying `interfaces` closes the gap without touching api-gateway.
- **New ontology features** need a generator/client change in one repo instead of a new remap site
  in `OntologiesApiResourceV2`.
- **`returnEdits` works.** There is nothing to reject, because the response never needed rewriting.
- **No per-request TPAS fetch**, no 10-minute-TTL Caffeine cache, no
  `MarketplaceInstallationNotFound` failure mode on the read path.
- It composes with the strategic direction TPAS already declared: `getResourceBindingsV3` returns
  `StableApiNameBindings` — _"Only the ontology RID mapping. Entity API names are stable; do not
  remap them."_ (`resource-bindings.yml:64-78`). api-gateway has not adopted it. An alias file that
  carries only `ontology.rid` **is** that design, expressed client-side.

### Prior art and current state of the work

- **Python**: `~/PyCharmProjects/python-osdk`, branch `coverton/alias-aware-osdks` (PR #1159) —
  122 files, +3014/−579. Working prototype of the resolver-call approach. Its gaps are catalogued in
  [01](./01-implementation-plan.md) §5 and are informative: property names and ontology RID have
  resolvers that are never called, RDP builders were missed, alias keys are namespace-stripped (and
  therefore collide), and the committed fixture nests the ontology sections one level deeper than
  the loader reads them.
- **TypeScript**: a local branch `coverton/alias-aware-osdks` in this repo already has 18 files,
  +1792/−7 — six ontology resolvers in `packages/functions/src/aliases/`, an extended
  `ResolvedAliases`, a `shared.test` alias-mode harness, and three aliased client test suites.
  **No generator changes yet.** That branch is the starting point, with three things to change as it
  moves into `@osdk/aliases`: the resolvers lose their `default` argument and start throwing on a
  missing key, alias keys become full generated API names, and links stop being a flat global map.
