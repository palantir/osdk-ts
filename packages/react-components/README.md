# @osdk/react-components

React components for building Foundry applications. These components are Ontology-aware — pass in OSDK entities, and they handle data loading, caching, and state management automatically.

Built on top of [@osdk/react](../react), these components use OSDK hooks internally to provide ready-to-use UI elements. While @osdk/react gives you low-level hooks for data fetching, @osdk/react-components provides UI widgets for common patterns like tables and forms.

## Installation

Run the command to install:

- @osdk/react-components - The unstyled components from this package
- @osdk/react-components-styles - The default styles for the components

```sh
npm install @osdk/react-components @osdk/react-components-styles
```

**Peer Dependencies:**

The following peer dependencies are required:

```sh
npm install react react-dom classnames @osdk/react @osdk/client @osdk/api
```

- `react` and `react-dom` - React 17, 18, or 19
- `classnames` - Utility for conditionally joining CSS class names
- `@osdk/react`, `@osdk/api`, `@osdk/client` - The packages required for data-handling

For TypeScript users, also install `@types/react`.

**Prerequisites:**

- A configured OSDK client
- An OsdkProvider wrapping your application

## Setup

Add this to your application's entry css file (e.g., `index.css` or `index.scss`):

```css
/* index.css */
@import "@osdk/react-components/styles.css";

.root {
  isolation: isolate;
}
```

The `.root` isolation is required for Base UI portals. See https://base-ui.com/react/overview/quick-start#portals

## Components

> **Note:** This package is under active development. Not all components listed below are available yet.

The components that this package will provide are:

| Component     | Description                                                                        |
| ------------- | ---------------------------------------------------------------------------------- |
| `ObjectTable` | Displays an Object Set as a sortable, paginated table                              |
| `FilterList`  | Visualize a high-level summary of objects data to allow users to filter that data. |
| `ActionForm`  | Auto-generated form for executing Ontology Actions                                 |

## Custom Styling

See `@osdk/react-components-styles` README on how to apply custom themes and styling to the components.

## Documentation

Detailed component documentation is available in the `docs/` folder:

- **[ObjectTable](./docs/ObjectTable.md)** - Complete guide with examples, props reference, theming, and best practices

## Example Usage

### Object Table

```ts
import { ObjectTable } from "@osdk/react-components/experimental";
import { $, Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  return (
    <ObjectTable
      objectType={Employee}
    />
  );
}
```

### Running the Example People App

The examples are added to `packages/e2e.sandbox.peopleapp`, so we need to run the example app.

#### Steps:

1. Create a .env.local file with the content below in packages/e2e.sandbox.peopleapp:

```
VITE_FOUNDRY_URL=https://swirl.palantirfoundry.com
VITE_FOUNDRY_CLIENT_ID=<insert_client_id>
VITE_FOUNDRY_CLIENT_SECRET=<insert_token>
VITE_FOUNDRY_REDIRECT_URL=http://localhost:8080/auth/callback
```

2. Get VITE_FOUNDRY_CLIENT_ID from "https://swirl.palantirfoundry.com/workspace/developer-console/app/ri.third-party-applications.main.application.91b973ac-e504-4322-95b4-4962b60495fe/oauth" under App Credentials > Client ID.

3. Transpile @osdk/react-components and its dependencies

```
pnpm --filter @osdk/react-components transpileAllDeps && pnpm --filter @osdk/react-components transpileBrowser
```

4. Run the people app

```
pnpm --filter @osdk/e2e.sandbox.peopleapp dev
```

## Why this package?

**OSDK-native.** These components understand Foundry concepts like Objects, Object Sets, and Actions. They are purpose-built for Ontology data.

**Best practices included.** Loading states, error handling, caching, and data freshness are handled for you — no need to reimplement these patterns for each component.

**Fully customizable.** Supports custom styling for any design system.

## What this package is (and isn't)

**Included:** Components that consume OSDK entities directly — tables, forms, filtering patterns.

**Not included:** Generic UI primitives (buttons, inputs, modals). Use [Blueprint.js](blueprintjs.com) or your preferred component library for those.

## License

Apache 2.0
