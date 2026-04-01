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
import { configToShapeDefinition } from "./configToShapeDefinition.js";
import type {
  ShapeDefinition,
  ShapePropertyConfig,
} from "./ShapeDefinition.js";

const MockEmployee = {
  type: "object",
  apiName: "Employee",
} as ObjectTypeDefinition;

describe("configToShapeDefinition", () => {
  it("maps require/select/dropIfNull to correct nullability ops", () => {
    const shape = configToShapeDefinition(MockEmployee, {
      require: ["name"] as any,
      select: ["age"] as any,
      dropIfNull: ["role"] as any,
    });

    const props = shape.__props as Record<string, ShapePropertyConfig>;
    expect(props.name.nullabilityOp.type).toBe("require");
    expect(props.age.nullabilityOp.type).toBe("select");
    expect(props.role.nullabilityOp.type).toBe("dropIfNull");
  });

  it("maps defaults to withDefault ops", () => {
    const shape = configToShapeDefinition(MockEmployee, {
      defaults: { role: "Unknown" } as any,
    });

    const props = shape.__props as Record<string, ShapePropertyConfig>;
    expect(props.role.nullabilityOp).toEqual({
      type: "withDefault",
      defaultValue: "Unknown",
    });
  });

  it("maps transforms to withTransform ops", () => {
    const fn = (v: unknown) => String(v).toUpperCase();
    const shape = configToShapeDefinition(MockEmployee, {
      transforms: { name: fn } as any,
    });

    const props = shape.__props as Record<string, ShapePropertyConfig>;
    expect(props.name.nullabilityOp.type).toBe("withTransform");
  });

  it("throws on duplicate property across config arrays", () => {
    expect(() =>
      configToShapeDefinition(MockEmployee, {
        require: ["name"] as any,
        select: ["name"] as any,
      })
    ).toThrow("Property \"name\" appears in multiple config arrays");
  });

  it("throws on non-function transform", () => {
    expect(() =>
      configToShapeDefinition(MockEmployee, {
        transforms: { name: "not a function" } as any,
      })
    ).toThrow("transforms[\"name\"] must be a function");
  });

  it("wires link via traversal and target shape", () => {
    const targetShape = configToShapeDefinition(MockEmployee, {
      select: ["name"] as any,
    });

    const shape = configToShapeDefinition(MockEmployee, {
      links: {
        offices: {
          via: (b: any) => b.pivotTo("office"),
          target: targetShape as ShapeDefinition<any>,
        },
      },
    });

    expect(shape.__derivedLinks).toHaveLength(1);
    const link = shape.__derivedLinks[0] as any;
    expect(link.name).toBe("offices");
    expect(link.objectSetDef.segments[0].linkName).toBe("office");
    expect(link.targetShape.__shapeId).toBe(targetShape.__shapeId);
  });

  it("produces a deterministic shapeId", () => {
    const a = configToShapeDefinition(MockEmployee, {
      require: ["name"] as any,
    });
    const b = configToShapeDefinition(MockEmployee, {
      require: ["name"] as any,
    });
    expect(a.__shapeId).toBe(b.__shapeId);
  });
});
