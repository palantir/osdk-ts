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

import { beforeEach, describe, expect, it } from "vitest";
import { createSeed, SeedBuilder } from "./SeedBuilder.js";

// Minimal runtime shapes matching ObjectTypeDefinition. They do NOT carry
// __DefinitionMetadata, so compile-time generic constraints resolve to `never`.
// Tests bypass this with `as any` casts on link() calls.

const Employee = {
  type: "object" as const,
  apiName: "Employee",
  primaryKeyApiName: "employeeId",
  primaryKeyType: "string" as const,
};

const Department = {
  type: "object" as const,
  apiName: "Department",
  primaryKeyApiName: "departmentId",
  primaryKeyType: "string" as const,
};

const Product = {
  type: "object" as const,
  apiName: "Product",
  primaryKeyApiName: "productId",
  primaryKeyType: "integer" as const,
};

describe("SeedBuilder", () => {
  let builder: SeedBuilder;

  beforeEach(() => {
    builder = new SeedBuilder();
  });

  describe("add", () => {
    it("returns a SeedRef with the correct apiName and primaryKey", () => {
      const ref = builder.add(Employee, {
        employeeId: "emp-001",
        firstName: "Alice",
      });

      expect(ref.__objectTypeApiName).toBe("Employee");
      expect(ref.__primaryKey).toBe("emp-001");
    });

    it("returns a frozen SeedRef", () => {
      const ref = builder.add(Employee, { employeeId: "emp-001" });
      expect(Object.isFrozen(ref)).toBe(true);
    });

    it("preserves numeric primary keys", () => {
      const ref = builder.add(Product, { productId: 42 });
      expect(ref.__primaryKey).toBe(42);
      expect(typeof ref.__primaryKey).toBe("number");
    });

    it("accumulates multiple objects of the same type", () => {
      builder.add(Employee, { employeeId: "emp-001", firstName: "Alice" });
      builder.add(Employee, { employeeId: "emp-002", firstName: "Bob" });

      const output = builder.build();
      expect(output.objects.Employee).toHaveLength(2);
    });

    it("stores objects of different types separately", () => {
      builder.add(Employee, { employeeId: "emp-001" });
      builder.add(Department, { departmentId: "dept-001" });

      const output = builder.build();
      expect(Object.keys(output.objects)).toHaveLength(2);
      expect(output.objects.Employee).toHaveLength(1);
      expect(output.objects.Department).toHaveLength(1);
    });

    it("stores a copy of the props, not a reference", () => {
      const props = { employeeId: "emp-001", firstName: "Alice" } as any;
      builder.add(Employee, props);

      props.firstName = "Mutated";

      const output = builder.build();
      expect(output.objects.Employee![0]!.firstName).toBe("Alice");
    });

    it("throws on duplicate primary key within the same type", () => {
      builder.add(Employee, { employeeId: "emp-001" });

      expect(() => builder.add(Employee, { employeeId: "emp-001" }))
        .toThrow("[Employee] Duplicate primary key 'emp-001'");
    });

    it("allows the same primary key on different types", () => {
      builder.add(Employee, { employeeId: "shared-id" });
      builder.add(Department, { departmentId: "shared-id" });

      const output = builder.build();
      expect(output.objects.Employee).toHaveLength(1);
      expect(output.objects.Department).toHaveLength(1);
    });

    it("throws on null primary key", () => {
      expect(() => builder.add(Employee, { employeeId: null }))
        .toThrow("[Employee] Primary key 'employeeId' is null or undefined");
    });

    it("throws on undefined (missing) primary key", () => {
      expect(() => builder.add(Employee, {}))
        .toThrow("[Employee] Primary key 'employeeId' is null or undefined");
    });

    it("throws if the object type is missing apiName", () => {
      expect(() => builder.add({ type: "object" } as any, { id: "1" }))
        .toThrow("Object type is missing apiName");
    });

    it("throws if the object type is missing primaryKeyApiName", () => {
      expect(() =>
        builder.add(
          { type: "object", apiName: "Broken" } as any,
          { id: "1" },
        )
      ).toThrow("[Broken] Object type is missing primaryKeyApiName");
    });
  });

  describe("link by reference", () => {
    it("stores a link entry with the correct shape", () => {
      const emp = builder.add(Employee, { employeeId: "emp-001" });
      const dept = builder.add(Department, { departmentId: "dept-001" });

      (builder.link as any)("emp-dept", emp, "department", dept, "employees");

      const output = builder.build();
      expect(output.links).toHaveLength(1);
      expect(output.links[0]).toEqual({
        name: "emp-dept",
        linkType: "department",
        sourceObjectType: "Employee",
        sourceKey: "emp-001",
        targetObjectType: "Department",
        targetKey: "dept-001",
      });
    });

    it("throws if source ref was not registered", () => {
      const dept = builder.add(Department, { departmentId: "dept-001" });
      const fake = { __objectTypeApiName: "Employee", __primaryKey: "emp-999" };

      expect(() =>
        (builder.link as any)("bad", fake, "department", dept, "employees")
      )
        .toThrow("Source 'Employee:emp-999' not registered (link 'bad')");
    });

    it("throws if target ref was not registered", () => {
      const emp = builder.add(Employee, { employeeId: "emp-001" });
      const fake = {
        __objectTypeApiName: "Department",
        __primaryKey: "dept-999",
      };

      expect(() =>
        (builder.link as any)("bad", emp, "department", fake, "employees")
      )
        .toThrow("Target 'Department:dept-999' not registered (link 'bad')");
    });
  });

  describe("link by type + PK", () => {
    it("stores a link entry with the correct shape", () => {
      builder.add(Employee, { employeeId: "emp-001" });
      builder.add(Department, { departmentId: "dept-001" });

      (builder.link as any)(
        "emp-dept",
        Employee,
        "emp-001",
        "department",
        Department,
        "dept-001",
        "employees",
      );

      const output = builder.build();
      expect(output.links).toHaveLength(1);
      expect(output.links[0]).toEqual({
        name: "emp-dept",
        linkType: "department",
        sourceObjectType: "Employee",
        sourceKey: "emp-001",
        targetObjectType: "Department",
        targetKey: "dept-001",
      });
    });

    it("works with numeric primary keys", () => {
      builder.add(Product, { productId: 42 });
      builder.add(Department, { departmentId: "dept-001" });

      (builder.link as any)(
        "prod-dept",
        Product,
        42,
        "department",
        Department,
        "dept-001",
        "products",
      );

      const link = builder.build().links[0]!;
      expect(link.sourceKey).toBe("42");
      expect(link.targetKey).toBe("dept-001");
    });

    it("throws if source PK is not registered", () => {
      builder.add(Department, { departmentId: "dept-001" });

      expect(() =>
        (builder.link as any)(
          "bad",
          Employee,
          "emp-999",
          "department",
          Department,
          "dept-001",
          "employees",
        )
      ).toThrow("Source 'Employee:emp-999' not registered (link 'bad')");
    });

    it("throws if target PK is not registered", () => {
      builder.add(Employee, { employeeId: "emp-001" });

      expect(() =>
        (builder.link as any)(
          "bad",
          Employee,
          "emp-001",
          "department",
          Department,
          "dept-999",
          "employees",
        )
      ).toThrow("Target 'Department:dept-999' not registered (link 'bad')");
    });
  });

  describe("link — mixed ref and type+PK in the same builder", () => {
    it("both forms produce identical output", () => {
      const emp = builder.add(Employee, { employeeId: "emp-001" });
      builder.add(Employee, { employeeId: "emp-002" });
      const dept = builder.add(Department, { departmentId: "dept-001" });

      (builder.link as any)("by-ref", emp, "department", dept, "employees");
      (builder.link as any)(
        "by-pk",
        Employee,
        "emp-002",
        "department",
        Department,
        "dept-001",
        "employees",
      );

      const links = builder.build().links;
      expect(links).toHaveLength(2);
      expect(links[0]!.sourceKey).toBe("emp-001");
      expect(links[1]!.sourceKey).toBe("emp-002");
      expect(links[0]!.targetKey).toBe(links[1]!.targetKey);
    });
  });

  describe("build", () => {
    it("returns a snapshot — mutations after build do not affect it", () => {
      builder.add(Employee, { employeeId: "emp-001" });
      const first = builder.build();

      builder.add(Employee, { employeeId: "emp-002" });
      const second = builder.build();

      expect(first.objects.Employee).toHaveLength(1);
      expect(second.objects.Employee).toHaveLength(2);
    });
  });

  describe("createSeed", () => {
    it("produces a valid SeedOutput from a builder function", () => {
      const output = createSeed((seed) => {
        seed.add(Employee, { employeeId: "emp-001", firstName: "Alice" });
        seed.add(Department, { departmentId: "dept-001", name: "Engineering" });
      });

      expect(output.objects.Employee).toHaveLength(1);
      expect(output.objects.Department).toHaveLength(1);
      expect(output.links).toEqual([]);
    });

    it("includes links registered inside the builder function", () => {
      const output = createSeed((seed) => {
        const emp = seed.add(Employee, { employeeId: "emp-001" });
        const dept = seed.add(Department, { departmentId: "dept-001" });
        (seed.link as any)("emp-dept", emp, "department", dept, "employees");
      });

      expect(output.links).toHaveLength(1);
      expect(output.links[0]!.name).toBe("emp-dept");
    });

    it("propagates builder errors to the caller", () => {
      expect(() =>
        createSeed((seed) => {
          seed.add(Employee, { employeeId: "emp-001" });
          seed.add(Employee, { employeeId: "emp-001" });
        })
      ).toThrow("[Employee] Duplicate primary key 'emp-001'");
    });
  });

  describe("link with wrong source type for ref", () => {
    it("throws when ref's apiName does not match any registered object", () => {
      // Register emp-001 under Employee, then fabricate a ref that claims
      // the same PK belongs to Department. The builder checks by "apiName:pk"
      // composite key, so Department:emp-001 is not registered.
      builder.add(Employee, { employeeId: "emp-001" });
      builder.add(Department, { departmentId: "dept-001" });

      const wrongRef = {
        __objectTypeApiName: "Department",
        __primaryKey: "emp-001",
      };
      expect(() =>
        (builder.link as any)(
          "bad",
          wrongRef,
          "employees",
          builder.add(Department, { departmentId: "dept-002" }),
          "department",
        )
      ).toThrow("Source 'Department:emp-001' not registered");
    });
  });
});
