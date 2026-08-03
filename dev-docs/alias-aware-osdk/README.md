<!-- cspell:words Hackweek Rehydrator TPAS Templatize Templatizer aliasable codepaths inlines remapper spts unaliased unrepresentable bidirectionality conftest coverton hackweek interceptable officeassignment officenetwork osdks rehydrator remappable retarget shrinkwrapping staticmethod templatize templatizer unconfigured -->

# Alias-aware OSDK

Hackweek project: make a generated TypeScript OSDK portable across Foundry environments by
resolving ontology identifiers from a runtime alias file instead of baking them into the
generated code — so Marketplace shrinkwrapping needs no server-side remapping.

| Doc                                                                  | Contents                                                                                               |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [00-project-summary.md](./00-project-summary.md)                     | Current state, the problem, where every piece lives, proposed solution                                 |
| [01-implementation-plan.md](./01-implementation-plan.md)             | `aliases.json` schema, what static info is actually needed, TS-vs-Python differences, phased work plan |
| [02-iteration-and-testing.md](./02-iteration-and-testing.md)         | Tight local loop + the differential integration suite that proves behavioral parity                    |
| [03-end-to-end-target.md](./03-end-to-end-target.md)                 | The end-of-week demo, day by day, across five repos                                                    |
| [04-hardest-problems.md](./04-hardest-problems.md)                   | Ranked difficulty analysis; what will actually eat the week                                            |
| [05-aliases-file-schema.md](./05-aliases-file-schema.md)             | Normative schema, back-compat proof, completeness analysis, validation rules, fixtures                 |
| [06-tier1-implementation-plan.md](./06-tier1-implementation-plan.md) | The concrete, phased build plan for Tier 1 — named files, tests, and the Tier 2 known limitation       |
| [07-python-parity.md](./07-python-parity.md)                         | Format-parity audit between this TypeScript work and the Python OSDK's `aliases.json` reader           |
| [08-server-side.md](./08-server-side.md)                             | What has to change in api-gateway / Marketplace / TPAS, and the path to retiring server-side remapping |
| [09-demo-script.md](./09-demo-script.md)                             | The recorded demo walkthrough                                                                          |
| [fixtures/](./fixtures/)                                             | Three `aliases.json` fixtures keyed to `TodoWireOntology`: identity, remapped, incomplete              |

## The one-paragraph version

A v2 generated TypeScript OSDK bakes only **six strings per entity plus two per SDK** into its
runtime JavaScript — everything else (properties, links, `interfaceMap`, action parameters) is
erased by `tsc` into a never-assigned `__DefinitionMetadata?` type slot and re-fetched from the
server at runtime by `OntologyProvider`. That makes the runtime remapping surface remarkably
small. Replace those strings with getters that consult a runtime alias file, extend the
existing Foundry Functions `aliases.json` contract with ontology sections, and have Marketplace
install rewrite that file (it already stacks a new OCI layer to do exactly this for models and
sources), and the OSDK's requests become indistinguishable from an OSDK generated natively in
the target environment. The ~30 remapping sites in api-gateway's `OntologiesApiResourceV2` stop
being load-bearing.

**Every** generated OSDK emits and reads this file — there is no flag and no dual codepath. The
resolvers take one argument (the source-environment alias) and have no compiled-in default, so a
missing key is a hard error rather than a silent fallback to a stale name. The goal is for the
file to be the artifact's complete, auditable inventory of what it assumes about its stack.
Tier 1 does not get there: `foundry-sdk-generator` still publishes the whole un-erased ontology
metadata as a public export, object and interface RIDs stay literal in the generated consts (and
get baked into deployed widget manifests), and babel ESM sourcemaps ship the pre-erasure source.
See [Why `aliases.json` is not yet a complete inventory](./06-tier1-implementation-plan.md#why-aliasesjson-is-not-yet-a-complete-inventory).

## The keystone, verified

A getter satisfies a literal-typed property, leaves the emitted `.d.ts` byte-identical, and
makes only the runtime value dynamic:

```ts
export const Employee = {
  type: "object",
  get apiName() {
    return $resolveObjectType("Employee");
  },
  osdkMetadata: $osdkMetadata,
  get primaryKeyApiName() {
    return $resolvePrimaryKey("Employee");
  },
  primaryKeyType: "integer",
  internalDoNotUseMetadata: { rid: "ri.ontology.main.object-type.401ac022-…" },
} satisfies Employee & {
  internalDoNotUseMetadata: { rid: string };
} as Employee;
```

`tsc --declaration` still emits `export declare const Employee: Employee;`. Confirmed against
the repo's TypeScript 5.5.4, and a stale build artifact from an earlier spike
(`packages/client.test.ontology/build/esm/.../Employee.js`) shows this exact shape already
compiled once.
