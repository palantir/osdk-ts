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
import type { ClientContext } from "../../ontology-runtime/ontologyProvider/calls/ClientContext";
import { MockOntology } from "../../util/test";
import { createOsdkObjectSet } from "./OsdkObjectSet";

describe("OsdkObjectSet", () => {
  let fetch: MockedFunction<typeof globalThis.fetch>;
  let context: ClientContext;
  beforeEach(() => {
    fetch = vi.fn();
    context = {
      client: createThinClient(
        MockOntology,
        "https://mock.com",
        () => "Token",
        fetch,
      ),
      ontology: MockOntology,
      createObject: vi.fn(),
    };
  });

  it("creates a search on an ObjectSet", () => {
    const os = createBaseTodoObjectSet(context);
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
    const os = createBaseTodoObjectSet(context);
    const searchAroundObjectSet = os.searchAroundLinkedTodos();

    expect(searchAroundObjectSet.definition).toEqual({
      type: "searchAround",
      objectSet: baseObjectSet,
      link: "linkedTodos",
    });
  });

  it("creates the count aggregation", async () => {
    const os = createBaseTodoObjectSet(context);
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
    const os = createBaseTodoObjectSet(context);
    mockAggregateResponse({ data: [] });
    await os.min(s => s.id).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "min", name: "min", field: "id" }],
      }),
    );
  });

  it("creates the max aggregation", async () => {
    const os = createBaseTodoObjectSet(context);
    mockAggregateResponse({ data: [] });
    await os.max(s => s.id).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "max", name: "max", field: "id" }],
      }),
    );
  });

  it("creates the sum aggregation", async () => {
    const os = createBaseTodoObjectSet(context);
    mockAggregateResponse({ data: [] });
    await os.sum(s => s.id).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "sum", name: "sum", field: "id" }],
      }),
    );
  });

  it("creates the avg aggregation", async () => {
    const os = createBaseTodoObjectSet(context);
    mockAggregateResponse({ data: [] });
    await os.avg(s => s.id).compute();
    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      ...expectedJestResponse("Ontology/objectSets/aggregate", {
        objectSet: { type: "base", objectType: "Todo" },
        groupBy: [],
        aggregation: [{ type: "avg", name: "avg", field: "id" }],
      }),
    );
  });

  it("loads a page", async () => {
    const os = createBaseTodoObjectSet(context);
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
      `https://mock.com/api/v2/ontologies/${endpoint}`,
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

function createBaseTodoObjectSet(context: ClientContext) {
  const os = createOsdkObjectSet<typeof MockOntology, "Todo">(
    context,
    "Todo",
    baseObjectSet,
    MockOntology,
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
