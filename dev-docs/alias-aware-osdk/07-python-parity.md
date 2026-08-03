<!-- cspell:words aimpoint branchRid coverton dataclasses elif functools hackweek jinja mediasets osdks rsplit -->

# 07 — Python OSDK format parity

An audit of the TypeScript `aliases.json` schema — as **implemented** in `packages/aliases`, not
only as designed in [05](./05-aliases-file-schema.md) — against the Python OSDK's equivalent, and
against the authoritative Conjure definition and writer in `function-registry`.

Sources read, with the exact revisions:

| Repo                | Location                           | Branch / revision                                     |
| ------------------- | ---------------------------------- | ----------------------------------------------------- |
| `osdk-ts`           | this repo                          | `coverton/hackweek-aliases`                           |
| `python-osdk`       | `~/PyCharmProjects/python-osdk`    | `coverton/alias-aware-osdks` @ `1fa450cf` (= PR 1159) |
| `function-registry` | `~/IdeaProjects/function-registry` | `coverton/remove-extracted-parent-template-code`      |

Path prefixes below are abbreviated: `runtime/` = `foundry-sdk-runtime/foundry_sdk_runtime/`,
`gen/` = `foundry-sdk-generator/foundry_sdk_generator/`, `snap/` =
`foundry-sdk-generator/resources/snapshots/foundry_osdk/`, `fr-api/` = `function-registry-api/`.

---

## 0. Correction to the premise: Python has shipped nothing

The brief describes the Python side as "already shipped". It is not.

- PR 1159 is `coverton/alias-aware-osdks`, titled **"[draft] alias aware osdk"**, opened
  2026-04-22 and **closed 2026-05-13 with `mergedAt: null`** (`gh pr view 1159 --repo foundry/python-osdk`). It was never merged.
- `origin/develop` contains **no** `runtime/aliases/` directory and no occurrence of
  `ALIASES_JSON_FILE` in any `.py` file (`git ls-tree -r --name-only origin/develop | grep -i alias` returns nothing; `git grep -l ALIASES_JSON_FILE origin/develop -- '*.py'` returns
  nothing). The entire module is new on the closed branch.
- The local checkout is on that branch with uncommitted modifications, and local `HEAD` equals
  `origin/coverton/alias-aware-osdks`, so what is on disk is what the PR contained.

This changes the stakes but not the exercise. Nothing has to be migrated, and no divergence below
is a production incident waiting to happen. What the divergences _are_ is a record of two
independent designs reading the same nominal file, where the Python one is a closed prototype and
ours is the live implementation. Where they differ, the burden is on whichever design gets
ratified into `function-registry` first — and neither has been (see §4.3).

A second premise worth correcting: neither side reads the same file as the other _today_, because
the ontology sections of `aliases.json` do not exist in the Conjure definition at all. The shared
file is an aspiration in both repos.

---

## 1. What Python does

### 1.1 Mechanism: generator-baked pairs, no emitted file

Python's approach is a pure generator change. Every place a generated SDK would have written a
literal API name, it writes `_resolve_x("<aliasKey>", "<bakedDefault>")` instead. There is no
emitted alias file and no registration step.

- Ten Jinja templates carry the calls, e.g.
  `gen/templates/package/ontology/object_sets/_object.py.jinja2:67` (`_resolve_object_type`),
  `:117` (`_resolve_link`), `gen/templates/package/ontology/query_types/_ontology_query_types.py.jinja2:122,124`
  (`_resolve_query`, `_resolve_query_version`),
  `gen/templates/package/ontology/action_types/macros_action_types.py.jinja2:51` (`_resolve_action`),
  `gen/templates/package/ontology/objects/object_module/_interface.py.jinja2:131` (`_resolve_interface`).
- **Nothing in the Python generator writes an `aliases.json`.** `grep -rn "aliases.json\|ALIASES" --include='*.py' gen/` returns no matches. There is no emitter, no serializer, and therefore no
  fixed-point test of the kind [06](./06-tier1-implementation-plan.md) Phase 6 specifies for us.
- The second argument is the compiled-in default, so the identity path and the aliased path are
  different code paths — see §3.1 H5.

### 1.2 The file shape Python's loader actually reads

`runtime/aliases/_loaders.py::_convert_aliases_file` reads `custom` and `models` from
**`defaults`** (`:55-57`), and then reads `ontology`, `objects`, `links`, `queries`, `interfaces`
and `actions` from the **document root** — siblings of `defaults`, not members of it:

```
data.get("ontology")        # _loaders.py:63
data.get("objects", {})     # :72
data.get("links", {})       # :86
data.get("queries", {})     # :93
data.get("interfaces", {})  # :103
data.get("actions", {})     # :110
```

Its own committed fixture disagrees. `foundry-sdk-runtime/tests/test-data/aliases.json:16-58`
nests `ontology`, `objects`, `links`, `queries`, `interfaces` and `actions` **under `defaults`** —
i.e. exactly where we put them. Loading that fixture through the loader it ships with therefore
yields nothing. Verified by executing it (the `aliases` submodules loaded in isolation to work
around the repo's Python 3.9 incompatibility in `runtime/__init__.py`):

```
AS-WRITTEN (fixture nests under defaults):
  ontology   = None
  objects    = {}
  links      = {}
  queries    = {}
  interfaces = {}
  actions    = {}
HOISTED TO TOP LEVEL:
  ontology   = OntologyValue(rid='ri.ontology.main.ontology.aaaa…', branch_rid='ri.ontology.main.branch.bbbb…')
  objects    = {'aircraft': ObjectValue(api_name='com.airline.AircraftV2', …), 'flight': …}
  links      = {'aircraftFlights': LinkValue(api_name='com.airline.AircraftToFlights'), …}
```

The contradiction is undetected because every positive ontology-entity test patches the loader out
rather than reading a file — `patch("foundry_sdk_runtime.aliases._object.get_resolved_aliases", return_value=resolved)` at `tests/test_osdk_aliases.py:225-231`, and the same pattern for links,
queries, interfaces, actions and ontology. The only tests that do read
`test-data/aliases.json` assert on `custom` and `models`
(`tests/test_osdk_aliases.py:158-196`), which the loader reads from the right place. The
back-compat tests (`:688-724`) all assert _fallback_, so they pass whether the loader finds the
new sections or not.

[01](./01-implementation-plan.md) §7 already flagged this as a lesson; this audit confirms it by
execution, and adds the part that matters for parity: it means **the Python side has no single
authoritative nesting.** Its code says root, its fixture says `defaults`. §3.1 H1 resolves which
one wins on the evidence.

### 1.3 Resolution order and environment variables

The env var **names match ours exactly** — `ALIASES_JSON_FILE` and `RESOURCES_JSON_FILE`
(`runtime/aliases/_environment.py:7-8`, versus `packages/aliases/src/nodeEnvironmentLayers.ts:23-24`).
That is the cheapest possible bug, and it is not present.

Everything about how they are _combined_ differs. Python has two mutually exclusive modes and no
layering:

```python
if RESOURCES_JSON_FILE_ENV_VAR in os.environ:
    return AliasEnvironment.LIVE_PREVIEW
elif ALIASES_JSON_FILE_ENV_VAR in os.environ:
    return AliasEnvironment.PUBLISHED
```

`runtime/aliases/_environment.py:26-30`. `RESOURCES_JSON_FILE` wins, asserted deliberately at
`tests/test_osdk_aliases.py:118-122` ("When both env vars are set, LIVE_PREVIEW takes
precedence"). `get_resolved_aliases` then loads **one** file and one only
(`runtime/aliases/_loaders.py:217-227`); there is no merge, no packaged layer, and no programmatic
override anywhere in the module.

And in `LIVE_PREVIEW` mode, `_convert_resources_file` returns `ResolvedAliases(custom=…, models=…)` and nothing else (`runtime/aliases/_loaders.py:140-146`) — it ignores the `objects`,
`links`, `interfaces`, `actions` and `queries` arrays that are sitting right there in its own
`tests/test-data/resources.json:4-32`.

Combined, those two facts produce the sharpest behavioral divergence in this audit, and it is the
one the coordinator asked to have flagged prominently: **setting `RESOURCES_JSON_FILE` in a Python
process silently disables every ontology alias, including any supplied by `ALIASES_JSON_FILE`.**
Not an error, not a warning — the resolvers fall through to their baked-in defaults and the SDK
sends source-environment names. See §3.1 H6.

Python's env layer is **automatic**: `get_resolved_aliases()` calls `detect_environment()`, which
reads `os.environ` directly, on every resolver call. No import ceremony. Ours is not — see §3.2 C6.

### 1.4 Missing-key behavior: permissive, with two philosophies in one module

All six ontology resolvers take `(alias, default)` and return the default when the key is absent,
when the file is absent, or when the file fails to parse:

```python
def object_type(alias: str, default_api_name: str) -> str:
    resolved = get_resolved_aliases()
    if resolved is None:
        return default_api_name
    obj = resolved.objects.get(alias)
    if obj is not None:
        return obj.api_name
    return default_api_name
```

`runtime/aliases/_object.py:4-12`; identically shaped at `_object.py:15-25` (`object_property`),
`_interface.py:4-11`, `_action.py:4-12`, `_query.py:6-14` and `:17-25`, `_link.py:4-12`,
`_ontology.py:6-13` and `:16-23`.

The two _legacy_ accessors are strict in the opposite direction — they raise `KeyError` with an
"Available aliases:" hint when the file loaded but the key is missing (`runtime/aliases/_model.py:25-27`,
`_custom.py:25-27`). So the module ships both philosophies with nothing distinguishing them, which
[01](./01-implementation-plan.md) §3.3 already calls out; our resolvers are uniformly strict and
our error messages name the layers consulted (`packages/aliases/src/resolve.ts:54-61`).

Three further layers of permissiveness in the Python loader, each of which converts a
misconfiguration into a silent wrong-name request:

- A missing or unreadable file returns `None` with a `logger.debug` (`_loaders.py:168-175`).
- Any of `JSONDecodeError`, `OSError`, `KeyError`, `TypeError` during parse is caught, logged at
  `warning`, and converted to `None` (`_loaders.py:181-183`). There is no structural validation
  at all.
- Every field read is `.get("apiName", "")` (`_loaders.py:77,81,88,96,105,112`), so a malformed
  entry yields an **empty** target apiName rather than an error. That is precisely the state
  [05](./05-aliases-file-schema.md) §5 rule 3 forbids, and which
  `packages/aliases/src/AliasesFile.ts:148-158` rejects with
  `"apiName must be a non-empty string"`.
- The top-level `version` field is read nowhere in `_loaders.py`. There is no schema-version
  gate; ours requires exactly `1` (`packages/aliases/src/AliasesFile.ts:416-423`).

### 1.5 Coverage tier: nominally Tier 2, effectively less than our Tier 1

Python's runtime defines property resolution (`object_property`) and link resolution (`link`), so
on paper it reaches Tier 2. In practice:

- **`object_property` has zero call sites** outside its own module and unit tests. `grep -rn object_property --include='*.py' --include='*.jinja2'` across the repo returns only unrelated
  local variables in `gen/input/validator.py`, `gen/output/write_package.py` and
  `gen/generation/interfaces.py`. No template calls it. Property names are **not** remapped by
  generated Python code.
- **`ontology_rid` and `ontology_branch_rid` also have zero generator call sites.** The templates
  interpolate the RID as a literal (`gen/templates/package/_foundry_client.py.jinja2:35`,
  `_writeable_client.py.jinja2:37`), so the ontology RID is not remapped either.
- **`link` _is_ called** (`gen/templates/package/ontology/object_sets/_object.py.jinja2:117`,
  `gen/templates/package/ontology/edits/links/object_module/_assigned_object.py.jinja2:99,133`).
  This is genuine Tier 2 coverage we lack — but keyed globally, which §3.1 H4 shows is unsound.
- **No primary key resolution.** `grep -rn primary_key --include='*.jinja2' gen/templates/ | grep -i resolve` returns nothing, and `ObjectValue` has no `primary_key_api_name`
  (`runtime/aliases/_types.py:24-29`).

Net: the Python prototype remaps object types, interfaces, actions, query apiName + version, and
links. It does not remap properties, primary keys, or the ontology RID. Our Tier 1 remaps object
types, interfaces, actions, query apiName + version, primary keys, _and_ the ontology RID/branch,
and ships `$resolveProperty`/`$resolveLink` uncalled
(`packages/aliases/src/resolve.ts:140-150`). The two prototypes are close in coverage and disjoint
in exactly two places each.

The `object_type`-renamed-but-`object_property`-not combination is worth stating plainly because
it is the failure mode that survives into any generated request: an aliased object type with a
renamed property produces a request naming **the new type with the old property names**.

### 1.6 Serialization

Python never writes. There is no serializer in `runtime/aliases/`, no `json.dump` anywhere in the
module, and no emitter in the generator (§1.1). Key ordering is therefore not a Python concern,
and the two implementations cannot disagree about it.

The authoritative writer is Java — see §4.2.

---

## 2. Field-by-field comparison

Keyed against the implementation, `packages/aliases/src/AliasesFile.ts` (which matches
[05](./05-aliases-file-schema.md) §1 exactly, and whose three fixtures under
`packages/aliases/src/__fixtures__/` are byte-identical to
[`dev-docs/alias-aware-osdk/fixtures/`](./fixtures/) — verified by `diff`).

### 2.1 Container and nesting

| Aspect                      | TypeScript (`AliasesFile.ts`)        | Python (`_loaders.py`)                            | Same? |
| --------------------------- | ------------------------------------ | ------------------------------------------------- | ----- |
| Root fields                 | `defaults`, `version` (`:17-20`)     | `defaults`, plus 6 root siblings (`:63-110`)      | no    |
| `version` semantics         | must be `1`, else throw (`:416-423`) | never read                                        | no    |
| `custom`, `models` location | `defaults.*` (`:441,454`)            | `defaults.*` (`:56-57`)                           | yes   |
| ontology-entity location    | `defaults.*` (`:462-472`)            | root (`:63-110`); its own fixture says `defaults` | no    |
| Legacy maps read            | all six (`:441-461`)                 | `custom`, `models` only (`:56-57`)                | no    |
| Missing legacy map          | warn, normalize to `{}` (`:426-436`) | irrelevant — four are never read                  | n/a   |

### 2.2 Map names and keys

| Kind       | TS map name                                          | Python map name           | TS key                                   | Python key                                                           |
| ---------- | ---------------------------------------------------- | ------------------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| ontology   | `ontologies`                                         | `ontology`                | source ontology RID (`resolve.ts:81-83`) | none — a single object, not a map (`_types.py:73`)                   |
| objects    | `objects`                                            | `objects`                 | full wire apiName                        | `strip_namespace(apiName)` (`gen/generation/objects.py:113`)         |
| interfaces | `interfaces`                                         | `interfaces`              | full wire apiName                        | `strip_namespace(apiName)` (`gen/generation/interfaces.py:100`)      |
| actions    | `actions`                                            | `actions`                 | full wire apiName                        | `strip_namespace(apiName)` (`gen/generation/actions.py:85,90`)       |
| queries    | `queries`                                            | `queries`                 | full wire apiName                        | `strip_namespace(apiName)` (`gen/generation/queries.py:80`)          |
| properties | `objects[k].properties` / `interfaces[k].properties` | `objects[k].properties`   | property apiName                         | property apiName                                                     |
| links      | `objects[k].links` / `interfaces[k].links`           | root `links` — **global** | link apiName scoped to owner             | `strip_namespace(apiName)`, unscoped (`gen/generation/links.py:177`) |

`gen/generation/types.py:24` documents the intent in a comment: `alias_key: str  # camelCase key for alias resolution (namespace stripped)`. `strip_namespace` is
`api_name.rsplit(".", 1)[-1]` (`gen/generation/identifiers.py:370-382`).

The generated snapshots make the divergence concrete. From
`snap/ontology/objects/flight/_flight.py:146`:

```python
object_type=_resolve_object_type("Flight", "com.palantir.testing.ontology.Flight"),
```

The key is `Flight`; our key for the same entity would be
`com.palantir.testing.ontology.Flight`. Same effect at
`snap/ontology/object_sets/_place.py` (`_resolve_interface("Place", "com.palantir.testing.ontology.Place")`) and `snap/ontology/object_sets/_aircraft.py:96`
(`_resolve_link("assignedFlight", "assignedFlight")`).

### 2.3 Value shapes

| TS type              | TS fields                                                               | Python counterpart | Python fields                                                                                                  | Delta                                         |
| -------------------- | ----------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `OntologyValue`      | `id: {rid}` req, `branch?: {rid} \| null` (`:39-42`)                    | `OntologyValue`    | `rid: str`, `branch_rid: Optional[str]` from wire `rid` / `branchRid` (`_types.py:54-59`, `_loaders.py:66-69`) | flat strings vs. nested identifiers           |
| `ObjectTypeValue`    | `apiName`, `primaryKeyApiName`, `properties`, `links`, `id?` (`:44-50`) | `ObjectValue`      | `api_name`, `properties` (`_types.py:24-29`)                                                                   | no `primaryKeyApiName`, no `links`, no `id`   |
| `InterfaceTypeValue` | `apiName`, `properties`, `links`, `id?` (`:52-57`)                      | `InterfaceValue`   | `api_name` only (`_types.py:47-51`)                                                                            | no `properties`, no `links`, no `id`          |
| `ActionTypeValue`    | `apiName`, `id?` (`:59-62`)                                             | `ActionValue`      | `api_name` (`_types.py:62-66`)                                                                                 | no `id`                                       |
| `QueryTypeValue`     | `apiName`, `version?`, `id?: {rid, version?}` (`:64-68`)                | `QueryValue`       | `api_name`, `version: Optional[str]` (`_types.py:39-44`)                                                       | no `id`; `version` explicit `null` in fixture |
| `PropertyValue`      | `apiName`, `id?` (`:70-73`)                                             | `PropertyValue`    | `api_name` (`_types.py:17-21`)                                                                                 | no `id`                                       |
| `LinkValue`          | `apiName`, `id?` (`:75-78`)                                             | `LinkValue`        | `api_name` (`_types.py:32-36`)                                                                                 | no `id`; global rather than owner-scoped      |
| `ModelValue`         | `id: {rid}` (`:95-97`)                                                  | `Model`            | `rid` from `id.rid` (`_loaders.py:60`)                                                                         | **same wire shape**                           |

Python ignores every `id` it encounters rather than rejecting it — the parse is field-by-field
`.get()`, so unknown members are inert. Our `id` is forward-compatible with Python's reader.

### 2.4 Runtime behavior

| Aspect                         | TypeScript                                                                                   | Python                                                          |
| ------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Layers                         | 4: override → `ALIASES_JSON_FILE` → `RESOURCES_JSON_FILE` → packaged (`registry.ts:130-148`) | 1: whichever env var wins (`_loaders.py:217-227`)               |
| Both env vars set              | both layers consulted, `ALIASES_JSON_FILE` first (`registry.ts:132-137`)                     | `RESOURCES_JSON_FILE` wins outright (`_environment.py:26-30`)   |
| `RESOURCES_JSON_FILE` contents | detected as live-preview shape → **empty layer** (`nodeEnvironmentLayers.ts:69-74,86-90`)    | parsed for `custom` + `models` only (`_loaders.py:140-146`)     |
| Env layer activation           | requires `import "@osdk/aliases/node"` (`public/node.ts:24`)                                 | automatic, `os.environ` read per call (`_environment.py:26`)    |
| Programmatic override          | `setAliasOverride` (`registry.ts:93-96`)                                                     | none                                                            |
| Packaged defaults              | `registerPackagedAliases`, conflict-checked (`registry.ts:69-84,176-192`)                    | second argument baked per call site                             |
| Resolver signature             | `$resolveObjectType(alias)` (`resolve.ts:85-87`)                                             | `object_type(alias, default)` (`_object.py:4`)                  |
| Missing key                    | throws, names map + key + every layer (`resolve.ts:41-61`)                                   | returns the baked default                                       |
| Missing file                   | throws (`nodeEnvironmentLayers.ts:54-58`)                                                    | `logger.debug`, returns `None` (`_loaders.py:173-175`)          |
| Malformed file                 | throws with JSON path (`AliasesFile.ts:126-130`)                                             | `logger.warning`, returns `None` (`_loaders.py:181-183`)        |
| Empty `apiName`                | rejected (`AliasesFile.ts:152-156`)                                                          | becomes `""` (`_loaders.py:77,81,88,96,105,112`)                |
| Duplicate target `apiName`     | rejected (`AliasesFile.ts:251-268`)                                                          | last writer wins                                                |
| PK ∈ properties check          | enforced (`AliasesFile.ts:313-327`)                                                          | n/a — no PK field                                               |
| Caching                        | memoized layer chain, cleared by mutators (`registry.ts:58,83,95,108`)                       | `@cache` on published, uncached preview (`_loaders.py:162,186`) |
| Writes the file                | yes — `serializeAliasesFile` (`AliasesFile.ts:500-518`)                                      | no                                                              |

---

## 3. Divergences, ranked

### 3.1 Hard incompatibilities — one file cannot serve both readers

**H1. Nesting: `defaults.objects` versus root `objects`.** Ours is under `defaults`
(`AliasesFile.ts:462-472`); Python's loader reads the root (`_loaders.py:63-110`). This is the
single change that decides whether one file works for both.

The evidence settles it in our favor, and it is not merely that we got there first:

- Python's **own fixture** uses `defaults` (`tests/test-data/aliases.json:16-58`), so the author's
  intent and our schema agree; only the loader disagrees, and no test covers it (§1.2).
- The Conjure `AliasesFile` has exactly two fields, `defaults` and `version`
  (`fr-api/src/main/conjure/scope/aliases.yml:8-15`). Root-level siblings are not expressible in
  the ratified type.
- Worse than inexpressible: the generated `AliasesFile.Builder` carries
  `@JsonIgnoreProperties(ignoreUnknown = true)` (generated
  `AliasesFile.java:109-110`), so a file in Python's root-level shape is **silently accepted and
  silently emptied** by every Java reader. No error to debug.

**Fix:** Python moves its six `data.get(...)` calls down one level to read from `defaults`. Six
lines, no schema change, and it makes its own fixture start working. We change nothing.

**H2. Alias keys are namespace-stripped in Python.** `strip_namespace(apiName)`
(`gen/generation/identifiers.py:370-382`), applied at every key site
(`gen/generation/objects.py:113,128`, `object_sets.py:42,57`, `interfaces.py:100,116`,
`interface_object_sets.py:44,59`, `actions.py:85,90`, `queries.py:80`, `links.py:177,186,189`).
Ours are full wire names ([05](./05-aliases-file-schema.md) §1.1). Proof in one line, from
`snap/ontology/objects/flight/_flight.py:146`: key `Flight`, wire name
`com.palantir.testing.ontology.Flight`.

Two independent problems. The keys simply do not match, so no shared file resolves in both. And
stripping is lossy: `com.a.Flight` and `com.b.Flight` both become `Flight`, last writer wins,
silently — the case our `assertNoDuplicateApiNames` (`AliasesFile.ts:251-268`) rejects on the
value side and which unique full-name keys make impossible on the key side.

Already recorded as [01](./01-implementation-plan.md) §2.2(a); confirmed here against the
snapshots.

**H3. `ontology` is a singular object in Python, `ontologies` is a map in ours.** Python:
`data.get("ontology")` → `OntologyValue(rid=…, branch_rid=…)`, one per file, `Optional`
(`_loaders.py:63-69`, `_types.py:54-59,73`). Ours: `Record<sourceRid, {id: {rid}, branch?: {rid} | null}>` (`AliasesFile.ts:32,39-42`), resolved by source RID (`resolve.ts:81-83`).

Three separate mismatches stacked in one field — the plural vs. singular container, the key (we
have one, Python has none), and the value shape (`rid`/`branchRid` bare strings vs.
`id: {rid}`/`branch: {rid}`). Nothing about this field round-trips.

Our form is the one that composes if an SDK ever spans ontologies, and `branch: {rid}` matches how
every other identifier in the file is shaped. But note this is exactly the open question
[05](./05-aliases-file-schema.md) §8 flags, and Python's singular form is the "assert the map has
one entry" alternative made concrete. If that open question is ever reopened, Python's shape is the
counter-proposal, and the argument against it is that the Conjure `OntologyIdentifier` is already
`{rid: OntologyRid}` (`fr-api/src/main/conjure/identifiers.yml:49-51`) — so `id: {rid}` is the
shape the ratified identifier types already use, and `rid: str` would be the odd one out.

**H4. Links are a flat global map in Python.** Root-level `links: {alias: {apiName}}`
(`_loaders.py:86-90`), keyed by stripped link name only
(`gen/generation/links.py:177`), so `_resolve_link("assignedFlight", …)` is not scoped to an
object type at all. Ours nest under the owning type (`AliasesFile.ts:48,55`), and
`$resolveLink(typeAlias, linkAlias)` takes the pair (`resolve.ts:148-167`).

Link API names are directional and unique only per object-type pair, which api-gateway learned the
hard way — quoted in [01](./01-implementation-plan.md) §2.2(b) from
`OntologyMarketplaceMapperImplV2.java:97-101`. Python's own snapshots show the collision surface:
`_resolve_link("target", "target")` and `_resolve_link("targets", "targets")` alongside
`_resolve_link("aimpoint", "aimpoint")` in the target ontology, all in one global namespace.

Keep ours. This is the one place where Python has Tier 2 coverage we lack (§3.3 A2) _and_ the
data model under that coverage is wrong, so adopting its shape to gain the coverage would be a bad
trade.

**H5. Strict versus permissive on a missing key — and the file is the thing that differs.**
Ours throws with no fallback (`resolve.ts:41-61`, and there is no second argument to fall back
to). Python returns a compiled-in default (`_object.py:4-12` et al).

The brief asks this to be said loudly, so: **the same incomplete `aliases.json` yields a working
Python SDK and a crashing TypeScript SDK.** Point both at
`packages/aliases/src/__fixtures__/incomplete.json` and Python resolves every omitted key to its
baked-in source name and issues requests, while we throw at
`$resolveAction("deleteTodos")` during const construction.

Both behaviors are defensible and ours is deliberate — an unreachable-key error at import beats a
400 from a request naming a stale entity, and with no compiled-in default there is nothing to
silently fall back _to_, which is what makes the file an auditable inventory
([06](./06-tier1-implementation-plan.md), "Always on"). But the asymmetry has a consequence worth
naming precisely: **a file that Marketplace writes incorrectly is loud in TypeScript and silent in
Python.** Whichever way this is resolved, it must be resolved the same way in both, or the
TypeScript SDK becomes the de facto validator for a file format Python treats as advisory, and
Python users get wrong-name requests that nobody notices. Our failure mode is better; the
divergence itself is the liability.

Note also that Python is _internally_ inconsistent here: `model()` and `custom()` raise `KeyError`
for a missing key when the file did load (`_model.py:25-27`, `_custom.py:25-27`), so the module
already contains both philosophies with nothing explaining the split.

**H6. `RESOURCES_JSON_FILE` precedence is inverted, and in Python it is a silent kill switch.**
Three implementations, three behaviors:

| Implementation                                   | Both env vars set                                              |
| ------------------------------------------------ | -------------------------------------------------------------- |
| `@osdk/functions` today (`environment.ts:26-31`) | **throws** "Ambiguous alias configuration"                     |
| `@osdk/aliases` (`registry.ts:132-137`)          | both consulted, `ALIASES_JSON_FILE` higher precedence          |
| Python (`_environment.py:26-30`)                 | `RESOURCES_JSON_FILE` wins; `ALIASES_JSON_FILE` is **ignored** |

Ours and Python's precedence orders are exact opposites. On its own that would be H-grade but
narrow. What makes it the sharpest divergence here is what Python's winning branch then does:
`_convert_resources_file` returns `custom` and `models` and drops everything else
(`_loaders.py:140-146`), discarding the `objects`/`links`/`interfaces`/`actions`/`queries` arrays
that its own `tests/test-data/resources.json:4-32` contains.

So in Python, setting `RESOURCES_JSON_FILE` — which a live-preview environment does as a matter of
course — **silently turns off every ontology alias in the process**, including ones a correctly
written `ALIASES_JSON_FILE` was supplying. The SDK then sends source-environment names with no
diagnostic.

Our implementation reached the same underlying conclusion by a different route and handled it
explicitly. `RESOURCES_JSON_FILE` points at function-registry's live-preview `ResourcesFile`
(`{resources, egress}`), which has no way to express ontology entity aliases, so
`isLivePreviewResourcesFile` detects that shape and contributes an **empty layer** rather than
hard-failing a process that legitimately has one
(`nodeEnvironmentLayers.ts:69-74,86-90`). Crucially, the layer below it — `ALIASES_JSON_FILE`, or
the packaged defaults — still shows through, because our layers merge rather than switch. Same
recognition that live-preview cannot carry ontology aliases; opposite consequence for whatever
else is configured.

**Recommendation:** keep our layered order and our empty-layer treatment, and treat Python's
`elif` as a bug to fix rather than a convention to match. If parity requires converging, converge
on ours: it is the only one of the three that lets a live-preview environment also carry ontology
aliases.

**H7. `primaryKeyApiName` does not exist in Python.** `ObjectValue` is `{api_name, properties}`
(`_types.py:24-29`); ours requires `primaryKeyApiName` (`AliasesFile.ts:46`) and validates that it
matches some property's target name (`AliasesFile.ts:313-327`).

A Python-authored file is therefore rejected by our parser, and an entry we write carries a field
Python ignores. The asymmetry is benign in the Python direction and fatal in ours.

The field earns its place — [05](./05-aliases-file-schema.md) §4.1 documents that
`primaryKeyApiName` reaches the wire both as a `where` field and as a response key, and that some
call sites read it from the generated const while others read it from fetched metadata, so the two
diverge the moment aliasing is real. Python has no equivalent analysis and no equivalent field,
which is consistent with it also not remapping properties (§1.5). **Keep it and require Python to
add it**, rather than dropping it for parity; dropping it reintroduces the divergence
[05](./05-aliases-file-schema.md) §4.1 was written to close.

### 3.2 Cosmetic differences — fine as they are

**C1. `snake_case` in Python's in-memory dataclasses.** `api_name`, `branch_rid`
(`_types.py:21,59`). The _wire_ keys it reads are still camelCase — `apiName`
(`_loaders.py:77`), `branchRid` (`_loaders.py:68`). Language-idiomatic and invisible in the file.

**C2. Resolver naming.** `object_type` / `interface` / `action` / `query` / `query_version` /
`link` / `object_property` / `ontology_rid` (`runtime/aliases/__init__.py:27-52`) versus our
`$resolveObjectType` etc. (`packages/aliases/src/index.ts:41-52`). No file-format consequence.

**C3. Python's value dataclasses are non-frozen; `ResolvedAliases` is `frozen=True`**
(`_types.py:69`). Internal.

**C4. `version: null` written explicitly.** `tests/test-data/aliases.json:48` emits
`"version": null` for a query with no version; `QueryValue.version` is `Optional[str]`
(`_types.py:44`). Our `QueryTypeValue.version` is `version?: string`
(`AliasesFile.ts:66`) and `asOptionalString` accepts only `undefined` or a string
(`AliasesFile.ts:160-166`), so an explicit `null` throws.

Filed cosmetic rather than hard because it is a fixture-authoring habit, not a schema claim, and
because our emitter never writes it — `sortDeep` drops `undefined`
(`AliasesFile.ts:484-486`) and `$resolveQueryVersion` requires the field to be present anyway
(`resolve.ts:117-127`). Worth one line of tolerance in the parser if a hand-written file is ever
in scope, since `JSON.parse` gives `null` and the type says `string | undefined`. Note the
precedent runs the other way for `OntologyValue.branch`, where `null` **is** meaningful and
round-trips deliberately (`AliasesFile.ts:283-289`), so tolerating `null` on
`version` would not be inconsistent.

**C5. Python ignores unknown fields and the `version` gate.** It reads field by field with
`.get()`, so our `id` members and `primaryKeyApiName` pass through harmlessly, and an unsupported
`version` is not detected. Our strictness is the better default and costs Python nothing.

**C6. Our env layer needs an explicit import; Python's is automatic.** `import "@osdk/aliases/node"` (or `node --import`) is what installs the two env layers
(`public/node.ts:20-24`); the default entrypoint never does, so `node:fs` stays out of browser
bundles (`nodeEnvironmentLayers.ts:26-31`, and the `exports` map in `packages/aliases/package.json`
routes `"browser"` away from it). Python reads `os.environ` unconditionally on every resolver call
(`_environment.py:26`, `_loaders.py:217`).

Cosmetic in the sense that it changes no byte of the file and is forced by a real constraint
Python does not have (there is no browser Python OSDK). But it is a genuine operator-facing
asymmetry: **setting `ALIASES_JSON_FILE` alone is sufficient in Python and insufficient in
TypeScript.** That belongs in whatever documentation Marketplace reads, and it is the kind of thing
that presents as "the env var doesn't work". Worth considering whether generated SDKs' Node builds
should import the `node` entrypoint themselves so the env var is load-bearing without ceremony —
out of scope here, but this audit is where the asymmetry became visible.

### 3.3 Coverage each side has and the other does not

**A1. Python defines property remapping; nobody calls it.** `object_property`
(`_object.py:15-25`) has zero call sites outside its own module and tests (§1.5). We ship
`$resolveProperty` in the same never-called state (`resolve.ts:140-142`), but with the difference
that our emitter already writes the `properties` data
(`AliasesFile.ts:47,54`), so Tier 2 is a consumer-side change only. Python writes no file at all,
so its Tier 2 has no data source to consume.

**A2. Python remaps links in generated code; we do not.** Real coverage we lack
(`gen/templates/package/ontology/object_sets/_object.py.jinja2:117`,
`gen/templates/package/ontology/edits/links/object_module/_assigned_object.py.jinja2:99,133`),
and the one place the Python prototype is genuinely ahead of our Tier 1. Undermined by H4: the
global key means the remapping is unsound wherever two object types share a link name.

**A3. Python does not remap the ontology RID or branch; we do.** `ontology_rid` /
`ontology_branch_rid` exist and are tested but have zero generator call sites (§1.5); the
templates interpolate the RID literally
(`gen/templates/package/_foundry_client.py.jinja2:35`). We resolve both eagerly at module init
([06](./06-tier1-implementation-plan.md) Phase 3).

**A4. Python does not remap primary keys; we do.** See H7.

**A5. Python reads two of the six legacy maps; we read all six.** `_convert_aliases_file` handles
`custom` and `models` only (`_loaders.py:56-57`) — no `egressConnections`, `datasets`,
`mediasets`, `streams`. Consequence for the schema: **the all-six-must-be-present rule
([05](./05-aliases-file-schema.md) §3.3) is a TypeScript-only constraint.** It exists because
`loadPublishedAliases()` in `packages/functions/src/aliases/loaders.ts:60-67` calls
`Object.entries()` on all six unguarded. Python would not notice their absence. Our emitter must
still enforce it (`AliasesFile.ts:500-518` does), but the _reason_ is one-sided and the doc should
not imply Python shares the requirement.

**A6. Python writes nothing.** No emitter, no serializer, no deterministic key order, no
identity-fixture round trip. Ours emits and pins byte-for-byte
([06](./06-tier1-implementation-plan.md) Phase 6). This is the largest structural difference
between the two prototypes and the reason Python could get away with `(alias, default)`: with no
emitted file there is no artifact whose completeness could be asserted, so a fallback was the only
option.

**A7. Python has no registry.** No programmatic override, no packaged layer, no cross-SDK conflict
detection. Two Python SDKs in one process each carry their own baked defaults and cannot conflict,
because there is nothing shared to conflict in. Our `registerPackagedAliases` conflict check
(`registry.ts:176-192`) has no Python counterpart and needs none.

---

## 4. function-registry: verifying the claims in §3 of the schema doc

### 4.1 `@JsonIgnoreProperties(ignoreUnknown = true)` — confirmed, with a nuance worth keeping

[05](./05-aliases-file-schema.md) §3.1 claims the generated `DefaultAliases.Builder` carries
`@JsonIgnoreProperties(ignoreUnknown = true)`, verified by reading the generated Java. Re-verified:

- `DefaultAliases` is `@JsonDeserialize(builder = DefaultAliases.Builder.class)` (generated
  `DefaultAliases.java:28`) and the `Builder` carries `@JsonIgnoreProperties(ignoreUnknown = true)`
  (`:170-171`).
- `AliasesFile.Builder` carries it too (generated `AliasesFile.java:109-110`) — which is what makes
  H1's silent-emptying failure mode possible.

The nuance the original claim does not mention, and should: the mapper used to write and read these
files is `ObjectMappers.newServerJsonMapper()`, which **enables**
`DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES` (conjure-java-jackson-serialization 8.25.0,
`ObjectMappers.java:98-100`). The per-class annotation takes precedence over the global feature, so
the claim holds — but it holds _because of_ the annotation overriding a strict mapper, not because
the stack is lenient by default. If the annotation ever stopped being generated, adding fields
would become a hard break rather than a soft one.

Generated files cited here live under
`fr-api/function-registry-api-objects/build/generated/sources/conjure-objects/java/main/com/palantir/functions/aliases/api/`;
the source of record is `fr-api/src/main/conjure/scope/aliases.yml`.

### 4.2 The real writer, and where §1.4 diverges from it

`function-registry/src/main/java/com/palantir/functions/marketplace/blocks/installation/resolver/AliasesLayerResolver.java`
is the authoritative writer. It writes `app/var/data/aliases.json` (`:33`) as an OCI layer, with
`version` 1 (`:35`).

**Sorted keys: parity confirmed.** `ORDERED_MAPPER` enables `SORT_PROPERTIES_ALPHABETICALLY` and
`ORDER_MAP_ENTRIES_BY_KEYS` (`:37-42`), for the reason our §1.4 gives, spelled out in a comment on
`:36-37`: "Marketplace reconciliation should be idempotent, so we need to use a deterministic
serializer to prevent two identical installations from creating different images." Our
`sortDeep` (`AliasesFile.ts:477-492`) matches.

**Indentation: divergence.** `serializeAliasesFile` writes two-space-indented JSON with a trailing
newline (`AliasesFile.ts:518`), as §1.4 mandates. Java calls `writeValueAsBytes` with no pretty
printer (`:109-115`), producing compact single-line JSON with no trailing newline — confirmed by
its own test asserting `json.contains("\"version\":1")`, no space after the colon
(`AliasesLayerResolverTest.java:109`).

Both readers tolerate either, so this is not a correctness problem. It does mean **our
byte-equality gates must never be pointed at a Marketplace-written file** — only at
generator-emitted output. Worth stating in §1.4, which currently reads as though the two-space rule
binds all writers; it binds ours, and the Java writer already does not follow it.

**All six legacy maps present: confirmed, by construction.** `constructAliasesFile` populates only
`custom`, `models` and `egressConnections` (`:81-89`), leaving `datasets`, `mediasets` and
`streams` at their Conjure builder defaults — `new LinkedHashMap<>()` (generated
`DefaultAliases.java:174-184`). The getters carry `@JsonProperty` with no
`@JsonInclude` (`:61-88`), and `ObjectMappers` sets no serialization inclusion anywhere
(`grep -n "SerializationInclusion\|Include\." ObjectMappers.java` → no matches), so Jackson's
default `Include.ALWAYS` applies and the three unpopulated maps serialize as `{}`.

So today's writer does emit all six, three of them empty — which is exactly what
`packages/functions/src/aliases/loaders.ts:60-67` needs, since it calls `Object.entries()` on each
without a guard. The dependency is real and currently satisfied. Filed as verified-but-fragile:
nothing in `function-registry` asserts it, and one `@JsonInclude(NON_EMPTY)` would break
`@osdk/functions` at runtime.

### 4.3 Neither format is ratified

`ResourceAliases` — the input side, on the function spec — carries platform resources only, and
says so in its own docs (`fr-api/src/main/conjure/scope/scope.yml:9-28`, docs at `:14-15`):

> Only Platform SDK resources (not Ontology SDK resources) have aliases for now, but more types of
> aliases can be added here in the future.

And `DefaultAliases` in Conjure has exactly the six members we treat as legacy — `custom`,
`models`, `egressConnections`, `datasets`, `mediasets`, `streams`
(`fr-api/src/main/conjure/scope/aliases.yml:17-27`). None of `ontologies`, `objects`,
`interfaces`, `actions`, `queries` exists there in either our shape or Python's.

Two consequences. First, the flattening reservation in
[05](./05-aliases-file-schema.md) §1.3 is still free to take — no platform-resource kind has
claimed those five names. Second, and more useful: **there is no incumbent to be
backwards-compatible with on the ontology side**, so the H1–H7 divergences are a design
disagreement between two prototypes, not a migration. Settling them costs renames now.

The identifier types [05](./05-aliases-file-schema.md) §2 says it needs do all exist —
`OntologyIdentifier`, `ObjectIdentifier`, `LinkIdentifier`, `InterfaceIdentifier`,
`ActionIdentifier`, `QueryIdentifier` at `fr-api/src/main/conjure/identifiers.yml:49-72`, with
`QueryIdentifier` carrying `{rid, version}` as §2 states (`:69-72`). That claim is confirmed. Note
there is no `PropertyIdentifier` in that file; §2's mirror references one unqualified while every
other identifier is `identifiers.*`-qualified, which reads like it was already known to be
missing, but it is worth making explicit before the Conjure roundtrip.

---

## 5. What I could not verify

- **Whether PR 1159 was closed on purpose or superseded.** `mergedAt` is null and the title says
  `[draft]`, but the PR body, review comments and any successor were not read — only the git
  history and the GitHub metadata. If a follow-up PR exists with a different schema, this audit
  does not cover it.
- **Whether the local uncommitted changes in `python-osdk` alter anything audited here.** `git status` shows 20 modified files, all under `foundry-sdk-generator/` (templates, snapshots,
  tests). Local `HEAD` matches `origin/coverton/alias-aware-osdks`, and I read the working-tree
  contents, so the citations describe what is on disk. Nothing under `runtime/aliases/` is
  modified.
- **Who sets `ALIASES_JSON_FILE` in a deployed function.** `grep` for it across
  `function-registry`, `functions-typescript-runtime`, `functions-python-runtime` and
  `function-execution` found no producer, and no reference to the
  `app/var/data/aliases.json` path outside `AliasesLayerResolver`. The name parity between our
  implementation and Python's is verified from both readers, but the _authoritative_ definition of
  the variable was not located, so I cannot confirm either side matches the deployer.
- **Python's runtime behavior end to end.** The repo requires Python ≥3.10
  (`runtime/ontology_object.py:22` uses `dict[str, Any]` under `functools.cache`, which fails on
  the system 3.9). I executed `_convert_aliases_file` against the fixture by loading the three
  `aliases` submodules in isolation, which is what §1.2's output shows; I did **not** run the
  Python test suite, so claims about which tests pass are read from source, not observed.
- **Whether `_convert_resources_file`'s omission of the ontology sections is intentional.** The
  code and the fixture disagree (`_loaders.py:140-146` vs.
  `tests/test-data/resources.json:4-32`) and no comment explains it. I read it as an omission
  because the fixture was clearly authored to be parsed, but that is inference.
- **Marketplace's rehydration side.** Nothing in this audit checks what Marketplace would write
  into either shape, or whether `ResolvedObjectTypeShape.apiName` being optional-and-empty
  ([05](./05-aliases-file-schema.md) §1.2) still holds. Out of scope, and load-bearing for the `id`
  provenance argument.
