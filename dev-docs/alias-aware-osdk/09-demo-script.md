<!-- cspell:words actionTypes coverton hackweek interfaceTypes loadObjects objectSets objectTypes osdks preflight queryTypes remapped selectV2 todoapp unaliased -->

# Demo script

Two minutes forty-five, four beats, one terminal. The audience already knows what a
portable OSDK is for, so nothing here re-explains the premise: beat 1 shows the mechanism
and its surface, beat 2 changes what goes on the wire, beat 3 shows where the work stops,
beat 4 says what is next.

Everything below was run on branch `coverton/hackweek-aliases` and the outputs are
transcribed from real runs, except where a line is explicitly marked unverified. No changes
under `packages/` are needed — the demo works against the tree as it stands.

---

## The stage: `@osdk/client.test.ontology`

| candidate                  | objects | interfaces | actions | queries | reaches the mock server                                       |
| -------------------------- | ------- | ---------- | ------- | ------- | ------------------------------------------------------------- |
| `e2e.sandbox.todoapp`      | 1       | 1          | 2       | **0**   | no — browser app, needs `VITE_FOUNDRY_URL` and public OAuth   |
| `e2e.sandbox.catchall`     | many    | many       | many    | many    | no — `invariant(process.env.FOUNDRY_STACK !== undefined)`     |
| **`client.test.ontology`** | **10**  | **3**      | **14**  | **20**  | **yes — `LegacyFauxFoundry` + `startNodeApiServer`, in Node** |

`e2e.sandbox.todoapp` is the tempting choice: 12 generated files, one screen each, already
regenerated with getters. It loses on two counts. Its `ontology/queries.ts` is literally
`export {};` — it has no query, so it cannot show the `apiName`/`version` pair, which is a
sixth of Tier 1 and the only axis where two strings move together. And it cannot reach the
mock server at all: `foundryClient.ts` builds a `createPublicOauthClient` against
`VITE_FOUNDRY_URL`, so there is no in-repo way to see its wire traffic. Since beats 2 and 3
_are_ the wire traffic, that is disqualifying.

`client.test.ontology` is the SDK that `@osdk/client`'s own tests drive against
`LegacyFauxFoundry`, so the generated SDK and the mock server already agree, and its
`src/generatedNoCheck/` is regenerated with `aliases.json`, `aliases.ts` and all five getter
sites. One stage, all six Tier 1 axes, no stage switch mid-demo.

## What is on screen

A single full-screen terminal at roughly 150 columns, plus an editor for the two file-open
moments in beats 1 and 2. Nothing else — no browser, no split panes with app UI. The reason
is legibility: the interesting strings are `foo.bar.Todo` versus `Todo` and
`?version=0.0.9` versus `?version=0.1.0`, and those only read at video resolution if the
terminal is the whole frame.

The demo driver lives in [`demo/`](./demo/) and deliberately prints a **digest** rather than
a raw request log:

```
tier1 object         Todo
tier2 property       text
```

Every ontology name the process actually put on the wire, one line per kind, tagged with the
tier that is supposed to alias it. Diffing two of those side by side is the entire money
shot, and it fits in nine lines. The raw request log is still available behind
`TRACE_RAW=1` and beat 3 uses it, but as a zoom-in on one body, not as the primary surface.

## The "real time" problem

`$ontologyRid` is resolved eagerly at module init and the registry is module-level and
memoized, so **one process can only ever observe one alias file**. The demo is therefore two
runs of a byte-identical command with only `ALIASES_JSON_FILE` differing, printed side by
side. The alternatives were considered and lost:

| approach                             | why it loses                                                                                                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| watch-mode dev server, edit and save | whether an HMR re-import re-evaluates `OntologyMetadata.ts` is not deterministic, and the registry memo survives it. Non-reproducible on camera is worse than slow.                         |
| `setAliasOverride()` mid-process     | genuinely live, but cannot retroactively change `$ontologyRid` — the object name would flip while the ontology RID in the same URL did not. A confusing half-effect is worse than a re-run. |
| two runs, side-by-side digest        | **chosen.** Fully deterministic, and "nothing else about the code moves" is provable because the command is byte-identical and the only input that differs is one JSON file.                |

---

## Shot list

Total 2:45.

### Beat 1 — the mechanism and its surface · 0:00–0:35

**On screen.** Editor, two files side by side.

- Left: `packages/client.test.ontology/src/generatedNoCheck/ontology/objects/Todo.ts`,
  scrolled to line 93.
- Right: `dev-docs/alias-aware-osdk/demo/aliases.identity.json`, scrolled to line 375.

The left pane shows:

<!-- dprint-ignore-start -->

```text
export const Todo = {
  type: 'object',
  get apiName() {
    return $resolveObjectType('Todo') as 'Todo';
  },
  osdkMetadata: $osdkMetadata,
  get primaryKeyApiName() {
    return $resolvePrimaryKey('Todo') as 'id';
  },
  primaryKeyType: 'integer',
  internalDoNotUseMetadata: {
    rid: 'ri.todo',
  },
} satisfies Todo & { internalDoNotUseMetadata: { rid: string } } as Todo;
```

<!-- dprint-ignore-end -->

and the right pane shows the entry it reads:

```json
"Todo": {
  "apiName": "Todo",
  "id": { "rid": "ri.todo" },
  "links": {},
  "primaryKeyApiName": "id",
  "properties": {
    "id":   { "apiName": "id" },
    "text": { "apiName": "text" }
  }
},
```

(reflowed for width; the file has one key per line, `"Todo": {` at line 375).

**Narration.** "Every string a generated SDK bakes in about its stack is now a getter that
asks a runtime file. That's the whole trick — `tsc` erases properties and links into a type
slot, so there are only a handful of strings per entity that actually survive into the
`.js`. Six of them resolve: the ontology RID and branch, object api name and primary key,
interface api name, action api name, and query api name plus version. Property and link
names do not. Hold onto that."

**Fallback.** If the editor is fussy, run
`sed -n '93,106p' packages/client.test.ontology/src/generatedNoCheck/ontology/objects/Todo.ts`
in the terminal. The snippet above is exactly what it prints.

### Beat 2 — editing the file changes the wire · 0:35–1:25

**On screen.** Terminal. Two commands.

```sh
cd dev-docs/alias-aware-osdk/demo
git diff --no-index --stat aliases.identity.json aliases.remapped.json
git diff --no-index aliases.identity.json aliases.remapped.json | grep -E '^[-+][^-+]'
```

The `--stat` line reads `1 file changed, 10 insertions(+), 8 deletions(-)` — eight changed
values, one of which expands from `null` to an object. The `grep` prints them, verbatim:

```diff
-        "apiName": "editTodo",
+        "apiName": "foo.bar.editTodo",
-        "apiName": "FooInterface",
+        "apiName": "foo.bar.FooInterface",
-        "apiName": "Todo",
+        "apiName": "foo.bar.Todo",
-            "apiName": "text"
+            "apiName": "body"
-        "branch": null,
+        "branch": {
+          "rid": "ri.ontology.main.branch.demo"
+        },
-          "rid": "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361"
+          "rid": "ri.ontology.main.ontology.b0000000-0000-0000-0000-00000000000b"
-        "apiName": "addOne",
+        "apiName": "foo.bar.addOne",
-        "version": "0.0.9"
+        "version": "0.1.0"
```

Note the fourth pair: `text` → `body` is a **property** rename, and it is in the fixture on
purpose. Beat 3 comes back to it.

Then:

```sh
./compare.sh
```

Verified output (the ontology RIDs are elided here for width; on screen they are full):

```
alias file : aliases.identity.json          alias file : aliases.remapped.json
tier1 action         editTodo               tier1 action         foo.bar.editTodo
tier1 branch         (none)                 tier1 branch         ri.ontology.main.branch.demo
tier1 interface      FooInterface           tier1 interface      foo.bar.FooInterface
tier1 object         Todo                   tier1 object         foo.bar.Todo
tier1 ontology       ri...698267cc-6b48-…   tier1 ontology       ri...b0000000-0000-…
tier1 query          addOne                 tier1 query          foo.bar.addOne
tier1 queryVersion   0.0.9                  tier1 queryVersion   0.1.0
tier2 property       text                   tier2 property       text
```

The eight-value edit produces seven flipped lines: `objects.Todo.properties.text` is the
eighth edit and it is the one line that does not move.

**Narration.** "Eight values changed in one JSON file. No TypeScript recompiled, no
codegen re-run, same command both sides — the only difference is `ALIASES_JSON_FILE`.
Left is the file the generator packaged; right is the remap. Every Tier 1 line moved:
ontology RID, branch, object, interface, action, query, and the query's version. That's not
the app still working — that's the OSDK addressing a different ontology on a different
stack out of the same compiled artifact."

**Fallback.** If `compare.sh` misbehaves — it leans on `paste` and `column` — run the two
halves directly and let the audience read them in sequence:

```sh
ALIASES_JSON_FILE=aliases.identity.json node ./trace.mjs
ALIASES_JSON_FILE=aliases.remapped.json node ./trace.mjs
```

### Beat 3 — where it stops · 1:25–2:05

**On screen.** Terminal. The last line of the previous output is still visible; point at it
first, then zoom into the raw body.

```sh
TRACE_RAW=1 ALIASES_JSON_FILE=aliases.remapped.json node ./trace.mjs | grep -A1 'loadObjects$'
```

Verified output (wrapped here; it is one line on screen):

```
POST {ontology}/objectSets/loadObjects
  {"objectSet":{"type":"filter","objectSet":{"type":"base","objectType":"foo.bar.Todo"},
   "where":{"type":"eq","field":"text","value":"hello"}},
   "select":[],"selectV2":[{"type":"property","apiName":"text"}],
   "loadPropertySecurities":false,"excludeRid":true,"snapshot":false}
```

The `$` anchor matters: without it the grep also catches
`loadObjectsMultipleObjectTypes`, and two bodies on screen is one too many.

**Narration.** "Here's the boundary, in one request body. The object type is
`foo.bar.Todo` — aliased. In the same body, the `where` field is `text` and the `select`
entry is `text` — the source names, unchanged, because property and link remapping is Tier
2 and Tier 2 isn't built. So an SDK installed somewhere that renamed `text` to `body` will
send `text` and get a 4xx. That's not a bug we haven't found; the `remapped` fixture encodes
it on purpose so it shows up here instead of in the field."

**Fallback.** If the raw body is unreadable at video resolution, point at the
`tier2 property text` line in the beat 2 digest instead. It makes the same point in one line
and it is already on screen — the raw body is the better frame, not a necessary one.

### Beat 4 — next, and what to say out loud · 2:05–2:45

**On screen.** `dev-docs/alias-aware-osdk/06-tier1-implementation-plan.md`, scrolled to
"Known limitation: Tier 2". No commands.

**Narration.** "Three things next. One, Tier 2 — properties and links. It does not belong
in the generator; it belongs in `@osdk/client` at the `OntologyProvider` seam, because
responses come back target-named and have to be rewritten to source names before user code
sees them. Two, the test oracle: `changeNames` in the generator tests can't rename
properties or links, so extending it is a prerequisite for any credible Tier 2 differential
test. Three, Marketplace. We ship the artifact it would rewrite and the runtime that reads
it; the install-time layer that swaps the file is separate work.

And two honest limitations. `primaryKeyApiName` resolves on the generated const, but most
request paths read the primary key from fetched metadata instead, so those two diverge the
moment aliasing is real — reconciling them is Tier 2's actual hard part, not a detail.
And `ALIASES_JSON_FILE` only works if something imports `@osdk/aliases/node`; without it
the env var is silently ignored and the run looks like a success."

**Fallback.** Have the plan document open in a second tab before recording. If scrolling is
awkward, just talk over the beat 2 output — this beat is words, not pixels.

---

## Commands, in order

```sh
# --- pre-flight, before recording ---
pnpm turbo transpile \
  --filter=@osdk/aliases --filter=@osdk/client \
  --filter=@osdk/shared.test --filter=@osdk/client.test.ontology
pnpm turbo test --filter=@osdk/aliases
./dev-docs/alias-aware-osdk/demo/compare.sh          # dry run; must show the flip

# --- on camera ---
cd dev-docs/alias-aware-osdk/demo

# beat 1
sed -n '93,106p' ../../../packages/client.test.ontology/src/generatedNoCheck/ontology/objects/Todo.ts

# beat 2
git diff --no-index --stat aliases.identity.json aliases.remapped.json
git diff --no-index aliases.identity.json aliases.remapped.json | grep -E '^[-+][^-+]'
./compare.sh

# beat 3
TRACE_RAW=1 ALIASES_JSON_FILE=aliases.remapped.json node ./trace.mjs | grep -A1 'loadObjects$'
```

There is no file edit on camera. The two alias files are staged in `demo/` and beat 2 diffs
them, which is strictly more convincing than typing into one: the diff proves the two inputs
differ in exactly eight values and nothing else. If you would rather edit live, open
`aliases.remapped.json`, change `"apiName": "foo.bar.Todo"` back to `"Todo"`, re-run
`./compare.sh`, and the `tier1 object` line stops moving while the other six keep moving.

## Pre-flight checklist

| # | must be true                                                             | verify in one command                                                                                                                                              |
| - | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1 | `@osdk/aliases` exists and its tests pass                                | `pnpm turbo test --filter=@osdk/aliases`                                                                                                                           |
| 2 | `client.test.ontology`'s generated tree is alias-aware                   | `grep -c '\$resolve' packages/client.test.ontology/src/generatedNoCheck/ontology/objects/Todo.ts` → `3`                                                            |
| 3 | its packaged `aliases.json` exists and covers all four entity kinds      | `python3 -c "import json;d=json.load(open('packages/client.test.ontology/src/generatedNoCheck/aliases.json'))['defaults'];print({k:len(v) for k,v in d.items()})"` |
| 4 | the four packages the driver imports are transpiled                      | `ls packages/{aliases,client,shared.test,client.test.ontology}/build/esm/index.js`                                                                                 |
| 5 | `demo/aliases.identity.json` still matches the packaged file, names-wise | `diff <(grep -v '"rid":' demo/aliases.identity.json) <(grep -v '"rid":' packages/client.test.ontology/src/generatedNoCheck/aliases.json)`                          |
| 6 | the whole demo produces the flip                                         | `./dev-docs/alias-aware-osdk/demo/compare.sh`                                                                                                                      |
| 7 | `pnpm` is on `PATH`                                                      | `pnpm --version` (it is under `~/.nvm/versions/node/*/bin` and may not be on a bare login shell's `PATH`)                                                          |

All seven were run and pass. Check 2 returns `3`; check 3 returns
`{'actions': 14, 'interfaces': 3, 'objects': 10, 'ontologies': 1, 'queries': 20, ...}`.

Check 5 deliberately strips `"rid":` lines. A byte-for-byte `diff` **does** fail: the mock
ontology assigns fresh entity RIDs on every `codegen` run, so `aliases.identity.json` drifts
from the packaged file by one `action-type` RID and will drift further. That is harmless —
nothing in the demo resolves an entity RID — and the ontology RID, the one RID that does
matter, is checked at runtime by the driver's own guard. Do not "fix" it by re-copying,
because that would silently drop the identity file out of sync with `aliases.remapped.json`.

If check 2 or 3 fails, the generated tree is stale — `client.test.ontology/src/generatedNoCheck`
is untracked (`git ls-files` does not know it) and rebuilt by
`pnpm turbo codegen --filter=@osdk/client.test.ontology`, followed by check 4's transpile.
**Unverified:** the `codegen` step was not run while writing this, deliberately, to avoid
racing the agents still editing the generator. Run it well before recording, not during.

`demo/aliases.remapped.json` is derived from `aliases.identity.json` by changing the eight
values listed in beat 2. If the packaged file gains or loses an entity, re-derive both from
it rather than hand-patching one.

## Cut list

Things deliberately left out, and what to say if someone asks.

| cut                                        | why                                                                                                                                                                                                                                                                    |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The four-layer precedence chain            | override → `ALIASES_JSON_FILE` → `RESOURCES_JSON_FILE` → packaged. Unit-tested in `packages/aliases/src/resolve.test.ts`. Watching a layer win is not a visual.                                                                                                        |
| The strict-missing-key error               | It cannot be triggered from `ALIASES_JSON_FILE`. Resolution across layers is permissive per key, so a partial env file just overrides the keys it has and the packaged layer backs the rest. Deleting `actions.editTodo` from the env file changes nothing — verified. |
| Cross-SDK conflict detection               | `registerPackagedAliases` throws when two SDKs register different values for one key. Real, tested, and a wall of error text on camera.                                                                                                                                |
| `e2e.sandbox.todoapp` running in a browser | Needs OAuth and a real `VITE_FOUNDRY_URL`. Its regenerated `src/generatedNoCheck2/` is good beat 1 material if you prefer a smaller `aliases.json` — 81 lines, whole file on one screen — but it has no query.                                                         |
| The ~264-file baseline regeneration        | The Phase 5 diff is the boring proof that generated output stopped moving. Mention the number, do not scroll it.                                                                                                                                                       |
| Anything about Marketplace                 | Not implemented. Beat 4 names it as next work and stops there.                                                                                                                                                                                                         |
| `$branch` reaching the wire                | It flips in the digest because the driver prints the exported value, but `createClient` in this driver never puts a branch in a request. Honest phrasing: "resolved", not "sent".                                                                                      |

## Files

| path                                   | what                                                                                  |
| -------------------------------------- | ------------------------------------------------------------------------------------- |
| [`demo/trace.mjs`](./demo/trace.mjs)   | the driver: starts `LegacyFauxFoundry`, makes four calls, prints the wire-name digest |
| [`demo/compare.sh`](./demo/compare.sh) | runs the driver twice under two alias files and pastes the digests side by side       |
| `demo/aliases.identity.json`           | copy of the packaged `aliases.json`, same names throughout — the "before"             |
| `demo/aliases.remapped.json`           | the same file with eight values changed — the "after"                                 |

`trace.mjs` imports the four packages by relative path into their `build/esm` output rather
than by package name, because `dev-docs/` is not a workspace member and has no
`node_modules`. pnpm symlinks workspace dependencies, so every path still resolves to the
same `packages/aliases` realpath and the module-level registry stays a singleton.

Two things in `trace.mjs` are load-bearing and easy to break:

1. `import "../../../packages/aliases/build/esm/public/node.js"` must be the **first**
   import. It installs the `ALIASES_JSON_FILE` layer — the default entrypoint omits it so
   `node:fs` stays out of browser bundles — and it has to run before the generated SDK,
   which resolves `$ontologyRid` at module init.
2. The driver asserts that `$ontologyRid` matches the RID in `ALIASES_JSON_FILE` and throws
   if not. Without that guard, forgetting item 1 produces a clean run with the source names
   and no error at all, which is the worst thing that could happen on camera. The guard was
   verified to fire against a copy of the driver with item 1 removed.
