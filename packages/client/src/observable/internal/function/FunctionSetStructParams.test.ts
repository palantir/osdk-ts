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
const summarizeGroups: QueryDefinition<unknown> = {
  type: "query",
  apiName: "summarizeGroups",
  version: "1.0.0",
  isFixedVersion: true,
};

describe("function Set of struct parameters", () => {
  let client: Client;
  let executions = 0;

  beforeAll(() => {
    const foundry = new LegacyFauxFoundry();
    foundry.getDefaultOntology().registerQueryType(
      {
        apiName: "summarizeGroups",
        version: "1.0.0",
        rid: "ri.function-registry.main.function.summarize-groups",
        parameters: {
          groups: {
            dataType: {
              type: "set",
              subType: {
                type: "struct",
                fields: [
                  { name: "name", fieldType: { type: "string" } },
                  {
                    name: "values",
                    fieldType: { type: "array", subType: { type: "string" } },
                  },
                ],
              },
            },
            required: true,
          },
        },
        output: { type: "string" },
        typeReferences: {},
      },
      (request) => {
        executions++;
        return {
          value: request.parameters.groups
            .map((group: { values: string[] }) => group.values.join(","))
            .sort()
            .join("|"),
        };
      },
    );
    const setup = startNodeApiServer(foundry, createClient);
    ({ client } = setup);
    return () => setup.apiServer.close();
  });

  beforeEach(() => {
    executions = 0;
  });

  it("shares a result when struct field order and set insertion order differ", async () => {
    const observableClient = createObservableClient(client);
    const first = { next: vi.fn<(value: FunctionPayload) => void>() };
    const equivalent = { next: vi.fn<(value: FunctionPayload) => void>() };
    defer(
      observableClient.observeFunction(
        summarizeGroups,
        {
          groups: new Set([
            { name: "a", values: ["z"] },
            { name: "b", values: ["a"] },
          ]),
        },
        { dedupeInterval: 60_000 },
        first,
      ),
    );
    await vi.waitFor(() => {
      expect(first.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: "a|z" }),
      );
    });
    defer(
      observableClient.observeFunction(
        summarizeGroups,
        {
          groups: new Set([
            { values: ["a"], name: "b" },
            { values: ["z"], name: "a" },
          ]),
        },
        { dedupeInterval: 60_000 },
        equivalent,
      ),
    );
    await vi.waitFor(() => {
      expect(equivalent.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: "a|z" }),
      );
    });
    expect(executions).toBe(1);
  });

  it("preserves array order within a set member", async () => {
    const observableClient = createObservableClient(client);
    const first = { next: vi.fn<(value: FunctionPayload) => void>() };
    const reversed = { next: vi.fn<(value: FunctionPayload) => void>() };
    defer(
      observableClient.observeFunction(
        summarizeGroups,
        { groups: new Set([{ name: "group", values: ["first", "second"] }]) },
        { dedupeInterval: 60_000 },
        first,
      ),
    );
    await vi.waitFor(() => {
      expect(first.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: "first,second" }),
      );
    });
    defer(
      observableClient.observeFunction(
        summarizeGroups,
        { groups: new Set([{ name: "group", values: ["second", "first"] }]) },
        { dedupeInterval: 60_000 },
        reversed,
      ),
    );
    await vi.waitFor(() => {
      expect(reversed.next).toHaveBeenLastCalledWith(
        expect.objectContaining({ status: "loaded", result: "second,first" }),
      );
    });
    expect(executions).toBe(2);
  });
});
