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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { BaseForm } from "../BaseForm.js";
import type { RendererFieldDefinition } from "../FormFieldApi.js";

function makeDef(
  fieldKey: string,
  overrides?: Partial<
    Extract<RendererFieldDefinition, { fieldComponent: "TEXT_INPUT" }>
  >,
): RendererFieldDefinition {
  return {
    fieldKey,
    fieldComponent: "TEXT_INPUT",
    label: fieldKey,
    fieldComponentProps: {},
    ...overrides,
  };
}

describe("BaseForm", () => {
  afterEach(cleanup);

  describe("uncontrolled mode", () => {
    it("submits entered field values", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          fieldDefinitions={[makeDef("name"), makeDef("email")]}
          onSubmit={onSubmit}
        />,
      );

      const nameInput = screen.getByRole("textbox", { name: "name" });
      fireEvent.change(nameInput, { target: { value: "Alice" } });

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Alice" }),
        );
      });
    });

    it("submits undefined for fields without defaults", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          fieldDefinitions={[makeDef("name"), makeDef("email")]}
          onSubmit={onSubmit}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({ name: undefined, email: undefined }),
        );
      });
    });

    it("submits entered value alongside defaults for untouched fields", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          fieldDefinitions={[
            makeDef("name", {
              fieldComponentProps: { defaultValue: "Default Name" },
            }),
            makeDef("email", {
              fieldComponentProps: { defaultValue: "default@test.com" },
            }),
          ]}
          onSubmit={onSubmit}
        />,
      );

      const nameInput = screen.getByRole("textbox", { name: "name" });
      fireEvent.change(nameInput, { target: { value: "Typed" } });

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            name: "Typed",
            email: "default@test.com",
          }),
        );
      });
    });

    it("submits defaultValue for untouched fields", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          fieldDefinitions={[
            makeDef("name", {
              fieldComponentProps: { defaultValue: "Bob" },
            }),
            makeDef("email", {
              fieldComponentProps: { defaultValue: "bob@test.com" },
            }),
          ]}
          onSubmit={onSubmit}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            name: "Bob",
            email: "bob@test.com",
          }),
        );
      });
    });
  });

  // TODO: expand this test to cover all field types
  describe("dropdown field", () => {
    it("renders dropdown from fieldDefinitions", () => {
      render(
        <BaseForm
          fieldDefinitions={[
            {
              fieldKey: "color",
              label: "Color",
              fieldComponent: "DROPDOWN" as const,
              fieldComponentProps: {
                items: ["Red", "Blue", "Green"],
              },
            },
          ]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.getByRole("combobox")).toBeDefined();
    });
  });

  describe("helper text", () => {
    it("renders helper text below the field when placement is bottom", () => {
      render(
        <BaseForm
          fieldDefinitions={[
            makeDef("name", {
              helperText: "Enter your full name",
              helperTextPlacement: "bottom",
            }),
          ]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.getByText("Enter your full name")).toBeDefined();
    });

    it("renders an info icon trigger when placement is tooltip", () => {
      render(
        <BaseForm
          fieldDefinitions={[
            makeDef("name", {
              helperText: "Enter your full name",
              helperTextPlacement: "tooltip",
            }),
          ]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.getByLabelText("Info about name")).toBeDefined();
      expect(screen.queryByText("Enter your full name")).toBeNull();
    });

    it("renders an info icon trigger when placement is omitted (default)", () => {
      render(
        <BaseForm
          fieldDefinitions={[
            makeDef("name", {
              helperText: "Enter your full name",
            }),
          ]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.getByLabelText("Info about name")).toBeDefined();
    });

    it("does not render helper text or icon when helperText is absent", () => {
      render(
        <BaseForm
          fieldDefinitions={[makeDef("name")]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.queryByLabelText("Info about name")).toBeNull();
    });
  });

  describe("controlled mode", () => {
    it("calls onFieldValueChange when a field is edited", () => {
      const onFieldValueChange = vi.fn();

      render(
        <BaseForm
          fieldDefinitions={[makeDef("name"), makeDef("email")]}
          formState={{ name: "Initial", email: "initial@test.com" }}
          onFieldValueChange={onFieldValueChange}
          onSubmit={vi.fn()}
        />,
      );

      const nameInput = screen.getByRole("textbox", { name: "name" });
      fireEvent.change(nameInput, { target: { value: "Updated" } });

      expect(onFieldValueChange).toHaveBeenCalledWith("name", "Updated");
    });

    it("submits the controlled formState", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          fieldDefinitions={[makeDef("name"), makeDef("email")]}
          formState={{ name: "Alice", email: "alice@test.com" }}
          onFieldValueChange={vi.fn()}
          onSubmit={onSubmit}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            name: "Alice",
            email: "alice@test.com",
          }),
        );
      });
    });
    it("submits the latest parent state after re-render", async () => {
      const onSubmit = vi.fn();
      const defs = [makeDef("name"), makeDef("email")];

      function ControlledWrapper() {
        const [formState, setFormState] = useState<Record<string, unknown>>({
          name: "Initial",
          email: "initial@test.com",
        });

        const handleFieldChange = (fieldKey: string, value: unknown) => {
          setFormState((prev) => ({ ...prev, [fieldKey]: value }));
        };

        return (
          <BaseForm
            fieldDefinitions={defs}
            formState={formState}
            onFieldValueChange={handleFieldChange}
            onSubmit={onSubmit}
          />
        );
      }

      render(<ControlledWrapper />);

      const nameInput = screen.getByRole("textbox", { name: "name" });
      fireEvent.change(nameInput, { target: { value: "Updated" } });

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            name: "Updated",
            email: "initial@test.com",
          }),
        );
      });
    });

    it("submits parent state even after user edits", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          fieldDefinitions={[makeDef("name"), makeDef("email")]}
          formState={{ name: "Parent", email: "parent@test.com" }}
          onFieldValueChange={vi.fn()}
          onSubmit={onSubmit}
        />,
      );

      const nameInput = screen.getByRole("textbox", { name: "name" });
      fireEvent.change(nameInput, { target: { value: "User Typed This" } });

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Parent" }),
        );
      });
    });
  });
});
