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

import { describe, expect, it } from "vitest";
import { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import { defineShape } from "./defineShape.js";

describe("defineShape", () => {
  it("creates an empty shape definition", () => {
    const shape = defineShape();
    expect(shape).toBeDefined();
    expect(typeof shape.requiredOrThrow).toBe("function");
    expect(typeof shape.asType).toBe("function");
  });

  it("adds requiredOrThrow properties", () => {
    const shape = defineShape()
      .requiredOrThrow("fullName", "employeeId");

    expect(shape.__requiredOrThrowProps).toEqual(["fullName", "employeeId"]);
  });

  it("adds requiredOrDrop properties", () => {
    const shape = defineShape()
      .requiredOrDrop("fullName");

    expect(shape.__requiredOrDropProps).toEqual(["fullName"]);
  });

  it("adds selectWithDefaults", () => {
    const shape = defineShape()
      .selectWithDefaults({ fullName: "Unknown", employeeId: 0 });

    expect(shape.__selectWithDefaults).toEqual({
      fullName: "Unknown",
      employeeId: 0,
    });
  });

  it("adds name and description", () => {
    const shape = defineShape()
      .withName("TestShape")
      .withDescription("A test shape");

    expect(shape.name).toBe("TestShape");
    expect(shape.description).toBe("A test shape");
  });

  it("adds where clause", () => {
    const whereClause = { fullName: { $eq: "John Doe" } } as const;
    const shape = defineShape<typeof EmployeeApiTest>()
      .withWhere(whereClause);

    expect(shape.where).toEqual(whereClause);
  });

  it("combines where clauses with and", () => {
    const shape = defineShape<typeof EmployeeApiTest>()
      .withWhere({ fullName: { $eq: "John" } })
      .and({ class: { $eq: "A" } });

    expect(shape.where).toHaveProperty("$and");
  });

  it("combines where clauses with or", () => {
    const shape = defineShape<typeof EmployeeApiTest>()
      .withWhere({ fullName: { $eq: "John" } })
      .or({ class: { $eq: "B" } });

    expect(shape.where).toHaveProperty("$or");
  });

  it("adds orderBy", () => {
    const shape = defineShape()
      .withOrderBy({ fullName: "asc" });

    expect(shape.orderBy).toEqual({ fullName: "asc" });
  });

  it("adds pageSize", () => {
    const shape = defineShape()
      .withPageSize(50);

    expect(shape.pageSize).toBe(50);
  });

  it("adds streamUpdates", () => {
    const shape = defineShape()
      .withStreamUpdates(true);

    expect(shape.streamUpdates).toBe(true);
  });

  it("adds dedupeInterval", () => {
    const shape = defineShape()
      .withDedupeInterval(5000);

    expect(shape.dedupeIntervalMs).toBe(5000);
  });

  it("adds select properties", () => {
    const shape = defineShape()
      .withSelect("fullName", "employeeId");

    expect(shape.select).toEqual(["fullName", "employeeId"]);
  });

  it("adds helpers", () => {
    const helpers = {
      displayName() {
        return "test";
      },
    };
    const shape = defineShape()
      .helpers(helpers);

    expect(shape.__helpers).toEqual(helpers);
  });

  it("chains multiple operations", () => {
    const shape = defineShape()
      .withName("ChainedShape")
      .requiredOrThrow("fullName")
      .requiredOrDrop("employeeId")
      .selectWithDefaults({ employeeId: 0 })
      .withPageSize(25)
      .helpers({
        test() {
          return "value";
        },
      });

    expect(shape.name).toBe("ChainedShape");
    expect(shape.__requiredOrThrowProps).toEqual(["fullName"]);
    expect(shape.__requiredOrDropProps).toEqual(["employeeId"]);
    expect(shape.__selectWithDefaults).toEqual({ employeeId: 0 });
    expect(shape.pageSize).toBe(25);
    expect(shape.__helpers).toBeDefined();
  });

  it("extends another shape", () => {
    const baseShape = defineShape()
      .requiredOrThrow("fullName");

    const extendedShape = defineShape()
      .extend(baseShape)
      .requiredOrThrow("employeeId");

    expect(extendedShape.__requiredOrThrowProps).toEqual([
      "fullName",
      "employeeId",
    ]);
  });

  it("creates a shape type with asType", () => {
    const shapeType = defineShape()
      .requiredOrThrow("fullName")
      .asType(EmployeeApiTest);

    expect(shapeType.shapeType).toBe("shape");
    expect(shapeType.type).toBe("object");
    expect(shapeType.baseObjectType).toEqual(EmployeeApiTest);
    expect(shapeType.shapeMetadata.__requiredOrThrowProps).toEqual([
      "fullName",
    ]);
  });

  it("preserves all metadata in asType", () => {
    const shapeType = defineShape()
      .withName("TestShape")
      .withDescription("Test description")
      .requiredOrThrow("fullName")
      .requiredOrDrop("employeeId")
      .selectWithDefaults({ employeeId: 0 })
      .withPageSize(50)
      .asType(EmployeeApiTest);

    expect(shapeType.shapeMetadata.name).toBe("TestShape");
    expect(shapeType.shapeMetadata.description).toBe("Test description");
    expect(shapeType.shapeMetadata.__requiredOrThrowProps).toEqual([
      "fullName",
    ]);
    expect(shapeType.shapeMetadata.__requiredOrDropProps).toEqual([
      "employeeId",
    ]);
    expect(shapeType.shapeMetadata.__selectWithDefaults).toEqual({
      employeeId: 0,
    });
    expect(shapeType.shapeMetadata.pageSize).toBe(50);
  });
});
