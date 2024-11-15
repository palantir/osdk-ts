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

import { describe, expectTypeOf, it } from "vitest";
import type {
  AsyncParameterValueMap,
  ParameterConfig,
  ParameterId,
  ParameterValueMap,
} from "./config.js";
import type {
  BooleanArrayValue,
  BooleanParameterValue,
  NumericParameterValue,
  StringArrayValue,
  StringParameterValue,
} from "./parameters.js";

describe("ParameterConfig", () => {
  describe("ParameterConfigId", () => {
    it("should be able to infer the type of the parameter ID", () => {
      const test = {
        parameters: {
          test: {
            displayName: "Testing",
            type: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "string",
          },
        },
      } as const satisfies ParameterConfig;
      expectTypeOf<ParameterId<typeof test>>().toEqualTypeOf<
        "test" | "test2"
      >();
    });

    it("should construct a type safe map of async parameter values", () => {
      const test = {
        parameters: {
          test: {
            displayName: "Testing",
            type: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "string",
          },
        },
      } as const satisfies ParameterConfig;
      expectTypeOf<AsyncParameterValueMap<typeof test>>().toMatchTypeOf<{
        test: BooleanParameterValue;
        test2: StringParameterValue;
      }>();
    });

    it("should construct a type safe map of async parameter values with arrays", () => {
      const test = {
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string",
          },
          test3: {
            displayName: "Testing 3",
            type: "number",
          },
        },
      } as const satisfies ParameterConfig;
      expectTypeOf<AsyncParameterValueMap<typeof test>>().toMatchTypeOf<{
        test: BooleanArrayValue;
        test2: StringArrayValue;
        test3: NumericParameterValue;
      }>();
    });

    it("should construct a type safe map of parameter values", () => {
      const test = {
        parameters: {
          test: {
            displayName: "Testing",
            type: "array",
            subType: "boolean",
          },
          test2: {
            displayName: "Testing 2",
            type: "array",
            subType: "string",
          },
          test3: {
            displayName: "Testing 3",
            type: "number",
          },
        },
      } as const satisfies ParameterConfig;
      expectTypeOf<ParameterValueMap<typeof test>>().toMatchTypeOf<{
        test: boolean[];
        test2: string[];
        test3: number;
      }>();
    });
  });
});
