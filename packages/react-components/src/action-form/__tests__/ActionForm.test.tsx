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

import type {
  ActionDefinition,
  ActionMetadata,
  ActionValidationResponse,
} from "@osdk/api";
import type * as OsdkReact from "@osdk/react";
import { useOsdkAction, useOsdkMetadata } from "@osdk/react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ActionForm } from "../ActionForm.js";
import type { FormFieldDefinition } from "../FormFieldApi.js";

vi.mock("@osdk/react", async (importOriginal) => {
  const actual = await importOriginal<typeof OsdkReact>();
  return {
    ...actual,
    useOsdkAction: vi.fn(),
    useRegisterUserAgent: vi.fn(),
    useOsdkMetadata: vi.fn(),
  };
});

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

interface BooleanActionDef extends ActionDefinition<unknown> {
  __DefinitionMetadata: {
    signatures: unknown;
    parameters: {
      enabled: { type: "boolean" };
    };
    type: "action";
    apiName: "BooleanAction";
    status: "ACTIVE";
    rid: string;
  };
}

const TestAction: TestActionDef = {
  type: "action",
  apiName: "TestAction",
} as TestActionDef;

const BooleanAction: BooleanActionDef = {
  type: "action",
  apiName: "BooleanAction",
} as BooleanActionDef;

const mockApplyAction = vi.fn().mockResolvedValue({
  editedObjectTypes: [],
});
const mockValidateAction = vi.fn();
const VALID_RESPONSE: ActionValidationResponse = {
  result: "VALID",
  submissionCriteria: [],
  parameters: {},
};

function createDeferred<T>() {
  let resolvePromise: (value: T | PromiseLike<T>) => void = () => {
    throw new Error("Deferred promise was resolved before initialization");
  };
  let rejectPromise: (reason?: unknown) => void = () => {
    throw new Error("Deferred promise was rejected before initialization");
  };
  const promise = new Promise<T>((resolve, reject) => {
    resolvePromise = resolve;
    rejectPromise = reject;
  });
  return {
    promise,
    resolve: resolvePromise,
    reject: rejectPromise,
  };
}

function defaultMockActionResult() {
  return {
    applyAction: mockApplyAction,
    validateAction: mockValidateAction,
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
    mockValidateAction.mockReset().mockResolvedValue(VALID_RESPONSE);
  });

  describe("form title", () => {
    it("does not render a form title by default", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.queryByRole("heading")).toBeNull();
    });

    it("renders form title from metadata displayName when showFormTitle is true", () => {
      render(<ActionForm actionDefinition={TestAction} showFormTitle={true} />);

      expect(screen.getByRole("heading").textContent).toBe("Test Action");
    });

    it("renders custom form title when showFormTitle is true", () => {
      render(
        <ActionForm
          actionDefinition={TestAction}
          formTitle="Custom Title"
          showFormTitle={true}
        />,
      );

      expect(screen.getByRole("heading").textContent).toBe("Custom Title");
    });

    it("does not render a form title when showFormTitle is false", () => {
      render(
        <ActionForm actionDefinition={TestAction} showFormTitle={false} />,
      );

      expect(screen.queryByRole("heading")).toBeNull();
    });

    it("falls back to apiName when metadata has no displayName", () => {
      vi.mocked(useOsdkMetadata).mockReturnValue({
        loading: false,
        metadata: {
          ...mockMetadata,
          displayName: undefined,
        },
      });

      render(<ActionForm actionDefinition={TestAction} showFormTitle={true} />);

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
          fieldComponentProps: {},
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

      // Fill required field before submitting
      fireEvent.input(screen.getByRole("textbox", { name: /^name/ }), {
        target: { value: "Alice" },
      });
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

      // Fill required field before submitting
      fireEvent.input(screen.getByRole("textbox", { name: /^name/ }), {
        target: { value: "Alice" },
      });
      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onError).toHaveBeenCalledWith({
          type: "submission",
          error,
        });
      });
    });

    it("blocks submission when required fields are empty", async () => {
      const onSuccess = vi.fn();
      const result = { editedObjectTypes: [] };
      mockApplyAction.mockResolvedValue(result);

      render(
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />,
      );

      // Submit without filling the required "name" field
      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(screen.getByRole("alert")).toBeDefined();
      });

      expect(onSuccess).not.toHaveBeenCalled();
    });

    it("submits without errors when fields are not required", async () => {
      // Override metadata so both fields are nullable (not required)
      vi.mocked(useOsdkMetadata).mockReturnValue({
        ...defaultMockMetadataResult(),
        metadata: {
          ...mockMetadata,
          parameters: {
            name: { type: "string", nullable: true },
            email: { type: "string", nullable: true },
          },
        },
      });

      const onSuccess = vi.fn();
      const result = { editedObjectTypes: [] };
      mockApplyAction.mockResolvedValue(result);

      render(
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(onSuccess).toHaveBeenCalledWith(result);
      });
    });

    it("submits top-level field definition default values", async () => {
      const customDefs: Array<FormFieldDefinition<TestActionDef>> = [
        {
          fieldKey: "name",
          label: "Full Name",
          fieldComponent: "TEXT_INPUT",
          defaultValue: "Ada Lovelace",
          fieldComponentProps: {},
        },
      ];

      render(
        <ActionForm
          actionDefinition={TestAction}
          formFieldDefinitions={customDefs}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/i }));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Ada Lovelace" }),
        );
      });
    });
  });

  describe("server validation", () => {
    it("debounces validateAction calls and reports validation responses", async () => {
      vi.useFakeTimers();
      const onValidationResponse = vi.fn();

      try {
        render(
          <ActionForm
            actionDefinition={TestAction}
            onValidationResponse={onValidationResponse}
          />,
        );

        fireEvent.input(screen.getByRole("textbox", { name: /^name/ }), {
          target: { value: "Alice" },
        });

        await vi.advanceTimersByTimeAsync(499);
        expect(mockValidateAction).not.toHaveBeenCalled();

        await vi.advanceTimersByTimeAsync(1);

        await vi.waitFor(() => {
          expect(mockValidateAction).toHaveBeenCalledWith({ name: "Alice" });
          expect(onValidationResponse).toHaveBeenCalledWith(VALID_RESPONSE);
        });
      } finally {
        vi.useRealTimers();
      }
    });

    it("ignores in-flight validation responses after a newer field change", async () => {
      vi.useFakeTimers();
      const onValidationResponse = vi.fn();
      const firstValidation = createDeferred<ActionValidationResponse>();
      const secondValidation = createDeferred<ActionValidationResponse>();
      const staleResponse: ActionValidationResponse = {
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            required: false,
            evaluatedConstraints: [{
              type: "oneOf",
              options: [{ displayName: "Alice A.", value: "alice" }],
              otherValuesAllowed: false,
            }],
          },
        },
      };

      mockValidateAction
        .mockReturnValueOnce(firstValidation.promise)
        .mockReturnValueOnce(secondValidation.promise);

      try {
        render(
          <ActionForm
            actionDefinition={TestAction}
            onValidationResponse={onValidationResponse}
          />,
        );

        fireEvent.input(screen.getByRole("textbox", { name: /^name/ }), {
          target: { value: "Alice" },
        });
        await vi.advanceTimersByTimeAsync(500);
        expect(mockValidateAction).toHaveBeenCalledWith({ name: "Alice" });

        fireEvent.input(screen.getByRole("textbox", { name: /^name/ }), {
          target: { value: "Bob" },
        });
        firstValidation.resolve(staleResponse);
        await vi.advanceTimersByTimeAsync(0);

        expect(onValidationResponse).not.toHaveBeenCalled();
        expect(screen.getByRole("textbox", { name: /^name/ })).toBeDefined();

        await vi.advanceTimersByTimeAsync(500);
        expect(mockValidateAction).toHaveBeenCalledWith({ name: "Bob" });

        secondValidation.resolve(VALID_RESPONSE);
        await vi.advanceTimersByTimeAsync(0);

        expect(onValidationResponse).toHaveBeenCalledWith(VALID_RESPONSE);
      } finally {
        vi.useRealTimers();
      }
    });

    it("renders generated fields with server oneOf constraints as dropdowns", async () => {
      vi.useFakeTimers();
      const validationResponse: ActionValidationResponse = {
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            required: false,
            evaluatedConstraints: [{
              type: "oneOf",
              options: [
                { displayName: "Alice A.", value: "alice" },
                { displayName: "Bob B.", value: "bob" },
              ],
              otherValuesAllowed: false,
            }],
          },
        },
      };
      mockValidateAction.mockResolvedValue(validationResponse);

      try {
        render(<ActionForm actionDefinition={TestAction} />);

        fireEvent.input(screen.getByRole("textbox", { name: /^name/ }), {
          target: { value: "Alice" },
        });

        await vi.advanceTimersByTimeAsync(500);

        await vi.waitFor(() => {
          expect(screen.queryByRole("textbox", { name: /^name/ })).toBeNull();
          expect(screen.getByRole("combobox", { name: /^name/ })).toBeDefined();
        });
      } finally {
        vi.useRealTimers();
      }
    });

    it("does not change custom non-select fields for server oneOf constraints", async () => {
      vi.useFakeTimers();
      mockValidateAction.mockResolvedValue(
        {
          result: "VALID",
          submissionCriteria: [],
          parameters: {
            name: {
              result: "VALID",
              required: false,
              evaluatedConstraints: [{
                type: "oneOf",
                options: [{ displayName: "Alice A.", value: "alice" }],
                otherValuesAllowed: false,
              }],
            },
          },
        } satisfies ActionValidationResponse,
      );
      const customDefs: Array<FormFieldDefinition<TestActionDef>> = [
        {
          fieldKey: "name",
          label: "Full Name",
          fieldComponent: "TEXT_INPUT",
          fieldComponentProps: {},
        },
      ];

      try {
        render(
          <ActionForm
            actionDefinition={TestAction}
            formFieldDefinitions={customDefs}
          />,
        );

        fireEvent.input(screen.getByRole("textbox", { name: /^Full Name/ }), {
          target: { value: "Alice" },
        });

        await vi.advanceTimersByTimeAsync(500);

        await vi.waitFor(() => {
          expect(
            screen.getByRole("textbox", { name: /^Full Name/ }),
          ).toBeDefined();
        });
      } finally {
        vi.useRealTimers();
      }
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
