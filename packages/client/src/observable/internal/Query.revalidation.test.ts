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

import { Employee } from "@osdk/client.test.ontology";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import pDefer from "p-defer";
import { describe, expect, it, vi } from "vitest";

import { createClient } from "../../createClient.js";
import { TestLogger } from "../../logger/TestLogger.js";
import {
  createObservableClient,
  type ObserveObjectCallbackArgs,
} from "../ObservableClient.js";
import type { ObserveLinks } from "../ObservableClient/ObserveLink.js";

describe("invalidation during an object request", () => {
  it.each([
    ["completes", false],
    ["fails", true],
  ])(
    "loads fresh data after the pending request %s",
    async (_name, failFirst) => {
      const responseReady = pDefer<void>();
      const releaseResponse = pDefer<void>();
      let objectRequests = 0;
      const fetchWithHeldResponse: typeof fetch = async (input, init) => {
        const response = await fetch(input, init);
        if (String(input).includes("objectSets/loadObjects")) {
          objectRequests++;
          if (objectRequests === 1) {
            responseReady.resolve();
            await releaseResponse.promise;
            return failFirst ? new Response(null, { status: 500 }) : response;
          }
        }
        return response;
      };
      const setup = startNodeApiServer(
        new FauxFoundry("https://stack.palantir.com/"),
        createClient,
        { logger: new TestLogger({}, { level: "silent" }) },
        fetchWithHeldResponse,
      );
      ontologies.addEmployeeOntology(setup.fauxFoundry.getDefaultOntology());
      const dataStore = setup.fauxFoundry.getDefaultDataStore();
      const employee = dataStore.registerObject(Employee, {
        employeeId: 1,
        fullName: "Before the change",
      });
      const observable = createObservableClient(setup.client);
      let latest: ObserveObjectCallbackArgs<Employee> | undefined;
      const subscription = observable.observeObject(
        Employee,
        1,
        {},
        {
          next: (payload) => {
            latest = payload;
          },
          error: vi.fn(),
          complete: vi.fn(),
        },
      );

      try {
        await responseReady.promise;
        dataStore.replaceObjectOrThrow({
          ...employee,
          fullName: "After the change",
        });
        const firstInvalidation = observable.invalidateAll();
        const secondInvalidation = observable.invalidateAll();
        releaseResponse.resolve();
        await Promise.all([firstInvalidation, secondInvalidation]);

        expect(latest?.status).toBe("loaded");
        expect(latest?.object?.fullName).toBe("After the change");
        expect(objectRequests).toBe(2);
      } finally {
        releaseResponse.resolve();
        subscription.unsubscribe();
        setup.apiServer.close();
      }
    },
  );
});

describe("invalidation during a linked-object request", () => {
  it("loads fresh linked data without revalidating its own response", async () => {
    const responseReady = pDefer<void>();
    const releaseResponse = pDefer<void>();
    let linkRequests = 0;
    let holdLinkRequests = false;
    const fetchWithHeldResponse: typeof fetch = async (input, init) => {
      const response = await fetch(input, init);
      if (
        holdLinkRequests &&
        String(input).includes("objectSets/loadObjects")
      ) {
        linkRequests++;
        if (linkRequests === 1) {
          responseReady.resolve();
          await releaseResponse.promise;
        }
      }
      return response;
    };
    const setup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
      { logger: new TestLogger({}, { level: "silent" }) },
      fetchWithHeldResponse,
    );
    ontologies.addEmployeeOntology(setup.fauxFoundry.getDefaultOntology());
    const dataStore = setup.fauxFoundry.getDefaultDataStore();
    const source = dataStore.registerObject(Employee, { employeeId: 1 });
    const target = dataStore.registerObject(Employee, {
      employeeId: 2,
      fullName: "Before the change",
    });
    dataStore.registerLink(source, "peeps", target, "lead");
    const sourceObject = await setup.client(Employee).fetchOne(1);
    holdLinkRequests = true;
    const observable = createObservableClient(setup.client);
    let latest: ObserveLinks.CallbackArgs<Employee> | undefined;
    const subscription = observable.observeLinks(
      sourceObject,
      "peeps",
      {},
      {
        next: (payload) => {
          latest = payload;
        },
        error: vi.fn(),
        complete: vi.fn(),
      },
    );

    try {
      await responseReady.promise;
      dataStore.replaceObjectOrThrow({
        ...dataStore.getObjectOrThrow(Employee.apiName, 2),
        fullName: "After the change",
      });
      const invalidation = observable.invalidateAll();
      releaseResponse.resolve();
      await invalidation;

      expect(latest?.status).toBe("loaded");
      expect(latest?.resolvedList?.map((object) => object.fullName)).toEqual([
        "After the change",
      ]);
      expect(linkRequests).toBe(2);
    } finally {
      releaseResponse.resolve();
      subscription.unsubscribe();
      setup.apiServer.close();
    }
  });
});
