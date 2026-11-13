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
  SessionStateAvailable,
  SendEventResponse,
} from "@osdk/foundry.agents";
import deepEqual from "fast-deep-equal";

import { createLazyAgentImpl } from "../createLazyAgentImpl.js";
import {
  noArgumentsAgentApiName,
  noArgumentsAgentOtherVersion,
  noArgumentsAgentVersion,
  objectArgumentsAgentApiName,
  objectArgumentsAgentOtherVersion,
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
  agentApiNameIdentifier: {
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: noArgumentsAgentApiName,
  },
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
  agentApiNameIdentifier: {
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: objectArgumentsAgentApiName,
  },
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
  agentApiNameIdentifier: {
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: optionalArgumentsAgentApiName,
  },
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
  agentApiNameIdentifier: {
    ontology: defaultOntologyMetadata.rid as string,
    agentApiName: structuredArgumentsAgentApiName,
  },
  agentVersion: structuredArgumentsAgentVersion.version,
};

export const objectArgumentsAgentOtherVersionRequest: CreateAgentSessionRequest =
  {
    agent: {
      type: "agentApiName",
      ontology: defaultOntologyMetadata.rid as string,
      agentApiName: objectArgumentsAgentApiName,
    },
    agentVersion: objectArgumentsAgentOtherVersion.version,
    arguments: {},
  };

export const objectArgumentsAgentOtherVersionResponse: AgentSession = {
  ...objectArgumentsAgentResponse,
  id: "object-arguments-session-other-version",
  agentVersion: objectArgumentsAgentOtherVersion.version,
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
      {
        [weatherAgentResponse.id]: weatherAgentState,
      },
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
      {
        [weatherAgentOtherVersionResponse.id]: weatherAgentState,
      },
    ),
  );

  fauxOntology.registerAgent(
    noArgumentsAgentApiName,
    noArgumentsAgentVersion,
    createLazyAgentImpl(
      {
        [JSON.stringify(noArgumentsAgentRequest)]: noArgumentsAgentResponse,
      },
      {},
      {
        [noArgumentsAgentResponse.id]: { ...weatherAgentState, arguments: {} },
      },
    ),
  );

  fauxOntology.registerAgent(
    noArgumentsAgentApiName,
    noArgumentsAgentOtherVersion,
    createLazyAgentImpl(
      {
        [JSON.stringify(noArgumentsAgentOtherVersionRequest)]:
          noArgumentsAgentOtherVersionResponse,
      },
      {},
      {},
    ),
  );

  fauxOntology.registerAgent(
    optionalArgumentsAgentApiName,
    optionalArgumentsAgentVersion,
    createLazyAgentImpl(
      {
        [JSON.stringify(optionalArgumentsAgentRequest)]:
          optionalArgumentsAgentResponse,
        [JSON.stringify(optionalArgumentsAgentWithCityRequest)]:
          optionalArgumentsAgentResponse,
      },
      {},
      {},
    ),
  );

  fauxOntology.registerAgent(
    structuredArgumentsAgentApiName,
    structuredArgumentsAgentVersion,
    createLazyAgentImpl(
      {
        [JSON.stringify(structuredArgumentsAgentRequest)]:
          structuredArgumentsAgentResponse,
      },
      {},
      {},
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
      (_request, dataStore) => {
        const objectSetRid = "ri.object-set.main.object-set.agent-state";
        dataStore.registerObjectSet(objectSetRid, employeeObjectSet);
        const data = objectArgumentsAgentRequest(objectSetRid).arguments;
        return {
          ...weatherAgentState,
          arguments: data,
          agentState: { data },
          contextItems: {
            selection: { contextItemType: "selection", data },
          },
          contextItemOrder: ["selection"],
        };
      },
    ),
  );

  fauxOntology.registerAgent(
    objectArgumentsAgentApiName,
    objectArgumentsAgentOtherVersion,
    createLazyAgentImpl(
      {
        [JSON.stringify(objectArgumentsAgentOtherVersionRequest)]:
          objectArgumentsAgentOtherVersionResponse,
      },
      {
        [JSON.stringify({
          event: {
            eventType: "SelectEmployees",
            payload: {
              ontologyRid: defaultOntologyMetadata.rid,
              objectTypeApiName: "Employee",
              primaryKey: { employeeId: 50030 },
            },
          },
        })]: acceptedAgentEvent,
      },
      {
        [objectArgumentsAgentOtherVersionResponse.id]: {
          ...weatherAgentState,
          arguments: {},
          agentState: {
            data: {
              ontologyRid: defaultOntologyMetadata.rid,
              objectTypeApiName: "Employee",
              primaryKey: { employeeId: 50030 },
            },
          },
          contextItems: {
            selection: {
              contextItemType: "selection",
              data: { retained: true },
            },
            newer: {
              contextItemType: "new-selection",
              data: {
                ontologyRid: defaultOntologyMetadata.rid,
                objectTypeApiName: "Employee",
                primaryKey: { employeeId: 50030 },
              },
            },
          },
          contextItemOrder: ["selection", "newer"],
        },
      },
    ),
  );
}

export const acceptedAgentEvent: SendEventResponse = {
  result: { type: "accepted", consistencyKey: "accepted-event" },
};

const weatherEventResponses: Record<string, SendEventResponse> = {
  [JSON.stringify({
    event: { eventType: "SetTemperature", payload: null },
  })]: acceptedAgentEvent,
  [JSON.stringify({
    event: { eventType: "LookupWeather", payload: { city: "Paris" } },
  })]: acceptedAgentEvent,
  [JSON.stringify({
    event: { eventType: "unknownEvent", payload: { raw: [1, null, "value"] } },
  })]: acceptedAgentEvent,
};

export const weatherAgentState: SessionStateAvailable & { type: "available" } =
  {
    type: "available",
    arguments: { city: "London" },
    status: { type: "live" },
    consistencyKey: "weather-state",
    agentState: { data: { temperature: 20 } },
    contextItems: {
      second: { contextItemType: "weather-result", data: "Sunny" },
      first: { contextItemType: "weather-result", data: "Warm" },
      unknown: {
        contextItemType: "future-result",
        data: { value: "Future" },
      },
    },
    contextItemOrder: ["first", "second", "unknown"],
  };
