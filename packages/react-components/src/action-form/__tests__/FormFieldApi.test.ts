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

import type { ActionDefinition, ActionMetadata, ActionParam } from "@osdk/api";
import { describe, expect, expectTypeOf, test } from "vitest";
import { convertToActionValue } from "../convertValue.js";
import type { FieldValueType } from "../FormFieldApi.js";

interface MockAction extends ActionDefinition<never> {
  __DefinitionMetadata: {
    signatures: never;
    type: "action";
    apiName: "mockAction";
    rid: "";
    status: undefined;
    modifiedEntities: {};
    parameters: {
      stringParam: {
        type: "string";
        nullable: false;
        multiplicity: false;
        description: undefined;
      };
      intParam: {
        type: "integer";
        nullable: false;
        multiplicity: false;
        description: undefined;
      };
      doubleParam: {
        type: "double";
        nullable: false;
        multiplicity: false;
        description: undefined;
      };
      boolParam: {
        type: "boolean";
        nullable: false;
        multiplicity: false;
        description: undefined;
      };
      datetimeParam: {
        type: "datetime";
        nullable: false;
        multiplicity: false;
        description: undefined;
      };
      timestampParam: {
        type: "timestamp";
        nullable: false;
        multiplicity: false;
        description: undefined;
      };
      objectParam: {
        type: ActionMetadata.DataType.Object;
        nullable: false;
        multiplicity: false;
        description: undefined;
      };
    };
  };
}

describe("FieldValueType", () => {
  test("string → string", () => {
    expectTypeOf<
      FieldValueType<MockAction, "stringParam">
    >().toEqualTypeOf<string>();
  });

  test("integer → number", () => {
    expectTypeOf<
      FieldValueType<MockAction, "intParam">
    >().toEqualTypeOf<number>();
  });

  test("double → number", () => {
    expectTypeOf<
      FieldValueType<MockAction, "doubleParam">
    >().toEqualTypeOf<number>();
  });

  test("boolean → boolean", () => {
    expectTypeOf<
      FieldValueType<MockAction, "boolParam">
    >().toEqualTypeOf<boolean>();
  });

  test("datetime → string", () => {
    expectTypeOf<
      FieldValueType<MockAction, "datetimeParam">
    >().toEqualTypeOf<string>();
  });

  test("timestamp → string", () => {
    expectTypeOf<
      FieldValueType<MockAction, "timestampParam">
    >().toEqualTypeOf<string>();
  });

  test("object type → ActionParam.ObjectType", () => {
    expectTypeOf<
      FieldValueType<MockAction, "objectParam">
    >().toEqualTypeOf<ActionParam.ObjectType<never>>();
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
