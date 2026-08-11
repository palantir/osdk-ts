import { defineConfig } from "@osdk/widget.client";

// Updates to the widget configuration in this file require reapplying dev mode
// to preview the changes. When developing locally, open the setup URL printed
// in your terminal again. When developing in Code Workspaces, refresh the
// preview panel.

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
