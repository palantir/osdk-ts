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
import type {
  AgentSession,
  CreateAgentSessionRequest,
} from "@osdk/foundry.agents";

import { createLazyAgentImpl } from "../createLazyAgentImpl.js";
import {
  noArgsAgentApiName,
  noArgsAgentVersion,
  weatherAgentApiName,
  weatherAgentOtherVersion,
  weatherAgentVersion,
} from "./agentDefinitions.js";
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

export const weatherAgentResponse: AgentSession = { id: "weather-session" };

export const weatherAgentOtherVersionRequest: CreateAgentSessionRequest = {
  ...weatherAgentRequest,
  agentVersion: weatherAgentOtherVersion.version,
};

export const weatherAgentOtherVersionResponse: AgentSession = {
  id: "weather-session-other-version",
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

export const noArgsAgentResponse: AgentSession = { id: "no-args-session" };

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
}
