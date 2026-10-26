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

import type { FauxOntology } from "@osdk/faux";
import { Errors, OpenApiCallError } from "@osdk/faux";
import type {
  AgentSession,
  CreateAgentSessionRequest,
} from "@osdk/foundry.agents";
import deepEqual from "fast-deep-equal";

import { createLazyAgentImpl } from "../createLazyAgentImpl.js";
import {
  noArgumentsAgentApiName,
  noArgumentsAgentOtherVersion,
  noArgumentsAgentVersion,
  objectArgumentsAgentApiName,
  objectArgumentsAgentVersion,
  optionalArgumentsAgentApiName,
  optionalArgumentsAgentVersion,
  structuredArgumentsAgentApiName,
  structuredArgumentsAgentVersion,
  weatherAgentApiName,
  weatherAgentOtherVersion,
  weatherAgentVersion,
} from "./agentDefinitions.js";
import { employeeObjectSet } from "./objectSets.js";
import { defaultOntologyMetadata } from "./ontologies/defaultOntologyMetadata.js";

export const weatherAgentRequest: CreateAgentSessionRequest = {
  agent: {
    type: "agentApiName",
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: weatherAgentApiName,
  },
  agentVersion: weatherAgentVersion.version,
  arguments: { city: "London" },
};

export const weatherAgentResponse: AgentSession = {
  id: "weather-session",
  agentRid: "ri.aip-agents.main.agent.weather",
  agentVersion: weatherAgentVersion.version,
};

export const weatherAgentOtherVersionRequest: CreateAgentSessionRequest = {
  ...weatherAgentRequest,
  agentVersion: weatherAgentOtherVersion.version,
};

export const weatherAgentOtherVersionResponse: AgentSession = {
  ...weatherAgentResponse,
  id: "weather-session-other-version",
  agentVersion: weatherAgentOtherVersion.version,
};

export const noArgumentsAgentRequest: CreateAgentSessionRequest = {
  agent: {
    type: "agentApiName",
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: noArgumentsAgentApiName,
  },
  agentVersion: noArgumentsAgentVersion.version,
  arguments: {},
};

export const noArgumentsAgentResponse: AgentSession = {
  id: "no-arguments-session",
  agentRid: "ri.aip-agents.main.agent.no-arguments",
  agentVersion: noArgumentsAgentVersion.version,
};

export const noArgumentsAgentOtherVersionRequest: CreateAgentSessionRequest = {
  ...noArgumentsAgentRequest,
  agentVersion: noArgumentsAgentOtherVersion.version,
};

export const noArgumentsAgentOtherVersionResponse: AgentSession = {
  ...noArgumentsAgentResponse,
  id: "no-arguments-session-other-version",
  agentVersion: noArgumentsAgentOtherVersion.version,
};

export function objectArgumentsAgentRequest(
  objectSetRid: string,
): CreateAgentSessionRequest {
  return {
    agent: {
      type: "agentApiName",
      ontology: defaultOntologyMetadata.rid as string,
      agentApiName: objectArgumentsAgentApiName,
    },
    agentVersion: objectArgumentsAgentVersion.version,
    arguments: {
      employee: {
        ontologyRid: defaultOntologyMetadata.rid,
        objectTypeApiName: "Employee",
        primaryKey: { employeeId: 50030 },
      },
      employees: objectSetRid,
    },
  };
}

export const objectArgumentsAgentResponse: AgentSession = {
  id: "object-arguments-session",
  agentRid: "ri.aip-agents.main.agent.object-arguments",
  agentVersion: objectArgumentsAgentVersion.version,
};

export const optionalArgumentsAgentRequest: CreateAgentSessionRequest = {
  agent: {
    type: "agentApiName",
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: optionalArgumentsAgentApiName,
  },
  agentVersion: optionalArgumentsAgentVersion.version,
  arguments: {},
};

export const optionalArgumentsAgentWithCityRequest: CreateAgentSessionRequest =
  {
    ...optionalArgumentsAgentRequest,
    arguments: { city: "London" },
  };

export const optionalArgumentsAgentResponse: AgentSession = {
  id: "optional-arguments-session",
  agentRid: "ri.aip-agents.main.agent.optional-arguments",
  agentVersion: optionalArgumentsAgentVersion.version,
};

export const structuredArgumentsAgentRequest: CreateAgentSessionRequest = {
  agent: {
    type: "agentApiName",
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: structuredArgumentsAgentApiName,
  },
  agentVersion: structuredArgumentsAgentVersion.version,
  arguments: {
    requiredText: "hello",
    nested: {
      label: null,
      enabled: true,
      count: 1,
      date: "2026-01-01",
      timestamp: "2026-01-01T00:00:00Z",
      float: 1.5,
      long: 123456789,
      short: 12,
      tags: ["tag"],
      scores: { score: 1 },
      empty: {},
    },
    selection: {
      kind: "employee",
      employee: {
        ontologyRid: defaultOntologyMetadata.rid,
        objectTypeApiName: "Employee",
        primaryKey: { employeeId: 50030 },
      },
    },
    future: { newShape: true },
    optionalText: "text",
  },
};

export const structuredArgumentsAgentResponse: AgentSession = {
  id: "structured-arguments-session",
  agentRid: "ri.aip-agents.main.agent.structured-arguments",
  agentVersion: structuredArgumentsAgentVersion.version,
};

const agentRequestHandlers: {
  [agentApiName: string]: {
    [agentVersion: string]: {
      [agentBody: string]: AgentSession;
    };
  };
} = {
  [weatherAgentApiName]: {
    [weatherAgentVersion.version]: {
      [JSON.stringify(weatherAgentRequest)]: weatherAgentResponse,
    },
    [weatherAgentOtherVersion.version]: {
      [JSON.stringify(weatherAgentOtherVersionRequest)]:
        weatherAgentOtherVersionResponse,
    },
  },
  [optionalArgumentsAgentApiName]: {
    [optionalArgumentsAgentVersion.version]: {
      [JSON.stringify(optionalArgumentsAgentRequest)]:
        optionalArgumentsAgentResponse,
      [JSON.stringify(optionalArgumentsAgentWithCityRequest)]:
        optionalArgumentsAgentResponse,
    },
  },
  [structuredArgumentsAgentApiName]: {
    [structuredArgumentsAgentVersion.version]: {
      [JSON.stringify(structuredArgumentsAgentRequest)]:
        structuredArgumentsAgentResponse,
    },
  },
  [noArgumentsAgentApiName]: {
    [noArgumentsAgentVersion.version]: {
      [JSON.stringify(noArgumentsAgentRequest)]: noArgumentsAgentResponse,
    },
    [noArgumentsAgentOtherVersion.version]: {
      [JSON.stringify(noArgumentsAgentOtherVersionRequest)]:
        noArgumentsAgentOtherVersionResponse,
    },
  },
};

export function registerLazyAgents(fauxOntology: FauxOntology): void {
  const agentDefinitions = [
    { apiName: weatherAgentApiName, definition: weatherAgentVersion },
    { apiName: weatherAgentApiName, definition: weatherAgentOtherVersion },
    { apiName: noArgumentsAgentApiName, definition: noArgumentsAgentVersion },
    {
      apiName: noArgumentsAgentApiName,
      definition: noArgumentsAgentOtherVersion,
    },
    {
      apiName: optionalArgumentsAgentApiName,
      definition: optionalArgumentsAgentVersion,
    },
    {
      apiName: structuredArgumentsAgentApiName,
      definition: structuredArgumentsAgentVersion,
    },
  ];

  for (const { apiName, definition } of Object.values(agentDefinitions)) {
    const lazyHandlerMap = agentRequestHandlers[apiName][definition.version];
    if (!lazyHandlerMap) {
      throw new Error(
        `Agent definition ${apiName} is not registered in agentRequestHandlers`,
      );
    }

    fauxOntology.registerAgent(
      apiName,
      definition,
      createLazyAgentImpl(lazyHandlerMap),
    );
  }

  // objectArgumentsAgent has an object set argument. For object set arguments we create temporary
  // object sets with new RIDs on each request, which means that we can't use exact request matching
  // for this agent. Here we pull out the object set RID from the request and use it to validate the
  // request.
  fauxOntology.registerAgent(
    objectArgumentsAgentApiName,
    objectArgumentsAgentVersion,
    (request, dataStore) => {
      const objectSetRid = request.arguments.employees;
      if (
        typeof objectSetRid !== "string" ||
        !deepEqual(request, objectArgumentsAgentRequest(objectSetRid)) ||
        !deepEqual(
          dataStore.getObjectSetOrThrow(objectSetRid),
          employeeObjectSet,
        )
      ) {
        throw new OpenApiCallError(
          400,
          Errors.InvalidRequest("Invalid Agent Session Request"),
        );
      }
      return objectArgumentsAgentResponse;
    },
  );
}
