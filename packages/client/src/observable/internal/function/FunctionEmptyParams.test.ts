/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { QueryDefinition } from "@osdk/api";
import type { ExecuteQueryRequest } from "@osdk/foundry.ontologies";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { FunctionPayload } from "../../FunctionPayload.js";
import { createObservableClient } from "../../ObservableClient.js";
import { createDefer } from "../testUtils.js";

const defer = createDefer();
const executionCount: QueryDefinition<unknown> = {
  type: "query",
  apiName: "executionCount",
  version: "1.0.0",
  isFixedVersion: true,
};

describe("empty function parameters", () => {
  let client: Client;
  const executionCounts = new Map<string, number>();
  const requests: ExecuteQueryRequest[] = [];

  beforeAll(() => {
    const foundry = new LegacyFauxFoundry();
    foundry.getDefaultOntology().registerQueryType(
      {
        apiName: "executionCount",
        version: "1.0.0",
        rid: "ri.function-registry.main.function.execution-count",
        parameters: { n: { dataType: { type: "integer" }, required: false } },
        output: { type: "integer" },
        typeReferences: {},
      },
      (request) => {
        requests.push(request);
        const key = JSON.stringify(request.parameters);
        const count = (executionCounts.get(key) ?? 0) + 1;
        executionCounts.set(key, count);
        return { value: count };
      },
    );
    const setup = startNodeApiServer(foundry, createClient);
    ({ client } = setup);
    return () => setup.apiServer.close();
  });

  beforeEach(() => {
    executionCounts.clear();
    requests.length = 0;
  });

  it("reuses the same empty request for omitted and explicit empty parameters", async () => {
    const observableClient = createObservableClient(client);
    const omitted = {
      next: vi.fn<(value: FunctionPayload) => void>(),
      error: vi.fn(),
      complete: vi.fn(),
    };
    const empty = {
      next: vi.fn<(value: FunctionPayload) => void>(),
      error: vi.fn(),
      complete: vi.fn(),
    };
    defer(
      observableClient.observeFunction(
        executionCount,
        undefined,
        { dedupeInterval: 60_000 },
        omitted,
      ),
    );
    await vi.waitFor(() => {
      expect(omitted.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: 1 }),
      );
    });
    defer(
      observableClient.observeFunction(
        executionCount,
        {},
        { dedupeInterval: 60_000 },
        empty,
      ),
    );
    await vi.waitFor(() => {
      expect(empty.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: 1 }),
      );
    });
    expect(requests).toEqual([{ parameters: {} }]);
  });

  it("invalidates only empty parameters when explicit empty parameters are supplied", async () => {
    const observableClient = createObservableClient(client);
    const omitted = {
      next: vi.fn<(value: FunctionPayload) => void>(),
      error: vi.fn(),
      complete: vi.fn(),
    };
    const withValue = {
      next: vi.fn<(value: FunctionPayload) => void>(),
      error: vi.fn(),
      complete: vi.fn(),
    };
    defer(
      observableClient.observeFunction(
        executionCount,
        undefined,
        { dedupeInterval: 60_000 },
        omitted,
      ),
    );
    defer(
      observableClient.observeFunction(
        executionCount,
        { n: 1 },
        { dedupeInterval: 60_000 },
        withValue,
      ),
    );
    await vi.waitFor(() => {
      expect(omitted.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: 1 }),
      );
      expect(withValue.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: 1 }),
      );
    });
    await observableClient.invalidateFunction(executionCount, {});
    expect(omitted.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 2 }),
    );
    expect(withValue.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 1 }),
    );

    await observableClient.invalidateFunction(executionCount);
    expect(omitted.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 3 }),
    );
    expect(withValue.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 2 }),
    );
  });
});
