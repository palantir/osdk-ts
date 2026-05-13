# @osdk/widget.api

This package defines the API contract between Foundry UIs that can embed Custom Widgets and the Custom Widgets themselves. It provides the type definitions, interfaces, and utility functions needed for communication between host Foundry applications and embedded Custom Widgets.

## Overview

The `@osdk/widget.api` package is a core component of the Custom Widget system. It defines:

- Widget configuration and parameter definitions
- Message interfaces between widgets and their host applications
- Widget manifest format for deployment
- Parameter value handling

## Key Components

### Custom Widget Configuration

The package provides a `defineConfig` utility to create type-safe widget configurations:

```typescript
import { defineConfig } from "@osdk/widget.api";

export default defineConfig({
  id: "my-widget",
  name: "My Widget",
  description: "A custom widget for Foundry",
  type: "workshop",
  parameters: {
    // Define parameters that can be passed to the widget
    title: {
      displayName: "Widget Title",
      type: "string",
    },
    showControls: {
      displayName: "Show Controls",
      type: "boolean",
    },
  },
  events: {
    // Define events that the widget can emit to update parameters
    updateTitle: {
      displayName: "Update Title",
      parameterUpdateIds: ["title"],
    },
  },
});
```

### Parameter Types

The package supports various parameter types for widgets:

- Primitive types: string, number, boolean, date
- Array parameters with primitive subtypes
- ObjectSet parameters for working with Foundry objects

### Communication Protocol

The package defines message interfaces for bidirectional communication:

- **Host Messages**: Messages from the Foundry host to widgets
  - `HostMessage.UpdateParameters`: Used by the host to send parameter values to the widget
  - Type guards: `isHostParametersUpdatedMessage()` to check message types
  - Message handling: `visitHostMessage()` provides a visitor pattern for processing messages

- **Widget Messages**: Messages from widgets to the Foundry host
  - `WidgetMessage.Ready`: Notifies the host that the widget is ready to receive parameters
  - `WidgetMessage.EmitEvent`: Sends events from the widget to the host to update parameters
  - Type guards: `isWidgetReadyMessage()`, `isWidgetEmitEventMessage()`
  - Message handling: `visitWidgetMessage()` for visitor pattern processing

Example of handling a host message:

```typescript
import { visitHostMessage } from "@osdk/widget.api";

// Process an incoming message from the host
visitHostMessage(message, {
  "host.update-parameters": (payload) => {
    // Handle updated parameters
    console.log("Received parameters:", payload.parameters);
  },
  _unknown: (type) => {
    console.warn("Unknown message type:", type);
  },
});
```

Example of creating widget messages:

```typescript
// Create a ready message
const readyMessage = {
  type: "widget.ready",
  payload: {
    apiVersion: "1.0.0",
  },
};

// Create an event message
const eventMessage = {
  type: "widget.emit-event",
  payload: {
    eventId: "updateTitle",
    parameterUpdates: {
      title: "New Title",
    },
  },
};
```

### Manifest

The package provides types for widget manifests, which are used when publishing widgets to a Foundry instance:

- Widget metadata
- Entry point specification
- Input/output contract definition

## Related Packages

- [`@osdk/widget.client`](../widget.client/): Client implementation for communication between widgets and Foundry
- [`@osdk/widget.client-react`](../widget.client-react/): React components for building widgets
- [`@osdk/widget.vite-plugin`](../widget.vite-plugin/): Vite plugin for building and deploying widgets to Foundry
