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

import type { AgentDefinition, AgentSession } from "@osdk/api/unstable";
import * as Sessions from "@osdk/foundry.agents/AgentSession";

import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentHeader } from "../util/addUserAgentHeader.js";
import { createAgentSessionHandle } from "./createAgentSessionHandle.js";
import { validateAgentSessionClient } from "./validateAgentSessionClient.js";

export async function getAgentSession(
  client: MinimalClient,
  agent: AgentDefinition<unknown>,
  sessionId: string,
): Promise<AgentSession> {
  validateAgentSessionClient(client);
  const clientWithHeaders = addUserAgentHeader(client, agent);
  const ontologyRid = await client.ontologyRid;
  const response = await Sessions.get(clientWithHeaders, sessionId, {
    preview: true,
  });
  const identifier = response.agentApiNameIdentifier;
  if (identifier == null) {
    throw new Error(
      "Cannot validate agent identity: session has no ontology/API-name identifier",
    );
  }
  if (
    identifier.ontology !== ontologyRid ||
    identifier.agentApiName !== agent.apiName
  ) {
    throw new Error(
      "Agent session does not belong to the specified agent and ontology",
    );
  }
  const sessionAgentDefinition =
    await client.ontologyProvider.getAgentDefinition(
      agent.apiName,
      response.agentVersion,
    );
  return createAgentSessionHandle(
    clientWithHeaders,
    response.id,
    sessionAgentDefinition,
  );
}
