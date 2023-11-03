/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ThinClient } from "@osdk/api";
import { createThinClient } from "@osdk/api";
import type {
  AggregateObjectSetResponseV2,
  LoadObjectSetResponseV2,
  OntologyObjectV2,
} from "@osdk/gateway/types";
import {
  beforeEach,
  describe,
  expect,
  it,
  type MockedFunction,
  vi,
} from "vitest";
import type { ObjectSetDefinition } from "../../ontology-runtime";
import { MockOntology } from "../../util/test";
import { createBaseOsdkObjectSet } from "./OsdkObjectSet";

describe("OsdkObjectSet", () => {
  const origin = "https://mock.com";
  const baseUrl = `${origin}/api/v2/ontologies/`;

  let fetch: MockedFunction<typeof globalThis.fetch>;
  let client: ThinClient<typeof MockOntology>;
  beforeEach(() => {
    fetch = vi.fn();
    client = createThinClient(
      MockOntology,
      origin,
      () => "Token",
      fetch,
    );
  });

  it("creates a search on an ObjectSet", () => {
    const os = createBaseTodoObjectSet(client);
    const whereObjectSet = os.where(a => a.id.eq("123"));

    expect(whereObjectSet.definition).toEqual({
      type: "filter",
      objectSet: baseObjectSet,
      where: {
        type: "eq",
        field: "id",
        value: "123",
      },
    });
  });

  it("creates a searchAround on an ObjectSet", () => {
    const os = createBaseTodoObjectSet(client);
    const searchAroundObjectSet = os.searchAroundLinkedTask();

    expect(searchAroundObjectSet.definition).toEqual({
      type: "searchAround",
      objectSet: baseObjectSet,
      link: "linkedTask",
    });
  });

  it("creates the count aggregation", async () => {
    const os = createBaseTodoObjectSet(client);
    mockAggregateResponse({ data: [] });
    await os.count().compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "count", name: "count" }],
      }),
    );
  });

  it("creates the min aggregation", async () => {
    const os = createBaseTodoObjectSet(client);
    mockAggregateResponse({ data: [] });
    await os.min(s => s.points).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "min", name: "min", field: "points" }],
      }),
    );
  });

  it("creates the max aggregation", async () => {
    const os = createBaseTodoObjectSet(client);
    mockAggregateResponse({ data: [] });
    await os.max(s => s.points).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "max", name: "max", field: "points" }],
      }),
    );
  });

  it("creates the sum aggregation", async () => {
    const os = createBaseTodoObjectSet(client);
    mockAggregateResponse({ data: [] });
    await os.sum(s => s.points).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "sum", name: "sum", field: "points" }],
      }),
    );
  });

  it("creates the avg aggregation", async () => {
    const os = createBaseTodoObjectSet(client);
    mockAggregateResponse({ data: [] });
    await os.avg(s => s.points).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "avg", name: "avg", field: "points" }],
      }),
    );
  });

  it("creates the groupBy clauses", async () => {
    const os = createBaseTodoObjectSet(client);
    mockAggregateResponse({ data: [] });
    await os.groupBy(s => s.complete.exact()).groupBy(s => s.body.exact())
      .count().compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [{ type: "exact", field: "complete" }, {
          type: "exact",
          field: "body",
        }],
        aggregation: [{ type: "count", name: "count" }],
      }),
    );
  });

  it("creates complex aggregation queries", async () => {
    const os = createBaseTodoObjectSet(client);
    mockAggregateResponse({ data: [] });
    await (os.aggregate(b => ({
      foo: b.complete.approximateDistinct(),
      bar: b.body.approximateDistinct(),
    })).compute());
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{
          type: "approximateDistinct",
          name: "foo",
          field: "complete",
        }, { type: "approximateDistinct", name: "bar", field: "body" }],
      }),
    );
  });

  it("creates approximateDistinct queries", async () => {
    const os = createBaseTodoObjectSet(client);
    mockAggregateResponse({ data: [] });
    await os.approximateDistinct(s => s.complete).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{
          type: "approximateDistinct",
          name: "distinctCount",
          field: "complete",
        }],
      }),
    );
  });

  it("supports select methods - all", async () => {
    const os = createBaseTodoObjectSet(client);
    mockObjectPage([mockTodoObject]);
    const result = await os.select(["id", "body", "complete"]).all();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/loadObjects", {
        objectSet: {
          type: "base",
          objectType: "Todo",
        },
        select: ["id", "body", "complete"],
      }),
    );
    expect(result.type).toEqual("ok");
  });

  it("supports select methods - page", async () => {
    const os = createBaseTodoObjectSet(client);
    mockObjectPage([mockTodoObject]);
    const result = await os.select(["id", "body", "complete"]).page({
      pageSize: 5,
      pageToken: "fakePageToken",
    });
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/loadObjects", {
        objectSet: {
          type: "base",
          objectType: "Todo",
        },
        select: ["id", "body", "complete"],
        pageSize: 5,
        pageToken: "fakePageToken",
      }),
    );
    expect(result.type).toEqual("ok");
  });

  it("supports select methods - get", async () => {
    const os = createBaseTodoObjectSet(client);
    mockObjectPage([mockTodoObject]);
    const result = await os.select(["id", "body", "complete"]).get("123");
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      `${baseUrl}Ontology/objects/Todo/123?select=id&select=body&select=complete`,
      {
        method: "GET",
        body: undefined,
        headers: expect.anything(),
      },
    );
    expect(result.type).toEqual("ok");
  });

  it("loads a page", async () => {
    const os = createBaseTodoObjectSet(client);
    mockObjectPage([mockTodoObject]);
    const page = await os.page({ pageSize: 1 });
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/loadObjects", {
        objectSet: {
          type: "base",
          objectType: "Todo",
        },
        select: [],
        pageSize: 1,
      }),
    );
    expect(page.type).toEqual("ok");
  });

  function mockObjectPage(
    objects: OntologyObjectV2[],
  ) {
    const response: LoadObjectSetResponseV2 = {
      data: objects,
    };

    fetch.mockResolvedValue({
      json: () => {
        return Promise.resolve(response);
      },
      status: 200,
      ok: true,
    } as any);
  }

  function mockAggregateResponse(response: AggregateObjectSetResponseV2) {
    fetch.mockResolvedValue({
      json: () => Promise.resolve(response),
      status: 200,
      ok: true,
    } as any);
  }

  function expectedJestResponse(
    endpoint: string,
    body: object,
  ): [string, RequestInit] {
    return [
      `${baseUrl}${endpoint}`,
      {
        body: JSON.stringify(body),
        headers: expect.anything(),
        method: "POST",
      },
    ];
  }
});

const baseObjectSet: ObjectSetDefinition = {
  type: "base",
  objectType: "Todo",
};

function createBaseTodoObjectSet(client: ThinClient<any>) {
  const os = createBaseOsdkObjectSet<typeof MockOntology, "Todo">(
    client,
    "Todo",
  );

  return os;
}

const mockTodoObject: OntologyObjectV2 = {
  __apiName: "Todo",
  __primaryKey: 1,
  __rid: "ri.a.b.c.d",
  id: "123",
  body: "body",
  complete: false,
};
