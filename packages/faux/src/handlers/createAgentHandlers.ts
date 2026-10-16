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

import type { AgentSession } from "@osdk/foundry.agents";
import invariant from "tiny-invariant";

import { InvalidRequest } from "../errors.js";
import { Agents } from "../mock/index.js";
import type { FauxFoundryHandlersFactory } from "./createFauxFoundryHandlers.js";
import { OpenApiCallError } from "./util/handleOpenApiCall.js";

export const createAgentHandlers: FauxFoundryHandlersFactory = (
  baseUrl,
  fauxFoundry,
) => {
  const sessions = new Map<string, AgentSession>();
  return [
    Agents.AgentDefinitionVersions.get(baseUrl, ({ request, params }) => {
      const ontology = new URL(request.url).searchParams.get("ontology");
      invariant(ontology);
      return fauxFoundry
        .getOntology(ontology)
        .getAgentDef(
          params.agentDefinitionApiName,
          params.agentDefinitionVersionVersion,
        );
    }),
    Agents.AgentSessions.create(baseUrl, async ({ request }) => {
      const body = await request.json();
      invariant(body.agent.type === "agentApiName");
      const impl = fauxFoundry
        .getOntology(body.agent.ontology)
        .getAgentImpl(body.agent.agentApiName, body.agentVersion);
      const dataStore = fauxFoundry.getDataStore(body.agent.ontology);
      const session = impl.createSession(body, dataStore);
      sessions.set(session.id, session);
      return session;
    }),
    Agents.AgentSessions.sendEvent(baseUrl, async ({ params, request }) => {
      const session = sessions.get(params.agentSessionId);
      if (!session) {
        throw new OpenApiCallError(
          400,
          InvalidRequest("Invalid Agent Session"),
        );
      }
      invariant(session.agentApiNameIdentifier);
      const { ontology, agentApiName } = session.agentApiNameIdentifier;
      const impl = fauxFoundry
        .getOntology(ontology)
        .getAgentImpl(agentApiName, session.agentVersion);
      return impl.sendEvent(
        await request.json(),
        fauxFoundry.getDataStore(ontology),
      );
    }),
  ];
};
