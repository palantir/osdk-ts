# @osdk/widget.client-react

This package provides React components and hooks that wrap the `@osdk/widget.client` package, making it easy to create Custom Widgets using React.

## Overview

`@osdk/widget.client-react` provides:

- A `FoundryWidget` component that manages communication with the Foundry host
- React context to access widget parameters and events
- Utilities for handling OSDK object sets
- Type-safe access to widget parameters and events

## Installation

```bash
npm install @osdk/widget.client-react
# or
pnpm add @osdk/widget.client-react
# or
yarn add @osdk/widget.client-react
```

## Usage

### Basic Setup

```tsx
import { FoundryWidget } from "@osdk/widget.client-react";
import React from "react";
import { createRoot } from "react-dom/client";
import { Widget } from "./Widget";
import config from "./widget.config";

const root = document.getElementById("root")!;
createRoot(root).render(
  <FoundryWidget config={config}>
    <Widget />
  </FoundryWidget>,
);
```

### Working with Widget Parameters

```tsx
import { useFoundryWidgetContext } from "@osdk/widget.client-react";
import React from "react";
import type { WidgetConfig } from "./widget.config";
import config from "./widget.config";

export function Widget() {
  // Get access to the widget context with your config type
  const { parameters, emitEvent } = useFoundryWidgetContext<typeof config>();

  // Access parameters with full type safety
  const { title, showControls } = parameters.values;

  // Determine if parameters are still loading
  const isLoading = parameters.state === "loading"
    || parameters.state === "not-started";

  // Function to update a parameter via an event
  const updateTitle = () => {
    emitEvent("updateTitle", {
      parameterUpdates: {
        title: "New Title",
      },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      {showControls && <button onClick={updateTitle}>Update Title</button>}
    </div>
  );
}
```

### Working with ObjectSet Parameters

For widgets that work with Foundry object sets, you need to provide an OSDK client:

```tsx
import { Client } from "@osdk/client";
import { FoundryWidget } from "@osdk/widget.client-react";
import React from "react";
import { createRoot } from "react-dom/client";
import { Widget } from "./Widget";
import config from "./widget.config";

// Create your OSDK client
const client = new Client({
  // client configuration
});

const root = document.getElementById("root")!;
createRoot(root).render(
  <FoundryWidget config={config} client={client}>
    <Widget />
  </FoundryWidget>,
);
```

Then in your widget component:

```tsx
import { useFoundryWidgetContext } from "@osdk/widget.client-react";
import React from "react";
import type { WidgetConfig } from "./widget.config";
import config from "./widget.config";

export function Widget() {
  const { parameters } = useFoundryWidgetContext<typeof config>();

  // Access an object set parameter
  const { employees } = parameters.values;

  if (parameters.state !== "loaded") {
    return <div>Loading...</div>;
  }

  // The object set is available via the objectSet property
  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.objectSet.getPage().map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Key Components

### FoundryWidget

The main component that sets up the communication between the widget and the Foundry host.

Props:

- `config`: The widget configuration object
- `client`: (Optional) An OSDK client instance for working with object sets
- `initialValues`: (Optional) Initial values for parameters
- `children`: React components to render within the widget

### useFoundryWidgetContext

A hook to access the widget context, including:

- `emitEvent`: Function to emit events to the host
- `hostEventTarget`: EventTarget for subscribing to host events
- `asyncParameterValues`: Raw parameter values with their async state
- `parameters`: Convenient access to all parameter values and overall loading state

## Advanced Usage

### Type Safety with Custom Hooks

Create a custom hook to ensure type safety with your widget configuration:

```typescript
// useWidget.ts
import { useFoundryWidgetContext } from "@osdk/widget.client-react";
import type { WidgetConfig } from "./widget.config";
import config from "./widget.config";

export function useWidget() {
  return useFoundryWidgetContext<typeof config>();
}
```

### Advanced Parameter Handling

```tsx
import { useFoundryWidgetContext } from "@osdk/widget.client-react";
import React from "react";
import type { WidgetConfig } from "./widget.config";
import config from "./widget.config";

export function Widget() {
  const { asyncParameterValues, emitEvent } = useFoundryWidgetContext<
    typeof config
  >();

  // Access individual parameter with its full async state
  const titleParam = asyncParameterValues.title;

  let titleContent;

  // Handle different loading states for a specific parameter
  switch (titleParam.value.type) {
    case "loading":
      titleContent = <div>Loading title...</div>;
      break;
    case "loaded":
      titleContent = <h1>{titleParam.value.value}</h1>;
      break;
    case "failed":
      titleContent = <div>Error: {titleParam.value.error.message}</div>;
      break;
    case "not-started":
      titleContent = <div>Initializing...</div>;
      break;
    case "reloading":
      titleContent = (
        <>
          <h1>{titleParam.value.value}</h1>
          <div>Updating...</div>
        </>
      );
      break;
  }

  return (
    <div>
      {titleContent}
      {/* Rest of the widget */}
    </div>
  );
}
```

## Related Packages

- [`@osdk/widget.api`](../widget.api/): Defines the communication protocol between widgets and host
- [`@osdk/widget.client`](../widget.client/): Core client implementation used by this package
- [`@osdk/widget.vite-plugin`](../widget.vite-plugin/): Vite plugin for building and deploying widgets to Foundry
