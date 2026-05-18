# OSDK Maker-Experimental Package

The Maker-Experimental package provides experimental functions relating to programmatically defining ontologies (see the @osdk/maker package). These functions are unstable and may have unexpected behavior.

## defineOacOntology

`defineOacOntology` is a single-call ontology builder: declare objects, links, actions, and interfaces in TypeScript and get OSDK-typed values directly out — usable with `client(...)` and consumed by `vite-plugin-oac` for local dev.

```ts
const ontology = await defineOacOntology({
  namespace: "com.example.",
  build: () => {
    const Flight = defineObjectV2({/* ... */});
    const Airplane = defineObjectV2({/* ... */});
    const airplane = defineLinkV2({/* ... */});
    const recordLanding = defineModifyObjectActionV2(Flight);
    return {
      objects: { Flight, Airplane },
      links: [airplane],
      actions: { recordLanding },
    };
  },
});

// Direct use with the OSDK client:
const flights = await client(ontology.Flight).fetchPage();
await client(ontology.recordLanding).applyAction({/* ... */});
```

`_oac` on the result carries the IR consumed by `vite-plugin-oac`. `_oac` is a reserved key: the function throws if a user object, action, or interface is named `_oac`.

### Supported surface

| Surface                                                                                                                              | Status |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Object/link/action/interface define + property type inference                                                                        | ✅     |
| Every scalar primitive (boolean/byte/date/decimal/double/float/integer/long/short/timestamp)                                         | ✅ e2e |
| Flat-form `PropertyV2Config` (string-with-analyzer, decimal-precision, marking subtype)                                              | ✅     |
| Array, struct, marking properties                                                                                                    | ✅ e2e |
| 1:M, M:M, and intermediary (3-way junction) links                                                                                    | ✅     |
| Link `status` (active/experimental/example/deprecated)                                                                               | ✅     |
| Auto-generated `defineCreate/Modify/Delete/CreateOrModify ObjectActionV2`                                                            | ✅     |
| Interface action helpers (`defineCreate/Modify/Delete InterfaceObjectActionV2`)                                                      | ✅     |
| Per-parameter + action-level validation, sections, `parameterOrdering`                                                               | ✅     |
| Interface `extends` chain + `defineInterfaceLinkConstraintV2`                                                                        | ✅     |
| Explicit `{ interface, propertyMapping }` on `ObjectV2Config.implements`                                                             | ✅     |
| `ObjectV2Config.editsHistoryConfig` + `datasource: { type: "dataset" }`                                                              | ✅     |
| `fetchOne`, `fetchPage` (+ `$where`/`$orderBy`/`$pageSize`/`$select`/`$nextPageToken`), `asyncIter`, `aggregate $count` + `$groupBy` | ✅ e2e |
| Compile-time rejection of typo'd property/action params and ontology keys                                                            | ✅     |

### Known limitations

- **Loose typing on link-traversal results.** `flight.$link.airplane.fetchOne()` returns an `Osdk.Instance<>` whose link-target type carries no `__DefinitionMetadata`, so individual property access typechecks but doesn't catch typos. Direct fetches (`client(Airplane).fetchOne(...)`) are fully typed. This is the cost of the TS2589 fix — see below.
- **FauxFoundry aggregate operators.** `$count` + `$groupBy` work locally. `sum`/`avg`/`max`/`min` are accepted by the OSDK client types but the local faux backend currently hardcodes a count handler regardless of operator (`packages/faux/src/handlers/createObjectSetHandlers.ts`). Real Foundry handles all aggregates.

### TS2589 trade-off

`flight.$link.airplane.fetchOne()` used to trigger TS2589 ("type instantiation excessively deep") on objects with 3+ outgoing links because each link target materialized a full `BaseObjectDef<T>` with four mapped-type fields. Resolving all targets simultaneously exceeded TypeScript's instantiation budget.

The fix: `BaseObjectDef<T>` (the link-target reference) now carries only structural identity — `type`, `apiName`, `primaryKeyApiName`, `primaryKeyType` — and no `__DefinitionMetadata`. Full per-property metadata still lives on the top-level `FinalizedObjectDef` returned to the user, so direct fetches remain fully typed.

What we lost: link-traversal results come back as `Osdk.Instance<>` with no per-property type info. Future work can recover precision by threading deferred metadata through the link reference, or by switching to apiName-string references that OSDK resolves at the call site.

### Design notes

- **`defineActionV2` requires `modifiedEntities`.** The lower-level `defineActionV2` throws if `modifiedEntities` is missing. The high-level helpers set it for you, so most users won't hit this.
- **Auto-generated action apiNames use `kebab()`** which boundaries on lowercase→uppercase. `AirplaneCm1` → `airplane-cm1` (no separator before digit); `AirplaneNoPk` → `airplane-no-pk`. Predictable but not always intuitive.
- **Reserved-key check is shallow.** Only top-level object/action/interface keys are checked against `_oac`; links don't share the output namespace so they're not affected.
