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

import type { ValueTypeUsageMismatchPropertyTypeError } from "./ValueTypeUsageMismatchPropertyTypeError.js";
import type { ValueTypeUsageMismatchScaleOrPrecisionError } from "./ValueTypeUsageMismatchScaleOrPrecisionError.js";
import type { ValueTypeUsageMismatchStructFieldError } from "./ValueTypeUsageMismatchStructFieldError.js";
import type { ValueTypeUsageMissingStructFieldError } from "./ValueTypeUsageMissingStructFieldError.js";
export interface BaseValueTypeUsageError_mismatchPropertyType {
  type: "mismatchPropertyType";
  mismatchPropertyType: ValueTypeUsageMismatchPropertyTypeError;
}

export interface BaseValueTypeUsageError_mismatchStructField {
  type: "mismatchStructField";
  mismatchStructField: ValueTypeUsageMismatchStructFieldError;
}

export interface BaseValueTypeUsageError_missingStructField {
  type: "missingStructField";
  missingStructField: ValueTypeUsageMissingStructFieldError;
}

export interface BaseValueTypeUsageError_mismatchScaleOrPrecision {
  type: "mismatchScaleOrPrecision";
  mismatchScaleOrPrecision: ValueTypeUsageMismatchScaleOrPrecisionError;
}
/**
 * Shared validation errors for usage of value types across property types and shared property types.
 */
export type BaseValueTypeUsageError =
  | BaseValueTypeUsageError_mismatchPropertyType
  | BaseValueTypeUsageError_mismatchStructField
  | BaseValueTypeUsageError_missingStructField
  | BaseValueTypeUsageError_mismatchScaleOrPrecision;
