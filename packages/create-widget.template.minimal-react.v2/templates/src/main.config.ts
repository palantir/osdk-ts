import { defineConfig } from "@osdk/widget.client";

// Any updates to the widget configuration in this file such as new parameters
// and events will not be reflected in dev mode. Publish a new version of the
// widget set to start developing against configuration changes.

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
