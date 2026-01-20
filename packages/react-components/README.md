# @osdk/react-components

React components for building Foundry applications. These components are Ontology-aware — pass in OSDK entities, and they handle data loading, caching, and state management automatically.

Built on top of [@osdk/react](../react), these components use OSDK hooks internally to provide ready-to-use UI elements. While @osdk/react gives you low-level hooks for data fetching, @osdk/react-components provides UI widgets for common patterns like tables and forms.

## Installation

```sh
npm install @osdk/react-components @osdk/react
```

**Prerequisites:**

- React 18
- A configured OSDK client
- An OsdkProvider wrapping your application

## Components

> **Note:** This package is under active development. Not all components listed below are available yet.

The components that this package will provide are:

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

## What this package is (and isn't)

**Included:** Components that consume OSDK entities directly — tables, forms, filtering patterns.

**Not included:** Generic UI primitives (buttons, inputs, modals). Use [Blueprint.js](blueprintjs.com) or your preferred component library for those.

## License

Apache 2.0
