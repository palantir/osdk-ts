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

import type { NumberFormatCustomUnit } from "./NumberFormatCustomUnit.js";
import type { NumberFormatUnit } from "./NumberFormatUnit.js";
export interface NumericSeriesValueUnit_standardUnit {
  type: "standardUnit";
  standardUnit: NumberFormatUnit;
}

export interface NumericSeriesValueUnit_customUnit {
  type: "customUnit";
  customUnit: NumberFormatCustomUnit;
}
/**
 * The unit to accompany the numeric value of a Time Dependent property. Can be a standardized NumberFormatUnit
 * or a user-inputted NumberFormatCustomUnit for Numeric series. Either can be provided by a property or a
 * user-inputted constant.
 */
export type NumericSeriesValueUnit =
  | NumericSeriesValueUnit_standardUnit
  | NumericSeriesValueUnit_customUnit;
