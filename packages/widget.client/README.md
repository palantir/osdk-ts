# @osdk/widget.client

This package provides a client implementation for Custom Widgets embedded in Foundry applications. It implements the communication protocol defined in `@osdk/widget.api` and exposes a simple interface for widget developers to interact with the host Foundry application.

## Overview

`@osdk/widget.client` provides the core functionality for widgets to:

- Notify the host when they are ready to receive parameters
- Listen for parameter updates from the host application
- Emit events back to the host to trigger parameter updates
- Handle the messaging protocol between widget and host

## Installation

```bash
npm install @osdk/widget.client
# or
pnpm add @osdk/widget.client
# or
yarn add @osdk/widget.client
```

## Usage

### Creating a Widget Client

```typescript
import { createFoundryWidgetClient } from "@osdk/widget.client";
import config from "./my-widget.config";

// Create a client instance
const client = createFoundryWidgetClient();

// Subscribe to parameter updates
client.subscribe();

// Listen for parameter updates
client.hostEventTarget.addEventListener("host.update-parameters", (event) => {
  const parameters = event.detail.parameters;
  // Update your widget with the new parameters
  console.log("Received parameters:", parameters);
});

// Signal that the widget is ready to receive parameters
client.ready();

// Later, when you want to emit an event to update parameters
client.emitEvent("updateTitle", {
  parameterUpdates: {
    title: "New Title",
  },
});
```

### Using with Configuration

The client is designed to work with a widget configuration:

```typescript
import { defineConfig } from "@osdk/widget.client";

export default defineConfig({
  id: "my-widget",
  name: "My Widget",
  description: "A custom widget for Foundry",
  type: "workshop",
  parameters: {
    title: {
      displayName: "Title",
      type: "string",
    },
  },
  events: {
    updateTitle: {
      displayName: "Update Title",
      parameterUpdateIds: ["title"],
    },
  },
});
```

## Key Components

### FoundryWidgetClient

The main client interface with methods:

- `ready()`: Signal that the widget is ready to receive parameters
- `emitEvent()`: Emit an event to the host with parameter updates
- `subscribe()`: Start listening for messages from the host
- `unsubscribe()`: Stop listening for messages from the host
- `sendMessage()`: Send a raw message to the host
- `hostEventTarget`: EventTarget for subscribing to host events

### FoundryHostEventTarget

An EventTarget that provides type-safe event handling for host messages.

## Related Packages

- [`@osdk/widget.api`](../widget.api/): Defines the communication protocol between widgets and host
- [`@osdk/widget.client-react`](../widget.client-react/): React components that wrap this client for easier usage in React applications
- [`@osdk/widget.vite-plugin`](../widget.vite-plugin/): Vite plugin for building and deploying widgets to Foundry

## Examples

### Basic Integration

```typescript
import { createFoundryWidgetClient } from "@osdk/widget.client";
import config from "./my-widget.config";

function initializeWidget() {
  const client = createFoundryWidgetClient();

  // Start listening for messages
  client.subscribe();

  // Handle parameter updates
  client.hostEventTarget.addEventListener("host.update-parameters", (event) => {
    const { title, showControls } = event.detail.parameters;

    // Update UI with parameters
    document.getElementById("title").textContent = title.value.value;
    document.getElementById("controls").style.display = showControls.value.value
      ? "block"
      : "none";
  });

  // Set up event handlers
  document.getElementById("updateButton").addEventListener("click", () => {
    const newTitle = document.getElementById("titleInput").value;

    // Emit event to update parameters
    client.emitEvent("updateTitle", {
      parameterUpdates: {
        title: newTitle,
      },
    });
  });

  // Signal readiness
  client.ready();
}

// Initialize when the document is ready
document.addEventListener("DOMContentLoaded", initializeWidget);
```

For React applications, consider using the [`@osdk/widget.client-react`](../widget.client-react/) package which provides a higher-level abstraction.
