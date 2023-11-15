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

import type { OntologyDefinition } from "@osdk/api";
import { ObjectTypeWithAllPropertyTypes } from "./ObjectTypeWithAllPropertyTypes";
import { ObjectTypeWithReservedNames } from "./ObjectTypeWithReservedNames";

export const MockOntology = {
  metadata: {
    ontologyRid: "",
    ontologyApiName: "Ontology",
    userAgent: "",
  },
  objects: {
    Task: {
      apiName: "Task",
      primaryKeyType: "integer",
      properties: {
        id: { type: "integer", nullable: true },
      },
      links: {
        linkedTodos: { multiplicity: true, targetType: "Todo" },
      },
    },
    Todo: {
      apiName: "Todo",
      primaryKeyType: "string",
      description: "A todo object",
      properties: {
        id: {
          type: "string",
          nullable: true,
          description: "The id of the Todo Object",
        },
        body: { type: "string", nullable: true },
        class: { type: "string", nullable: true },
        complete: { type: "boolean", nullable: true },
        points: { type: "integer", nullable: true },
      },
      links: {
        linkedTask: { multiplicity: false, targetType: "Task" },
      },
    },
    ObjectTypeWithAllPropertyTypes,
    ObjectTypeWithReservedNames,
  },
  actions: {
    createTask: {
      apiName: "createTask",
      parameters: {
        id: { type: "integer", nullable: true },
      },
      modifiedEntities: {
        Task: { modified: false, created: true },
      },
    },
    createTodo: {
      apiName: "createTodo",
      parameters: {},
      modifiedEntities: {
        Todo: { modified: false, created: true },
      },
    },
    updateTask: {
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
      modifiedEntities: {
        Task: { modified: true, created: false },
      },
    },
  },
  queries: {
    queryTakesNoParameters: {
      apiName: "queryTakesNoParameters",
      description: "a query that does not require parameters",
      rid: "query.rid.1",
      version: "version",
      parameters: {},
      output: {
        type: "integer",
        nullable: true,
      },
    },
    queryReturnsAggregation: {
      apiName: "queryReturnsAggregation",
      description: "a query that returns an aggregation",
      rid: "query.rid.2",
      version: "version",
      parameters: {},
      output: {
        type: {
          type: "threeDimensionalAggregation",
          threeDimensionalAggregation: {
            keyType: "string",
            valueType: { keyType: "boolean", valueType: "double" },
          },
        },
        nullable: false,
      },
    },
    queryTakesAllParameterTypes: {
      apiName: "queryTakesAllParameterTypes",
      description: "description of the query that takes all parameter types",
      displayName: "qTAPT",
      rid: "query.rid.3",
      version: "version",
      parameters: {
        double: {
          description: "a double parameter",
          dataType: { type: "double", nullable: false },
        },
        float: { dataType: { type: "float", nullable: false } },
        integer: { dataType: { type: "integer", nullable: false } },
        long: { dataType: { type: "long", nullable: false } },
        attachment: { dataType: { type: "attachment", nullable: false } },
        boolean: { dataType: { type: "boolean", nullable: false } },
        date: { dataType: { type: "date", nullable: false } },
        string: { dataType: { type: "string", nullable: false } },
        timestamp: { dataType: { type: "timestamp", nullable: false } },
        object: {
          dataType: {
            type: { type: "object", object: "Todo" },
            nullable: false,
          },
        },
        objectSet: {
          dataType: {
            type: { type: "objectSet", objectSet: "Todo" },
            nullable: false,
          },
        },
        array: {
          description: "an array of strings",
          dataType: { type: "string", nullable: false, multiplicity: true },
        },
        set: {
          description: "a set of strings",
          dataType: {
            type: { type: "set", set: { type: "string", nullable: false } },
            nullable: false,
          },
        },
        unionNonNullable: {
          description: "a union of strings and integers",
          dataType: {
            type: {
              type: "union",
              union: [
                { type: "string", nullable: false },
                { type: "integer", nullable: false },
              ],
            },
            nullable: false,
          },
        },
        unionNullable: {
          description: "a union of strings and integers but its optional",
          dataType: {
            type: {
              type: "union",
              union: [
                { type: "string", nullable: false },
                { type: "integer", nullable: false },
              ],
            },
            nullable: true,
          },
        },
        struct: {
          description: "a struct with some fields",
          dataType: {
            type: {
              type: "struct",
              struct: {
                name: { type: "string", nullable: false },
                id: { type: "integer", nullable: true },
              },
            },
            nullable: false,
          },
        },
        twoDimensionalAggregation: {
          dataType: {
            type: {
              type: "twoDimensionalAggregation",
              twoDimensionalAggregation: {
                keyType: "string",
                valueType: "double",
              },
            },
          },
        },
        threeDimensionalAggregation: {
          dataType: {
            type: {
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
        },
      },
      output: { type: "string", nullable: false },
    },
  },
} satisfies OntologyDefinition<
  | "Task"
  | "Todo"
  | "ObjectTypeWithAllPropertyTypes"
  | "ObjectTypeWithReservedNames",
  "createTask" | "updateTask" | "createTodo"
>;
