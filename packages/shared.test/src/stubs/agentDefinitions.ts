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

export const weatherAgentApiName = "weatherAgent";

export const weatherAgentVersion: AgentDefinitionVersion = {
  version: "1.2.3",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  argumentDefinitions: [{ name: "city", dataType: { type: "string" } }],
  eventDefinitions: [
    {
      eventType: "LookupWeather",
      payloadType: {
        type: "struct",
        fields: [{ name: "city", dataType: { type: "string" } }],
      },
    },
  ],
  agentStateType: {
    type: "struct",
    fields: [{ name: "temperature", dataType: { type: "integer" } }],
  },
  contextItemDefinitions: [
    { contextItemType: "weather-result", dataType: { type: "string" } },
  ],
};

export const weatherAgentOtherVersion: AgentDefinitionVersion = {
  ...weatherAgentVersion,
  version: "2.0.0",
};

export const noArgsAgentApiName = "noArgsAgent";
export const noArgsAgentVersion: AgentDefinitionVersion = {
  ...weatherAgentVersion,
  argumentDefinitions: [],
};
