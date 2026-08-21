---
"@osdk/vite-plugin-branch": minor
---

Add a Vite plugin that makes local development branch-aware.

On dev server start `branchPlugin()` sets `VITE_FOUNDRY_BRANCH_RID` to the checked out git branch name, so `@osdk/client` scopes objects, actions, and queries to the matching Foundry branch with no change to `createClient`. Previously a repository checked out on a branch locally read and wrote on the default branch unless the branch was threaded through by hand.

An existing value wins, whether it comes from a `.env` file, the shell, or CI, so the in-platform dev server and pull request previews keep supplying their own branch. Nothing is injected on `main`/`master`, on a detached HEAD, or outside a git repository, and the plugin is dev-server only so a local git branch name is never baked into a production build.
