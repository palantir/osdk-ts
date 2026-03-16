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

import type { ActionDefinition } from "@osdk/api";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { FormFieldDefinition } from "../FormFieldApi.js";
import type { UseActionFormStateResult } from "../hooks/useActionFormState.js";
import { useActionFormState } from "../hooks/useActionFormState.js";

/**
 * Test action type with compile-time metadata so FieldKey resolves
 * to "name" | "email".
 *
 * Uses `interface extends` (not `type &`) so that __DefinitionMetadata
 * replaces rather than intersects the base type. This prevents
 * Record<any, Parameter<any>> from polluting keyof, which would cause
 * FieldValueType to resolve to `never`.
 */
interface TestActionDef extends ActionDefinition<unknown> {
  __DefinitionMetadata: {
    signatures: unknown;
    parameters: {
      name: { type: "string" };
      email: { type: "string" };
    };
    type: "action";
    apiName: "TestAction";
    status: "ACTIVE";
    rid: string;
  };
}

function makeFieldDef(
  options:
    & Partial<FormFieldDefinition<TestActionDef>>
    & Pick<FormFieldDefinition<TestActionDef>, "fieldKey">,
): FormFieldDefinition<TestActionDef> {
  return {
    fieldComponent: "TEXT_INPUT",
    parameterType: "string",
    ...options,
  } as FormFieldDefinition<TestActionDef>;
}

/** Widens setFieldValue for test assertions where actual values differ from metadata type literals */
function setField(
  result: UseActionFormStateResult<TestActionDef>,
  key: "name" | "email",
  value: unknown,
): void {
  (result.setFieldValue as (k: string, v: unknown) => void)(key, value);
}

describe("useActionFormState", () => {
  describe("uncontrolled fields", () => {
    it("initializes with default values", () => {
      const defs = [
        makeFieldDef({ fieldKey: "name", defaultValue: "Alice" }),
        makeFieldDef({
          fieldKey: "email",
          fieldComponent: "TEXT_INPUT",
          defaultValue: "alice@test.com",
        }),
      ];

      const { result } = renderHook(() =>
        useActionFormState<TestActionDef>(defs)
      );

      expect(result.current.formState).toEqual({
        name: "Alice",
        email: "alice@test.com",
      });
    });

    it("initializes with undefined when no defaultValue", () => {
      const defs = [makeFieldDef({ fieldKey: "name" })];

      const { result } = renderHook(() =>
        useActionFormState<TestActionDef>(defs)
      );

      expect(result.current.formState).toEqual({ name: undefined });
    });

    it("updates value via setFieldValue", () => {
      const defs = [makeFieldDef({ fieldKey: "name", defaultValue: "" })];

      const { result } = renderHook(() =>
        useActionFormState<TestActionDef>(defs)
      );

      act(() => {
        setField(result.current, "name", "Bob");
      });

      expect(result.current.formState).toEqual({ name: "Bob" });
    });

    it("resets form to default values", () => {
      const defs = [
        makeFieldDef({ fieldKey: "name", defaultValue: "default" }),
      ];

      const { result } = renderHook(() =>
        useActionFormState<TestActionDef>(defs)
      );

      act(() => {
        setField(result.current, "name", "changed");
      });

      expect(result.current.formState).toEqual({ name: "changed" });

      act(() => {
        result.current.resetForm();
      });

      expect(result.current.formState).toEqual({ name: "default" });
    });
  });

  describe("edge cases", () => {
    it("handles empty field definitions", () => {
      const { result } = renderHook(() =>
        useActionFormState<TestActionDef>([])
      );

      expect(result.current.formState).toEqual({});
    });
  });
});
