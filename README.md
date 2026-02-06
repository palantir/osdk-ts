# TypeScript Ontology SDK

| Package | Version |
|---------|---------|
| @osdk/client | [![npm](https://img.shields.io/npm/v/@osdk/client.svg)](https://www.npmjs.com/package/@osdk/client) |
| @osdk/api | [![npm](https://img.shields.io/npm/v/@osdk/api.svg)](https://www.npmjs.com/package/@osdk/api) |
| @osdk/foundry-sdk-generator | [![npm](https://img.shields.io/npm/v/@osdk/foundry-sdk-generator.svg)](https://www.npmjs.com/package/@osdk/foundry-sdk-generator) |
| @osdk/oauth | [![npm](https://img.shields.io/npm/v/@osdk/oauth.svg)](https://www.npmjs.com/package/@osdk/oauth) |

[![Node.js Version](https://img.shields.io/badge/node-%3E=18.19.0-brightgreen)](https://nodejs.org/)

## Getting Started

The TypeScript SDK is a library used for interacting with Palantir's Ontology.

To get started, visit the developer console application on your Foundry stack, or visit [our public documentation](https://www.palantir.com/docs/foundry/ontology-sdk/overview/).

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
5. Run all lint rules and tests with `pnpm check` from root. Run `pnpm turbo typecheck` to quickly check any issues with your types.
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

## Publishing

1. Install the [GitHub CLI](https://cli.github.com/)
2. `gh auth login` to authenticate with github.com
3. `pnpm install`
4. `./scripts/createReleasePr.sh`
5. Once your release PR has been merged, run `/scripts/tag-release.sh [COMMIT_SHA]` to tag your release.
