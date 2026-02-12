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

import { describe, expect, it } from "vitest";
import { toUuid } from "./ridUtils.js";

describe("ridUtils", () => {
  describe("toUuid", () => {
    it("returns a valid UUID format with correct version and variant bits", () => {
      const result = toUuid("test-string");
      // UUID format: xxxxxxxx-xxxx-Vxxx-Nxxx-xxxxxxxxxxxx // cspell:disable-line
      // V = version (5), N = variant (8, 9, a, or b for RFC 4122)
      expect(result).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
      );
    });

    it("is deterministic - same input produces same output", () => {
      const input = "my-deterministic-input";
      const result1 = toUuid(input);
      const result2 = toUuid(input);
      expect(result1).toBe(result2);
    });

    it("produces different outputs for different inputs", () => {
      const result1 = toUuid("input-1");
      const result2 = toUuid("input-2");
      expect(result1).not.toBe(result2);
    });

    it("handles empty string", () => {
      const result = toUuid("");
      expect(result).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
    });
  });
});
