# `unstable branch` subcommand

The `branch` subcommand syncs the SDK(s) a project consumes to the correct
version for wherever it is run: the latest pre-release version on a global branch, or the latest stable release on main.

```
npx @osdk/cli unstable branch sync
```

Options

| Option        | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| --branchName  | Git branch name used to select the branched SDKs (defaults to the current git branch). [string] |
| --packageName | Sync only this single SDK package instead of all discovered SDKs. [string]                      |
| --dryRun      | Print the intended change without modifying files. [boolean] [default: false]                   |

Only SDKs whose declared version differs from the target are installed; those already
in sync are left untouched.

## Help and debugging

To see all supported subcommands and their expected arguments, run a command with the
`--help` flag.

```
npx @osdk/cli unstable branch --help
```

For additional debugging information, use the `--verbose` flag.

```
npx @osdk/cli unstable branch sync --verbose
```
