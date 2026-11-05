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
  SendEventResponse,
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
  agentApiNameIdentifier: {
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: weatherAgentApiName,
  },
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
  agentApiNameIdentifier: {
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: noArgsAgentApiName,
  },
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
  agentApiNameIdentifier: {
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: objectArgumentsAgentApiName,
  },
  agentVersion: objectArgumentsAgentVersion.version,
};

export function registerLazyAgents(fauxOntology: FauxOntology): void {
  fauxOntology.registerAgent(
    weatherAgentApiName,
    weatherAgentVersion,
    createLazyAgentImpl(
      {
        [JSON.stringify(weatherAgentRequest)]: weatherAgentResponse,
      },
      weatherEventResponses,
    ),
  );

  fauxOntology.registerAgent(
    weatherAgentApiName,
    weatherAgentOtherVersion,
    createLazyAgentImpl(
      {
        [JSON.stringify(weatherAgentOtherVersionRequest)]:
          weatherAgentOtherVersionResponse,
      },
      weatherEventResponses,
    ),
  );

  fauxOntology.registerAgent(
    noArgsAgentApiName,
    noArgsAgentVersion,
    createLazyAgentImpl(
      {
        [JSON.stringify(noArgsAgentRequest)]: noArgsAgentResponse,
      },
      weatherEventResponses,
    ),
  );

  fauxOntology.registerAgent(
    objectArgumentsAgentApiName,
    objectArgumentsAgentVersion,
    createLazyAgentImpl(
      (request, dataStore) => {
        // objectArgumentsAgent has an object set argument. For object set arguments we create temporary
        // object sets with new RIDs on each request, which means that we can't use exact request matching
        // for this agent. Here we pull out the object set RID from the request and use it to validate the
        // request
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
      (request, dataStore) => {
        const { eventType, payload } = request.event;
        if (
          eventType !== "SelectEmployees" ||
          typeof payload !== "string" ||
          !deepEqual(dataStore.getObjectSetOrThrow(payload), employeeObjectSet)
        ) {
          throw new OpenApiCallError(
            400,
            Errors.InvalidRequest("Invalid Agent Event"),
          );
        }
        return acceptedAgentEvent;
      },
    ),
  );
}

export const acceptedAgentEvent: SendEventResponse = {
  result: { type: "accepted", consistencyKey: "accepted-event" },
};

const weatherEventResponses: Record<string, SendEventResponse> = {
  [JSON.stringify({
    event: { eventType: "LookupWeather", payload: { city: "Paris" } },
  })]: acceptedAgentEvent,
  [JSON.stringify({
    event: { eventType: "unknownEvent", payload: { raw: [1, null, "value"] } },
  })]: acceptedAgentEvent,
};
