---
"@osdk/vite-plugin-branch": minor
---

OSDK apps using the Vite plugin are now reloaded when the Foundry branch changes. Requires Vite 6+.

`branchPlugin()` now returns an array of plugins, which Vite flattens into `plugins`; callers that inspect the return value need updating. Branch resolution is also unified across HTML injection and branch-change detection: `FOUNDRY_BRANCH_RID` pins the branch and disables polling entirely, `main` and `master` mean the default Foundry branch, and a branch git cannot name uses an unresolvable rid during development so requests fail loudly instead of silently reading the default branch.
