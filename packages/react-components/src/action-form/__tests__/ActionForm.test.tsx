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
import { useOsdkAction, useOsdkMetadata } from "@osdk/react";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { useCallback, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ActionForm } from "../ActionForm.js";
import type { FormFieldDefinition } from "../FormFieldApi.js";

vi.mock("@osdk/react", () => ({
  useOsdkAction: vi.fn(),
  useRegisterUserAgent: vi.fn(),
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

interface ScalarActionDef extends ActionDefinition<unknown> {
  __DefinitionMetadata: {
    signatures: unknown;
    parameters: {
      text: { type: "string" };
      count: { type: "integer" };
      enabled: { type: "boolean" };
    };
    type: "action";
    apiName: "ScalarAction";
    status: "ACTIVE";
    rid: string;
  };
}

const TestAction: TestActionDef = {
  type: "action",
  apiName: "TestAction",
} as TestActionDef;

const ReloadedTestAction: TestActionDef = {
  type: "action",
  apiName: "ReloadedTestAction",
} as TestActionDef;

const ScalarAction: ScalarActionDef = {
  type: "action",
  apiName: "ScalarAction",
} as ScalarActionDef;

const mockApplyAction = vi.fn().mockResolvedValue({
  editedObjectTypes: [],
});
const mockValidateAction = vi.fn();

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

function resetActionFormMocks(): void {
  vi.mocked(useOsdkAction).mockReturnValue(defaultMockActionResult());
  vi.mocked(useOsdkMetadata).mockReturnValue(defaultMockMetadataResult());
  mockApplyAction.mockReset().mockResolvedValue({ editedObjectTypes: [] });
  mockValidateAction.mockReset().mockResolvedValue(undefined);
}

describe("ActionForm", () => {
  afterEach(cleanup);

  beforeEach(resetActionFormMocks);

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

      expect(screen.getByRole("textbox", { name: /^name/u })).toBeDefined();
      expect(screen.getByRole("textbox", { name: /^email/u })).toBeDefined();
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

    it("wires disabled from custom field definitions to the rendered field", async () => {
      const customDefs: Array<FormFieldDefinition<TestActionDef>> = [
        {
          fieldKey: "name",
          label: "Full Name",
          defaultValue: "Alice",
          disabled: true,
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

      const input = screen.getByRole("textbox", { name: "Full Name" });
      expect(input).toHaveProperty("disabled", true);

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Alice" }),
        );
      });
    });
  });

  describe("submit button", () => {
    it("renders submit button", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.getByRole("button", { name: /submit/iu }).textContent).toBe(
        "Submit",
      );
    });

    it("disables submit button when action is pending", () => {
      vi.mocked(useOsdkAction).mockReturnValue({
        ...defaultMockActionResult(),
        isPending: true,
      });

      render(<ActionForm actionDefinition={TestAction} />);

      const button = screen.getByRole("button", { name: /submitting/iu });
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
      fireEvent.input(screen.getByRole("textbox", { name: /^name/u }), {
        target: { value: "Alice" },
      });
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

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
      fireEvent.input(screen.getByRole("textbox", { name: /^name/u }), {
        target: { value: "Alice" },
      });
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

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
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

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

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

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

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Ada Lovelace" }),
        );
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

      const textInput = screen.getByRole("textbox", { name: /^name/u });
      fireEvent.change(textInput, { target: { value: "Updated" } });

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

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
describe("ActionForm validation defaults", () => {
  afterEach(cleanup);

  beforeEach(resetActionFormMocks);

  it("immediately validates the complete displayed form state", async () => {
    const customDefs: Array<FormFieldDefinition<TestActionDef>> = [
      {
        fieldKey: "name",
        label: "Name",
        defaultValue: "Ada Lovelace",
        fieldComponent: "TEXT_INPUT",
        fieldComponentProps: {},
      },
      {
        fieldKey: "email",
        label: "Email",
        defaultValue: "ada@example.com",
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

    await vi.waitFor(() => {
      expect(mockValidateAction).toHaveBeenCalledWith({
        name: "Ada Lovelace",
        email: "ada@example.com",
      });
    });
  });

  it("displays string, number, and boolean validation defaults", async () => {
    vi.mocked(useOsdkMetadata).mockReturnValue({
      loading: false,
      metadata: {
        type: "action",
        apiName: "ScalarAction",
        displayName: "Scalar Action",
        parameters: {
          text: { type: "string", nullable: true },
          count: { type: "integer", nullable: true },
          enabled: { type: "boolean", nullable: true },
        },
        status: "ACTIVE",
        rid: "ri.ontology.main.action-type.scalars",
      },
    });
    const validationResponse: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        text: {
          result: "VALID",
          evaluatedConstraints: [],
          required: false,
          defaultValue: "Ada",
        },
        count: {
          result: "VALID",
          evaluatedConstraints: [],
          required: false,
          defaultValue: 42,
        },
        enabled: {
          result: "VALID",
          evaluatedConstraints: [],
          required: false,
          defaultValue: true,
        },
      },
    };
    mockValidateAction.mockResolvedValue(validationResponse);
    const scalarDefinitions: Array<FormFieldDefinition<ScalarActionDef>> = [
      {
        fieldKey: "text",
        label: "text",
        fieldComponent: "TEXT_INPUT",
        fieldComponentProps: {},
      },
      {
        fieldKey: "count",
        label: "count",
        fieldComponent: "NUMBER_INPUT",
        fieldComponentProps: {},
      },
      {
        fieldKey: "enabled",
        label: "enabled",
        fieldComponent: "SWITCH",
        fieldComponentProps: {},
      },
    ];

    render(
      <ActionForm
        actionDefinition={ScalarAction}
        formFieldDefinitions={scalarDefinitions}
      />,
    );

    await vi.waitFor(() => {
      expect(
        (screen.getByRole("textbox", { name: "text" }) as HTMLInputElement)
          .value,
      ).toBe("Ada");
      expect(
        (screen.getByRole("textbox", { name: "count" }) as HTMLInputElement)
          .value,
      ).toBe("42");
      expect(
        screen
          .getByRole("switch", { name: "enabled" })
          .getAttribute("aria-checked"),
      ).toBe("true");
    });
  });

  it("displays a validation default from an invalid response", async () => {
    const validationResponse: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "INVALID",
          evaluatedConstraints: [],
          required: true,
          defaultValue: "Fallback name",
        },
      },
    };
    mockValidateAction.mockResolvedValue(validationResponse);

    render(<ActionForm actionDefinition={TestAction} />);

    await vi.waitFor(() => {
      expect(
        (screen.getByRole("textbox", { name: /^name/u }) as HTMLInputElement)
          .value,
      ).toBe("Fallback name");
    });
  });

  it("does not replace an explicit field-definition default", async () => {
    const validationResponse: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          evaluatedConstraints: [],
          required: false,
          defaultValue: "Validation default",
        },
      },
    };
    let resolveValidation: (
      response: ActionValidationResponse | undefined,
    ) => void;
    mockValidateAction.mockReturnValue(
      new Promise((resolve) => {
        resolveValidation = resolve;
      }),
    );
    const definitions: Array<FormFieldDefinition<TestActionDef>> = [
      {
        fieldKey: "name",
        label: "Name",
        defaultValue: "Configured default",
        fieldComponent: "TEXT_INPUT",
        fieldComponentProps: {},
      },
    ];

    render(
      <ActionForm
        actionDefinition={TestAction}
        formFieldDefinitions={definitions}
      />,
    );

    await vi.waitFor(() => {
      expect(mockValidateAction).toHaveBeenCalledTimes(1);
    });
    await act(async () => {
      resolveValidation!(validationResponse);
      await Promise.resolve();
    });

    expect(
      (screen.getByRole("textbox", { name: "Name" }) as HTMLInputElement).value,
    ).toBe("Configured default");
  });
});
describe("ActionForm validation provenance", () => {
  afterEach(cleanup);

  beforeEach(resetActionFormMocks);

  it("applies a validation default after focus and blur without an edit", async () => {
    const validationResponse: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          evaluatedConstraints: [],
          required: false,
          defaultValue: "Validation default",
        },
      },
    };
    let resolveValidation: (
      response: ActionValidationResponse | undefined,
    ) => void;
    mockValidateAction.mockReturnValue(
      new Promise((resolve) => {
        resolveValidation = resolve;
      }),
    );

    render(<ActionForm actionDefinition={TestAction} />);

    const nameInput = screen.getByRole("textbox", {
      name: /^name/u,
    }) as HTMLInputElement;
    fireEvent.focus(nameInput);
    fireEvent.blur(nameInput);

    await act(async () => {
      resolveValidation!(validationResponse);
      await Promise.resolve();
    });

    expect(nameInput.value).toBe("Validation default");
    expect(screen.queryByText("Edited")).toBeNull();
  });

  it("does not apply a validation default after a user change event", async () => {
    const validationResponse: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          evaluatedConstraints: [],
          required: false,
          defaultValue: "Validation default",
        },
      },
    };
    let resolveValidation: (
      response: ActionValidationResponse | undefined,
    ) => void;
    mockValidateAction.mockReturnValue(
      new Promise((resolve) => {
        resolveValidation = resolve;
      }),
    );
    const onFormStateChange = vi.fn();

    render(
      <ActionForm
        actionDefinition={TestAction}
        formState={{}}
        onFormStateChange={onFormStateChange}
      />,
    );

    const nameInput = screen.getByRole("textbox", {
      name: /^name/u,
    }) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "User value" } });
    expect(screen.queryByText("Edited")).not.toBeNull();

    await act(async () => {
      resolveValidation!(validationResponse);
      await Promise.resolve();
    });

    expect(nameInput.value).toBe("User value");
    expect(onFormStateChange).toHaveBeenCalledTimes(1);
  });

  it("replaces a validation-owned default after a later response", async () => {
    mockValidateAction
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "First default",
          },
        },
      })
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Second default",
          },
        },
      });
    const onFormStateChange = vi.fn();
    const { rerender } = render(
      <ActionForm
        actionDefinition={TestAction}
        formState={{}}
        onFormStateChange={onFormStateChange}
      />,
    );

    const nameInput = screen.getByRole("textbox", {
      name: /^name/u,
    }) as HTMLInputElement;
    await vi.waitFor(() => {
      expect(nameInput.value).toBe("First default");
    });

    rerender(
      <ActionForm
        actionDefinition={TestAction}
        formState={{ email: "trigger@example.com" }}
        onFormStateChange={onFormStateChange}
      />,
    );

    await vi.waitFor(() => {
      expect(nameInput.value).toBe("Second default");
    });
  });

  it("clears a validation-owned default when a later response omits it", async () => {
    mockValidateAction
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Temporary default",
          },
        },
      })
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
          },
        },
      });
    const onFormStateChange = vi.fn();
    const { rerender } = render(
      <ActionForm
        actionDefinition={TestAction}
        formState={{}}
        onFormStateChange={onFormStateChange}
      />,
    );

    const nameInput = screen.getByRole("textbox", {
      name: /^name/u,
    }) as HTMLInputElement;
    await vi.waitFor(() => {
      expect(nameInput.value).toBe("Temporary default");
    });

    rerender(
      <ActionForm
        actionDefinition={TestAction}
        formState={{ email: "trigger@example.com" }}
        onFormStateChange={onFormStateChange}
      />,
    );

    await vi.waitFor(() => {
      expect(nameInput.value).toBe("");
    });
  });

  it("revalidates an applied default and stops when the default is unchanged", async () => {
    vi.useFakeTimers();
    const validationResponse: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          evaluatedConstraints: [],
          required: false,
          defaultValue: "Stable default",
        },
      },
    };
    mockValidateAction.mockResolvedValue(validationResponse);

    try {
      render(<ActionForm actionDefinition={TestAction} />);

      await act(async () => {
        await Promise.resolve();
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(1);

      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(2);
      expect(mockValidateAction).toHaveBeenLastCalledWith({
        name: "Stable default",
      });

      await act(async () => {
        await vi.advanceTimersByTimeAsync(1_000);
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(2);
    } finally {
      vi.useRealTimers();
    }
  });
});
describe("ActionForm validation state", () => {
  afterEach(cleanup);

  beforeEach(resetActionFormMocks);

  it("validates changes with a 500ms leading and trailing debounce", async () => {
    vi.useFakeTimers();
    try {
      render(<ActionForm actionDefinition={TestAction} />);

      await act(async () => {
        await Promise.resolve();
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(1);

      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });

      const nameInput = screen.getByRole("textbox", {
        name: /^name/u,
      });
      fireEvent.change(nameInput, { target: { value: "A" } });
      expect(mockValidateAction).toHaveBeenCalledTimes(2);
      expect(mockValidateAction).toHaveBeenLastCalledWith({ name: "A" });

      fireEvent.change(nameInput, { target: { value: "Ada" } });
      expect(mockValidateAction).toHaveBeenCalledTimes(2);

      await act(async () => {
        await vi.advanceTimersByTimeAsync(499);
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(2);

      await act(async () => {
        await vi.advanceTimersByTimeAsync(1);
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(3);
      expect(mockValidateAction).toHaveBeenLastCalledWith({ name: "Ada" });
    } finally {
      vi.useRealTimers();
    }
  });

  it("coerces displayed values before backend validation", async () => {
    vi.useFakeTimers();
    vi.mocked(useOsdkMetadata).mockReturnValue({
      loading: false,
      metadata: {
        type: "action",
        apiName: "ScalarAction",
        displayName: "Scalar Action",
        parameters: {
          text: { type: "string", nullable: true },
          count: { type: "integer", nullable: true },
          enabled: { type: "boolean", nullable: true },
        },
        status: "ACTIVE",
        rid: "ri.ontology.main.action-type.scalars",
      },
    });
    const definitions: Array<FormFieldDefinition<ScalarActionDef>> = [
      {
        fieldKey: "count",
        label: "count",
        fieldComponent: "CUSTOM",
        fieldComponentProps: {
          customRenderer: (props) => (
            <button type="button" onClick={() => props.onChange?.("42.9")}>
              Set numeric string
            </button>
          ),
        },
      },
    ];

    try {
      render(
        <ActionForm
          actionDefinition={ScalarAction}
          formFieldDefinitions={definitions}
        />,
      );
      expect(mockValidateAction).toHaveBeenCalledTimes(1);

      fireEvent.click(
        screen.getByRole("button", { name: "Set numeric string" }),
      );
      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });

      expect(mockValidateAction).toHaveBeenCalledTimes(2);
      expect(mockValidateAction).toHaveBeenLastCalledWith({ count: 42 });
    } finally {
      vi.useRealTimers();
    }
  });

  it("validates a programmatic controlled-state update", async () => {
    vi.useFakeTimers();

    function ControlledValidationForm() {
      const [formState, setFormState] = useState({ name: "Initial" });
      return (
        <>
          <button
            type="button"
            onClick={() => setFormState({ name: "Programmatic" })}
          >
            Update state
          </button>
          <ActionForm
            actionDefinition={TestAction}
            formState={formState}
            onFormStateChange={setFormState}
          />
        </>
      );
    }

    try {
      render(<ControlledValidationForm />);
      expect(mockValidateAction).toHaveBeenCalledWith({ name: "Initial" });

      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });
      fireEvent.click(screen.getByRole("button", { name: "Update state" }));

      expect(mockValidateAction).toHaveBeenCalledTimes(2);
      expect(mockValidateAction).toHaveBeenLastCalledWith({
        name: "Programmatic",
      });
    } finally {
      vi.useRealTimers();
    }
  });

  it("reports validation-default application, replacement, and clearing in uncontrolled mode", async () => {
    vi.useFakeTimers();
    mockValidateAction
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "First default",
          },
        },
      })
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Second default",
          },
        },
      })
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
          },
        },
      });
    type TestFormState = { name?: string; email?: string };
    let observedState: TestFormState = {};
    const observedStates: TestFormState[] = [];
    const onFormStateChange = vi.fn(
      (updater: (previous: TestFormState) => TestFormState) => {
        observedState = updater(observedState);
        observedStates.push(observedState);
      },
    );

    try {
      render(
        <ActionForm
          actionDefinition={TestAction}
          onFormStateChange={onFormStateChange}
        />,
      );
      await act(async () => {
        await Promise.resolve();
      });
      expect(observedStates).toEqual([{ name: "First default" }]);

      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });
      expect(observedStates).toEqual([
        { name: "First default" },
        { name: "Second default" },
        {},
      ]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("replaces and clears validation defaults echoed by controlled state", async () => {
    vi.useFakeTimers();
    mockValidateAction
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "First default",
          },
        },
      })
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Second default",
          },
        },
      })
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
          },
        },
      });
    type TestFormState = { name?: string; email?: string };
    const controlledTransitions: TestFormState[] = [];

    function ControlledDefaultsForm() {
      const [formState, setFormState] = useState<TestFormState>({});
      const handleFormStateChange = useCallback(
        (updater: (previous: TestFormState) => TestFormState) => {
          setFormState((previous) => {
            const next = updater(previous);
            controlledTransitions.push(next);
            return next;
          });
        },
        [],
      );
      return (
        <ActionForm
          actionDefinition={TestAction}
          formState={formState}
          onFormStateChange={handleFormStateChange}
        />
      );
    }

    try {
      render(<ControlledDefaultsForm />);
      await act(async () => {
        await Promise.resolve();
      });
      expect(controlledTransitions).toEqual([{ name: "First default" }]);

      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });
      expect(controlledTransitions).toEqual([
        { name: "First default" },
        { name: "Second default" },
        {},
      ]);
      expect(
        (screen.getByRole("textbox", { name: /^name/u }) as HTMLInputElement)
          .value,
      ).toBe("");
    } finally {
      vi.useRealTimers();
    }
  });

  it("preserves a divergent programmatic parent value from later defaults", async () => {
    vi.useFakeTimers();
    mockValidateAction
      .mockResolvedValueOnce({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Validation default",
          },
        },
      })
      .mockResolvedValue({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Later default",
          },
        },
      });
    type TestFormState = { name?: string; email?: string };

    function ControlledParentForm() {
      const [formState, setFormState] = useState<TestFormState>({});
      return (
        <>
          <button
            type="button"
            onClick={() => setFormState({ name: "Parent value" })}
          >
            Set parent value
          </button>
          <ActionForm
            actionDefinition={TestAction}
            formState={formState}
            onFormStateChange={setFormState}
          />
        </>
      );
    }

    try {
      render(<ControlledParentForm />);
      await act(async () => {
        await Promise.resolve();
      });
      expect(
        (screen.getByRole("textbox", { name: /^name/u }) as HTMLInputElement)
          .value,
      ).toBe("Validation default");

      fireEvent.click(screen.getByRole("button", { name: "Set parent value" }));
      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });

      expect(mockValidateAction).toHaveBeenCalledTimes(2);
      expect(mockValidateAction).toHaveBeenLastCalledWith({
        name: "Parent value",
      });
      expect(
        (screen.getByRole("textbox", { name: /^name/u }) as HTMLInputElement)
          .value,
      ).toBe("Parent value");
    } finally {
      vi.useRealTimers();
    }
  });
});
describe("ActionForm validation lifecycle", () => {
  afterEach(cleanup);

  beforeEach(resetActionFormMocks);

  it("ignores a validation response made stale by a later form change", async () => {
    let resolveValidation: (
      response: ActionValidationResponse | undefined,
    ) => void;
    mockValidateAction.mockReturnValue(
      new Promise((resolve) => {
        resolveValidation = resolve;
      }),
    );
    const onValidationResponse = vi.fn();

    render(
      <ActionForm
        actionDefinition={TestAction}
        onValidationResponse={onValidationResponse}
      />,
    );
    const nameInput = screen.getByRole("textbox", {
      name: /^name/u,
    }) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: "User value" } });

    await act(async () => {
      resolveValidation!({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Stale default",
          },
        },
      });
      await Promise.resolve();
    });

    expect(nameInput.value).toBe("User value");
    expect(onValidationResponse).not.toHaveBeenCalled();
  });

  it("calls onValidationResponse after scheduling derived form state", async () => {
    mockValidateAction.mockResolvedValue({
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          evaluatedConstraints: [],
          required: false,
          defaultValue: "Validation default",
        },
      },
    });
    const events: string[] = [];

    render(
      <ActionForm
        actionDefinition={TestAction}
        onFormStateChange={() => {
          events.push("form state");
        }}
        onValidationResponse={() => {
          events.push("validation response");
        }}
      />,
    );

    await vi.waitFor(() => {
      expect(events).toEqual(["form state", "validation response"]);
    });
  });

  it("keeps the form unchanged and usable when validation rejects", async () => {
    mockValidateAction.mockRejectedValue(new Error("Validation failed"));
    const onError = vi.fn();
    const definitions: Array<FormFieldDefinition<TestActionDef>> = [
      {
        fieldKey: "name",
        label: "Name",
        defaultValue: "Visible value",
        fieldComponent: "TEXT_INPUT",
        fieldComponentProps: {},
      },
    ];

    render(
      <ActionForm
        actionDefinition={TestAction}
        formFieldDefinitions={definitions}
        onError={onError}
      />,
    );

    await vi.waitFor(() => {
      expect(mockValidateAction).toHaveBeenCalledTimes(1);
    });
    expect(
      (screen.getByRole("textbox", { name: "Name" }) as HTMLInputElement).value,
    ).toBe("Visible value");
    expect(screen.queryByRole("alert")).toBeNull();
    expect(
      (
        screen.getByRole("button", {
          name: /^submit$/iu,
        }) as HTMLButtonElement
      ).disabled,
    ).toBe(false);
    expect(onError).not.toHaveBeenCalled();
  });

  it("does not render errors or gate submit for an invalid response", async () => {
    mockValidateAction.mockResolvedValue({
      result: "INVALID",
      submissionCriteria: [
        {
          result: "INVALID",
          configuredFailureMessage: "Backend validation failed",
        },
      ],
      parameters: {
        name: {
          result: "INVALID",
          evaluatedConstraints: [],
          required: false,
        },
      },
    });
    const onError = vi.fn();
    const onValidationResponse = vi.fn();
    const definitions: Array<FormFieldDefinition<TestActionDef>> = [
      {
        fieldKey: "name",
        label: "Name",
        fieldComponent: "TEXT_INPUT",
        fieldComponentProps: {},
      },
    ];

    render(
      <ActionForm
        actionDefinition={TestAction}
        formFieldDefinitions={definitions}
        onError={onError}
        onValidationResponse={onValidationResponse}
      />,
    );

    await vi.waitFor(() => {
      expect(onValidationResponse).toHaveBeenCalledTimes(1);
    });
    expect(screen.queryByRole("alert")).toBeNull();
    expect(
      (
        screen.getByRole("button", {
          name: /^submit$/iu,
        }) as HTMLButtonElement
      ).disabled,
    ).toBe(false);
    expect(onError).not.toHaveBeenCalled();
  });

  it("revalidates when parameters change without a metadata RID change", async () => {
    vi.useFakeTimers();
    try {
      const { rerender } = render(<ActionForm actionDefinition={TestAction} />);
      expect(mockValidateAction).toHaveBeenCalledTimes(1);

      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });
      vi.mocked(useOsdkMetadata).mockReturnValue({
        loading: false,
        metadata: {
          ...mockMetadata,
          parameters: { ...mockMetadata.parameters },
        },
      });
      rerender(
        <ActionForm actionDefinition={TestAction} showFormTitle={true} />,
      );

      expect(mockValidateAction).toHaveBeenCalledTimes(2);
    } finally {
      vi.useRealTimers();
    }
  });

  it("ignores an in-flight response from a previous parameter context", async () => {
    let resolveValidation: (
      response: ActionValidationResponse | undefined,
    ) => void;
    mockValidateAction
      .mockReturnValueOnce(
        new Promise((resolve) => {
          resolveValidation = resolve;
        }),
      )
      .mockResolvedValue(undefined);
    const onValidationResponse = vi.fn();
    const { rerender } = render(
      <ActionForm
        actionDefinition={TestAction}
        onValidationResponse={onValidationResponse}
      />,
    );

    vi.mocked(useOsdkMetadata).mockReturnValue({
      loading: false,
      metadata: {
        ...mockMetadata,
        parameters: { ...mockMetadata.parameters },
      },
    });
    rerender(
      <ActionForm
        actionDefinition={TestAction}
        onValidationResponse={onValidationResponse}
        showFormTitle={true}
      />,
    );

    await act(async () => {
      resolveValidation!({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Stale context default",
          },
        },
      });
      await Promise.resolve();
    });

    expect(
      (screen.getByRole("textbox", { name: /^name/u }) as HTMLInputElement)
        .value,
    ).toBe("");
    expect(onValidationResponse).not.toHaveBeenCalled();
  });

  it("cancels queued validation when the action definition changes", async () => {
    vi.useFakeTimers();
    try {
      const { rerender } = render(<ActionForm actionDefinition={TestAction} />);
      expect(mockValidateAction).toHaveBeenCalledTimes(1);

      fireEvent.change(screen.getByRole("textbox", { name: /^name/u }), {
        target: { value: "Old queued edit" },
      });
      rerender(
        <ActionForm
          actionDefinition={ReloadedTestAction}
          showFormTitle={true}
        />,
      );

      await act(async () => {
        await vi.advanceTimersByTimeAsync(1_000);
      });

      expect(mockValidateAction).toHaveBeenCalledTimes(2);
      expect(mockValidateAction).not.toHaveBeenCalledWith({
        name: "Old queued edit",
      });
    } finally {
      vi.useRealTimers();
    }
  });

  it("validates a new action definition after a controlled field is cleared", async () => {
    vi.useFakeTimers();
    const definitions: Array<FormFieldDefinition<TestActionDef>> = [
      {
        fieldKey: "name",
        label: "Name",
        fieldComponent: "CUSTOM",
        fieldComponentProps: {
          customRenderer: ({ onChange }) => (
            <button type="button" onClick={() => onChange?.(undefined)}>
              Clear name
            </button>
          ),
        },
      },
    ];

    function ControlledClearedForm({
      actionDefinition = TestAction,
      showFormTitle = false,
    }: {
      actionDefinition?: TestActionDef;
      showFormTitle?: boolean;
    }) {
      const [formState, setFormState] = useState<{ name?: string }>({});
      return (
        <ActionForm
          actionDefinition={actionDefinition}
          formFieldDefinitions={definitions}
          formState={formState}
          onFormStateChange={setFormState}
          showFormTitle={showFormTitle}
        />
      );
    }

    try {
      const { rerender } = render(<ControlledClearedForm />);
      expect(mockValidateAction).toHaveBeenCalledTimes(1);
      fireEvent.click(screen.getByRole("button", { name: "Clear name" }));

      rerender(
        <ControlledClearedForm
          actionDefinition={ReloadedTestAction}
          showFormTitle={true}
        />,
      );
      await act(async () => {
        await vi.advanceTimersByTimeAsync(1_000);
      });

      expect(mockValidateAction).toHaveBeenCalledTimes(2);
      expect(mockValidateAction).toHaveBeenLastCalledWith({});
    } finally {
      vi.useRealTimers();
    }
  });

  it("ignores an in-flight response from a previous action definition", async () => {
    let resolveValidation: (
      response: ActionValidationResponse | undefined,
    ) => void;
    mockValidateAction
      .mockReturnValueOnce(
        new Promise((resolve) => {
          resolveValidation = resolve;
        }),
      )
      .mockResolvedValue(undefined);
    const onValidationResponse = vi.fn();
    const { rerender } = render(
      <ActionForm
        actionDefinition={TestAction}
        onValidationResponse={onValidationResponse}
      />,
    );

    rerender(
      <ActionForm
        actionDefinition={ReloadedTestAction}
        onValidationResponse={onValidationResponse}
        showFormTitle={true}
      />,
    );

    await act(async () => {
      resolveValidation!({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Old session default",
          },
        },
      });
      await Promise.resolve();
    });

    expect(
      (screen.getByRole("textbox", { name: /^name/u }) as HTMLInputElement)
        .value,
    ).toBe("");
    expect(onValidationResponse).not.toHaveBeenCalled();
  });

  it("resets user-edit provenance when the action definition changes", async () => {
    vi.useFakeTimers();
    mockValidateAction.mockResolvedValueOnce(undefined).mockResolvedValue({
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          evaluatedConstraints: [],
          required: false,
          defaultValue: "New session default",
        },
      },
    });

    try {
      const { rerender } = render(<ActionForm actionDefinition={TestAction} />);
      const nameInput = screen.getByRole("textbox", {
        name: /^name/u,
      }) as HTMLInputElement;
      fireEvent.change(nameInput, { target: { value: "Old session edit" } });
      expect(screen.queryByText("Edited")).not.toBeNull();

      rerender(
        <ActionForm
          actionDefinition={ReloadedTestAction}
          showFormTitle={true}
        />,
      );
      await act(async () => {
        await vi.advanceTimersByTimeAsync(500);
      });

      expect(
        (screen.getByRole("textbox", { name: /^name/u }) as HTMLInputElement)
          .value,
      ).toBe("New session default");
      expect(screen.queryByText("Edited")).toBeNull();
    } finally {
      vi.useRealTimers();
    }
  });
});
describe("ActionForm validation during submission", () => {
  afterEach(cleanup);

  beforeEach(resetActionFormMocks);

  it("cancels queued validation without restarting it after submit", async () => {
    vi.useFakeTimers();
    try {
      render(<ActionForm actionDefinition={TestAction} />);
      expect(mockValidateAction).toHaveBeenCalledTimes(1);

      fireEvent.change(screen.getByRole("textbox", { name: /^name/u }), {
        target: { value: "Submitted value" },
      });
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await act(async () => {
        await Promise.resolve();
      });
      expect(mockApplyAction).toHaveBeenCalledTimes(1);

      await act(async () => {
        await vi.advanceTimersByTimeAsync(1_000);
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(1);
    } finally {
      vi.useRealTimers();
    }
  });

  it("submits the displayed value immediately while validation is queued", async () => {
    vi.useFakeTimers();
    try {
      render(<ActionForm actionDefinition={TestAction} />);
      fireEvent.change(screen.getByRole("textbox", { name: /^name/u }), {
        target: { value: "Snapshot value" },
      });

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await act(async () => {
        await Promise.resolve();
      });

      expect(mockApplyAction).toHaveBeenCalledWith({
        name: "Snapshot value",
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(1);
    } finally {
      vi.useRealTimers();
    }
  });

  it("ignores an in-flight validation response after submit", async () => {
    let resolveValidation: (
      response: ActionValidationResponse | undefined,
    ) => void;
    mockValidateAction.mockReturnValueOnce(
      new Promise((resolve) => {
        resolveValidation = resolve;
      }),
    );
    const onValidationResponse = vi.fn();
    const definitions: Array<FormFieldDefinition<TestActionDef>> = [
      {
        fieldKey: "name",
        label: "Name",
        defaultValue: "Submitted value",
        fieldComponent: "TEXT_INPUT",
        fieldComponentProps: {},
      },
    ];
    render(
      <ActionForm
        actionDefinition={TestAction}
        formFieldDefinitions={definitions}
        onValidationResponse={onValidationResponse}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
    await vi.waitFor(() => {
      expect(mockApplyAction).toHaveBeenCalledWith({
        name: "Submitted value",
      });
    });
    await act(async () => {
      resolveValidation!({
        result: "VALID",
        submissionCriteria: [],
        parameters: {
          name: {
            result: "VALID",
            evaluatedConstraints: [],
            required: false,
            defaultValue: "Late default",
          },
        },
      });
      await Promise.resolve();
    });

    expect(onValidationResponse).not.toHaveBeenCalled();
    expect(
      (screen.getByRole("textbox", { name: "Name" }) as HTMLInputElement).value,
    ).toBe("Submitted value");
  });

  it("resumes validation only after the next form-state change", async () => {
    vi.useFakeTimers();
    try {
      render(<ActionForm actionDefinition={TestAction} />);
      const nameInput = screen.getByRole("textbox", {
        name: /^name/u,
      });
      fireEvent.change(nameInput, { target: { value: "Submitted value" } });
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await act(async () => {
        await vi.advanceTimersByTimeAsync(1_000);
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(1);

      fireEvent.change(nameInput, { target: { value: "Changed later" } });

      expect(mockValidateAction).toHaveBeenCalledTimes(2);
      expect(mockValidateAction).toHaveBeenLastCalledWith({
        name: "Changed later",
      });
    } finally {
      vi.useRealTimers();
    }
  });

  it("uses the same validation snapshot boundary for custom onSubmit", async () => {
    vi.useFakeTimers();
    const onSubmit = vi.fn();
    try {
      render(<ActionForm actionDefinition={TestAction} onSubmit={onSubmit} />);
      fireEvent.change(screen.getByRole("textbox", { name: /^name/u }), {
        target: { value: "Custom snapshot" },
      });

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await act(async () => {
        await Promise.resolve();
      });
      expect(onSubmit).toHaveBeenCalledWith(
        { name: "Custom snapshot" },
        mockApplyAction,
      );

      await act(async () => {
        await vi.advanceTimersByTimeAsync(1_000);
      });
      expect(mockValidateAction).toHaveBeenCalledTimes(1);
    } finally {
      vi.useRealTimers();
    }
  });
});
