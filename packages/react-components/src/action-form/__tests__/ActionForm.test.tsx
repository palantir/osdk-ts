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
import { type ReactElement, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ActionForm } from "../ActionForm.js";
import type { FormState } from "../ActionFormApi.js";
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

type ValidationParameters = ActionValidationResponse["parameters"];

/**
 * Overrides the resolved action metadata so the form generates fields for the
 * supplied parameter set.
 */
function mockMetadataParameters(
  parameters: ActionMetadata["parameters"]
): void {
  vi.mocked(useOsdkMetadata).mockReturnValue({
    loading: false,
    metadata: { ...mockMetadata, parameters },
  });
}

/**
 * Installs a useOsdkAction mock whose validationResult carries the given
 * per-parameter evaluated constraints, and returns the validateAction spy.
 */
function mockActionWithConstraints(
  parameters: ValidationParameters
): ReturnType<typeof vi.fn> {
  const validateAction = vi.fn(() => Promise.resolve(undefined));
  const validationResult: ActionValidationResponse = {
    result: "VALID",
    submissionCriteria: [],
    parameters,
  };
  vi.mocked(useOsdkAction).mockReturnValue({
    ...defaultMockActionResult(),
    validateAction,
    validationResult,
  });
  return validateAction;
}

/**
 * Controlled wrapper that seeds the form with an arbitrary value shape so tests
 * can drive a specific parameter value (including values a dropdown would not
 * normally allow) through submission.
 */
function ValidationHarness<Q extends ActionDefinition<unknown>>(props: {
  action: Q;
  initialState: Record<string, unknown>;
  onSuccess?: () => void;
}): ReactElement {
  const [state, setState] = useState<Record<string, unknown>>(
    props.initialState
  );
  return (
    <ActionForm
      actionDefinition={props.action}
      formState={state as FormState<Q>}
      onFormStateChange={(updater) =>
        setState(
          (prev) => updater(prev as FormState<Q>) as Record<string, unknown>
        )
      }
      onSuccess={props.onSuccess}
    />
  );
}

describe("ActionForm", () => {
  afterEach(cleanup);

  beforeEach(() => {
    vi.mocked(useOsdkAction).mockReturnValue(defaultMockActionResult());
    vi.mocked(useOsdkMetadata).mockReturnValue(defaultMockMetadataResult());
    mockApplyAction.mockReset().mockResolvedValue({ editedObjectTypes: [] });
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
        />
      );

      expect(screen.getByRole("heading").textContent).toBe("Custom Title");
    });

    it("does not render a form title when showFormTitle is false", () => {
      render(
        <ActionForm actionDefinition={TestAction} showFormTitle={false} />
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
        />
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
        />
      );

      const input = screen.getByRole("textbox", { name: "Full Name" });
      expect(input).toHaveProperty("disabled", true);

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Alice" })
        );
      });
    });
  });

  describe("submit button", () => {
    it("renders submit button", () => {
      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.getByRole("button", { name: /submit/iu }).textContent).toBe(
        "Submit"
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
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />
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
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />
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
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />
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
        />
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

      await vi.waitFor(() => {
        expect(mockApplyAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Ada Lovelace" })
        );
      });
    });
  });

  describe("controlled mode", () => {
    it("submits updated controlled state after a field is edited", async () => {
      type ControlledFormState = { name?: string; email?: string };

      function ControlledWrapper() {
        const [formState, setFormState] = useState<ControlledFormState>({
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
          })
        );
      });
    });
  });

  describe("validation lifecycle", () => {
    it("validates the action with the initial form values as soon as the form is ready", () => {
      vi.useFakeTimers();
      try {
        const validateAction = vi.fn(() => Promise.resolve(undefined));
        vi.mocked(useOsdkAction).mockReturnValue({
          ...defaultMockActionResult(),
          validateAction,
        });

        render(<ActionForm actionDefinition={TestAction} />);
        act(() => {
          vi.advanceTimersByTime(500);
        });

        expect(validateAction).toHaveBeenCalledTimes(1);
      } finally {
        vi.useRealTimers();
      }
    });

    it("validates immediately on the first edit and coalesces a burst of edits into one follow-up validation", () => {
      vi.useFakeTimers();
      try {
        const validateAction = vi.fn(() => Promise.resolve(undefined));
        vi.mocked(useOsdkAction).mockReturnValue({
          ...defaultMockActionResult(),
          validateAction,
        });

        render(<ActionForm actionDefinition={TestAction} />);
        act(() => {
          vi.advanceTimersByTime(500);
        });
        const afterMount = validateAction.mock.calls.length;

        const input = screen.getByRole("textbox", { name: /^name/u });

        // First edit validates on the leading edge, within the change handler.
        fireEvent.change(input, { target: { value: "a" } });
        expect(validateAction.mock.calls.length).toBe(afterMount + 1);

        // Rapid edits inside the 500ms window do not each trigger validation.
        fireEvent.change(input, { target: { value: "ab" } });
        fireEvent.change(input, { target: { value: "abc" } });
        fireEvent.change(input, { target: { value: "abcd" } });
        expect(validateAction.mock.calls.length).toBe(afterMount + 1);

        // A single trailing validation lands once the window elapses.
        act(() => {
          vi.advanceTimersByTime(500);
        });
        expect(validateAction.mock.calls.length).toBe(afterMount + 2);
      } finally {
        vi.useRealTimers();
      }
    });
  });

  describe("constraint-driven fields", () => {
    it("renders a parameter limited to a fixed set of choices as a selectable dropdown and leaves unconstrained parameters as free text", async () => {
      mockMetadataParameters({
        status: { type: "string", nullable: false },
        note: { type: "string", nullable: true },
      });
      mockActionWithConstraints({
        status: {
          result: "VALID",
          required: true,
          evaluatedConstraints: [
            {
              type: "oneOf",
              options: [
                { displayName: "Open", value: "OPEN" },
                { displayName: "Closed", value: "CLOSED" },
              ],
              otherValuesAllowed: false,
            },
          ],
        },
        note: { result: "VALID", required: false, evaluatedConstraints: [] },
      });

      render(<ActionForm actionDefinition={TestAction} />);

      expect(screen.queryByRole("combobox")).not.toBeNull();
      expect(screen.queryByRole("textbox", { name: /note/u })).not.toBeNull();

      fireEvent.click(screen.getByRole("combobox"));
      await vi.waitFor(() => {
        expect(screen.queryByRole("option", { name: "Open" })).not.toBeNull();
      });
      expect(screen.queryByRole("option", { name: "Closed" })).not.toBeNull();
    });

    it("rejects values outside the allowed set unless other values are permitted", async () => {
      const closedSet: ValidationParameters = {
        status: {
          result: "VALID",
          required: true,
          evaluatedConstraints: [
            {
              type: "oneOf",
              options: [{ value: "OPEN" }, { value: "CLOSED" }],
              otherValuesAllowed: false,
            },
          ],
        },
      };

      // A value that is not one of the options is rejected and blocks submit.
      mockMetadataParameters({ status: { type: "string", nullable: false } });
      mockActionWithConstraints(closedSet);
      const onRejected = vi.fn();
      const rejected = render(
        <ValidationHarness
          action={TestAction}
          initialState={{ status: "MAYBE" }}
          onSuccess={onRejected}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(onRejected).not.toHaveBeenCalled();
      rejected.unmount();

      // A value that is one of the options passes.
      mockActionWithConstraints(closedSet);
      const onAccepted = vi.fn();
      const accepted = render(
        <ValidationHarness
          action={TestAction}
          initialState={{ status: "OPEN" }}
          onSuccess={onAccepted}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(onAccepted).toHaveBeenCalled();
      });
      accepted.unmount();

      // With other values allowed, an out-of-list value does not error.
      mockActionWithConstraints({
        status: {
          result: "VALID",
          required: true,
          evaluatedConstraints: [
            {
              type: "oneOf",
              options: [{ value: "OPEN" }, { value: "CLOSED" }],
              otherValuesAllowed: true,
            },
          ],
        },
      });
      const onOther = vi.fn();
      render(
        <ValidationHarness
          action={TestAction}
          initialState={{ status: "MAYBE" }}
          onSuccess={onOther}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(onOther).toHaveBeenCalled();
      });
    });

    it("limits text length to the configured bounds and blocks submission when the text is too short or too long", async () => {
      const bounded: ValidationParameters = {
        bio: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{ type: "stringLength", gte: 3, lte: 10 }],
        },
      };

      // The bounds surface as length hints on the input.
      mockMetadataParameters({ bio: { type: "string", nullable: true } });
      mockActionWithConstraints(bounded);
      const hint = render(<ActionForm actionDefinition={TestAction} />);
      const bioInput = screen.getByRole("textbox", { name: /bio/u });
      expect(bioInput.getAttribute("maxlength")).toBe("10");
      expect(bioInput.getAttribute("minlength")).toBe("3");
      hint.unmount();

      // A value shorter than the minimum is rejected.
      mockActionWithConstraints(bounded);
      const onShort = vi.fn();
      const short = render(
        <ValidationHarness
          action={TestAction}
          initialState={{ bio: "ab" }}
          onSuccess={onShort}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(onShort).not.toHaveBeenCalled();
      short.unmount();

      // A value within the bounds passes.
      mockActionWithConstraints(bounded);
      const onOk = vi.fn();
      render(
        <ValidationHarness
          action={TestAction}
          initialState={{ bio: "abcd" }}
          onSuccess={onOk}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(onOk).toHaveBeenCalled();
      });
    });

    it("constrains a numeric parameter to its allowed range and blocks submission outside it", async () => {
      const ranged: ValidationParameters = {
        age: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{ type: "range", gte: 1, lte: 100 }],
        },
      };

      // Inclusive bounds surface as the input's min and max.
      mockMetadataParameters({ age: { type: "integer", nullable: true } });
      mockActionWithConstraints(ranged);
      const hint = render(<ActionForm actionDefinition={TestAction} />);
      const ageInput = screen.getByRole("textbox", { name: /age/u });
      expect(ageInput.getAttribute("min")).toBe("1");
      expect(ageInput.getAttribute("max")).toBe("100");
      hint.unmount();

      // A value above the range is rejected.
      mockActionWithConstraints(ranged);
      const onOver = vi.fn();
      const over = render(
        <ValidationHarness
          action={TestAction}
          initialState={{ age: 200 }}
          onSuccess={onOver}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(onOver).not.toHaveBeenCalled();
      over.unmount();

      // A value inside the range passes.
      mockActionWithConstraints(ranged);
      const onInside = vi.fn();
      render(
        <ValidationHarness
          action={TestAction}
          initialState={{ age: 50 }}
          onSuccess={onInside}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(onInside).toHaveBeenCalled();
      });
    });

    it("blocks submission when the number of array elements falls outside the configured size", async () => {
      const sized: ValidationParameters = {
        tags: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{ type: "arraySize", gte: 1, lte: 3 }],
        },
      };

      // Too many elements is rejected and blocks submit.
      mockMetadataParameters({
        tags: { type: "string", multiplicity: true, nullable: true },
      });
      mockActionWithConstraints(sized);
      const onTooMany = vi.fn();
      const tooMany = render(
        <ValidationHarness
          action={TestAction}
          initialState={{ tags: ["a", "b", "c", "d"] }}
          onSuccess={onTooMany}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(onTooMany).not.toHaveBeenCalled();
      tooMany.unmount();

      // A count within the bounds passes.
      mockActionWithConstraints(sized);
      const onOk = vi.fn();
      render(
        <ValidationHarness
          action={TestAction}
          initialState={{ tags: ["a", "b"] }}
          onSuccess={onOk}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(onOk).toHaveBeenCalled();
      });
    });

    it("blocks submission and surfaces the configured message when text does not match the required pattern", async () => {
      const failureMessage = "Must be exactly three uppercase letters";
      const patterned: ValidationParameters = {
        code: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [
            {
              type: "stringRegexMatch",
              regex: "^[A-Z]{3}$",
              configuredFailureMessage: failureMessage,
            },
          ],
        },
      };

      // A non-matching value is rejected with the configured message.
      mockMetadataParameters({ code: { type: "string", nullable: true } });
      mockActionWithConstraints(patterned);
      const onBad = vi.fn();
      const bad = render(
        <ValidationHarness
          action={TestAction}
          initialState={{ code: "ab" }}
          onSuccess={onBad}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(screen.getByRole("alert").textContent).toContain(failureMessage);
      expect(onBad).not.toHaveBeenCalled();
      bad.unmount();

      // A matching value passes.
      mockActionWithConstraints(patterned);
      const onGood = vi.fn();
      render(
        <ValidationHarness
          action={TestAction}
          initialState={{ code: "ABC" }}
          onSuccess={onGood}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(onGood).toHaveBeenCalled();
      });
    });
  });

  describe("expanded constraint-validation contract", () => {
    /**
     * A second controlled harness that also threads caller-supplied field
     * definitions through, so a parameter can be forced to render with a
     * non-default renderer while still driving a value through submission.
     */
    function ValidationHarnessWithFields<
      Q extends ActionDefinition<unknown>,
    >(props: {
      action: Q;
      initialState: Record<string, unknown>;
      formFieldDefinitions: ReadonlyArray<FormFieldDefinition<Q>>;
      onSuccess?: () => void;
    }): ReactElement {
      const [state, setState] = useState<Record<string, unknown>>(
        props.initialState
      );
      return (
        <ActionForm
          actionDefinition={props.action}
          formFieldDefinitions={props.formFieldDefinitions}
          formState={state as FormState<Q>}
          onFormStateChange={(updater) =>
            setState(
              (prev) => updater(prev as FormState<Q>) as Record<string, unknown>
            )
          }
          onSuccess={props.onSuccess}
        />
      );
    }

    interface NumericActionDef extends ActionDefinition<unknown> {
      __DefinitionMetadata: {
        signatures: unknown;
        parameters: { age: { type: "integer" } };
        type: "action";
        apiName: "NumericAction";
        status: "ACTIVE";
        rid: string;
      };
    }

    const NumericAction: NumericActionDef = {
      type: "action",
      apiName: "NumericAction",
    } as NumericActionDef;

    // A CUSTOM renderer only displays the value; it has no native input, so it
    // cannot mask a constraint with an HTML min/max/minlength attribute.
    const numericCustomField: ReadonlyArray<
      FormFieldDefinition<NumericActionDef>
    > = [
      {
        fieldKey: "age",
        label: "Age",
        fieldComponent: "CUSTOM",
        fieldComponentProps: {
          customRenderer: ({ value }) => <span>{String(value ?? "")}</span>,
        },
      },
    ];

    const textCustomField: ReadonlyArray<FormFieldDefinition<TestActionDef>> = [
      {
        fieldKey: "name",
        label: "Name",
        fieldComponent: "CUSTOM",
        fieldComponentProps: {
          customRenderer: ({ value }) => <span>{String(value ?? "")}</span>,
        },
      },
    ];

    it("blocks a value sitting on an exclusive range boundary and admits one just past it", async () => {
      // `gt: 1` excludes 1 itself, so 1 is out of range and 2 is the first
      // acceptable value.
      const exclusive: ValidationParameters = {
        age: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{ type: "range", gt: 1 }],
        },
      };

      mockMetadataParameters({ age: { type: "integer", nullable: true } });
      mockActionWithConstraints(exclusive);
      const onBoundary = vi.fn();
      const boundary = render(
        <ValidationHarnessWithFields
          action={NumericAction}
          initialState={{ age: 1 }}
          formFieldDefinitions={numericCustomField}
          onSuccess={onBoundary}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      // Blocked means the underlying apply action was never invoked.
      expect(mockApplyAction).not.toHaveBeenCalled();
      expect(onBoundary).not.toHaveBeenCalled();
      boundary.unmount();

      mockActionWithConstraints(exclusive);
      const onPast = vi.fn();
      render(
        <ValidationHarnessWithFields
          action={NumericAction}
          initialState={{ age: 2 }}
          formFieldDefinitions={numericCustomField}
          onSuccess={onPast}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(onPast).toHaveBeenCalled();
      });
    });

    it("enforces numeric-range and string-length limits even when the field has no native input to enforce them", async () => {
      // Numeric range on a CUSTOM renderer: an out-of-range value is still
      // blocked despite there being no HTML max to catch it.
      mockMetadataParameters({ age: { type: "integer", nullable: true } });
      mockActionWithConstraints({
        age: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{ type: "range", gte: 1, lte: 100 }],
        },
      });
      const onRange = vi.fn();
      const ranged = render(
        <ValidationHarnessWithFields
          action={NumericAction}
          initialState={{ age: 200 }}
          formFieldDefinitions={numericCustomField}
          onSuccess={onRange}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      // Blocked means the underlying apply action was never invoked.
      expect(mockApplyAction).not.toHaveBeenCalled();
      expect(onRange).not.toHaveBeenCalled();
      ranged.unmount();

      // String length on a CUSTOM renderer: a value shorter than the minimum
      // is blocked.
      mockMetadataParameters({ name: { type: "string", nullable: true } });
      mockActionWithConstraints({
        name: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{ type: "stringLength", gte: 3, lte: 10 }],
        },
      });
      const onShort = vi.fn();
      const short = render(
        <ValidationHarnessWithFields
          action={TestAction}
          initialState={{ name: "ab" }}
          formFieldDefinitions={textCustomField}
          onSuccess={onShort}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(mockApplyAction).not.toHaveBeenCalled();
      expect(onShort).not.toHaveBeenCalled();
      short.unmount();

      // And a value longer than the maximum is likewise blocked.
      mockMetadataParameters({ name: { type: "string", nullable: true } });
      mockActionWithConstraints({
        name: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{ type: "stringLength", gte: 3, lte: 10 }],
        },
      });
      const onLong = vi.fn();
      render(
        <ValidationHarnessWithFields
          action={TestAction}
          initialState={{ name: "abcdefghijk" }}
          formFieldDefinitions={textCustomField}
          onSuccess={onLong}
        />
      );
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(mockApplyAction).not.toHaveBeenCalled();
      expect(onLong).not.toHaveBeenCalled();
    });

    it("renders an open one-of as free text and submits a value that is not among the suggestions", async () => {
      mockMetadataParameters({ status: { type: "string", nullable: true } });
      mockActionWithConstraints({
        status: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [
            {
              type: "oneOf",
              options: [{ value: "OPEN" }, { value: "CLOSED" }],
              otherValuesAllowed: true,
            },
          ],
        },
      });

      const onSuccess = vi.fn();
      render(
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />
      );

      // Because other values are allowed, the parameter stays a typeable text
      // box rather than closing into a fixed-choice dropdown.
      const field = screen.queryByRole("textbox", { name: /status/u });
      expect(field).not.toBeNull();

      fireEvent.input(field as HTMLElement, { target: { value: "MAYBE" } });
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(onSuccess).toHaveBeenCalled();
      });
      // The open one-of is the opposite of blocked: the action is applied.
      expect(mockApplyAction).toHaveBeenCalled();
    });

    it("reports a rejected validation through onError without leaking an unhandled promise rejection", async () => {
      vi.useFakeTimers();
      const rejections: unknown[] = [];
      const onWindowRejection = (event: Event): void => {
        rejections.push(event);
        event.preventDefault();
      };
      const onNodeRejection = (reason: unknown): void => {
        rejections.push(reason);
      };
      window.addEventListener("unhandledrejection", onWindowRejection);
      process.on("unhandledRejection", onNodeRejection);
      try {
        const error = new Error("validation exploded");
        const validateAction = vi.fn(() => Promise.reject(error));
        vi.mocked(useOsdkAction).mockReturnValue({
          ...defaultMockActionResult(),
          validateAction,
        });

        const onError = vi.fn();
        render(<ActionForm actionDefinition={TestAction} onError={onError} />);

        await act(async () => {
          await vi.advanceTimersByTimeAsync(500);
        });

        expect(onError).toHaveBeenCalledTimes(1);
        expect(onError).toHaveBeenCalledWith({ type: "validation", error });
        expect(rejections).toHaveLength(0);
      } finally {
        window.removeEventListener("unhandledrejection", onWindowRejection);
        process.off("unhandledRejection", onNodeRejection);
        vi.useRealTimers();
      }
    });

    it("revalidates with the parent's new value when the controlling parent replaces the form state", () => {
      vi.useFakeTimers();
      try {
        const validateAction = vi.fn(() => Promise.resolve(undefined));
        vi.mocked(useOsdkAction).mockReturnValue({
          ...defaultMockActionResult(),
          validateAction,
        });

        const Controlled = ({ name }: { name: string }): ReactElement => (
          <ActionForm
            actionDefinition={TestAction}
            formState={{ name }}
            onFormStateChange={() => {}}
          />
        );

        const { rerender } = render(<Controlled name="Initial" />);
        act(() => {
          vi.advanceTimersByTime(500);
        });
        validateAction.mockClear();

        // Parent swaps in a new authoritative value without going through the
        // field change handler.
        rerender(<Controlled name="Changed" />);
        act(() => {
          vi.advanceTimersByTime(500);
        });

        expect(validateAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "Changed" })
        );
      } finally {
        vi.useRealTimers();
      }
    });

    it("validates the value the parent commits, never the raw pre-commit keystroke", () => {
      vi.useFakeTimers();
      try {
        const validateAction = vi.fn(() => Promise.resolve(undefined));
        vi.mocked(useOsdkAction).mockReturnValue({
          ...defaultMockActionResult(),
          validateAction,
        });

        const UppercaseControlled = (): ReactElement => {
          const [state, setState] = useState<{ name?: string }>({ name: "" });
          return (
            <ActionForm
              actionDefinition={TestAction}
              formState={state}
              onFormStateChange={(updater) =>
                setState((prev) => {
                  const next = updater(prev);
                  return {
                    ...next,
                    name: String(next.name ?? "").toUpperCase(),
                  };
                })
              }
            />
          );
        };

        render(<UppercaseControlled />);
        act(() => {
          vi.advanceTimersByTime(500);
        });
        validateAction.mockClear();

        const input = screen.getByRole("textbox", { name: /^name/u });
        act(() => {
          fireEvent.change(input, { target: { value: "abc" } });
        });
        // Let any trailing/debounced validation fire after the parent commits.
        act(() => {
          vi.advanceTimersByTime(500);
        });

        // Only the parent-committed (uppercased) value should reach validation.
        expect(validateAction).toHaveBeenCalledWith(
          expect.objectContaining({ name: "ABC" })
        );
        // The raw pre-commit edit must never reach validation.
        expect(validateAction).not.toHaveBeenCalledWith(
          expect.objectContaining({ name: "abc" })
        );
      } finally {
        vi.useRealTimers();
      }
    });

    it("validates the first edit immediately even when it lands inside the debounce window", () => {
      vi.useFakeTimers();
      try {
        const validateAction = vi.fn(() => Promise.resolve(undefined));
        vi.mocked(useOsdkAction).mockReturnValue({
          ...defaultMockActionResult(),
          validateAction,
        });

        render(<ActionForm actionDefinition={TestAction} />);
        const afterMount = validateAction.mock.calls.length;

        // Stay well inside the 500ms debounce window opened by the mount
        // validation.
        act(() => {
          vi.advanceTimersByTime(100);
        });

        const input = screen.getByRole("textbox", { name: /^name/u });
        act(() => {
          fireEvent.change(input, { target: { value: "a" } });
        });

        expect(validateAction.mock.calls.length).toBe(afterMount + 1);
      } finally {
        vi.useRealTimers();
      }
    });

    it("keeps the caller's field configuration visible when a closed one-of turns the field into a dropdown", () => {
      // The caller configures a placeholder on the field. When the one-of
      // closes the field into a dropdown, that placeholder must still be shown.
      const customDefs: ReadonlyArray<FormFieldDefinition<TestActionDef>> = [
        {
          fieldKey: "name",
          label: "Name",
          fieldComponent: "TEXT_INPUT",
          fieldComponentProps: { placeholder: "Choose an option" },
        },
      ];

      mockMetadataParameters({ name: { type: "string", nullable: true } });
      mockActionWithConstraints({
        name: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [
            {
              type: "oneOf",
              options: [{ value: "OPEN" }, { value: "CLOSED" }],
              otherValuesAllowed: false,
            },
          ],
        },
      });

      render(
        <ActionForm
          actionDefinition={TestAction}
          formFieldDefinitions={customDefs}
        />
      );

      expect(screen.queryByRole("combobox")).not.toBeNull();
      expect(screen.queryByText("Choose an option")).not.toBeNull();
    });

    it("blocks submission for a parameter the validation response marks required even when the metadata allows null", async () => {
      mockMetadataParameters({ note: { type: "string", nullable: true } });
      mockActionWithConstraints({
        note: {
          result: "VALID",
          required: true,
          evaluatedConstraints: [],
        },
      });

      const onSuccess = vi.fn();
      render(
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(mockApplyAction).not.toHaveBeenCalled();
      expect(onSuccess).not.toHaveBeenCalled();
    });

    it("enforces every constraint when a parameter carries more than one of the same type", async () => {
      // Two ranges apply at once (0..100 and 0..50). A value of 75 satisfies
      // the first but violates the second, so it must still be blocked.
      mockMetadataParameters({ age: { type: "integer", nullable: true } });
      mockActionWithConstraints({
        age: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [
            { type: "range", gte: 0, lte: 100 },
            { type: "range", gte: 0, lte: 50 },
          ],
        },
      });

      const onSuccess = vi.fn();
      render(
        <ValidationHarnessWithFields
          action={NumericAction}
          initialState={{ age: 75 }}
          formFieldDefinitions={numericCustomField}
          onSuccess={onSuccess}
        />
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));

      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(mockApplyAction).not.toHaveBeenCalled();
      expect(onSuccess).not.toHaveBeenCalled();
    });

    it("does not surface a validation error on mount before the user interacts", () => {
      vi.useFakeTimers();
      try {
        // A required-but-empty parameter would fail validation, but mount
        // validation is silent: it computes state without displaying errors.
        mockMetadataParameters({ name: { type: "string", nullable: false } });
        mockActionWithConstraints({
          name: {
            result: "INVALID",
            required: true,
            evaluatedConstraints: [],
          },
        });

        render(<ActionForm actionDefinition={TestAction} />);

        // Let the debounced mount validation resolve.
        act(() => {
          vi.advanceTimersByTime(500);
        });

        // No edit and no submit has happened yet, so no error is shown.
        expect(screen.queryByRole("alert")).toBeNull();
      } finally {
        vi.useRealTimers();
      }
    });

    it("keeps the submit button enabled even when the form has validation errors", async () => {
      // A required-but-empty parameter fails validation, but an invalid form
      // does not disable Submit: the button stays enabled and clickable.
      mockMetadataParameters({ name: { type: "string", nullable: false } });
      mockActionWithConstraints({
        name: {
          result: "INVALID",
          required: true,
          evaluatedConstraints: [],
        },
      });

      vi.useFakeTimers();
      try {
        render(<ActionForm actionDefinition={TestAction} />);
        // Let the debounced mount validation resolve.
        act(() => {
          vi.advanceTimersByTime(500);
        });

        const button = screen.getByRole("button", { name: /submit/iu });
        expect((button as HTMLButtonElement).disabled).toBe(false);
      } finally {
        vi.useRealTimers();
      }

      // The enabled button is still clickable, but the action stays blocked:
      // clicking reveals the validation alert and never applies the action.
      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(mockApplyAction).not.toHaveBeenCalled();
    });

    it("blocks submission until the initial validation response resolves", async () => {
      mockMetadataParameters({ name: { type: "string", nullable: true } });
      const validateAction = vi.fn(() => Promise.resolve(undefined));

      // Before the first response arrives the form has no validation verdict
      // yet, so submission must be held back.
      vi.mocked(useOsdkAction).mockReturnValue({
        ...defaultMockActionResult(),
        validateAction,
        validationResult: undefined,
        isValidating: true,
      });

      const onSuccess = vi.fn();
      const { rerender } = render(
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(mockApplyAction).not.toHaveBeenCalled();

      // Once the first response resolves and the field passes, submission goes
      // through.
      vi.mocked(useOsdkAction).mockReturnValue({
        ...defaultMockActionResult(),
        validateAction,
        validationResult: {
          result: "VALID",
          submissionCriteria: [],
          parameters: {
            name: {
              result: "VALID",
              required: false,
              evaluatedConstraints: [],
            },
          },
        },
        isValidating: false,
      });
      rerender(
        <ActionForm actionDefinition={TestAction} onSuccess={onSuccess} />
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(onSuccess).toHaveBeenCalled();
      });
    });

    it("blocks submission while a value change awaits re-validation instead of trusting the stale response", async () => {
      mockMetadataParameters({ status: { type: "string", nullable: true } });

      // The live response was computed for an earlier value set and a fresh
      // validation is still in flight; the current value has moved on.
      vi.mocked(useOsdkAction).mockReturnValue({
        ...defaultMockActionResult(),
        isValidating: true,
        validationResult: {
          result: "VALID",
          submissionCriteria: [],
          parameters: {
            status: {
              result: "VALID",
              required: false,
              evaluatedConstraints: [
                {
                  type: "oneOf",
                  options: [{ value: "OPEN" }, { value: "CLOSED" }],
                  otherValuesAllowed: false,
                },
              ],
            },
          },
        },
      });

      const onSuccess = vi.fn();
      // "CLOSED" would pass the stale response's constraints, but that response
      // does not correspond to the current values, so submission is held back.
      render(
        <ValidationHarness
          action={TestAction}
          initialState={{ status: "CLOSED" }}
          onSuccess={onSuccess}
        />
      );

      fireEvent.click(screen.getByRole("button", { name: /submit/iu }));
      await vi.waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeNull();
      });
      expect(mockApplyAction).not.toHaveBeenCalled();
    });

    it("closes the field into a dropdown when any one-of set forbids other values", () => {
      mockMetadataParameters({ status: { type: "string", nullable: true } });
      mockActionWithConstraints({
        status: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [
            {
              type: "oneOf",
              options: [{ value: "OPEN" }],
              otherValuesAllowed: true,
            },
            {
              type: "oneOf",
              options: [{ value: "A" }, { value: "B" }],
              otherValuesAllowed: false,
            },
          ],
        },
      });

      render(<ActionForm actionDefinition={TestAction} />);

      // A closed set is present, so the field must be a fixed-choice dropdown,
      // not a free-text box.
      expect(screen.queryByRole("combobox")).not.toBeNull();
      expect(screen.queryByRole("textbox", { name: /status/u })).toBeNull();
    });

    it("offers only the options common to every closed one-of set", async () => {
      mockMetadataParameters({ status: { type: "string", nullable: true } });
      mockActionWithConstraints({
        status: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [
            {
              type: "oneOf",
              options: [{ value: "A" }, { value: "B" }, { value: "C" }],
              otherValuesAllowed: false,
            },
            {
              type: "oneOf",
              options: [{ value: "B" }, { value: "C" }, { value: "D" }],
              otherValuesAllowed: false,
            },
          ],
        },
      });

      render(<ActionForm actionDefinition={TestAction} />);
      fireEvent.click(screen.getByRole("combobox"));

      await vi.waitFor(() => {
        expect(screen.queryByRole("option", { name: "B" })).not.toBeNull();
      });
      expect(screen.queryByRole("option", { name: "C" })).not.toBeNull();
      // Options outside the intersection must not be offered.
      expect(screen.queryByRole("option", { name: "A" })).toBeNull();
      expect(screen.queryByRole("option", { name: "D" })).toBeNull();
    });

    it("surfaces the tightest bound when overlapping range or length constraints apply", () => {
      mockMetadataParameters({
        age: { type: "integer", nullable: true },
        bio: { type: "string", nullable: true },
      });
      mockActionWithConstraints({
        age: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [
            { type: "range", gte: 0, lte: 100 },
            { type: "range", gte: 10, lte: 50 },
          ],
        },
        bio: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [
            { type: "stringLength", gte: 0, lte: 100 },
            { type: "stringLength", gte: 10, lte: 50 },
          ],
        },
      });

      render(<ActionForm actionDefinition={TestAction} />);

      const ageInput = screen.getByRole("textbox", { name: /age/u });
      expect(ageInput.getAttribute("min")).toBe("10");
      expect(ageInput.getAttribute("max")).toBe("50");

      const bioInput = screen.getByRole("textbox", { name: /bio/u });
      expect(bioInput.getAttribute("minlength")).toBe("10");
      expect(bioInput.getAttribute("maxlength")).toBe("50");
    });

    it("keeps the caller's tighter bound by intersecting it with the server constraint", () => {
      // Numeric: the caller's tighter min/max must survive the looser server
      // range rather than being overwritten by it.
      mockMetadataParameters({ age: { type: "integer", nullable: true } });
      mockActionWithConstraints({
        age: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{ type: "range", gte: 0, lte: 80 }],
        },
      });
      const numberDefs: ReadonlyArray<FormFieldDefinition<NumericActionDef>> = [
        {
          fieldKey: "age",
          label: "age",
          fieldComponent: "NUMBER_INPUT",
          fieldComponentProps: { min: 20, max: 40 },
        },
      ];
      const numeric = render(
        <ActionForm
          actionDefinition={NumericAction}
          formFieldDefinitions={numberDefs}
        />
      );
      const ageInput = screen.getByRole("textbox", { name: /age/u });
      expect(ageInput.getAttribute("min")).toBe("20");
      expect(ageInput.getAttribute("max")).toBe("40");
      numeric.unmount();

      // String length: the caller's tighter minLength/maxLength must likewise
      // survive.
      mockMetadataParameters({ name: { type: "string", nullable: true } });
      mockActionWithConstraints({
        name: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{ type: "stringLength", gte: 0, lte: 80 }],
        },
      });
      const textDefs: ReadonlyArray<FormFieldDefinition<TestActionDef>> = [
        {
          fieldKey: "name",
          label: "name",
          fieldComponent: "TEXT_INPUT",
          fieldComponentProps: { minLength: 20, maxLength: 40 },
        },
      ];
      render(
        <ActionForm
          actionDefinition={TestAction}
          formFieldDefinitions={textDefs}
        />
      );
      const nameInput = screen.getByRole("textbox", { name: /name/u });
      expect(nameInput.getAttribute("minlength")).toBe("20");
      expect(nameInput.getAttribute("maxlength")).toBe("40");
    });

    it("labels a deep-equal object value in a closed one-of by its display name", () => {
      mockMetadataParameters({ status: { type: "string", nullable: true } });
      mockActionWithConstraints({
        status: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [
            {
              type: "oneOf",
              options: [
                { value: { id: 1, name: "Ada" }, displayName: "Ada Lovelace" },
                { value: { id: 2, name: "Alan" }, displayName: "Alan Turing" },
              ],
              otherValuesAllowed: false,
            },
          ],
        },
      });

      // A distinct object literal that is deep-equal (not reference-equal) to
      // the first option's value.
      render(
        <ValidationHarness
          action={TestAction}
          initialState={{ status: { id: 1, name: "Ada" } }}
        />
      );

      const trigger = screen.getByRole("combobox");
      expect(trigger.textContent).toContain("Ada Lovelace");
      expect(trigger.textContent).not.toContain("[object Object]");
    });
  });
});
