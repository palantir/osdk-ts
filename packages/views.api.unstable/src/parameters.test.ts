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
import type { ArrayParameterValue } from "./parameters.js";

describe("Parameters", () => {
  describe("ArrayParameterValue", () => {
    it("should be able to narrow the type of the array value", () => {
      expectTypeOf(
        testStringTypeNarrowing({
          type: "array",
          subType: "string",
          value: { type: "loaded", value: ["a", "b", "c"] },
        }),
      ).toEqualTypeOf<string[] | undefined>();
    });
  });
});

function testStringTypeNarrowing(array: ArrayParameterValue) {
  if (array.subType === "string" && array.value.type === "loaded") {
    return array.value.value;
  }
  return undefined;
}
