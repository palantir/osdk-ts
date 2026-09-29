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
import { describe, expect, it, vi } from "vitest";

import { createMinimalClient } from "../createMinimalClient.js";
import {
  createObjectSet,
  getWireObjectSet,
} from "../objectSet/createObjectSet.js";
import { convertAgentData } from "./agentData.js";

const objectType = { apiName: "Todo", rid: "ri.object.type", primaryKey: "id" };
const reference = {
  ontologyRid: "ri.ontology.test",
  objectTypeApiName: "Todo",
  primaryKey: { id: 123 },
};
const object: DataType = { type: "object", objectTypeRid: objectType.rid };
const definition = { type: "object", apiName: "Todo" } as const;
function setup() {
  const fetcher = vi.fn<typeof fetch>((url) => {
    if (String(url).includes("getByRidBatch"))
      return Promise.resolve(Response.json({ data: [objectType] }));
    if (String(url).includes("objectSets/createTemporary"))
      return Promise.resolve(Response.json({ objectSetRid: "ri.object.set" }));
    throw new Error(`Unexpected request: ${url}`);
  });
  const client = createMinimalClient(
    { ontologyRid: "ri.ontology.test" },
    "https://example.com",
    () => Promise.resolve("token"),
    {},
    fetcher,
  );
  return { client, fetcher };
}

describe("agent data conversion", () => {
  it("converts nested object values through structs, lists, records, nullable types and unions", async () => {
    const { client } = setup();
    const type: DataType = {
      type: "struct",
      fields: [
        {
          name: "items",
          dataType: {
            type: "list",
            elementType: {
              type: "record",
              valueType: { type: "nullable", wrappedType: object },
            },
          },
        },
        {
          name: "selected",
          dataType: {
            type: "discriminatedUnion",
            discriminatorKey: "kind",
            members: [
              {
                discriminatorValue: "todo",
                fields: [{ name: "value", dataType: object }],
              },
            ],
          },
        },
      ],
    };
    const input = {
      items: [{ a: 123, b: null }],
      selected: { kind: "todo", value: { $apiName: "Todo", $primaryKey: 123 } },
    };
    const wire = await convertAgentData(client, type, input, "input");
    expect(wire).toEqual({
      items: [{ a: reference, b: null }],
      selected: { kind: "todo", value: reference },
    });
    const result = await convertAgentData(client, type, wire, "output");
    expect(result).toMatchObject({
      items: [{ a: { $apiName: "Todo", $primaryKey: 123 }, b: null }],
      selected: { kind: "todo", value: { $apiName: "Todo", $primaryKey: 123 } },
    });
  });

  it("converts normal OSDK object sets in both directions", async () => {
    const { client, fetcher } = setup();
    const type: DataType = {
      type: "objectSet",
      objectTypeRid: objectType.rid,
    };
    const set = createObjectSet(definition, client);
    expect(await convertAgentData(client, type, set, "input")).toBe(
      "ri.object.set",
    );
    expect(JSON.parse(String(fetcher.mock.calls[0][1]?.body))).toEqual({
      objectSet: { type: "base", objectType: "Todo" },
    });
    const result = await convertAgentData(
      client,
      type,
      "ri.object.set",
      "output",
    );
    expect(getWireObjectSet(result as typeof set)).toEqual({
      type: "intersect",
      objectSets: [
        { type: "base", objectType: "Todo" },
        { type: "reference", reference: "ri.object.set" },
      ],
    });
  });

  it("reuses object metadata for sequential conversions", async () => {
    const { client, fetcher } = setup();
    await convertAgentData(client, object, 123, "input");
    await convertAgentData(client, object, reference, "output");
    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(JSON.parse(String(fetcher.mock.calls[0][1]?.body))).toEqual({
      requests: [{ objectTypeRid: objectType.rid }],
    });
  });

  it("reports inaccessible object types", async () => {
    const { client, fetcher } = setup();
    fetcher.mockResolvedValueOnce(Response.json({ data: [] }));
    await expect(
      convertAgentData(client, object, 123, "input"),
    ).rejects.toThrow("unavailable");
  });
});
