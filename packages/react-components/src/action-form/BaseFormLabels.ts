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

import type { FormFieldLabels, FormFieldPropsByType } from "./FormFieldApi.js";

type FieldLabelsForProps<T> = "labels" extends keyof T
  ? Exclude<
      T extends { labels?: Partial<infer Labels> } ? Labels : never,
      undefined
    >
  : never;

/** Label bags accepted by each built-in field component. */
export type FieldLabelsByType = {
  [K in keyof FormFieldPropsByType]: FieldLabelsForProps<
    FormFieldPropsByType[K]
  >;
};

/** Label overrides for built-in field components, keyed by field component. */
export type FieldComponentLabels = Partial<{
  [K in keyof FieldLabelsByType as FieldLabelsByType[K] extends never
    ? never
    : K]: Partial<FieldLabelsByType[K]>;
}>;

/** User-facing strings rendered directly by BaseForm. */
export interface BaseFormDirectLabels {
  /** @default "Loading form fields" */
  loadingFields: string;
  /** @default "Submission failed" */
  submissionFailed: string;
  /** @default "Invalid" */
  validationError: string;
  /** @default "Some fields are invalid" */
  invalidFields: string;
  /** @default (count) => count === 1 ? "1 issue" : `${count} issues` */
  renderIssueCount: (count: number) => string;
  /** @default "Submitting…" */
  submitting: string;

  /** @default (count) => count === 1 ? "1 error" : `${count} errors` */
  renderSectionErrorCount: (count: number) => string;
}

/** All user-facing strings rendered by BaseForm and its field renderers. */
export interface BaseFormLabels extends BaseFormDirectLabels {
  /** User-facing strings rendered by each FormField chrome. */
  fieldLabels: Partial<FormFieldLabels>;

  /** Overrides user-facing strings in built-in field components, keyed by component. */
  fieldComponentLabels: FieldComponentLabels;
}
