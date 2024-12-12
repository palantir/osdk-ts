# @osdk/cli

A CLI for generating OSDKs and managing Foundry site deployments

The CLI may be run directly through npx with `npx @osdk/cli@latest`. When the NPM package is explicitly installed for example with `npm install -g @osdk/cli@latest` the `osdk` binary is also available.

## Running locally

Run the following commands from the repository root:

```sh
pnpm install
pnpm build
cd packages/cli
./bin/osdk.mjs
```

## `site` subcommand

The site subcommand allows users to manage their Foundry site

```
npx @osdk/cli site [subcommand]
```

Common options

| Option        | Description                                        |
| ------------- | -------------------------------------------------- |
| --foundryUrl  | URL for the Foundry stack [string]                 |
| --application | Application resource identifier (rid) [string]     |
| --token       | Foundry API token [string]                         |
| --tokenFile   | Path to file containing Foundry API token [string] |

`--token` and `--tokenFile` are mutually exclusive and only one can be passed. If neither are passed the CLI runtime looks for these environment variables in order `[FOUNDRY_TOKEN, FOUNDRY_SDK_AUTH_TOKEN]`. If a token is not specified using any of those options, the CLI will exit with a failure.

---

### Project config file

A `foundry.config.json` file may be used in your project's root to simplify usage of the CLI by populating default values for commands. The current working directory will be traversed up to the root directory and the first `foundry.config.json` file, if found, will be used.

An example of a full `foundry.config.json` is show below:

```json
{
  "foundryUrl": "https://example.palantirfoundry.com",
  "site": {
    "application": "ri.third-party-applications.main.application.1c66b352-4e00-40d2-995d-061c9d533ace",
    "directory": "./dist",
    "autoVersion": {
      "type": "git-describe",
      "tagPrefix": ""
    }
  }
}
```

---

The `site` subcommand is not runnable without passing a specific subcommand i.e (`deploy` or `version`)

### `deploy`subcommand

The deploy subcommand allows users to upload new versions of their site and set it as deployed

```
npx @osdk/cli site deploy
```

Deploy options

| Option       | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| --directory  | Directory containing site files [string]                                       |
| --version    | New version of site to deploy [string]                                         |
| --uploadOnly | Upload new site version only without setting as live [boolean][default: false] |

Auto Version options

| Option         | Description                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --autoVersion  | Enable auto versioning [string][choices: "git-describe", "package-json"]                                                                                            |
| --gitTagPrefix | Prefix to match git tags on when 'git-describe' auto versioning is used. If not provided, all tags are matched and the prefix 'v ' is stripped if present. [string] |

`--version` and `--autoVersion` are mutually exclusive and only one can be passed.

If `git-describe` is used for `--autoVersion`, the CLI will try to infer the version by running the `git describe` command with optionally `--match=<gitTagPrefix>` set if `--gitTagPrefix` is passed.

If `package-json` is used for `--autoVersion`, the CLI will try to infer the version by looking at the `version` field of the nearest `package.json` file. The current working directory will be traversed up to the root directory and the first `package.json` file, if found, will be used.

### `version` subcommand

The version subcommand allows users to manage their site versions.

The version subcommand is not runnable without passing a specific subcommand i.e (`list` or `get`)

#### `list` subcommand

The list subcommand allows users to list their site versions

```
npx @osdk/cli site version list
```

#### `get` subcommand

The get subcommand allows users to get their live site version

```
npx @osdk/cli site version get
```

#### `set <version>` subcommand

The set subcommand allows users to set their live site version

```
npx @osdk/cli site version set 0.1.0
```

#### `unset` subcommand

The unset subcommand allows users to clear their live site version

```
npx @osdk/cli site version unset
```

#### `delete <version>` subcommand

The delete subcommand allows users to delete a site version

```
npx @osdk/cli site version delete 0.1.0
```

## Help and debugging

To see all supported commands and their expected arguments, run a command with the --help flag

```
npx @osdk/cli site version --help
```

For additional information for debugging, use the --verbose flag

```
npx @osdk/cli site version --verbose
```
