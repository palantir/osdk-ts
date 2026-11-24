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

import type { AgentParam, AgentResult } from "../public/unstable.js";

describe("agent primitive types", () => {
  type Expected = {
    boolean: boolean;
    date: string;
    float: number;
    double: number;
    integer: number;
    long: number;
    short: number;
    string: string;
    timestamp: string;
  };

  it("maps input primitives to their accepted values", () => {
    type Actual = { [T in keyof Expected]: AgentParam.PrimitiveType<T> };

    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  it("maps output primitives to their returned values", () => {
    type Actual = { [T in keyof Expected]: AgentResult.PrimitiveType<T> };

    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  it("maps input primitive unions to their accepted values", () => {
    type Actual = AgentParam.PrimitiveType<"long" | "boolean">;

    expectTypeOf<Actual>().toEqualTypeOf<number | boolean>();
  });

  it("maps output primitive unions to their returned values", () => {
    type Actual = AgentResult.PrimitiveType<"long" | "boolean">;

    expectTypeOf<Actual>().toEqualTypeOf<number | boolean>();
  });

  it("rejects unsupported primitive names", () => {
    // @ts-expect-error Agents do not support decimal primitives.
    expectTypeOf<AgentParam.PrimitiveType<"decimal">>();
    // @ts-expect-error Agents do not support decimal primitives.
    expectTypeOf<AgentResult.PrimitiveType<"decimal">>();
    // @ts-expect-error Agents do not support attachments.
    expectTypeOf<AgentParam.PrimitiveType<"attachment">>();
    // @ts-expect-error Agents do not support attachments.
    expectTypeOf<AgentResult.PrimitiveType<"attachment">>();
    // @ts-expect-error Agents do not support media references.
    expectTypeOf<AgentParam.PrimitiveType<"mediaReference">>();
    // @ts-expect-error Agents do not support media references.
    expectTypeOf<AgentResult.PrimitiveType<"mediaReference">>();
    // @ts-expect-error Agents do not support aggregations.
    expectTypeOf<AgentParam.PrimitiveType<"twoDimensionalAggregation">>();
    // @ts-expect-error Agents do not support aggregations.
    expectTypeOf<AgentResult.PrimitiveType<"twoDimensionalAggregation">>();
    // @ts-expect-error Primitive names must be known.
    expectTypeOf<AgentParam.PrimitiveType<string>>();
    // @ts-expect-error Primitive names must be known.
    expectTypeOf<AgentResult.PrimitiveType<string>>();
  });
});
