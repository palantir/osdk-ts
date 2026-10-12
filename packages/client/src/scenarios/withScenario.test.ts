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
import type { LoadObjectSetV2MultipleObjectTypesResponse } from "@osdk/foundry.ontologies";
import { PalantirApiError, UnknownError } from "@osdk/shared.net.errors";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { Client } from "../Client.js";
import { createClient, createClientWithTransaction } from "../createClient.js";
import {
  mockFetchResponse,
  mockInterfaceFetchPageResponse,
} from "../createClient.test.js";
import { withScenario } from "./withScenario.js";

describe("withScenario", () => {
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

  it("returns synchronously without making a network call", () => {
    const scenario = withScenario(client, "ri.actions..scenario.abc");
    expect(scenario).toBeDefined();
    expect(fetchFunction).not.toHaveBeenCalled();
  });

  it("getScenarioReference returns the scenario rid", () => {
    const scenario = withScenario(client, "ri.actions..scenario.abc");
    expect(scenario.getScenarioReference()).toBe("ri.actions..scenario.abc");
  });

  it("forwards scenarioRid as a query param on fetchPage", async () => {
    const scenario = withScenario(client, "ri.actions..scenario.abc");
    const mock: LoadObjectSetV2MultipleObjectTypesResponse = { data: [] };
    mockInterfaceFetchPageResponse(fetchFunction, mock);

    await scenario(BarInterface).fetchPage();

    expect(fetchFunction).toHaveBeenCalledTimes(2);
    const loadCall = fetchFunction.mock.calls.find(([input]) =>
      String(input).includes("objectSets/loadObjects"),
    );
    const url = new URL(loadCall?.[0] as string, "https://mock.com");
    expect(url.searchParams.get("scenarioRid")).toBe(
      "ri.actions..scenario.abc",
    );
  });

  it("reuses ontology metadata already loaded by the base client", async () => {
    const mock: LoadObjectSetV2MultipleObjectTypesResponse = { data: [] };
    mockInterfaceFetchPageResponse(fetchFunction, mock);
    await client(BarInterface).fetchPage();
    expect(fetchFunction).toHaveBeenCalledTimes(2);

    const scenario = withScenario(client, "ri.actions..scenario.abc");
    mockFetchResponse(fetchFunction, mock);
    await scenario(BarInterface).fetchPage();

    expect(fetchFunction).toHaveBeenCalledTimes(3);
    const url = new URL(
      fetchFunction.mock.calls[2][0] as string,
      "https://mock.com",
    );
    expect(url.pathname).toContain("objectSets/loadObjects");
    expect(url.searchParams.get("scenarioRid")).toBe(
      "ri.actions..scenario.abc",
    );
  });

  it("warns and ignores an active transaction, scoping to the scenario", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const txClient = createClientWithTransaction(
      "ri.transactions..transaction.xyz",
      async () => {},
      "https://mock.com",
      ontologyRid,
      () => "Token",
      {},
      fetchFunction,
    );
    const scenario = withScenario(txClient, "ri.actions..scenario.abc");
    expect(warnSpy).toHaveBeenCalledWith(expect.stringMatching(/transaction/u));
    expect(scenario.getScenarioReference()).toBe("ri.actions..scenario.abc");
    warnSpy.mockRestore();
  });

  it("rejects a client already scoped to a scenario at runtime", () => {
    const scenario = withScenario(client, "ri.actions..scenario.abc");
    expect(() => withScenario(scenario, "ri.actions..scenario.def")).toThrow(
      /scenario/u,
    );
  });

  it("surfaces API errors with the same shape as the base client", async () => {
    const errorBody = {
      errorCode: "INVALID_ARGUMENT",
      errorName: "FunctionEncounteredUserFacingError",
      errorInstanceId: "instance-id",
      parameters: { message: "Shift is already full" },
    };
    fetchFunction.mockImplementation(() =>
      Promise.resolve(Response.json(errorBody, { status: 400 })),
    );
    const scenario = withScenario(client, "ri.actions..scenario.abc");

    const error = await scenario.getEditedEntityTypes().catch((e) => e);

    expect(error).toBeInstanceOf(PalantirApiError);
    expect(error).not.toBeInstanceOf(UnknownError);
    expect(error).toMatchObject({
      errorName: "FunctionEncounteredUserFacingError",
      errorCode: "INVALID_ARGUMENT",
      errorInstanceId: "instance-id",
      statusCode: 400,
      parameters: { message: "Shift is already full" },
    });
    expect(fetchFunction).toHaveBeenCalledTimes(1);
  });
});
