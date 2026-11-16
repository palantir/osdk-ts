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

import type { AgentMetadata } from "@osdk/api/unstable";
import type { AgentDefinitionVersion } from "@osdk/foundry.agents";
import { wireAgentDataTypeToAgentDataTypeDefinition } from "./wireAgentDataTypeToAgentDataTypeDefinition.js";

export function wireAgentDefinitionVersionToSdkAgentMetadata(
  input: AgentDefinitionVersion,
  apiName: string,
): AgentMetadata {
  return {
    type: "agent",
    apiName,
    version: input.version,
    createdTime: input.createdTime,
    createdBy: input.createdBy,
    arguments: Object.fromEntries(
      [...input.argumentDefinitions].sort((a, b) =>
        a.name.localeCompare(b.name)
      ).map(f => [
        f.name,
        wireAgentDataTypeToAgentDataTypeDefinition(f.dataType),
      ]),
    ),
    events: Object.fromEntries(
      input.eventDefinitions.map(
        event => [
          event.eventType,
          wireAgentDataTypeToAgentDataTypeDefinition(event.payloadType),
        ],
      ),
    ),
    agentState: wireAgentDataTypeToAgentDataTypeDefinition(
      input.agentStateType,
    ),
    contextItems: Object.fromEntries(
      input.contextItemDefinitions.map(
        item => [
          item.contextItemType,
          wireAgentDataTypeToAgentDataTypeDefinition(item.dataType),
        ],
      ),
    ),
  };
}

export function wireAgentDefinitionVersionToSdkAgentDefinitionNoParams(
  input: AgentDefinitionVersion,
  apiName: string,
): {
  type: string;
  apiName: string;
  version: string;
  createdTime: string;
  createdBy: string;
} {
  return {
    type: "agent",
    apiName,
    version: input.version,
    createdTime: input.createdTime,
    createdBy: input.createdBy,
  };
}
