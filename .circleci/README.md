# CircleCI

This pipeline runs the pull-request CI **alongside** the GitHub Actions workflows
in `.github/workflows/`. Nothing here has been removed from Actions, and nothing
here publishes: releases stay on `release.yml`.

The config was modeled on [palantir/blueprint]'s, which is the closest
Palantir-run precedent for a pnpm monorepo on CircleCI.

[palantir/blueprint]: https://github.com/palantir/blueprint/blob/develop/.circleci/config.yml

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
- The `storybook-static` artifact is stored for download, but you cannot browse
  it in place — it is built with `STORYBOOK_BASE_PATH=/` for Chromatic, so its
  asset URLs are absolute. The Actions gh-pages preview is unchanged and still
  serves that need.

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
| Matrix `node-version: 18`                     | `cimg/node:18`. Major-only tags float to the latest patch, which is what `actions/setup-node` already does.                                                       |
| `actions/cache` `restore-keys`                | `restore_cache` with an ordered `keys:` list. The scoped-turbo-cache fallback chain is the same as `ci.yml`'s.                                                    |

`chromatic` is invoked with a pinned `pnpm dlx chromatic@<version>` rather than a
devDependency. Adding it to `package.json` made pnpm re-resolve enough of the
workspace to pull ~1000 lines of unrelated version drift (including
`@osdk/foundry.*` 2.60 → 2.71) into the lockfile. That bump deserves its own PR.

## Performance shape

Resource classes are deliberate, not uniform:

| Class  | Jobs                                                                                                 | Why                                                                                           |
| ------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| xlarge | `build`, `typecheck`, `lint`, `build-apps`, `test` ×4 (×2 containers), `storybook-interaction-tests` | Genuinely parallel work. `lint` is here because oxlint/oxfmt are Rust and scale across cores. |
| large  | `install`, `e2e`, `bundle-size`, `build-storybook`                                                   | I/O bound, or single-threaded at the point that matters (Rollup's bundle phase).              |
| medium | `changesets`, `cspell`                                                                               | Short, mostly single-task.                                                                    |
| small  | `chromatic`, `fork-guard`, `ci-all`                                                                  | An upload, a `git diff`, and an `echo`.                                                       |

Three things keep the cost down:

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
- Emit JUnit XML and wire up `store_test_results` for CircleCI's test summary,
  flaky-test detection, and per-test timings. Cheaper than it looks: every
  package's `test` script is a bare `vitest run`, so turbo's argument
  passthrough covers all of them at once with no package changes —

  ```sh
  pnpm exec turbo run test -- --reporter=default \
                              --reporter=junit \
                              --outputFile.junit=reports/junit.xml
  ```

  Each package writes into its own `reports/`, and local `pnpm test` never
  passes those flags, so developer runs are unaffected. The catch is that
  `turbo.json`'s `test` task declares no `outputs`, so on a cache hit the XML
  would not be materialized and `store_test_results` would silently upload
  nothing. It needs `"outputs": ["reports/**"]` first.

## Validating changes to this config

```sh
circleci config validate .circleci/config.yml   # needs `circleci auth login`
circleci config process .circleci/config.yml    # shows the expanded graph
shellcheck .circleci/scripts/*.sh
```
