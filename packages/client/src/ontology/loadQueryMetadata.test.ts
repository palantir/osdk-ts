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

import * as QueryTypes from "@osdk/foundry.ontologies/QueryType";
import { beforeEach, expect, it, vi } from "vitest";

import type { MinimalClient } from "../MinimalClientContext.js";
import { loadQueryMetadata } from "./loadQueryMetadata.js";

vi.mock("@osdk/foundry.ontologies/QueryType", () => ({
  get: vi.fn(),
}));

beforeEach(() => {
  vi.mocked(QueryTypes.get).mockResolvedValue({
    apiName: "getEmployees",
    output: { type: "integer" },
    parameters: {},
    rid: "ri.function-registry.main.function.get-employees",
    version: "1.4.0",
  });
});

it("loads a version range on the client's branch", async () => {
  const client = {
    branch: "ri.branch.main.branch.sdk-branch",
    ontologyRid: "ri.ontology.main.ontology.sdk-ontology",
  } as MinimalClient;

  const metadata = await loadQueryMetadata(client, "getEmployees:1.x");

  expect(QueryTypes.get).toHaveBeenCalledWith(
    client,
    "ri.ontology.main.ontology.sdk-ontology",
    "getEmployees",
    {
      branch: "ri.branch.main.branch.sdk-branch",
      version: "1.x",
    },
  );
  expect(metadata).toEqual({
    apiName: "getEmployees",
    output: { nullable: false, type: "integer" },
    parameters: {},
    rid: "ri.function-registry.main.function.get-employees",
    type: "query",
    typeReferences: undefined,
    version: "1.4.0",
  });
});
