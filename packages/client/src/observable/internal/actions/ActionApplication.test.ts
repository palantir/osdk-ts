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

import { addOne, editTodo, Employee, Todo } from "@osdk/client.test.ontology";
import {
  FauxFoundry,
  ontologies,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import type { MockedObject } from "vitest";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { FunctionPayload } from "../../FunctionPayload.js";
import type { Observer } from "../../ObservableClient/common.js";
import { Store } from "../Store.js";

function mockFunctionSubCallback(): MockedObject<
  Observer<FunctionPayload | undefined>
> {
  return {
    next: vi.fn(),
    error: vi.fn(),
    complete: vi.fn(),
  };
}

async function waitForCall(
  mock: MockedObject<Observer<FunctionPayload | undefined>>,
  count = 1,
) {
  await vi.waitFor(() => {
    expect(mock.next).toHaveBeenCalledTimes(count);
  });
}

describe("ActionApplication invalidation", () => {
  let client: Client;
  let store: Store;
  let fauxFoundry: FauxFoundry;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    ({ client, fauxFoundry } = testSetup);

    const fauxOntology = fauxFoundry.getDefaultOntology();
    ontologies.addEmployeeOntology(fauxOntology);
    fauxOntology.registerObjectType(stubData.todoWithLinkTypes);
    fauxOntology.registerActionType(
      stubData.editTodo.actionTypeV2,
      (b, payload) => {
        const { id, ...other } = payload.parameters;
        b.modifyObject<typeof Todo>(Todo.apiName, id, { ...other });
      },
    );
    stubData.registerLazyQueries(fauxOntology);

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    fauxFoundry.getDefaultDataStore().clear();
    fauxFoundry.getDefaultDataStore().registerObject(Todo, {
      $apiName: "Todo",
      id: 0,
      text: "original",
    });
    fauxFoundry.getDefaultDataStore().registerObject(Todo, {
      $apiName: "Todo",
      id: 1,
      text: "second",
    });
    store = new Store(client);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("revalidates a function with dependsOn after an action edits that type", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Todo.apiName],
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 3 }),
    );

    subFn.next.mockClear();

    await store.applyAction(editTodo, { id: 0, text: "edited" });

    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenCalled();
    });

    subscription.unsubscribe();
  });

  it("revalidates a function with dependsOnObjects after an action edits that PK", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOnObjects: [{ $apiName: Todo.apiName, $primaryKey: 0 }],
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);
    expect(subFn.next).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: "loaded", result: 3 }),
    );

    subFn.next.mockClear();

    await store.applyAction(editTodo, { id: 0, text: "edited again" });

    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenCalled();
    });

    subscription.unsubscribe();
  });

  it("does not revalidate a function whose dependsOn is on an unrelated type", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Employee.apiName],
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);
    subFn.next.mockClear();

    await store.applyAction(editTodo, { id: 0, text: "should-not-fire" });

    // applyAction awaits all per-PK and per-type fan-out; the unrelated sub
    // triggers no revalidate, so no notification can be in flight.
    expect(subFn.next).not.toHaveBeenCalled();

    subscription.unsubscribe();
  });

  it("revalidates a function with dependsOn after a batch action edits that type", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Todo.apiName],
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);
    subFn.next.mockClear();

    await store.applyAction(editTodo, [
      { id: 0, text: "batch-first" },
      { id: 1, text: "batch-second" },
    ]);

    await vi.waitFor(() => {
      expect(subFn.next).toHaveBeenCalled();
    });

    subscription.unsubscribe();
  });

  it("does not fan out per-type invalidation when an action throws", async () => {
    const subFn = mockFunctionSubCallback();

    const subscription = store.functions.observe(
      {
        queryDef: addOne,
        params: { n: 2 },
        dependsOn: [Todo.apiName],
        dedupeInterval: 0,
      },
      subFn,
    );

    await waitForCall(subFn, 2);
    subFn.next.mockClear();

    // PK 999 does not exist; FauxDataStoreBatch.modifyObject throws via
    // getObjectOrThrow, the server returns an error, and applyAction rejects.
    await expect(
      store.applyAction(editTodo, { id: 999, text: "fail" }),
    ).rejects.toBeDefined();

    // No actionResults were assigned, so #invalidatePerTypeFunctionEdits is
    // never reached. The dependsOn sub stays silent — no fan-out occurred.
    expect(subFn.next).not.toHaveBeenCalled();

    subscription.unsubscribe();
  });
});
