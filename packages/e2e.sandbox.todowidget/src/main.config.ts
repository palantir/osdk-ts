import { defineConfig } from "@osdk/widget.client";

const MyObjectType = {
  type: "object",
  apiName: "my_object_type",
  internalDoNotUseMetadata: {
    rid: "ri.object-type.my_object_type",
  },
  __DefinitionMetadata: {
    objectSet: { yippee: 3 },
  } as const,
} as const;

export default defineConfig({
  id: "widgetOne",
  name: "Widget One",
  description: "First widget",
  type: "workshop",
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
    },
    datasetRid: {
      displayName: "Dataset RID",
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
    objectSet: {
      type: "objectSet",
      displayName: "My Object Set",
      objectType: MyObjectType,
    },
  },
  events: {
    updateHeader: {
      displayName: "Update header",
      parameterUpdateIds: ["headerText"],
    },
    updateTodoItems: {
      displayName: "Update todo items",
      parameterUpdateIds: ["todoItems"],
    },
  },
});
