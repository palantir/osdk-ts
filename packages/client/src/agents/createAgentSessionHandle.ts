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

import type { AgentSession } from "@osdk/api/unstable";
import type { AgentDefinitionVersion } from "@osdk/foundry.agents";

import type { MinimalClient } from "../MinimalClientContext.js";
import { getAgentSessionState } from "./getAgentSessionState.js";
import { sendEventToAgentSession } from "./sendEventToAgentSession.js";

export function createAgentSessionHandle(
  client: MinimalClient,
  id: string,
  sessionAgentDefinition: AgentDefinitionVersion,
): AgentSession {
  let consistencyKey: string | undefined;

  return {
    id,
    async experimental_sendEvent(event, options) {
      // TODO(mhogberg): Blindly accepting the consistency key here is not correct. If multiple events are being sent
      //  concurrently the consistency keys will arrive out-of-order. Consistency keys are not orderable, so there is
      //  no way for us to fix this currently.
      consistencyKey = await sendEventToAgentSession(
        client,
        id,
        sessionAgentDefinition.eventDefinitions,
        event,
        options,
      );
    },
    async experimental_getState(options) {
      const result = await getAgentSessionState(
        client,
        id,
        sessionAgentDefinition,
        consistencyKey,
        options,
      );
      // TODO(mhogberg): Blindly accepting the consistency key here can overwrite a newer key from a concurrent
      //  read or send. Consistency keys are not orderable, so there is no way to tell which key is newer.
      consistencyKey = result.consistencyKey;
      return result.state;
    },
  };
}
