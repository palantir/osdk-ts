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
import { afterEach, describe, expect, it, vi } from "vitest";
import { OntologyMetadataResolver } from "./ontologyMetadataResolver.js";

const schema: AgentDefinitionVersion = {
  version: "1.2.3",
  createdTime: "2026-01-01T00:00:00Z",
  createdBy: "user",
  argumentDefinitions: [],
  eventDefinitions: [],
  agentStateType: { type: "string" },
  contextItemDefinitions: [],
};
const ontology = {
  rid: "ri.ontology.test",
  apiName: "test",
  displayName: "test",
  description: "",
};
function setup(agentSchema = schema) {
  const fetcher = vi.fn<typeof fetch>(async (url, init) => {
    const path = new URL(String(url)).pathname;
    if (path.includes("/agentDefinitions/")) return Response.json(agentSchema);
    if (path.endsWith("/objectTypes/getByRidBatch")) {
      return Response.json({
        data: [{ apiName: "Todo", rid: "ri.object.type" }],
      });
    }
    if (path.endsWith("/metadata")) {
      const request = JSON.parse(String(init?.body)) as {
        objectTypes: string[];
      };
      return Response.json({
        ontology,
        actionTypes: {},
        queryTypes: {},
        interfaceTypes: {},
        sharedPropertyTypes: {},
        valueTypes: {},
        actionTypesFullMetadata: {},
        objectTypes: Object.fromEntries(
          request.objectTypes.map(
            apiName => [apiName, {
              objectType: { apiName, rid: "ri.object.type" },
              linkTypes: [],
            }],
          ),
        ),
      });
    }
    if (path.endsWith("/ontologies/ri.ontology.test")) {
      return Response.json(ontology);
    }
    throw new Error(`Unexpected request: ${String(url)}`);
  });
  vi.stubGlobal("fetch", fetcher);
  const resolver = new OntologyMetadataResolver("token", "https://example.com");
  return { fetcher, resolver };
}
afterEach(() => vi.unstubAllGlobals());

describe("agent metadata loading", () => {
  it("loads the pinned schema into the wire ontology", async () => {
    const { resolver, fetcher } = setup();
    const result = await resolver.getWireOntologyDefinition(ontology.rid, {
      agentTypesApiNamesToLoad: ["weatherAgent:1.2.3"],
    });
    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error[0];
    expect(result.value.requestedMetadata.agentTypes).toEqual({
      weatherAgent: { ...schema, apiName: "weatherAgent" },
    });
    expect(String(fetcher.mock.calls[1][0])).toContain(
      "/agentDefinitions/weatherAgent/versions/1.2.3?",
    );
  });

  it.each([
    "weatherAgent",
    "weatherAgent:latest",
    "weatherAgent:^1.2.3",
    "weatherAgent:",
    ":1.2.3",
  ])("rejects invalid selection %s", async selection => {
    const { resolver, fetcher } = setup();
    const result = await resolver.getWireOntologyDefinition(ontology.rid, {
      agentTypesApiNamesToLoad: [selection],
    });
    expect(result.isErr()).toBe(true);
    if (result.isOk()) throw new Error("Expected invalid selection");
    expect(result.error[0].message).toContain("pinned version");
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it("rejects duplicate agents and mismatched versions", async () => {
    const { resolver } = setup();
    const duplicate = await resolver.getWireOntologyDefinition(ontology.rid, {
      agentTypesApiNamesToLoad: ["weatherAgent:1.2.3", "weatherAgent:2.0.0"],
    });
    expect(duplicate.isErr()).toBe(true);
    if (duplicate.isOk()) throw new Error("Expected duplicate rejection");
    expect(duplicate.error[0].message).toContain("multiple times");
    const mismatch = await resolver.getWireOntologyDefinition(ontology.rid, {
      agentTypesApiNamesToLoad: ["weatherAgent:2.0.0"],
    });
    expect(mismatch.isErr()).toBe(true);
    if (mismatch.isOk()) throw new Error("Expected version mismatch");
    expect(mismatch.error[0].message).toContain("requested version");
  });

  it("discovers object types nested in schemas and includes them in ontology loading", async () => {
    const { resolver, fetcher } = setup({
      ...schema,
      agentStateType: {
        type: "record",
        valueType: {
          type: "nullable",
          wrappedType: {
            type: "list",
            elementType: { type: "objectSet", objectTypeRid: "ri.object.type" },
          },
        },
      },
    });
    const result = await resolver.getWireOntologyDefinition(ontology.rid, {
      agentTypesApiNamesToLoad: ["weatherAgent:1.2.3"],
    });
    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error[0];
    expect(result.value.requestedMetadata.objectTypes.Todo.objectType.rid).toBe(
      "ri.object.type",
    );
    expect(JSON.parse(String(fetcher.mock.calls[2][1]?.body))).toEqual({
      requests: [{ objectTypeRid: "ri.object.type" }],
    });
    expect(JSON.parse(String(fetcher.mock.calls[3][1]?.body))).toMatchObject({
      objectTypes: ["Todo"],
    });
  });

  it("reports missing agent metadata", async () => {
    const { resolver, fetcher } = setup();
    fetcher.mockResolvedValueOnce(Response.json(ontology))
      .mockResolvedValueOnce(new Response(null, { status: 404 }));
    const result = await resolver.getWireOntologyDefinition(ontology.rid, {
      agentTypesApiNamesToLoad: ["weatherAgent:1.2.3"],
    });
    expect(result.isErr()).toBe(true);
    if (result.isOk()) throw new Error("Expected missing metadata");
    expect(result.error[0].message).toContain("Unable to load agent metadata");
  });
});
