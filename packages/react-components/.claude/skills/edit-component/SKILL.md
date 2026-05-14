---
name: edit-component
description: Opinionated workflow for editing an existing component in @osdk/react-components — either fixing a bug or adding a new feature. Use when the user says "fix a bug", "add a feature to <component>", "patch <component>", "extend <component>", or otherwise wants to change behavior, API, or visuals of a component that already exists in this package. Layers AI-driven gates (repro/MVP checkpoint, API-change review when surface changes, verification loop) on top of CONTRIBUTING.md.
user-invocable: true
---

# Edit an existing `@osdk/react-components` component

Operational playbook for modifying an existing component in `packages/react-components` — bug fixes or feature additions. Use whenever a user asks to change behavior, API, or visuals of a component that is already shipped in the package.

If the user is **scaffolding a brand-new component**, use [`add-new-component`](../add-new-component/SKILL.md) instead.

This skill is a **companion** to [`packages/react-components/CONTRIBUTING.md`](../../../CONTRIBUTING.md) and [`packages/react-components/CLAUDE.md`](../../../CLAUDE.md). Those documents are the canonical source of truth for engineering rules, API design, styling, testing, Storybook conventions, and metrics. This skill **does not restate them** — it cites them and layers AI-driven structure on top:

1. A **scope checkpoint** — agree on _which_ component, _which_ files, and _what_ "done" looks like before editing.
2. A **failing-test-first gate for bug fixes** (TDD) — the repro becomes the regression test before the fix lands.
3. An **API-change review** when the change touches the public surface — same `<Name>Api.ts` rules as `add-new-component`, but only triggered when the diff actually changes props or exported types.
4. **Parallel fan-out only on ripples** — Storybook, tests, peopleapp, and docs are updated by sub-agents in parallel _only when_ the change affects them. A typo fix doesn't need fan-out; a new prop usually does.
5. **Named user checkpoints** — explicit `AskUserQuestion` gates at scope agreement, API-change approval (when applicable), and final review. Use the `preview` field on options to render code or markdown previews; multiple-choice with previews collapses each iteration into a single tool call.
6. A **verification loop** that exercises the bug repro or new-feature checklist in a real browser and backports findings as Vitest regression coverage. The agent runs this **automatically** after Step 2 — it does not stop and wait for the user to ask.
7. A **review fan-out** before pushing — invoke the official `review` and `security-review` skills in parallel and consolidate findings into one edit pass.

If this skill conflicts with `CONTRIBUTING.md` or `CLAUDE.md`, **those win** — flag the conflict to the user.

## Git policy

Ask the user before every git/gh action that mutates remote state (`git commit`, `git push`, `gh pr create`, edits to a PR). A "yes" once does not extend to the next action.

## Preflight — before touching any code

Ask the user, in order. Do not skip.

1. **Change type.** Is this a **bug fix** or a **new feature**? The two paths diverge slightly:
   - **Bug fix** → expect a repro (Step 1 writes a failing test first; changeset is `patch`).
   - **New feature** → expect an MVP checklist (Step 1 reviews API surface if it changes; changeset is `minor`).
   - If unclear, ask. Don't guess from the description.
2. **Target component(s).** Which component(s) in `src/` are affected? Confirm by reading the component folder before continuing. If the user names a component that doesn't exist, suggest `add-new-component` instead.
3. **Repro or MVP.**
   - **Bug fix** — ask for repro steps: prop values, user actions, expected vs actual behavior. If a Storybook story or peopleapp page reproduces it, capture the URL. **Do not start fixing without a repro** — a fix without a repro can't be verified and has no regression test.
   - **New feature** — spell out the MVP feature list. This is the checklist Step 3 verifies against.
4. **API impact gate.** Does the change touch the **public API surface** (`<Name>Api.ts`, props exposed by the OSDK wrapper, or types exported from `src/public/`)?
   - **No** → skip Step 1's API-change branch; go straight to "Plan the implementation".
   - **Yes** → Step 1 walks through API design with the same rigor as `add-new-component`. Re-read `CLAUDE.md` "API Design" before drafting.
5. **Visual reference** (optional). If the change is visual, ask for a Figma URL, screenshot, or reference component. If a Figma URL is provided, use **figma-mcp** to read it during Step 3.
6. **Branch.** Confirm or create a branch named `<your-initials>/<short-description>` off `main` (`CONTRIBUTING.md` "Branch Naming"). If the user is already on a feature branch for this work, stay on it.

## Reference analysis — only when relevant

Reference analysis is **conditional**, unlike `add-new-component` which always runs it:

- **Bug fix with a Storybook/peopleapp repro URL** → use `playwright-cli` to capture the buggy state during Step 3, but skip source-resolution analysis (the source is _this_ repo, which we already have).
- **New feature with an external reference** (another codebase, Figma, or pasted code) → run the full reference analysis from `add-new-component` "Reference analysis" section. Spawn an `Explore` sub-agent and parallelize visual capture.
- **Pure internal change** (refactor, bug fix without external reference) → skip reference analysis entirely.

When reference analysis runs, follow the same source-resolution probe order and sub-agent prompt as `add-new-component`. Don't restate the procedure — link callers to that skill for the prompt template.

## Step 1 — Plan the change

The plan is the contract. Get user approval before writing implementation code. Approval happens via `AskUserQuestion` on the working branch; once approved, continue on the same branch into Step 2.

### Step 1a — Bug fix path (failing test first)

1. **Read the affected files.** Identify the Base layer vs OSDK wrapper vs sub-component split. Bugs almost always live in Base or a hook; the OSDK wrapper rarely owns interaction state.
2. **Write a failing Vitest test that reproduces the bug.** Place it in the existing `__tests__/<X>.test.tsx` for the affected component — **append a nested `describe` block, never split into a new file** (`CLAUDE.md` "Testing"). The test must fail _before_ the fix and pass _after_.
3. **Run the test to confirm it fails** for the right reason — not because of a typo or missing import. `pnpm --dir packages/react-components vitest run <path>` is fastest for a single file.
4. **Checkpoint — repro confirmed (named checkpoint #1).** Present the failing test output via `AskUserQuestion`:
   - **Confirm** — the test repros the bug; proceed to fix.
   - **Adjust** — the test repros _a_ bug, but not _the_ bug the user reported; iterate.
   - **Cancel** — the bug doesn't exist as described; surface findings.

   Use the `preview` field to render the failing assertion inline.
5. **Proceed to Step 2 on the same branch.**

### Step 1b — New feature path (API design when surface changes)

1. **If the feature does not change the public API surface** (preflight #4 = no): skip to Step 2. The change is internal — no `<Name>Api.ts` edit, no API approval checkpoint.
2. **If the feature changes the public API surface**: open `<Name>Api.ts` and follow `CLAUDE.md` "API Design":
   - Apply **controlled / uncontrolled / no-default** rules to any new stateful feature. Check `src/object-table/hooks/useRowSelection.ts` as the canonical implementation; mirror its structure.
   - Add **render override slots** (`render*`) only where a consumer would legitimately customize — don't add speculatively.
   - Add **`on*` event listeners** for any new state change with a built-in default behavior.
   - **Default `enable*` flags to `true`** when the feature is part of the out-of-the-box experience.
   - **`@default` JSDoc on every new optional prop.**
   - **Apply the step-down rule** when inserting new types into the file — outer-component props stay at the top, supporting types in declining order of abstraction below.
3. **Checkpoint — API approval (named checkpoint #1).** Present the proposed surface delta via `AskUserQuestion`. **Use the `preview` field on each option to render the new/changed TypeScript interface inline** so the user can compare prop shapes side-by-side in one tool call. Where there is a real design choice (controlled-vs-uncontrolled scope, render-slot placement, prop naming), offer two or three named alternatives.
4. **Proceed to Step 2 on the same branch.** The API and implementation ship together in a single PR at the end of Step 4.

## Step 2 — Implement

Implementation continues on the same branch. No new branch.

1. **Transpile internal deps once** if you haven't this session (`CONTRIBUTING.md` "Development Setup"):
   ```sh
   pnpm --filter @osdk/react-components transpileAllDeps
   ```

2. **Make the focused code change.**
   - **Bug fix** — the smallest diff that makes the failing test pass. Resist the urge to refactor surrounding code (repo-root `CLAUDE.md` "Doing tasks" — bug fix doesn't need surrounding cleanup).
   - **Feature** — implement the Base layer first; the OSDK wrapper changes only if the data plumbing changes. Apply `CLAUDE.md` "OSDK Component Architecture", "Reuse before writing", and "CSS Styling".

3. **Fan-out only on ripples** — in a single message, spawn the sub-agents that the change _actually_ affects. Skip any sub-agent whose surface area is untouched.

   - **Sub-agent A — OSDK wrapper** (`<Name>.tsx`) — only if data plumbing or `withOsdkMetrics` registration changes. Apply `CLAUDE.md` "OSDK Component Architecture" and "Metrics".
   - **Sub-agent B — Storybook** (`packages/react-components-storybook/src/stories/<Name>/`) — only if the change exposes a new prop a story should demonstrate, a new state worth a story, or breaks an existing story. Apply `CLAUDE.md` "Storybook".
   - **Sub-agent C — Tests** (`__tests__/`) — only if the change adds new behavior beyond the regression test from Step 1a, or the Base API changes signature.
   - **Sub-agent D — Peopleapp example** ([`packages/e2e.sandbox.peopleapp/`](../../../../e2e.sandbox.peopleapp/README.md)) — only if the change is observable against real Foundry data and the existing peopleapp wiring doesn't already exercise it. Sub-agent D uses the **OSDK wrapper**, not Base.

   Each sub-agent receives: path to the changed files, the user's repro / MVP checklist, and the API delta (if any).

   **Hook placement decision** (relevant to sub-agent A and C): if a new hook is created, OSDK-aware reusable hooks belong in `@osdk/react`; component-internal hooks stay here in `hooks/`. When in doubt, ask the user.

   Wait for all spawned sub-agents before proceeding.

   **Re-fan-out on API refactors during verification.** If Step 3 surfaces a Base API change, re-spawn affected sub-agents in parallel (single message, multiple Agent calls) rather than rewriting them serially.

4. **Documentation** (`CONTRIBUTING.md` step 9):
   - Update `docs/<Name>.md` if usage examples or props changed.
   - If new CSS variables were added, update `docs/CSSVariables.md`.
   - For a feature meaningful enough to surface in the table, update the one-line entry in `AGENTS.md` and `README.md`.
   - **Sidebar registration** in `docs/sidebarsReactComponents.ts` is only needed for _new_ docs files — bug fixes and feature additions to existing components don't touch it.

5. **No checkpoint here — auto-proceed to Step 3.** Status update only ("Fix applied + N affected files updated; running verification next.") so the user knows what's happening, then immediately start Step 3.

## Step 3 — Verify

Transient verification using [`@playwright/cli`](https://github.com/microsoft/playwright-cli) (and figma-mcp if a Figma URL was provided). **Nothing committed in this step** — Playwright is a dev-time driver only. Findings flow back as code fixes and (where expressible) Vitest tests.

`@playwright/cli` is explicitly designed for coding agents (token-efficient, doesn't push DOM into the LLM context). Use it instead of ad-hoc node scripts driving Playwright.

1. **For bug fixes, re-run the regression test from Step 1a.** It must now pass. If it doesn't, the fix is incomplete — return to Step 2.

2. **Run Storybook locally** (primary verification target — MSW-mocked data, fast iteration):
   ```sh
   pnpm --filter @osdk/react-components-storybook transpileAllDeps
   pnpm --filter @osdk/react-components-storybook dev
   ```
   Default URL: `http://localhost:6006`.

   **Verify the affected stories load with no runtime errors before continuing.** "Storybook ready!" only means Vite is serving — it does NOT mean the story renders. Storybook compiles per-story on demand, so import errors only surface when the story is visited. Hit the iframe URL (`http://localhost:6006/iframe.html?id=<story-id>`) and check the response does NOT contain `sb-errordisplay`, `Cannot find module`, or other error markers. If it does, fix the underlying issue (typically a missing import, wrong icon name, or CSS-module path) before moving on.

3. **Live playground** ([`packages/e2e.sandbox.peopleapp`](../../../../e2e.sandbox.peopleapp/README.md)) to verify the OSDK wrapper against real Foundry data — required when the change is observable against real data shape, server-side filtering, or pagination that MSW mocks may not faithfully reproduce:
   ```sh
   # one-time: copy .env.local.sample to .env.local
   pnpm --filter @osdk/e2e.sandbox.peopleapp transpileAllDeps
   pnpm --filter @osdk/e2e.sandbox.peopleapp dev
   ```

4. **Open the affected story (or playground page) via `playwright-cli`.** Capture browser console; if any errors fire on load, fix them — those are issues the iframe curl check cannot catch (e.g. a Blueprint icon name that exists at typings but not at the chosen export path).

5. **Exercise the checklist.**
   - **Bug fix** — reproduce the original repro steps in the browser; confirm the bug is gone _and_ no regressions on adjacent behavior.
   - **Feature** — exercise each MVP checklist item; verify resulting UI matches the reference.

6. **If a Figma URL was provided**, use **figma-mcp** to read the design (`get_design_context`, `get_screenshot`, `get_variable_defs`). Compare visual properties to the rendered story.

7. **Fix any discrepancies** in the Base or wrapper component.

8. **Backport regression coverage to Vitest** where the assertion can be expressed without a real browser. For bug fixes this already happened in Step 1a; for features, add tests now for any behavior that's reproducible in `happy-dom`. Behaviors that genuinely require a real browser (real `DataTransfer`, scroll virtualisation, real focus traversal) stay verified-but-untested for now — note in the PR description.

## Step 4 — Ship

Run in order (`CONTRIBUTING.md` "Submitting a Pull Request"). Stop and fix if any fails.

The **Git policy** at the top of this skill applies — every git/gh write is a fresh `AskUserQuestion`.

1. **Bug fix** — the regression test from Step 1a passes; the original repro no longer reproduces. **Feature** — all MVP checklist items pass when exercised in Storybook.
2. **Visual match with the reference is acceptable** (when applicable) — user makes the call.
3. **Per-package check is green:**
   ```sh
   pnpm turbo check --filter=@osdk/react-components
   ```
   If lint fails, run `pnpm --dir packages/react-components fix-lint` then re-check (repo-root `CLAUDE.md` "Common pitfalls").
4. **Add a changeset** (`CONTRIBUTING.md` "Changesets" + repo-root [`CLAUDE.md`](../../../../../CLAUDE.md) "Changesets"):
   - **Bug fix** → `patch`.
   - **Feature** → `minor`.
   - **Breaking API change** → `major` (rare for `experimental/` exports, but still requires the bump). Surface the breaking-change rationale to the user before committing to it.
   - One changeset per branch — `ls .changeset/` first to avoid duplicates. Write a specific summary ("fix off-by-one in `ObjectTable` row-virtualization at page boundaries", not "fix ObjectTable").
5. **Format only changed files** (repo-root `CLAUDE.md` "Formatting"):
   ```sh
   git ls-files --modified --others --exclude-standard | xargs npx dprint fmt
   ```
   Do **not** run bare `npx dprint fmt` — without a path it reformats the entire repo.
6. **Cross-package transpile** (repo-root `CLAUDE.md` "Pre-Push Verification"):
   ```sh
   pnpm turbo transpile
   ```
7. **Global cross-package check:**
   ```sh
   pnpm turbo check
   ```
8. **API report refresh** — if the public API surface changed, run:
   ```sh
   pnpm turbo check-api --filter=@osdk/react-components
   ```
   Commit the updated `etc/<package>.report.api.md`. Skip this step for pure bug fixes that don't touch exports (repo-root `CLAUDE.md` "API Extractor").
9. **Final review fan-out — invoke `review` and `security-review` skills in parallel.** Single message with two `Skill` calls. Each runs read-only against the pending diff. Consolidate findings and apply **one** consolidated edit pass. If either still surfaces critical findings on a second pass, escalate to the user via `AskUserQuestion` rather than looping further.
10. **Final checkpoint (named checkpoint #2) — the user decides whether to stage, commit, or push.** Present modified files and a one-line review summary via `AskUserQuestion`. **Where the choice is between concrete artifacts (commit message variants, PR description variants), use the `preview` field on each option to render the candidate text inline** — collapses 2–3 conversational turns into a single tool call.

    Options:
    - **Stage all** — `git add` everything (do not commit)
    - **Stage selected** — user picks a subset
    - **Commit** — propose the message via a separate `AskUserQuestion` with `preview`; only run `git commit` after explicit approval. For bug fixes, reference the symptom and root cause in the message body (not just the file changed); for features, lead with the user-visible behavior added.
    - **Push** — only after the user explicitly approves (separate question from commit)
    - **Open PR** — only after explicit approval; propose title and body via `AskUserQuestion` with `preview` before running `gh pr create`. PR body for bug fixes should include the repro and how the regression test prevents recurrence; PR body for features should restate the MVP checklist with check marks.
    - **Leave unstaged** — bail out and let the user inspect

    When subsequent PR-feedback commits land on the same branch, **ask again for each new commit and each new push**. Push new commits rather than force-pushing during review.
