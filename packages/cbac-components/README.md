# @osdk/cbac-components

> **Beta Release**: This package is currently in beta. Please use the latest beta version for the most up-to-date features and fixes.

React components for managing [classification-based access control (CBAC)](https://www.palantir.com/docs/foundry/security/classification-based-access-controls/) markings. CBAC markings control who can access data — each piece of data can be tagged with markings from different categories, and the combination determines its access restrictions.

These components are OSDK-aware — pass in marking IDs, and they handle data loading, restriction computation, and banner display automatically. Built on top of [@osdk/react](../react).

## Installation

```sh
npm install @osdk/cbac-components@beta
```

**Peer Dependencies:**

```sh
npm install react react-dom classnames @osdk/react @osdk/react-components
```

- `react`, `@types/react`, `react-dom` - React 17, 18, or 19
- `classnames` - Utility for conditionally joining CSS class names
- `@osdk/react` - OSDK React hooks for data fetching
- `@osdk/react-components` - Shared primitives (Dialog)

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

Add the CBAC component styles to your application's entry CSS file:

```css
@import "@osdk/cbac-components/styles.css";
```

If using CSS layers with `@osdk/react-components`:

```css
@layer osdk.styles;

@import "@osdk/react-components/styles.css" layer(osdk.styles);
@import "@osdk/cbac-components/styles.css" layer(osdk.styles);
```

## Components

| Component          | Description                                                                   | Documentation                 |
| ------------------ | ----------------------------------------------------------------------------- | ----------------------------- |
| `CbacPicker`       | Inline marking picker with selection, restrictions, and classification banner | [Guide](./docs/CbacPicker.md) |
| `CbacPickerDialog` | Dialog wrapper for the picker with confirm/cancel and validation              | [Guide](./docs/CbacPicker.md) |

## Component Architecture

This package follows the same layered architecture as `@osdk/react-components`:

### OSDK Component Layer (e.g., `CbacPicker`, `CbacPickerDialog`)

- Handles data fetching using `@osdk/react` hooks (`useMarkingCategories`, `useMarkings`, `useCbacBanner`, `useCbacMarkingRestrictions`)
- Computes derived state (marking states, validation, required groups)
- Passes primitive data to the base component

### Base Component Layer (e.g., `BaseCbacPicker`, `BaseCbacBanner`, `BaseCbacPickerDialog`)

- Pure components with no OSDK imports
- Contains all UI interactions and styling
- Accepts primitive props (strings, arrays, Maps)
- Can be reused with custom data fetching

## Quick Example

```tsx
import { CbacPicker } from "@osdk/cbac-components/experimental";
import { useState } from "react";

function ClassificationForm() {
  const [markingIds, setMarkingIds] = useState<string[]>([]);

  return (
    <CbacPicker
      initialMarkingIds={markingIds}
      onChange={setMarkingIds}
    />
  );
}
```

## License

Apache 2.0
