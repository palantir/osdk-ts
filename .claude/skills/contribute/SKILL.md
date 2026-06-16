---
name: contribute
description: Streamlined workflow for fixing a bug or adding a feature to an existing component or hook in @osdk/react or @osdk/react-components. Use when the user says "fix a bug", "fix <X>", "patch <X>", "add a feature to <X>", "extend <X>", or otherwise wants to change behavior, API, or visuals of code already shipped from one of these two packages. Layers a repro/regression-test gate (bug fixes), an API-change checkpoint (features that touch the public surface), and a verification loop on top of each package's CONTRIBUTING.md and CLAUDE.md.
user-invocable: true
---

# Contribute to `@osdk/react` or `@osdk/react-components`

Lightweight playbook for **bug fixes** and **feature additions to existing components or hooks** in `packages/react` and `packages/react-components`. If preflight discovers the target is greenfield, `/contribute` hands off to `add-new-component` (for `@osdk/react-components`) or continues here on the feature path (for `@osdk/react` hooks) — see Step 0.

**Source of truth:** `packages/react-components/CONTRIBUTING.md`, `packages/react/CONTRIBUTING.md`, `packages/react-components/CLAUDE.md`, `packages/react/AGENTS.md`, and the repo-root `CLAUDE.md`. This skill does **not** restate them — if anything here conflicts, those win and you should flag it.

## What to expect

Before doing anything else, **post a short orientation message** to the user so they know how this skill will pace the work. Adapt the wording, but the substance must cover:

> Here's how `/contribute` will run. There are **four checkpoints** where I'll stop and wait for you:
>
> 1. **Scope** (right now) — I'll restate package, change type, target file(s), and your repro / MVP, and ask you to confirm or correct in one prompt.
> 2. **[Bug fix only] Failing test** — after I write a failing Vitest that captures the bug, I'll show you the failing output and ask you to confirm it reproduces _the_ bug you reported.
> 3. **[Feature only, if the public API changes] API approval** — I'll draft the new/changed `<Name>Api.ts` (or hook signature) and ask you to pick between 2–3 design alternatives.
> 4. **Ship** — once tests, lint, transpile, and the `review` + `security-review` skills are green, I'll ask you what to stage / commit / push / open as a PR. Commit, push, and PR each require their own explicit approval (this is firm — no auto-shipping).
>
> Between checkpoints I'll run heads-down: write the test, make the fix or build the feature, update touched stories / peopleapp / docs, run the verification loop. I'll post short status updates but won't pause.
>
> If at any point you want to bail, say so — I'll leave your branch as-is.

Then proceed to Step 0.

## Git policy

Ask before every git/gh action that mutates state (`git commit`, `git push`, `gh pr create`, edits to a PR). A "yes" once does not extend to the next action. This is intentional friction — local commits are reversible, pushes are not.

## Step 0 — Preflight (one consolidated check-in)

**Infer what you can from the user's opening prompt.** If they said "fix the off-by-one in `ObjectTable` virtualization", you already know package, change type, and target. Don't re-ask.

What you need to lock in before touching code:

- **Package** — `@osdk/react` (hooks) or `@osdk/react-components` (UI).
- **Change type** — bug fix or feature addition.
- **Target file(s)** — the source file(s) under `src/`. Read them.
- **Repro (bug) or MVP (feature)** — the smallest reproducer (prop values, steps, expected vs actual) or the feature checklist.
- **Triviality (bug fixes only)** — is this a one-liner (typo, obvious null check, off-by-one with a clear repro)? Affects Step 3 only — see "Fast path" below.
- **API impact (features only)** — does the change touch `<Name>Api.ts`, OSDK wrapper props, exported hook signatures, or types in `src/public/`?
- **Branch** — `<your-initials>/<short-description>` off `main`, or stay on the current feature branch.

Present whatever you inferred via a **single** `AskUserQuestion` for the user to confirm or correct. Only ask follow-ups for items genuinely ambiguous.

**If the target doesn't exist yet**, branch by package:

- **`@osdk/react-components` (new component)** — auto-hand-off. State in one sentence that this is greenfield component scaffolding, then invoke `add-new-component` via the `Skill` tool and stop. Do not run any further `/contribute` steps — that skill owns the workflow from there.
- **`@osdk/react` (new hook)** — there is no scaffolding skill for hooks. Continue in `/contribute` and treat it as a feature addition: the API-change checkpoint in Step 1 covers the new hook signature, and `packages/react/CONTRIBUTING.md` "Adding a New Hook" is the source of truth for placement and conventions. Tell the user you're proceeding on the feature path in your scope check-in.

## Step 1 — Plan the change

Approval before implementation. One checkpoint per path.

### Read the relevant package docs first

Before drafting the test or the API, read the package's contribution docs (you can skim if you've read them recently this session, but don't skip):

- `@osdk/react-components` → `packages/react-components/CONTRIBUTING.md` and `packages/react-components/CLAUDE.md`
- `@osdk/react` → `packages/react/CONTRIBUTING.md` and `packages/react/AGENTS.md`

Those are the source of truth for architecture, API design, testing, and styling rules. The rest of this step assumes you've read them — it tells you _what to do_ in this skill, not _what the rules are_.

### [Bug fix] Failing-test gate — required, even for trivial fixes

Bug fixes always start with a failing Vitest test. The test is the contract; without it the fix can't be verified and produces no regression coverage.

1. **Find the existing test file** for the affected source (`<X>.test.ts(x)` under `__tests__/`). Append a nested `describe` block — never split into a new file.
2. **Write one minimal assertion** that captures the broken behavior.
   - `@osdk/react` hooks → `renderHook` from `@testing-library/react`.
   - `@osdk/react-components` → test the Base layer unless the bug is in the wrapper.
3. **Run it and confirm it fails for the right reason** (not a typo, missing import, wrong selector):
   ```sh
   pnpm --dir packages/react-components vitest run <path>
   # or
   pnpm --dir packages/react vitest run <path>
   ```
4. **Checkpoint — repro confirmed.** Present the failing assertion via `AskUserQuestion` with `preview`. Options: **Confirm** / **Adjust** / **Cancel**.

### [Feature] API-change checkpoint — only when the public surface changes

If preflight flagged no API impact, skip to Step 2. The change is internal.

If the surface changes:

- **`@osdk/react-components`** — open `<Name>Api.ts` and follow `CONTRIBUTING.md` "API Design" and `CLAUDE.md` "API Design".
- **`@osdk/react`** — the hook signature _is_ the API. Follow `packages/react/CONTRIBUTING.md` and `AGENTS.md`. Reusable OSDK-aware hooks belong in `@osdk/react`; component-internal hooks stay in `hooks/`.

**Checkpoint — API approval.** Present the surface delta via `AskUserQuestion`, with the new/changed interface in the `preview` field. Offer 2–3 named alternatives where a real design choice exists (controlled-vs-uncontrolled scope, slot placement, naming).

## Step 2 — Implement

No checkpoint in this step — implement straight through.

1. **Transpile deps once per session** if you haven't:
   ```sh
   pnpm --filter @osdk/react-components transpileAllDeps
   # or
   pnpm --filter @osdk/react transpileAllDeps
   ```
2. **Make the focused change.**
   - **[Bug fix]** smallest diff that turns the failing test green. No surrounding cleanup — a bug fix doesn't need it (repo-root `CLAUDE.md` "Doing tasks").
   - **[Feature]** Base layer first; OSDK wrapper only if data plumbing changes. Apply `CLAUDE.md` "OSDK Component Architecture", "Reuse before writing", and "CSS Styling".
3. **Re-run the file's tests.** Step 1's failing test must now pass; nothing adjacent should regress. This pass is a **precondition for Step 3** — don't move on until it's green.
4. **Touch peripheral surfaces only where the change actually breaks them.** A typo fix doesn't need a story update; a new prop usually needs one. Skip if untouched:
   - Storybook story
   - peopleapp wiring (only if observable against real Foundry data)
   - `docs/<Name>.md` (only if usage examples or props changed)
   - `docs/CSSVariables.md` (only if new CSS variables were added)

**Bug-fix escape hatch:** if the fix surprises you by touching the public API surface, stop and switch to the feature path — don't improvise the API checkpoint.

## Step 3 — Verify

### Fast path — trivial bug fixes

If preflight flagged the bug as trivial (one-liner with a clear repro) and the Step 1 test is green, you may **skip Storybook/peopleapp exercise**. The regression test is the verification. Mention this choice to the user in your status update.

### Full path — everything else

1. **`@osdk/react-components` UI changes** — open the affected Storybook story:
   ```sh
   pnpm --filter @osdk/react-components-storybook transpileAllDeps
   pnpm --filter @osdk/react-components-storybook dev
   ```
   Default URL: `http://localhost:6006`. Drive with `@playwright/cli` if headless.

   **Story must load with no runtime errors.** "Storybook ready!" only means Vite is serving — the story compiles on visit. Hit `http://localhost:6006/iframe.html?id=<story-id>` and check the response doesn't contain `sb-errordisplay` or `Cannot find module`.

2. **Real-Foundry-data behaviors** (server-side filtering, pagination, real object shapes) — exercise in `packages/e2e.sandbox.peopleapp`:
   ```sh
   pnpm --filter @osdk/e2e.sandbox.peopleapp transpileAllDeps
   pnpm --filter @osdk/e2e.sandbox.peopleapp dev
   ```

3. **`@osdk/react` hook changes** — the Vitest assertion usually covers it. Reach for peopleapp only if the behavior requires a live observable client.

4. **Exercise the checklist.**
   - **[Bug fix]** reproduce the original steps; confirm the bug is gone and adjacent behavior is intact.
   - **[Feature]** walk each MVP item; verify against any reference provided.

5. **If anything is off**, return to Step 2.

## Step 4 — Ship

Run in order. Stop and fix if anything fails. **Git policy applies** — every git/gh write is a fresh `AskUserQuestion`.

1. **Per-package check is green:**
   ```sh
   pnpm turbo check --filter=@osdk/react-components
   # or
   pnpm turbo check --filter=@osdk/react
   ```
   If lint fails: `pnpm --dir <package> fix-lint`, then re-check.

2. **Add a changeset** (repo-root `CLAUDE.md` "Changesets"):
   - **[Bug fix]** → `patch`.
   - **[Feature]** → `minor`.
   - **Breaking API change** → `major` (rare for `experimental/` exports). Surface the rationale to the user first.
   - One per branch — `ls .changeset/` first to avoid duplicates.
   - Specific summary: "fix off-by-one in `ObjectTable` row-virtualization at page boundaries" or "add drag-and-drop reordering to `FilterList`" — not "fix ObjectTable".

3. **Format changed files only:**
   ```sh
   git ls-files --modified --others --exclude-standard | xargs npx dprint fmt
   ```
   Never bare `npx dprint fmt` — it reformats the entire repo.

4. **Cross-package transpile:**
   ```sh
   pnpm turbo transpile
   ```

5. **API report refresh** — required if the public API surface changed. If a bug fix changed exports, **stop and re-evaluate** first. Otherwise:
   ```sh
   pnpm turbo check-api --filter=@osdk/<package>
   ```
   Commit the updated `etc/<package>.report.api.md`.

6. **Review fan-out** — invoke `review` and `security-review` skills in parallel (one message, two `Skill` calls). Consolidate findings into one edit pass. If critical findings remain after a second pass, escalate via `AskUserQuestion`.

7. **Final checkpoint — you decide what gets staged, committed, pushed.** Present modified files and a one-line review summary via `AskUserQuestion`. For commit messages and PR bodies, render candidates inline via the `preview` field.

   Options:
   - **Stage all** — `git add` everything (no commit)
   - **Stage selected** — pick a subset
   - **Commit** — propose the message via a separate `AskUserQuestion` with `preview`; only `git commit` after explicit approval. Bug-fix messages should name the symptom and root cause; feature messages should lead with the user-visible behavior.
   - **Push** — only after explicit approval, separate from commit
   - **Open PR** — only after explicit approval; propose title and body via `AskUserQuestion` with `preview`. Bug-fix PRs should include the repro and how the regression test prevents recurrence; feature PRs should restate the MVP checklist with check marks.
   - **Leave unstaged** — bail out

   For every subsequent commit on the same branch (PR feedback, follow-ups), ask again. Push new commits — don't force-push during review.
