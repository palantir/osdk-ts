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
import { expect, it } from "vitest";
import {
  wireAgentDefinitionVersionToSdkAgentDefinitionNoParams,
  wireAgentDefinitionVersionToSdkAgentMetadata,
} from "./wireAgentDefinitionVersionToSdkAgentMetadata.js";

it.each([
  wireAgentDefinitionVersionToSdkAgentMetadata,
  wireAgentDefinitionVersionToSdkAgentDefinitionNoParams,
])("%s preserves publication metadata", convert => {
  const input: AgentDefinitionVersion = {
    version: "1.4.0",
    createdTime: "2026-01-01T00:00:00Z",
    createdBy: "user",
    argumentDefinitions: [],
    eventDefinitions: [],
    contextItemDefinitions: [],
    agentStateType: { type: "struct", fields: [] },
  };

  const result = convert(input, "agent");

  expect(result).toMatchObject({
    type: "agent",
    apiName: "agent",
    version: "1.4.0",
    createdTime: "2026-01-01T00:00:00Z",
    createdBy: "user",
  });
});

it("sorts arguments without changing the source or nested field order", () => {
  const input: AgentDefinitionVersion = {
    version: "1.0.0",
    createdTime: "2026-01-01T00:00:00Z",
    createdBy: "user",
    argumentDefinitions: [
      { name: "z", dataType: { type: "string" } },
      {
        name: "a",
        dataType: {
          type: "struct",
          fields: [
            { name: "z", dataType: { type: "string" } },
            { name: "a", dataType: { type: "string" } },
          ],
        },
      },
    ],
    eventDefinitions: [],
    contextItemDefinitions: [],
    agentStateType: { type: "struct", fields: [] },
  };

  const result = wireAgentDefinitionVersionToSdkAgentMetadata(input, "agent");

  expect(Object.keys(result.arguments)).toEqual(["a", "z"]);
  expect(input.argumentDefinitions.map(field => field.name)).toEqual([
    "z",
    "a",
  ]);
  expect(result.arguments.a.type).toBe("struct");
  if (result.arguments.a.type === "struct") {
    expect(Object.keys(result.arguments.a.struct)).toEqual(["z", "a"]);
  }
});
