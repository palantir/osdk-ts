---
"@osdk/client": minor
---

The client is now branch-aware without configuration. When `UNSTABLE_DO_NOT_USE_BRANCH` is omitted, the branch is read from the `VITE_FOUNDRY_BRANCH_RID` environment variable that Foundry runtimes set to the branch the application is checked out on, so objects, actions, and queries read and write on that branch.

An explicitly supplied branch still wins, and `UNSTABLE_DO_NOT_USE_BRANCH` now accepts `null` to pin the client to the default branch while checked out on a branch.
