---
"@osdk/shared.branch": minor
"@osdk/cli": patch
---

Add `@osdk/shared.branch`, one home for deciding which Foundry branch a checkout is on.

It exports `getGitBranch` (the current git branch, or `undefined` if git fails) and `normalizeGitBranch` (that branch trimmed, or `undefined` for `main`/`master`/a detached HEAD). The `branch` CLI command and `@osdk/vite-plugin-branch` both use it, so the SDK versions the CLI syncs and the branch the client reads from cannot disagree.

`getGitBranch` now runs `git branch --show-current` instead of `git rev-parse --abbrev-ref HEAD`, which fixes branch detection on an unborn branch — a repository with no commits yet, where `rev-parse` fails outright. A detached HEAD is now reported as an empty string rather than the literal `HEAD`; both already normalized to "no branch". Requires git >= 2.22.
