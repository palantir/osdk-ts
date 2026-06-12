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
import { createLinkDef } from "../links/createLinkDef.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import { configToShapeDefinition } from "./configToShapeDefinition.js";
import type {
  ShapeDefinition,
  ShapeDerivedLinkDef,
  ShapePropertyConfig,
} from "./ShapeDefinition.js";

const MockEmployee = {
  type: "object",
  apiName: "Employee",
} as ObjectTypeDefinition;

const MockOffice = {
  type: "object",
  apiName: "Office",
} as ObjectTypeDefinition;

const MockPerson = {
  type: "object",
  apiName: "Person",
} as ObjectTypeDefinition;

const MockOperation = {
  type: "object",
  apiName: "Operation",
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

  it("maps fallbacks to withDefault ops", () => {
    const shape = configToShapeDefinition(MockEmployee, {
      fallbacks: { role: "TBD" } as any,
    });

    const props = shape.__props as Record<string, ShapePropertyConfig>;
    expect(props.role.nullabilityOp).toEqual({
      type: "withDefault",
      defaultValue: "TBD",
    });
  });

  it("throws when a property appears in both defaults and fallbacks", () => {
    expect(() =>
      configToShapeDefinition(MockEmployee, {
        defaults: { role: "Unknown" } as any,
        fallbacks: { role: "TBD" } as any,
      })
    ).toThrow("Property \"role\" appears in multiple config arrays");
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

  it("compiles a single-hop follow entry into a derived link", () => {
    const SlimOffice = configToShapeDefinition(MockOffice, {
      select: ["name"] as any,
    });

    const shape = configToShapeDefinition(MockEmployee, {
      follow: {
        office: createLinkDef("Employee", "office", "Office", false, false)
          .project(SlimOffice as ShapeDefinition<any>),
      },
    });

    expect(shape.__derivedLinks).toHaveLength(1);
    const link = shape.__derivedLinks[0] as ShapeDerivedLinkDef;
    expect(link.name).toBe("office");
    expect(link.objectSetDef.segments).toHaveLength(1);
    expect(link.objectSetDef.segments[0].type).toBe("pivotTo");
    expect(link.objectSetDef.segments[0].linkName).toBe("office");
    expect(link.targetShape.__shapeId).toBe(SlimOffice.__shapeId);
  });

  it("compiles a multi-hop follow path into pivotTo segments", () => {
    const SlimPerson = configToShapeDefinition(MockPerson, {
      select: ["name"] as any,
    });

    const shape = configToShapeDefinition(MockEmployee, {
      follow: {
        managerOfOffice: createLinkDef(
          "Employee",
          "office",
          "Office",
          false,
          false,
        )
          .then(createLinkDef("Office", "manager", "Person", false, false))
          .project(SlimPerson as ShapeDefinition<any>),
      },
    });

    expect(shape.__derivedLinks).toHaveLength(1);
    const link = shape.__derivedLinks[0] as ShapeDerivedLinkDef;
    expect(link.name).toBe("managerOfOffice");
    expect(link.objectSetDef.segments).toHaveLength(2);
    expect(link.objectSetDef.segments[0].type).toBe("pivotTo");
    expect(link.objectSetDef.segments[0].linkName).toBe("office");
    expect(link.objectSetDef.segments[1].type).toBe("pivotTo");
    expect(link.objectSetDef.segments[1].linkName).toBe("manager");
    expect(link.targetShape.__shapeId).toBe(SlimPerson.__shapeId);
  });

  it("compiles a recursive follow entry into a recursive object set def", () => {
    const SlimOp = configToShapeDefinition(MockOperation, {
      select: ["name"] as any,
    });

    const shape = configToShapeDefinition(MockOperation, {
      follow: {
        descendants: createLinkDef(
          "Operation",
          "subOperations",
          "Operation",
          true,
          false,
        )
          .recursive({ maxDepth: 3 })
          .project(SlimOp as ShapeDefinition<any>),
      },
    });

    expect(shape.__derivedLinks).toHaveLength(1);
    const link = shape.__derivedLinks[0] as ShapeDerivedLinkDef;
    expect(link.name).toBe("descendants");
    expect(link.objectSetDef.segments).toHaveLength(1);
    expect(link.objectSetDef.segments[0].linkName).toBe("subOperations");
    expect(link.objectSetDef.recursive).toEqual({
      maxDepth: 3,
      maxNodes: 1000,
    });
    expect(link.targetShape.__shapeId).toBe(SlimOp.__shapeId);
  });

  it("defaults a non-projected recursive follow to a minimal shape", () => {
    const parent = configToShapeDefinition(MockOperation, {
      require: ["name"] as any,
    });

    const shape = configToShapeDefinition(MockOperation, {
      require: ["name"] as any,
      follow: {
        descendants: createLinkDef(
          "Operation",
          "subOperations",
          "Operation",
          true,
          false,
        ).recursive({ maxDepth: 3 }),
      },
    });

    expect(shape.__derivedLinks).toHaveLength(1);
    const link = shape.__derivedLinks[0] as ShapeDerivedLinkDef;
    expect(link.name).toBe("descendants");
    expect(link.objectSetDef.recursive).toEqual({
      maxDepth: 3,
      maxNodes: 1000,
    });

    const target = link.targetShape;
    expect(target.__baseTypeApiName).toBe("Operation");
    expect(Object.keys(target.__props)).toHaveLength(0);
    expect(target.__derivedLinks).toHaveLength(0);
    expect(target.__shapeId).not.toBe(parent.__shapeId);
  });

  it("throws when a non-recursive follow entry is not projected", () => {
    expect(() =>
      configToShapeDefinition(MockEmployee, {
        follow: {
          office: createLinkDef("Employee", "office", "Office", false, false),
        },
      })
    ).toThrow("follow[\"office\"] must be projected with .project(shape)");
  });

  it("distinguishes shapeIds by recursive options", () => {
    const SlimOp = configToShapeDefinition(MockOperation, {
      select: ["name"] as any,
    });
    const make = (maxDepth: number) =>
      configToShapeDefinition(MockOperation, {
        follow: {
          descendants: createLinkDef(
            "Operation",
            "subOperations",
            "Operation",
            true,
            false,
          )
            .recursive({ maxDepth })
            .project(SlimOp as ShapeDefinition<any>),
        },
      });

    expect(make(3).__shapeId).not.toBe(make(5).__shapeId);
    expect(make(3).__shapeId).toBe(make(3).__shapeId);
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
