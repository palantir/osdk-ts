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

import type { AgentDefinitionVersion } from "@osdk/foundry.agents";
import type { EnhancedAgent } from "../GenerateContext/EnhancedAgent.js";
import { getObjectTypesFromAgentDataType } from "./getObjectTypesFromAgentDataType.js";

export function getObjectTypeApiNamesFromAgent(
  agent: AgentDefinitionVersion | EnhancedAgent,
): string[] {
  const types = new Set<string>();
  for (const { dataType } of agent.argumentDefinitions) {
    getObjectTypesFromAgentDataType(dataType, types);
  }
  for (const { payloadType } of agent.eventDefinitions) {
    getObjectTypesFromAgentDataType(payloadType, types);
  }
  getObjectTypesFromAgentDataType(agent.agentStateType, types);
  for (const { dataType } of agent.contextItemDefinitions) {
    getObjectTypesFromAgentDataType(dataType, types);
  }
  return Array.from(types);
}
