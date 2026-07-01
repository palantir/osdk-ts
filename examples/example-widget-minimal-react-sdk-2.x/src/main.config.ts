import { defineConfig } from "@osdk/widget.client";

// Any updates to the widget configuration in this file such as new parameters
// and events will not be reflected in dev mode. Publish a new version of the
// widget set to start developing against configuration changes.

export default defineConfig({
  description: "An example custom widget implementation",
  events: {
    setCounterValue: {
      displayName: "Set counter value",
      parameterUpdateIds: ["counterValue"],
    },
  },
  id: "widgetId",
  name: "Custom Widget",
  parameters: {
    counterValue: {
      displayName: "Counter value",
      type: "number",
    },
    greetingName: {
      displayName: "Greeting name",
      type: "string",
    },
  },
  type: "workshop",
});
