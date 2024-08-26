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

import type { ObjectTypeDefinition, ObjectTypeLinkDefinition } from "@osdk/api";

export const Task: TaskDef = {
  type: "object",
  apiName: "Task",
  primaryKeyApiName: "id",
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
};

export interface TaskDef extends ObjectTypeDefinition<"Task"> {
  type: "object";
  apiName: "Task";
  primaryKeyApiName: "id";
  primaryKeyType: "integer";
  properties: {
    id: { type: "integer" };
    name: { type: "string" };
  };
  links: {
    "Todos": ObjectTypeLinkDefinition<TodoDef, true>;
    "RP": ObjectTypeLinkDefinition<PersonDef, false>;
  };
}

export const Todo: TodoDef = {
  type: "object",
  apiName: "Todo",
  primaryKeyApiName: "id",
  primaryKeyType: "integer",
  properties: {
    id: { type: "integer" },
    text: { type: "string" },
  },
  links: {},
};

export interface TodoDef extends ObjectTypeDefinition<"Todo"> {
  type: "object";
  apiName: "Todo";
  primaryKeyApiName: "id";
  primaryKeyType: "integer";
  properties: {
    id: { type: "integer" };
    text: { type: "string" };
  };
  links: {};
}

export const Person: PersonDef = {
  type: "object",
  apiName: "Person",
  primaryKeyApiName: "id",
  primaryKeyType: "integer",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
  },
  links: {},
};

export interface PersonDef extends ObjectTypeDefinition<"Person"> {
  type: "object";
  apiName: "Person";
  primaryKeyApiName: "id";
  primaryKeyType: "integer";
  properties: {
    id: { type: "integer" };
    name: { type: "string" };
  };
  links: {};
}

export const metadata = {
  expectsClientVersion: "0.0.0",
  ontologyRid: "ontologyRid",
  ontologyApiName: "ontologyApiName",
  userAgent: "userAgent",
};
