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

const ontology = { apiName: "test", rid: "ri.ontology.test" };
const objectType = {
  apiName: "Todo",
  rid: "ri.object.type",
  primaryKey: "id",
  icon: { type: "blueprint", color: "#000000", name: "document" },
  properties: { id: { dataType: { type: "integer" } } },
};
const reference = {
  ontologyRid: "ri.ontology.test",
  objectTypeApiName: "Todo",
  primaryKey: { id: 123 },
};
const object: DataType = {
  type: "object",
  ontologyApiName: ontology.apiName,
  objectTypeApiName: objectType.apiName,
};
const definition = { type: "object", apiName: "Todo" } as const;
function setup() {
  const fetcher = vi.fn<typeof fetch>((url) => {
    const path = new URL(String(url)).pathname;
    if (path.endsWith("/ontologies/ri.ontology.test"))
      return Promise.resolve(Response.json(ontology));
    if (path.endsWith("/objectTypes/Todo/fullMetadata"))
      return Promise.resolve(Response.json({ objectType, linkTypes: [] }));
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
      ontologyApiName: ontology.apiName,
      objectTypeApiName: objectType.apiName,
    };
    const set = createObjectSet(definition, client);
    expect(await convertAgentData(client, type, set, "input")).toBe(
      "ri.object.set",
    );
    expect(JSON.parse(String(fetcher.mock.calls[1][1]?.body))).toEqual({
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
    expect(fetcher).toHaveBeenCalledTimes(2);
    expect(String(fetcher.mock.calls[0][0])).toContain(
      "/ontologies/ri.ontology.test",
    );
    expect(String(fetcher.mock.calls[1][0])).toContain(
      "/objectTypes/Todo/fullMetadata",
    );
    expect(
      fetcher.mock.calls.some(([url]) => String(url).includes("getByRidBatch")),
    ).toBe(false);
  });

  it("reports inaccessible object types", async () => {
    const { client, fetcher } = setup();
    fetcher
      .mockResolvedValueOnce(Response.json(ontology))
      .mockResolvedValueOnce(
        Response.json(
          {
            errorCode: "NOT_FOUND",
            errorName: "ObjectTypeNotFound",
            parameters: { objectType: "Todo" },
          },
          { status: 404 },
        ),
      );
    await expect(
      convertAgentData(client, object, 123, "input"),
    ).rejects.toMatchObject({ statusCode: 404 });
  });

  it("converts object references and object sets in struct fields", async () => {
    const { client } = setup();
    const type: DataType = {
      type: "struct",
      fields: [
        { name: "object", dataType: object },
        { name: "objects", dataType: { ...object, type: "objectSet" } },
      ],
    };
    const input = {
      object: { $apiName: "Todo", $primaryKey: 123 },
      objects: createObjectSet(definition, client),
    };
    const wire = await convertAgentData(client, type, input, "input");
    expect(wire).toEqual({ object: reference, objects: "ri.object.set" });
    const result = (await convertAgentData(
      client,
      type,
      wire,
      "output",
    )) as typeof input;
    expect(result.object).toMatchObject(input.object);
    expect(getWireObjectSet(result.objects)).toMatchObject({
      type: "intersect",
      objectSets: [
        { type: "base", objectType: "Todo" },
        { type: "reference", reference: "ri.object.set" },
      ],
    });
  });

  it("rejects object references and object sets belonging to another ontology", async () => {
    const { client, fetcher } = setup();
    const foreignObject: DataType = { ...object, ontologyApiName: "other" };
    await expect(
      convertAgentData(client, foreignObject, 123, "input"),
    ).rejects.toThrow("belongs to ontology other, expected test");
    await expect(
      convertAgentData(
        client,
        { ...foreignObject, type: "objectSet" },
        createObjectSet(definition, client),
        "input",
      ),
    ).rejects.toThrow("belongs to ontology other, expected test");
    expect(fetcher).toHaveBeenCalledTimes(1);
  });
});
