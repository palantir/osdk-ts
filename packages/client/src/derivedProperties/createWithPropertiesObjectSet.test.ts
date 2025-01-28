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
import type { DerivedPropertyDefinition } from "@osdk/internal.foundry.core";
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

  it("correctly handles multiple definitions in one clause", () => {
    const map = new Map<any, DerivedPropertyDefinition>();
    const deriveObjectSet = createWithPropertiesObjectSet(Employee, {
      type: "methodInput",
    }, map);

    const clause: DerivedProperty.Clause<Employee> = {
      "derivedPropertyName": (base) =>
        base.pivotTo("lead").aggregate("startDate:approximatePercentile", {
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
            "selectedPropertyApiName": "startDate",
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
});
