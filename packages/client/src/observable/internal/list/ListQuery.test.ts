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

import { Todo } from "@osdk/client.test.ontology";
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
  waitForCall,
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

function setupTodos(fauxFoundry: FauxFoundry, count: number) {
  const dataStore = fauxFoundry.getDefaultDataStore();
  dataStore.clear();

  for (let i = 0; i < count; i++) {
    dataStore.registerObject(Todo, {
      $apiName: "Todo",
      id: i,
      text: `Todo ${i}`,
    });
  }
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

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, [], { status: "loading" });

    testStage("Auto-fetch page 1 (20 items)");
    await waitForCall(listSub.next, 1);
    let payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(20);

    testStage("Auto-fetch page 2 (40 items)");
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(40);

    testStage("Auto-fetch page 3 (60 items) - threshold met");
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify final state meets threshold");
    expect(payload?.resolvedList.length).toBeGreaterThanOrEqual(50);
    expect(payload?.resolvedList.length).toBeLessThanOrEqual(80);
    expect(payload?.fetchMore).toBeDefined();

    testStage("Verify no additional auto-fetches occur");
    expectNoMoreCalls(listSub);
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

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, [], { status: "loading" });

    testStage("Auto-fetch page 1 (20 items)");
    await waitForCall(listSub.next, 1);
    let payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(20);

    testStage("Auto-fetch page 2 (40 items)");
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(40);

    testStage("Auto-fetch page 3 (60 items)");
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(60);

    testStage("Auto-fetch page 4 (80 items)");
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(80);

    testStage("Auto-fetch page 5 (100 items) - all data fetched");
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify all items fetched and no more pages");
    expect(payload?.resolvedList.length).toBeGreaterThanOrEqual(80);
    expect(payload?.hasMore).toBe(false);

    testStage("Verify no additional auto-fetches occur");
    expectNoMoreCalls(listSub);
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
    expectSingleListCallAndClear(listSub, [], { status: "loading" });

    testStage("First page loads (20 items) and stops");
    await waitForCall(listSub.next, 1);
    const payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify only first page fetched");
    expect(payload?.resolvedList.length).toBe(20);
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

    testStage("Initial loading state");
    await waitForCall(listSub.next, 1);
    expectSingleListCallAndClear(listSub, [], { status: "loading" });

    testStage("Auto-fetch page 1 (20 items)");
    await waitForCall(listSub.next, 1);
    let payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(20);

    testStage("Auto-fetch page 2 (40 items)");
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(40);

    testStage("Auto-fetch page 3 (60 items)");
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(60);

    testStage("Auto-fetch page 4 (80 items)");
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loading",
    });
    expect(payload?.resolvedList.length).toBe(80);

    testStage(
      "Auto-fetch page 5 (100 items) - all data fetched, stops despite high threshold",
    );
    await waitForCall(listSub.next, 1);
    payload = expectSingleListCallAndClear(listSub, expect.anything(), {
      status: "loaded",
    });

    testStage("Verify all available items fetched");
    expect(payload?.resolvedList.length).toBeGreaterThanOrEqual(80);
    expect(payload?.hasMore).toBe(false);

    testStage("Verify no additional auto-fetches occur");
    expectNoMoreCalls(listSub);
  });
});
