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

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import React, { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { FormContentItem } from "../ActionFormApi.js";
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

function field(definition: RendererFieldDefinition): FormContentItem {
  return { type: "field", definition };
}

describe("BaseForm", () => {
  afterEach(cleanup);

  describe("form title", () => {
    it("does not render a form title when explicitly set to null", () => {
      render(
        <BaseForm
          formTitle={null}
          formContent={[field(makeDef("name"))]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.queryByRole("heading")).toBeNull();
    });
  });

  describe("uncontrolled mode", () => {
    it("submits entered field values", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          formContent={[field(makeDef("name")), field(makeDef("email"))]}
          onSubmit={onSubmit}
        />,
      );

      const nameInput = screen.getByRole("textbox", { name: /name/ });
      fireEvent.change(nameInput, { target: { value: "Alice" } });

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Alice" }),
        );
      });
    });

    it("submits from the button click instead of the form submit event", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          formContent={[field(makeDef("name"))]}
          onSubmit={onSubmit}
        />,
      );

      const form = document.querySelector("form");
      expect(form).not.toBeNull();

      fireEvent.submit(form!);
      expect(onSubmit).not.toHaveBeenCalled();

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });

    it("keeps Enter key submission without relying on native form submission", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          formContent={[field(makeDef("name"))]}
          onSubmit={onSubmit}
        />,
      );

      const input = screen.getByRole("textbox", { name: /name/ });
      fireEvent.keyDown(input, { key: "Enter" });

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });

    it("does not submit on Enter when the field consumes the key event", async () => {
      const onSubmit = vi.fn();
      const customField: RendererFieldDefinition = {
        fieldKey: "custom",
        fieldComponent: "CUSTOM",
        label: "custom",
        fieldComponentProps: {
          customRenderer: () => (
            <input
              aria-label="custom input"
              onKeyDown={(event) => {
                event.preventDefault();
              }}
            />
          ),
        },
      };

      render(
        <BaseForm
          formContent={[field(customField)]}
          onSubmit={onSubmit}
        />,
      );

      fireEvent.keyDown(screen.getByLabelText("custom input"), {
        key: "Enter",
      });

      await new Promise((resolve) => setTimeout(resolve, 0));
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it("submits undefined for fields without defaults", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          formContent={[field(makeDef("name")), field(makeDef("email"))]}
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
          formContent={[
            field(makeDef("name", {
              fieldComponentProps: { defaultValue: "Default Name" },
            })),
            field(makeDef("email", {
              fieldComponentProps: { defaultValue: "default@test.com" },
            })),
          ]}
          onSubmit={onSubmit}
        />,
      );

      const nameInput = screen.getByRole("textbox", { name: /name/ });
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
          formContent={[
            field(makeDef("name", {
              fieldComponentProps: { defaultValue: "Bob" },
            })),
            field(makeDef("email", {
              fieldComponentProps: { defaultValue: "bob@test.com" },
            })),
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
    it("renders dropdown from formContent", () => {
      render(
        <BaseForm
          formContent={[
            field({
              fieldKey: "color",
              label: "Color",
              fieldComponent: "DROPDOWN" as const,
              fieldComponentProps: {
                items: ["Red", "Blue", "Green"],
              },
            }),
          ]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.getByRole("combobox")).toBeDefined();
    });

    it("renders dropdown portals inside the form-level portal container", async () => {
      const portalContainer = document.createElement("div");
      document.body.append(portalContainer);

      try {
        render(
          <BaseForm
            formContent={[
              field({
                fieldKey: "color",
                label: "Color",
                fieldComponent: "DROPDOWN" as const,
                fieldComponentProps: {
                  items: ["Red", "Blue", "Green"],
                },
              }),
            ]}
            portalContainer={portalContainer}
            onSubmit={vi.fn()}
          />,
        );

        fireEvent.click(screen.getByRole("combobox"));

        await waitFor(() => {
          expect(
            portalContainer.contains(screen.getByRole("option", {
              name: "Red",
            })),
          ).toBe(true);
        });
      } finally {
        portalContainer.remove();
      }
    });
  });

  describe("helper text", () => {
    it("renders helper text when placement is bottom", () => {
      render(
        <BaseForm
          formContent={[
            field(makeDef("name", {
              helperText: "Enter your full name",
              helperTextPlacement: "bottom",
            })),
          ]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.getByText("Enter your full name")).toBeDefined();
    });

    it("renders tooltip trigger when placement is tooltip", () => {
      render(
        <BaseForm
          formContent={[
            field(makeDef("name", {
              helperText: "Enter your full name",
              helperTextPlacement: "tooltip",
            })),
          ]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.getByLabelText("Info about name")).toBeDefined();
      expect(screen.queryByText("Enter your full name")).toBeNull();
    });

    it("defaults to tooltip placement when helperTextPlacement is omitted", () => {
      render(
        <BaseForm
          formContent={[
            field(makeDef("name", {
              helperText: "Enter your full name",
            })),
          ]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.getByLabelText("Info about name")).toBeDefined();
      expect(screen.queryByText("Enter your full name")).toBeNull();
    });

    it("does not render helper text or icon when helperText is absent", () => {
      render(
        <BaseForm
          formContent={[field(makeDef("name"))]}
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
          formContent={[field(makeDef("name")), field(makeDef("email"))]}
          formState={{ name: "Initial", email: "initial@test.com" }}
          onFieldValueChange={onFieldValueChange}
          onSubmit={vi.fn()}
        />,
      );

      const nameInput = screen.getByRole("textbox", { name: /name/ });
      fireEvent.change(nameInput, { target: { value: "Updated" } });

      expect(onFieldValueChange).toHaveBeenCalledWith("name", "Updated");
    });

    it("submits the controlled formState", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          formContent={[field(makeDef("name")), field(makeDef("email"))]}
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
      const content: ReadonlyArray<FormContentItem> = [
        field(makeDef("name")),
        field(makeDef("email")),
      ];

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
            formContent={content}
            formState={formState}
            onFieldValueChange={handleFieldChange}
            onSubmit={onSubmit}
          />
        );
      }

      render(<ControlledWrapper />);

      const nameInput = screen.getByRole("textbox", { name: /name/ });
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
          formContent={[field(makeDef("name")), field(makeDef("email"))]}
          formState={{ name: "Parent", email: "parent@test.com" }}
          onFieldValueChange={vi.fn()}
          onSubmit={onSubmit}
        />,
      );

      const nameInput = screen.getByRole("textbox", { name: /name/ });
      fireEvent.change(nameInput, { target: { value: "User Typed This" } });

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Parent" }),
        );
      });
    });
  });

  describe("validation", () => {
    it("shows error for required field after blur with empty value", async () => {
      render(
        <BaseForm
          formContent={[field(makeDef("name", { isRequired: true }))]}
          onSubmit={vi.fn()}
        />,
      );

      const input = screen.getByRole("textbox", { name: /name/ });
      fireEvent.focus(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByRole("alert")).toBeDefined();
        expect(screen.getByRole("alert").textContent).toBe(
          "This field is required",
        );
      });
    });

    it("shows minLength error after blur", async () => {
      render(
        <BaseForm
          formContent={[
            field(makeDef("name", {
              fieldComponentProps: { minLength: 3 },
            })),
          ]}
          onSubmit={vi.fn()}
        />,
      );

      const input = screen.getByRole("textbox", { name: /name/ });
      fireEvent.change(input, { target: { value: "ab" } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByRole("alert").textContent).toBe(
          "Must be at least 3 characters",
        );
      });
    });

    it("clears error after value becomes valid", async () => {
      render(
        <BaseForm
          formContent={[field(makeDef("name", { isRequired: true }))]}
          onSubmit={vi.fn()}
        />,
      );

      const input = screen.getByRole("textbox", { name: /name/ });
      fireEvent.focus(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByRole("alert")).toBeDefined();
      });

      fireEvent.change(input, { target: { value: "Alice" } });

      await waitFor(() => {
        expect(screen.queryByRole("alert")).toBeNull();
      });
    });

    it("blocks submission when required field is empty and shows errors", async () => {
      const onSubmit = vi.fn();
      render(
        <BaseForm
          formContent={[field(makeDef("name", { isRequired: true }))]}
          onSubmit={onSubmit}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await waitFor(() => {
        expect(screen.getByRole("alert")).toBeDefined();
      });

      expect(onSubmit).not.toHaveBeenCalled();
    });

    it("disables submit button after failed attempt while errors exist", async () => {
      render(
        <BaseForm
          formContent={[field(makeDef("name", { isRequired: true }))]}
          onSubmit={vi.fn()}
        />,
      );

      const getSubmitButton = () =>
        screen.getByRole("button", { name: /submit/i }) as HTMLButtonElement;

      expect(getSubmitButton().disabled).toBe(false);

      fireEvent.click(getSubmitButton());

      await waitFor(() => {
        expect(getSubmitButton().disabled).toBe(true);
      });
    });

    it("re-enables submit button after fixing errors", async () => {
      render(
        <BaseForm
          formContent={[field(makeDef("name", { isRequired: true }))]}
          onSubmit={vi.fn()}
        />,
      );

      const getSubmitButton = () =>
        screen.getByRole("button", { name: /submit/i }) as HTMLButtonElement;

      // Touch the field first so RHF tracks it for revalidation
      const input = screen.getByRole("textbox", { name: /name/ });
      fireEvent.focus(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByRole("alert")).toBeDefined();
      });

      // Submit to set hasAttemptedSubmit
      fireEvent.click(getSubmitButton());

      await waitFor(() => {
        expect(getSubmitButton().disabled).toBe(true);
      });

      // Fix the error — RHF revalidates because the field is touched
      fireEvent.change(input, { target: { value: "Alice" } });

      await waitFor(() => {
        expect(screen.queryByRole("alert")).toBeNull();
      });

      expect(getSubmitButton().disabled).toBe(false);
    });

    it("shows submission error on button when onSubmit rejects", async () => {
      const onSubmit = vi.fn().mockRejectedValue(
        new Error("Server error"),
      );
      render(
        <BaseForm
          formContent={[field(makeDef("name"))]}
          onSubmit={onSubmit}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await waitFor(() => {
        expect(screen.getByText("Server error")).toBeDefined();
      });
    });

    it("clears submission error when a field is edited", async () => {
      const onSubmit = vi.fn().mockRejectedValue(
        new Error("Server error"),
      );
      render(
        <BaseForm
          formContent={[field(makeDef("name"))]}
          onSubmit={onSubmit}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await waitFor(() => {
        expect(screen.getByText("Server error")).toBeDefined();
      });

      const input = screen.getByRole("textbox", { name: /name/ });
      fireEvent.change(input, { target: { value: "Alice" } });

      await waitFor(() => {
        expect(screen.queryByText("Server error")).toBeNull();
      });
    });

    it("shows error count indicator when validation errors exist", async () => {
      render(
        <BaseForm
          formContent={[field(makeDef("name", { isRequired: true }))]}
          onSubmit={vi.fn()}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await waitFor(() => {
        expect(screen.getByText("1 issue")).toBeDefined();
      });
    });

    it("shows 'Submitting' while async onSubmit is pending", async () => {
      let resolveSubmit: () => void;
      const onSubmit = vi.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveSubmit = resolve;
          }),
      );
      render(
        <BaseForm
          formContent={[field(makeDef("name"))]}
          onSubmit={onSubmit}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /submitting/i }),
        ).toBeDefined();
      });

      resolveSubmit!();

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /^submit$/i }),
        ).toBeDefined();
      });
    });

    it("submits without errors when fields are not required", async () => {
      const onSubmit = vi.fn();
      render(
        <BaseForm
          formContent={[field(makeDef("name")), field(makeDef("email"))]}
          onSubmit={onSubmit}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalled();
      });

      expect(screen.queryByRole("alert")).toBeNull();
    });
  });

  describe("sections", () => {
    it("renders fields inside a section", () => {
      render(
        <BaseForm
          formContent={[
            {
              type: "section",
              key: "s1",
              definition: {
                title: "Personal Info",
                fields: [makeDef("name"), makeDef("email")],
              },
            },
          ]}
          onSubmit={vi.fn()}
        />,
      );

      const sectionTitle = screen.getByText("Personal Info");
      const sectionRoot = sectionTitle.closest(
        "[class*='osdkFormSectionBox']",
      );
      expect(sectionRoot).not.toBeNull();
      expect(
        sectionRoot!.querySelector("input[id='name']"),
      ).not.toBeNull();
      expect(
        sectionRoot!.querySelector("input[id='email']"),
      ).not.toBeNull();
    });

    it("shows section error badge for required fields after submit", async () => {
      render(
        <BaseForm
          formContent={[
            {
              type: "section",
              key: "s1",
              definition: {
                title: "Required Section",
                fields: [
                  makeDef("name", { isRequired: true }),
                  makeDef("email", { isRequired: true }),
                ],
              },
            },
          ]}
          onSubmit={vi.fn()}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await waitFor(() => {
        expect(screen.getByText("2 errors")).toBeDefined();
      });
    });

    it("renders custom submit button text", () => {
      render(
        <BaseForm
          formContent={[field(makeDef("name"))]}
          onSubmit={vi.fn()}
          submitButtonText="Save"
        />,
      );

      expect(screen.getByRole("button", { name: "Save" })).toBeDefined();
    });

    it("defaults to Submit when no custom text is provided", () => {
      render(
        <BaseForm
          formContent={[field(makeDef("name"))]}
          onSubmit={vi.fn()}
        />,
      );

      expect(screen.getByRole("button", { name: /^submit$/i })).toBeDefined();
    });

    it("submits values from fields inside sections", async () => {
      const onSubmit = vi.fn();

      render(
        <BaseForm
          formContent={[
            field(makeDef("department")),
            {
              type: "section",
              key: "s1",
              definition: {
                title: "Personal",
                fields: [makeDef("name"), makeDef("email")],
              },
            },
          ]}
          onSubmit={onSubmit}
        />,
      );

      const nameInput = screen.getByRole("textbox", { name: /name/ });
      fireEvent.change(nameInput, { target: { value: "Alice" } });

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Alice" }),
        );
      });
    });
  });
});
