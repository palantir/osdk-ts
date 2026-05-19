---
sidebar_position: 1
---

# Prerequisites

Setup required before using `@osdk/react` hooks.

## Install dependencies

:::tip If your tooling already installs dependencies, skip this step.
:::

Use whichever package manager your project uses:

```bash
# npm
npm install @osdk/api @osdk/client @osdk/react react react-dom

# pnpm
pnpm add @osdk/api @osdk/client @osdk/react react react-dom

# yarn
yarn add @osdk/api @osdk/client @osdk/react react react-dom
```

## Configure the OSDK client

Create an OSDK client and wrap your app with `OsdkProvider`:

```tsx
import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "ri.ontology.main.ontology.{UUID}",
  async () => {
    // return your auth token
  },
);

function App() {
  return <OsdkProvider client={client}>{/* your app */}</OsdkProvider>;
}
```

All `@osdk/react` hooks must be called inside an `OsdkProvider`. Without it, hooks will throw.
