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

import type { Osdk } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, it } from "vitest";

import type { Client } from "../../Client.js";
import { createClient } from "../../createClient.js";
import { TestLogger } from "../../logger/TestLogger.js";
import type { ObservableClient } from "../ObservableClient.js";
import { ObservableClientImpl } from "./ObservableClientImpl.js";
import { Store } from "./Store.js";
import {
  createDefer,
  expectNoMoreCalls,
  expectSingleListCallAndClear,
  expectSingleObjectCallAndClear,
  mockListSubCallback,
  mockSingleSubCallback,
  updateList,
  updateObject,
  waitForCall,
} from "./testUtils.js";

// Defer utility to track subscriptions for cleanup
const defer = createDefer();

const logger = new TestLogger({});

function setupOntology(fauxFoundry: FauxFoundry) {
  ontologies.addEmployeeOntology(fauxFoundry.getDefaultOntology());
}

function setupSomeEmployees(fauxFoundry: FauxFoundry) {
  const dataStore = fauxFoundry.getDefaultDataStore();
  dataStore.registerObject(Employee, {
    employeeId: 1,
    fullName: "Employee One",
  });
  dataStore.registerObject(Employee, {
    employeeId: 2,
    fullName: "Employee Two",
  });
  dataStore.registerObject(Employee, {
    employeeId: 3,
    fullName: "Employee Three",
  });
}

describe("Store.applyChanges", () => {
  let client: Client;
  let cache: Store;
  let observableClient: ObservableClient;
  let employeesAsServerReturns: Osdk.Instance<Employee>[];

  beforeAll(async () => {
    const testSetup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
      { logger }
    );
    ({ client } = testSetup);

    setupOntology(testSetup.fauxFoundry);
    setupSomeEmployees(testSetup.fauxFoundry);

    employeesAsServerReturns = (
      await client(Employee).fetchPage({ $includeRid: true })
    ).data;

    return () => {
      testSetup.apiServer.close();
    };
  });

  beforeEach(() => {
    cache = new Store(client);
    observableClient = new ObservableClientImpl(cache);
    return () => {
      cache = undefined!;
      observableClient = undefined!;
    };
  });

  it("upserts update an observed object without a network fetch", async () => {
    const emp = employeesAsServerReturns[0];
    // pre-seed the truth layer with the "real" value
    updateObject(cache, emp);

    const subFn = mockSingleSubCallback();
    defer(
      cache.objects.observe(
        { apiName: Employee, pk: emp.$primaryKey, mode: "offline" },
        subFn
      )
    );
    expectSingleObjectCallAndClear(subFn, emp, "loaded");

    const renamed = emp.$clone({ fullName: "Renamed via applyChanges" });
    await observableClient.applyChanges({ upserts: [renamed] });

    // Object subscribers are notified synchronously during the batch.
    expectSingleObjectCallAndClear(subFn, renamed, "loaded");
  });

  it("upserts insert a matching object into an observed list without a network fetch", async () => {
    const emp = employeesAsServerReturns[0];
    const where = { $primaryKey: { $in: [emp.$primaryKey] } };

    // seed an empty list query for this where clause
    updateList(cache, { type: Employee, where, orderBy: {} }, []);

    const listSubFn = mockListSubCallback();
    defer(
      cache.lists.observe(
        { type: Employee, where, orderBy: {}, mode: "offline" },
        listSubFn
      )
    );

    await waitForCall(listSubFn, 1);
    expectSingleListCallAndClear(listSubFn, []);

    // emp is not yet in the object cache, so it is a strict-match add.
    await observableClient.applyChanges({ upserts: [emp] });

    await waitForCall(listSubFn, 1);
    expectSingleListCallAndClear(listSubFn, [emp], {
      status: "loaded",
      isOptimistic: false,
    });
  });

  it("deletes remove an object from the cache and observed lists", async () => {
    const emp = employeesAsServerReturns[0];
    updateList(cache, { type: Employee, where: {}, orderBy: {} }, [emp]);

    const objSubFn = mockSingleSubCallback();
    defer(
      cache.objects.observe(
        { apiName: Employee, pk: emp.$primaryKey, mode: "offline" },
        objSubFn
      )
    );
    expectSingleObjectCallAndClear(objSubFn, emp);

    const listSubFn = mockListSubCallback();
    defer(
      cache.lists.observe(
        { type: Employee, where: {}, orderBy: {}, mode: "offline" },
        listSubFn
      )
    );
    await waitForCall(listSubFn, 1);
    expectSingleListCallAndClear(listSubFn, [emp], { status: "loaded" });

    await observableClient.applyChanges({
      deletes: [{ objectType: "Employee", primaryKey: emp.$primaryKey }],
    });

    // The object is tombstoned (observed value becomes undefined)...
    expectSingleObjectCallAndClear(objSubFn, undefined);

    // ...and drops out of the list.
    await waitForCall(listSubFn, 1);
    expectSingleListCallAndClear(listSubFn, []);
  });

  it("applies upserts and deletes together in a single batch", async () => {
    const kept = employeesAsServerReturns[0];
    const removed = employeesAsServerReturns[1];
    updateList(cache, { type: Employee, where: {}, orderBy: {} }, [
      kept,
      removed,
    ]);

    const listSubFn = mockListSubCallback();
    defer(
      cache.lists.observe(
        { type: Employee, where: {}, orderBy: {}, mode: "offline" },
        listSubFn
      )
    );
    await waitForCall(listSubFn, 1);
    expectSingleListCallAndClear(listSubFn, [kept, removed], {
      status: "loaded",
    });

    const renamedKept = kept.$clone({ fullName: "Kept + renamed" });
    await observableClient.applyChanges({
      upserts: [renamedKept],
      deletes: [{ objectType: "Employee", primaryKey: removed.$primaryKey }],
    });

    // A single revalidation pass reflects both the update and the deletion.
    await waitForCall(listSubFn, 1);
    expectSingleListCallAndClear(listSubFn, [renamedKept]);
  });

  it("is a no-op for empty changes", async () => {
    const emp = employeesAsServerReturns[0];
    updateObject(cache, emp);

    const subFn = mockSingleSubCallback();
    defer(
      cache.objects.observe(
        { apiName: Employee, pk: emp.$primaryKey, mode: "offline" },
        subFn
      )
    );
    expectSingleObjectCallAndClear(subFn, emp, "loaded");

    await observableClient.applyChanges({});
    await observableClient.applyChanges({ upserts: [], deletes: [] });

    expectNoMoreCalls(subFn);
  });
});
