/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  AgentDefinitionVersion,
  DataType,
  StructField,
} from "@osdk/foundry.agents";

import { defaultOntologyMetadata } from "./ontologies/defaultOntologyMetadata.js";

export const weatherAgentApiName = "weatherAgent";

export const weatherAgentVersion: AgentDefinitionVersion = {
  version: "1.2.3",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  argumentDefinitions: [{ name: "city", dataType: { type: "string" } }],
  eventDefinitions: [
    {
      eventType: "LookupWeather",
      payloadType: {
        type: "struct",
        fields: [{ name: "city", dataType: { type: "string" } }],
      },
    },
  ],
  agentStateType: {
    type: "struct",
    fields: [{ name: "temperature", dataType: { type: "integer" } }],
  },
  contextItemDefinitions: [
    { contextItemType: "weather-result", dataType: { type: "string" } },
  ],
};

export const weatherAgentOtherVersion: AgentDefinitionVersion = {
  ...weatherAgentVersion,
  version: "2.0.0",
};

export const noArgumentsAgentApiName = "noArgumentsAgent";
export const noArgumentsAgentVersion: AgentDefinitionVersion = {
  version: "1.2.3",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  argumentDefinitions: [],
  eventDefinitions: [],
  agentStateType: { type: "struct", fields: [] },
  contextItemDefinitions: [],
};

export const noArgumentsAgentOtherVersion: AgentDefinitionVersion = {
  ...noArgumentsAgentVersion,
  version: "2.0.0",
};

const employeeField: StructField = {
  name: "employee",
  dataType: {
    type: "object",
    ontologyApiName: defaultOntologyMetadata.apiName,
    objectTypeApiName: "Employee",
  },
};

const employeesField: StructField = {
  name: "employees",
  dataType: {
    type: "objectSet",
    ontologyApiName: defaultOntologyMetadata.apiName,
    objectTypeApiName: "Employee",
  },
};

export const objectArgumentsAgentApiName = "objectArgumentsAgent";
export const objectArgumentsAgentVersion: AgentDefinitionVersion = {
  version: "1.2.3",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  argumentDefinitions: [employeeField, employeesField],
  eventDefinitions: [],
  agentStateType: { type: "struct", fields: [] },
  contextItemDefinitions: [],
};

export const optionalArgumentsAgentApiName = "optionalArgumentsAgent";
export const optionalArgumentsAgentVersion: AgentDefinitionVersion = {
  version: "1.2.3",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  eventDefinitions: [],
  agentStateType: { type: "struct", fields: [] },
  contextItemDefinitions: [],
  argumentDefinitions: [
    {
      name: "city",
      dataType: { type: "nullable", wrappedType: { type: "string" } },
    },
  ],
};

export const structuredArgumentsAgentApiName = "structuredArgumentsAgent";
export const structuredArgumentsAgentVersion: AgentDefinitionVersion = {
  version: "1.2.3",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  eventDefinitions: [],
  agentStateType: { type: "struct", fields: [] },
  contextItemDefinitions: [],
  argumentDefinitions: [
    { name: "requiredText", dataType: { type: "string" } },
    {
      name: "optionalText",
      dataType: { type: "nullable", wrappedType: { type: "string" } },
    },
    {
      name: "nested",
      dataType: {
        type: "struct",
        fields: [
          {
            name: "label",
            dataType: { type: "nullable", wrappedType: { type: "string" } },
          },
          { name: "enabled", dataType: { type: "boolean" } },
          { name: "count", dataType: { type: "integer" } },
          { name: "date", dataType: { type: "date" } },
          { name: "timestamp", dataType: { type: "timestamp" } },
          { name: "float", dataType: { type: "float" } },
          { name: "long", dataType: { type: "long" } },
          { name: "short", dataType: { type: "short" } },
          { name: "empty", dataType: { type: "struct", fields: [] } },
          {
            name: "tags",
            dataType: { type: "list", elementType: { type: "string" } },
          },
          {
            name: "scores",
            dataType: { type: "record", valueType: { type: "double" } },
          },
        ],
      },
    },
    {
      name: "selection",
      dataType: {
        type: "discriminatedUnion",
        discriminatorKey: "kind",
        members: [
          {
            discriminatorValue: "employee",
            fields: [employeeField],
          },
          {
            discriminatorValue: "employees",
            fields: [employeesField],
          },
        ],
      },
    },
    { name: "future", dataType: { type: "futureType" } as unknown as DataType },
  ],
};
