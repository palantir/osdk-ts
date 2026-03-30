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
import { useState } from "react";
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

      expect(screen.getByRole("heading").textContent).toBe("Test Action");
    });

    it("renders custom form title when provided", () => {
      render(
        <ActionForm actionDefinition={TestAction} formTitle="Custom Title" />,
      );

      expect(screen.getByRole("heading").textContent).toBe("Custom Title");
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

      expect(screen.getByRole("heading").textContent).toBe("TestAction");
    });
  });

  describe("field rendering", () => {
    it("generates default fields from fetched metadata", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.getByRole("textbox", { name: /^name/ })).toBeDefined();
      expect(screen.getByRole("textbox", { name: /^email/ })).toBeDefined();
    });

    it("renders default field labels from parameter keys", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.getByText("name")).toBeDefined();
      expect(screen.getByText("email")).toBeDefined();
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

      expect(screen.getByText("Full Name")).toBeDefined();
    });
  });

  describe("submit button", () => {
    it("renders submit button", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.getByRole("button", { name: /submit/i }).textContent).toBe(
        "Submit",
      );
    });

    it("disables submit button when action is pending", () => {
      vi.mocked(useOsdkAction).mockReturnValue({
        ...defaultMockActionResult(),
        isPending: true,
      });

      render(<ActionForm actionDefinition={TestAction} />);

      const button = screen.getByRole("button", { name: /submitting/i });
      expect((button as HTMLButtonElement).disabled).toBe(true);
      expect(button.textContent).toBe("Submitting\u2026");
    });
  });

  describe("form submission", () => {
    it("calls onSuccess after successful submission", async () => {
      const onSuccess = vi.fn();
      const result = { editedObjectTypes: ["TestObject"] };
      mockApplyAction.mockResolvedValue(result);

      render(
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSuccess).toHaveBeenCalledWith(result);
      });
    });

    it("calls onError when submission fails", async () => {
      const onError = vi.fn();
      const error = new Error("Submit failed");
      mockApplyAction.mockRejectedValue(error);

      render(<ActionForm actionDefinition={TestAction} onError={onError} />);

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onError).toHaveBeenCalledWith({
          type: "submission",
          error,
        });
      });
    });
  });

  describe("controlled mode", () => {
    it("submits updated controlled state after a field is edited", async () => {
      type FormState = { name?: string; email?: string };

      function ControlledWrapper() {
        const [formState, setFormState] = useState<FormState>({
          name: "Initial",
          email: "initial@test.com",
        });

        return (
          <ActionForm
            actionDefinition={TestAction}
            formState={formState}
            onFormStateChange={setFormState}
          />
        );
      }

      render(<ControlledWrapper />);

      const textInput = screen.getByRole("textbox", { name: /^name/ });
      fireEvent.change(textInput, { target: { value: "Updated" } });

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({
            name: "Updated",
            email: "initial@test.com",
          }),
        );
      });
    });
  });
});
