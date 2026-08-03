<!-- cspell:words Hackweek Rehydrator TPAS Templatize Templatizer aliasable codepaths inlines remapper spts unaliased unrepresentable bidirectionality conftest coverton hackweek interceptable officeassignment officenetwork osdks rehydrator remappable retarget shrinkwrapping staticmethod templatize templatizer unconfigured -->

# End-to-end target for the week

## The demo, stated precisely

> A TypeScript function, using an OSDK generated against **stack A**, packaged into a Marketplace
> block, installed onto **stack B**, runs correctly against stack B's ontology — and its HTTP
> requests carry **no `sdkPackageRid`/`sdkVersion` parameters** and name stack B's ontology RID and
> API names. api-gateway's `OntologyMarketplaceMapper` is never constructed.

The verification is negative and mechanical, which is what makes it a good demo: capture the
function's outbound traffic and show the two query parameters are absent.

## Honest scoping

The full path crosses **five repos**, three of which are Palantir server-side Java with their own
build and deploy cycles:

| Repo                              | Work                                                   | Language |
| --------------------------------- | ------------------------------------------------------ | -------- |
| `osdk-ts`                         | resolvers, generator getters, client remap             | TS       |
| a `functions-typescript` project  | the function + `resources.json` ontology aliases       | TS       |
| `function-registry`               | Conjure schema, templatize, rehydrate, write the layer | Java     |
| `marketplace`                     | nothing — see below                                    | —        |
| `third-party-application-service` | nothing for the alias path                             | —        |

Getting a real Marketplace install onto a dev stack through changed `function-registry` Java in five
days is not a safe plan. So run **two tracks**, and let Track 1 be the thing that has to work.

`marketplace` itself needs **no changes**, which is worth knowing early. It is a generic
orchestrator: `grep -r "aliases.json"` over the whole repo returns zero hits, and the "functions
block" is a config object naming a remote service (`FunctionsBlockConfig.java:36-59`). The
architectural rule that keeps it out is written down in
`marketplace/adr/2021-01-19 - Simplify definitions for resolved input shapes and output shapes.md`:
_"A `Resolved*Shape` should only reference its own identifiers, and not of any other entity."_ All
the alias machinery lives in `function-registry`.

---

## Track 1 — full fidelity locally, install simulated (target: Wednesday)

Everything except "Marketplace wrote the file". This proves the OSDK, which is the risky part.

**Setup.** A `functions-typescript` OSDK project. Generate an OSDK against stack A. Declare ontology
aliases in `resources.json` — the schema **already supports them**
(`function-registry/function-registry-api/src/main/conjure/scope/resources.yml:91-143`):

```yaml
OntologyResource:  { fields: { identifier, verbs, alias: optional<scope.Alias> } }
ObjectResource:    { fields: { …, alias: optional<scope.Alias> } }
LinkResource:      { fields: { …, alias: optional<scope.Alias> } }
InterfaceResource: { fields: { …, alias: optional<scope.Alias> } }
ActionResource:    { fields: { identifier, verbs, alias: scope.Alias } }   # <-- REQUIRED, uniquely
QueryResource:     { fields: { …, alias: optional<scope.Alias> } }
OsdkResource:      { fields: { …, alias: optional<scope.Alias> } }
```

So **action aliases are already being collected today and silently discarded** at the
`resources.json` → `aliases.json` projection. That makes actions the cheapest category to plumb
through first, and a good day-one target.

**Steps.**

1. `pnpm turbo transpile` in `osdk-ts`; publish to a local Verdaccio. The repo's CI `e2e` job
   already scripts this exact flow (`.github/workflows/ci.yml:396` — Verdaccio on `:4873`,
   `npx npm-auth-to-token`, `changeset version`, `pnpm publish -r --no-git-checks`). Reuse it rather
   than inventing a linking scheme.
2. Point the function project at those versions; `tsc`.
3. Run the function locally with **no `ALIASES_JSON_FILE` at all**. The SDK's own packaged
   `aliases.json` — emitted by the generator against stack A — is the base layer, so this is the
   identity case and needs no hand-written file. Capture traffic; it must match a pre-change baseline.
   (This step used to involve writing `/tmp/aliases-A.json` by hand. Under the always-on design there
   is nothing to write: the identity file is a build output, and `fixtures/aliases.todo.identity.json`
   is what one looks like.)
4. Write `/tmp/aliases-B.json` — stack B's ontology RID and API names — modelled on
   `fixtures/aliases.todo.remapped.json`. Run again with `ALIASES_JSON_FILE=/tmp/aliases-B.json`
   against **stack B**. The function works; requests name stack B.
5. Swap only the env var between runs — same compiled function, same `node_modules`. That single
   diff _is_ the thesis of the project. Note the asymmetry that makes it a stronger demo than the
   old version: the "before" run has no env var, because portability is now the default state of the
   artifact rather than a mode it can be put into.

**A real mid-fidelity variant, no hand-written files.** The live-preview path is already wired end to
end. `RESOURCES_JSON_FILE` is set to an absolute host path by `StartDevServer.java:86-91`,
`ImportFunctionConfigurationsTask.java:81-88`, and
`functions-typescript-packages/.../FunctionsTypeScriptRuntimeManager.ts:61`, and
`loadPreviewAliases()` is deliberately uncached for hot reload. So: start the dev server, edit
`resources.json` aliases, and watch the running function retarget. That is a genuine demo of the
mechanism with zero simulated steps — and it also exercises the code path the Python prototype left
entirely unimplemented (its `_convert_resources_file` parses only `custom` and `models`).

---

## Track 2 — real Marketplace install (stretch: Thursday/Friday)

Five files in `function-registry`, each mirroring an existing source-alias implementation. This is a
well-cut groove, not new architecture.

| # | Change                                                                                                                                             | File                                                               | Mirror                                   |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------- |
| 1 | Add `ontology` member to `DefaultAliases` (+ the value types)                                                                                      | `function-registry-api/src/main/conjure/scope/aliases.yml:17-27`   | `egressConnections`                      |
| 2 | Add `ontology` to `TemplatedBlockAliases` / `TemplatedFunctionAliases`, plus a `TemplatedOntologyIdentifier` union using the `remappableRid` idiom | `.../block-data/v2/stemma/containers/container-commons.yml:43-101` | `TemplatedEgressConnectionIdentifier`    |
| 3 | Templatize: declare ontology-entity input shapes via `FunctionsShapeSpecBuilder`                                                                   | `.../creation/v2/templatizer/AliasesTemplatizer.java:63-70`        | `templatizeBlockEgressConnectionAliases` |
| 4 | Rehydrate: read `ResolvedObjectTypeShape` / `ResolvedInterfaceTypeShape` / … out of `OpinionatedShapeHolder`                                       | `.../reconciliation/v2/rehydrator/AliasesRehydrator.java:128-139`  | `rehydrateEgressConnectionAlias`         |
| 5 | Write it into the file                                                                                                                             | `.../installation/resolver/AliasesLayerResolver.java:81-90`        | `buildEgressConnectionValues`            |

Also project `resources.json`'s ontology aliases into `aliases.json` at publish time —
`AliasUtils.getValidatedAliasesFile` (`functions-gradle/.../AliasUtils.java:42-54`), which today
populates only `custom`/`models`/`egressConnections`.

### Five things that will bite in Track 2

1. **`ResolvedObjectTypeShape.apiName` is `optional` and currently always empty** — _"in future OMS
   versions it will always be populated"_
   (`marketplace/.../shapes/ontology-types.yml:27`). Rehydration must resolve RID → API name against
   OMS, or store the RID and resolve at runtime. See [01](./01-implementation-plan.md) §2.3.
2. **The install-time layer does not set the env var.** `AliasesLayerResolver` only stacks the
   layer; `ALIASES_JSON_FILE` is set at _publish_ time by the image builder
   (`PublishOsdkFunctionImageTask.java:231`), gated on `resources.json` existing
   (`FunctionsTypescriptOsdkPlugin.java:383-384`). **A function published without `resources.json`
   cannot be bootstrapped at install time** — no env var means the layer is unreadable. The demo
   function must have a `resources.json` from day one.
3. **Determinism is a hard requirement.** `AliasesLayerResolver` uses a sorted-keys JsonMapper
   because _"Marketplace reconciliation should be idempotent, so we need to use a deterministic
   serializer to prevent two identical installations from creating different images."_ Any new map
   must serialize deterministically.
4. **Three write sites must stay in sync** — `AliasUtils` (build), `AliasesLayerResolver` (V2
   install), `LegacyAliasesRehydrator` (V1 install). The last carries an explicit
   `IMPORTANT IMPORTANT IMPORTANT!!!` comment about exactly this.
5. **Schema copies drift.** Conjure `aliases.yml` is authoritative _for the existing members_ —
   the new ontology members are defined in [05](./05-aliases-file-schema.md) and ratified into Conjure
   later, which keeps that review off the week's critical path — but the drift problem is real and
   pre-existing. There are three stale
   generated TypeScript mirrors (`functions-typescript-runtime/function-registry-api/lite/.../__components.ts:18-22`
   still shows only 3 categories vs the source's 6;
   `function-registry-api-typescript/src/functions-aliases-api/aliasesFile.ts`;
   `functions-typescript-packages/.../resourceAliases.ts`) plus `@osdk/functions`'s **hand-written**
   `src/aliases/types.ts`. Five copies. The TS reader does plain `JSON.parse` + cast with no runtime
   validation, so a mismatch fails silently at runtime rather than loudly at build.

Existing tests to extend: `AliasesTemplatizerTest`, `AliasesRehydratorTest`,
`TypeScriptOsdkFunctionsMarketplaceReconcilerTest`, and the integration
`TSv2FunctionsMarketplaceIntegrationTest`.

---

## Turning off the server-side path

To show the alias path is doing the work, the `sdkPackageRid`/`sdkVersion` decorator must be off.
Conveniently, `marketplaceRemappingFetch` already short-circuits:

```ts
const { rid, version } =
  marketplaceMapping?.sdkIdentifierMappings?.values().next().value?.to ?? {};
if (!rid || !version) return fetchFn;
```

So an unpopulated `sdkIdentifierMappings` disables it with no code change. For a controlled demo,
add a temporary env-var kill switch in `functions-typescript-runtime/src/runtime/utils.ts:27,120`.

Then verify negatively: capture the function's outbound requests and assert
`sdkPackageRid` / `sdkVersion` are absent, while the ontology RID and API names in the URLs and
bodies are stack B's.

---

## Day plan

| Day     | Track 1                                                                                                                                                                                                                                                                                                               | Track 2                                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Mon** | Rebase the local `coverton/alias-aware-osdks` branch. **Record the request baselines from `main` before touching the generator** — once the generator changes, the old behavior is unrecoverable. Scaffold `packages/aliases` with the [05](./05-aliases-file-schema.md) types, parser and validator; fixtures green. | —                                                                                                       |
| **Tue** | Generator emits `aliases.json` plus getters for all six Tier-1 values. Byte-equality test against `fixtures/aliases.todo.identity.json`. Snapshot tests + `compileThis` green. **The one baseline-moving commit**: generator change plus ~192 regenerated files, containing nothing else.                             | Draft the Conjure ratification of `aliases.yml` and circulate it — schema review is the long-lead item. |
| **Wed** | Request recorder in `shared.test`. `packaged` / `identity-override` differential modes passing against Monday's baselines. **Track 1 demo working: same image, no env var vs one env var, two stacks.**                                                                                                               | `AliasUtils` projection + `AliasesTemplatizer`.                                                         |
| **Thu** | Extend `changeNames` with `properties`/`links` (prerequisite — see [05](./05-aliases-file-schema.md) §7). Client Tier-2 remapping at the ten choke points. `remapped` mode vs the native oracle.                                                                                                                      | `AliasesRehydrator` + `AliasesLayerResolver`; unit tests.                                               |
| **Fri** | Interface round-trip; response-direction mapping as far as it goes. Write up what's covered and what isn't.                                                                                                                                                                                                           | Attempt a real install on a dev stack.                                                                  |

## Definition of done

**Must have** — the Track 1 demo; the `packaged` and `identity-override` differential modes passing on
the full client suite against baselines recorded from `main`; generator getters and alias-file keys for
all six Tier-1 values, with the key-completeness test asserting both directions; every generated
package's `aliases.json` byte-identical across two consecutive `codegen` runs; the Conjure
ratification proposed and reviewed.

Note what is deliberately _not_ on this list any more: "committed fixtures byte-identical with the
flag off." There is no flag, so the committed fixtures **do** change, exactly once, on Tuesday. The
gate that replaces it is that they change once and then stop.

**Should have** — `remapped` mode passing against the native oracle for objects, actions and
queries; the `function-registry` templatize/rehydrate/write path implemented and unit-tested.

**Stretch** — property and link remapping; interface round-trip including the namespace-derivation
trap; a real Marketplace install.

**Explicitly out of scope** (say so, so nobody assumes otherwise) — browser/bundled OSDKs
(`process.env` + `fs` have no browser equivalent; needs a `createClient` injection API);
`internalDoNotUseMetadata.rid` for widget manifests, which is consumed at _build_ time
(`widget.vite-plugin/src/build-plugin/buildWidgetSetManifest.ts:113-123`) and cannot be fixed at
runtime; `foundry-sdk-generator`'s `UNSTABLE_DO_NOT_USE/ontology-metadata.json`, which writes the
entire source ontology to disk (`generateOntologyMetadata.ts:34-43`); shared property types and
value types; deleting any api-gateway code — the two paths must coexist for a long deprecation.
