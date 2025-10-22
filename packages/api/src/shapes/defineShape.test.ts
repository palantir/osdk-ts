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
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import { defineShape } from "./defineShape.js";

type MockObjectProps = {
  id: string;
  name: string | undefined;
  count: number | undefined;
  active: boolean | undefined;
  verified: boolean | undefined;
};

const MockObjectType: ObjectOrInterfaceDefinition = {
  type: "object",
  apiName: "MockObject",
};

describe("defineShape", () => {
  it("creates an empty shape definition", () => {
    const shape = defineShape();
    expect(shape).toBeDefined();
    expect(typeof shape.requiredOrThrow).toBe("function");
    expect(typeof shape.asType).toBe("function");
  });

  it("adds requiredOrThrow properties", () => {
    const shape = defineShape()
      .requiredOrThrow("name", "count");

    expect(shape.__requiredOrThrowProps).toEqual(["name", "count"]);
  });

  it("adds requiredOrDrop properties", () => {
    const shape = defineShape()
      .requiredOrDrop("name");

    expect(shape.__requiredOrDropProps).toEqual(["name"]);
  });

  it("adds selectWithDefaults", () => {
    const shape = defineShape()
      .selectWithDefaults({ count: 0 });

    expect(shape.__selectWithDefaults).toEqual({ count: 0 });
  });

  it("adds name and description", () => {
    const shape = defineShape()
      .withName("TestShape")
      .withDescription("A test shape");

    expect(shape.name).toBe("TestShape");
    expect(shape.description).toBe("A test shape");
  });

  it("adds where clause", () => {
    const whereClause = { active: { $eq: true } } as const;
    const shape = defineShape<typeof MockObjectType>()
      .withWhere(whereClause as never);

    expect(shape.where).toEqual(whereClause);
  });

  it("combines where clauses with and", () => {
    const shape = defineShape<typeof MockObjectType>()
      .withWhere({ active: { $eq: true } } as never)
      .and({ verified: { $eq: true } } as never);

    expect(shape.where).toHaveProperty("$and");
  });

  it("combines where clauses with or", () => {
    const shape = defineShape<typeof MockObjectType>()
      .withWhere({ active: { $eq: true } } as never)
      .or({ verified: { $eq: true } } as never);

    expect(shape.where).toHaveProperty("$or");
  });

  it("adds orderBy", () => {
    const shape = defineShape()
      .withOrderBy({ name: "asc" });

    expect(shape.orderBy).toEqual({ name: "asc" });
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
      .withSelect("name", "count");

    expect(shape.select).toEqual(["name", "count"]);
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
      .requiredOrThrow("name")
      .requiredOrDrop("count")
      .selectWithDefaults({ count: 0 })
      .withPageSize(25)
      .helpers({
        test() {
          return "value";
        },
      });

    expect(shape.name).toBe("ChainedShape");
    expect(shape.__requiredOrThrowProps).toEqual(["name"]);
    expect(shape.__requiredOrDropProps).toEqual(["count"]);
    expect(shape.__selectWithDefaults).toEqual({ count: 0 });
    expect(shape.pageSize).toBe(25);
    expect(shape.__helpers).toBeDefined();
  });

  it("extends another shape", () => {
    const baseShape = defineShape()
      .requiredOrThrow("name");

    const extendedShape = defineShape()
      .extend(baseShape)
      .requiredOrThrow("count");

    expect(extendedShape.__requiredOrThrowProps).toEqual(["name", "count"]);
  });

  it("creates a shape type with asType", () => {
    const shapeType = defineShape()
      .requiredOrThrow("name")
      .asType(MockObjectType);

    expect(shapeType.shapeType).toBe("shape");
    expect(shapeType.type).toBe("object");
    expect(shapeType.baseObjectType).toEqual(MockObjectType);
    expect(shapeType.shapeMetadata.__requiredOrThrowProps).toEqual(["name"]);
  });

  it("preserves all metadata in asType", () => {
    const shapeType = defineShape()
      .withName("TestShape")
      .withDescription("Test description")
      .requiredOrThrow("name")
      .requiredOrDrop("count")
      .selectWithDefaults({ count: 0 })
      .withPageSize(50)
      .asType(MockObjectType);

    expect(shapeType.shapeMetadata.name).toBe("TestShape");
    expect(shapeType.shapeMetadata.description).toBe("Test description");
    expect(shapeType.shapeMetadata.__requiredOrThrowProps).toEqual(["name"]);
    expect(shapeType.shapeMetadata.__requiredOrDropProps).toEqual(["count"]);
    expect(shapeType.shapeMetadata.__selectWithDefaults).toEqual({ count: 0 });
    expect(shapeType.shapeMetadata.pageSize).toBe(50);
  });
});
