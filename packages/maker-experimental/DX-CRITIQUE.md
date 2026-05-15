<!-- cspell:ignore ksethi -->

# defineOacOntology — DX critique

A honest, file-line-referenced view of what works and what doesn't, as of
this branch's state. Goal: a stranger deciding whether to adopt
`defineOacOntology` should be able to read this in five minutes.

## TL;DR

`defineOacOntology` is **a credible codegen replacement for application
ontologies**: define objects, links, actions, and interfaces in
TypeScript, get OSDK-typed values directly out of one call, exercise the
full read path and create/modify/delete actions against a faux backend
with no codegen step.

**Coverage closure stages 1–6 shipped on this branch:**

- Property type completeness — every scalar primitive probed e2e
  (boolean/byte/date/decimal/double/float/integer/long/short/timestamp),
  flat-form variants for string-with-analyzer / decimal-precision /
  marking-with-MANDATORY subtype.
- Link variants completeness — intermediary (3-way junction) links
  alongside 1:M and M:M; status field on all variants.
- Action surface extensions — `defineCreate/Modify/Delete InterfaceObjectActionV2`
  helpers, e2e for `defineCreateOrModifyObjectActionV2`.
- Action validation surface — per-parameter `validation`, action-level
  `validation`, form `sections`, explicit `parameterOrdering`.
- Interface extras — `defineInterfaceLinkConstraintV2`, `extends` chain
  exercised e2e, explicit `{ interface, propertyMapping }` form for
  renamed property mappings.
- Object-level extras — `editsHistoryConfig` and basic `dataset`
  datasource pass-through.

No MAJOR gaps remain. The remaining MINOR notes are scoped tradeoffs:
loose prop typing on link-traversal results (the cost of the TS2589 fix
— see "TS2589 — what it was, what fixed it, what we lost" below), and
faux's `aggregate sum/avg/max/min` support which lands in a separate PR.

Decision: ship as `experimental`. The remaining MINOR work is
incremental and doesn't block adoption for read-heavy or
write-with-actions workloads.

## What works

| Surface                                                                                           | Test                                                     | Status                                                 |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| Object define + property type inference                                                           | `packages/maker/src/api/test/v2.test.ts:42-97`           | ✅                                                     |
| Link define + multiplicity inference                                                              | `packages/maker/src/api/test/v2.test.ts:99-137, 245-301` | ✅ (1:M and M:M type-level)                            |
| M:M link converter (IR → full metadata, both sides)                                               | `defineOacOntology.converter.test.ts`                    | ✅                                                     |
| M:M link traversal e2e (Airline ↔ Airport)                                                        | `defineOacOntology.surface.e2e.test.ts`                  | ✅ (with TS2589 cast on multi-link source — see below) |
| Action define + parameter literal preservation                                                    | `packages/maker/src/api/test/v2.test.ts:840-882`         | ✅                                                     |
| `finalizeTypes` runtime + type                                                                    | `packages/maker/src/api/test/v2.test.ts:139-195`         | ✅                                                     |
| OSDK client compatibility (assignable to `ObjectTypeDefinition`, `ObjectMetadata`)                | `packages/maker/src/api/test/v2.test.ts:677-882`         | ✅                                                     |
| `fetchPage` typed array                                                                           | `defineOacOntology.flows.e2e.test.ts:36-48`              | ✅                                                     |
| `fetchOne` returns typed values                                                                   | `defineOacOntology.e2e.test.ts:36-45`                    | ✅                                                     |
| Create action round-trip (create → fetchPage shows new object)                                    | `defineOacOntology.flows.e2e.test.ts:65-83`              | ✅                                                     |
| Delete action round-trip                                                                          | `defineOacOntology.flows.e2e.test.ts:115-130`            | ✅                                                     |
| 1:M link traversal both directions                                                                | `defineOacOntology.flows.e2e.test.ts:84-103`             | ✅ (with TS2589 cast on multi-link source — see below) |
| `.where` with simple equality, `$eq`, `$in`, `$and`                                               | `defineOacOntology.surface.e2e.test.ts:50-92`            | ✅                                                     |
| `.fetchPage({ $orderBy })` ascending/descending                                                   | `defineOacOntology.surface.e2e.test.ts:104-122`          | ✅                                                     |
| `.fetchPage({ $pageSize })`                                                                       | `defineOacOntology.surface.e2e.test.ts:128-133`          | ✅                                                     |
| `.fetchPage({ $select })` partial loading                                                         | `defineOacOntology.surface.e2e.test.ts:154-161`          | ✅                                                     |
| `asyncIter()`                                                                                     | `defineOacOntology.surface.e2e.test.ts:167-173`          | ✅                                                     |
| `.aggregate({ $count, $groupBy })`                                                                | `defineOacOntology.surface.e2e.test.ts:179-205`          | ✅                                                     |
| Compile-time rejection of typo'd property/action params, wrong-typed values, typo'd ontology keys | `defineOacOntology.compile-errors.test.ts`               | ✅ (4 `@ts-expect-error` directives)                   |
| vite-plugin-oac CLI flow compatibility                                                            | `overall.test.ts:1097-1135`                              | ✅                                                     |

## Known gaps

### BLOCKER — none

No item that an adopter would hit on day one and be unable to work around.

### MAJOR

_None remaining._

### CLOSED (formerly MAJOR)

| Gap                                              | Resolution                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~Modify action e2e~~                            | Closed by Stage A1.                                                                                                                                                                                                                                                                                                                          |
| ~~Many-to-many converter never validated~~       | Closed by Stage A2.                                                                                                                                                                                                                                                                                                                          |
| ~~No `defineInterfaceV2`~~                       | Closed by Stage C.                                                                                                                                                                                                                                                                                                                           |
| ~~Untested scalar primitives~~                   | Closed by coverage closure Stage 1: byte/short/float/double/boolean/date/decimal/long all probed e2e via `PropertyProbe` object in the fixture.                                                                                                                                                                                              |
| ~~Flat-form analyzer/precision/marking subtype~~ | Closed by coverage closure Stage 1: `{ type: "string", isLongText, analyzerOverride, ... }`, `{ type: "decimal", precision, scale }`, `{ type: "marking", markingType, markingInputGroupName }` all accepted at the top level of `PropertyV2Config`.                                                                                         |
| ~~No intermediary (3-way) links~~                | Closed by coverage closure Stage 2: `defineLinkV2` accepts a third discriminant with `intermediaryObjectType` + `manyToIntermediaryLink` + `toManyToIntermediaryLink`; Passenger ↔ Flight via BoardingPass exercised in the fixture; downstream converter teaches IR `intermediary` → MANY/MANY linkSides.                                   |
| ~~No interface-targeted action helpers~~         | Closed by coverage closure Stage 3: `defineCreate/Modify/Delete InterfaceObjectActionV2` wrap the v1 helpers; v2 actions record stays uniformly typed; downstream converter handles `interfaceReference` parameter type + `deleteObjectRule` with interface ref → `deleteInterfaceObject` LogicRule.                                         |
| ~~No action validation / sections surface~~      | Closed by coverage closure Stage 4: `ActionParameterV2Config.validation` (allowedValues, required, defaultVisibility, conditionalOverrides), `ActionV2Config.validation` (action-level rules), `ActionV2Config.sections` + `parameterOrdering` flow through `defineActionV2` → v1 `defineAction`.                                            |
| ~~No interface link constraints / extends e2e~~  | Closed by coverage closure Stage 5: `defineInterfaceLinkConstraintV2` thin wrapper; `extends` chain exercised via Asset → Vehicle in the fixture; auto-mapping walks the extends chain so inherited properties also get mapped; `ObjectV2Config.implements` accepts `{ interface, propertyMapping }` for renamed properties (GroundVehicle). |
| ~~No object-level editsHistory / datasource~~    | Closed by coverage closure Stage 6: `ObjectV2Config.editsHistoryConfig` + basic `datasource: { type: "dataset" }` pass through to v1. Advanced datasource variants and granular security policies stay deferred.                                                                                                                             |

### CLOSED (formerly MINOR)

| Gap                                     | Resolution                                                                                                                                                                                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~Pagination via `$nextPageToken`~~     | Closed by Stage A3: the e2e test walks all pages with `$pageSize: 1` to exhaustion, asserting every flight is visited exactly once. FauxFoundry uses page-index tokens — stable across calls by design.                                  |
| ~~Array properties: no e2e coverage~~   | Closed by Stage A4: `Airplane.tags: { type: "string", array: true, nullable: true }` added to fixture, seeded with sample value on N12345; e2e test asserts `tags` round-trips as `string[]` and is undefined on the unseeded plane.     |
| ~~Struct properties: no e2e coverage~~  | Closed by Stage A4: `Airplane.specs` declared as a struct with nested `weight`/`wingspan`; e2e test fetches and asserts the nested-field shape. Auto-generated actions still correctly exclude the struct from create/modify parameters. |
| ~~Marking properties: no e2e coverage~~ | Closed by Stage A4: `Airplane.classification` declared as `{ type: "marking", markingType: "MANDATORY", markingInputGroupName: "DefaultMarkings" }`; e2e test fetches and asserts the value round-trips through FauxFoundry.             |

### MINOR

| Gap                                             | Surface                                                   | Why it matters                                                                                                                                                                                                                                                                                                                                                    | Fix proposed                                                                                                                                                                |
| ----------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Loose prop typing on link-traversal results** | `defineOacOntology.flows.e2e.test.ts:84-99`               | `flight.$link.airplane.fetchOne()` returns an `Osdk.Instance<>` whose link-target type carries no `__DefinitionMetadata`, so individual property access (`airplane.tailNumber`) typechecks but doesn't catch typos. Direct fetches (`client(Airplane).fetchOne(...)`) are fully typed. This is the trade made when closing TS2589 — see the next section.         | Future: thread per-link-target metadata through a deferred indirection that doesn't blow the depth budget. Or move to apiName-string references with an OSDK-side resolver. |
| **Aggregate sum / avg / max / min**             | `defineOacOntology.surface.e2e.test.ts:189-208` (skipped) | The OSDK client typing accepts `"capacity:sum": "unordered"`, but FauxFoundry's aggregate handler (`packages/faux/src/handlers/createObjectSetHandlers.ts:42-107`) hardcodes `{ name: "count" }` regardless of the requested aggregator. **This is purely a faux backend limitation, not a defineOacOntology issue** — real Foundry implements full aggregations. | Tracked separately on `ksethi/faux-foundry-aggregate-support` (PR #3206); will land independently and the `.skip` on this branch unblocks once it merges to main.           |
| **`overall.test.ts` lint warnings**             | n/a                                                       | Pre-existing in maker package.                                                                                                                                                                                                                                                                                                                                    | Out of scope.                                                                                                                                                               |

## TS2589 — what it was, what fixed it, what we lost

Before B1: `flight.$link.airplane.fetchOne()` triggered TS2589 ("type
instantiation excessively deep") because Flight has 3 outgoing links and
each link target carried a full `BaseObjectDef<T>` with four mapped-type
fields (`MapProperties`, two `ComputedProps`, plus `links`). Resolving all
3 link targets simultaneously exceeded TypeScript's instantiation budget,
so tests carried `// @ts-expect-error TS2589` directives on the offending
lines. Under those directives TypeScript fell back to `any` for the link
result, so prop typing was already effectively lost — the directives just
papered over the noise.

The B1 fix: `BaseObjectDef<T>` (used as the link target reference) now
carries only the structural identity fields — `type`, `apiName`,
`primaryKeyApiName`, `primaryKeyType` — and no `__DefinitionMetadata`.
The full per-property metadata still lives on the top-level
`FinalizedObjectDef` returned to the user, so direct fetches
(`client(Airplane).fetchOne(...)`) remain fully typed.

What we lost: link-traversal results
(`flight.$link.airplane.fetchOne()`) come back as `Osdk.Instance<>` with
no per-property type info. Individual access still typechecks but doesn't
catch typos. This is the same end-state DX as the directive workaround,
but without the depth-error noise. Future work can recover precision by
threading deferred metadata through the link reference, or by switching to
apiName-string references that the OSDK resolves at the call site.

## Known design weaknesses (not bugs)

- **`defineActionV2` requires `modifiedEntities`.** The lower-level
  `defineActionV2` throws if `modifiedEntities` is missing. The high-level
  helpers (`defineCreateObjectActionV2`, etc.) set it for you, so most
  users won't hit this. Users dropping to the lower-level API need to know
  this.
- **Auto-generated action apiNames use `kebab()`** which converts
  `AirplaneCm1` → `airplane-cm1` (no separator before digit) but
  `AirplaneNoPk` → `airplane-no-pk`. The boundary rule is "lowercase →
  uppercase". Result: action apiNames are predictable but not always
  intuitive.
- **`_oac` is a reserved object/action key.** Trying to name an object
  `_oac` throws. Documented in `defineOacOntology.ts:64-69`.
- **Reserved-key check is shallow.** Only top-level object/action keys are
  checked; a link with the conflict isn't caught (links don't share the
  output namespace, so this is fine in practice).

## Decision — what should happen next

For a future minor that promotes this from "experimental demo" to
"codegen-replacement":

1. ~~**Ship modify-action e2e proof**~~ — DONE (Stage A1)
2. ~~**Add `defineInterfaceV2`**~~ — DONE (Stage C); `defineInterfaceV2`
   plus `ObjectV2Config.implements` plus `OacOntologyBundle.interfaces`
   land together; fixture exercises a `Vehicle` interface implemented by
   `Airplane`
3. ~~**Validate many-to-many converter**~~ — DONE (Stage A2); converter
   was correct as written, M:M traversal verified e2e
4. ~~**Fix TS2589** by simplifying the `links` mapped type~~ — DONE
   (Stage B1); link-target metadata stripped to structural identity, all
   `@ts-expect-error TS2589` directives removed. Tradeoff: link-traversal
   prop typing is loose; direct fetches remain fully typed.
5. **Extend FauxFoundry** with sum/avg/max/min aggregates so local-dev
   demos can exercise the full read API surface

No MAJOR blockers remain for a credible "codegen replacement" claim.
Items 4 and 5 are nice-to-have refinements; item 4 has shipped on this
branch, item 5 lands separately on `ksethi/faux-foundry-aggregate-support`.
