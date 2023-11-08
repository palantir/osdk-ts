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
      properties: {
        id: { type: "string", nullable: true },
        body: { type: "string", nullable: true },
        complete: { type: "boolean", nullable: true },
        points: { type: "integer", nullable: true },
      },
      links: {
        linkedTask: { multiplicity: false, targetType: "Task" },
      },
    },
    ObjectTypeWithAllPropertyTypes,
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
  queries: {},
} satisfies OntologyDefinition<
  "Task" | "Todo" | "ObjectTypeWithAllPropertyTypes",
  "createTask" | "updateTask"
>;
