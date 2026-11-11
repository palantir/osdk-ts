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

import type { DataType } from "@osdk/foundry.agents";
import * as AgentDefinitionVersions from "@osdk/foundry.agents/AgentDefinitionVersion";
import { beforeEach, expect, it, vi } from "vitest";

import type { MinimalClient } from "../MinimalClientContext.js";
import { loadAgentMetadata } from "./loadAgentMetadata.js";

vi.mock("@osdk/foundry.agents/AgentDefinitionVersion", () => ({
  get: vi.fn(),
}));

beforeEach(() => {
  vi.mocked(AgentDefinitionVersions.get).mockResolvedValue({
    version: "1.4.0",
    createdTime: "2026-01-01T00:00:00Z",
    createdBy: "user",
    argumentDefinitions: [{ name: "city", dataType: { type: "string" } }],
    eventDefinitions: [
      {
        eventType: "SetTemperature",
        payloadType: { type: "nullable", wrappedType: { type: "double" } },
      },
    ],
    agentStateType: {
      type: "struct",
      fields: [{ name: "temperature", dataType: { type: "integer" } }],
    },
    contextItemDefinitions: [
      { contextItemType: "weather-result", dataType: { type: "string" } },
    ],
  });
});

it("rejects unsupported types", async () => {
  const client = {
    ontologyRid: "ri.ontology.main.ontology.sdk-ontology",
  } as MinimalClient;
  vi.mocked(AgentDefinitionVersions.get).mockResolvedValueOnce({
    version: "1.4.0",
    createdTime: "2026-01-01T00:00:00Z",
    createdBy: "user",
    argumentDefinitions: [],
    eventDefinitions: [],
    agentStateType: {
      type: "struct",
      fields: [
        {
          name: "value",
          dataType: { type: "futureType" } as unknown as DataType,
        },
      ],
    },
    contextItemDefinitions: [],
  });

  const result = loadAgentMetadata(client, "weatherAgent:1.x");

  await expect(result).rejects.toThrow(
    "Unsupported AgentDataType.type futureType",
  );
});

it("loads a version range", async () => {
  const client = {
    ontologyRid: "ri.ontology.main.ontology.sdk-ontology",
  } as MinimalClient;

  const metadata = await loadAgentMetadata(client, "weatherAgent:1.x");

  expect(AgentDefinitionVersions.get).toHaveBeenCalledWith(
    client,
    "weatherAgent",
    "1.x",
    { ontology: "ri.ontology.main.ontology.sdk-ontology", preview: true },
  );
  expect(metadata).toEqual({
    type: "agent",
    apiName: "weatherAgent",
    version: "1.4.0",
    createdTime: "2026-01-01T00:00:00Z",
    createdBy: "user",
    arguments: { city: { type: "string", nullable: false } },
    events: { SetTemperature: { type: "double", nullable: true } },
    agentState: {
      type: "struct",
      nullable: false,
      struct: { temperature: { type: "integer", nullable: false } },
    },
    contextItems: { "weather-result": { type: "string", nullable: false } },
  });
});
