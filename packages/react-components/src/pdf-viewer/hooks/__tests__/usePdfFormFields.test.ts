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
import {
  normalizeFieldType,
  toFormFieldValue,
  toStorageValue,
} from "../usePdfFormFields.js";

describe("normalizeFieldType", () => {
  it("should return 'text' for text fields", () => {
    expect(normalizeFieldType("text")).toBe("text");
  });

  it("should return 'checkbox' for checkbox fields", () => {
    expect(normalizeFieldType("checkbox")).toBe("checkbox");
  });

  it("should return 'radiobutton' for radio fields", () => {
    expect(normalizeFieldType("radiobutton")).toBe("radiobutton");
  });

  it("should return 'combobox' for combobox fields", () => {
    expect(normalizeFieldType("combobox")).toBe("combobox");
  });

  it("should return 'listbox' for listbox fields", () => {
    expect(normalizeFieldType("listbox")).toBe("listbox");
  });

  it("should default to 'text' for unknown types", () => {
    expect(normalizeFieldType("button")).toBe("text");
    expect(normalizeFieldType("signature")).toBe("text");
    expect(normalizeFieldType("")).toBe("text");
  });
});

describe("toFormFieldValue", () => {
  it("should convert checkbox 'Off' to false", () => {
    expect(toFormFieldValue("Off", "checkbox")).toBe(false);
  });

  it("should convert checkbox export value to true", () => {
    expect(toFormFieldValue("Yes", "checkbox")).toBe(true);
  });

  it("should convert checkbox boolean true to true", () => {
    expect(toFormFieldValue(true, "checkbox")).toBe(true);
  });

  it("should convert checkbox boolean false to false", () => {
    expect(toFormFieldValue(false, "checkbox")).toBe(false);
  });

  it("should return string for text fields", () => {
    expect(toFormFieldValue("hello", "text")).toBe("hello");
  });

  it("should return empty string for null/undefined text values", () => {
    expect(toFormFieldValue(undefined, "text")).toBe("");
    expect(toFormFieldValue(null, "text")).toBe("");
  });

  it("should return string for radiobutton fields", () => {
    expect(toFormFieldValue("option1", "radiobutton")).toBe("option1");
  });

  it("should return string for combobox fields", () => {
    expect(toFormFieldValue("choice1", "combobox")).toBe("choice1");
  });

  it("should return array for array values", () => {
    expect(toFormFieldValue(["a", "b"], "listbox")).toEqual(["a", "b"]);
  });
});

describe("toStorageValue", () => {
  it("should convert boolean true to true for checkbox", () => {
    expect(toStorageValue(true, "checkbox")).toBe(true);
  });

  it("should convert boolean false to false for checkbox", () => {
    expect(toStorageValue(false, "checkbox")).toBe(false);
  });

  it("should convert string 'Off' to false for checkbox", () => {
    expect(toStorageValue("Off", "checkbox")).toBe(false);
  });

  it("should convert non-Off string to true for checkbox", () => {
    expect(toStorageValue("Yes", "checkbox")).toBe(true);
  });

  it("should pass through string values for text fields", () => {
    expect(toStorageValue("hello", "text")).toBe("hello");
  });

  it("should pass through string values for combobox fields", () => {
    expect(toStorageValue("choice1", "combobox")).toBe("choice1");
  });
});
