# @osdk/create-widget

A CLI for bootstrapping OSDK widgets on top of popular frameworks

The CLI may be run directly through npx with `npx @osdk/create-widget@latest` or with the alias `npm create @osdk/widget@latest`. When the NPM package is explicitly installed for example with `npm install -g @osdk/create-widget@latest` the `create-osdk-widget` binary is also available.

## Running locally

Run the following commands from the repository root:

```sh
pnpm install
pnpm build
cd packages/create-widget
./bin/createWidget.mjs
```

Changes to templates require updating `examples/` which can be done with the `@osdk/example-generator` package.

## Options

The CLI can be run without any arguments and the user will be guided with interactive prompts to fill in required information. The prompts may be skipped by providing the relevant information in through arguments instead.

```
npx @osdk/create-widget [project] [--<option>]
```

| Option            | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| --overwrite       | Overwrite project directory if already exists [boolean]       |
| --template        | Template name to use [string]                                 |
| --sdkVersion      | The SDK version to use (1.x or 2.x), defaults to 2.x [string] |
| --foundryUrl      | URL for the Foundry stack [string]                            |
| --widget          | Widget resource identifier (rid) [string]                     |
| --osdkPackage     | OSDK package name for application [string]                    |
| --osdkRegistryUrl | URL for NPM registry to install OSDK package [string]         |

## Templates

| Template name | Description                                                                |
| ------------- | -------------------------------------------------------------------------- |
| react         | [React](https://react.dev/) with [Vite](https://vitejs.dev/guide/why.html) |
