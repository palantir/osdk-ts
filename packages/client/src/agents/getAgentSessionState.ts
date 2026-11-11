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

import {
  type AgentGetStateOptions,
  AgentGetStateTimeoutError,
  type AgentMetadata,
  type AgentSessionState,
} from "@osdk/api/unstable";
import * as Sessions from "@osdk/foundry.agents/AgentSession";

import type { MinimalClient } from "../MinimalClientContext.js";
import { fromDataValueAgents } from "../util/fromDataValueAgents.js";

export async function getAgentSessionState(
  client: MinimalClient,
  sessionId: string,
  sessionAgentDefinition: AgentMetadata,
  consistencyKey: string | undefined,
  options?: AgentGetStateOptions,
): Promise<{ state: AgentSessionState; consistencyKey: string }> {
  const timeoutMs = options?.$timeoutMs ?? 30_000;
  if (!Number.isFinite(timeoutMs) || timeoutMs < 0) {
    throw new Error("$timeoutMs must be a finite non-negative number");
  }
  const deadline = Date.now() + timeoutMs;

  const pollIntervalMs = options?.$pollIntervalMs ?? 1000;
  if (!Number.isFinite(pollIntervalMs) || pollIntervalMs <= 0) {
    throw new Error("$pollIntervalMs must be a finite positive number");
  }

  for (;;) {
    const response = await Sessions.getSessionState(client, sessionId, {
      consistencyKey,
      preview: true,
    });

    if (response.type === "available") {
      const contextItems = Object.fromEntries(
        await Promise.all(
          Object.entries(response.contextItems).map(async ([id, item]) => {
            const dataType = Object.hasOwn(
              sessionAgentDefinition.contextItems,
              item.contextItemType,
            )
              ? sessionAgentDefinition.contextItems[item.contextItemType]
              : undefined;
            const data = await fromDataValueAgents(
              item.data,
              client,
              dataType,
              // Using JSON.stringify here to surround the string in quotes and escape special characters.
              `contextItems[${JSON.stringify(id)}].data`,
            );
            return [id, { type: item.contextItemType, data }];
          }),
        ),
      );

      const convertedArguments = await fromDataValueAgents(
        response.arguments,
        client,
        {
          type: "struct",
          struct: sessionAgentDefinition.arguments,
        },
        "arguments",
      );

      const convertedAgentStateData = await fromDataValueAgents(
        response.agentState.data,
        client,
        sessionAgentDefinition.agentState,
        "agentState.data",
      );

      const state: AgentSessionState = {
        arguments: convertedArguments,
        status: response.status.type,
        agentState: {
          data: convertedAgentStateData,
        },
        contextItems,
        contextItemOrder: response.contextItemOrder,
      };

      return { state, consistencyKey: response.consistencyKey };
    }

    const remainingMs = deadline - Date.now();
    if (remainingMs <= 0) {
      throw new AgentGetStateTimeoutError();
    }

    await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
  }
}
