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

import type { NumberFormatBase } from "./NumberFormatBase.js";
import type { NumberFormatCurrencyStyle } from "./NumberFormatCurrencyStyle.js";
import type { PropertyTypeReferenceOrStringConstant } from "./PropertyTypeReferenceOrStringConstant.js";

/**
 * Note that non-visual features e.g. sorting & histograms, are not guaranteed to be currency-aware. They can
 * group the same number together even if they have different currencies.
 */
export interface NumberFormatCurrency {
  base: NumberFormatBase;
  style: NumberFormatCurrencyStyle;
  currencyCode: PropertyTypeReferenceOrStringConstant;
}
