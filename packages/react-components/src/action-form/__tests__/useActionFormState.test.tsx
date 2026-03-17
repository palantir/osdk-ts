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

import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { RendererFieldDefinition } from "../FormFieldApi.js";
import type {
  UseActionFormStateOptions,
} from "../hooks/useActionFormState.js";
import { useActionFormState } from "../hooks/useActionFormState.js";

function makeDef(
  fieldKey: string,
  defaultValue?: unknown,
): RendererFieldDefinition {
  return { fieldKey, fieldComponent: "TEXT_INPUT", defaultValue };
}

describe("useActionFormState", () => {
  describe("uncontrolled mode", () => {
    it("initializes with default values", () => {
      const defs = [
        makeDef("name", "Alice"),
        makeDef("email", "alice@test.com"),
      ];

      const { result } = renderHook(() =>
        useActionFormState({ fieldDefinitions: defs })
      );

      expect(result.current.formState).toEqual({
        name: "Alice",
        email: "alice@test.com",
      });
    });

    it("initializes with undefined when no defaultValue", () => {
      const defs = [makeDef("name")];

      const { result } = renderHook(() =>
        useActionFormState({ fieldDefinitions: defs })
      );

      expect(result.current.formState).toEqual({ name: undefined });
    });

    it("updates value via setFieldValue", () => {
      const defs = [makeDef("name", "")];

      const { result } = renderHook(() =>
        useActionFormState({ fieldDefinitions: defs })
      );

      act(() => {
        result.current.setFieldValue("name", "Bob");
      });

      expect(result.current.formState).toEqual({ name: "Bob" });
    });

    it("resets form to default values", () => {
      const defs = [makeDef("name", "default")];

      const { result } = renderHook(() =>
        useActionFormState({ fieldDefinitions: defs })
      );

      act(() => {
        result.current.setFieldValue("name", "changed");
      });

      expect(result.current.formState).toEqual({ name: "changed" });

      act(() => {
        result.current.resetForm();
      });

      expect(result.current.formState).toEqual({ name: "default" });
    });

    it("picks up new field defaults when definitions change", () => {
      const initialDefs = [makeDef("name", "Alice")];

      const { result, rerender } = renderHook(
        (props: UseActionFormStateOptions) => useActionFormState(props),
        { initialProps: { fieldDefinitions: initialDefs } },
      );

      expect(result.current.formState).toEqual({ name: "Alice" });

      const updatedDefs = [makeDef("name", "Alice"), makeDef("age", 30)];
      rerender({ fieldDefinitions: updatedDefs });

      expect(result.current.formState).toEqual({ name: "Alice", age: 30 });
    });
  });

  describe("controlled mode", () => {
    it("uses provided formState", () => {
      const defs = [makeDef("name", "default")];
      const formState = { name: "controlled" };

      const { result } = renderHook(() =>
        useActionFormState({ fieldDefinitions: defs, formState })
      );

      expect(result.current.formState).toEqual({ name: "controlled" });
    });

    it("delegates setFieldValue to onFieldValueChange", () => {
      const defs = [makeDef("name")];
      const formState = { name: "" };
      const onFieldValueChange = vi.fn();

      const { result } = renderHook(() =>
        useActionFormState({
          fieldDefinitions: defs,
          formState,
          onFieldValueChange,
        })
      );

      act(() => {
        result.current.setFieldValue("name", "Bob");
      });

      expect(onFieldValueChange).toHaveBeenCalledWith("name", "Bob");
    });

    it("resetForm calls onFieldValueChange with defaults", () => {
      const defs = [makeDef("name", "default"), makeDef("email", "a@b.com")];
      const formState = { name: "changed", email: "x@y.com" };
      const onFieldValueChange = vi.fn();

      const { result } = renderHook(() =>
        useActionFormState({
          fieldDefinitions: defs,
          formState,
          onFieldValueChange,
        })
      );

      act(() => {
        result.current.resetForm();
      });

      expect(onFieldValueChange).toHaveBeenCalledWith("name", "default");
      expect(onFieldValueChange).toHaveBeenCalledWith("email", "a@b.com");
    });
  });

  describe("edge cases", () => {
    it("handles empty field definitions", () => {
      const { result } = renderHook(() =>
        useActionFormState({ fieldDefinitions: [] })
      );

      expect(result.current.formState).toEqual({});
    });
  });
});
