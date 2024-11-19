/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type {
  DeriveClause,
  ObjectOrInterfaceDefinition,
  WhereClause,
} from "@osdk/api";
import type {
  Employee,
  objectTypeWithAllPropertyTypes,
} from "@osdk/client.test.ontology";
import type { ObjectSet as WireObjectSet } from "@osdk/internal.foundry.core";
import { expectType } from "ts-expect";
import { describe, expect, it } from "vitest";
import { deriveClauseToWireDefinition } from "./deriveClauseToWireDefinition.js";

type ObjAllProps = objectTypeWithAllPropertyTypes;
describe(deriveClauseToWireDefinition, () => {
  const objSet = {} as WireObjectSet;
  describe("Selected Derived Properties", () => {
    it("should correctly derive a simple selected derived property", () => {
      const clause: DeriveClause<Employee> = {
        // @ts-expect-error
        "newSelectedProp": { "lead": "fullName" },
      };
      const derivedProperty = deriveClauseToWireDefinition(clause, objSet);
      expect(derivedProperty).toMatchInlineSnapshot(
        `
        {
          "newSelectedProp": {
            "objectSet": {
              "link": "lead",
              "objectSet": {},
              "type": "searchAround",
            },
            "operation": {
              "selectedPropertyApiName": "fullName",
              "type": "get",
            },
            "type": "selection",
          },
        }
      `,
      );
    });
    it("should not allow multiple keys in a derived property", () => {});
  });

  describe("Aggregated Derived Properties", () => {
    it("should correctly derive a count aggregation property", () => {
      const clause: DeriveClause<Employee> = {
        "newAggregatedProp": { "$count": "peeps" },
      };
      const derivedProperty = deriveClauseToWireDefinition(clause, objSet);
      expect(derivedProperty).toMatchInlineSnapshot(
        `
        {
          "newAggregatedProp": {
            "objectSet": {
              "link": "peeps",
              "objectSet": {},
              "type": "searchAround",
            },
            "operation": {
              "type": "count",
            },
            "type": "selection",
          },
        }
      `,
      );
    });
    it("should correctly derive a standard numeric aggregation property", () => {
      const clause: DeriveClause<Employee> = {
        // @ts-expect-error
        "newAggregatedProp": { "$max": { "lead": "employeeId" } },
      };
      const derivedProperty = deriveClauseToWireDefinition(clause, objSet);
      expect(derivedProperty).toMatchInlineSnapshot(
        `
        {
          "newAggregatedProp": {
            "objectSet": {
              "link": "lead",
              "objectSet": {},
              "type": "searchAround",
            },
            "operation": {
              "selectedPropertyApiName": "employeeId",
              "type": "max",
            },
            "type": "selection",
          },
        }
      `,
      );
    });
  });

  describe("Calculated Derived Properties", () => {
  });

  describe("Native Derived Properties", () => {
  });
});
