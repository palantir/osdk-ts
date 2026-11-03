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

import { Errors, type FauxAgentImpl, OpenApiCallError } from "@osdk/faux";
import type { AgentSession, SendEventResponse } from "@osdk/foundry.agents";
import { z } from "zod/v4";

const eventIdSchema = z.uuid({ version: "v4" });

export function createLazyAgentImpl(
  createSession: Record<string, AgentSession> | FauxAgentImpl["createSession"],
  sendEvent: Record<string, SendEventResponse> | FauxAgentImpl["sendEvent"],
): FauxAgentImpl {
  return {
    createSession(req, dataStore) {
      if (typeof createSession === "function") {
        return createSession(req, dataStore);
      }

      const body = JSON.stringify(req);
      const resp = createSession[body];
      if (!resp) {
        throw new OpenApiCallError(
          400,
          Errors.InvalidRequest("Invalid Agent Session Request"),
        );
      }
      return resp;
    },
    sendEvent(req, dataStore) {
      const { id, ...event } = req.event;
      if (!eventIdSchema.safeParse(id).success) {
        throw new OpenApiCallError(
          400,
          Errors.InvalidRequest("Invalid Agent Event"),
        );
      }

      if (typeof sendEvent === "function") {
        return sendEvent(req, dataStore);
      }

      const body = JSON.stringify({ ...req, event });
      const resp = sendEvent[body];
      if (!resp) {
        throw new OpenApiCallError(
          400,
          Errors.InvalidRequest("Invalid Agent Event"),
        );
      }
      return resp;
    },
  };
}
