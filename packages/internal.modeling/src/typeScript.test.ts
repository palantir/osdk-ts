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

import { expect, it } from "vitest";

import { generateTypeScript } from "./typeScript.js";

it("generates named dictionary models as records", () => {
  expect(
    generateTypeScript({
      Dictionary: {
        type: "object",
        propertyNames: { type: "string", minLength: 1 },
        additionalProperties: {
          type: "integer",
          minimum: -2147483648,
          maximum: 2147483647,
        },
      },
    }),
  ).toContain("Record<string, number>");
});
