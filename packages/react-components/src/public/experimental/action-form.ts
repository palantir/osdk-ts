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

import type * as Api from "@osdk/api";

import type * as FormFieldApi from "../../action-form/FormFieldApi.js";
import * as Stable from "../action-form.js";

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export const ActionForm: typeof Stable.ActionForm = Stable.ActionForm;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type ActionFormProps<Q extends Api.ActionDefinition<unknown>> =
  Stable.ActionFormProps<Q>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type BaseFormProps = Stable.BaseFormProps;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type FormContentItem = Stable.FormContentItem;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type FormError = Stable.FormError;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type FormSectionDefinition = Stable.FormSectionDefinition;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type FormState<Q extends Api.ActionDefinition<unknown>> =
  Stable.FormState<Q>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export const BaseForm: typeof Stable.BaseForm = Stable.BaseForm;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type ActionParameters<Q extends Api.ActionDefinition<unknown>> =
  Stable.ActionParameters<Q>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type BaseFormFieldProps<V> = Stable.BaseFormFieldProps<V>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type CustomFieldProps<V> = Stable.CustomFieldProps<V>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type DropdownFieldProps<
  V,
  Multiple extends boolean = false,
> = Stable.DropdownFieldProps<V, Multiple>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type FieldComponent = Stable.FieldComponent;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type FieldValueType<
  Q extends Api.ActionDefinition<unknown>,
  K extends keyof Stable.ActionParameters<Q> = keyof Stable.ActionParameters<Q>,
> = Stable.FieldValueType<Q, K>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type FilePickerProps = Stable.FilePickerProps;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type FormFieldDefinition<
  Q extends Api.ActionDefinition<unknown>,
  K extends FormFieldApi.FieldKey<Q> = FormFieldApi.FieldKey<Q>,
> = Stable.FormFieldDefinition<Q, K>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type FormFieldPropsByType = Stable.FormFieldPropsByType;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type NumberInputFieldProps = Stable.NumberInputFieldProps;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type ObjectSelectFieldProps<
  Q extends Api.ObjectTypeDefinition = Api.ObjectTypeDefinition,
> = Stable.ObjectSelectFieldProps<Q>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type ObjectSetFieldProps<T extends Api.ObjectTypeDefinition> =
  Stable.ObjectSetFieldProps<T>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type Option<V> = Stable.Option<V>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type PortalContainer = Stable.PortalContainer;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type RadioButtonsFieldProps<V> = Stable.RadioButtonsFieldProps<V>;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type RendererFieldDefinition = Stable.RendererFieldDefinition;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type TextAreaFieldProps = Stable.TextAreaFieldProps;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type TextInputFieldProps = Stable.TextInputFieldProps;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type UnsupportedFieldProps = Stable.UnsupportedFieldProps;

/** @deprecated Import from `@osdk/react-components/action-form` instead. */
export type ValidationError = Stable.ValidationError;
