import type { WidgetConfig } from "@osdk/widget-client.unstable";

const Config: {
  type: "workshop";
  rid: "ri.widgetregistry..widget.1234-0000-0000-0000";
  parameters: {
    headerText: {
      displayName: "Widget title";
      type: "string";
    };
    showWarning: {
      displayName: "Show warning callout";
      type: "boolean";
    };
  };
  events: {
    updateHeader: {
      displayName: "Update header";
      parameterUpdateIds: ["headerText"];
    };
  };
} = {
  type: "workshop",
  rid: "ri.widgetregistry..widget.1234-0000-0000-0000",
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
    },
    showWarning: {
      displayName: "Show warning callout",
      type: "boolean",
    },
  },
  events: {
    updateHeader: {
      displayName: "Update header",
      parameterUpdateIds: ["headerText"] as const,
    },
  },
} as const satisfies WidgetConfig<any>;

export default Config;
