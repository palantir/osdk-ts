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
  noArgsAgentApiName,
  noArgsAgentVersion,
  objectArgumentsAgentApiName,
  objectArgumentsAgentVersion,
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

export const noArgsAgentRequest: CreateAgentSessionRequest = {
  agent: {
    type: "agentApiName",
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: noArgsAgentApiName,
  },
  agentVersion: noArgsAgentVersion.version,
  arguments: {},
};

export const noArgsAgentResponse: AgentSession = {
  id: "no-args-session",
  agentRid: "ri.aip-agents.main.agent.no-args",
  agentVersion: noArgsAgentVersion.version,
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
  [noArgsAgentApiName]: {
    [noArgsAgentVersion.version]: {
      [JSON.stringify(noArgsAgentRequest)]: noArgsAgentResponse,
    },
  },
};

export function registerLazyAgents(fauxOntology: FauxOntology): void {
  const agentDefinitions = [
    { apiName: weatherAgentApiName, definition: weatherAgentVersion },
    { apiName: weatherAgentApiName, definition: weatherAgentOtherVersion },
    { apiName: noArgsAgentApiName, definition: noArgsAgentVersion },
  ];

  for (const { apiName, definition } of Object.values(agentDefinitions)) {
    const lazyHandlerMap = agentRequestHandlers[apiName][definition.version];
    if (!lazyHandlerMap) {
      throw new Error(
        `Agent definition ${apiName} is not registered in agentRequestHandlers`,
      );
    }

    fauxOntology.registerAgentType(
      apiName,
      definition,
      createLazyAgentImpl(lazyHandlerMap),
    );
  }

  // objectArgumentsAgent has an object set argument. For object set arguments we create temporary
  // object sets with new RIDs on each request, which means that we can't use exact request matching
  // for this agent. Here we pull out the object set RID from the request and use it to validate the
  // request.
  fauxOntology.registerAgentType(
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
