# @osdk/create-app

A CLI for bootstrapping OSDK apps on top of popular frameworks

The CLI may be run directly through npx with `npx @osdk/create-app@latest` or with the alias `npm create @osdk/app@latest`. When the NPM package is explicitly installed for example with `npm install -g @osdk/create-app@latest` the `create-osdk-app` binary is also available.

## Running locally

Run the following commands from the repository root:

```sh
pnpm install
pnpm build
cd packages/create-app
./bin/createOsdkApp.mjs
```

Templates are tested against snapshots which can be recreated with:

```sh
cd packages/create-app
pnpm update-snapshots
```

## Options

The CLI can be run without any arguments and the user will be guided with interactive prompts to fill in required information. The prompts may be skipped by providing the relevant information in through arguments instead.

```
npx @osdk/create-app [project] [--<option>]
```

| Option               | Description                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| --overwrite          | Overwrite project directory if already exists [boolean]                          |
| --template           | Template name to use [string]                                                    |
| --foundryUrl         | URL for the Foundry stack [string]                                               |
| --applicationUrl     | URL the production application will be hosted on [string]                        |
| --skipApplicationUrl | Skip filling in URL the production application will be hosted on [boolean]       |
| --application        | Application resource identifier (rid) [string]                                   |
| --clientId           | OAuth client ID for application [string]                                         |
| --osdkPackage        | OSDK package name for application [string]                                       |
| --osdkRegistryUrl    | URL for NPM registry to install OSDK package [string]                            |
| --corsProxy          | Include a CORS proxy for Foundry API requests during local development [boolean] |

## Templates

| Template name      | Description                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| react              | [React](https://react.dev/) with [Vite](https://vitejs.dev/guide/why.html)                                                            |
| vue                | [Vue](https://vuejs.org/) with [Vite](https://vitejs.dev/guide/why.html)                                                              |
| next-static-export | [Next.js](https://nextjs.org/) with [static export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) |
