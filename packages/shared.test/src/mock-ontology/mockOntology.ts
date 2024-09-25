/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type {
  MinActionDef,
  ObjectMetadata,
  ObjectTypeLinkDefinition,
  VersionBound,
} from "@osdk/api";
import type { ObjectTypeWithAllPropertyTypesDef } from "./ObjectTypeWithAllPropertyTypes.js";
import { ObjectTypeWithAllPropertyTypes } from "./ObjectTypeWithAllPropertyTypes.js";
import type { ObjectTypeWithReservedNamesDef } from "./ObjectTypeWithReservedNames.js";
import { ObjectTypeWithReservedNames } from "./ObjectTypeWithReservedNames.js";

const osdkMetadata = {
  extraUserAgent: "typescript-sdk/0.0.0 osdk-cli/0.0.0",
};

const Task: TaskDef = {
  type: "object",
  apiName: "Task",
  primaryKeyApiName: "id",
  primaryKeyType: "integer",
  icon: {
    type: "blueprint",
    name: "icon",
    color: "blue",
  },
  properties: {
    id: { type: "integer", nullable: true },
  },
  links: {
    linkedTodos: {
      multiplicity: true,
      targetType: "Todo",
    },
  },
  titleProperty: "id",
  displayName: "Task",
  pluralDisplayName: "Tasks",
  status: "ACTIVE",
  interfaceMap: {},
  inverseInterfaceMap: {},
  rid: "",
};

const Todo: TodoDef = {
  type: "object",
  apiName: "Todo",
  primaryKeyApiName: "id",
  primaryKeyType: "string",
  description: "A todo object",
  icon: {
    type: "blueprint",
    name: "icon",
    color: "blue",
  },
  properties: {
    id: { type: "string", nullable: true, description: "The id" },
    body: { type: "string", nullable: true },
    class: { type: "string", nullable: true },
    complete: { type: "boolean", nullable: true },
    tags: { type: "string", multiplicity: true, nullable: true },
    points: { type: "integer", nullable: true },
    unixTimestamp: { type: "long", nullable: true },
  },
  links: {
    linkedTask: {
      multiplicity: false,
      targetType: "Task",
    },
  },
  titleProperty: "id",
  displayName: "Todo",
  pluralDisplayName: "Todo's",
  status: "ACTIVE",
  interfaceMap: {},
  inverseInterfaceMap: {},
  rid: "",
};

interface TodoDef extends ObjectMetadata<"Todo">, VersionBound<"0.15.0"> {
  type: "object";
  apiName: "Todo";
  primaryKeyApiName: "id";
  primaryKeyType: "string";
  description: "A todo object";
  properties: {
    id: { type: "string"; nullable: true; description: "The id" };
    body: { type: "string"; nullable: true };
    class: { type: "string"; nullable: true };
    complete: { type: "boolean"; nullable: true };
    tags: { type: "string"; multiplicity: true; nullable: true };
    points: { type: "integer"; nullable: true };
    unixTimestamp: { type: "long"; nullable: true };
  };
  links: {
    linkedTask: ObjectTypeLinkDefinition<TaskDef, false>;
  };
}

interface TaskDef extends ObjectMetadata<"Task">, VersionBound<"0.15.0"> {
  type: "object";
  apiName: "Task";
  primaryKeyApiName: "id";
  primaryKeyType: "integer";
  properties: {
    id: { type: "integer"; nullable: true };
  };
  links: {
    linkedTodos: ObjectTypeLinkDefinition<TodoDef, true>;
  };
}

export type ActionDef$updateTask$Parameters = {
  task: {
    type: {
      type: "object";
      object: "Task";
    };
    multiplicity: false;
    nullable: true;
  };
  tasks: {
    type: {
      type: "objectSet";
      objectSet: "Task";
    };
    multiplicity: false;
    nullable: true;
  };
  value: {
    type: "boolean";
    nullable: true;
  };
};

interface ActionDef$updateTask extends MinActionDef<"updateTask", "Task"> {
  type: "action";
  apiName: "updateTask";
  parameters: ActionDef$updateTask$Parameters;
  BaseActionDefinition: {
    Task: { modified: true; created: false };
  };
}

const updateTask: ActionDef$updateTask = {
  type: "action",
  apiName: "updateTask",
  parameters: {
    task: {
      type: {
        type: "object",
        object: "Task",
      },
      multiplicity: false,
      nullable: true,
    },
    tasks: {
      type: {
        type: "objectSet",
        objectSet: "Task",
      },
      multiplicity: false,
      nullable: true,
    },
    value: {
      type: "boolean",
      nullable: true,
    },
  },
  BaseActionDefinition: {
    Task: { modified: true, created: false },
  },
  osdkMetadata: {
    extraUserAgent: "",
  },
};

export const MockOntology = {
  metadata: {
    ontologyRid: "",
    ontologyApiName: "Ontology",
    userAgent: "typescript-sdk/0.0.0 osdk-cli/0.0.0",
  },
  objects: {
    Task: Task as TaskDef,
    Todo: Todo as TodoDef,
    ObjectTypeWithAllPropertyTypes:
      ObjectTypeWithAllPropertyTypes as ObjectTypeWithAllPropertyTypesDef, // forces the type to be imported allowing attw to work
    ObjectTypeWithReservedNames:
      ObjectTypeWithReservedNames as ObjectTypeWithReservedNamesDef, // forces the type to be imported allowing attw to work
  },
  actions: {
    createTask: {
      type: "action",
      apiName: "createTask",
      parameters: {
        id: { type: "integer", nullable: true },
      },
      modifiedEntities: {
        Task: { modified: false, created: true },
      },
    },
    createTodo: {
      type: "action",
      apiName: "createTodo",
      parameters: {},
      modifiedEntities: {
        Todo: { modified: false, created: true },
      },
    },
    updateTask: updateTask as ActionDef$updateTask,
  },
  queries: {
    queryTakesNoParameters: {
      type: "query",
      apiName: "queryTakesNoParameters",
      description: "a query that does not require parameters",
      version: "version",
      parameters: {},
      output: {
        type: "integer",
        nullable: true,
      },
    },
    queryReturnsAggregation: {
      type: "query",
      apiName: "queryReturnsAggregation",
      description: "a query that returns an aggregation",
      version: "version",
      parameters: {},
      output: {
        type: "threeDimensionalAggregation",
        threeDimensionalAggregation: {
          keyType: "string",
          valueType: { keyType: "boolean", valueType: "double" },
        },
        nullable: false,
      },
    },
    queryTakesAllParameterTypes: {
      type: "query",
      apiName: "queryTakesAllParameterTypes",
      description: "description of the query that takes all parameter types",
      displayName: "qTAPT",
      version: "version",
      parameters: {
        double: {
          description: "a double parameter",
          type: "double",
          nullable: false,
        },
        float: { type: "float", nullable: false },
        integer: { type: "integer", nullable: false },
        long: { type: "long", nullable: false },
        attachment: { type: "attachment", nullable: false },
        boolean: { type: "boolean", nullable: false },
        date: { type: "date", nullable: false },
        string: { type: "string", nullable: false },
        timestamp: { type: "timestamp", nullable: false },
        object: {
          type: "object",
          object: "Todo",
          nullable: false,
        },
        objectSet: {
          type: "objectSet",
          objectSet: "Todo",
          nullable: false,
        },
        array: {
          description: "an array of strings",
          type: "string",
          nullable: false,
          multiplicity: true,
        },
        set: {
          description: "a set of strings",

          type: "set",
          set: { type: "string", nullable: false },
          nullable: false,
        },
        unionNonNullable: {
          description: "a union of strings and integers",

          type: "union",
          union: [
            { type: "string", nullable: false },
            { type: "integer", nullable: false },
          ] as const,

          nullable: false,
        },
        unionNullable: {
          description: "a union of strings and integers but its optional",

          type: "union",
          union: [
            { type: "string", nullable: false },
            { type: "integer", nullable: false },
          ] as const,

          nullable: true,
        },
        struct: {
          description: "a struct with some fields",

          type: "struct",
          struct: {
            name: { type: "string", nullable: false },
            id: { type: "integer", nullable: true },
          },
          nullable: false,
        },
        twoDimensionalAggregation: {
          type: "twoDimensionalAggregation",
          twoDimensionalAggregation: {
            keyType: "string",
            valueType: "double",
          },
        },
        threeDimensionalAggregation: {
          type: "threeDimensionalAggregation",
          threeDimensionalAggregation: {
            keyType: "range",
            keySubtype: "date",
            valueType: {
              keyType: "range",
              keySubtype: "timestamp",
              valueType: "date",
            },
          },
        },
      },
      output: {
        type: "object",
        object: "Todo",
        nullable: false,
      },
    },
    queryTakesNestedObjects: {
      type: "query",
      apiName: "queryTakesNestedObjects",
      description: "a query that takes nested objects inside other types",
      version: "version",
      output: { type: "boolean" },
      parameters: {
        struct: {
          type: "struct",
          struct: {
            object: {
              type: "object",
              object: "Todo",
              nullable: false,
            },
          },
          nullable: false,
        },
        set: {
          type: "set",
          set: {
            type: "object",
            object: "Todo",
          },

          nullable: false,
        },
      },
    },
    queryWithOnlyOptionalArgs: {
      type: "query",
      apiName: "queryWithOnlyOptionalArgs",
      description: "a query that only has optional args",
      version: "version",
      output: { type: "boolean" },
      parameters: {
        string: {
          type: "string",
          nullable: true,
        },
      },
    },
    queryWithOnlyRequiredArgs: {
      type: "query",
      apiName: "queryWithOnlyRequiredArgs",
      description: "a query that only has required args",
      version: "version",
      output: { type: "boolean" },
      parameters: {
        string: {
          type: "string",
          nullable: false,
        },
      },
    },
  },
} as const;
type capture = typeof MockOntology;
export interface MockOntology extends capture {
}
