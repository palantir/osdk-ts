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

import { describe, expect, it } from "vitest";
import { stringify } from "./stringify.js";

describe("stringify", () => {
  it.each(["toString", "constructor", "__proto__"])(
    "uses the default formatter for %s",
    name => {
      const result = stringify({ [name]: 1 });
      expect(result).toBe(`${JSON.stringify(name)}: 1`);
    },
  );

  it.each(["toString", "constructor", "__proto__"])(
    "uses the wildcard customizer for %s",
    name => {
      const result = stringify({ [name]: 1 }, {
        "*": () => "number",
      });
      expect(result).toBe(`${JSON.stringify(name)}: number`);
    },
  );

  it("prefers an own customizer over the wildcard", () => {
    const result = stringify({ toString: 1 }, {
      toString: () => "number",
      "*": () => "unknown",
    });
    expect(result).toBe("\"toString\": number");
  });
});
