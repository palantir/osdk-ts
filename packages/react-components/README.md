# @osdk/react-components

> **⚠️ Beta Release**: This package is currently in beta. Please use the latest beta version for the most up-to-date features and fixes.

React components for building Foundry applications. These components are Ontology-aware — pass in OSDK entities, and they handle data loading, caching, and state management automatically.

Built on top of [@osdk/react](../react), these components use OSDK hooks internally to provide ready-to-use UI elements. While @osdk/react gives you low-level hooks for data fetching, @osdk/react-components provides UI widgets for common patterns like tables and forms.

## Installation

Run the command to install:

```sh
npm install @osdk/react-components
```

**Peer Dependencies:**

The following peer dependencies are required:

```sh
npm install react react-dom classnames @osdk/react @osdk/client @osdk/api
```

- `react`, `@types/react`, `react-dom` - React 17, 18, or 19
- `classnames` - Utility for conditionally joining CSS class names
- `@osdk/react`, `@osdk/api`, `@osdk/client` - The packages required for data-handling

**Prerequisites:**

- A configured OSDK client
- An OsdkProvider2 wrapping your application

## Setup

### App Setup

**REQUIRED:** Wrap app with OsdkProvider2:

```tsx
import { createClient } from "@osdk/client";
import { OsdkProvider2 } from "@osdk/react/experimental";

const client = createClient(/* config */);

function App() {
  return <OsdkProvider2 client={client}>{/* components */}</OsdkProvider2>;
}
```

### CSS Setup

Add the OSDK style import to your application's entry CSS file (e.g., `index.css`). This single import includes both design tokens and component styles.

#### Understanding CSS Layers

OSDK uses CSS [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) to make theming predictable. If you're not familiar with `@layer`, here's what you need to know:

**What is `@layer`?** CSS `@layer` lets you group styles into named layers and control the order in which they apply. When two styles target the same element, the style in the _later_ layer always wins — regardless of selector specificity. This is what makes the theming system maintainable.
**Adding your own layer:** You can add a custom layer (e.g., `user.brand`) after the OSDK layers to override any token or component style. Later layers always win.

**When styles conflict, CSS resolves them in this order:**

1. **Layer order** — Later layers always win (`osdk.components` < `user.brand`)
2. **Selector specificity** — More specific selectors win _within the same layer_
3. **Source order** — Later declarations win when specificity is equal

#### With Tailwind CSS v4

> **Important:** The `@layer` declaration defines the cascade order. Wrapping the Tailwind import in `layer(tailwind)` nests all of Tailwind's styles into a single named layer. By listing `tailwind` before the OSDK layers, OSDK styles take priority over Tailwind's resets and utilities.

```css
/* index.css */
@layer tailwind, osdk.styles, user.brand;

@import "tailwindcss" layer(tailwind);
@import "@osdk/react-components/styles.css" layer(osdk.styles);

/* To add your own brand overrides on top, append a custom layer: */
@import "./user-brand.css" layer(user.brand);
```

To add your own brand overrides on top:

```css
/* index.css */
@layer osdk.styles, user.brand;

@import "@osdk/react-components/styles.css" layer(osdk.styles);
@import "./user-brand.css" layer(user.brand);
```

#### Portal isolation (required)

Add `isolation: isolate` to your app's root element. This is required for Base UI portals. See https://base-ui.com/react/overview/quick-start#portals

```css
#root {
  isolation: isolate;
}
```

## Components

> **Note:** This package is under active development. Not all components listed below are available yet.

The components that this package will provide are:

| Component     | Description                                                                        | Documentation                  |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------ |
| `ObjectTable` | Displays an Object Set as a sortable, paginated table with inline editing support  | [Guide](./docs/ObjectTable.md) |
| `PdfViewer`   | Renders PDF documents with annotations, search, sidebar navigation, and zoom       | [Guide](./docs/PdfViewer.md)   |
| `FilterList`  | Visualize a high-level summary of objects data to allow users to filter that data. | [Guide](./docs/FilterList.md)  |
| `ActionForm`  | Auto-generated form for executing Ontology Actions                                 | -                              |

## Component Architecture

This package follows a layered architecture pattern to maximize flexibility and reusability.

### Core layers (all components)

1. **OSDK Component Layer** (e.g., `ObjectTable`, `PdfViewer`)
   - Handles data fetching and processing using @osdk/react hooks
   - Converts OSDK types to primitive data structures
   - Manages OSDK-specific operations like filtering and actions
   - No styling or component interactions

2. **Base Component Layer** (e.g., `BaseTable`, `BasePdfViewer`)
   - Pure component layer with no OSDK imports
   - Contains all component interactions and styling
   - Accepts primitive props like `string[]`, arrays, and objects
   - Can be reused with custom data fetching layers

### Building blocks (select components)

Some components also provide a **building blocks** tier — individual sub-components and hooks that can be composed into fully custom layouts. Not every component needs this; it's offered where the UI is complex enough that users may want to rearrange or replace parts of it.

For example, the PDF viewer offers three levels of customization:

| Tier            | What you use                                                     | What you get                                                     |
| --------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Drop-in         | `PdfViewer` / `BasePdfViewer`                                    | Full viewer with toolbar, sidebar, search — zero assembly        |
| Building blocks | `PdfViewerToolbar`, `PdfViewerSidebar`, `PdfViewerContent`, etc. | Custom layout using standard parts                               |
| Hooks           | `usePdfViewerState` / `usePdfViewerCore` / primitive hooks       | Build entirely custom components; hooks do all the heavy lifting |

See the [PdfViewer guide](./docs/PdfViewer.md) for the full API reference.

### Example: ObjectTable and BaseTable

```tsx
// ObjectTable - Data layer
- Fetches OSDK object data using useOsdkObjects
- Handles OSDK-specific operations (filtering, sorting, actions)
- Converts OSDK objects to table row data
- Manages object property metadata
- Passes primitive data to BaseTable

// BaseTable - Component layer
- Pure table component with no OSDK imports
- Handles all UI interactions (sorting, selection, editing)
- Manages component state
```

### Benefits

- **Flexibility**: Users can build custom components using the Base layer with their own data sources
- **Separation of Concerns**: Data fetching logic is cleanly separated from UI logic
- **Reusability**: Base components can be exported and used independently
- **Testing**: Base components can be tested without OSDK dependencies

### Implementation Guidelines

When building new components:

1. Start with the Base component focusing on interactions and styling
2. Create the OSDK wrapper that handles data fetching and type conversion
3. Keep the Base component API simple using primitive types
4. For complex components, consider a building blocks tier with sub-components and hooks
5. Document all layers for users who want to customize
6. **Register a user agent for metrics** — wrap every OSDK component with `withOsdkMetrics` at the export barrel (see [Metrics](#metrics) below)

## Folder Structure

The codebase is organized to support the 2-layer architecture:

```
src/
├── base-components/         # Reusable UI primitives (internal use only)
│   ├── select/
│   ├── checkbox/
│   ├── dialog/
│   └── ...
├── object-table/           # OSDK component folder
│   ├── ObjectTable.tsx     # OSDK data layer component
│   ├── Table.tsx           # Base component (exported as BaseTable)
│   ├── hooks/              # React hooks for table functionality
│   ├── utils/              # Helper utilities and types
│   └── components/         # Supporting React components
└── public/
    └── experimental.ts     # Public API exports
```

### Export Strategy

- **OSDK Components**: Exported through `experimental.ts` (e.g., `ObjectTable`, `FilterList`)
- **Base Components**: Select base components are exported for advanced use cases (e.g., `BaseTable`, `BaseFilterList`)
- **UI Primitives**: The `base-components/` folder contains internal UI primitives that are **NOT exported**

### Why Not Export UI Primitives?

This package focuses on complex, Ontology-aware components with built-in data fetching. For simple UI components (buttons, inputs, dialogs), users should use established component libraries like Blueprint.js or their preferred design system. This approach:

- Keeps the package focused on its core value proposition
- Avoids duplicating well-solved UI problems
- Reduces maintenance burden
- Encourages consistent use of existing design systems

## Metrics

Every OSDK component (the outermost data-fetching layer, **not** the Base component) must register a user agent string so that network requests include a `Fetch-User-Agent` header identifying which component initiated them. This enables usage tracking and debugging.

This is handled automatically by the `withOsdkMetrics` HOC. Wrap your component at the **export barrel** (`public/experimental/*.ts`), not inside the component body:

```ts
// public/experimental/my-component.ts
import { MyComponent as _MyComponent } from "../../my-component/MyComponent.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
export const MyComponent: typeof _MyComponent = withOsdkMetrics(
  _MyComponent,
  "MyComponent",
);
```

`withOsdkMetrics` calls `useRegisterUserAgent` internally, producing a user agent string like `osdk-react-components/<version>/MyComponent`.

**Checklist for new components:**

- [ ] Wrap the OSDK component with `withOsdkMetrics` in the export barrel
- [ ] Add `typeof _Component` annotation to satisfy `--isolatedDeclarations`
- [ ] Do **not** wrap Base components — only the OSDK wrapper needs it
- [ ] Do **not** call `useRegisterUserAgent` directly inside the component body

## Custom Styling

See the [CSS Variables Reference](./docs/CSSVariables.md) on how to apply custom themes and styling to the components.

## Example Usage

### Object Table

```ts
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  return (
    <ObjectTable
      objectType={Employee}
    />
  );
}
```

## Development Workflow

1. In packages/react-components, run `pnpm install` to install the dependencies.
2. Run `pnpm transpileAllDeps` to transpile all dependencies in this repo.
3. To run tests, run `pnpm test`

### Running the Example People App

The examples are added to `packages/e2e.sandbox.peopleapp`, so we need to run the example app.

#### Steps:

1. Create a .env.local file based on `.env.local.sample` in packages/e2e.sandbox.peopleapp:

2. Transpile all dependencies of peopleapp

```
pnpm --filter @osdk/e2e.sandbox.peopleapp transpileAllDeps
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
