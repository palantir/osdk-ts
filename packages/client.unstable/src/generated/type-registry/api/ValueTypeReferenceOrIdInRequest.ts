/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ValueTypeIdInRequest } from "./ValueTypeIdInRequest.js";
import type { ValueTypeReference } from "./ValueTypeReference.js";
export interface ValueTypeReferenceOrIdInRequest_reference {
  type: "reference";
  reference: ValueTypeReference;
}

export interface ValueTypeReferenceOrIdInRequest_idInRequest {
  type: "idInRequest";
  idInRequest: ValueTypeIdInRequest;
}
/**
 * Used when you want to refer to a collection of Value Types where some Value Types are already created and
 * some are being created in the same request. For example, used for struct value type creation where some
 * constraints may reference a struct field's value type being created at the same time.
 */
export type ValueTypeReferenceOrIdInRequest =
  | ValueTypeReferenceOrIdInRequest_reference
  | ValueTypeReferenceOrIdInRequest_idInRequest;
