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

import { Errors, OpenApiCallError } from "@osdk/faux";
import type {
  AgentSession,
  CreateAgentSessionRequest,
} from "@osdk/foundry.agents";

export function createLazyAgentImpl(
  bodyToResponse: Record<string, AgentSession>,
): (req: CreateAgentSessionRequest) => AgentSession {
  return (req: CreateAgentSessionRequest): AgentSession => {
    const body = JSON.stringify(req);

    const resp = bodyToResponse[body];
    if (!resp) {
      throw new OpenApiCallError(
        400,
        Errors.InvalidRequest("Invalid Agent Session Request"),
      );
    }
    return resp;
  };
}
