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
import { computeShapeId } from "./computeShapeId.js";
import type {
  ShapeDerivedLinkDef,
  ShapePropertyConfig,
} from "./ShapeDefinition.js";

function makeInput(
  overrides: {
    baseTypeApiName?: string;
    props?: Record<string, ShapePropertyConfig>;
    derivedLinks?: readonly ShapeDerivedLinkDef[];
  } = {},
) {
  return {
    baseTypeApiName: overrides.baseTypeApiName ?? "Employee",
    props: overrides.props ?? {},
    derivedLinks: overrides.derivedLinks ?? [],
  };
}

describe("computeShapeId", () => {
  it("returns a deterministic 8-char hex string", () => {
    const id = computeShapeId(makeInput());
    expect(id).toMatch(/^[0-9a-f]{8}$/);
    expect(computeShapeId(makeInput())).toBe(id);
  });

  it("differs for different base types", () => {
    const a = computeShapeId(makeInput({ baseTypeApiName: "Employee" }));
    const b = computeShapeId(makeInput({ baseTypeApiName: "Office" }));
    expect(a).not.toBe(b);
  });

  it("differs for different property selections", () => {
    const a = computeShapeId(makeInput({
      props: { name: { nullabilityOp: { type: "select" } } },
    }));
    const b = computeShapeId(makeInput({
      props: { age: { nullabilityOp: { type: "select" } } },
    }));
    expect(a).not.toBe(b);
  });

  it("differs for different nullability ops on the same property", () => {
    const a = computeShapeId(makeInput({
      props: { name: { nullabilityOp: { type: "select" } } },
    }));
    const b = computeShapeId(makeInput({
      props: { name: { nullabilityOp: { type: "require" } } },
    }));
    expect(a).not.toBe(b);
  });

  it("differs for different default values on the same property", () => {
    const a = computeShapeId(makeInput({
      props: {
        age: { nullabilityOp: { type: "withDefault", defaultValue: 0 } },
      },
    }));
    const b = computeShapeId(makeInput({
      props: {
        age: { nullabilityOp: { type: "withDefault", defaultValue: 18 } },
      },
    }));
    expect(a).not.toBe(b);
  });

  it("is stable regardless of property insertion order", () => {
    const a = computeShapeId(makeInput({
      props: {
        name: { nullabilityOp: { type: "select" } },
        age: { nullabilityOp: { type: "require" } },
      },
    }));
    const b = computeShapeId(makeInput({
      props: {
        age: { nullabilityOp: { type: "require" } },
        name: { nullabilityOp: { type: "select" } },
      },
    }));
    expect(a).toBe(b);
  });

  it("differs when derived links differ", () => {
    const linkA: ShapeDerivedLinkDef = {
      name: "offices",
      objectSetDef: {
        segments: [{ type: "pivotTo", linkName: "office" }],
      },
      targetShape: { __shapeId: "aaa" } as ShapeDerivedLinkDef["targetShape"],
      config: {},
    };
    const linkB: ShapeDerivedLinkDef = {
      name: "offices",
      objectSetDef: {
        segments: [{ type: "pivotTo", linkName: "office" }],
      },
      targetShape: { __shapeId: "bbb" } as ShapeDerivedLinkDef["targetShape"],
      config: {},
    };
    const a = computeShapeId(makeInput({ derivedLinks: [linkA] }));
    const b = computeShapeId(makeInput({ derivedLinks: [linkB] }));
    expect(a).not.toBe(b);
  });

  it("is stable regardless of derived link order", () => {
    const linkA: ShapeDerivedLinkDef = {
      name: "alpha",
      objectSetDef: {
        segments: [{ type: "pivotTo", linkName: "a" }],
      },
      targetShape: { __shapeId: "aaa" } as ShapeDerivedLinkDef["targetShape"],
      config: {},
    };
    const linkB: ShapeDerivedLinkDef = {
      name: "beta",
      objectSetDef: {
        segments: [{ type: "pivotTo", linkName: "b" }],
      },
      targetShape: { __shapeId: "bbb" } as ShapeDerivedLinkDef["targetShape"],
      config: {},
    };
    const a = computeShapeId(makeInput({ derivedLinks: [linkA, linkB] }));
    const b = computeShapeId(makeInput({ derivedLinks: [linkB, linkA] }));
    expect(a).toBe(b);
  });
});
