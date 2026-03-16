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
import { coerceFieldValue } from "../utils/coerceFieldValue.js";

describe("coerceFieldValue", () => {
  describe("null/undefined handling", () => {
    it("returns undefined for null", () => {
      expect(coerceFieldValue("string", null)).toBe(undefined);
    });

    it("returns undefined for undefined", () => {
      expect(coerceFieldValue("string", undefined)).toBe(undefined);
    });

    it("passes through when parameterType is undefined", () => {
      expect(coerceFieldValue(undefined, "hello")).toBe("hello");
      expect(coerceFieldValue(undefined, 42)).toBe(42);
    });
  });

  describe("string types", () => {
    it("passes through strings for string type", () => {
      expect(coerceFieldValue("string", "hello")).toBe("hello");
    });

    it("coerces non-strings to strings", () => {
      expect(coerceFieldValue("string", 42)).toBe("42");
      expect(coerceFieldValue("string", true)).toBe("true");
    });

    it("handles marking type as string", () => {
      expect(coerceFieldValue("marking", "abc")).toBe("abc");
    });

    it("handles geohash type as string", () => {
      expect(coerceFieldValue("geohash", "9q8yyk")).toBe("9q8yyk");
    });
  });

  describe("numeric types", () => {
    it("passes through numbers for integer type", () => {
      expect(coerceFieldValue("integer", 42)).toBe(42);
    });

    it("parses numeric strings for integer type", () => {
      expect(coerceFieldValue("integer", "42")).toBe(42);
    });

    it("returns undefined for non-numeric strings", () => {
      expect(coerceFieldValue("integer", "abc")).toBe(undefined);
    });

    it("passes through numbers for double type", () => {
      expect(coerceFieldValue("double", 3.14)).toBe(3.14);
    });

    it("parses numeric strings for double type", () => {
      expect(coerceFieldValue("double", "3.14")).toBe(3.14);
    });

    it("handles long type", () => {
      expect(coerceFieldValue("long", 1000000)).toBe(1000000);
      expect(coerceFieldValue("long", "1000000")).toBe(1000000);
    });
  });

  describe("boolean type", () => {
    it("passes through booleans", () => {
      expect(coerceFieldValue("boolean", true)).toBe(true);
      expect(coerceFieldValue("boolean", false)).toBe(false);
    });

    it("parses string 'true'", () => {
      expect(coerceFieldValue("boolean", "true")).toBe(true);
    });

    it("parses string 'false'", () => {
      expect(coerceFieldValue("boolean", "false")).toBe(false);
    });

    it("returns undefined for non-boolean values", () => {
      expect(coerceFieldValue("boolean", "yes")).toBe(undefined);
      expect(coerceFieldValue("boolean", 1)).toBe(undefined);
    });
  });

  describe("datetime/timestamp types", () => {
    it("passes through valid ISO strings for datetime", () => {
      const iso = "2024-01-15T10:30:00.000Z";
      expect(coerceFieldValue("datetime", iso)).toBe(iso);
    });

    it("coerces Date objects to ISO strings", () => {
      const date = new Date("2024-01-15T10:30:00.000Z");
      expect(coerceFieldValue("datetime", date)).toBe(
        "2024-01-15T10:30:00.000Z",
      );
    });

    it("returns undefined for invalid date strings", () => {
      expect(coerceFieldValue("datetime", "not-a-date")).toBe(undefined);
    });

    it("returns undefined for non-string non-Date values", () => {
      expect(coerceFieldValue("timestamp", 12345)).toBe(undefined);
    });

    it("handles timestamp the same as datetime", () => {
      const iso = "2024-01-15T10:30:00.000Z";
      expect(coerceFieldValue("timestamp", iso)).toBe(iso);
    });
  });

  describe("complex types (passthrough)", () => {
    it("passes through objects for objectSet type", () => {
      const objectSet = { type: "objectSet" };
      expect(
        coerceFieldValue(
          { type: "objectSet", objectSet: "MyObject" },
          objectSet,
        ),
      ).toBe(objectSet);
    });

    it("passes through objects for object type", () => {
      const obj = { pk: "123" };
      expect(
        coerceFieldValue({ type: "object", object: "MyObject" }, obj),
      ).toBe(obj);
    });

    it("passes through attachment type", () => {
      const file = new File(["content"], "test.txt");
      expect(coerceFieldValue("attachment", file)).toBe(file);
    });

    it("passes through mediaReference type", () => {
      const ref = { uri: "media://123" };
      expect(coerceFieldValue("mediaReference", ref)).toBe(ref);
    });
  });
});
