/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import type {
  AgentDataTypeDefinition,
  ObjectAgentDataType,
  ObjectSetAgentDataType,
} from "./AgentDefinition.js";

describe("AgentDataTypeDefinition", () => {
  it("preserves a caller's target type for objects and object sets", () => {
    type Schema = AgentDataTypeDefinition<EmployeeApiTest>;
    type ObjectSchema = Extract<Schema, { type: "object" }>;
    type ObjectSetSchema = Extract<Schema, { type: "objectSet" }>;

    expectTypeOf<ObjectSchema["__OsdkTargetType"]>().toEqualTypeOf<
      EmployeeApiTest | undefined
    >();
    expectTypeOf<ObjectSetSchema["__OsdkTargetType"]>().toEqualTypeOf<
      EmployeeApiTest | undefined
    >();
  });

  it("defaults the schema union's target to any", () => {
    type ObjectSchema = Extract<AgentDataTypeDefinition, { type: "object" }>;
    type ObjectSetSchema = Extract<
      AgentDataTypeDefinition,
      { type: "objectSet" }
    >;

    expectTypeOf<ObjectSchema["__OsdkTargetType"]>().toBeAny();
    expectTypeOf<ObjectSetSchema["__OsdkTargetType"]>().toBeAny();
  });

  it("does not assume a target for standalone object schemas", () => {
    expectTypeOf<
      ObjectAgentDataType["__OsdkTargetType"]
    >().toEqualTypeOf<undefined>();
    expectTypeOf<
      ObjectSetAgentDataType["__OsdkTargetType"]
    >().toEqualTypeOf<undefined>();
  });
});
