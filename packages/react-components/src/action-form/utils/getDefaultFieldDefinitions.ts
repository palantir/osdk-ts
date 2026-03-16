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
import type { FieldKey, FormFieldDefinition } from "../FormFieldApi.js";
import { getDefaultFieldComponent } from "./getDefaultFieldComponent.js";

/**
 * Derives default field definitions from fetched ActionMetadata.
 */
export function getDefaultFieldDefinitions<
  Q extends ActionDefinition<unknown>,
>(metadata: ActionMetadata): ReadonlyArray<FormFieldDefinition<Q>> {
  return Object.entries(metadata.parameters).map(([key, param]) => ({
    // Object.entries erases key types; assertion bridges runtime string to FieldKey<Q>
    fieldKey: key as FieldKey<Q>,
    label: key,
    // getDefaultFieldComponent returns FieldComponent (full union); TS can't verify
    // it matches ValidFormFieldForPropertyType for a deferred generic Q
    fieldComponent: getDefaultFieldComponent(param.type),
    parameterType: param.type,
    isRequired: !param.nullable,
  } as FormFieldDefinition<Q>));
}
