---
sidebar_position: 1
---

# Prerequisites

Setup required before using `@osdk/react` hooks.

## Install dependencies

```bash
npm install @osdk/api @osdk/client @osdk/react
npm install react react-dom
```

## Configure the OSDK client

Create an OSDK client and wrap your app with `OsdkProvider`:

```tsx
import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
  async () => {
    // return your auth token
  },
);

function App() {
  return <OsdkProvider client={client}>{/* your app */}</OsdkProvider>;
}
```

All `@osdk/react` hooks must be called inside an `OsdkProvider`. Without it, hooks will throw.
