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

import type { DerivedProperty } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { createWithPropertiesObjectSet } from "./createWithPropertiesObjectSet.js";

describe(createWithPropertiesObjectSet, () => {
  it("correctly creates basic object set with derived properties", () => {
    const map = new Map<any, DerivedPropertyDefinition>();
    const deriveObjectSet = createWithPropertiesObjectSet(Employee, {
      type: "methodInput",
    }, map);

    const clause = {
      "derivedPropertyName": (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
    } satisfies DerivedProperty.Clause<Employee>;

    const result = clause["derivedPropertyName"](deriveObjectSet);
    const definition = map.get(result);
    expect(definition).toMatchInlineSnapshot(`
        {
          "objectSet": {
            "link": "lead",
            "objectSet": {
              "type": "methodInput",
            },
            "type": "searchAround",
          },
          "operation": {
            "selectedPropertyApiName": "employeeId",
            "type": "get",
          },
          "type": "selection",
        }
      `);
  });

  it("correctly allows select property off the base object set", () => {
    const map = new Map<any, DerivedPropertyDefinition>();
    const deriveObjectSet = createWithPropertiesObjectSet(
      Employee,
      {
        type: "methodInput",
      },
      map,
      true,
    );

    const clause = {
      "derivedPropertyName": (base) => base.selectProperty("employeeId"),
    } satisfies DerivedProperty.Clause<Employee>;

    const result = clause["derivedPropertyName"](deriveObjectSet);
    const definition = map.get(result);
    expect(definition).toMatchInlineSnapshot(`
      {
        "apiName": "employeeId",
        "type": "property",
      }
    `);
  });

  it("correctly handles multiple definitions in one clause", () => {
    const map = new Map<any, DerivedPropertyDefinition>();
    const deriveObjectSet = createWithPropertiesObjectSet(Employee, {
      type: "methodInput",
    }, map);

    const clause: DerivedProperty.Clause<Employee> = {
      "derivedPropertyName": (base) =>
        base.pivotTo("lead").aggregate("employeeId:approximatePercentile", {
          percentile: 0.5,
        }),

      "secondaryDerivedPropertyName": (base) =>
        base.pivotTo("lead").aggregate("fullName:collectSet", {
          limit: 10,
        }),
    };

    const result = clause["derivedPropertyName"](deriveObjectSet);
    const definition = map.get(result);

    const secondResult = clause["secondaryDerivedPropertyName"](
      deriveObjectSet,
    );
    const secondDefinition = map.get(secondResult);

    expect(definition).toMatchInlineSnapshot(`
        {
          "objectSet": {
            "link": "lead",
            "objectSet": {
              "type": "methodInput",
            },
            "type": "searchAround",
          },
          "operation": {
            "approximatePercentile": 0.5,
            "selectedPropertyApiName": "employeeId",
            "type": "approximatePercentile",
          },
          "type": "selection",
        }
      `);

    expect(secondDefinition).toMatchInlineSnapshot(`
        {
          "objectSet": {
            "link": "lead",
            "objectSet": {
              "type": "methodInput",
            },
            "type": "searchAround",
          },
          "operation": {
            "limit": 10,
            "selectedPropertyApiName": "fullName",
            "type": "collectSet",
          },
          "type": "selection",
        }
      `);
  });

  describe("expressions", () => {
    it("can handle expressions referencing other property keys", () => {
      const map = new Map<any, DerivedPropertyDefinition>();
      const deriveObjectSet = createWithPropertiesObjectSet(
        Employee,
        {
          type: "methodInput",
        },
        map,
        true,
      );

      const clause: DerivedProperty.Clause<Employee> = {
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId").add(
            base.selectProperty("employeeId"),
          ),
        // "secondaryDerivedPropertyName": (base) =>
        //   base.pivotTo("lead").aggregate("employeeId:avg").divide("employeeId", 2),
      };

      const result = clause["derivedPropertyName"](deriveObjectSet);
      const definition = map.get(result);

      expect(definition).toMatchInlineSnapshot(`
        {
          "properties": [
            {
              "objectSet": {
                "link": "lead",
                "objectSet": {
                  "type": "methodInput",
                },
                "type": "searchAround",
              },
              "operation": {
                "selectedPropertyApiName": "employeeId",
                "type": "get",
              },
              "type": "selection",
            },
            {
              "apiName": "employeeId",
              "type": "property",
            },
          ],
          "type": "add",
        }
      `);
    });

    it("subtract produces correct wire format", () => {
      const map = new Map<any, DerivedPropertyDefinition>();
      const deriveObjectSet = createWithPropertiesObjectSet(
        Employee,
        { type: "methodInput" },
        map,
        true,
      );

      const clause: DerivedProperty.Clause<Employee> = {
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId").subtract(
            base.selectProperty("employeeId"),
          ),
      };

      const result = clause["derivedPropertyName"](deriveObjectSet);
      const definition = map.get(result);

      expect(definition).toMatchInlineSnapshot(`
        {
          "left": {
            "objectSet": {
              "link": "lead",
              "objectSet": {
                "type": "methodInput",
              },
              "type": "searchAround",
            },
            "operation": {
              "selectedPropertyApiName": "employeeId",
              "type": "get",
            },
            "type": "selection",
          },
          "right": {
            "apiName": "employeeId",
            "type": "property",
          },
          "type": "subtract",
        }
      `);
    });

    it("divide produces correct wire format", () => {
      const map = new Map<any, DerivedPropertyDefinition>();
      const deriveObjectSet = createWithPropertiesObjectSet(
        Employee,
        { type: "methodInput" },
        map,
        true,
      );

      const clause: DerivedProperty.Clause<Employee> = {
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId").divide(
            base.selectProperty("employeeId"),
          ),
      };

      const result = clause["derivedPropertyName"](deriveObjectSet);
      const definition = map.get(result);

      expect(definition).toMatchInlineSnapshot(`
        {
          "left": {
            "objectSet": {
              "link": "lead",
              "objectSet": {
                "type": "methodInput",
              },
              "type": "searchAround",
            },
            "operation": {
              "selectedPropertyApiName": "employeeId",
              "type": "get",
            },
            "type": "selection",
          },
          "right": {
            "apiName": "employeeId",
            "type": "property",
          },
          "type": "divide",
        }
      `);
    });

    it("multiply produces correct wire format", () => {
      const map = new Map<any, DerivedPropertyDefinition>();
      const deriveObjectSet = createWithPropertiesObjectSet(
        Employee,
        { type: "methodInput" },
        map,
        true,
      );

      const clause: DerivedProperty.Clause<Employee> = {
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId").multiply(
            base.selectProperty("employeeId"),
          ),
      };

      const result = clause["derivedPropertyName"](deriveObjectSet);
      const definition = map.get(result);

      expect(definition).toMatchInlineSnapshot(`
        {
          "properties": [
            {
              "objectSet": {
                "link": "lead",
                "objectSet": {
                  "type": "methodInput",
                },
                "type": "searchAround",
              },
              "operation": {
                "selectedPropertyApiName": "employeeId",
                "type": "get",
              },
              "type": "selection",
            },
            {
              "apiName": "employeeId",
              "type": "property",
            },
          ],
          "type": "multiply",
        }
      `);
    });

    // TODO: Add test for literal
    it("can handle nested definitions in an expression", () => {
      const map = new Map<any, DerivedPropertyDefinition>();
      const deriveObjectSet = createWithPropertiesObjectSet(Employee, {
        type: "methodInput",
      }, map);

      const clause: DerivedProperty.Clause<Employee> = {
        "derivedPropertyName": (base) =>
          base.pivotTo("lead").selectProperty("employeeId").add(
            base.pivotTo("lead").selectProperty("employeeId"),
          ),
      };

      const result = clause["derivedPropertyName"](deriveObjectSet);
      const definition = map.get(result);

      expect(definition).toMatchInlineSnapshot(`
        {
          "properties": [
            {
              "objectSet": {
                "link": "lead",
                "objectSet": {
                  "type": "methodInput",
                },
                "type": "searchAround",
              },
              "operation": {
                "selectedPropertyApiName": "employeeId",
                "type": "get",
              },
              "type": "selection",
            },
            {
              "objectSet": {
                "link": "lead",
                "objectSet": {
                  "type": "methodInput",
                },
                "type": "searchAround",
              },
              "operation": {
                "selectedPropertyApiName": "employeeId",
                "type": "get",
              },
              "type": "selection",
            },
          ],
          "type": "add",
        }
      `);
    });
  });

  it("handles datetime expressions", () => {
    const map = new Map<any, DerivedPropertyDefinition>();
    const deriveObjectSet = createWithPropertiesObjectSet(Employee, {
      type: "methodInput",
    }, map);

    const clause: DerivedProperty.Clause<Employee> = {
      "derivedPropertyName": (base) =>
        base.pivotTo("lead").selectProperty("startDate").extractPart("MONTHS"),
      "secondaryDerivedPropertyName": (base) =>
        base.pivotTo("lead").selectProperty("startDate").min(
          base.pivotTo("lead").selectProperty("startDate"),
        ),
    };

    const result = clause["derivedPropertyName"](deriveObjectSet);
    const definition = map.get(result);

    expect(definition).toMatchInlineSnapshot(`
      {
        "part": "MONTHS",
        "property": {
          "objectSet": {
            "link": "lead",
            "objectSet": {
              "type": "methodInput",
            },
            "type": "searchAround",
          },
          "operation": {
            "selectedPropertyApiName": "startDate",
            "type": "get",
          },
          "type": "selection",
        },
        "type": "extract",
      }
    `);
  });
});
