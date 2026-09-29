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

import type {
  AgentClient,
  AgentContextItem,
  AgentDefinition,
  AgentSession,
  AgentSessionState,
  UnknownContextItem,
} from "@osdk/api";
import * as Sessions from "@osdk/foundry.agents/AgentSession";
import { isPinnedAgentVersion } from "@osdk/generator-converters";

import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import {
  convertAgentData,
  convertAgentFields,
  loadAgentSchema,
} from "./agentData.js";
import { withAgentDeadline } from "./withAgentDeadline.js";

export function createAgentClient(
  client: MinimalClient,
  definition: AgentDefinition,
): AgentClient {
  if (!isPinnedAgentVersion(definition.version))
    throw new Error("Agents require a pinned version");
  const context = (method: string) =>
    addUserAgentAndRequestContextHeaders(
      augmentRequestContext(client, () => ({ finalMethodCall: method })),
      definition,
    );
  function session(id: string): AgentSession {
    let consistencyKey: string | undefined;
    let operationOrder = 0;
    let keyOrder = 0;
    let queue: Promise<void> = Promise.resolve();
    return {
      id,
      sendEvent(event, options) {
        const preceding = queue;
        const result = withAgentDeadline(
          context("sendEvent"),
          options,
          async (scope) => {
            const keys = Object.keys(event);
            if (keys.length !== 1)
              throw new Error("sendEvent requires exactly one event");
            const eventType = keys[0];
            const eventId = globalThis.crypto.randomUUID();
            await preceding;
            scope.check();
            const schema = await loadAgentSchema(
              scope.client,
              definition.apiName,
              definition.version,
            );
            const payloadType = schema.eventDefinitions.find(
              (eventDefinition) => eventDefinition.eventType === eventType,
            )?.payloadType;
            const payload = payloadType
              ? await convertAgentData(
                  scope.client,
                  payloadType,
                  event[eventType],
                  "input",
                )
              : event[eventType];
            for (;;) {
              scope.check();
              const response = await Sessions.sendEvent(
                scope.client,
                id,
                {
                  event: { id: eventId, eventType, payload },
                },
                { preview: true },
              );
              scope.check();
              if (response.result.type === "accepted") {
                consistencyKey = response.result.consistencyKey;
                keyOrder = ++operationOrder;
                return;
              }
              await scope.wait();
            }
          },
        );
        const settled = result.then(
          () => {},
          () => {},
        );
        // An expired queued send must not release later sends ahead of its predecessor.
        queue = preceding.then(() => settled);
        return result;
      },
      getState(options) {
        const key = consistencyKey;
        const readOrder = ++operationOrder;
        return withAgentDeadline(
          context("getState"),
          options,
          async (scope) => {
            const schema = await loadAgentSchema(
              scope.client,
              definition.apiName,
              definition.version,
            );
            for (;;) {
              scope.check();
              const response = await Sessions.getSessionState(
                scope.client,
                id,
                { consistencyKey: key, preview: true },
              );
              scope.check();
              if (response.type !== "available") {
                await scope.wait();
                continue;
              }
              const itemTypes = new Map(
                schema.contextItemDefinitions.map((item) => [
                  item.contextItemType,
                  item.dataType,
                ]),
              );
              const known = new Set(
                definition.contextItemTypes ?? itemTypes.keys(),
              );
              const contextItems: Record<
                string,
                AgentContextItem | UnknownContextItem
              > = Object.fromEntries(
                await Promise.all(
                  Object.entries(response.contextItems).map(
                    async ([itemId, item]) => {
                      const dataType = itemTypes.get(item.contextItemType);
                      return [
                        itemId,
                        known.has(item.contextItemType) && dataType
                          ? {
                              type: item.contextItemType,
                              data: await convertAgentData(
                                scope.client,
                                dataType,
                                item.data,
                                "output",
                                client,
                              ),
                            }
                          : {
                              type: "$unknown",
                              contextItemType: item.contextItemType,
                              data: item.data,
                            },
                      ];
                    },
                  ),
                ),
              );
              const state: AgentSessionState = {
                arguments: await convertAgentFields(
                  scope.client,
                  schema.argumentDefinitions,
                  response.arguments,
                  "output",
                  client,
                ),
                status: response.status,
                agentState: {
                  data: await convertAgentData(
                    scope.client,
                    schema.agentStateType,
                    response.agentState.data,
                    "output",
                    client,
                  ),
                },
                contextItems,
                contextItemOrder: response.contextItemOrder,
              };
              scope.check();
              if (readOrder > keyOrder) {
                consistencyKey = response.consistencyKey;
                keyOrder = readOrder;
              }
              return state;
            }
          },
        );
      },
    };
  }
  return {
    async createSession(args) {
      const ctx = context("createSession");
      const schema = await loadAgentSchema(
        ctx,
        definition.apiName,
        definition.version,
      );
      const response = await Sessions.create(
        ctx,
        {
          agent: {
            type: "agentApiName",
            ontology: await client.ontologyRid,
            agentApiName: definition.apiName,
          },
          agentVersion: definition.version,
          arguments: await convertAgentFields(
            ctx,
            schema.argumentDefinitions,
            args ?? {},
            "input",
          ),
        },
        { preview: true },
      );
      return session(response.id);
    },
    getSession(id) {
      return Promise.resolve(session(id));
    },
  };
}
