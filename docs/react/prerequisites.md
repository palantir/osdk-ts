---
sidebar_position: 1
---

# Prerequisites

Setup required before using `@osdk/react` hooks.

## Install dependencies

```bash
npm install @osdk/api@beta @osdk/client@beta @osdk/react@beta
npm install react react-dom
```

## Configure the OSDK client

Create an OSDK client and wrap your app with `OsdkProvider2`:

```tsx
import { createClient } from "@osdk/client";
import { OsdkProvider2 } from "@osdk/react/experimental";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "ri.ontology.main.ontology.00000000-0000-0000-0000-000000000000",
  async () => {
    // return your auth token
  },
);

function App() {
  return <OsdkProvider2 client={client}>{/* your app */}</OsdkProvider2>;
}
```

All `@osdk/react` hooks must be called inside an `OsdkProvider2`. Without it, hooks will throw.
