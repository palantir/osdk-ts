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
  it.each(["constructor", "toString", "__proto__"])(
    "formats %s with the default formatter",
    key => {
      const input = { [key]: "value" };

      const result = stringify(input);

      expect(result).toBe(`${JSON.stringify(key)}: "value"`);
    },
  );

  it.each(["constructor", "toString", "__proto__"])(
    "formats %s with the wildcard customizer",
    key => {
      const input = { [key]: "value" };

      const result = stringify(input, { "*": () => "string" });

      expect(result).toBe(`${JSON.stringify(key)}: string`);
    },
  );

  it.each(["constructor", "toString", "__proto__"])(
    "prefers the own customizer for %s",
    key => {
      const input = { [key]: "value" };
      const customizer = { [key]: () => "number", "*": () => "string" };

      const result = stringify(input, customizer);

      expect(result).toBe(`${JSON.stringify(key)}: number`);
    },
  );

  it("ignores inherited named and wildcard formatting", () => {
    const input = { field: "value" };
    const customizer = Object.create({
      field: () => "number",
      "*": () => "string",
    });

    const result = stringify(input, customizer);

    expect(result).toBe("\"field\": \"value\"");
  });
});
