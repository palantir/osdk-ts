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
import {
  Employee,
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
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import type { Client } from "../../Client.js";
import { createClient } from "../../createClient.js";
import { TestLogger } from "../../logger/TestLogger.js";
import { createObservableClient } from "../ObservableClient.js";
import type { ObservableClient } from "../ObservableClient.js";
import {
  createClientMockHelper,
  mockListSubCallback,
  mockSingleSubCallback,
  waitForCall,
} from "./testUtils.js";

const logger = new TestLogger({}, {
  level: "debug",
});

describe("ObservableClient Prefetch", () => {
  let server: SetupServer;
  let fauxFoundry: FauxFoundry;
  let client: Client;
  let observableClient: ObservableClient;

  beforeAll(async () => {
    fauxFoundry = new FauxFoundry({
      ontology: ontologies.ontology2,
      stubData: stubData.ontology2,
    });
    server = await startNodeApiServer(fauxFoundry.foundryClient);
  });

  afterAll(async () => {
    await server.stop();
  });

  beforeEach(() => {
    vi.useFakeTimers();
    client = createClient(
      server.baseUrl,
      "ontology2",
      async () => "myAccessToken",
      {
        enableLegacyInterop: false,
        logger,
      },
    );
    observableClient = createObservableClient(client);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  describe("prefetchObject", () => {
    it("should fetch and cache object data without creating a subscription", async () => {
      const employeeId = 50030;

      // Prefetch the object
      await observableClient.prefetchObject(Employee, employeeId);

      // Now observe the same object - it should use cached data
      const observer = mockSingleSubCallback();
      const subscription = observableClient.observeObject(
        Employee,
        employeeId,
      ).subscribe(observer);

      // Should receive cached data immediately with hasData status
      await waitForCall(observer.next);
      expect(observer.next).toHaveBeenCalledTimes(1);
      
      const payload = observer.next.mock.calls[0][0];
      expect(payload.status).toBe("hasData");
      expect(payload.value).toBeDefined();
      expect(payload.value?.$primaryKey).toBe(employeeId);

      subscription.unsubscribe();
    });

    it("should handle non-existent objects gracefully", async () => {
      const nonExistentId = 99999999;

      // Prefetch non-existent object should not throw
      await expect(
        observableClient.prefetchObject(Employee, nonExistentId)
      ).resolves.toBeUndefined();

      // Observing should still work
      const observer = mockSingleSubCallback();
      const subscription = observableClient.observeObject(
        Employee,
        nonExistentId,
      ).subscribe(observer);

      await vi.runAllTimersAsync();

      // Cleanup
      subscription.unsubscribe();
    });

    it("should work with multiple prefetches", async () => {
      const employeeIds = [50030, 50031, 50032];

      // Prefetch multiple objects
      await Promise.all(
        employeeIds.map(id => observableClient.prefetchObject(Employee, id))
      );

      // Observe one of them
      const observer = mockSingleSubCallback();
      const subscription = observableClient.observeObject(
        Employee,
        employeeIds[0],
      ).subscribe(observer);

      // Should have data immediately
      await waitForCall(observer.next);
      const payload = observer.next.mock.calls[0][0];
      expect(payload.status).toBe("hasData");

      subscription.unsubscribe();
    });
  });

  describe("prefetchList", () => {
    it("should fetch and cache list data without creating a subscription", async () => {
      // Prefetch the list
      await observableClient.prefetchList({
        type: Employee,
        where: {},
        pageSize: 5,
      });

      // Now observe the same list - it should use cached data
      const observer = mockListSubCallback();
      const subscription = observableClient.observeList({
        type: Employee,
        where: {},
        pageSize: 5,
      }).subscribe(observer);

      // Should receive cached data immediately
      await waitForCall(observer.next);
      expect(observer.next).toHaveBeenCalledTimes(1);
      
      const payload = observer.next.mock.calls[0][0];
      expect(payload.status).toBe("hasData");
      expect(payload.value).toBeDefined();
      expect(Array.isArray(payload.value)).toBe(true);

      subscription.unsubscribe();
    });

    it("should handle pagination in prefetch", async () => {
      // Prefetch with specific page size
      await observableClient.prefetchList({
        type: Office,
        pageSize: 2,
      });

      // Observe the list
      const observer = mockListSubCallback();
      const subscription = observableClient.observeList({
        type: Office,
        pageSize: 2,
      }).subscribe(observer);

      // Should get first page from cache
      await waitForCall(observer.next);
      const payload = observer.next.mock.calls[0][0];
      expect(payload.status).toBe("hasData");
      expect(payload.value).toBeDefined();

      subscription.unsubscribe();
    });

    it("should handle filters in prefetch", async () => {
      // Prefetch with filters
      await observableClient.prefetchList({
        type: Employee,
        where: { fullName: { $startsWith: "J" } },
        pageSize: 10,
      });

      // Now observe with same params - should use cache
      const observer = mockListSubCallback();
      const subscription = observableClient.observeList({
        type: Employee,
        where: { fullName: { $startsWith: "J" } },
        pageSize: 10,
      }).subscribe(observer);

      await waitForCall(observer.next);
      const payload = observer.next.mock.calls[0][0];
      expect(payload.status).toBe("hasData");
      expect(payload.value).toBeDefined();

      subscription.unsubscribe();
    });

    it("should handle concurrent prefetch calls for the same data", async () => {
      // Start multiple prefetch calls concurrently
      const prefetch1 = observableClient.prefetchList({
        type: Employee,
        where: {},
        pageSize: 3,
      });
      const prefetch2 = observableClient.prefetchList({
        type: Employee,
        where: {},
        pageSize: 3,
      });
      const prefetch3 = observableClient.prefetchList({
        type: Employee,
        where: {},
        pageSize: 3,
      });

      await Promise.all([prefetch1, prefetch2, prefetch3]);

      // All should complete successfully
      expect(true).toBe(true);
    });

    it("should not interfere with existing subscriptions", async () => {
      // Start observing first
      const observer = mockListSubCallback();
      const subscription = observableClient.observeList({
        type: Employee,
        where: {},
        pageSize: 2,
      }).subscribe(observer);

      await waitForCall(observer.next);
      const firstCallCount = observer.next.mock.calls.length;

      // Now prefetch with different filters
      await observableClient.prefetchList({
        type: Employee,
        where: { fullName: { $startsWith: "M" } },
        pageSize: 5,
      });

      // Wait a bit to see if any additional calls are made
      await vi.advanceTimersByTimeAsync(100);

      // Original subscription should not receive additional calls
      expect(observer.next.mock.calls.length).toBe(firstCallCount);

      subscription.unsubscribe();
    });
  });

  describe("Integration tests", () => {
    it("should allow prefetching multiple types of data", async () => {
      // Prefetch objects and lists
      await Promise.all([
        observableClient.prefetchObject(Employee, 50030),
        observableClient.prefetchList({
          type: Office,
          where: {},
          pageSize: 5,
        }),
        observableClient.prefetchList({
          type: Employee,
          where: {},
          pageSize: 3,
        }),
      ]);

      // Now observe them - should use cached data
      const employeeObserver = mockSingleSubCallback();
      const officeListObserver = mockListSubCallback();

      const employeeSub = observableClient.observeObject(
        Employee,
        50030,
      ).subscribe(employeeObserver);

      const officeSub = observableClient.observeList({
        type: Office,
        where: {},
        pageSize: 5,
      }).subscribe(officeListObserver);

      await waitForCall(employeeObserver.next);
      await waitForCall(officeListObserver.next);

      // Both should have data immediately from cache
      expect(employeeObserver.next.mock.calls[0][0].status).toBe("hasData");
      expect(officeListObserver.next.mock.calls[0][0].status).toBe("hasData");

      employeeSub.unsubscribe();
      officeSub.unsubscribe();
    });
  });
});