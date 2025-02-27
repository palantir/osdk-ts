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

import type { OntologyIrObjectParameterStructFieldValue } from "./OntologyIrObjectParameterStructFieldValue.js";
import type { OntologyIrObjectParameterStructListFieldValue } from "./OntologyIrObjectParameterStructListFieldValue.js";
export interface OntologyIrStructFieldPrefill_objectParameterStructFieldValue {
  type: "objectParameterStructFieldValue";
  objectParameterStructFieldValue: OntologyIrObjectParameterStructFieldValue;
}

export interface OntologyIrStructFieldPrefill_objectParameterStructListFieldValue {
  type: "objectParameterStructListFieldValue";
  objectParameterStructListFieldValue:
    OntologyIrObjectParameterStructListFieldValue;
}
/**
 * StructFieldPrefill specifies what should initially suggested to users for a struct parameter's field.
 */
export type OntologyIrStructFieldPrefill =
  | OntologyIrStructFieldPrefill_objectParameterStructFieldValue
  | OntologyIrStructFieldPrefill_objectParameterStructListFieldValue;
