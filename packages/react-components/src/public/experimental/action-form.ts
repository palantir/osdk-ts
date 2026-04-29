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

import { ActionForm as _ActionForm } from "../../action-form/ActionForm.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
export const ActionForm: typeof _ActionForm = withOsdkMetrics(
  _ActionForm,
  "ActionForm",
);
export type {
  ActionFormProps,
  BaseFormProps,
  FormError,
  FormState,
} from "../../action-form/ActionFormApi.js";
export { BaseForm } from "../../action-form/BaseForm.js";
export type {
  ActionParameters,
  BaseFormFieldProps,
  CustomFieldProps,
  DateRange,
  DateRangeInputFieldProps,
  DatetimePickerFieldProps,
  DropdownFieldProps,
  FieldComponent,
  FieldValueType,
  FilePickerProps,
  FormFieldDefinition,
  FormFieldPropsByType,
  NumberInputFieldProps,
  ObjectSetFieldProps,
  Option,
  RadioButtonsFieldProps,
  RendererFieldDefinition,
  TextAreaFieldProps,
  TextInputFieldProps,
  ValidationError,
} from "../../action-form/FormFieldApi.js";
