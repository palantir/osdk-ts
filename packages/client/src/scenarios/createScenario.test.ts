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
import {
  mockFetchResponse,
  mockInterfaceFetchPageResponse,
} from "../createClient.test.js";
import { createScenario, withScenario } from "../index.js";

describe("createScenario", () => {
  const ontologyRid = "ri.not.important";
  let fetchFunction: MockedFunction<typeof globalThis.fetch>;
  let client: Client;

  beforeEach(() => {
    fetchFunction = vi.fn();
    client = createClient(
      "https://mock.com",
      ontologyRid,
      () => "Token",
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
    expect(createUrl.pathname).toMatch(/\/scenarios\/create$/u);

    expect(scenario.getScenarioReference()).toBe(newScenarioRid);

    // Subsequent requests carry the new rid
    const loadResponse: LoadObjectSetV2MultipleObjectTypesResponse = {
      data: [],
    };
    mockInterfaceFetchPageResponse(fetchFunction, loadResponse);
    await scenario(BarInterface).fetchPage();
    const loadCall = fetchFunction.mock.calls.find(([input]) =>
      String(input).includes("objectSets/loadObjects"),
    );
    const url = new URL(loadCall?.[0] as string, "https://mock.com");
    expect(url.searchParams.get("scenarioRid")).toBe(newScenarioRid);
  });

  it("creates scenario with expireAfter", async () => {
    const expireAfter = new Date("2026-09-20T12:00:00.000Z");
    const createResponse: CreateOntologyScenarioResponse = {
      scenarioRid: "ri.actions..scenario.new",
    };
    mockFetchResponse(fetchFunction, createResponse);

    await createScenario(client, { expireAfter });

    expect(fetchFunction).toHaveBeenCalledTimes(1);
    expect(JSON.parse(fetchFunction.mock.calls[0][1]?.body as string)).toEqual({
      expireAfter: expireAfter.toISOString(),
    });
  });

  it("preserves branch and cached metadata when creating from a scenario", async () => {
    const branch = "my-branch";
    const expireAfter = new Date("2026-09-20T12:00:00.000Z");
    const newScenarioRid = "ri.actions..scenario.new";

    client = createClient(
      "https://mock.com",
      ontologyRid,
      () => "Token",
      { UNSTABLE_DO_NOT_USE_BRANCH: branch },
      fetchFunction,
    );

    mockInterfaceFetchPageResponse(fetchFunction, { data: [] });
    await client(BarInterface).fetchPage();
    fetchFunction.mockClear();
    const createResponse: CreateOntologyScenarioResponse = {
      scenarioRid: newScenarioRid,
    };
    mockFetchResponse(fetchFunction, createResponse);

    const original = withScenario(client, "ri.actions..scenario.original");
    const scenario = await createScenario(original, { expireAfter });

    expect(fetchFunction).toHaveBeenCalledTimes(1);
    expect(JSON.parse(fetchFunction.mock.calls[0][1]?.body as string)).toEqual({
      base: { type: "branch", branch },
      expireAfter: expireAfter.toISOString(),
    });
    mockFetchResponse(fetchFunction, { data: [] });
    await scenario(BarInterface).fetchPage();
    expect(fetchFunction).toHaveBeenCalledTimes(2);
    const scenarioUrl = new URL(String(fetchFunction.mock.lastCall?.[0]));
    expect(scenarioUrl.searchParams.get("branch")).toBe(branch);
    expect(scenarioUrl.searchParams.get("scenarioRid")).toBe(newScenarioRid);
    mockFetchResponse(fetchFunction, { data: [] });
    await client(BarInterface).fetchPage();
    expect(
      new URL(String(fetchFunction.mock.lastCall?.[0])).searchParams.get(
        "branch",
      ),
    ).toBe(branch);
  });

  it("creates an independent scenario without flushing the parent transaction", async () => {
    const flushEdits = vi.fn(async () => {});
    const txClient = createClientWithTransaction(
      "ri.transactions..transaction.xyz",
      flushEdits,
      "https://mock.com",
      ontologyRid,
      () => "Token",
      {},
      fetchFunction,
    );
    const newScenarioRid = "ri.actions..scenario.new";
    const createResponse: CreateOntologyScenarioResponse = {
      scenarioRid: newScenarioRid,
    };
    mockFetchResponse(fetchFunction, createResponse);

    const scenario = await createScenario(txClient);

    expect(scenario.getScenarioReference()).toBe(newScenarioRid);
    mockInterfaceFetchPageResponse(fetchFunction, { data: [] });
    await scenario(BarInterface).fetchPage();
    expect(flushEdits).not.toHaveBeenCalled();
    for (const [input] of fetchFunction.mock.calls) {
      expect(new URL(String(input)).searchParams.has("transactionId")).toBe(
        false,
      );
    }
    expect(
      new URL(String(fetchFunction.mock.lastCall?.[0])).searchParams.get(
        "scenarioRid",
      ),
    ).toBe(newScenarioRid);
    mockFetchResponse(fetchFunction, { data: [] });
    await txClient(BarInterface).fetchPage();
    expect(flushEdits).toHaveBeenCalledTimes(1);
    expect(
      new URL(String(fetchFunction.mock.lastCall?.[0])).searchParams.get(
        "transactionId",
      ),
    ).toBe("ri.transactions..transaction.xyz");
  });

  it("creates from main when the parent is already scoped to a scenario", async () => {
    const original = withScenario(client, "ri.actions..scenario.abc");
    mockFetchResponse(fetchFunction, {
      scenarioRid: "ri.actions..scenario.new",
    });
    const scenario = await createScenario(original);
    expect(
      new URL(String(fetchFunction.mock.calls[0][0])).searchParams.has(
        "scenarioRid",
      ),
    ).toBe(false);
    expect(JSON.parse(fetchFunction.mock.calls[0][1]?.body as string)).toEqual(
      {},
    );
    mockInterfaceFetchPageResponse(fetchFunction, { data: [] });
    await scenario(BarInterface).fetchPage();
    expect(
      new URL(String(fetchFunction.mock.lastCall?.[0])).searchParams.get(
        "scenarioRid",
      ),
    ).toBe("ri.actions..scenario.new");
    mockFetchResponse(fetchFunction, { data: [] });
    await original(BarInterface).fetchPage();
    expect(
      new URL(String(fetchFunction.mock.lastCall?.[0])).searchParams.get(
        "scenarioRid",
      ),
    ).toBe("ri.actions..scenario.abc");
  });
});
