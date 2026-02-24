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

import { Employee, Office } from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";
import { createMockClient } from "../createMockClient.js";
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

      mockClient.when((c) => c(Employee).fetchOne(123)).thenReturnObject(emp);

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

      mockClient.when((c) => c(Employee).fetchPage()).thenReturnObjects([emp]);
      mockClient.when((c) => c(Office).fetchPage()).thenReturnObjects([office]);

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

      mockClient.when((c) => c(Employee).fetchPage()).thenReturnObjects([emp]);

      mockClient.clearStubs();

      await expect(mockClient(Employee).fetchPage()).rejects.toThrow();
    });
  });

  describe("fetchPageWithErrors", () => {
    it("returns ok on success and error when no stub", async () => {
      const mockClient = createMockClient();
      const emp = createMockOsdkObject(Employee, { employeeId: 1 });

      mockClient.when((c) => c(Employee).fetchPage()).thenReturnObjects([emp]);

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

      mockClient.when((c) => c(Employee).fetchOne(1)).thenReturnObject(emp);

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
});
