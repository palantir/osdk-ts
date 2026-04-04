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

import type { ObjectOrInterfaceDefinition, Osdk } from "@osdk/api";
import type { ShapePropertyConfig } from "@osdk/api/shapes-internal";
import type { ShapeDefinition } from "@osdk/api/unstable";
import { describe, expect, it } from "vitest";
import {
  applyShapeTransformations,
  applyShapeTransformationsToArray,
} from "./applyShapeTransformations.js";

type MockShape = ShapeDefinition<ObjectOrInterfaceDefinition>;

function createMockShape(
  props: Record<string, ShapePropertyConfig>,
): MockShape {
  return {
    __shapeId: "test-shape",
    __debugName: "TestShape",
    __baseType: { apiName: "TestType" } as ObjectOrInterfaceDefinition,
    __baseTypeApiName: "TestType",
    __props: Object.freeze(props),
    __derivedLinks: Object.freeze([]),
    __selectedPropsType: {},
    __derivedLinksType: {},
  } as unknown as MockShape;
}

function createMockObject(
  properties: Record<string, unknown>,
  primaryKey: string | number = "pk1",
) {
  const obj = {
    $primaryKey: primaryKey,
    $objectType: "TestType",
    $apiName: "TestType",
    ...properties,
    $clone(overrides: Record<string, unknown>) {
      return createMockObject({ ...properties, ...overrides }, primaryKey);
    },
  };
  return obj as unknown as Osdk.Instance<ObjectOrInterfaceDefinition>;
}

describe("applyShapeTransformations", () => {
  it("returns undefined input unchanged", () => {
    const shape = createMockShape({
      name: { nullabilityOp: { type: "select" } },
    });
    const result = applyShapeTransformations(shape, undefined);
    expect(result.data).toBeUndefined();
    expect(result.dropped).toBe(false);
    expect(result.violations).toEqual([]);
  });

  it("require op returns violations when null", () => {
    const shape = createMockShape({
      name: { nullabilityOp: { type: "require" } },
    });
    const obj = createMockObject({ name: null });
    const result = applyShapeTransformations(shape, obj);
    expect(result.data).toBeUndefined();
    expect(result.dropped).toBe(false);
    expect(result.violations).toEqual([
      { property: "name", primaryKey: "pk1", constraint: "require" },
    ]);
  });

  it("dropIfNull op drops object when null", () => {
    const shape = createMockShape({
      name: { nullabilityOp: { type: "dropIfNull" } },
    });
    const obj = createMockObject({ name: null });
    const result = applyShapeTransformations(shape, obj);
    expect(result.data).toBeUndefined();
    expect(result.dropped).toBe(true);
    expect(result.violations).toEqual([
      { property: "name", primaryKey: "pk1", constraint: "dropIfNull" },
    ]);
  });

  it("withDefault op applies default when null", () => {
    const shape = createMockShape({
      city: { nullabilityOp: { type: "withDefault", defaultValue: "Unknown" } },
    });
    const obj = createMockObject({ city: null });
    const result = applyShapeTransformations(shape, obj);
    expect(result.data).toBeDefined();
    expect((result.data as Record<string, unknown>).city).toBe("Unknown");
  });

  it("withTransform op applies transform function to value", () => {
    const shape = createMockShape({
      name: {
        nullabilityOp: {
          type: "withTransform",
          transform: (v: unknown) => String(v).toUpperCase(),
        },
      },
    });
    const obj = createMockObject({ name: "alice" });
    const result = applyShapeTransformations(shape, obj);
    expect(result.data).toBeDefined();
    expect((result.data as Record<string, unknown>).name).toBe("ALICE");
  });

  it("require is checked AFTER withDefault", () => {
    const shape = createMockShape({
      city: { nullabilityOp: { type: "withDefault", defaultValue: "Unknown" } },
      name: { nullabilityOp: { type: "require" } },
    });
    const obj = createMockObject({ city: null, name: "Alice" });
    const result = applyShapeTransformations(shape, obj);
    expect(result.data).toBeDefined();
    expect((result.data as Record<string, unknown>).city).toBe("Unknown");
    expect(result.violations).toEqual([]);
  });

  it("require is checked AFTER withTransform", () => {
    const shape = createMockShape({
      name: {
        nullabilityOp: { type: "withTransform", transform: () => "filled" },
      },
      age: { nullabilityOp: { type: "require" } },
    });
    const obj = createMockObject({ name: null, age: 25 });
    const result = applyShapeTransformations(shape, obj);
    expect(result.data).toBeDefined();
    expect((result.data as Record<string, unknown>).name).toBe("filled");
    expect(result.violations).toEqual([]);
  });

  it("withTransform error returns transformError violation", () => {
    const shape = createMockShape({
      name: {
        nullabilityOp: {
          type: "withTransform",
          transform: () => {
            throw new Error("boom");
          },
        },
      },
    });
    const obj = createMockObject({ name: "Alice" });
    const result = applyShapeTransformations(shape, obj);
    expect(result.data).toBeUndefined();
    expect(result.dropped).toBe(false);
    expect(result.violations).toEqual([
      { property: "name", primaryKey: "pk1", constraint: "transformError" },
    ]);
  });
});

describe("applyShapeTransformationsToArray", () => {
  it("filters dropped objects, accumulates violations, and counts correctly", () => {
    const shape = createMockShape({
      name: { nullabilityOp: { type: "dropIfNull" } },
    });
    const objects = [
      createMockObject({ name: "Alice" }, "pk1"),
      createMockObject({ name: null }, "pk2"),
      createMockObject({ name: "Bob" }, "pk3"),
      createMockObject({ name: null }, "pk4"),
    ];
    const result = applyShapeTransformationsToArray(shape, objects);
    expect(result.data).toHaveLength(2);
    expect(result.droppedCount).toBe(2);
    expect(result.violations).toHaveLength(2);
    expect(result.violations[0].primaryKey).toBe("pk2");
    expect(result.violations[1].primaryKey).toBe("pk4");
  });

  it("transform error in one object does not crash processing of other objects", () => {
    let callCount = 0;
    const shape = createMockShape({
      name: {
        nullabilityOp: {
          type: "withTransform",
          transform: (v: unknown) => {
            callCount++;
            if (callCount === 2) {
              throw new Error("boom on second");
            }
            return String(v).toUpperCase();
          },
        },
      },
    });
    const objects = [
      createMockObject({ name: "alice" }, "pk1"),
      createMockObject({ name: "bob" }, "pk2"),
      createMockObject({ name: "carol" }, "pk3"),
    ];
    const result = applyShapeTransformationsToArray(shape, objects);
    expect(result.data).toHaveLength(2);
    expect((result.data[0] as Record<string, unknown>).name).toBe("ALICE");
    expect((result.data[1] as Record<string, unknown>).name).toBe("CAROL");
    expect(result.violations).toHaveLength(1);
    expect(result.violations[0]).toEqual({
      property: "name",
      primaryKey: "pk2",
      constraint: "transformError",
    });
  });
});
