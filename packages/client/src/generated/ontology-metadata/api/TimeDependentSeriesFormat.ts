/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { TimeDependentNonNumericSeriesFormat } from "./TimeDependentNonNumericSeriesFormat.js";
import type { TimeDependentNumericOrNonNumericSeriesFormat } from "./TimeDependentNumericOrNonNumericSeriesFormat.js";
import type { TimeDependentNumericSeriesFormat } from "./TimeDependentNumericSeriesFormat.js";
export interface TimeDependentSeriesFormat_numeric {
  type: "numeric";
  numeric: TimeDependentNumericSeriesFormat;
}

export interface TimeDependentSeriesFormat_nonNumeric {
  type: "nonNumeric";
  nonNumeric: TimeDependentNonNumericSeriesFormat;
}

export interface TimeDependentSeriesFormat_numericOrNonNumeric {
  type: "numericOrNonNumeric";
  numericOrNonNumeric: TimeDependentNumericOrNonNumericSeriesFormat;
}
export type TimeDependentSeriesFormat =
  | TimeDependentSeriesFormat_numeric
  | TimeDependentSeriesFormat_nonNumeric
  | TimeDependentSeriesFormat_numericOrNonNumeric;
