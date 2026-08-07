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

import { isEqual } from "lodash-es";
import React, {
  createContext,
  type ReactElement,
  type ReactNode,
  useContext,
  useRef,
} from "react";

/**
 * All user-facing strings rendered by the action form and its field
 * components.
 */
export interface ActionFormLabels {
  /**
   * Text on the submit button. Overridden by the `submitButtonText` prop when
   * that is supplied.
   * @default "Submit"
   */
  submitButton: string;
  /**
   * Replaces the submit button text while a submission is in flight.
   * @default "Submitting…"
   */
  submitButtonPending: string;
  /**
   * Tooltip on the submit button while at least one field is invalid.
   * @default "Some fields are invalid"
   */
  submitBlockedByValidation: string;
  /**
   * Tooltip on the submit button when a submission rejects with something that
   * is not an `Error`. Messages from real `Error`s are surfaced verbatim.
   * @default "Submission failed"
   */
  submissionFailed: string;
  /**
   * Accessible name of the skeleton shown while the form's fields load.
   * @default "Loading form fields"
   */
  loadingFormFields: string;
  /**
   * Badge in the form footer summarizing the number of invalid fields.
   * @default (count) => count === 1 ? "1 issue" : `${count} issues`
   */
  issueCount: (count: number) => string;
  /**
   * Fallback shown in the footer's error list for a field whose validation
   * rule produced no message.
   * @default "Invalid"
   */
  fieldErrorFallback: string;

  /**
   * Badge on a collapsible section header counting the invalid fields inside.
   * @default (count) => count === 1 ? "1 error" : `${count} errors`
   */
  sectionErrorCount: (count: number) => string;

  /**
   * Accessible name of the `*` marker next to a required field's label.
   * @default "required"
   */
  requiredIndicator: string;
  /**
   * Tag shown next to a field the user has edited.
   * @default "Edited"
   */
  editedTag: string;
  /** @default (fieldName) => `Info about ${fieldName}` */
  helperTextAriaLabel: (fieldName: string) => string;
  /**
   * Used in place of {@link ActionFormLabels.helperTextAriaLabel} when the
   * field has no label.
   * @default "More information"
   */
  helperTextAriaLabelWithoutLabel: string;

  /**
   * Rendered in place of an input for action parameter types the form cannot
   * render, e.g. structs and interfaces.
   * @default "Unsupported field type. Use a CUSTOM field instead"
   */
  unsupportedField: string;

  /**
   * Accessible name of the button that clears a dropdown's selection.
   * @default "Clear"
   */
  dropdownClear: string;
  /** @default (itemLabel) => `Remove ${itemLabel}` */
  dropdownRemoveItem: (itemLabel: string) => string;
  /** @default "Search…" */
  dropdownSearchPlaceholder: string;
  /** @default "No results" */
  dropdownNoResults: string;
  /**
   * Shown in the dropdown popup while a server-side search is running.
   * @default "Searching…"
   */
  dropdownSearching: string;
  /**
   * Shown in the dropdown popup during the initial fetch, before any option
   * has arrived.
   * @default "Loading…"
   */
  dropdownLoading: string;

  /**
   * Placeholder for an `OBJECT_SELECT` field with no `placeholder` prop.
   * @default "Search…"
   */
  objectSelectPlaceholder: string;

  /**
   * Shown by an `OBJECT_SET` field with no value, unless an `emptyMessage`
   * prop is supplied.
   * @default "Object set is not defined"
   */
  objectSetEmpty: string;
  /** @default (errorMessage) => `Failed to load: ${errorMessage}` */
  objectSetLoadError: (errorMessage: string) => string;
  /**
   * Summary of an `OBJECT_SET` field's contents. `count` is already
   * locale-formatted, and `objectTypeName` is the object type's display name
   * when metadata is available.
   * @default (count, objectTypeName) => `${count} ${objectTypeName}`
   */
  objectSetCount: (count: string, objectTypeName: string) => string;
  /**
   * Object type name passed to {@link ActionFormLabels.objectSetCount} for a
   * single object when the object type's metadata is unavailable.
   * @default "object"
   */
  objectSetObjectSingular: string;
  /**
   * Object type name passed to {@link ActionFormLabels.objectSetCount} for
   * multiple objects when the object type's metadata is unavailable.
   * @default "objects"
   */
  objectSetObjectPlural: string;

  /** @default "Increment" */
  numberInputIncrement: string;
  /** @default "Decrement" */
  numberInputDecrement: string;

  /**
   * Shown by a `FILE_PICKER` field with no selection, unless a `text` prop is
   * supplied.
   * @default "No file chosen"
   */
  filePickerNoFileChosen: string;
  /**
   * Text on the file picker's browse button, unless a `buttonText` prop is
   * supplied.
   * @default "Browse"
   */
  filePickerBrowse: string;
  /** @default "Choose file" */
  filePickerChooseFile: string;
  /** @default "Clear selection" */
  filePickerClearSelection: string;

  /**
   * Label of the affirmative radio button generated for a `boolean` action
   * parameter.
   * @default "True"
   */
  booleanTrue: string;
  /**
   * Label of the negative radio button generated for a `boolean` action
   * parameter.
   * @default "False"
   */
  booleanFalse: string;

  // Each validation label is a fallback: a message returned by the field's
  // `onValidationError` is surfaced verbatim and ignores these.

  /** @default "This field is required" */
  validationRequired: string;
  /** @default (min) => `Must be at least ${min}` */
  validationMin: (min: number | Date) => string;
  /** @default (max) => `Must be at most ${max}` */
  validationMax: (max: number | Date) => string;
  /** @default (minLength) => `Must be at least ${minLength} characters` */
  validationMinLength: (minLength: number) => string;
  /** @default (maxLength) => `Must be at most ${maxLength} characters` */
  validationMaxLength: (maxLength: number) => string;
  /**
   * @default (maxSizeBytes) => `File must be smaller than ${bytes as B/KB/MB}`
   */
  validationMaxFileSize: (maxSizeBytes: number) => string;
}

export const DEFAULT_ACTION_FORM_LABELS: ActionFormLabels = {
  submitButton: "Submit",
  submitButtonPending: "Submitting…",
  submitBlockedByValidation: "Some fields are invalid",
  submissionFailed: "Submission failed",
  loadingFormFields: "Loading form fields",
  issueCount: (count) => (count === 1 ? "1 issue" : `${count} issues`),
  fieldErrorFallback: "Invalid",

  sectionErrorCount: (count) => (count === 1 ? "1 error" : `${count} errors`),

  requiredIndicator: "required",
  editedTag: "Edited",
  helperTextAriaLabel: (fieldName) => `Info about ${fieldName}`,
  helperTextAriaLabelWithoutLabel: "More information",

  unsupportedField: "Unsupported field type. Use a CUSTOM field instead",

  dropdownClear: "Clear",
  dropdownRemoveItem: (itemLabel) => `Remove ${itemLabel}`,
  dropdownSearchPlaceholder: "Search…",
  dropdownNoResults: "No results",
  dropdownSearching: "Searching…",
  dropdownLoading: "Loading…",

  objectSelectPlaceholder: "Search…",

  objectSetEmpty: "Object set is not defined",
  objectSetLoadError: (errorMessage) => `Failed to load: ${errorMessage}`,
  objectSetCount: (count, objectTypeName) => `${count} ${objectTypeName}`,
  objectSetObjectSingular: "object",
  objectSetObjectPlural: "objects",

  numberInputIncrement: "Increment",
  numberInputDecrement: "Decrement",

  filePickerNoFileChosen: "No file chosen",
  filePickerBrowse: "Browse",
  filePickerChooseFile: "Choose file",
  filePickerClearSelection: "Clear selection",

  booleanTrue: "True",
  booleanFalse: "False",

  validationRequired: "This field is required",
  validationMin: (min) => `Must be at least ${formatConstraint(min)}`,
  validationMax: (max) => `Must be at most ${formatConstraint(max)}`,
  validationMinLength: (minLength) =>
    `Must be at least ${minLength} characters`,
  validationMaxLength: (maxLength) => `Must be at most ${maxLength} characters`,
  validationMaxFileSize: (maxSizeBytes) =>
    `File must be smaller than ${formatBytes(maxSizeBytes)}`,
};

const ActionFormLabelsContext = createContext<ActionFormLabels>(
  DEFAULT_ACTION_FORM_LABELS,
);

export interface ActionFormLabelsProviderProps {
  labels?: Partial<ActionFormLabels>;
  children: ReactNode;
}

/**
 * Supplies overridden {@link ActionFormLabels} to descendant form and field
 * components via context. Merges `labels` over the labels from the nearest
 * ancestor provider, so a wrapping `ActionForm` and an inner `BaseForm` can
 * each override a different subset.
 *
 * The provided value keeps a stable identity across renders whenever the
 * merged labels are equal, so callers can pass an inline `labels` object
 * without re-rendering every label consumer.
 */
export function ActionFormLabelsProvider({
  labels,
  children,
}: ActionFormLabelsProviderProps): ReactElement {
  const parent = useContext(ActionFormLabelsContext);
  const merged = labels != null ? { ...parent, ...labels } : parent;

  // Reuse the previous value when the merge is equal so an inline `labels`
  // object (new identity each render) doesn't churn the context.
  const stableRef = useRef(merged);
  if (!isEqual(stableRef.current, merged)) {
    stableRef.current = merged;
  }

  return (
    <ActionFormLabelsContext.Provider value={stableRef.current}>
      {children}
    </ActionFormLabelsContext.Provider>
  );
}

/**
 * Returns the fully-resolved {@link ActionFormLabels} for the current subtree.
 * When no {@link ActionFormLabelsProvider} is present, returns
 * {@link DEFAULT_ACTION_FORM_LABELS}.
 */
export function useActionFormLabels(): ActionFormLabels {
  return useContext(ActionFormLabelsContext);
}

/**
 * Wraps `Inner` so it accepts an optional `labels` prop and supplies the merged
 * {@link ActionFormLabels} to its subtree.
 *
 * For generic components, e.g. `ActionForm` use
 * {@link ActionFormLabelsProvider} directly to preserve its type parameters.
 */
export function withActionFormLabels<P extends object>(
  Inner: React.ComponentType<P>,
): React.FC<P & { labels?: Partial<ActionFormLabels> }> {
  function LabelledComponent(
    props: P & { labels?: Partial<ActionFormLabels> },
  ): ReactElement {
    const { labels, ...rest } = props;
    return (
      <ActionFormLabelsProvider labels={labels}>
        <Inner {...(rest as unknown as P)} />
      </ActionFormLabelsProvider>
    );
  }
  LabelledComponent.displayName = `withActionFormLabels(${Inner.displayName})`;
  return LabelledComponent;
}

function formatConstraint(value: number | Date): string {
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  return String(value);
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
