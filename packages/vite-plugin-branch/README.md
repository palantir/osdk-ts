<!-- cspell:words worktrees -->

# @osdk/vite-plugin-branch

Use the checked-out Git branch as the Foundry branch, and reload your app when
you switch Git branches. Requires Vite 6, 7, or 8 and Git 2.22 or later.

```ts
import { branchPlugin } from "@osdk/vite-plugin-branch";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [branchPlugin()],
});
```

The plugin injects an `osdk-foundry-branch-rid` meta tag into the application HTML
during development and production builds. `@osdk/client` reads this metadata when
creating a client. The inferred value is a branch **name**, not a RID computed
from Git; the plugin makes no Foundry API calls. On `main`, `master`, detached
HEAD, or outside a Git repository, it injects an empty value for the default
Foundry branch.

An explicit `FOUNDRY_BRANCH_RID` in your shell or Vite's `.env` files takes
precedence, including an empty value. Vite's mode and `envDir` settings are
respected. This is a server-only override; the branch is not compiled into
JavaScript or written to `process.env`.

## Switching branches

The plugin polls `git branch --show-current` once a second while the Vite dev
server is running. Git handles nested app roots and linked worktrees. A changed
branch name sends Vite's full-page reload notification to connected browsers.
The resulting HTML request reads the current branch again, and the reloaded app
creates its clients using the fresh metadata, without restarting the dev server
or rebuilding optimized dependencies.

Reloads also happen when files are identical between branches, an explicit
Foundry branch is pinned, or you switch between `main` and `master`. Ordinary
commits on the same branch do not trigger a reload. Each poll waits for the
previous read to finish. Switches between polls are coalesced to the latest
observed branch. Polling starts with Vite's client dev environment and stops when
that environment closes, including during restarts. A standalone server that
closes before it starts listening does not start polling.

Automatic page reload requires Vite's browser client and HMR connection to be
enabled. Middleware mode is supported: the host must call `transformIndexHtml`
when serving application HTML and provide Vite's HMR connection to the browser.
Production builds inject the branch at build time and do not poll Git.

## Tests

From this package directory:

```sh
pnpm test
```
