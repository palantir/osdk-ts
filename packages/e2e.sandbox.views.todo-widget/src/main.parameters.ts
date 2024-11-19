import type { ParameterConfig } from "@osdk/views-client.unstable";

const MainParameters = {
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
    },
    showWarning: {
      displayName: "Show warning callout",
      type: "boolean",
    },
    todoItems: {
      displayName: "Todo items",
      type: "array",
      subType: "string",
    },
  },
} as const satisfies ParameterConfig;
export default MainParameters;
