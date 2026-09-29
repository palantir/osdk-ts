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

import type { AgentDefinitionVersion, DataType } from "@osdk/foundry.agents";

export function isPinnedAgentVersion(version: string): boolean {
  return /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/
    .test(version);
}

export function getAgentObjectTypeRids(
  agent: AgentDefinitionVersion,
): Set<string> {
  const rids = new Set<string>();
  const visit = (type: DataType): void => {
    switch (type.type) {
      case "object":
      case "objectSet":
        rids.add(type.objectTypeRid);
        break;
      case "nullable":
        visit(type.wrappedType);
        break;
      case "list":
        visit(type.elementType);
        break;
      case "record":
        visit(type.valueType);
        break;
      case "struct":
        type.fields.forEach(field => visit(field.dataType));
        break;
      case "discriminatedUnion":
        type.members.forEach(member =>
          member.fields.forEach(field => visit(field.dataType))
        );
    }
  };
  agent.argumentDefinitions.forEach(field => visit(field.dataType));
  agent.eventDefinitions.forEach(event => visit(event.payloadType));
  visit(agent.agentStateType);
  agent.contextItemDefinitions.forEach(item => visit(item.dataType));
  return rids;
}
