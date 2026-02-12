import { defineConfig } from "@osdk/widget.client.unstable";

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
