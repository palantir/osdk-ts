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
import { createMockObjectSet } from "../createMockObjectSet.js";
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

    it("throws when primary key property is not provided", () => {
      expect(() =>
        createMockOsdkObject(Employee, { fullName: "John" }),
      ).toThrow(
        'Primary key property "employeeId" must be provided in properties for Employee.',
      );
    });

    it("throws when object type has no primaryKeyApiName", () => {
      const badObjectType = {
        type: "object" as const,
        apiName: "BadObject",
      };

      expect(() => createMockOsdkObject(badObjectType as any, {})).toThrow(
        'Object type "BadObject" does not have a primaryKeyApiName defined.',
      );
    });
  });

  describe("$primaryKey", () => {
    it("returns primary key from the object type definition", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 456,
      });

      expect(mockEmployee.$primaryKey).toBe(456);
    });
  });

  describe("$title", () => {
    it("returns title when titlePropertyApiName is provided", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1, fullName: "Jane Smith" },
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
          { titlePropertyApiName: "fullName" },
        ),
      ).toThrow(
        'titlePropertyApiName "fullName" was specified but not found in properties for Employee',
      );
    });
  });

  describe("$rid", () => {
    it("uses custom $rid when provided", () => {
      const mockEmployee = createMockOsdkObject(
        Employee,
        { employeeId: 1 },
        { $rid: "ri.custom.object.123" },
      );

      // @ts-expect-error - $rid is not typed on the returned object, but we want to test that it is included correctly
      expect(mockEmployee.$rid).toBe("ri.custom.object.123");
    });
  });

  describe("$objectSpecifier", () => {
    it("returns object specifier", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 42,
      });

      expect(mockEmployee.$objectSpecifier).toBe("Employee:42");
    });
  });

  describe("$clone", () => {
    it("creates a clone with the same properties", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
        fullName: "John",
      });

      const cloned = mockEmployee.$clone();

      expect(Object.isFrozen(cloned)).toBe(true);
      expect(cloned.employeeId).toBe(1);
      expect(cloned.fullName).toBe("John");
      expect(cloned.$primaryKey).toBe(1);
      expect(cloned.$apiName).toBe(mockEmployee.$apiName);
    });

    it("creates a clone with updated properties", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
        fullName: "John",
        office: "NYC",
      });

      const cloned = mockEmployee.$clone({ office: "LA" });

      expect(cloned.employeeId).toBe(1);
      expect(cloned.fullName).toBe("John");
      expect(cloned.office).toBe("LA");
    });

    it("throws when trying to change primary key via $clone", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
      });

      expect(() => mockEmployee.$clone({ employeeId: 999 })).toThrow(
        "Cannot update Employee object with differing primary key values",
      );
    });
  });

  describe("$link", () => {
    it("returns undefined when $link is accessed without configuration", () => {
      const mockEmployee = createMockOsdkObject(Employee, {
        employeeId: 1,
      });

      expect(mockEmployee.$link).toBeUndefined();
    });

    describe("single links", () => {
      it("returns configured single link with fetchOne", async () => {
        const mockOffice = createMockOsdkObject(Office, {
          officeId: "nyc",
          name: "New York Office",
        });
        const mockEmployee = createMockOsdkObject(
          Employee,
          { employeeId: 1 },
          { links: { officeLink: mockOffice } },
        );

        const linkedOffice = await mockEmployee.$link.officeLink.fetchOne();
        expect(linkedOffice).toBe(mockOffice);
        expect(linkedOffice.officeId).toBe("nyc");
      });

      it("returns configured single link with fetchOneWithErrors", async () => {
        const mockOffice = createMockOsdkObject(Office, {
          officeId: "la",
          name: "Los Angeles Office",
        });
        const mockEmployee = createMockOsdkObject(
          Employee,
          { employeeId: 2 },
          { links: { officeLink: mockOffice } },
        );

        const result = await mockEmployee.$link.officeLink.fetchOneWithErrors();
        expect(result.value).toBe(mockOffice);
      });
    });

    describe("many links", () => {
      it("returns configured many link with fetchPage", async () => {
        const mockPeep1 = createMockOsdkObject(Employee, {
          employeeId: 10,
          fullName: "Peep One",
        });
        const mockPeep2 = createMockOsdkObject(Employee, {
          employeeId: 11,
          fullName: "Peep Two",
        });
        const mockEmployee = createMockOsdkObject(
          Employee,
          { employeeId: 1 },
          { links: { peeps: [mockPeep1, mockPeep2] } },
        );

        expect(mockEmployee.$link).toBeDefined();
        const page = await mockEmployee.$link.peeps.fetchPage();
        expect(page.data).toHaveLength(2);
        expect(page.data[0]).toBe(mockPeep1);
        expect(page.data[1]).toBe(mockPeep2);
        expect(page.nextPageToken).toBeUndefined();
      });

      it("returns configured many link with fetchOne by primary key", async () => {
        const mockPeep1 = createMockOsdkObject(Employee, {
          employeeId: 10,
          fullName: "Peep One",
        });
        const mockPeep2 = createMockOsdkObject(Employee, {
          employeeId: 11,
          fullName: "Peep Two",
        });
        const mockEmployee = createMockOsdkObject(
          Employee,
          { employeeId: 1 },
          { links: { peeps: [mockPeep1, mockPeep2] } },
        );

        const foundPeep = await mockEmployee.$link.peeps.fetchOne(11);
        expect(foundPeep).toBe(mockPeep2);
      });

      it("throws when fetchOne primary key is not found", () => {
        const mockPeep1 = createMockOsdkObject(Employee, {
          employeeId: 10,
        });
        const mockEmployee = createMockOsdkObject(
          Employee,
          { employeeId: 1 },
          { links: { peeps: [mockPeep1] } },
        );

        expect(() => mockEmployee.$link.peeps.fetchOne(999)).toThrow(
          "fetchOne could not find object with primary key 999",
        );
      });

      it("returns configured many link with asyncIter", async () => {
        const mockPeep1 = createMockOsdkObject(Employee, {
          employeeId: 10,
          fullName: "Peep One",
        });
        const mockPeep2 = createMockOsdkObject(Employee, {
          employeeId: 11,
          fullName: "Peep Two",
        });
        const mockEmployee = createMockOsdkObject(
          Employee,
          { employeeId: 1 },
          { links: { peeps: [mockPeep1, mockPeep2] } },
        );

        const results: Array<typeof mockPeep1> = [];
        for await (const peep of mockEmployee.$link.peeps.asyncIter()) {
          results.push(peep);
        }
        expect(results).toHaveLength(2);
        expect(results[0]).toBe(mockPeep1);
        expect(results[1]).toBe(mockPeep2);
      });

      it("throws when aggregate is called on many link stub", async () => {
        const mockEmployee = createMockOsdkObject(
          Employee,
          { employeeId: 1 },
          { links: { peeps: [] } },
        );

        expect(() => mockEmployee.$link.peeps.aggregate({} as any)).toThrow(
          "aggregate is not supported on mock link stubs.",
        );
      });
    });

    describe("many links with ObjectSet", () => {
      it("uses a standalone mock object set as a many link value", async () => {
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

        mockClient
          .whenObjectSet(peepsSet, (os) => os.fetchPage())
          .thenReturnObjects([p1, p2]);

        const mockEmployee = createMockOsdkObject(
          Employee,
          { employeeId: 1 },
          { links: { peeps: peepsSet } },
        );

        const page = await mockEmployee.$link.peeps.fetchPage();
        expect(page.data).toHaveLength(2);
        expect(page.data[0].fullName).toBe("Alice");
        expect(page.data[1].fullName).toBe("Bob");
      });

      it("supports aggregate on ObjectSet many link", async () => {
        const mockClient = createMockClient();
        const peepsSet = createMockObjectSet(Employee);

        mockClient
          .whenObjectSet(peepsSet, (os) =>
            os.aggregate({ $select: { $count: "unordered" } }),
          )
          .thenReturnAggregation({ $count: 3 });

        const mockEmployee = createMockOsdkObject(
          Employee,
          { employeeId: 1 },
          { links: { peeps: peepsSet } },
        );

        const result = await mockEmployee.$link.peeps.aggregate({
          $select: { $count: "unordered" },
        });
        expect(result.$count).toBe(3);
      });
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
        ),
      ).toThrow(
        "$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue is not supported on mock objects.",
      );
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
        {
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
