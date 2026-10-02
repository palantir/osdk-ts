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

import type { AgentDefinition, AgentSession } from "@osdk/api";
import type { JsonValue } from "@osdk/foundry.agents";
import * as Sessions from "@osdk/foundry.agents/AgentSession";

import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import type { AgentSignatureFromDef } from "./types.js";

export async function createAgentSession<D extends AgentDefinition<unknown>>(
  client: MinimalClient,
  agent: D,
  args?: Parameters<AgentSignatureFromDef<D>["createSession"]>[0],
): Promise<AgentSession> {
  if (client.scenarioRid != null) {
    throw new Error("Agent sessions are not supported in scenarios");
  }
  if (client.transactionId != null) {
    throw new Error("Agent sessions are not supported in transactions");
  }
  const clientWithHeaders = addUserAgentAndRequestContextHeaders(
    augmentRequestContext(client, () => ({ finalMethodCall: "createSession" })),
    agent,
  );
  const ontologyRid = await client.ontologyRid;
  const response = await Sessions.create(
    clientWithHeaders,
    {
      agent: {
        type: "agentApiName",
        ontology: ontologyRid,
        agentApiName: agent.apiName,
      },
      agentVersion: agent.version,
      // TODO(mhogberg): Rewrite object and objectSet payloads so that they match the format that
      //  agent-engine expects.
      arguments: (args ?? {}) as Record<string, JsonValue>,
    },
    { preview: true },
  );
  return { id: response.id };
}
