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
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import { createShapeBuilder, createShapeLinkBuilder } from "./ShapeBuilder.js";
import type { ShapePropertyConfig } from "./ShapeDefinition.js";

const MockEmployee = {
  type: "object",
  apiName: "Employee",
} as ObjectTypeDefinition;

const MockOffice = {
  type: "object",
  apiName: "Office",
} as ObjectTypeDefinition;

describe("createShapeBuilder", () => {
  it("builds a shape with selected properties", () => {
    const shape = createShapeBuilder(MockEmployee)
      .select("name" as never, "age" as never)
      .build();

    expect(shape.__baseTypeApiName).toBe("Employee");
    expect(shape.__shapeId).toMatch(/^[0-9a-f]{8}$/);
    const props = shape.__props as Record<string, ShapePropertyConfig>;
    expect(props.name.nullabilityOp.type).toBe("select");
    expect(props.age.nullabilityOp.type).toBe("select");
  });

  it("builds a shape with require and dropIfNull", () => {
    const shape = createShapeBuilder(MockEmployee)
      .require("name" as never)
      .dropIfNull("age" as never)
      .build();

    const props = shape.__props as Record<string, ShapePropertyConfig>;
    expect(props.name.nullabilityOp.type).toBe("require");
    expect(props.age.nullabilityOp.type).toBe("dropIfNull");
  });

  it("builds a shape with withDefault", () => {
    const shape = createShapeBuilder(MockEmployee)
      .withDefault("role" as never, "Unknown" as never)
      .build();

    const props = shape.__props as Record<string, ShapePropertyConfig>;
    expect(props.role.nullabilityOp).toEqual({
      type: "withDefault",
      defaultValue: "Unknown",
    });
  });

  it("builds a shape with withTransform", () => {
    const fn = (v: unknown) => String(v).toUpperCase();
    const shape = createShapeBuilder(MockEmployee)
      .withTransform("name" as never, fn as never)
      .build();

    const props = shape.__props as Record<string, ShapePropertyConfig>;
    expect(props.name.nullabilityOp.type).toBe("withTransform");
  });

  it("preserves debugName", () => {
    const shape = createShapeBuilder(MockEmployee, "SlimEmployee")
      .select("name" as never)
      .build();

    expect(shape.__debugName).toBe("SlimEmployee");
  });

  it("produces deterministic shapeId", () => {
    const a = createShapeBuilder(MockEmployee)
      .select("name" as never)
      .build();
    const b = createShapeBuilder(MockEmployee)
      .select("name" as never)
      .build();
    expect(a.__shapeId).toBe(b.__shapeId);
  });

  it("freezes props and derivedLinks", () => {
    const shape = createShapeBuilder(MockEmployee)
      .select("name" as never)
      .build();

    expect(Object.isFrozen(shape.__props)).toBe(true);
    expect(Object.isFrozen(shape.__derivedLinks)).toBe(true);
  });
});

describe("createShapeLinkBuilder", () => {
  it("limit rejects non-positive values", () => {
    const builder = createShapeLinkBuilder("Employee");
    expect(() => (builder as any).limit(0)).toThrow("positive integer");
    expect(() => (builder as any).limit(-1)).toThrow("positive integer");
  });

  it("limit rejects non-integers", () => {
    const builder = createShapeLinkBuilder("Employee");
    expect(() => (builder as any).limit(1.5)).toThrow("positive integer");
    expect(() => (builder as any).limit(Infinity)).toThrow("positive integer");
    expect(() => (builder as any).limit(NaN)).toThrow("positive integer");
  });

  it("limit accepts positive integers", () => {
    const builder = createShapeLinkBuilder("Employee");
    expect(() => (builder as any).limit(10)).not.toThrow();
  });

  it("where replaces previous clause", () => {
    const builder = createShapeLinkBuilder("Employee") as any;
    const result = builder
      .pivotTo("office")
      .where({ name: "first" })
      .where({ name: "second" });

    const def = result.toObjectSetDef();
    expect(def.where).toEqual({ name: "second" });
  });
});
