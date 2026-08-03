<!-- cspell:words Hackweek aliasable codepaths hackweek inlines remapper spts unaliased unrepresentable -->

# 05 — The `aliases.json` schema

This document is the normative definition of the alias file that **every** generated OSDK emits and
reads. It is written here rather than in `function-registry` so the hackweek prototype can iterate
without a Conjure roundtrip (see `01-implementation-plan.md` §2.0); the Conjure definition becomes a
ratification of this shape, not a prerequisite for it.

Three things this document has to establish, in order:

1. the shape itself,
2. that it is **backwards compatible** with the `aliases.json` that function-registry writes and
   `@osdk/functions` reads today, in both directions,
3. that it is **complete** — that everything a generated OSDK puts on the wire can be resolved from
   it.

Sections 3 and 4 do that against verified evidence, not against assumption. Section 6 lists what it
deliberately does _not_ cover.

---

## 1. The shape

`defaults` is a flat namespace of resource-kind maps. The five existing platform-resource kinds
(`models`, `egressConnections`, `datasets`, `mediasets`, `streams`) plus `custom` stay exactly as
they are. Five new kinds are added alongside them: `ontologies`, `objects`, `interfaces`, `actions`,
`queries`.

Normative form, to live at `packages/aliases/src/AliasesFile.ts`:

```ts
export interface AliasesFile {
  defaults: DefaultAliases;
  version: number;
}

export interface DefaultAliases {
  // ---- existing, unchanged ----
  custom: Record<string, string>;
  models: Record<string, ModelValue>;
  egressConnections: Record<string, EgressConnectionValue>;
  datasets: Record<string, DatasetValue>;
  mediasets: Record<string, MediasetValue>;
  streams: Record<string, StreamValue>;

  // ---- new ----
  ontologies?: Record<string, OntologyValue>;
  objects?: Record<string, ObjectTypeValue>;
  interfaces?: Record<string, InterfaceTypeValue>;
  actions?: Record<string, ActionTypeValue>;
  queries?: Record<string, QueryTypeValue>;
}

export interface OntologyValue {
  id: RidIdentifier;
  branch?: RidIdentifier | null;
}

export interface ObjectTypeValue {
  apiName: string;
  primaryKeyApiName: string;
  properties: Record<string, PropertyValue>;
  links: Record<string, LinkValue>;
  id?: RidIdentifier;
}

export interface InterfaceTypeValue {
  apiName: string;
  properties: Record<string, PropertyValue>;
  links: Record<string, LinkValue>;
  id?: RidIdentifier;
}

export interface ActionTypeValue {
  apiName: string;
  id?: RidIdentifier;
}

export interface QueryTypeValue {
  apiName: string;
  version?: string;
  id?: VersionedRidIdentifier;
}

export interface PropertyValue {
  apiName: string;
  id?: RidIdentifier;
}

export interface LinkValue {
  apiName: string;
  id?: RidIdentifier;
}

export interface RidIdentifier {
  rid: string;
}

export interface VersionedRidIdentifier {
  rid: string;
  version?: string;
}
```

### 1.1 Keys are source-environment wire API names

A map key is the alias: the name the SDK was **generated against**. A value's `apiName` is the name
to **put on the wire** in the environment the SDK is running in. In an unmodified install the two are
equal, which is why the identity fixture reads as a fixed point.

Two rules about keys that are easy to get wrong and expensive to discover later:

- Keys are the **wire** API name, never the namespace-stripped TypeScript-facing form. The generated
  SDK exposes `Todo` for a wire name of `foo.bar.Todo`; the key is `foo.bar.Todo`.
- The `ontologies` map is keyed by the **source ontology RID**, not by an ontology apiName. Ontologies
  have no wire-addressable apiName in the OSDK — `$ontologyRid` is the only thing that ever reaches a
  request — and the RID is always present and unique where an apiName may be absent. This makes the
  ontology entry exactly Design B's `StableApiNameBindings`: `{"<sourceRid>": {"id": {"rid": "<targetRid>"}}}`.

### 1.2 Why `apiName` is required and `id` is optional

The existing platform-resource values are all `{ id: { rid } }`, because those resources are
addressed by RID on the wire. Ontology entities are addressed by **apiName**. So `apiName` is the
load-bearing required field, and `id` is provenance: the generator populates it because it has it,
Marketplace's rehydration matches on it, and carrying it now means a future runtime RID→apiName hop
needs no schema change. That hop is not hypothetical — Marketplace's `ResolvedObjectTypeShape.apiName`
is optional and currently always empty, so anything that resolves shapes today has only the RID.

`id` being optional is exercised on purpose in the fixtures: objects, interfaces, actions and queries
carry it; properties and links do not.

### 1.3 The cost of flattening

Putting `objects`/`actions`/`interfaces`/`queries`/`ontologies` directly under `defaults` means
ontology entities and platform resources now share one namespace. That is a real constraint, not a
free choice: these five names are now **reserved** and function-registry can never introduce a
platform-resource kind with the same name. It is worth it — every member of `defaults` stays a
uniform `Record<string, Value>`, which is what makes the parser, the validator, and the deterministic
serializer all one code path instead of two.

### 1.4 Deterministic serialization

Writers MUST emit object keys in ascending code-unit order at every level, two-space indent, trailing
newline. This is what makes Marketplace reconciliation idempotent and makes the committed-tree diff
gate in `02-iteration-and-testing.md` §3 meaningful. Readers MUST NOT depend on key order.

---

## 2. Conjure mirror

For when this is ratified into `function-registry`'s `scope/aliases.yml`. The identifier types it
needs — `OntologyIdentifier`, `ObjectIdentifier`, `LinkIdentifier`, `InterfaceIdentifier`,
`ActionIdentifier`, `QueryIdentifier` — **already exist** in that repo's `identifiers.yml`, so this
adds value types only.

```yaml
DefaultAliases:
  fields:
    # ... existing six unchanged ...
    ontologies: map<AliasName, OntologyValue>
    objects: map<AliasName, ObjectTypeValue>
    interfaces: map<AliasName, InterfaceTypeValue>
    actions: map<AliasName, ActionTypeValue>
    queries: map<AliasName, QueryTypeValue>

OntologyValue:
  fields:
    id: identifiers.OntologyIdentifier
    branch: optional<OntologyBranchIdentifier>

ObjectTypeValue:
  fields:
    apiName: string
    primaryKeyApiName: string
    properties: map<AliasName, PropertyValue>
    links: map<AliasName, LinkValue>
    id: optional<identifiers.ObjectIdentifier>

InterfaceTypeValue:
  fields:
    apiName: string
    properties: map<AliasName, PropertyValue>
    links: map<AliasName, LinkValue>
    id: optional<identifiers.InterfaceIdentifier>

ActionTypeValue:
  fields:
    apiName: string
    id: optional<identifiers.ActionIdentifier>

QueryTypeValue:
  fields:
    apiName: string
    version: optional<string>
    id: optional<identifiers.QueryIdentifier>

PropertyValue:
  fields:
    apiName: string
    id: optional<PropertyIdentifier>

LinkValue:
  fields:
    apiName: string
    id: optional<identifiers.LinkIdentifier>

OntologyBranchIdentifier:
  fields:
    rid: string
```

Note `QueryIdentifier` already carries `{rid, version}` where `version` is a semantic version
_range_ used for resolution. The value's top-level `version` is different: it is the concrete version
string the OSDK puts in the request. They are usually equal; keep both, and keep them distinct.

---

## 3. Backwards compatibility — verified

### 3.1 New file → old reader (adding fields)

**Java / Conjure consumers: safe.** The generated `DefaultAliases.Builder` carries
`@JsonIgnoreProperties(ignoreUnknown = true)`. Every existing Java reader silently ignores the five
new members. Verified by reading the generated `DefaultAliases.java` in function-registry, not
inferred from Conjure's general behavior.

**`@osdk/functions` (`packages/functions/src/aliases/loaders.ts`): safe.** It reads only the six
members it knows about and passes `custom` through untouched. Unknown members are inert.

### 3.2 Old file → new reader (fields absent)

The five new members are **optional** in the format precisely so that a file written by today's
function-registry parses. `@osdk/aliases` must therefore treat a missing `objects`/`actions`/… as an
empty map at _parse_ time — and then fail loudly at _lookup_ time when a resolver asks for a key that
isn't there. This is the permissive-file / strict-key rule from `01-implementation-plan.md` §2.2(c),
and this is the place it earns its keep: a legacy file is a valid file, it just cannot serve an
alias-aware SDK, and the error should say that rather than dying in the parser.

### 3.3 The hard constraint that runs the other way

`loadPublishedAliases()` in `packages/functions/src/aliases/loaders.ts` calls
`Object.entries(aliasesFile.defaults.datasets)`, `.mediasets`, `.streams`, `.models`,
`.egressConnections` **with no guards**, and `Object.entries(undefined)` throws
`TypeError: Cannot convert undefined or null to object` (verified directly against node).

Therefore: **a generator-emitted `aliases.json` MUST include all six existing members, as `{}` when
empty.** An OSDK that ships a file containing only ontology entries will crash `@osdk/functions` the
moment both are present in one project — which is exactly the functions-repo scenario that
`03-end-to-end-target.md` is aiming at. Note that `custom` alone would have degraded silently
(`loadCustom` passes through), so this is not a bug that testing the happy path would find.

All three fixtures carry the six empty maps for this reason. This belongs in the emitter as a
non-negotiable, and in `@osdk/aliases`'s validator as a check on write, not just on read.

---

## 4. Completeness — does this cover everything the OSDK sends?

### 4.1 Tier 1: values baked into generated code

Enumerated exhaustively across the widest fixture (`e2e.generated.catchall`), the complete set of
keys appearing in generated runtime consts is: `apiName`, `internalDoNotUseMetadata`,
`isFixedVersion`, `osdkMetadata`, `primaryKeyApiName`, `primaryKeyType`, `type`,
`unsanitizedApiName`, `version` — plus `$ontologyRid`, `$branch`, `$osdkMetadata` in
`OntologyMetadata.ts`.

| Emitted value                                              | Environment-specific? | Resolved from                                       |
| ---------------------------------------------------------- | --------------------- | --------------------------------------------------- |
| `$ontologyRid`                                             | yes                   | `ontologies[srcRid].id.rid`                         |
| `$branch`                                                  | yes                   | `ontologies[srcRid].branch?.rid`                    |
| object `apiName`                                           | yes                   | `objects[k].apiName`                                |
| object `primaryKeyApiName`                                 | yes                   | `objects[k].primaryKeyApiName`                      |
| object `internalDoNotUseMetadata.rid`                      | yes                   | `objects[k].id.rid` — **not resolved in Tier 1**    |
| interface `apiName`                                        | yes                   | `interfaces[k].apiName`                             |
| interface `internalDoNotUseMetadata.rid`                   | yes                   | `interfaces[k].id.rid` — **not resolved in Tier 1** |
| action `unsanitizedApiName`                                | yes                   | `actions[k].apiName`                                |
| query `apiName`                                            | yes                   | `queries[k].apiName`                                |
| query `version`                                            | yes                   | `queries[k].version`                                |
| action/query `apiName` (sanitized)                         | no                    | stays literal — TS-facing identity, not a wire name |
| `primaryKeyType`, `type`, `isFixedVersion`, `osdkMetadata` | no                    | structural                                          |

Two corrections this analysis forced, both of which need to land in `01-implementation-plan.md` §1:

- **`primaryKeyApiName` was missing from the Tier 1 inventory**, and it keeps its own required field
  on `ObjectTypeValue` — but the original justification for that was wrong and is corrected here.
  The claim was that _some_ call sites read it from the generated const (`objDef`/`def`) while others
  read fetched metadata (`objMetadata`/`metadata`), so the two would diverge under aliasing. **They
  do not diverge, because every call site reads fetched metadata.** The variable naming is what
  misled the analysis; the types settle it. `createOsdkObject`'s parameter is typed
  `FetchedObjectTypeDefinition` (`ontology/OntologyProvider.ts:30`), and
  `buildObjectSetFromLinkDef.ts:87` calls `ontologyProvider.getObjectDefinition(...)` outright, as do
  `createObjectSet.ts:397`, `BulkObjectLoader.ts:180-181,239-240`, `SpecificLinkQuery.ts:221,238`,
  `reloadDataAsFullObjects.ts:58`, and `getDollarLink.ts:49,100`. Not one reads the generated const.

  Verified empirically as well as by inspection: remapping `Employee.primaryKeyApiName` leaves
  `field: "employeeId"` unchanged in the emitted request. So **`$resolvePrimaryKey` is emitted but
  never wire-observable** — only 7 of the 8 Tier 1 sites can appear in a request trace, and a
  differential test must assert the primary key at the const level instead. Keep the field: it is
  correct for user code reading `Todo.primaryKeyApiName` directly, and it becomes load-bearing under
  Tier 2, where a primary key is just a property and schema rule 4
  (`primaryKeyApiName === properties[pk].apiName`) forces the two to move together.
- **Action `apiName` must stay literal while `unsanitizedApiName` resolves.** `applyAction.ts:133,140,163,171`
  and `fetchMetadata.ts:62` all read `unsanitizedApiName ?? apiName`. `EnhancedAction` sets
  `unsanitizedApiName` unconditionally from `raw.apiName`, so the fallback never fires for generated
  SDKs — but the emitter must not start eliding it as an "optimization" when it equals `apiName`, or
  the fallback silently reaches an unresolved literal. Worth an assertion in the generator test.

Property and link names do not appear in generated _runtime_ consts at all — they are type-level only
— but they reach the wire constantly via Tier 2, which is why they are in the schema.

### 4.2 Tier 2: caller-supplied strings

`$as("Name")`, `where({prop: …})` keys, `select([…])`, `orderBy` keys, `pivotTo("link")`, `$link.name`,
aggregation clause keys, and action parameter keys are written by the _application_, in
source-environment names, and rewritten by the client's remapping layer. That layer reads the same
file, and needs exactly `objects[*].properties`, `objects[*].links`, `interfaces[*].properties`,
`interfaces[*].links` — all present.

`interfaces[*].links` is empty in all three fixtures because `TodoWireOntology` has no interface
links. The field is required-and-empty rather than absent so the shape is uniform.

---

## 5. Validation rules

`@osdk/aliases` should enforce these on read and the emitter on write. Each is a bug that has a
plausible way of happening.

1. All six legacy members present (§3.3). Fail loudly on write; on read, tolerate and warn.
2. `version` is `1`. Unknown versions fail with a message naming the version found.
3. Every `apiName` is a non-empty string. An empty `apiName` is worse than a missing entry because it
   produces a request the server answers with a confusing 404 instead of a clear client-side error.
4. `objects[k].primaryKeyApiName` must equal `objects[k].properties[p].apiName` for some `p`. This
   catches the single most likely hand-edit and remapping-tool mistake: renaming a property and
   forgetting the primary key. The remapped fixture exercises the correct case
   (`todoId` / `emailAddress`).
5. Keys are sorted on write (§1.4).
6. No duplicate target `apiName` within a map. Two source names collapsing onto one target is
   unrepresentable in the response direction.

Failure messages should name the file that was loaded, the layer it came from, and the key that was
missing — a missing-key error that says only `"unknown alias"` is nearly useless when four layers can
supply the file.

---

## 6. What this does _not_ cover

Stated explicitly so nobody assumes the file is total.

- **Struct field names.** `where({ prop: { subfield: … } })` reaches the wire with the subfield name
  in it. The schema has no nesting below `PropertyValue`. api-gateway handles struct-field suffixes
  today. This is a real gap and the most likely candidate for a `PropertyValue.fields` addition.
- **Action and query parameter names.** Server-fetched metadata supplies these. If Marketplace ever
  renames a parameter, this schema does not express it.
- **Value types** (`emailValueType`, `arrayValueType` in the fixture ontology) never appear in
  generated runtime output, so they are out of scope by construction.
- **Shared property types** appear only as interface property keys and are covered by
  `interfaces[*].properties`.
- **`foundry-sdk-generator`'s `UNSTABLE_DO_NOT_USE/ontology-metadata.json`** is a separate artifact
  with its own copy of names. `01-implementation-plan.md` §2.0 counts it among the copies to
  reconcile; it is not covered here.

---

## 7. Fixtures

Three files in `dev-docs/alias-aware-osdk/fixtures/`, all keyed to
`packages/generator/src/util/test/TodoWireOntology.ts` so they drop straight into the existing
generator tests.

| File                           | Purpose                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `aliases.todo.identity.json`   | Exact fixed point for `TodoWireOntology`. What the generator must emit, byte for byte, for that input. |
| `aliases.todo.remapped.json`   | Every name changed. The `remapped` differential mode.                                                  |
| `aliases.todo.incomplete.json` | `remapped` minus four entries. The negative test.                                                      |

**`aliases.todo.identity.json`** doubles as the generator's expected output. The strongest single
test available on day one is: generate against `TodoWireOntology`, read `aliases.json` out of
`getFiles()`, and assert byte equality with this file. That one assertion pins the key set, the value
shapes, the six-empty-maps rule, and the sorted-key serialization simultaneously.

**`aliases.todo.remapped.json`** mirrors `fooBarTodoWireOntology` from
`generateClientSdkVersionTwoPointZero.test.ts` — objects, actions, interfaces and queries all move to
`foo.bar.*` — and then goes further, because that is where the interesting coverage is:

- property renames (`body`→`text`, `complete`→`isComplete`, `array`→`tags`, `id`→`todoId`,
  `email`→`emailAddress`),
- link renames (`Assignee`→`assignedPerson`, `Todos`→`assignedTodos`),
- a primary key that moves with its property (`id`→`todoId`, `email`→`emailAddress`),
- a query version that changes (`returnsTodo` 3.2.0→3.2.1) while another does not,
- all RIDs different from source, since a real install rehydrates onto new resources.

Renaming with a namespace prefix for types but a bare name for properties and links is deliberate:
that is what real installs look like, and it catches code that assumes a uniform prefix transform.

**One blocker to note.** The `remapped` differential mode needs the native oracle to produce the same
result independently, and the oracle is the `changeNames` immer rewriter in
`generateClientSdkVersionTwoPointZero.test.ts` — which supports only `objects`, `actions`,
`interfaces`, `queries`, `spts`. It **cannot rename properties or links**. Extending `changeNames`
with `properties` and `links` support is a prerequisite for Tier-2 differential coverage, and it is
small. Track it as its own task rather than discovering it mid-week.

**`aliases.todo.incomplete.json`** omits `objects.Todo.properties.body`, empties
`objects.Todo.links`, drops `actions.deleteTodos`, and drops
`interfaces.SomeInterface.properties.SomeProperty.id`. Each omission targets a different failure:

| Omission               | Expected behavior                                                      |
| ---------------------- | ---------------------------------------------------------------------- |
| `Todo.properties.body` | `$resolveProperty("Todo", "body")` throws, naming both key parts       |
| `Todo.links.Assignee`  | `$resolveLink("Todo", "Assignee")` throws; `pivotTo` fails client-side |
| `actions.deleteTodos`  | `$resolveAction("deleteTodos")` throws at const construction           |
| `SomeProperty.id`      | **succeeds** — `id` is optional; proves optionality is real, not lazy  |

That last row matters: an incompleteness fixture where every omission fails does not distinguish
"strict about the required fields" from "strict about everything".

---

## 8. Open question worth deciding early

The `ontologies` map is keyed by source RID (§1.1) while every other map is keyed by apiName. This is
right — it is the only stable identity an ontology has in the OSDK — but it means the generator must
have the source ontology RID at emit time to write the key, and the resolver call becomes
`$resolveOntologyRid("ridHere")` rather than a zero-argument call. That is a change from the
one-argument API sketched in `01-implementation-plan.md` §3, where `$resolveOntologyRid()` and
`$resolveOntologyBranch()` take nothing. Uniformity argues for the keyed form; the alternative is a
resolver that asserts the map has exactly one entry and uses it. Both work; the keyed form composes
better if an SDK ever spans ontologies, and it costs one string in the emitted output.
