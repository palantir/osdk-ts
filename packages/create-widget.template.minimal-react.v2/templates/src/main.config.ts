import { defineConfig } from "@osdk/widget.client";

// Widget config changes are previewed in dev mode without publishing but don't hot-reload.
// Reapply dev mode settings to see changes.

export default defineConfig({
  id: "widgetId",
  name: "Custom Widget",
  description: "An example custom widget implementation",
  type: "workshop",
  parameters: {
    greetingName: {
      displayName: "Greeting name",
      type: "string",
    },
    counterValue: {
      displayName: "Counter value",
      type: "number",
    },
  },
  events: {
    setCounterValue: {
      displayName: "Set counter value",
      parameterUpdateIds: ["counterValue"],
    },
  },
});
