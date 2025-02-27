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

import { describe, expectTypeOf, it, test } from "vitest";
import type { PropertyDef } from "./ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "./SimplePropertyDef.js";

describe("Type conversion", () => {
  test("SimplePropertyDef.ExtractMultiplicity", () => {
    expectTypeOf<SimplePropertyDef.ExtractMultiplicity<"string"[]>>()
      .toEqualTypeOf<"array">();
    expectTypeOf<
      SimplePropertyDef.ExtractMultiplicity<"string"[] | undefined>
    >()
      .toEqualTypeOf<"array">();

    expectTypeOf<SimplePropertyDef.ExtractMultiplicity<"string">>()
      .toEqualTypeOf<"single">();
    expectTypeOf<SimplePropertyDef.ExtractMultiplicity<"string" | undefined>>()
      .toEqualTypeOf<"single">();
  });

  test("SimplePropertyDef.ExtractNullable", () => {
    expectTypeOf<SimplePropertyDef.ExtractNullable<"string"[]>>()
      .toEqualTypeOf<"non-nullable">();
    expectTypeOf<SimplePropertyDef.ExtractNullable<"string"[] | undefined>>()
      .toEqualTypeOf<"nullable">();
    expectTypeOf<SimplePropertyDef.ExtractNullable<"string">>()
      .toEqualTypeOf<"non-nullable">();
    expectTypeOf<SimplePropertyDef.ExtractNullable<"string" | undefined>>()
      .toEqualTypeOf<"nullable">();
  });

  test("SimplePropertyDef.ExtractWirePropertyType", () => {
    expectTypeOf<SimplePropertyDef.ExtractWirePropertyType<"string"[]>>()
      .toEqualTypeOf<"string">();
    expectTypeOf<
      SimplePropertyDef.ExtractWirePropertyType<"string"[] | undefined>
    >()
      .toEqualTypeOf<"string">();
    expectTypeOf<SimplePropertyDef.ExtractWirePropertyType<"string">>()
      .toEqualTypeOf<"string">();
    expectTypeOf<
      SimplePropertyDef.ExtractWirePropertyType<"string" | undefined>
    >()
      .toEqualTypeOf<"string">();
  });

  it("SimplePropertyDef.FromPropertyMetadata", () => {
    expectTypeOf<
      SimplePropertyDef.FromPropertyMetadata<
        PropertyDef<"string", "nullable", "array">
      >
    >()
      .toEqualTypeOf<"string"[] | undefined>();

    expectTypeOf<
      SimplePropertyDef.FromPropertyMetadata<
        PropertyDef<"string", "non-nullable", "array">
      >
    >()
      .toEqualTypeOf<"string"[]>();

    expectTypeOf<
      SimplePropertyDef.FromPropertyMetadata<
        PropertyDef<"string", "non-nullable", "single">
      >
    >()
      .toEqualTypeOf<"string">();

    expectTypeOf<
      SimplePropertyDef.FromPropertyMetadata<
        PropertyDef<"string", "nullable", "single">
      >
    >()
      .toEqualTypeOf<"string" | undefined>();
  });

  test(".ToRuntimeProperty", () => {
    expectTypeOf<SimplePropertyDef.ToRuntimeProperty<"string">>()
      .toEqualTypeOf<string>();

    expectTypeOf<SimplePropertyDef.ToRuntimeProperty<"string" | undefined>>()
      .toEqualTypeOf<string | undefined>();
  });
});
