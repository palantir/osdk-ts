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

import type {
  AggregateObjectsResponseV2,
  ListLinkedObjectsResponseV2,
  LoadObjectSetResponseV2,
  OntologyObjectV2,
} from "@osdk/gateway/types";
import { createClientContext, isOk } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import {
  getMockTaskObject,
  getMockTodoObject,
  loadAll,
  mockFetchResponse,
  MockOntology,
} from "@osdk/shared.test";
import {
  beforeEach,
  describe,
  expect,
  it,
  type MockedFunction,
  vi,
} from "vitest";
import { USER_AGENT } from "../../USER_AGENT.js";
import type { ObjectSetDefinition } from "../baseTypes/index.js";
import { convertWireToOsdkObject } from "../objects/convertWireToOsdkObject.js";
import { createBaseOsdkObjectSet } from "./OsdkObjectSet.js";

describe("OsdkObjectSet", () => {
  const origin = "https://mock.com";
  const baseUrl = `${origin}/api/v2/ontologies/`;

  let fetch: MockedFunction<typeof globalThis.fetch> = vi.fn();
  let client: ClientContext<typeof MockOntology>;

  beforeEach(() => {
    fetch = vi.fn();
    client = createClientContext(
      MockOntology,
      origin,
      () => "Token",
      USER_AGENT,
      fetch,
    );
  });

  it("exposes descriptions", () => {
    const os = createBaseObjectSet(client, "Todo");
    expect(os.description).toEqual("A todo object");
    expect(os.properties.id.apiName).toEqual("id");
    expect(os.properties.id.description).toEqual("The id");
    expect(os.properties.body.apiName).toEqual("body");
    expect(os.properties.body.description).toEqual("");
  });

  it("creates a search on an ObjectSet", () => {
    const os = createBaseObjectSet(client, "Todo");
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
    const os = createBaseObjectSet(client, "Todo");
    const searchAroundObjectSet = os.searchAroundLinkedTask();

    expect(searchAroundObjectSet.definition).toEqual({
      type: "searchAround",
      objectSet: baseObjectSet,
      link: "linkedTask",
    });
  });
  it("pivot creates a searchAround on an ObjectSet", () => {
    const os = createBaseObjectSet(client, "Todo");
    const searchAroundObjectSet = os.pivotTo("linkedTask");
    expect(searchAroundObjectSet.definition).toEqual({
      type: "searchAround",
      objectSet: baseObjectSet,
      link: "linkedTask",
    });
  });

  it("creates the count aggregation", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
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
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
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
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
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
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
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
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
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

  it("creates the max aggregation for a long property", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
    await os.max(s => s.unixTimestamp).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "max", name: "max", field: "unixTimestamp" }],
      }),
    );
  });

  it("creates the groupBy clauses", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
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

  it("creates exact distinct aggregation queries", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
    await (os.aggregate(b => ({
      foo: b.complete.exactDistinct(),
      bar: b.body.exactDistinct(),
      baz: b.unixTimestamp.avg(),
      qux: b.unixTimestamp.exactDistinct(),
    })).compute());
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [
          { type: "exactDistinct", name: "foo", field: "complete" },
          { type: "exactDistinct", name: "bar", field: "body" },
          { type: "avg", name: "baz", field: "unixTimestamp" },
          { type: "exactDistinct", name: "qux", field: "unixTimestamp" },
        ],
      }),
    );
  });

  it("creates complex aggregation queries", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
    await (os.aggregate(b => ({
      foo: b.complete.approximateDistinct(),
      bar: b.body.approximateDistinct(),
      baz: b.unixTimestamp.avg(),
      qux: b.unixTimestamp.approximateDistinct(),
    })).compute());
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [
          { type: "approximateDistinct", name: "foo", field: "complete" },
          { type: "approximateDistinct", name: "bar", field: "body" },
          { type: "avg", name: "baz", field: "unixTimestamp" },
          { type: "approximateDistinct", name: "qux", field: "unixTimestamp" },
        ],
      }),
    );
  });

  it("creates approximateDistinct queries", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockAggregateResponse({ data: [], accuracy: "ACCURATE" });
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
    const os = createBaseObjectSet(client, "Todo");
    mockObjectPage([getMockTodoObject()]);
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

  it("supports select methods - asyncIter", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockObjectPage([getMockTodoObject()]);
    const result = await loadAll(
      os.select(["id", "body", "complete"]).asyncIter(),
    );
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
  });

  it("supports select methods - page", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockObjectPage([getMockTodoObject()]);
    const result = await os.select(["id", "body", "complete"])
      .fetchPageWithErrors({
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
    const os = createBaseObjectSet(client, "Todo");
    mockFetchResponse(fetch, getMockTodoObject());
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

  it("supports select methods - fetchOneWithErrors", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockFetchResponse(fetch, getMockTodoObject());
    const result = await os.select(["id", "body", "complete"])
      .fetchOneWithErrors("123");
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

  it("supports select methods - fetchOne", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockFetchResponse(fetch, getMockTodoObject());
    const result = await os.select(["id", "body", "complete"])
      .fetchOne("123");
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      `${baseUrl}Ontology/objects/Todo/123?select=id&select=body&select=complete`,
      {
        method: "GET",
        body: undefined,
        headers: expect.anything(),
      },
    );
  });

  it("supports round-trip of circular links", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockFetchResponse(fetch, getMockTodoObject());
    const todoResponse = await os.get("1");

    if (!isOk(todoResponse)) {
      expect.fail("todo response was not ok");
    }

    mockObjectPage([getMockTaskObject()]);
    const taskResponse = await todoResponse.value.linkedTask.get();

    if (!isOk(taskResponse)) {
      expect.fail("task response was not ok");
    }

    mockObjectPage([getMockTodoObject()]);
    const linkedTodosResponse = await taskResponse.value.linkedTodos.all();

    if (!isOk(linkedTodosResponse)) {
      expect.fail("linked todos response was not ok");
    }

    expect(linkedTodosResponse.value.length).toEqual(1);
  });

  it("supports round-trip of circular links -fetchOneWithErrors", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockFetchResponse(fetch, getMockTodoObject());
    const todoResponse = await os.fetchOneWithErrors("1");

    if (!isOk(todoResponse)) {
      expect.fail("todo response was not ok");
    }

    mockObjectPage([getMockTaskObject()]);
    const taskResponse = await todoResponse.value.linkedTask
      .fetchOneWithErrors();

    if (!isOk(taskResponse)) {
      expect.fail("task response was not ok");
    }

    mockObjectPage([getMockTodoObject()]);
    const linkedTodosResponse = await taskResponse.value.linkedTodos.all();

    if (!isOk(linkedTodosResponse)) {
      expect.fail("linked todos response was not ok");
    }

    expect(linkedTodosResponse.value.length).toEqual(1);
  });

  it("supports round-trip of circular links -fetchOne", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockFetchResponse(fetch, getMockTodoObject());
    const todoResponse = await os.fetchOne("1");

    mockObjectPage([getMockTaskObject()]);
    const taskResponse = await todoResponse.linkedTask
      .fetchOne();

    mockObjectPage([getMockTodoObject()]);
    const linkedTodosResponse = await taskResponse.linkedTodos.all();

    if (!isOk(linkedTodosResponse)) {
      expect.fail("linked todos response was not ok");
    }

    expect(linkedTodosResponse.value.length).toEqual(1);
  });

  it("supports round-trip of circular links with asynciter", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockFetchResponse(fetch, getMockTodoObject());
    const todoResponse = await os.get("1");

    if (!isOk(todoResponse)) {
      expect.fail("todo response was not ok");
    }

    mockObjectPage([getMockTaskObject()]);
    const taskResponse = await todoResponse.value.linkedTask.get();

    if (!isOk(taskResponse)) {
      expect.fail("task response was not ok");
    }

    mockObjectPage([getMockTodoObject()]);
    const linkedTodosResponse = await loadAll(
      taskResponse.value.linkedTodos.asyncIter(),
    );

    expect(linkedTodosResponse.length).toEqual(1);
  });

  it("loads a page", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockObjectPage([getMockTodoObject()]);
    const page = await os.fetchPageWithErrors({ pageSize: 1 });
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

  it("loads a page without result wrapper", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockObjectPage([getMockTodoObject()]);
    const page = await os.fetchPage({ pageSize: 1 });
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
    expect(page.data).toBeDefined;
  });

  it("loads a page without result wrapper, when downselecting properties", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockObjectPage([getMockTodoObject()]);
    const page = await os.select(["id"]).fetchPage({ pageSize: 1 });
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/loadObjects", {
        objectSet: {
          type: "base",
          objectType: "Todo",
        },
        select: ["id"],
        pageSize: 1,
      }),
    );
    expect(page.data).toBeDefined;
  });

  it("loads a page without result wrapper, when ordering", async () => {
    const os = createBaseObjectSet(client, "Todo");
    mockObjectPage([getMockTodoObject()]);
    const page = await os.orderBy(todo => todo.id.asc()).fetchPage({
      pageSize: 1,
    });
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/loadObjects", {
        objectSet: {
          type: "base",
          objectType: "Todo",
        },
        select: [],
        orderBy: { "fields": [{ "field": "id", "direction": "asc" }] },
        pageSize: 1,
      }),
    );
    expect(page.data).toBeDefined;
  });

  it("loads a page without result wrapper, when accessing multilinks", async () => {
    const os = createBaseObjectSet(client, "Task");
    mockObjectPage([getMockTaskObject()]);
    mockLinkPage([getMockTodoObject()]);
    const page = await os.fetchPage({ pageSize: 1 });
    const linkPage = await page.data[0].linkedTodos.fetchPage({ pageSize: 1 });
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/loadObjects", {
        objectSet: {
          type: "base",
          objectType: "Task",
        },
        select: [],
        pageSize: 1,
      }),
    );
    expect(page.data).toBeDefined;
    expect(linkPage.data).toBeDefined;
  });

  it("handles multiple clients correctly", async () => {
    const fetch1: MockedFunction<typeof globalThis.fetch> = vi.fn();
    const client1 = createClientContext(
      MockOntology,
      origin,
      () => "Token",
      USER_AGENT,
      fetch1,
    );

    const todo1 = convertWireToOsdkObject(
      client1,
      getMockTodoObject(),
    );

    const fetch2: MockedFunction<typeof globalThis.fetch> = vi.fn();
    const client2 = createClientContext(
      MockOntology,
      origin,
      () => "Token",
      USER_AGENT,
      fetch2,
    );

    const todo2 = convertWireToOsdkObject(
      client2,
      getMockTodoObject(),
    );

    // same prototype
    expect(Object.getPrototypeOf(todo1)).toBe(Object.getPrototypeOf(todo2));

    fetch1.mockResolvedValue({
      json: () => Promise.resolve({ data: [getMockTaskObject()] }),
      status: 200,
      ok: true,
    } as any);
    fetch2.mockResolvedValue({
      json: () => Promise.resolve({ data: [getMockTaskObject()] }),
      status: 200,
      ok: true,
    } as any);

    // different client/fetch
    await todo1.linkedTask.get();
    expect(fetch1).toHaveBeenCalledOnce();
    expect(fetch2).toHaveBeenCalledTimes(0);

    await todo2.linkedTask.get();
    expect(fetch1).toHaveBeenCalledOnce();
    expect(fetch2).toHaveBeenCalledOnce();

    await todo1.linkedTask.fetchOneWithErrors();
    expect(fetch1).toHaveBeenCalledTimes(2);
    expect(fetch2).toHaveBeenCalledTimes(1);

    await todo2.linkedTask.fetchOneWithErrors();
    expect(fetch1).toHaveBeenCalledTimes(2);
    expect(fetch2).toHaveBeenCalledTimes(2);

    await todo1.linkedTask.fetchOne();
    expect(fetch1).toHaveBeenCalledTimes(3);
    expect(fetch2).toHaveBeenCalledTimes(2);

    await todo2.linkedTask.fetchOne();
    expect(fetch1).toHaveBeenCalledTimes(3);
    expect(fetch2).toHaveBeenCalledTimes(3);
  });

  function mockObjectPage(
    objects: OntologyObjectV2[],
  ) {
    const response: LoadObjectSetResponseV2 = {
      data: objects,
    };

    fetch.mockResolvedValueOnce({
      json: () => {
        return Promise.resolve(response);
      },
      status: 200,
      ok: true,
    } as any);
  }

  function mockLinkPage(objects: OntologyObjectV2[]) {
    const response: ListLinkedObjectsResponseV2 = {
      data: objects,
    };
    fetch.mockResolvedValueOnce({
      json: () => {
        return Promise.resolve(response);
      },
      status: 200,
      ok: true,
    } as any);
  }

  function mockAggregateResponse(response: AggregateObjectsResponseV2) {
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

function createBaseObjectSet<T extends keyof typeof MockOntology.objects>(
  client: ClientContext<typeof MockOntology>,
  objectName: T,
) {
  const os = createBaseOsdkObjectSet<typeof MockOntology, T>(
    client,
    objectName,
  );

  return os;
}
