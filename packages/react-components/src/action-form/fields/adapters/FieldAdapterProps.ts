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

import type {
  FieldComponent,
  PortalContainer,
  RendererFieldDefinition,
} from "../../FormFieldApi.js";

/**
 * Props shared by every field adapter. An adapter sits between form state and
 * one form-managed field component: it receives the stored value and the
 * renderer field definition (including `fieldType`) and renders the component.
 */
export interface FieldAdapterProps<K extends FieldComponent> {
  fieldDefinition: Extract<RendererFieldDefinition, { fieldComponent: K }>;
  value: unknown;
  onChange: (value: unknown) => void;
  error: string | undefined;
}

/** Props for adapters whose field component renders a popover. */
export interface PortalFieldAdapterProps<
  K extends FieldComponent,
> extends FieldAdapterProps<K> {
  /** Portal container, already resolved against the field-level override. */
  portalContainer: PortalContainer | undefined;
}
