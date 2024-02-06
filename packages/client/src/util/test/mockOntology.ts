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

export const MockOntology = {
  metadata: {
    ontologyRid: "ontologyRid",
    ontologyApiName: "ontologyApiName",
    userAgent: "userAgent",
  },
  objects: {
    Task: {
      type: "object",
      apiName: "Task",
      primaryKeyType: "integer",
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
      },
      links: {
        "Todos": {
          targetType: "Todo",
          multiplicity: true,
        },
        "RP": {
          targetType: "Person",
          multiplicity: false,
        },
      },
    },
    Todo: {
      type: "object",
      apiName: "Todo",
      primaryKeyType: "integer",
      properties: {
        id: { type: "integer" },
        text: { type: "string" },
      },
      links: {},
    },
    Person: {
      type: "object",
      apiName: "Person",
      primaryKeyType: "integer",
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
      },
      links: {},
    },
  },
  actions: {},
  queries: {},
} satisfies OntologyDefinition<"Task" | "Todo" | "Person">;
