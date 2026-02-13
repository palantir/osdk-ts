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
import { createMockOsdkObject } from "../../mock/createMockOsdkObject.js";
import {
  countEmployeePeeps,
  getEmployeeOfficeName,
  getEmployeePeepNames,
  getSpecificPeep,
} from "./objectWithLinks.js";

describe("objectWithLinks", () => {
  describe("getEmployeeOfficeName (single link)", () => {
    it("returns the office name from a single link", async () => {
      const mockOffice = createMockOsdkObject(
        Office,
        { officeId: "nyc", name: "New York Office" },
        undefined,
        { primaryKeyApiName: "officeId" },
      );
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "John Doe" },
        { officeLink: mockOffice },
        { primaryKeyApiName: "employeeId" },
      );

      const officeName = await getEmployeeOfficeName(mockEmployee);

      expect(officeName).toBe("New York Office");
    });
  });

  describe("getEmployeePeepNames (many link with fetchPage)", () => {
    it("returns all peep names from a many link", async () => {
      const mockPeep1 = createMockOsdkObject(
        Employee,
        { employeeId: 10, fullName: "Alice" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );
      const mockPeep2 = createMockOsdkObject(
        Employee,
        { employeeId: 11, fullName: "Bob" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "John Doe" },
        { peeps: [mockPeep1, mockPeep2] },
        { primaryKeyApiName: "employeeId" },
      );

      const peepNames = await getEmployeePeepNames(mockEmployee);

      expect(peepNames).toEqual(["Alice", "Bob"]);
    });

    it("returns empty array when no peeps", async () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "John Doe" },
        { peeps: [] },
        { primaryKeyApiName: "employeeId" },
      );

      const peepNames = await getEmployeePeepNames(mockEmployee);

      expect(peepNames).toEqual([]);
    });
  });

  describe("countEmployeePeeps (many link with asyncIter)", () => {
    it("counts peeps using asyncIter", async () => {
      const mockPeep1 = createMockOsdkObject(
        Employee,
        { employeeId: 10, fullName: "Alice" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );
      const mockPeep2 = createMockOsdkObject(
        Employee,
        { employeeId: 11, fullName: "Bob" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );
      const mockPeep3 = createMockOsdkObject(
        Employee,
        { employeeId: 12, fullName: "Charlie" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "John Doe" },
        { peeps: [mockPeep1, mockPeep2, mockPeep3] },
        { primaryKeyApiName: "employeeId" },
      );

      const count = await countEmployeePeeps(mockEmployee);

      expect(count).toBe(3);
    });
  });

  describe("getSpecificPeep (many link with fetchOne)", () => {
    it("fetches a specific peep by primary key", async () => {
      const mockPeep1 = createMockOsdkObject(
        Employee,
        { employeeId: 10, fullName: "Alice" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );
      const mockPeep2 = createMockOsdkObject(
        Employee,
        { employeeId: 11, fullName: "Bob" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "John Doe" },
        { peeps: [mockPeep1, mockPeep2] },
        { primaryKeyApiName: "employeeId" },
      );

      const peep = await getSpecificPeep(mockEmployee, 11);

      expect(peep.fullName).toBe("Bob");
    });

    it("throws when peep is not found", () => {
      const mockPeep1 = createMockOsdkObject(
        Employee,
        { employeeId: 10, fullName: "Alice" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "John Doe" },
        { peeps: [mockPeep1] },
        { primaryKeyApiName: "employeeId" },
      );

      // fetchOne throws synchronously when the PK is not found
      expect(() => mockEmployee.$link.peeps.fetchOne(999)).toThrow(
        "fetchOne could not find object with primary key 999",
      );
    });
  });
});
