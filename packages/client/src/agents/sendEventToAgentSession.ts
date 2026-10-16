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
  type AgentSendEventOptions,
  AgentSendEventTimeoutError,
} from "@osdk/api/unstable";
import type { AgentDefinitionVersion } from "@osdk/foundry.agents";
import * as Sessions from "@osdk/foundry.agents/AgentSession";

import type { MinimalClient } from "../MinimalClientContext.js";
import { toDataValueAgents } from "../util/toDataValueAgents.js";

declare const process: {
  env: { TARGET: "browser" | "node" | undefined };
};

export async function sendEventToAgentSession(
  client: MinimalClient,
  sessionId: string,
  eventDefinitions: AgentDefinitionVersion["eventDefinitions"],
  event: Record<string, unknown>,
  options?: AgentSendEventOptions,
): Promise<void> {
  const keys = Object.keys(event);
  if (keys.length !== 1) {
    throw new Error("experimental_sendEvent requires exactly one event");
  }
  const eventType = keys[0];

  const timeoutMs = options?.$timeoutMs ?? 30_000;
  if (!Number.isFinite(timeoutMs) || timeoutMs < 0) {
    throw new Error("$timeoutMs must be a finite non-negative number");
  }
  const deadline = Date.now() + timeoutMs;

  const pollIntervalMs = options?.pollIntervalMs ?? 1000;
  if (!Number.isFinite(pollIntervalMs) || pollIntervalMs <= 0) {
    throw new Error("pollIntervalMs must be a finite positive number");
  }

  const id =
    process.env.TARGET === "browser"
      ? globalThis.crypto.randomUUID()
      : (await import("node:crypto")).randomUUID();

  const payloadType = eventDefinitions.find(
    (definition) => definition.eventType === eventType,
  )?.payloadType;
  const payload = payloadType
    ? await toDataValueAgents(event[eventType], client, payloadType)
    : event[eventType];

  for (;;) {
    const response = await Sessions.sendEvent(
      client,
      sessionId,
      { event: { id, eventType, payload } },
      { preview: true },
    );

    if (response.result.type === "accepted") {
      return;
    }

    const remainingMs = deadline - Date.now();
    if (remainingMs <= 0) {
      throw new AgentSendEventTimeoutError();
    }

    await new Promise((resolve) =>
      setTimeout(resolve, pollIntervalMs),
    );
  }
}
