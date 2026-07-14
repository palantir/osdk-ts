# `unstable branch` subcommand

The `branch` subcommand works with branched Foundry SDK versions published on a global branch.

```
npx @osdk/cli unstable branch [subcommand]
```

Common options

| Option       | Description                                                                             |
| ------------ | --------------------------------------------------------------------------------------- |
| --branchName | Global branch to select branched SDKs for. Defaults to the current git branch. [string] |

The `branch` subcommand is not runnable without passing a specific subcommand (i.e. `install`).

### `install` subcommand

Discovers and installs the latest versions of branched Foundry SDKs published on a global branch, updating the dependencies in `package.json`.

```
npx @osdk/cli unstable branch install
```

Install options

| Option        | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| --packageName | Operate on this single SDK package instead of detecting branched SDKs automatically. [string] |
| --dryRun      | Print the intended version change(s) without modifying any files. [boolean] [default: false]  |

Only SDKs whose declared version differs from the published one are installed; those already in sync are left untouched. `install` makes no changes and exits `0` when:

- you are on `main`/`master`, a detached `HEAD`, or not in a git repo (pass `--branchName` to force a branch),
- there are no branched SDKs on a global branch yet, or
- every branched SDK is already in sync.

After a successful install, review and commit the updated `package.json` and lockfile.

## Help and debugging

To see all supported subcommands and their expected arguments, run a command with the `--help` flag

```
npx @osdk/cli unstable branch --help
```

For additional information for debugging, use the `--verbose` flag

```
npx @osdk/cli unstable branch install --verbose
```
