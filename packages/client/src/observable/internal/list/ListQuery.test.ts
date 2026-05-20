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

import {
  Employee,
  FooInterface,
  Office,
  Todo,
} from "@osdk/client.test.ontology";
import type { SetupServer } from "@osdk/shared.test";
import {
  FauxFoundry,
  ontologies,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import chalk from "chalk";
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import { TestLogger } from "../../../logger/TestLogger.js";
import { Store } from "../Store.js";
import {
  createDefer,
  expectNoMoreCalls,
  expectSingleListCallAndClear,
  mockListSubCallback,
  updateList,
  waitForCall,
  waitForPayload,
} from "../testUtils.js";

const logger = new TestLogger({}, { level: "debug" });
const defer = createDefer();

function testStage(s: string) {
  console.log(chalk.bgYellow(`Test Stage: ${s}`));
}

function setupOntology(fauxFoundry: FauxFoundry) {
  const fauxOntology = fauxFoundry.getDefaultOntology();
  ontologies.addEmployeeOntology(fauxOntology);
  fauxFoundry.getDefaultOntology().registerObjectType(
    stubData.todoWithLinkTypes,
  );
}

function setupTodos(
  fauxFoundry: FauxFoundry,
  count: number,
  options?: { withRids?: boolean; textFn?: (i: number) => string },
): string[] {
  const dataStore = fauxFoundry.getDefaultDataStore();
  dataStore.clear();
  const rids: string[] = [];

  for (let i = 0; i < count; i++) {
    const rid = options?.withRids
      ? `ri.phonograph2-objects.main.object.todo-${i}`
      : undefined;
    if (rid) rids.push(rid);
    dataStore.registerObject(Todo, {
      $apiName: "Todo",
      $rid: rid,
      id: i,
      text: options?.textFn?.(i) ?? `Todo ${i}`,
    });
  }
  return rids;
}

describe("ListQuery autoFetchMore tests", () => {
  let client: Client;
  let apiServer: SetupServer;
  let fauxFoundry: FauxFoundry;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/", undefined, { logger }),
      createClient,
      { logger },
    );
    ({ client, apiServer, fauxFoundry } = testSetup);

    setupOntology(testSetup.fauxFoundry);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    apiServer.resetHandlers();
    store = new Store(client);
  });

  it("autoFetchMore fetches multiple pages until threshold", async () => {
    setupTodos(fauxFoundry, 100);

    testStage("Setup observation with autoFetchMore: 50, pageSize: 20");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: {},
          pageSize: 20,
          autoFetchMore: 50,
        },
        listSub,
      ),
    );

    testStage("Wait for threshold to be met");
    const payload = await waitForPayload(
      listSub,
      (p) =>
        p?.status === "loaded"
        && (p?.resolvedList?.length ?? 0) >= 50,
    );

    testStage("Verify final state meets threshold");
    expect(payload?.resolvedList?.length).toBeGreaterThanOrEqual(50);
    expect(payload?.resolvedList?.length).toBeLessThanOrEqual(80);
    expect(payload?.fetchMore).toBeDefined();
  });

  it("autoFetchMore: true fetches all available pages", async () => {
    setupTodos(fauxFoundry, 100);

    testStage("Setup observation with autoFetchMore: true, pageSize: 20");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: {},
          pageSize: 20,
          autoFetchMore: true,
        },
        listSub,
      ),
    );

    testStage("Wait for all items to load");
    const payload = await waitForPayload(
      listSub,
      (p) => p?.status === "loaded" && !(p?.hasMore),
    );

    testStage("Verify all items fetched");
    expect(payload?.resolvedList?.length).toBeGreaterThanOrEqual(80);
    expect(payload?.hasMore).toBe(false);
  });

  it("autoFetchMore: undefined fetches only first page", async () => {
    setupTodos(fauxFoundry, 100);

    testStage("Setup observation with autoFetchMore: undefined, pageSize: 20");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: {},
          pageSize: 20,
        },
        listSub,
      ),
    );

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    testStage("First page loads (20 items) and stops");
    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify only first page fetched");
    expect(payload?.resolvedList?.length).toBe(20);
    expect(payload?.fetchMore).toBeDefined();
    expect(payload?.hasMore).toBe(true);

    testStage("Verify no additional auto-fetches occur");
    expectNoMoreCalls(listSub);
  });

  it("autoFetchMore stops at last page when fewer items than threshold", async () => {
    setupTodos(fauxFoundry, 100);

    testStage(
      "Setup observation with autoFetchMore: 500 (high threshold), pageSize: 20",
    );
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: {},
          pageSize: 20,
          autoFetchMore: 500,
        },
        listSub,
      ),
    );

    testStage("Wait for all data despite high threshold");
    const payload = await waitForPayload(
      listSub,
      (p) => p?.status === "loaded" && !(p?.hasMore),
    );

    testStage("Verify all available items fetched");
    expect(payload?.resolvedList?.length).toBeGreaterThanOrEqual(80);
    expect(payload?.hasMore).toBe(false);
  });

  it("orderBy fetches data correctly with sorting", async () => {
    setupTodos(fauxFoundry, 50);

    testStage("Setup observation with orderBy descending by id");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: { id: "desc" },
          pageSize: 20,
        },
        listSub,
      ),
    );

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    testStage("First page loads (20 items)");
    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify data loaded and sorted descending");
    expect(payload?.resolvedList?.length).toBe(20);
    expect(payload?.resolvedList).toBeTruthy();
    // Verify items are sorted descending by checking if first item has higher id than last
    if (payload?.resolvedList && payload.resolvedList.length > 1) {
      const firstItem = payload.resolvedList[0];
      const lastItem = payload.resolvedList[payload.resolvedList.length - 1];
      expect(firstItem.id).toBeGreaterThanOrEqual(lastItem.id as number);
    }

    testStage("Verify no additional unexpected calls");
    expectNoMoreCalls(listSub);
  });

  it("supports rids with where, orderBy, and pagination", async () => {
    const rids = setupTodos(fauxFoundry, 6, {
      withRids: true,
      textFn: (i) => (i % 2 === 0 ? "even" : "odd"),
    });

    testStage("Setup observation with rids + where + orderBy + pageSize");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          rids,
          where: { text: { $eq: "even" } },
          orderBy: { id: "desc" },
          pageSize: 2,
        },
        listSub,
      ),
    );

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    testStage("First page: 2 even items sorted desc (ids 4, 2)");
    await waitForCall(listSub.next, 1);
    let payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });
    expect(payload?.resolvedList?.length).toBe(2);
    expect(payload?.resolvedList?.[0].id).toBe(4);
    expect(payload?.resolvedList?.[1].id).toBe(2);
    expect(payload?.hasMore).toBe(true);

    testStage("fetchMore() to get last even item (id 0)");
    void payload!.fetchMore();
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });
    expect(payload?.resolvedList?.length).toBe(3);
    expect(payload?.resolvedList?.[2].id).toBe(0);
    expect(payload?.hasMore).toBe(false);

    testStage("Verify no additional unexpected calls");
    expectNoMoreCalls(listSub);
  });

  it("handles empty RID list", async () => {
    setupTodos(fauxFoundry, 5);

    testStage("Setup observation with empty rids array");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          rids: [],
          pageSize: 10,
        },
        listSub,
      ),
    );

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    testStage("Empty result with hasMore: false");
    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });
    expect(payload?.resolvedList?.length).toBe(0);
    expect(payload?.hasMore).toBe(false);

    testStage("Verify no additional unexpected calls");
    expectNoMoreCalls(listSub);
  });
});

describe("ListQuery sort stability across pages", () => {
  let client: Client;
  let apiServer: SetupServer;
  let fauxFoundry: FauxFoundry;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/", undefined, { logger }),
      createClient,
      { logger },
    );
    ({ client, apiServer, fauxFoundry } = testSetup);

    setupOntology(testSetup.fauxFoundry);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    apiServer.resetHandlers();
    store = new Store(client);
  });

  it("fetchMore preserves server order for items with equal sort keys", async () => {
    // Regression test: fetchMore with equal sort keys must not shuffle items
    const dataStore = fauxFoundry.getDefaultDataStore();
    dataStore.clear();

    for (let i = 0; i < 10; i++) {
      dataStore.registerObject(Todo, {
        $apiName: "Todo",
        id: i,
        text: "same",
      });
    }

    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: { text: "asc" },
          pageSize: 5,
        },
        listSub,
      ),
    );

    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    await waitForCall(listSub.next, 1);
    let payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    expect(payload?.resolvedList?.length).toBe(5);
    expect(payload!.resolvedList!.map((t) => t.id)).toEqual([0, 1, 2, 3, 4]);

    void payload!.fetchMore();
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    // serverOrdered skips client re-sort, preserving page order
    expect(payload?.resolvedList?.length).toBe(10);
    expect(payload!.resolvedList!.map((t) => t.id)).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });

  it("fetchMore preserves page boundaries when pages have overlapping sort keys", async () => {
    // Overlapping sort keys across pages must not interleave after fetchMore
    const dataStore = fauxFoundry.getDefaultDataStore();
    dataStore.clear();

    // ids: 0("a"), 1("b"), 2("a"), 3("b"), 4("a"), 5("b"), 6("a"), 7("b")
    // Server sorts by text asc: [0,2,4,6,1,3,5,7]
    for (let i = 0; i < 8; i++) {
      dataStore.registerObject(Todo, {
        $apiName: "Todo",
        id: i,
        text: i % 2 === 0 ? "a" : "b",
      });
    }

    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: { text: "asc" },
          pageSize: 4,
        },
        listSub,
      ),
    );

    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    await waitForCall(listSub.next, 1);
    let payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    expect(payload?.resolvedList?.length).toBe(4);
    expect(payload!.resolvedList!.map((t) => t.id)).toEqual([0, 2, 4, 6]);

    void payload!.fetchMore();
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    // Page 1 items stay before page 2 items with no interleaving
    expect(payload?.resolvedList?.length).toBe(8);
    expect(payload!.resolvedList!.map((t) => t.id)).toEqual([
      0,
      2,
      4,
      6,
      1,
      3,
      5,
      7,
    ]);
  });

  it("clientOrdered sorts unsorted objects by orderBy with PK tiebreaker", async () => {
    // Exercise the clientOrdered sort path directly via updateList helper
    const dataStore = fauxFoundry.getDefaultDataStore();
    dataStore.clear();

    // Create 4 todos: two share text "b" to test PK tiebreaker
    dataStore.registerObject(Todo, { $apiName: "Todo", id: 20, text: "c" });
    dataStore.registerObject(Todo, { $apiName: "Todo", id: 10, text: "a" });
    dataStore.registerObject(Todo, { $apiName: "Todo", id: 31, text: "b" });
    dataStore.registerObject(Todo, { $apiName: "Todo", id: 30, text: "b" });

    // Fetch real Osdk.Instance objects
    const [objC, objA, objB2, objB1] = await Promise.all([
      client(Todo).fetchOne(20),
      client(Todo).fetchOne(10),
      client(Todo).fetchOne(31),
      client(Todo).fetchOne(30),
    ]);

    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: { text: "asc" },
          pageSize: 10,
        },
        listSub,
      ),
    );

    // Wait for server load to complete
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    // Push objects in unsorted order through clientOrdered path
    updateList(store, { type: Todo, where: {}, orderBy: { text: "asc" } }, [
      objC,
      objA,
      objB2,
      objB1,
    ]);

    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    // clientOrdered sorts by text asc, then PK tiebreaker for equal keys
    const ids = payload!.resolvedList!.map((t) => t.id);
    expect(ids).toEqual([10, 30, 31, 20]);
  });
});

describe("ListQuery pivotTo tests", () => {
  let client: Client;
  let apiServer: SetupServer;
  let fauxFoundry: FauxFoundry;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/", undefined, { logger }),
      createClient,
      { logger },
    );
    ({ client, apiServer, fauxFoundry } = testSetup);

    setupOntology(testSetup.fauxFoundry);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    apiServer.resetHandlers();
    store = new Store(client);
  });

  it("pivotTo with where clause filters source objects before pivot", async () => {
    fauxFoundry.getDefaultDataStore().clear();

    const officeA = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-a",
      name: "Office A",
    });
    const officeB = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-b",
      name: "Office B",
    });

    const emp1 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 1,
      fullName: "Employee 1",
    });
    const emp2 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 2,
      fullName: "Employee 2",
    });
    const emp3 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 3,
      fullName: "Employee 3",
    });

    fauxFoundry.getDefaultDataStore().registerLink(
      emp1,
      "officeLink",
      officeA,
      "occupants",
    );
    fauxFoundry.getDefaultDataStore().registerLink(
      emp2,
      "officeLink",
      officeA,
      "occupants",
    );
    fauxFoundry.getDefaultDataStore().registerLink(
      emp3,
      "officeLink",
      officeB,
      "occupants",
    );

    testStage("Observe with pivotTo and where clause filtering on employeeId");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe<typeof Employee>(
        {
          type: Employee,
          where: { employeeId: 1 },
          orderBy: {},
          pivotTo: "officeLink",
        },
        listSub,
      ),
    );

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    testStage("Data loads");
    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify only office linked to employee 1 is returned");
    expect(payload?.resolvedList?.length).toBe(1);
    expect(payload?.resolvedList?.[0]).toMatchObject({
      officeId: "office-a",
      name: "Office A",
    });

    testStage("Verify no additional calls");
    expectNoMoreCalls(listSub);
  });

  it("rids + pivotTo returns only linked objects from specified source RIDs", async () => {
    fauxFoundry.getDefaultDataStore().clear();

    const officeA = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-a",
      name: "Office A",
    });
    const officeB = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-b",
      name: "Office B",
    });

    const emp1 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      $rid: "ri.phonograph2-objects.main.object.emp-1",
      employeeId: 1,
      fullName: "Employee 1",
    });
    const emp2 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      $rid: "ri.phonograph2-objects.main.object.emp-2",
      employeeId: 2,
      fullName: "Employee 2",
    });
    const emp3 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      $rid: "ri.phonograph2-objects.main.object.emp-3",
      employeeId: 3,
      fullName: "Employee 3",
    });

    fauxFoundry.getDefaultDataStore().registerLink(
      emp1,
      "officeLink",
      officeA,
      "occupants",
    );
    fauxFoundry.getDefaultDataStore().registerLink(
      emp2,
      "officeLink",
      officeA,
      "occupants",
    );
    fauxFoundry.getDefaultDataStore().registerLink(
      emp3,
      "officeLink",
      officeB,
      "occupants",
    );

    testStage("Observe with rids for emp1 and emp3, pivotTo officeLink");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe<typeof Employee>(
        {
          type: Employee,
          rids: [
            "ri.phonograph2-objects.main.object.emp-1",
            "ri.phonograph2-objects.main.object.emp-3",
          ],
          orderBy: {},
          pivotTo: "officeLink",
        },
        listSub,
      ),
    );

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    testStage("Data loads");
    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify offices linked to emp1 and emp3 are returned");
    expect(payload?.resolvedList?.length).toBe(2);
    expect(payload?.resolvedList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ officeId: "office-a" }),
        expect.objectContaining({ officeId: "office-b" }),
      ]),
    );

    testStage("Verify no additional calls");
    expectNoMoreCalls(listSub);
  });

  it("rids + pivotTo + where filters source objects before pivoting", async () => {
    fauxFoundry.getDefaultDataStore().clear();

    const officeA = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-a",
      name: "Office A",
    });
    const officeB = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-b",
      name: "Office B",
    });

    const emp1 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      $rid: "ri.phonograph2-objects.main.object.emp-1",
      employeeId: 1,
      fullName: "Employee 1",
    });
    const emp2 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      $rid: "ri.phonograph2-objects.main.object.emp-2",
      employeeId: 2,
      fullName: "Employee 2",
    });

    fauxFoundry.getDefaultDataStore().registerLink(
      emp1,
      "officeLink",
      officeA,
      "occupants",
    );
    fauxFoundry.getDefaultDataStore().registerLink(
      emp2,
      "officeLink",
      officeB,
      "occupants",
    );

    testStage(
      "Observe with rids for both employees, where filters to employeeId 1",
    );
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe<typeof Employee>(
        {
          type: Employee,
          rids: [
            "ri.phonograph2-objects.main.object.emp-1",
            "ri.phonograph2-objects.main.object.emp-2",
          ],
          where: { employeeId: 1 },
          orderBy: {},
          pivotTo: "officeLink",
        },
        listSub,
      ),
    );

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    testStage("Data loads");
    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify only office linked to employee 1 is returned");
    expect(payload?.resolvedList?.length).toBe(1);
    expect(payload?.resolvedList?.[0]).toMatchObject({
      officeId: "office-a",
      name: "Office A",
    });

    testStage("Verify no additional calls");
    expectNoMoreCalls(listSub);
  });

  it("empty rids + pivotTo returns no results", async () => {
    fauxFoundry.getDefaultDataStore().clear();

    const officeA = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-a",
      name: "Office A",
    });

    const emp1 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      $rid: "ri.phonograph2-objects.main.object.emp-1",
      employeeId: 1,
      fullName: "Employee 1",
    });

    fauxFoundry.getDefaultDataStore().registerLink(
      emp1,
      "officeLink",
      officeA,
      "occupants",
    );

    testStage("Observe with empty rids + pivotTo");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe<typeof Employee>(
        {
          type: Employee,
          rids: [],
          orderBy: {},
          pivotTo: "officeLink",
        },
        listSub,
      ),
    );

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    testStage("Data loads");
    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify empty result");
    expect(payload?.resolvedList?.length).toBe(0);

    testStage("Verify no additional calls");
    expectNoMoreCalls(listSub);
  });

  it("pivotTo from interface source with where clause constructs correct query", async () => {
    fauxFoundry.getDefaultDataStore().clear();

    fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 1,
      fullName: "Employee 1",
    });
    fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 2,
      fullName: "Employee 2",
    });

    testStage("Observe with interface type and pivotTo");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: FooInterface,
          where: {},
          orderBy: {},
          pivotTo: "toBar",
        },
        listSub,
      ),
    );

    testStage("Initial loading state verifies query construction succeeded");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    testStage("Verify no additional calls");
    expectNoMoreCalls(listSub);
  });

  it("pivotTo from object source uses correct sourceTypeKind", async () => {
    fauxFoundry.getDefaultDataStore().clear();

    const office = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-1",
      name: "Test Office",
    });
    const emp = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 1,
      fullName: "Employee 1",
    });
    fauxFoundry.getDefaultDataStore().registerLink(
      emp,
      "officeLink",
      office,
      "occupants",
    );

    testStage("Observe object type with pivotTo");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe<typeof Employee>(
        {
          type: Employee,
          where: {},
          orderBy: {},
          pivotTo: "officeLink",
        },
        listSub,
      ),
    );

    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify data loaded successfully");
    expect(payload?.resolvedList?.length).toBe(1);

    expectNoMoreCalls(listSub);
  });

  it("pivotTo with multiple source objects returns all linked targets", async () => {
    fauxFoundry.getDefaultDataStore().clear();

    const officeA = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-a",
      name: "Office A",
    });
    const officeB = fauxFoundry.getDefaultDataStore().registerObject(Office, {
      $apiName: "Office",
      officeId: "office-b",
      name: "Office B",
    });

    const emp1 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 1,
      fullName: "Employee 1",
    });
    const emp2 = fauxFoundry.getDefaultDataStore().registerObject(Employee, {
      $apiName: "Employee",
      employeeId: 2,
      fullName: "Employee 2",
    });

    fauxFoundry.getDefaultDataStore().registerLink(
      emp1,
      "officeLink",
      officeA,
      "occupants",
    );
    fauxFoundry.getDefaultDataStore().registerLink(
      emp2,
      "officeLink",
      officeB,
      "occupants",
    );

    testStage("Observe with pivotTo and no where clause");
    const listSub = mockListSubCallback();
    defer(
      store.lists.observe<typeof Employee>(
        {
          type: Employee,
          where: {},
          orderBy: {},
          pivotTo: "officeLink",
        },
        listSub,
      ),
    );

    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, undefined, { status: "loading" });

    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify both linked offices are returned");
    expect(payload?.resolvedList?.length).toBe(2);
    const officeIds = payload?.resolvedList?.map((o) => o.$primaryKey).sort();
    expect(officeIds).toEqual(["office-a", "office-b"]);

    expectNoMoreCalls(listSub);
  });
});

describe("ListQuery shared query autoFetchMore tests", () => {
  let client: Client;
  let apiServer: SetupServer;
  let fauxFoundry: FauxFoundry;
  let store: Store;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/", undefined, { logger }),
      createClient,
      { logger },
    );
    ({ client, apiServer, fauxFoundry } = testSetup);

    setupOntology(testSetup.fauxFoundry);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    apiServer.resetHandlers();
    store = new Store(client);
  });

  it("shared query: plain subscriber first, autoFetchMore second", async () => {
    setupTodos(fauxFoundry, 100);

    testStage("Subscribe A with no autoFetchMore");
    const subA = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: {},
          pageSize: 20,
        },
        subA,
      ),
    );

    testStage("A gets initial loading");
    await waitForCall(subA.next, 1);
    expectSingleListCallAndClear(subA, undefined, { status: "loading" });

    testStage("A gets 20 items, loaded");
    await waitForCall(subA.next, 1);
    const payloadA = expectSingleListCallAndClear(subA, expect.anything(), {
      status: "loaded",
    });
    expect(payloadA?.resolvedList?.length).toBe(20);
    expect(payloadA?.hasMore).toBe(true);

    testStage("Subscribe B with autoFetchMore: true (same query)");
    const subB = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: {},
          pageSize: 20,
          autoFetchMore: true,
        },
        subB,
      ),
    );

    testStage("B should eventually get all 100 items");
    const lastBPayload = await waitForPayload(
      subB,
      (p) => p?.status === "loaded" && p?.resolvedList?.length === 100,
    );

    testStage("Verify B got all items");
    expect(lastBPayload?.resolvedList?.length).toBe(100);
    expect(lastBPayload?.hasMore).toBe(false);

    testStage("Verify A still shows 20 items (unaffected)");
    const aCalls = subA.next.mock.calls;
    if (aCalls.length > 0) {
      const lastAPayload = aCalls[aCalls.length - 1][0];
      expect(lastAPayload?.resolvedList?.length).toBe(20);
    }
  });

  it("shared query: numeric autoFetchMore second subscriber", async () => {
    setupTodos(fauxFoundry, 100);

    testStage("Subscribe A with no autoFetchMore");
    const subA = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: {},
          pageSize: 20,
        },
        subA,
      ),
    );

    testStage("Wait for A to finish loading");
    await waitForCall(subA.next, 1);
    expectSingleListCallAndClear(subA, undefined, { status: "loading" });
    await waitForCall(subA.next, 1);
    expectSingleListCallAndClear(subA, expect.anything(), {
      status: "loaded",
    });

    testStage("Subscribe B with autoFetchMore: 60");
    const subB = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: {},
          pageSize: 20,
          autoFetchMore: 60,
        },
        subB,
      ),
    );

    testStage("B should get at least 60 items");
    const lastBPayload = await waitForPayload(
      subB,
      (p) => p?.status === "loaded" && (p?.resolvedList?.length ?? 0) >= 60,
    );

    testStage("Verify B met threshold");
    expect(lastBPayload?.resolvedList?.length).toBeGreaterThanOrEqual(60);
  });

  it("status stability during view-driven auto-fetch", async () => {
    setupTodos(fauxFoundry, 60);

    testStage("Subscribe with autoFetchMore: true");
    const sub = mockListSubCallback();
    defer(
      store.lists.observe(
        {
          type: Todo,
          where: {},
          orderBy: {},
          pageSize: 20,
          autoFetchMore: true,
        },
        sub,
      ),
    );

    testStage("Wait for all data to load");
    const lastPayload = await waitForPayload(
      sub,
      (p) => p?.status === "loaded" && p?.resolvedList?.length === 60,
    );

    testStage("Verify no status oscillation");
    const allEmissions = sub.next.mock.calls.map(
      (call) => ({
        count: call[0]?.resolvedList?.length ?? 0,
        status: call[0]?.status,
      }),
    );

    let sawLoadedWithData = false;
    for (const emission of allEmissions) {
      if (emission.status === "loaded" && emission.count > 0) {
        sawLoadedWithData = true;
      }
      if (sawLoadedWithData && emission.status === "loading") {
        expect(emission.count).toBeGreaterThan(0);
      }
    }

    testStage("Verify final state");
    expect(lastPayload?.resolvedList?.length).toBe(60);
    expect(lastPayload?.hasMore).toBe(false);
    expect(lastPayload?.status).toBe("loaded");
  });
});
