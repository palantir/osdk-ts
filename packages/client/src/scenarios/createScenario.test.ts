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

import { BarInterface } from "@osdk/client.test.ontology";
import type {
  CreateOntologyScenarioResponse,
  LoadObjectSetV2MultipleObjectTypesResponse,
} from "@osdk/foundry.ontologies";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Client } from "../Client.js";
import { createClient, createClientWithTransaction } from "../createClient.js";
import { mockFetchResponse } from "../createClient.test.js";
import { createScenario } from "./createScenario.js";
import { withScenario } from "./withScenario.js";

describe("createScenario", () => {
  const ontologyRid = "ri.not.important";
  let fetchFunction: MockedFunction<typeof globalThis.fetch>;
  let client: Client;

  beforeEach(() => {
    fetchFunction = vi.fn();
    client = createClient(
      "https://mock.com",
      ontologyRid,
      async () => "Token",
      undefined,
      fetchFunction,
    );
  });

  it("calls the create endpoint and threads the returned rid", async () => {
    const newScenarioRid = "ri.actions..scenario.new";
    const createResponse: CreateOntologyScenarioResponse = {
      scenarioRid: newScenarioRid,
    };
    mockFetchResponse(fetchFunction, createResponse);

    const scenario = await createScenario(client);

    expect(fetchFunction).toHaveBeenCalledTimes(1);
    const createUrl = new URL(
      fetchFunction.mock.calls[0][0] as string,
      "https://mock.com",
    );
    expect(createUrl.pathname).toMatch(/\/scenarios\/create$/);

    expect(scenario.getScenarioReference()).toBe(newScenarioRid);

    // Subsequent requests carry the new rid
    const loadResponse: LoadObjectSetV2MultipleObjectTypesResponse = {
      data: [],
    };
    mockFetchResponse(fetchFunction, loadResponse);
    await scenario(BarInterface).fetchPage();
    const url = new URL(
      fetchFunction.mock.calls[1][0] as string,
      "https://mock.com",
    );
    expect(url.searchParams.get("scenarioRid")).toBe(newScenarioRid);
  });

  it("warns and ignores an active transaction, scoping to the new scenario", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const txClient = createClientWithTransaction(
      "ri.transactions..transaction.xyz",
      async () => {},
      "https://mock.com",
      ontologyRid,
      async () => "Token",
      {},
      fetchFunction,
    );
    const newScenarioRid = "ri.actions..scenario.new";
    const createResponse: CreateOntologyScenarioResponse = {
      scenarioRid: newScenarioRid,
    };
    mockFetchResponse(fetchFunction, createResponse);

    const scenario = await createScenario(txClient);

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringMatching(/transaction/),
    );
    expect(scenario.getScenarioReference()).toBe(newScenarioRid);
    warnSpy.mockRestore();
  });

  it("rejects a client already scoped to a scenario at runtime", async () => {
    const scenario = withScenario(client, "ri.actions..scenario.abc");
    await expect(createScenario(scenario)).rejects.toThrow(/scenario/);
  });
});
