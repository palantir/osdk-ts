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

import type { WireOntologyDefinition } from "../../WireOntologyDefinition.js";

export const TodoWireOntology = {
  ontology: {
    rid: "ridHere",
    apiName: "OntologyApiName",
    displayName: "",
    description: "",
  },
  actionTypes: {
    "markTodoCompleted": {
      apiName: "markTodoCompleted",
      description: "An action which takes different types of parameters",
      parameters: {
        object: {
          description: "A Todo to mark completed",
          dataType: {
            type: "object",
            objectApiName: "Todo",
            objectTypeApiName: "Todo",
          },
          required: false,
        },
      },
      rid: "ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2",
      operations: [{
        type: "modifyObject",
        objectTypeApiName: "Todo",
      }],
      status: "ACTIVE",
    },
    "deleteTodos": {
      apiName: "deleteTodos",
      description: "An action which takes in an array of objects",
      parameters: {
        object: {
          description: "Todo(s) to be deleted",
          "dataType": {
            "type": "array",

            "subType": {
              "type": "object",
              "objectApiName": "Todo",
              "objectTypeApiName": "Todo",
            },
          },
          required: false,
        },
      },
      rid: "ri.ontology.main.action-type.8f94017d-cf17-4fa8-84c3-8e01e5d594f2",
      operations: [{
        type: "deleteObject",
        objectTypeApiName: "Todo",
      }],
      status: "ACTIVE",
    },
  },
  objectTypes: {
    Todo: {
      objectType: {
        apiName: "Todo",
        primaryKey: "id",
        displayName: "AwesomeTodoDisplayname",
        description: "Its a todo item.",
        titleProperty: "body",
        properties: {
          id: {
            dataType: {
              type: "integer",
            },
          },
          body: {
            dataType: {
              type: "string",
            },
            description: "The text of the todo",
            displayName: "Body",
          },
          complete: {
            dataType: {
              type: "boolean",
            },
          },
        },
        status: "ACTIVE",
        rid: "ridForTodo",
      },
      linkTypes: [{
        apiName: "Assignee",
        cardinality: "ONE",
        displayName: "Assignee",
        objectTypeApiName: "Person",
        status: "ACTIVE",
        foreignKeyPropertyApiName: "email",
      }],
      implementsInterfaces: ["SomeInterface"],
      implementsInterfaces2: {
        "SomeInterface": {
          properties: {
            "SomeProperty": "body",
          },
        },
      },
      sharedPropertyTypeMapping: {},
    },
    Person: {
      objectType: {
        apiName: "Person",
        primaryKey: "email",
        displayName: "Person",
        description: "A person",
        titleProperty: "email",
        properties: {
          email: {
            dataType: {
              type: "string",
            },
          },
        },

        rid: "ridForPerson",
        status: "ACTIVE",
      },
      linkTypes: [{
        apiName: "Todos",
        cardinality: "MANY",
        displayName: "Todos",
        objectTypeApiName: "Todo",
        status: "ACTIVE",
        foreignKeyPropertyApiName: "id",
      }],
      implementsInterfaces: [],
      implementsInterfaces2: {},
      sharedPropertyTypeMapping: {},
    },
  },
  queryTypes: {
    "getCount": {
      apiName: "getCount",
      output: {
        type: "integer",
      },
      parameters: {
        completed: { dataType: { type: "boolean" } },
      },
      rid: "rid.query.1",
      version: "0",
    },
    "returnsTodo": {
      apiName: "returnsTodo",
      output: {
        type: "object",
        objectApiName: "Todo",
        objectTypeApiName: "Todo",
      },
      parameters: {
        someTodo: {
          description: "Random desc so we test jsdoc",
          dataType: {
            type: "object",
            objectApiName: "Todo",
            objectTypeApiName: "Todo",
          },
        },
      },
      rid: "rid.query.2",
      version: "0",
    },
  },
  interfaceTypes: {
    SomeInterface: {
      apiName: "SomeInterface",
      description: "Some interface",
      properties: {
        "SomeProperty": {
          apiName: "SomeProperty",
          description: "Some property",
          displayName: "Sum Property",
          dataType: {
            type: "string",
          },
          rid: "idk2",
        },
      },
      rid: "idk",
      displayName: "Sum Interface",
      extendsInterfaces: [],
      links: {},
    },
  },
  sharedPropertyTypes: {
    SomeProperty: {
      apiName: "SomeProperty",
      description: "Some property",
      displayName: "Sum Property",
      dataType: {
        type: "string",
      },
      rid: "idk2",
    },
  },
} satisfies WireOntologyDefinition;
