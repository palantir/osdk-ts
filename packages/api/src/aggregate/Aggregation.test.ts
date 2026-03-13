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

import { describe, expectTypeOf, it } from "vitest";
import type { GroupByClause } from "../groupby/GroupByClause.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { BaseWirePropertyTypes } from "../ontology/WirePropertyTypes.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import type { AGG_FOR_TYPE, StructPropertyKeys } from "./AggregatableKeys.js";
import type {
  OrderedAggregationClauseWithStructs,
  UnorderedAggregationClauseWithStructs,
} from "./AggregationsClause.js";

describe("StructPropertyKeys", () => {
  it("extracts struct property keys from object type", () => {
    type Keys = StructPropertyKeys<typeof EmployeeApiTest>;
    expectTypeOf<Keys>().toEqualTypeOf<"addressStruct">();
  });

  it("struct property has correct type in metadata", () => {
    type AddressType = CompileTimeMetadata<
      typeof EmployeeApiTest
    >["properties"]["addressStruct"]["type"];
    expectTypeOf<AddressType>().toEqualTypeOf<{
      city: "string";
      zipCode: "string";
      yearsAtAddress: "integer";
    }>();
  });
});

describe("GroupByClause with structs", () => {
  it("struct keys are correctly identified", () => {
    type StructKeys = StructPropertyKeys<typeof EmployeeApiTest>;
    const key: StructKeys = "addressStruct";
    expectTypeOf<StructKeys>().toEqualTypeOf<"addressStruct">();
  });

  it("allows nested struct groupBy syntax", () => {
    type Clause = GroupByClause<typeof EmployeeApiTest>;
    type AddressValue = Clause["addressStruct"];
    const clause: Clause = {
      addressStruct: {
        city: "exact",
      },
    };
    expectTypeOf(clause).toMatchTypeOf<Clause>();
  });

  it("allows struct field with $exactWithLimit", () => {
    type Clause = GroupByClause<typeof EmployeeApiTest>;
    const clause: Clause = {
      addressStruct: {
        city: { $exactWithLimit: 10 },
      },
    };
    expectTypeOf(clause).toMatchTypeOf<Clause>();
  });

  it("allows mixing struct and non-struct groupBy", () => {
    type Clause = GroupByClause<typeof EmployeeApiTest>;
    const clause: Clause = {
      fullName: "exact",
      addressStruct: {
        city: "exact",
      },
    };
    expectTypeOf(clause).toMatchTypeOf<Clause>();
  });

  it("allows numeric struct field groupBy options", () => {
    type Clause = GroupByClause<typeof EmployeeApiTest>;
    const clause: Clause = {
      addressStruct: {
        yearsAtAddress: { $fixedWidth: 5 },
      },
    };
    expectTypeOf(clause).toMatchTypeOf<Clause>();
  });
});

describe("AggregationClause with structs", () => {
  it("struct aggregation types resolve correctly", () => {
    type AddressType = CompileTimeMetadata<
      typeof EmployeeApiTest
    >["properties"]["addressStruct"]["type"];
    type CityAggType = AGG_FOR_TYPE<"string">;
    type YearsAggType = AGG_FOR_TYPE<"integer">;

    type IsRecord = AddressType extends Record<string, BaseWirePropertyTypes>
      ? true
      : false;
    expectTypeOf<IsRecord>().toEqualTypeOf<true>();

    expectTypeOf<CityAggType>().toEqualTypeOf<
      "approximateDistinct" | "exactDistinct"
    >();
    expectTypeOf<YearsAggType>().toEqualTypeOf<
      "sum" | "avg" | "approximateDistinct" | "exactDistinct" | "min" | "max"
    >();
  });

  it("allows nested struct select syntax", () => {
    type Clause = UnorderedAggregationClauseWithStructs<typeof EmployeeApiTest>;
    const clause: Clause = {
      $count: "unordered",
      addressStruct: {
        "city:approximateDistinct": "unordered",
      },
    };
    expectTypeOf(clause).toMatchTypeOf<Clause>();
  });

  it("allows ordered struct select syntax", () => {
    type Clause = OrderedAggregationClauseWithStructs<typeof EmployeeApiTest>;
    const clause: Clause = {
      $count: "asc",
      addressStruct: {
        "city:approximateDistinct": "desc",
      },
    };
    expectTypeOf(clause).toMatchTypeOf<Clause>();
  });

  it("allows mixing struct and non-struct select", () => {
    type Clause = UnorderedAggregationClauseWithStructs<typeof EmployeeApiTest>;
    const clause: Clause = {
      $count: "unordered",
      "fullName:approximateDistinct": "unordered",
      addressStruct: {
        "city:exactDistinct": "unordered",
      },
    };
    expectTypeOf(clause).toMatchTypeOf<Clause>();
  });

  it("allows numeric aggregations on struct numeric fields", () => {
    type Clause = UnorderedAggregationClauseWithStructs<typeof EmployeeApiTest>;
    const clause: Clause = {
      addressStruct: {
        "yearsAtAddress:sum": "unordered",
        "yearsAtAddress:avg": "unordered",
        "yearsAtAddress:min": "unordered",
        "yearsAtAddress:max": "unordered",
      },
    };
    expectTypeOf(clause).toMatchTypeOf<Clause>();
  });
});
