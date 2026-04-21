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

import {
  addOne,
  Employee,
  Office,
  queryTypeReturnsArray,
} from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";
import { createMockClient } from "../createMockClient.js";
import { createMockObjectSet } from "../createMockObjectSet.js";
import { createMockOsdkObject } from "../createMockOsdkObject.js";

describe("createMockClient", () => {
  describe("fetchPage", () => {
    it("returns stubbed objects", async () => {
      const mockClient = createMockClient();
      const emp1 = createMockOsdkObject(Employee, {
        employeeId: 1,
        fullName: "John",
      });
      const emp2 = createMockOsdkObject(Employee, {
        employeeId: 2,
        fullName: "Jane",
      });

      mockClient
        .when((c) => c(Employee).fetchPage())
        .thenReturnObjects([emp1, emp2]);

      const result = await mockClient(Employee).fetchPage();

      expect(result.data).toHaveLength(2);
      expect(result.data[0].fullName).toBe("John");
      expect(result.data[1].fullName).toBe("Jane");
    });

    it("matches fetchPage args", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, { employeeId: 1 });

      mockClient
        .when((c) => c(Employee).fetchPage({ $pageSize: 10 }))
        .thenReturnObjects([emp]);

      const result = await mockClient(Employee).fetchPage({ $pageSize: 10 });
      expect(result.data).toHaveLength(1);
    });

    it("matches where clause", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, {
        employeeId: 1,
        office: "NYC",
      });

      mockClient
        .when((c) => c(Employee).where({ office: { $eq: "NYC" } }).fetchPage())
        .thenReturnObjects([emp]);

      const result = await mockClient(Employee)
        .where({ office: { $eq: "NYC" } })
        .fetchPage();

      expect(result.data).toHaveLength(1);
      expect(result.data[0].office).toBe("NYC");
    });

    it("throws when no stub registered", async () => {
      const mockClient = createMockClient();

      await expect(mockClient(Employee).fetchPage()).rejects.toThrow();
    });

    it("throws when pattern doesn't match", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, { employeeId: 1 });

      mockClient
        .when((c) => c(Employee).where({ office: { $eq: "NYC" } }).fetchPage())
        .thenReturnObjects([emp]);

      await expect(
        mockClient(Employee).where({ office: { $eq: "LA" } }).fetchPage(),
      ).rejects.toThrow();
    });
  });

  describe("fetchOne", () => {
    it("returns stubbed object", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, {
        employeeId: 123,
        fullName: "John",
      });

      mockClient.when((c) => c(Employee).fetchOne(123))
        .thenReturnObject(emp);

      const result = await mockClient(Employee).fetchOne(123);

      expect(result.employeeId).toBe(123);
      expect(result.fullName).toBe("John");
    });
  });

  describe("aggregate", () => {
    it("returns stubbed aggregation", async () => {
      const mockClient = createMockClient();

      mockClient
        .when((c) =>
          c(Employee).aggregate({ $select: { $count: "unordered" } })
        )
        .thenReturnAggregation({ $count: 42 });

      const result = await mockClient(Employee).aggregate({
        $select: { $count: "unordered" },
      });

      expect(result.$count).toBe(42);
    });
  });

  describe("multiple object types", () => {
    it("stubs independently", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, { employeeId: 1 });
      const office = createMockOsdkObject(Office, { officeId: "nyc" });

      mockClient.when((c) => c(Employee).fetchPage())
        .thenReturnObjects([emp]);
      mockClient.when((c) => c(Office).fetchPage()).thenReturnObjects([
        office,
      ]);

      const empResult = await mockClient(Employee).fetchPage();
      const officeResult = await mockClient(Office).fetchPage();

      expect(empResult.data[0].employeeId).toBe(1);
      expect(officeResult.data[0].officeId).toBe("nyc");
    });
  });

  describe("chained operations", () => {
    it("matches nested where conditions", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, { employeeId: 1 });

      mockClient
        .when((c) =>
          c(Employee)
            .where({
              $and: [{ office: { $eq: "NYC" } }, { employeeId: { $gte: 1 } }],
            })
            .fetchPage()
        )
        .thenReturnObjects([emp]);

      const result = await mockClient(Employee)
        .where({
          $and: [{ office: { $eq: "NYC" } }, { employeeId: { $gte: 1 } }],
        })
        .fetchPage();

      expect(result.data).toHaveLength(1);
    });
  });

  describe("clearStubs", () => {
    it("removes all stubs", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, { employeeId: 1 });

      mockClient.when((c) => c(Employee).fetchPage())
        .thenReturnObjects([emp]);

      mockClient.clearStubs();

      await expect(mockClient(Employee).fetchPage()).rejects.toThrow();
    });
  });

  describe("fetchPageWithErrors", () => {
    it("returns ok on success and error when no stub", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, { employeeId: 1 });

      mockClient.when((c) => c(Employee).fetchPage())
        .thenReturnObjects([emp]);

      const okResult = await mockClient(Employee).fetchPageWithErrors();
      expect(okResult.error).toBeUndefined();
      expect(okResult.value?.data[0]).toEqual(emp);

      const errorResult = await mockClient(Office).fetchPageWithErrors();
      expect(errorResult.error).toBeDefined();
    });
  });

  describe("fetchOneWithErrors", () => {
    it("returns ok on success and error when no stub", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, { employeeId: 1 });

      mockClient.when((c) => c(Employee).fetchOne(1)).thenReturnObject(
        emp,
      );

      const okResult = await mockClient(Employee).fetchOneWithErrors(1);
      expect(okResult.value).toEqual(emp);

      const errorResult = await mockClient(Employee).fetchOneWithErrors(999);
      expect(errorResult.error).toBeDefined();
    });
  });

  describe("unsupported", () => {
    it("throws on subscribe", () => {
      const mockClient = createMockClient();
      expect(() => mockClient(Employee).subscribe({})).toThrow(
        "subscribe is not supported",
      );
    });
  });

  describe("platform client context", () => {
    it("exposes a SharedClientContext so platform fetches don't crash", async () => {
      const mockClient = createMockClient();
      const ctx = (mockClient as any).__osdkClientContext;

      expect(ctx).toBeDefined();
      expect(typeof ctx.baseUrl).toBe("string");
      expect(ctx.baseUrl.length).toBeGreaterThan(0);
      // foundryPlatformFetch reads `ctx.baseUrl.endsWith("/")` — verify it doesn't throw.
      expect(() => ctx.baseUrl.endsWith("/")).not.toThrow();
      expect(typeof ctx.fetch).toBe("function");
      expect(typeof ctx.tokenProvider).toBe("function");
      await expect(ctx.tokenProvider()).resolves.toBeTypeOf("string");
    });
  });

  describe("query stubbing", () => {
    it("returns stubbed query result with parameters", async () => {
      const mockClient = createMockClient();

      mockClient.whenQuery(addOne, { n: 5 }).thenReturn(6);

      const result = await mockClient(addOne).executeFunction({ n: 5 });

      expect(result).toBe(6);
    });

    it("returns stubbed array result", async () => {
      const mockClient = createMockClient();

      mockClient
        .whenQuery(queryTypeReturnsArray, { people: ["Alice", "Bob"] })
        .thenReturn(["Alice - processed", "Bob - processed"]);

      const result = await mockClient(queryTypeReturnsArray).executeFunction({
        people: ["Alice", "Bob"],
      });

      expect(result).toEqual(["Alice - processed", "Bob - processed"]);
    });

    it("matches query parameters exactly", async () => {
      const mockClient = createMockClient();

      mockClient.whenQuery(addOne, { n: 5 }).thenReturn(6);
      mockClient.whenQuery(addOne, { n: 10 }).thenReturn(11);

      const result1 = await mockClient(addOne).executeFunction({ n: 5 });
      const result2 = await mockClient(addOne).executeFunction({ n: 10 });

      expect(result1).toBe(6);
      expect(result2).toBe(11);
    });

    it("throws when no stub registered for query", async () => {
      const mockClient = createMockClient();

      await expect(
        mockClient(addOne).executeFunction({ n: 5 }),
      ).rejects.toThrow("No stub for query 'addOne'");
    });

    it("throws when parameters don't match", async () => {
      const mockClient = createMockClient();

      mockClient.whenQuery(addOne, { n: 5 }).thenReturn(6);

      await expect(
        mockClient(addOne).executeFunction({ n: 10 }),
      ).rejects.toThrow("No stub for query 'addOne'");
    });

    it("clears query stubs with clearStubs", async () => {
      const mockClient = createMockClient();

      mockClient.whenQuery(addOne, { n: 5 }).thenReturn(6);

      mockClient.clearStubs();

      await expect(
        mockClient(addOne).executeFunction({ n: 5 }),
      ).rejects.toThrow("No stub for query 'addOne'");
    });
  });

  describe("whenObjectSet (standalone mock object set)", () => {
    it("stubs fetchPage on a standalone mock object set", async () => {
      const mockClient = createMockClient();
      const peepsSet = createMockObjectSet(Employee);
      const p1 = createMockOsdkObject(Employee, {
        employeeId: 10,
        fullName: "Alice",
      });
      const p2 = createMockOsdkObject(Employee, {
        employeeId: 11,
        fullName: "Bob",
      });

      mockClient.whenObjectSet(peepsSet, (os) => os.fetchPage())
        .thenReturnObjects([p1, p2]);

      const result = await peepsSet.fetchPage();

      expect(result.data).toHaveLength(2);
      expect(result.data[0].fullName).toBe("Alice");
      expect(result.data[1].fullName).toBe("Bob");
    });

    it("stubs aggregate on a standalone mock object set", async () => {
      const mockClient = createMockClient();
      const peepsSet = createMockObjectSet(Employee);

      mockClient
        .whenObjectSet(
          peepsSet,
          (os) => os.aggregate({ $select: { $count: "unordered" } }),
        )
        .thenReturnAggregation({ $count: 5 });

      const result = await peepsSet.aggregate({
        $select: { $count: "unordered" },
      });

      expect(result.$count).toBe(5);
    });

    it("stubs fetchOne on a standalone mock object set", async () => {
      const mockClient = createMockClient();
      const peepsSet = createMockObjectSet(Employee);
      const emp = createMockOsdkObject(Employee, {
        employeeId: 42,
        fullName: "Charlie",
      });

      mockClient.whenObjectSet(peepsSet, (os) => os.fetchOne(42))
        .thenReturnObject(emp);

      const result = await peepsSet.fetchOne(42);

      expect(result.employeeId).toBe(42);
      expect(result.fullName).toBe("Charlie");
    });

    it("stubs where + fetchPage on a standalone mock object set", async () => {
      const mockClient = createMockClient();
      const empSet = createMockObjectSet(Employee);
      const emp = createMockOsdkObject(Employee, {
        employeeId: 1,
        office: "NYC",
      });

      mockClient
        .whenObjectSet(
          empSet,
          (os) => os.where({ office: { $eq: "NYC" } }).fetchPage(),
        )
        .thenReturnObjects([emp]);

      const result = await empSet.where({ office: { $eq: "NYC" } }).fetchPage();

      expect(result.data).toHaveLength(1);
      expect(result.data[0].office).toBe("NYC");
    });

    it("throws when no stub matches on standalone object set", async () => {
      createMockClient();
      const empSet = createMockObjectSet(Employee);

      await expect(empSet.fetchPage()).rejects.toThrow(
        "No stub registered on standalone MockObjectSet",
      );
    });
  });
});
