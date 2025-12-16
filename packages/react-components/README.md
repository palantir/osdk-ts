# @osdk/react-components

React components for building Foundry applications. These components are Ontology-aware — pass in OSDK entities, and they handle data loading, caching, error states, and refresh logic automatically.

## Installation

```sh
npm install @osdk/react-components @osdk/react
```

**Prerequisites:**

- React 18+
- A configured OSDK client
- An OsdkProvider wrapping your application

## Components

We aim to offer these three components in the initial phase:

| Component     | Description                                                                        |
| ------------- | ---------------------------------------------------------------------------------- |
| `ObjectTable` | Displays an Object Set as a sortable, paginated table                              |
| `FilterList`  | Visualize a high-level summary of objects data to allow users to filter that data. |
| `ActionForm`  | Auto-generated form for executing Ontology Actions                                 |

## Example Usage

### Object Table

```ts
import { ObjectTable } from "@osdk/react-components";
import { $, Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  const employeeObjectSet = $(Employee).where({ department: "Engineering" });

  return (
    <ObjectTable
      objectSet={employeeObjectSet}
      objectType={Employee}
    />
  );
}
```

## Why this package?

**OSDK-native.** These components understand Foundry concepts like Objects, Object Sets, and Actions. They are purpose-built for Ontology data.

**Best practices included.** Loading states, error handling, caching, and data freshness are handled for you — no need to reimplement these patterns for each component.

**Fully customizable.** Supports custom styling for any design system.

## Styling

Components ship unstyled by default with default stylesheets to use.

## What this package is (and isn't)

**Included:** Components that consume OSDK entities directly — tables, forms, filtering patterns.

**Not included:** Generic UI primitives (buttons, inputs, modals). Use [Blueprint.js](blueprintjs.com) or your preferred component library for those.

## License

Apache 2.0
