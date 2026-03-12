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

import type { ActionMetadata } from "@osdk/api";
import { describe, expect, expectTypeOf, test } from "vitest";
import { convertToActionValue } from "../convertValue.js";
import type { ParamRuntimeValue } from "../FormFieldApi.js";

describe("ParamRuntimeValue", () => {
  test("string → string", () => {
    expectTypeOf<
      ParamRuntimeValue<{ type: "string"; nullable: false }>
    >().toEqualTypeOf<string>();
  });

  test("integer → number", () => {
    expectTypeOf<
      ParamRuntimeValue<{ type: "integer"; nullable: false }>
    >().toEqualTypeOf<number>();
  });

  test("double → number", () => {
    expectTypeOf<
      ParamRuntimeValue<{ type: "double"; nullable: false }>
    >().toEqualTypeOf<number>();
  });

  test("boolean → boolean", () => {
    expectTypeOf<
      ParamRuntimeValue<{ type: "boolean"; nullable: false }>
    >().toEqualTypeOf<boolean>();
  });

  test("datetime → string", () => {
    expectTypeOf<
      ParamRuntimeValue<{ type: "datetime"; nullable: false }>
    >().toEqualTypeOf<string>();
  });

  test("timestamp → string", () => {
    expectTypeOf<
      ParamRuntimeValue<{ type: "timestamp"; nullable: false }>
    >().toEqualTypeOf<string>();
  });

  test("object type → unknown", () => {
    type ObjectParam = ActionMetadata.DataType.Object;
    expectTypeOf<
      ParamRuntimeValue<{ type: ObjectParam; nullable: false }>
    >().toEqualTypeOf<unknown>();
  });
});

describe("convertToActionValue", () => {
  test("boolean field: returns boolean when given boolean", () => {
    expect(convertToActionValue(true, "boolean")).toBe(true);
    expect(convertToActionValue(false, "boolean")).toBe(false);
  });

  test("boolean field: returns undefined for non-boolean", () => {
    expect(convertToActionValue("true", "boolean")).toBeUndefined();
    expect(convertToActionValue(1, "boolean")).toBeUndefined();
    expect(convertToActionValue(undefined, "boolean")).toBeUndefined();
  });

  test("integer field: returns number when given number", () => {
    expect(convertToActionValue(42, "integer")).toBe(42);
    expect(convertToActionValue(0, "integer")).toBe(0);
  });

  test("integer field: returns undefined for non-number", () => {
    expect(convertToActionValue("42", "integer")).toBeUndefined();
    expect(convertToActionValue(undefined, "integer")).toBeUndefined();
  });

  test("double field: returns number when given number", () => {
    expect(convertToActionValue(3.14, "double")).toBe(3.14);
  });

  test("long field: accepts number or string", () => {
    expect(convertToActionValue(123, "long")).toBe(123);
    expect(convertToActionValue("123", "long")).toBe("123");
    expect(convertToActionValue(undefined, "long")).toBeUndefined();
  });

  test("decimal field: accepts number or string", () => {
    expect(convertToActionValue(1.5, "decimal")).toBe(1.5);
    expect(convertToActionValue("1.5", "decimal")).toBe("1.5");
    expect(convertToActionValue(true, "decimal")).toBeUndefined();
  });

  test("string field: returns string when given string", () => {
    expect(convertToActionValue("hello", "string")).toBe("hello");
    expect(convertToActionValue("", "string")).toBe("");
  });

  test("string field: returns undefined for non-string", () => {
    expect(convertToActionValue(42, "string")).toBeUndefined();
    expect(convertToActionValue(undefined, "string")).toBeUndefined();
  });

  test("datetime field: returns string", () => {
    expect(convertToActionValue("2026-01-01", "datetime")).toBe("2026-01-01");
    expect(convertToActionValue(42, "datetime")).toBeUndefined();
  });

  test("timestamp field: returns string", () => {
    expect(convertToActionValue("2026-01-01T00:00:00Z", "timestamp"))
      .toBe("2026-01-01T00:00:00Z");
  });

  test("textarea field: returns string", () => {
    expect(convertToActionValue("text", "textarea")).toBe("text");
  });

  test("select field: returns string", () => {
    expect(convertToActionValue("option1", "select")).toBe("option1");
    expect(convertToActionValue(42, "select")).toBeUndefined();
  });

  test("complex types pass through as-is", () => {
    const geoPoint = { type: "Point", coordinates: [0, 0] };
    expect(convertToActionValue(geoPoint, "geohash")).toBe(geoPoint);
    expect(convertToActionValue(geoPoint, "geoshape")).toBe(geoPoint);
    expect(convertToActionValue(undefined, "attachment")).toBeUndefined();
    expect(convertToActionValue("file", "attachment")).toBe("file");
  });

  test("numeric subtypes: float, short, byte", () => {
    expect(convertToActionValue(1.5, "float")).toBe(1.5);
    expect(convertToActionValue(127, "short")).toBe(127);
    expect(convertToActionValue(255, "byte")).toBe(255);
    expect(convertToActionValue("1", "float")).toBeUndefined();
  });
});
