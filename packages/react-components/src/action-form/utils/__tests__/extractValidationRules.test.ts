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

import { describe, expect, it, vi } from "vitest";
import type { RendererFieldDefinition } from "../../FormFieldApi.js";
import { extractValidationRules } from "../extractValidationRules.js";

function makeFieldDef(
  overrides: Partial<RendererFieldDefinition>,
): RendererFieldDefinition {
  return {
    fieldKey: "testField",
    fieldComponent: "TEXT_INPUT",
    label: "Test Field",
    fieldComponentProps: {},
    ...overrides,
  } as RendererFieldDefinition;
}

describe("extractValidationRules", () => {
  describe("required", () => {
    it("adds required rule when isRequired is true", () => {
      const rules = extractValidationRules(
        makeFieldDef({ isRequired: true }),
      );
      expect(rules.required).toBe("This field is required");
    });

    it("does not add required rule when isRequired is false", () => {
      const rules = extractValidationRules(
        makeFieldDef({ isRequired: false }),
      );
      expect(rules.required).toBeUndefined();
    });
  });

  describe("NUMBER_INPUT", () => {
    it("adds min validate function", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "NUMBER_INPUT",
        fieldComponentProps: { min: 5 },
      }));
      const validate = rules.validate as Record<
        string,
        (v: unknown) => string | true
      >;
      expect(validate.min(3)).toBe("Must be at least 5");
      expect(validate.min(5)).toBe(true);
      expect(validate.min(10)).toBe(true);
    });

    it("adds max validate function", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "NUMBER_INPUT",
        fieldComponentProps: { max: 100 },
      }));
      const validate = rules.validate as Record<
        string,
        (v: unknown) => string | true
      >;
      expect(validate.max(101)).toBe("Must be at most 100");
      expect(validate.max(100)).toBe(true);
      expect(validate.max(50)).toBe(true);
    });

    it("returns true for non-number values", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "NUMBER_INPUT",
        fieldComponentProps: { min: 5 },
      }));
      const validate = rules.validate as Record<
        string,
        (v: unknown) => string | true
      >;
      expect(validate.min(null)).toBe(true);
    });
  });

  describe("TEXT_INPUT", () => {
    it("adds minLength rule", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "TEXT_INPUT",
        fieldComponentProps: { minLength: 3 },
      }));
      expect(rules.minLength).toEqual({
        value: 3,
        message: "Must be at least 3 characters",
      });
    });

    it("adds maxLength rule", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "TEXT_INPUT",
        fieldComponentProps: { maxLength: 50 },
      }));
      expect(rules.maxLength).toEqual({
        value: 50,
        message: "Must be at most 50 characters",
      });
    });
  });

  describe("TEXT_AREA", () => {
    it("adds minLength and maxLength rules", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "TEXT_AREA",
        fieldComponentProps: { minLength: 10, maxLength: 500 },
      }));
      expect(rules.minLength).toEqual({
        value: 10,
        message: "Must be at least 10 characters",
      });
      expect(rules.maxLength).toEqual({
        value: 500,
        message: "Must be at most 500 characters",
      });
    });
  });

  describe("DATETIME_PICKER", () => {
    it("adds min validate function for dates", () => {
      const minDate = new Date(2024, 0, 1);
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "DATETIME_PICKER",
        fieldComponentProps: { min: minDate },
      }));
      const validate = rules.validate as Record<
        string,
        (v: unknown) => string | true
      >;
      const earlyDate = new Date(2023, 11, 31);
      const lateDate = new Date(2024, 5, 1);
      expect(validate.min(earlyDate)).toContain("Must be at least");
      expect(validate.min(lateDate)).toBe(true);
    });

    it("adds max validate function for dates", () => {
      const maxDate = new Date(2025, 11, 31);
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "DATETIME_PICKER",
        fieldComponentProps: { max: maxDate },
      }));
      const validate = rules.validate as Record<
        string,
        (v: unknown) => string | true
      >;
      const lateDate = new Date(2026, 0, 1);
      const earlyDate = new Date(2025, 5, 1);
      expect(validate.max(lateDate)).toContain("Must be at most");
      expect(validate.max(earlyDate)).toBe(true);
    });
  });

  describe("FILE_PICKER", () => {
    it("adds maxSize validate function for single file", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "FILE_PICKER",
        fieldComponentProps: { maxSize: 1024 },
      }));
      const validate = rules.validate as Record<
        string,
        (v: unknown) => string | true
      >;
      const smallFile = new File(["a"], "small.txt");
      Object.defineProperty(smallFile, "size", { value: 512 });
      const bigFile = new File(["a"], "big.txt");
      Object.defineProperty(bigFile, "size", { value: 2048 });

      expect(validate.maxSize(smallFile)).toBe(true);
      expect(validate.maxSize(bigFile)).toContain("File must be smaller than");
    });

    it("adds maxSize validate function for file array", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "FILE_PICKER",
        fieldComponentProps: { maxSize: 1024 },
      }));
      const validate = rules.validate as Record<
        string,
        (v: unknown) => string | true
      >;
      const smallFile = new File(["a"], "small.txt");
      Object.defineProperty(smallFile, "size", { value: 512 });
      const bigFile = new File(["a"], "big.txt");
      Object.defineProperty(bigFile, "size", { value: 2048 });

      expect(validate.maxSize([smallFile])).toBe(true);
      expect(validate.maxSize([smallFile, bigFile])).toContain(
        "File must be smaller than",
      );
    });
  });

  describe("fields without constraints", () => {
    it("returns empty rules for DROPDOWN", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "DROPDOWN",
        fieldComponentProps: { items: [] },
      }));
      expect(rules.required).toBeUndefined();
      expect(rules.validate).toBeUndefined();
    });

    it("returns only required for RADIO_BUTTONS when isRequired", () => {
      const rules = extractValidationRules(makeFieldDef({
        fieldComponent: "RADIO_BUTTONS",
        isRequired: true,
        fieldComponentProps: { options: [] },
      }));
      expect(rules.required).toBe("This field is required");
      expect(rules.validate).toBeUndefined();
    });
  });

  describe("custom validate", () => {
    it("wires user-provided validate function", async () => {
      const userValidate = vi.fn().mockResolvedValue(undefined);
      const rules = extractValidationRules(makeFieldDef({
        validate: userValidate,
      }));
      const validate = rules.validate as Record<
        string,
        (v: unknown) => Promise<string | true>
      >;
      const result = await validate.custom("test");
      expect(result).toBe(true);
      expect(userValidate).toHaveBeenCalledWith("test");
    });

    it("returns custom error message from validate", async () => {
      const userValidate = vi.fn().mockResolvedValue("Custom error");
      const rules = extractValidationRules(makeFieldDef({
        validate: userValidate,
      }));
      const validate = rules.validate as Record<
        string,
        (v: unknown) => Promise<string | true>
      >;
      const result = await validate.custom("test");
      expect(result).toBe("Custom error");
    });
  });

  describe("onValidationError override", () => {
    it("uses custom message from onValidationError", () => {
      const rules = extractValidationRules(makeFieldDef({
        isRequired: true,
        onValidationError: (error) => {
          if (error.type === "required") {
            return "Please fill this in";
          }
          return undefined;
        },
      }));
      expect(rules.required).toBe("Please fill this in");
    });

    it("falls back to default when onValidationError returns undefined", () => {
      const rules = extractValidationRules(makeFieldDef({
        isRequired: true,
        onValidationError: () => undefined,
      }));
      expect(rules.required).toBe("This field is required");
    });

    it("passes constraint data to onValidationError", () => {
      const onValidationError = vi.fn().mockReturnValue(undefined);
      extractValidationRules(makeFieldDef({
        fieldComponent: "NUMBER_INPUT",
        fieldComponentProps: { min: 10 },
        onValidationError,
      }));
      expect(onValidationError).toHaveBeenCalledWith({
        type: "min",
        min: 10,
      });
    });
  });
});
