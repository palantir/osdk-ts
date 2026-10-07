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
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { FunctionPayload } from "../../FunctionPayload.js";
import { createObservableClient } from "../../ObservableClient.js";
import { createDefer } from "../testUtils.js";

const defer = createDefer();
const countGroups: QueryDefinition<unknown> = {
  type: "query",
  apiName: "countGroups",
  version: "1.0.0",
  isFixedVersion: true,
};

describe("repeated function parameter references", () => {
  let client: Client;
  let executions = 0;

  beforeAll(() => {
    const foundry = new LegacyFauxFoundry();
    foundry.getDefaultOntology().registerQueryType(
      {
        apiName: "countGroups",
        version: "1.0.0",
        rid: "ri.function-registry.main.function.count-groups",
        parameters: {
          groups: {
            dataType: {
              type: "array",
              subType: { type: "array", subType: { type: "string" } },
            },
            required: true,
          },
        },
        output: { type: "integer" },
        typeReferences: {},
      },
      (request) => {
        executions++;
        return { value: request.parameters.groups.length };
      },
    );
    const setup = startNodeApiServer(foundry, createClient);
    ({ client } = setup);
    return () => setup.apiServer.close();
  });

  beforeEach(() => {
    executions = 0;
  });

  it("executes shared array references and reuses their equivalent copied values", async () => {
    const observableClient = createObservableClient(client);
    const sharedGroup = ["first"];
    const repeated = {
      next: vi.fn<(value: FunctionPayload) => void>(),
      error: vi.fn(),
      complete: vi.fn(),
    };
    const copied = {
      next: vi.fn<(value: FunctionPayload) => void>(),
      error: vi.fn(),
      complete: vi.fn(),
    };
    defer(
      observableClient.observeFunction(
        countGroups,
        { groups: [sharedGroup, sharedGroup] },
        { dedupeInterval: 60_000 },
        repeated,
      ),
    );
    await vi.waitFor(() => {
      expect(repeated.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: 2 }),
      );
    });
    defer(
      observableClient.observeFunction(
        countGroups,
        { groups: [["first"], ["first"]] },
        { dedupeInterval: 60_000 },
        copied,
      ),
    );
    await vi.waitFor(() => {
      expect(copied.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: 2 }),
      );
    });
    expect(executions).toBe(1);
  });

  it("still rejects a circular array before execution", () => {
    const observableClient = createObservableClient(client);
    const groups: unknown[] = [];
    groups.push(groups);
    const observer = {
      next: vi.fn<(value: FunctionPayload) => void>(),
      error: vi.fn(),
      complete: vi.fn(),
    };
    expect(() =>
      observableClient.observeFunction(countGroups, { groups }, {}, observer),
    ).toThrow("Circular reference in function parameters");
  });
});
