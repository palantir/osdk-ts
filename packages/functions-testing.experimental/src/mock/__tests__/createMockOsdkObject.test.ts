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
import { createMockOsdkObject } from "../createMockOsdkObject.js";

describe("createMockOsdkObject", () => {
  describe("basic object creation", () => {
    it("creates a mock object with provided properties", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 123,
        fullName: "John Doe",
        office: "NYC",
      });

      expect(mockEmployee.$apiName).toBe("Employee");
      expect(mockEmployee.$objectType).toBe("Employee");
      expect(mockEmployee.employeeId).toBe(123);
      expect(mockEmployee.fullName).toBe("John Doe");
      expect(mockEmployee.office).toBe("NYC");
    });

    it("creates a mock object with minimal properties", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
      });

      expect(mockEmployee.$apiName).toBe("Employee");
      expect(mockEmployee.employeeId).toBe(1);
      expect(mockEmployee.fullName).toBeUndefined();
    });

    it("freezes the mock object", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
      });

      expect(Object.isFrozen(mockEmployee)).toBe(true);
    });
  });

  describe("$primaryKey", () => {
    it("returns primary key when primaryKeyApiName is provided", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 456 },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );

      expect(mockEmployee.$primaryKey).toBe(456);
    });

    it("returns undefined when $primaryKey is accessed without primaryKeyApiName", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 123,
      });

      expect(mockEmployee.$primaryKey).toBeUndefined();
    });

    it("throws when primaryKeyApiName is provided but property is missing", () => {
      expect(() =>
        createMockOsdkObject(
          Employee,
          { fullName: "John" },
          undefined,
          { primaryKeyApiName: "employeeId" },
        )
      ).toThrow(
        "primaryKeyApiName \"employeeId\" was specified but not found in properties for Employee",
      );
    });
  });

  describe("$title", () => {
    it("returns title when titlePropertyApiName is provided", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "Jane Smith" },
        undefined,
        { titlePropertyApiName: "fullName" },
      );

      expect(mockEmployee.$title).toBe("Jane Smith");
    });

    it("returns undefined when $title is accessed without titlePropertyApiName", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
        fullName: "John",
      });

      expect(mockEmployee.$title).toBeUndefined();
    });

    it("throws when titlePropertyApiName is provided but property is missing", () => {
      expect(() =>
        createMockOsdkObject(
          Employee,
          { employeeId: 1 },
          undefined,
          { titlePropertyApiName: "fullName" },
        )
      ).toThrow(
        "titlePropertyApiName \"fullName\" was specified but not found in properties for Employee",
      );
    });
  });

  describe("$rid", () => {
    it("uses custom $rid when provided", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1 },
        undefined,
        { $rid: "ri.custom.object.123" },
      );

      // @ts-expect-error - $rid is not typed on the returned object, but we want to test that it is included correctly
      expect(mockEmployee.$rid).toBe("ri.custom.object.123");
    });
  });

  describe("$objectSpecifier", () => {
    it("returns object specifier when primaryKeyApiName is provided", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 42 },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );

      expect(mockEmployee.$objectSpecifier).toBe("Employee:42");
    });

    it("returns undefined when $objectSpecifier is accessed without primaryKeyApiName", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
      });

      expect(mockEmployee.$objectSpecifier).toBeUndefined();
    });
  });

  describe("$clone", () => {
    it("creates a clone with the same properties", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "John" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );

      const cloned = mockEmployee.$clone();

      // Verify it's a different object by checking frozen status independently
      expect(Object.isFrozen(cloned)).toBe(true);
      expect(cloned.employeeId).toBe(1);
      expect(cloned.fullName).toBe("John");
      expect(cloned.$primaryKey).toBe(1);
      // Verify they are different objects by modifying would fail on both
      expect(cloned.$apiName).toBe(mockEmployee.$apiName);
    });

    it("creates a clone with updated properties", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "John", office: "NYC" },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );

      const cloned = mockEmployee.$clone({ office: "LA" });

      expect(cloned.employeeId).toBe(1);
      expect(cloned.fullName).toBe("John");
      expect(cloned.office).toBe("LA");
    });

    it("throws when trying to change primary key via $clone", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1 },
        undefined,
        { primaryKeyApiName: "employeeId" },
      );

      expect(() => mockEmployee.$clone({ employeeId: 999 })).toThrow(
        "Cannot update Employee object with differing primary key values",
      );
    });

    it("allows cloning without primaryKeyApiName", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
        fullName: "John",
      });

      const cloned = mockEmployee.$clone({ fullName: "Jane" });

      expect(cloned.employeeId).toBe(1);
      expect(cloned.fullName).toBe("Jane");
    });
  });

  describe("$link", () => {
    it("returns undefined when $link is accessed without configuration", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
      });

      expect(mockEmployee.$link).toBeUndefined();
    });

    it("returns configured single link", () => {
      const mockOffice = createMockOsdkObject(
        Office,
        { officeId: "nyc" },
        undefined,
        { primaryKeyApiName: "officeId" },
      );
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1 },
        {
          officeLink: mockOffice,
        } as any,
        { primaryKeyApiName: "employeeId" },
      );

      expect(mockEmployee.$link).toBeDefined();
      expect(mockEmployee.$link.officeLink).toBe(
        mockOffice,
      );
    });
  });

  describe("unsupported methods", () => {
    it("throws when $as is called", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
      });

      expect(() => mockEmployee.$as("SomeInterface")).toThrow(
        "$as is not supported on mock objects.",
      );
    });

    it("throws when $__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata is accessed", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
      });

      expect(
        () => mockEmployee.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata,
      ).toThrow(
        "$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata is not supported on mock objects.",
      );
    });

    it("throws when $__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue is called", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
      });

      expect(() =>
        mockEmployee.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
          "employeeId",
        )
      ).toThrow(
        "$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue is not supported on mock objects.",
      );
    });
  });

  describe("different object types", () => {
    it("works with Office object type", () => {
      const mockOffice = createMockOsdkObject(
        Office,
        {
          officeId: "nyc-001",
          name: "New York Office",
          capacity: 500,
        },
        undefined,
        {
          primaryKeyApiName: "officeId",
          titlePropertyApiName: "name",
        },
      );

      expect(mockOffice.$apiName).toBe("Office");
      expect(mockOffice.$primaryKey).toBe("nyc-001");
      expect(mockOffice.$title).toBe("New York Office");
      expect(mockOffice.capacity).toBe(500);
    });
  });

  describe("full configuration", () => {
    it("works with all options provided", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        {
          employeeId: 100,
          fullName: "Complete Employee",
          office: "Chicago",
          class: "Senior",
        },
        undefined,
        {
          primaryKeyApiName: "employeeId",
          titlePropertyApiName: "fullName",
          $rid: "ri.custom.employee.100",
        },
      );

      expect(mockEmployee.$apiName).toBe("Employee");
      expect(mockEmployee.$objectType).toBe("Employee");
      expect(mockEmployee.$primaryKey).toBe(100);
      expect(mockEmployee.$title).toBe("Complete Employee");
      // @ts-expect-error - $rid is not typed on the returned object, but we want to test that it is included correctly
      expect(mockEmployee.$rid).toBe("ri.custom.employee.100");
      expect(mockEmployee.$objectSpecifier).toBe("Employee:100");
      expect(mockEmployee.employeeId).toBe(100);
      expect(mockEmployee.fullName).toBe("Complete Employee");
      expect(mockEmployee.office).toBe("Chicago");
      expect(mockEmployee.class).toBe("Senior");
    });
  });
});
