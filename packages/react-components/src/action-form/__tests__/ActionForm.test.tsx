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

import type { ActionDefinition, ActionMetadata } from "@osdk/api";
import { useOsdkMetadata } from "@osdk/react";
import { useOsdkAction } from "@osdk/react/experimental";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ActionForm } from "../ActionForm.js";
import type { FormFieldDefinition } from "../FormFieldApi.js";

vi.mock("@osdk/react/experimental", () => ({
  useOsdkAction: vi.fn(),
}));

vi.mock("@osdk/react", () => ({
  useOsdkMetadata: vi.fn(),
}));

/**
 * Test action type with compile-time metadata so FieldKey resolves properly.
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

const TestAction: TestActionDef = {
  type: "action",
  apiName: "TestAction",
} as TestActionDef;

const mockApplyAction = vi.fn().mockResolvedValue({
  editedObjectTypes: [],
});

function defaultMockActionResult() {
  return {
    applyAction: mockApplyAction,
    validateAction: vi.fn(),
    error: undefined,
    data: undefined,
    isPending: false,
    isValidating: false,
    validationResult: undefined,
  };
}

const mockMetadata: ActionMetadata = {
  type: "action",
  apiName: "TestAction",
  displayName: "Test Action",
  parameters: {
    name: {
      type: "string",
      nullable: false,
    },
    email: {
      type: "string",
      nullable: true,
    },
  },
  status: "ACTIVE",
  rid: "ri.ontology.main.action-type.test",
};

function defaultMockMetadataResult() {
  return {
    loading: false,
    metadata: mockMetadata,
  };
}

describe("ActionForm", () => {
  afterEach(cleanup);

  beforeEach(() => {
    vi.mocked(useOsdkAction).mockReturnValue(defaultMockActionResult());
    vi.mocked(useOsdkMetadata).mockReturnValue(defaultMockMetadataResult());
    mockApplyAction.mockReset().mockResolvedValue({ editedObjectTypes: [] });
  });

  describe("form title", () => {
    it("renders form title from metadata displayName", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.getByTestId("form-title").textContent).toBe("Test Action");
    });

    it("renders custom form title when provided", () => {
      render(
        <ActionForm actionDefinition={TestAction} formTitle="Custom Title" />,
      );

      expect(screen.getByTestId("form-title").textContent).toBe("Custom Title");
    });

    it("falls back to apiName when metadata has no displayName", () => {
      vi.mocked(useOsdkMetadata).mockReturnValue({
        loading: false,
        metadata: {
          ...mockMetadata,
          displayName: undefined,
        },
      });

      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.getByTestId("form-title").textContent).toBe("TestAction");
    });
  });

  describe("field rendering", () => {
    it("generates default fields from fetched metadata", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      const nameField = screen.getByTestId("form-field-name");
      const emailField = screen.getByTestId("form-field-email");
      expect(
        nameField.querySelector("[data-testid='text-input-field']"),
      ).not.toBeNull();
      expect(
        emailField.querySelector("[data-testid='text-input-field']"),
      ).not.toBeNull();
    });

    it("renders default field labels from parameter keys", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      const nameField = screen.getByTestId("form-field-name");
      const emailField = screen.getByTestId("form-field-email");

      expect(nameField.querySelector("label")?.textContent).toContain("name");
      expect(emailField.querySelector("label")?.textContent).toContain("email");
    });

    it("renders custom field definitions instead of defaults", () => {
      const customDefs: Array<FormFieldDefinition<TestActionDef>> = [
        {
          fieldKey: "name",
          label: "Full Name",
          fieldComponent: "TEXT_INPUT",
        },
      ];

      render(
        <ActionForm
          actionDefinition={TestAction}
          formFieldDefinitions={customDefs}
        />,
      );

      const nameField = screen.getByTestId("form-field-name");
      expect(nameField?.querySelector("label")?.textContent).toContain(
        "Full Name",
      );
    });
  });

  describe("submit button", () => {
    it("renders submit button", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.getByTestId("submit-button").textContent).toBe("Submit");
    });

    it("disables submit button when action is pending", () => {
      vi.mocked(useOsdkAction).mockReturnValue({
        ...defaultMockActionResult(),
        isPending: true,
      });

      render(<ActionForm actionDefinition={TestAction} />);

      expect(
        (screen.getByTestId("submit-button") as HTMLButtonElement).disabled,
      ).toBe(true);
      expect(screen.getByTestId("submit-button").textContent).toBe(
        "Submitting...",
      );
    });
  });

  describe("form submission", () => {
    it("calls applyAction with entered field values on submit", async () => {
      render(<ActionForm actionDefinition={TestAction} />);

      const textInput = screen
        .getByTestId("form-field-name")
        .querySelector("input");
      expect(textInput).not.toBeNull();

      fireEvent.change(textInput!, { target: { value: "Alice" } });

      fireEvent.submit(screen.getByTestId("action-form"));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Alice" }),
        );
      });
    });

    it("passes undefined for fields the user did not fill", async () => {
      render(<ActionForm actionDefinition={TestAction} />);

      fireEvent.submit(screen.getByTestId("action-form"));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: undefined, email: undefined }),
        );
      });
    });

    it("passes defaultValue for fields with a default", async () => {
      const defs: Array<FormFieldDefinition<TestActionDef>> = [
        {
          fieldKey: "name",
          label: "Name",
          fieldComponent: "TEXT_INPUT",
          defaultValue: "Bob",
        },
      ];

      render(
        <ActionForm
          actionDefinition={TestAction}
          formFieldDefinitions={defs}
        />,
      );

      fireEvent.submit(screen.getByTestId("action-form"));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Bob" }),
        );
      });
    });

    it("calls onSuccess after successful submission", async () => {
      const onSuccess = vi.fn();
      const result = { editedObjectTypes: ["TestObject"] };
      mockApplyAction.mockResolvedValue(result);

      render(
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />,
      );

      fireEvent.submit(screen.getByTestId("action-form"));

      await vi.waitFor(() => {
        expect(onSuccess).toHaveBeenCalledWith(result);
      });
    });

    it("calls onError when submission fails", async () => {
      const onError = vi.fn();
      const error = new Error("Submit failed");
      mockApplyAction.mockRejectedValue(error);

      render(<ActionForm actionDefinition={TestAction} onError={onError} />);

      fireEvent.submit(screen.getByTestId("action-form"));

      await vi.waitFor(() => {
        expect(onError).toHaveBeenCalledWith({
          type: "submission",
          error,
        });
      });
    });
  });

  describe("controlled mode", () => {
    it("uses controlled formState on submit", async () => {
      render(
        <ActionForm
          actionDefinition={TestAction}
          formState={{ name: "Alice", email: "alice@test.com" }}
          onFormStateChange={vi.fn()}
        />,
      );

      fireEvent.submit(screen.getByTestId("action-form"));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Alice", email: "alice@test.com" }),
        );
      });
    });

    it("calls onFormStateChange with updater when a field is edited", () => {
      const onFormStateChange = vi.fn();

      render(
        <ActionForm
          actionDefinition={TestAction}
          formState={{ name: "Initial", email: "initial@test.com" }}
          onFormStateChange={onFormStateChange}
        />,
      );

      const textInput = screen
        .getByTestId("form-field-name")
        .querySelector("input");
      expect(textInput).not.toBeNull();

      fireEvent.change(textInput!, { target: { value: "Updated" } });

      expect(onFormStateChange).toHaveBeenCalledWith(expect.any(Function));

      const updater = onFormStateChange.mock.calls[0][0] as (
        prev: Record<string, unknown>,
      ) => Record<string, unknown>;
      const result = updater({
        name: "Initial",
        email: "initial@test.com",
      });
      expect(result).toEqual(
        expect.objectContaining({ name: "Updated", email: "initial@test.com" }),
      );
    });

    it("submits parent-controlled formState even after user edits", async () => {
      render(
        <ActionForm
          actionDefinition={TestAction}
          formState={{ name: "Parent", email: "parent@test.com" }}
          onFormStateChange={vi.fn()}
        />,
      );

      const textInput = screen
        .getByTestId("form-field-name")
        .querySelector("input");
      expect(textInput).not.toBeNull();

      fireEvent.change(textInput!, { target: { value: "User Typed This" } });

      fireEvent.submit(screen.getByTestId("action-form"));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Parent" }),
        );
      });
    });
  });
});
