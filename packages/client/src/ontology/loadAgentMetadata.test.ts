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

import * as AgentDefinitionVersions from "@osdk/foundry.agents/AgentDefinitionVersion";
import { stubData } from "@osdk/shared.test";
import { expect, it, vi } from "vitest";

import type { MinimalClient } from "../MinimalClientContext.js";
import { loadAgentMetadata } from "./loadAgentMetadata.js";

vi.mock("@osdk/foundry.agents/AgentDefinitionVersion", () => ({
  get: vi.fn(),
}));

it("normalizes a resolved version's metadata", async () => {
  const client = {
    ontologyRid: Promise.resolve("ontology-rid"),
  } as MinimalClient;
  vi.mocked(AgentDefinitionVersions.get).mockResolvedValue(
    stubData.weatherAgentVersion,
  );

  const result = await loadAgentMetadata(client, "weatherAgent:^1.0.0");

  expect(AgentDefinitionVersions.get).toHaveBeenCalledWith(
    client,
    "weatherAgent",
    "^1.0.0",
    { ontology: "ontology-rid", preview: true },
  );
  expect(result).toEqual({
    type: "agent",
    apiName: "weatherAgent",
    version: "1.2.3",
    arguments: { city: { type: "string", nullable: false } },
    events: {
      LookupWeather: {
        type: "struct",
        nullable: false,
        struct: { city: { type: "string", nullable: false } },
      },
      SetTemperature: { type: "double", nullable: true },
    },
    agentState: {
      type: "struct",
      nullable: false,
      struct: { temperature: { type: "integer", nullable: false } },
    },
    contextItems: {
      "weather-result": { type: "string", nullable: false },
      temperature: { type: "integer", nullable: true },
    },
  });
});
