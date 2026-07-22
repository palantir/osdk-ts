# TypeScript Ontology SDK

A TypeScript library for interacting with Palantir's Ontology.

## Documentation

- [OSDK TypeScript Documentation](https://palantir.github.io/osdk-ts/)
- [Ontology SDK Overview](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)
- [TypeScript OSDK Migration Guide](https://www.palantir.com/docs/foundry/ontology-sdk/typescript-osdk-migration)

[![Node.js Version](https://img.shields.io/badge/node-%3E=18.19.0-brightgreen)](https://nodejs.org/)

> **Note:** Supported Node versions are 18 (>=18.19.0), 20, 22, and 24. Node 25 is not supported.

## Packages

| Package                     | Version                                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| @osdk/client                | [![npm](https://img.shields.io/npm/v/@osdk/client.svg)](https://www.npmjs.com/package/@osdk/client)                               |
| @osdk/api                   | [![npm](https://img.shields.io/npm/v/@osdk/api.svg)](https://www.npmjs.com/package/@osdk/api)                                     |
| @osdk/foundry-sdk-generator | [![npm](https://img.shields.io/npm/v/@osdk/foundry-sdk-generator.svg)](https://www.npmjs.com/package/@osdk/foundry-sdk-generator) |
| @osdk/oauth                 | [![npm](https://img.shields.io/npm/v/@osdk/oauth.svg)](https://www.npmjs.com/package/@osdk/oauth)                                 |

## Getting Started

To get started, visit the developer console application on your Foundry stack or see the [documentation](#documentation) above.

Do you only want to hit specific APIs or don't need a generated SDK? Check out the [foundry-platform-typescript](https://github.com/palantir/foundry-platform-typescript) package, which provides standalone APIs to interact with Foundry directly without the need to generate ontology-specific SDKs.

## Frontend quick start with @osdk/create-app

See the instructions on how to get set up quickly with a frontend application in our [public documentation.](https://www.palantir.com/docs/foundry/ontology-sdk/how-to-bootstrapping-typescript/)

## Installation

Install the client and auth packages via npm:

```sh
npm install @osdk/client
npm install @osdk/oauth
```

## Client Overview

Once you have generated an SDK in your Developer Console application, you need to create your token provider via OAuth. This token provider is supplied by creating the auth provider from the `@osdk/oauth` package. Once you have your token provider set up, you can pass the authentication instance when creating the client.

## OAuth Instructions

### Public Client

To create a public client, you will need to create an application in the Developer Console app on your Foundry stack. You will need the client ID as well as the base URL of your Foundry stack and a redirect URL that you can configure in Developer Console.

```typescript
import { createPublicOauthClient } from "@osdk/oauth";

const auth = createPublicOauthClient(
  "<YOUR CLIENT ID>",
  "<YOUR FOUNDRY URL>",
  "http://redirect-url",
);
```

For more details, refer to the documentation provided in your Developer Console application.

### Confidential Client

To create a confidential client, follow the steps to create a service user in the Developer Console. You will need the client ID, client secret, and the base URL of your Foundry stack.

```typescript
import { createConfidentialOauthClient } from "@osdk/oauth";

const auth = createConfidentialOauthClient(
  "<YOUR CLIENT ID>",
  "<YOUR CLIENT SECRET>",
  "<YOUR FOUNDRY URL>",
);
```

For more details, refer to the [public docs](https://www.palantir.com/docs/foundry/ontology-sdk/how-to-bootstrapping-server-side-typescript/) or documentation in the Developer Console application.

## Creating Your Client

```typescript
import { createClient } from "@osdk/client";

const client = createClient(
  "https://stack.palantir.com",
  "ri.foundry.main",
  auth, // This is the auth that we created above.
);
```

For more details, refer to the [public docs](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) or documentation in the Developer Console application.

## Dev workflow

1. Fork the repo
2. Create a branch
3. `pnpm install`
4. Add your code
5. Run `pnpm check` from root before pushing.

   `pnpm check` runs the **same set of tasks CI runs**: lint (incl. formatting), typecheck, unit tests, the API report (`api-extractor`), package-typing checks (`attw`), bundle checks, spelling, and monorepolint. A green `pnpm check` locally means CI will be green too, so there is no separate CI-only check to get surprised by.

   To iterate faster, run a single task, optionally scoped to one package with turbo's `--filter`:
   - Types: `pnpm turbo typecheck --filter=@osdk/<package>`
   - Lint + formatting: `pnpm turbo lint --filter=@osdk/<package>`
   - Tests: `pnpm turbo test --filter=@osdk/<package>`

   > 📘 Note
   > Target packages with `--filter`; don't pass `pnpm --dir <path> turbo` (the `--dir` flag breaks turbo).
6. Add a changeset

   > 📘 Note
   > **Follow semver rules here.**
   1. Assuming you've run `pnpm install`, run `changeset` (or `pnpm exec changeset`).
   2. The tool will split things into changed vs unchanged packages (which you may need if you decide to add changeset logs in a future PR for past features)
   3. Select the packages you want the changeset applied to using the arrow keys (up/down) and space-bar to "select" the package.
   4. Press enter to continue.
   5. The CLI will go through a progression of asking you which packages you previously selected need a major bump? Then a minor bump? Patch bumps assumed for remaining packages changed. Arrows and space bar to select. Enter to continue (even if you selected nothing).
   6. Enter a change (or press enter on empty to open your editor.)

   > Info
   > Full docs on the `changesets` tool can be found at the [changesets/changesets github repo](https://github.com/changesets/changesets).
7. If you're curious what the final build output might look like you can run `pnpm build` from root.

## Test coverage

To check test coverage locally, run the following from the root:

```sh
pnpm run coverage
```

This runs every package's test suite with coverage collection and then prints a
per-package line-coverage summary and the repo-wide totals to your terminal:

```
Coverage by package (lines):
   19.7%  @osdk/cli
   59.3%  @osdk/react
   76.0%  @osdk/client
   ...
Total across 38 package(s), 1407 files:
  Lines      : 61.08% (61682/100984)

Full HTML report: coverage/index.html
```

It also writes a full HTML report to `coverage/index.html`; open it in a browser
for line-by-line detail. Coverage measures each package's `src/**` and excludes
tests, generated code, and `index.ts` barrel files.

## Publishing

1. Install the [GitHub CLI](https://cli.github.com/)
2. `gh auth login` to authenticate with github.com
3. `pnpm install`
4. `./scripts/createReleasePr.sh`
5. Once your release PR has been merged, run `/scripts/tag-release.sh [COMMIT_SHA]` to tag your release.

### Troubleshooting

- If you run into errors when running `./scripts/createReleasePr.sh`, try running `pnpm install` first.
- Make sure you are using a supported Node version (18, 20, 22, or 24). Node 22 is recommended. Node 25 is not supported.
