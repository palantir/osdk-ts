# TypeScript Upgrade Investigation (5.5.4 → 6.0.x)

**Date:** 2026-06-11
**Branch:** `ts-latest-upgrade`
**Status:** Investigation **and** a full local migration to TypeScript 6.0.3.
The upgrade has been implemented and validated end-to-end locally (build,
typecheck, test, check-api, lint all green — see §9). Nothing is merged or
pushed; this remains review-only.

---

## 0. Migration outcome (implemented & validated locally)

The upgrade was carried out for real and the entire workspace is green on TS 6.0.3:

| Gate              | Result                            |
| ----------------- | --------------------------------- |
| `turbo build`     | 284 / 284 ✓                       |
| `turbo typecheck` | 201 / 201 ✓                       |
| `turbo test`      | 182 / 182 ✓                       |
| `turbo check-api` | 134 / 134 ✓ (no API-report drift) |
| `turbo lint`      | 209 / 209 ✓                       |

**Changes made (all small / mechanical):**

- `LATEST_TYPESCRIPT_DEP` → `~6.0.3` in `.monorepolint.config.mjs`; `mrl --fix`
  propagated it to every package. Example apps (generated artifacts not managed
  by mrl) bumped to `~6.0.3` to match generator output.
- Shared `base-4.9.json`: added `ignoreDeprecations: "6.0"` (tsup `baseUrl`),
  `types: ["*"]` (restore pre-6.0 `@types` auto-discovery for node globals),
  and `noUncheckedSideEffectImports: false` (CSS side-effect imports).
- Removed now-unnecessary `baseUrl` from 3 example/template tsconfigs (their
  `paths` are already relative).
- Added `ignoreDeprecations: "6.0"` to the 2 intentional `node10` test fixtures.
- `e2e.generated.1.1.x` (was pinned TS 4.9): `isolatedDeclarations: false` — its
  vendored `generatedNoCheck` code predates the option.
- ~6 genuine code fixes for TS 6 strictness, each isolated and commented:
  `ShapeBuilder` (explicit constructor type args), `streamStep` TextDecoderStream
  (lib.dom variance cast), `maker-experimental` (typed yargs `coerce` wrapper),
  `react-devtools` (generic forwarding + optional-param `| undefined` for
  isolatedDeclarations), `client` testUtils (`NonNullable` cast).
- Test expectation: generator's in-memory compile check now ignores TS6's 2307
  ("cannot find module") in addition to the old 2792.

**Tooling reality (verified):** typescript-eslint 8.43 lints TS 6 fine as-is;
api-extractor 7.52 still produces stable reports (bundled TS 5.8.2); tsup needs
only the `ignoreDeprecations` tsconfig line. No lockstep tooling upgrade was
required to land this. See §5 for the optional upgrades and the TS-7 follow-up.

The sections below are the original investigation that led here; they remain
accurate. §9 has the validation detail.

---

## 1. Current state

| Aspect            | Value                                                                                                                                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pinned TS version | `~5.5.4` (one legacy package on `^4.9.5`)                                                                                                                                                                              |
| How it's managed  | **Not** a catalog entry. A single constant `LATEST_TYPESCRIPT_DEP = "~5.5.4"` in `.monorepolint.config.mjs:44` is enforced across every package by monorepolint. ~100 `package.json` files carry the literal `~5.5.4`. |
| Workspace         | pnpm 10.27 monorepo, ~110 workspace projects (`packages/*`, `examples*`, `tests/*`, `benchmarks/*`, `docs`).                                                                                                           |
| Shared tsconfig   | `@osdk/monorepo.tsconfig` → `base.json` (adds `isolatedDeclarations`) extends `base-4.9.json`.                                                                                                                         |

The shared `base-4.9.json` **already pins explicitly** the options TS 6.0 flips
by default:

```jsonc
"target": "ES2022", "module": "NodeNext", "moduleResolution": "nodenext",
"strict": true, "esModuleInterop": true, "isolatedModules": true,
"declaration": true, "emitDeclarationOnly": true, "skipLibCheck": true,
"jsx": "react-jsx"
```

This is the single most important fact for the upgrade: **most of the scary
TS 6.0 default-flips do not apply here** because the values are already set.

### Canonical way to bump

Change `LATEST_TYPESCRIPT_DEP` in `.monorepolint.config.mjs`, run monorepolint
`--fix`, then `pnpm install`. (The trial below used `pnpm up -r typescript@…`
which produces the same `package.json` edits, but the monorepolint constant is
the source of truth and is what CI enforces.)

---

## 2. Target version

- **Latest stable: `typescript@6.0.3`** (`npm view typescript dist-tags` →
  `latest: 6.0.3`). TypeScript 6.x is GA.
- 6.0 is explicitly a **transition release** bridging 5.9 and the upcoming
  Go-based **7.0**. Most of its "breaking" changes are new default values and
  deprecation warnings that _prepare_ for 7.0; the hard removals land in 7.0.

---

## 3. Breaking changes — which actually apply

Assessed against the migration guide and confirmed against the trial build.

| Change                                                   | Applies here?         | Why / impact                                                                                                                                                                                        |
| -------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `strict` default `true`                                  | **No**                | Already `strict: true`.                                                                                                                                                                             |
| `target` → `es2025`                                      | **No**                | Already `ES2022`.                                                                                                                                                                                   |
| `module`/`moduleResolution` defaults                     | **No**                | Already `NodeNext`/`nodenext`.                                                                                                                                                                      |
| `esModuleInterop` always on                              | **No**                | Already `true`.                                                                                                                                                                                     |
| `rootDir` → `.`                                          | **No**                | Every package sets `rootDir: "src"`.                                                                                                                                                                |
| **`types` default → `[]`**                               | **Yes**               | Biggest real source of errors. `types` is unset everywhere, so TS5 auto-included `@types/node`; TS6 excludes it → node-tool packages lose `node:*` builtins and Node globals. 24 errors (`TS2591`). |
| **`baseUrl` deprecated** (`TS5101`)                      | **Yes**               | Not from repo tsconfigs — injected by the **tsup dts build** used in the CJS transpile path. Hit 41 packages. Also 3 example/template tsconfigs set `baseUrl` explicitly.                           |
| **`moduleResolution: node10` deprecated** (`TS5107`)     | **Yes (intentional)** | Only the 2 CJS-resolution verification test fixtures (`tests/verify-cjs-node10`). These deliberately exercise node10.                                                                               |
| **`noUncheckedSideEffectImports` → `true`**              | **Yes (minor)**       | 1 real `.css` side-effect import (`react-components/.../PdfViewer.tsx`). Most other CSS imports live in `create-app` template dirs that aren't compiled.                                            |
| Standard-lib type changes (es2025 / stream types)        | **Yes (tiny)**        | 1 error: `TextDecoderStream` vs `ReadableWritablePair<string, Uint8Array<ArrayBufferLike>>`.                                                                                                        |
| `this`-less / stricter generic inference                 | **Yes (tiny)**        | ~2 genuine assignability errors.                                                                                                                                                                    |
| `module Foo {}` → `namespace`; `assert {}` → `with {}`   | **No**                | None found in the codebase.                                                                                                                                                                         |
| Compiler-API changes (`hasNoDefaultLib`, `ScriptTarget`) | **No**                | Repo code does not consume the TS compiler API. `ts-morph` (in `foundry-sdk-generator`) bundles its own TS and is independent of the workspace version.                                             |

---

## 4. Trial upgrade results

TS forced to `6.0.3` across the workspace (`pnpm up -r typescript@6.0.3`,
resolved version confirmed `6.0.3`).

### 4a. Naive `turbo typecheck` — misleading

46 tasks failed, **387** `error TS…` lines. **This number is mostly noise.**
The dominant codes — `TS2307` (148, "cannot find module './generatedNoCheck/…'"),
`TS2305` (70), `TS7016` (8), `TS7006` (51), `TS9010` (56) — are a **cascade**:
`turbo typecheck` triggered `codegen`, and codegen failed with
`ERR_MODULE_NOT_FOUND` for un-built CLI packages
(`@osdk/cli.common/build/esm/index.js`) because no build had run yet. Missing
generated SDKs then surface as "missing module / implicit any" everywhere
downstream. These are **not** TS-6 type errors.

### 4b. Real compile path — `turbo transpile`

The repo's actual compile step. Clean signal:

| State                                                   | Result                                                                                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| TS 6.0.3, no config changes                             | **41 errors, all `TS5101` (`baseUrl` deprecation)** — every one from the tsup dts build in `transpileCjs`. Nothing else. |
| + `ignoreDeprecations: "6.0"` in shared `base-4.9.json` | **28 errors remaining** (verified)                                                                                       |

The single `ignoreDeprecations` line cleared all 41 `baseUrl` failures
(confirmed by re-running a `transpileCjs` task to exit 0).

### 4c. The genuine residual (28 errors after the one-line config fix)

| Code     | Count | Category                                                                                                                                                                                                                               | Fix                                                                                           |
| -------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `TS2591` | 24    | `types:[]` flip — `node:fs/promises`, `node:path`, Node globals in ~10 node-tool packages (`maker*`, `generator*`, `faux`, `seed-compiler`, `foundry-config-json`). `@types/node` is already a dep; it's just no longer auto-included. | Add `"types": ["node"]` to those packages' tsconfigs (or a shared `base-node.json`).          |
| `TS2882` | 1     | `noUncheckedSideEffectImports` — `react-components/.../PdfViewer.tsx` imports `pdfjs-dist/web/pdf_viewer.css`.                                                                                                                         | `"noUncheckedSideEffectImports": false` in base, or add a `*.css` ambient module declaration. |
| `TS2322` | 2     | **Genuine** — `@osdk/api ShapeBuilder.ts` generic assignability got stricter; `maker-experimental` yargs `argv` (`unknown` vs `string`).                                                                                               | Code fix (annotation / cast / generic tweak).                                                 |
| `TS2345` | 1     | **Genuine** — `aip-core streamStep.ts`: `TextDecoderStream` vs updated `ReadableWritablePair<string, Uint8Array<ArrayBufferLike>>` lib type.                                                                                           | Code fix (cast or adjust stream typing).                                                      |

So the true cost on the compile path is: **one shared-config line + ~10
`types:["node"]` additions + one CSS-import setting + ~3 small code fixes.**

> Not separately re-measured: the `typecheck` cascade (§4a) should clear once a
> full `build`+`codegen` runs on TS 6 with the fixes above; the failures there
> were build-ordering, not type errors. Quickinfo snapshots and API reports
> (see §6) are the place real review effort goes.

---

## 5. Tooling compatibility

All statuses below were **verified empirically** on TS 6.0.3, not inferred from
version ranges. Headline: **no tool is a hard blocker.**

| Tool                                                                | Installed | TS 6 status                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Action                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **typescript-eslint**                                               | 8.43.0    | **Works as-is (verified).** Ran `eslint .` on `@osdk/api` under TS 6.0.3 → **exit 0**, only pre-existing warnings, **no unsupported-version warning printed**, and type-aware rules (`require-await`, `no-redundant-type-constituents`) fired correctly — so the parser instantiated the TS 6 program successfully. The `<6.0.0` upper bound in `typescript-estree@8.43` is a _soft_ advisory, not a hard gate.                                                                 | **Optional:** upgrade to ≥ 8.61.0 (raises range to `<6.1.0`, verified from its published `warnAboutTSVersion.js`) to get official support and silence any future advisory. Not required to ship.                                                   |
| **tsup**                                                            | 8.5.0     | **Works with one tsconfig line (verified).** Declares `typescript: ">=4.5.0"` as an _optional_ peer with **no upper bound**, so it doesn't gate on TS version. Its dts build unconditionally sets `baseUrl` (`tsup/dist/rollup.js:6837` — `baseUrl: compilerOptions.baseUrl \|\| "."`), which TS 6 reports as a deprecation **error** (`TS5101`). Adding `ignoreDeprecations: "6.0"` to the shared tsconfig clears it → a previously-failing `transpileCjs` went to **exit 0**. | Keep tsup; add `ignoreDeprecations`. **Note:** the version bump 8.5.0 → 8.5.1 is _not_ load-bearing — 8.5.1 has the identical hardcoded `baseUrl` (verified in the tarball). The safety comes from `ignoreDeprecations`, not from being on latest. |
| **@microsoft/api-extractor**                                        | 7.52.11   | **Works, with caveat.** Runs and regenerates the API report on TS 6, but analyzes with its **bundled TS 5.8.2** and prints _"the target project appears to use TypeScript 6.0.3 which is newer than the bundled compiler engine; consider upgrading."_                                                                                                                                                                                                                          | Upgrade to **7.58.8** (latest) so analysis uses a TS6-aware engine, then regenerate `etc/*.report.api.md`. Non-blocking.                                                                                                                           |
| **vitest**                                                          | 3.2.4     | Fine. Runs via esbuild; TS-version-agnostic for running tests.                                                                                                                                                                                                                                                                                                                                                                                                                  | None.                                                                                                                                                                                                                                              |
| **oxc-transform** (isolated-declaration emit in the transpile tool) | —         | Fine; independent of the TS compiler.                                                                                                                                                                                                                                                                                                                                                                                                                                           | None.                                                                                                                                                                                                                                              |
| **ts-morph** (in `foundry-sdk-generator`)                           | 19.0.0    | Bundles its own TS (~5.0) at runtime; unaffected by the workspace devDep bump.                                                                                                                                                                                                                                                                                                                                                                                                  | Optional later bump for consistency (latest 28.0.0 — a large major jump; out of scope for the TS upgrade).                                                                                                                                         |
| **babel / esbuild** transpile                                       | —         | Fine.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None.                                                                                                                                                                                                                                              |

### tsup vs. the TS 7 horizon (the one real tooling decision)

The `baseUrl` deprecation is the _only_ tsup friction, and `ignoreDeprecations: "6.0"` fully neutralizes it for the entire TS 6.x line. The catch is forward:
**TS 7.0 removes `baseUrl` outright, and `ignoreDeprecations` stops working in
7.0** — at which point tsup's hardcoded `baseUrl` becomes a hard error with no
escape hatch unless tsup fixes it upstream.

So tsup-latest + `ignoreDeprecations` is the **recommended path for the TS 6
upgrade** (lowest risk, proven). Migrating off tsup is a **pre-TS-7 follow-up**,
not a 6.0 requirement. The natural target is **[tsdown](https://tsdown.dev)**
(the Rolldown/oxc successor), and the migration here is unusually contained
because tsup is centralized in **one file** — the CJS-bundle path in
`packages/monorepo.tool.transpile/bin/transpile2.mjs:169`, which every
`-m bundle` package calls — plus one legacy package (`e2e.generated.1.1.x`).
tsdown's dts uses oxc isolated declarations, which fits this repo (the shared
config already requires `isolatedDeclarations: true`) and should avoid the
`baseUrl` injection entirely. The main migration cost is porting the esbuild
babel step (`babel-plugin-dev-expression`; `@babel/preset-typescript` becomes
unnecessary under oxc) to a Rolldown plugin, plus re-validating the CJS bundle
output, `noExternal` list, env injection, and forced-splitting default. Not
verified in this investigation — flagged as the next decision point.

---

## 6. Recommended migration plan (incremental)

1. **Shared config.** Add `"ignoreDeprecations": "6.0"` to
   `packages/monorepo.tsconfig/base-4.9.json`. (Silences the tsup `baseUrl`
   and the test-fixture `node10` deprecations for the whole 6.x line. This is
   the load-bearing fix for the build path — stopgap, see risks.)
2. **Bump TS.** Set `LATEST_TYPESCRIPT_DEP = "~6.0.3"` in
   `.monorepolint.config.mjs`, run monorepolint `--fix`, `pnpm install`.
   Also move the one legacy `^4.9.5` package up.
3. **`types: ["node"]`.** Add to the ~10 node-tool packages (or introduce a
   `base-node.json` they extend). `@types/node` is already present.
4. **CSS side-effect import.** Set `noUncheckedSideEffectImports: false` in the
   shared config, or add a `*.css` ambient declaration for `react-components`.
5. **Fix the ~3 genuine type errors** (`ShapeBuilder` generic, `TextDecoderStream`
   stream type, `maker-experimental` yargs argv).
6. **Regenerate artifacts.** `pnpm turbo transpile` globally, then
   `build` + `typecheck` + `test`. Upgrade api-extractor to 7.58.8 and
   regenerate `etc/*.report.api.md`. Run `pnpm updateSnapshots` for the
   `@osdk/api` quickinfo snapshots (TS 6 changes type display / union ordering,
   so these will shift — review the diff per the harness README before
   committing).
7. **Optional, same PR or follow-up:** bump `typescript-eslint` +
   `@typescript-eslint/*` to ≥ 8.61.0 for official TS 6 support. Lint already
   works on 8.43 (§5), so this is hygiene, not a blocker.
8. **One changeset.** TypeScript is a devDependency, so no runtime changeset is
   strictly required, but add one documenting the toolchain bump.

> **Not in this PR — pre-TS-7 follow-up:** migrate the tsup CJS-bundle path in
> `monorepo.tool.transpile` to tsdown (or wait for a tsup fix) to remove the
> `baseUrl` debt before TypeScript 7.0, where `ignoreDeprecations` no longer
> works. See §5.

---

## 7. Effort & risk

- **Effort:** roughly **1–2 days**. Most of it is mechanical (version bumps,
  `types:["node"]`, regenerating API reports and quickinfo snapshots). Only
  ~3 hand-written type fixes.
- **Risk: LOW–MEDIUM.**
  - The genuine type-error surface is tiny and well understood.
  - The largest _review_ cost is **regenerated API reports + quickinfo
    snapshots**, which will produce big-but-mechanical diffs from TS 6's
    changed type rendering. These need careful eyeballing, not real work.
  - **Stopgap debt:** `ignoreDeprecations: "6.0"` only silences the `baseUrl`
    (tsup dts) and `node10` (test fixtures) deprecations; TS **7.0** removes
    both outright. Before 7.0 the repo must remove `baseUrl` from the tsup dts
    pipeline and migrate the node10 verification fixtures. Track as follow-up.
  - `ts-morph` in `foundry-sdk-generator` continues to emit with an older TS;
    low risk today but a future divergence.

## 8. Recommendation

**Proceed now, as a focused PR.** TypeScript 6.0 is GA and — verified
empirically, not just from version ranges — **no tooling is a hard blocker**:
lint runs clean on TS 6 with the _current_ typescript-eslint 8.43 (exit 0, type-
aware rules working); tsup builds clean with a single `ignoreDeprecations: "6.0"`
line; api-extractor still produces reports. Because the repo already pins
`strict`/`target`/`module`/`rootDir` explicitly, it dodges the bulk of 6.0's
default-flip breakage — the real residual is a handful of config lines and ~3
type fixes.

The safe, recommended build-tooling choice is **tsup-latest +
`ignoreDeprecations: "6.0"`** (proven, lowest risk). Treat the optional bumps
(typescript-eslint → 8.61 for official support, api-extractor → 7.58 for a
6-aware analysis engine) as hygiene that can ride along or follow. The one
thing to _schedule_ rather than ignore: moving the tsup CJS path to tsdown (or a
tsup upstream fix) before **TS 7.0**, where `baseUrl`/`node10` are removed and
`ignoreDeprecations` no longer applies.

---

## 9. Validation detail (local, TS 6.0.3)

How the residual error count evolved as fixes landed, and the surprises versus
the §4 estimate:

1. **Naive `turbo typecheck`** (no build): 387 errors — almost all cascade from
   un-built codegen, not type errors (see §4a).
2. **`turbo transpile`** (real compile): 41 × `TS5101` baseUrl, all from tsup's
   dts build. After `ignoreDeprecations`: 28 residual.
3. **`turbo build`** full: cleared to 56 × `TS9010` (isolatedDeclarations on the
   TS-4.9 `e2e.generated.1.1.x` fixture) + 2 × `TS5101` (example baseUrl). Fixed
   via `isolatedDeclarations: false` on that fixture and `baseUrl` removal →
   **284/284 green**.
4. **`turbo typecheck` full** (includes test/`.test-d.ts` files, which the
   transpile/oxc path skips): surfaced extras the compile path never sees —
   `react-components` `.test-d.ts` `@ts-expect-error` relocation, `client`
   `NonNullable` cast, `react-devtools` generic-forwarding + `TS9025`
   optional-param, and 2 `node10` fixtures. Fixed → **201/201 green**.
   _Note:_ turbo's cache masked some of these on a non-`--force` run; always
   validate typecheck with `--force` when chasing the true count.
5. **`turbo test`**: two failures, both TS-6-attributable but not type errors —
   the generator's in-memory compile check (diagnostic code 2792 → 2307) and the
   example-generator consistency check (example apps needed the `~6.0.3` bump to
   match regenerated template output). Fixed → **182/182 green**.
6. **`check-api`**: 134/134, no report drift (api-extractor analyzes with its
   bundled TS 5.8.2, so type-rendering changes in 6.0 don't reach the reports —
   a double-edged result: stable now, but the reports aren't yet TS6-accurate).
7. **`lint`**: green after `dprint fmt` on the touched files.

**Takeaways that revised the §4 estimate:**

- The compile path (oxc isolated declarations) and the `tsc` typecheck path
  enforce `isolatedDeclarations` _differently_ — `tsc` caught `TS9010`/`TS9025`
  that the build did not. Budget for typecheck-only errors separately from build.
- The genuine code-fix surface was ~6 sites (not ~3), but each was a one-line,
  well-understood strictness/lib/inference change — no architectural work.
- The biggest _process_ cost was generated-artifact consistency (examples), not
  type errors. Avoid running the example-generator's destructive `generate` to
  fix a one-line drift; it also deletes `turbo.json` (which the check ignores).
