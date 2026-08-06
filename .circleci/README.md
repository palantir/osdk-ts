# CircleCI

This pipeline runs the pull-request CI **alongside** the GitHub Actions workflows
in `.github/workflows/`. Nothing here has been removed from Actions, and nothing
here publishes: releases stay on `release.yml`.

The config was modeled on [palantir/blueprint]'s, which is the closest
Palantir-run precedent for a pnpm monorepo on CircleCI.

[palantir/blueprint]: https://github.com/palantir/blueprint/blob/develop/.circleci/config.yml

## Chromatic is switched off

**Temporary.** Chromatic is commented out in `config.yml` so the rest of the
pipeline can be exercised on its own. Three blocks are involved and they restore
together, as one change:

- the `chromatic` job
- its entry in the `ci` workflow
- the whole `chromatic-on-demand` workflow, plus the `unless:` line on `ci` that
  pairs with it

The `unless:` is off because `chromatic-on-demand` is the only other workflow:
with it commented out, a `run-chromatic=true` trigger would produce a pipeline
with no workflows, which CircleCI rejects. The `run-chromatic` parameter itself
stays declared — an unreferenced pipeline parameter is valid — so restoring is a
pure uncomment.

`build-storybook` deliberately still runs. It is a real check on its own (`turbo run build` is what proves Storybook still compiles) and it has no dependency on
Chromatic. One knock-on effect while this is off, harmless and left alone to keep
the restore small: it still persists `storybook-static` to the workspace with
nothing left to consume it. The stored artifact is still browsable, because the
base path is relative rather than Chromatic-specific.

Everything under "Set up the Chromatic project" below is moot until this is put
back.

## Manual setup a human still has to do

None of the following can be set from a commit. The pipeline is written to
degrade gracefully when they are missing — jobs skip with an explanatory message
rather than failing — so it is safe to land this before any of it is configured.

### 1. Follow the project in CircleCI

Follow `palantir/osdk-ts` at https://app.circleci.com. Use the **GitHub App**
integration rather than the legacy OAuth one; the legacy integration does not
populate `CIRCLE_PULL_REQUEST` reliably for same-repo PRs.

Recommended project settings:

| Setting                              | Value                       | Why                                                                                                                                                          |
| ------------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Build forked pull requests           | **off**, at least initially | Fork builds get no context secrets, so `chromatic` and both PR-comment jobs no-op. Turning it on later is safe; `fork-guard` covers the sensitive-path risk. |
| Pass secrets to forked pull requests | **off**                     | Never turn this on. It would hand `CHROMATIC_PROJECT_TOKEN` and `GITHUB_TOKEN` to arbitrary contributors.                                                    |
| Auto-cancel redundant workflows      | on                          | Matches the Actions `concurrency` behavior.                                                                                                                  |

### 2. Create a context with the credentials

Create an org context (suggested name `osdk-ts-ci`) and attach it to the `ci`
and `chromatic-on-demand` workflows. **The config does not reference a context
yet** — add `context: osdk-ts-ci` to the relevant jobs in `workflows:` once the
context exists, or set the variables as plain project environment variables.

| Variable                  | Used by                                  | Consequence if unset                                                                                                                                                 |
| ------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CHROMATIC_PROJECT_TOKEN` | `chromatic`                              | Job logs "no project token" and exits 0. No snapshots, no baseline.                                                                                                  |
| `GITHUB_TOKEN`            | `bundle-size`, `chromatic`, `fork-guard` | PR comments are printed to the job log instead of posted. `fork-guard` loses the `safe-to-test` label bypass and will fail any fork PR that touches sensitive paths. |

`GITHUB_TOKEN` needs `pull-requests: write` on this repo (and `issues: read` for
the `fork-guard` label check). A fine-grained PAT or a GitHub App installation
token both work. Unlike Actions, CircleCI has no automatic per-run token.

### 3. Set up the Chromatic project

1. Create the project at https://www.chromatic.com and link it to this repo.
2. Copy the project token into `CHROMATIC_PROJECT_TOKEN`.
3. Install the **Chromatic GitHub App** so the "UI Tests" / "UI Review" checks
   appear on PRs. This is what actually reports visual diffs — the CircleCI
   `chromatic` job deliberately passes `--exit-zero-on-changes`, so a visual
   change does not turn the CircleCI job red.
4. Let `main` build ~10 times so TurboSnap has the baseline history it needs.
   Until then it falls back to snapshotting everything, which is correct but
   more expensive.

### 4. Branch protection — do not change it yet

**Leave the required status checks exactly as they are.** The Actions checks
(`Build and Test (18)` … `(24)`, `Check spelling`, `ci-build`, …) stay
authoritative while this bakes.

Concretely:

- Do **not** mark `ci/circleci: ci-all` required yet.
- Do **not** remove any Actions check.
- CircleCI's per-job checks will appear on PRs as `ci/circleci: <job>`. They are
  informational until someone deliberately promotes them.

When the time comes to switch, `ci-all` is the single check to require — it fans
in from every other job. Promote it, watch a few PRs, then retire the Actions
equivalents one at a time.

## What this does differently from GitHub Actions

Everything is a faithful mirror of `ci.yml` except Storybook, which was the
weak spot the migration was meant to fix.

### Before (still running, on Actions)

`storybook-preview.yml` builds Storybook, force-pushes it into a
`storybook/pr-<n>/<sha>/` directory on the `gh-pages` branch, and comments a
link. Separately, `ci.yml`'s `build-apps` job builds the same Storybook again as
part of `turbo run build`. So:

- Storybook is built **twice per PR**, in two workflows that do not share a cache.
- Every preview is a **force-push to a shared branch**, serialized behind a
  concurrency group, racing `deploy-docs.yml` and `deploy-storybook.yml` for the
  same branch.
- Previews accumulate in git history and are only cleaned up if the `closed`
  event fires and succeeds.
- There is **no visual regression testing at all**. A reviewer gets a link and is
  expected to notice rendering changes by eye.

### After (here, on CircleCI)

- Storybook is built **once per pipeline**, in `build-storybook`, and handed to
  `chromatic` through a CircleCI workspace — Blueprint's pattern. `build-apps`
  excludes the package so the two jobs cannot build it twice.
- That build goes through `turbo run build`, so the package's declared
  `storybook-static/**` output is cached. A PR touching nothing in Storybook's
  dependency graph is a cache hit and pays nothing.
- Chromatic hosts the built Storybook per commit, which removes the reason to
  force-push to `gh-pages` at all.
- Visual diffs are reported by Chromatic's own PR check plus a sticky comment
  with the build link, hosted Storybook link, and snapshot counts.

The two branches behave differently on purpose:

|           | `main`                                                                                                                                                                                                        | Pull requests                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Snapshots | All ~196 stories                                                                                                                                                                                              | Only what TurboSnap reaches                             |
| Flags     | `--auto-accept-changes`                                                                                                                                                                                       | `--only-changed --trace-changed --exit-zero-on-changes` |
| Why       | The baseline, and the one branch a fork can never build. A full run catches rendering shifts caused by a dependency or environment change rather than a source edit — which TurboSnap, by design, lets coast. | Pays only for what the PR touched.                      |

Budget accordingly: a full run is ~196 snapshots — one per story, per viewport,
per browser — so `main` costs that per merge. If that turns out to be too much,
the lever is adding `--only-changed` to the `main` path too and scheduling a
periodic full rebuild instead — not removing the PR runs.

One detail worth calling out: **TurboSnap does not work under Actions' standard
`pull_request` trigger**, because that trigger builds an ephemeral merge commit
that TurboSnap cannot map to git history. CircleCI builds the real head commit,
so this is a case where the platform move genuinely unblocks the feature rather
than just relocating it.

### Deliberate omissions

- `chromatic` is **not** in `ci-all`'s `requires`. A visual diff is a review
  signal, and a Chromatic outage should not be able to block a merge. Blueprint
  makes the same call.

### Browsable Storybook artifacts

The `storybook-static` artifact is meant to be **navigable in place**, not just
downloadable, which is what gives PRs a Storybook preview without Chromatic and
without the gh-pages force-push.

That hinges on one line: `STORYBOOK_BASE_PATH: ./` in `build-storybook`, which
becomes vite's `base`. The default in `.storybook/main.ts` is the gh-pages path
`/osdk-ts/storybook/`; an earlier version of this config used `/` for Chromatic.
Both are absolute, and CircleCI serves artifacts under a long path prefix, so
`index.html` would ask for `/assets/...` at the artifact host root and get a 404.
A relative base resolves correctly at a domain root (Chromatic) _and_ under a
prefix (artifacts), so one build serves both.

Worth knowing, because it is a natural thing to copy: **Blueprint does not do
this.** Its `.storybook/main.ts` sets no `base` at all, so it inherits vite's
default of `/` and its own `storybook-static` artifact has the same absolute-URL
problem. This is one of the few places to deliberately not follow it.

**Unverified as of writing.** Storybook's manager and preview iframe both sit at
the root of `storybook-static` and modern vite resolves relative chunks through
`import.meta.url`, so this should hold — but it has not been confirmed against a
real build. Check by opening `index.html` from the `storybook-static` artifact of
a `build-storybook` run: if the page is blank and the network tab shows 404s on
`assets/*`, revert to `STORYBOOK_BASE_PATH: /` and the artifact goes back to
being download-only. Testing this while Chromatic is switched off is deliberate:
nothing depends on the built output yet.

## Test results

The `test` and `storybook-interaction-tests` jobs emit JUnit XML, which gives
CircleCI a Tests tab with individual test names and durations, surfaces failures
at the top of the job instead of buried in ~38 packages of console output, and
enables flaky-test detection. A failing run is exactly when the report is worth
having, so both jobs are arranged to upload before anything fails the job.

**That arrangement is not `when: always`, and it cannot be.** CircleCI's schema
allows `when` on `run` and on `save_cache`, but `store_test_results` and
`store_artifacts` declare `additionalProperties: false` and do not accept it.
`circleci config validate` passes it through regardless, so the mistake is
silent — the editor's YAML schema is the only thing that catches it. Instead the
test step records its exit code, the upload steps run, and a final step re-raises
it:

```yaml
- run:
    name: Run …
    command: |
      set +e
      <the test command>
      status=$?
      echo "$status" > /tmp/test-exit-code
- run: { name: Collect JUnit reports, when: always, command: … }
- store_test_results: { path: /tmp/test-results }
- run:
    name: Fail the job if the tests failed
    command: exit "$(cat /tmp/test-exit-code 2>/dev/null || echo 1)"
```

The `when: always` on the collect step is legitimate — that one is a `run`.

Four things make it work, and all four are load-bearing:

- **The reporter is configured per package, not passed on the command line.**
  Each `vitest.config.mts` sets
  `reporters: process.env.CI ? ["default", "junit"] : ["default"]` plus
  `outputFile`, generated by the `fileContents` rule for `vitest.config.mts` in
  `.monorepolint.config.mjs`. Change the generator and run `mrl check --fix`, not
  the 80-odd files. `@osdk/maker` is in that rule's `excludePackages` and is kept
  in sync by hand.

  **This must never move back into a `turbo run test -- …` passthrough.** Turbo
  folds passthrough arguments into its **global** hash, so passing them makes
  every task in the run a cache miss, not just `test`. When that was the
  mechanism, the test job discarded the build job's entire cache and rebuilt the
  whole graph inside the test container, where the transpiles then failed and
  took ~30 test suites down with them. `turbo run test --dry=json` with and
  without the args shows all 321 task hashes changing.
- **`turbo.json` declares `"env": ["FORCE_COLOR", "CI"]`** on `test`. `CI` is
  hashed because the config above switches on it; without it a cache entry
  created locally (no XML) could be restored in CI and the upload would be
  silently empty.
- **`turbo.json` declares `"outputs": ["reports/**"]`** on `test`. Without it a
  cache hit replays the logs and writes no file, and the upload is silently
  empty. Verified both ways.
- **`reports/` is gitignored.** Turbo folds untracked, non-ignored files into a
  package's input hash, so leaving the XML visible makes every test task a cache
  miss on the run after it emits a report. Also verified.

Packages without a `vitest.config.mts` emit no JUnit: the 15 `examples/*`
packages, and the four `tests/verify-*` packages whose `test` script is `webpack`
or `node ./lib/test.js` rather than vitest. Nothing is lost there, and it is why
the reporter cannot be a blanket command-line flag: webpack rejects
`--reporter=junit` outright.

### Coverage

Coverage rides on the **Node 24 leg of the existing matrix**, rather than a
separate job running the suite a second time. `scripts/coverage/collect.sh` (the
local tool, from #3717) has to `turbo run test --force` because coverage output
was not a declared turbo output, so a cache hit wrote no files. `turbo.json` now
declares `coverage/**`, which removes that constraint here and would let
`collect.sh` drop its `--force` too.

It is switched on with `COVERAGE=true`, read by the vitest configs, for the same
reason the JUnit reporter is: a `--` passthrough would put it in turbo's global
hash. `COVERAGE` is in the `test` task's `env`, so the coverage leg gets its own
cache namespace and a non-coverage cache entry can never be restored into it.
Measured: `COVERAGE=true` changes 112 task hashes, all of them `test`.

Only one leg runs it. The tests are identical on all four, so the other three
would just pay the v8 overhead again for the same numbers.

**There are two reports, not one.** With no separate merge job, each container
merges what it ran: container 0 is everything except `@osdk/react-components`,
container 1 is only that. They upload to `coverage/container-0` and
`container-1`. Combining them into a single number needs the separate job that
was deliberately skipped.

Two caveats. `@osdk/example-generator` is kept in, unlike in `collect.sh`, which
excludes it because its only test is a codegen-drift check that calls
`process.exit` — that can stop v8 flushing its coverage file, so if that package
is missing from the report, that is why. And **no thresholds are configured
anywhere**, so this cannot fail a build; it is a downloadable report until
someone sets them.

`scripts/collect-test-results.sh` gathers the per-package reports into one
directory, because `store_test_results` takes a path rather than a glob. On the
way through it prefixes each `classname` with its package: vitest sets classname
to the package-relative file path, and 13 paths are duplicated across packages
(`src/junk.test.ts` is in both `@osdk/api` and `@osdk/version-updater`).
Unprefixed, CircleCI would merge unrelated tests and flaky detection would read
"passed here, failed there" as one flaky test.

Note pnpm 10 does **not** forward arguments after a `--` separator, so the
Storybook invocation passes them directly after the script name.

## Prerelease tarballs

**Trial.** The `pack` job runs `scripts/pack-packages.sh`, which packs all 47
publishable packages into `.tgz` files plus a `manifest.json`, and stores them as
the `packages` artifact. A consumer can then smoketest an unreleased change
without waiting for a release: download the tarball and point `pnpm.overrides` at
it with the `file:` protocol.

This is the CI half of what `foundry/wizardry`'s `wizard-prerelease` CLI does for
Blueprint, whose `store-packages` job is the same idea. The client half — query
the CircleCI API for artifact URLs, rewrite `pnpm.overrides` — is deliberately
**not** built yet. It is scriptable in the consuming repo, and it is worth
learning from a few manual uses whether a CLI earns its maintenance.

**It packs everything, on purpose.** Picking a subset is the client's job: it
knows which dependencies it actually wants to override, and `manifest.json` plus
CircleCI's per-file artifact API let it download only those. Scoping here — to
changed packages, say — would be cheaper, but it risks the one tarball a consumer
needs not existing, and a missing artifact is a much worse failure than a large
one.

`manifest.json` exists so the client never has to parse a filename:

```json
{
  "schemaVersion": 1,
  "source": {
    "repository": "…",
    "branch": "…",
    "sha": "…",
    "buildNumber": "…"
  },
  "packages": [
    { "name": "@osdk/client", "version": "…", "file": "osdk-client-….tgz" }
  ]
}
```

That matters more here than it would for Blueprint. `wizard-prerelease` recovers
a package name with `basename(tgz).split("-")[1]`, which works only because no
Blueprint package name contains a hyphen. Plenty of ours do —
`@osdk/generator-converters`, `@osdk/vite-plugin-oac`, `@osdk/foundry-sdk-generator`
— so `osdk-generator-converters-1.2.3.tgz` would resolve to `@osdk/generator`:
the wrong package, silently, with no error. Any client for this must read the
manifest rather than reimplement that split.

Two things make this work, and the first is easy to get wrong:

- **It packs at the current versions.** Nothing runs `changeset version` first.
  Each tarball's dependency ranges therefore still point at versions that exist
  on npm, so a consumer overrides only the packages they actually changed —
  usually one or two. Pack _after_ a version bump and every workspace dependency
  points at an unpublished version, forcing an override for all 47. This is why
  the step cannot live in `e2e`, which versions before it publishes.
- **It runs `transpile transpileTypes` first**, as a cache hit off `build`. Every
  publishable package's `files` field ships `build/{esm,cjs,browser,types}`, so
  without that the tarballs would be empty shells. The script fails loudly on a
  missing `build/` rather than producing publish-shaped garbage.

`pack` is deliberately not in `ci-all`'s `requires`: it is a trial, and `e2e`
already proves the packages are publishable.

What to watch on the first runs: **total artifact size**, which the script
prints. Forty-seven tarballs on every PR may not be worth keeping. If it is too
much, the fix is scoping to changed packages via `scripts/is-affected.sh` —
correct as well as cheaper, since an unchanged package's published version is
identical to the packed one.

The better answer, if it ever comes back, is the snapshot release in
`.github/workflows/release.yml`: real versions on the registry resolve normally
and need no overrides at all. Tarballs are the fallback for while that is off,
and they have one advantage it can never have — they work for fork PRs, which
cannot have publish credentials.

## Asking "did this change?"

Two different questions, two different tools, and mixing them up causes real
bugs:

- **"Which files changed?"** — `scripts/changed-files.sh`. Use it for questions
  genuinely about paths: did anyone touch CI config, did the lockfile move
  without a manifest. `fork-guard` and the infra-change detection use this.
- **"Does this package need rebuilding or retesting?"** — `scripts/is-affected.sh`,
  which asks turbo's package graph via `--filter='<pkg>...[<ref>]'`. A path
  pattern is transitively blind: a change to `@osdk/client` reaches a story
  through imports, and no glob over `packages/react-components*` would ever see
  it. `storybook-interaction-tests` uses this.

Both build on `scripts/base-ref.sh` and both fail open — an unresolvable base
means do the work, because skipping a job we needed is far worse than running
one we did not.

Worth knowing: any root-level file change (including `.circleci/**`) marks
turbo's root package `//` as changed. That is harmless for the scoped filter
above, but a bare `--affected` would behave surprisingly on a CI-config PR.

## Notes on the mirror

Where CircleCI has no direct equivalent of an Actions feature:

| Actions                                       | Here                                                                                                                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github.event.pull_request.base.sha`          | `scripts/base-ref.sh`, which resolves the merge-base with `main` (and deepens a shallow clone if it has to). Exits 2 when it cannot, and every caller fails open. |
| `if:` job conditions on event payload         | In-job guards that call `circleci-agent step halt`, which ends the job **successfully**. That keeps `ci-all` reachable.                                           |
| Job `outputs` (`build.outputs.infra_changed`) | `build-apps` re-runs the same cheap `git diff` rather than threading a value between jobs.                                                                        |
| `services:` container                         | A second image in the job's `docker:` list (`e2e` + verdaccio), plus an explicit readiness poll.                                                                  |
| Matrix `node-version: 18`                     | `cimg/node:18.20`. Not `cimg/node:18` — see "Node image tags" below.                                                                                              |
| `actions/cache` `restore-keys`                | `restore_cache` with an ordered `keys:` list. The scoped-turbo-cache fallback chain is the same as `ci.yml`'s.                                                    |

`chromatic` is invoked with a pinned `pnpm dlx chromatic@<version>` rather than a
devDependency. Adding it to `package.json` made pnpm re-resolve enough of the
workspace to pull ~1000 lines of unrelated version drift (including
`@osdk/foundry.*` 2.60 → 2.71) into the lockfile. That bump deserves its own PR.

### Node image tags

**`cimg/node` publishes no bare major tags.** `cimg/node:24` is a 404, not a
float to the newest 24.x. The tag list has `24.19`, `24.19.0`, `lts`, `current`
and `-browsers` variants, and nothing matching `^\d+$`.

This is the one place where reasoning by analogy from Actions actively misleads.
`actions/setup-node` takes `node-version: 24` and _resolves_ it to the newest
24.x, because it is a version resolver. A Docker tag is a literal string that
either exists or does not. The first version of this config assumed the former
and every job failed to pull its image.

So the matrix pins `MAJOR.MINOR` (`18.20`, `20.20`, `22.23`, `24.19`), which is
the coarsest tag that exists and still floats across patch releases. Two things
follow:

- These go stale at the minor boundary: `24.19` never becomes `24.20`. Bumping
  is manual, and there is no Renovate config in this repo to do it for us.
- The `test` job picks the Node 18 package excludes with a `case` on the major
  (`18 | 18.*`) rather than an equality test. An equality test against `"18"`
  would silently stop matching the moment the pinned minor moved, and the Node
  18 leg would start trying to run the Vite 7 and Storybook packages that need
  Node 20+.

Blueprint pins exact patches (`cimg/node:24.14.1`). That is the more
deterministic option and the alternative if a floating patch ever turns CI red
on its own.

### Why the infra list is short

`detect-infra-changes` sets `--force` on a much shorter file list than the
equivalent step in `.github/workflows/ci.yml`. This is the one place the mirror
is deliberately thinner, because forcing costs a full cold build of the monorepo
and most of that list buys nothing.

Each entry was measured by taking a `turbo run transpileEsm --dry=json` hash,
touching the file, and re-taking it:

| File                                 | Verdict                                                                                                                                                                                                                                                    |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `turbo.json`                         | Dropped. In turbo's global hash: editing the `lint` task changed `transpileEsm`'s hash.                                                                                                                                                                    |
| `package.json`                       | Dropped. In turbo's global hash.                                                                                                                                                                                                                           |
| `babel.config.mjs`                   | Dropped. In turbo's global hash.                                                                                                                                                                                                                           |
| `dprint.json`                        | Dropped. Already the declared `inputs` of the `//#dprint` pseudo-task, which `lint` depends on.                                                                                                                                                            |
| `config/tsconfig.base.json`          | Dropped. **This path does not exist** and never has. The shared tsconfig is `packages/monorepo.tsconfig/`, reached through the `@osdk/monorepo.tsconfig#typecheck` dependency that the transpile tasks already declare. The same dead path is in `ci.yml`. |
| `.circleci/config.yml`               | Dropped. CI plumbing cannot change build output. Keeping it meant every CI-config PR paid a full cold build, which is most of this branch's history.                                                                                                       |
| `.github/workflows/{ci,release}.yml` | Dropped, same reason.                                                                                                                                                                                                                                      |
| `pnpm-lock.yaml`                     | **Kept.** A dependency change is the case where a stale cache is genuinely dangerous.                                                                                                                                                                      |
| `pnpm-workspace.yaml`                | **Kept.** Defines the package set and the catalog versions.                                                                                                                                                                                                |

The two kept entries are the conservative choice rather than a measured one: a
whitespace touch cannot prove anything about a file turbo parses semantically
rather than hashing byte-wise, so the probe above is inconclusive for them.

`build-apps` no longer calls `detect-infra-changes` at all. It requires `build`
and gets that job's freshly-built turbo cache through the workspace, so forcing
made it rebuild the ~684-task transpile graph `build` had just produced, in a
second container. `turbo run build` schedules 797 tasks, of which only 27 are
real build scripts; the rest are that transpile graph plus task nodes with no
script behind them.

## Performance shape

Resource classes are deliberate, not uniform:

| Class  | Jobs                                                                                                 | Why                                                                                           |
| ------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| xlarge | `build`, `typecheck`, `lint`, `build-apps`, `test` ×4 (×2 containers), `storybook-interaction-tests` | Genuinely parallel work. `lint` is here because oxlint/oxfmt are Rust and scale across cores. |
| large  | `install`, `e2e`, `bundle-size`, `build-storybook`                                                   | I/O bound, or single-threaded at the point that matters (Rollup's bundle phase).              |
| medium | `changesets`, `cspell`                                                                               | Short, mostly single-task.                                                                    |
| small  | `chromatic`, `fork-guard`, `ci-all`                                                                  | An upload, a `git diff`, and an `echo`.                                                       |

Four things keep the cost down:

- **One install.** `install` is the only job that runs `pnpm install`; every
  other job attaches `node_modules` from the workspace. That trades a ~1.1 GB
  upload for fifteen fewer installs. The one exception is `bundle-size`, which
  must reinstall against the base commit's lockfile.
- **The turbo cache travels through the workspace.** `build` persists
  `.turbo/cache`, so downstream jobs get _this_ pipeline's artifacts instead of
  guessing at an earlier pipeline's cache key. The `save_cache`/`restore_cache`
  chain stays for cross-pipeline warmth.
- **The `bundle-size` base measurement is cached** on the base commit SHA. It is
  identical for every push to a PR, so only the first push pays for the base
  rebuild.
- **`storybook-interaction-tests` pays for Chromium once.** Installing it was
  one of the longest steps in the pipeline, and it is two costs, not one:
  `--with-deps` runs `apt-get` for the system libraries, and `playwright install` downloads Playwright's own pinned Chromium build. Removing only one
  of them leaves the step slow. The job runs on `cimg/node:24.19-browsers`,
  whose system libraries let the `--with-deps` flag go, and caches
  `~/.cache/ms-playwright` on the lockfile checksum, which is what pins the
  playwright version. On a cache hit the install step just verifies and exits.

  The tradeoff to watch: `-browsers` is a much larger image, so on a host that
  has not cached it the pull can eat the saving. If the job's image-pull line
  grows by more than the install step shrank, keep the cache and go back to the
  plain image with `--with-deps`; the cache is the half that always pays.

  This is also the answer to "should these long jobs use `parallelism`?". A job
  costs `F + D/N`: fixed setup plus divisible work over N containers. Splitting
  only pays when the divisible part dominates, and `parallelism` duplicates the
  setup — including the ~1.1 GB workspace attach — on every container. For this
  job the Chromium install was fixed cost, so removing it beats splitting it.
  `e2e` is a worse candidate still: only `pnpm publish -r` is divisible, while
  `changeset version` rewrites every manifest in one pass and would have to run
  identically on each container.

Against that, one deliberate cost increase: the `test` job runs
`parallelism: 2`, so the matrix is 8 containers rather than 4. Container 1 runs
`@osdk/react-components` alone. That suite is large enough that competing with
the other ~80 test processes starves its vitest main thread and trips the worker
RPC timeout; the Actions workflow works around it by running it serially after
everything else. Its own container removes the contention outright and runs it
concurrently. If the extra containers prove too expensive, the lever is moving
that half into its own job so it can take a smaller resource class — with
`parallelism` every container in a job shares one class.

Two known costs of that shape, both accepted:

- `chromatic` attaches the whole workspace (attach is all-or-nothing) despite
  needing only `storybook-static`. If that dominates its runtime, give it a
  separate workspace root rather than reinstalling.
- A single install serves all four Node legs of the test matrix. Safe here
  because the native dependencies are N-API, whose ABI is stable across Node
  majors; `canvas` is the one node-gyp package whose prebuild is Node-version
  specific, and nothing imports it. A "cannot load native module" failure on one
  matrix leg would mean that assumption broke.

## Possible follow-ups

- Persist the raw `packages/*/build` directories and drop the `turbo run transpile transpileTypes` restore step from consumer jobs entirely. Not done
  yet because `transpile` dependsOn `codegen`, whose generated sources turbo
  does not cache — validating that nothing goes missing needs a real run.
- Run the full Node matrix only on `main` and just 18 + 24 (the supported
  boundaries) on PRs. Halves the matrix cost, but it is a real coverage
  reduction.
- Split the base-branch build out of `bundle-size` so the two measurements can
  run concurrently instead of one after the other.

## Validating changes to this config

```sh
circleci config validate .circleci/config.yml   # needs `circleci auth login`
circleci config process .circleci/config.yml    # shows the expanded graph
shellcheck .circleci/scripts/*.sh
```
