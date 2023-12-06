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
import type { NumberFormatCurrency } from "./NumberFormatCurrency.js";
import type { NumberFormatCustomUnit } from "./NumberFormatCustomUnit.js";
import type { NumberFormatOrdinal } from "./NumberFormatOrdinal.js";
import type { NumberFormatPercentage } from "./NumberFormatPercentage.js";
import type { NumberFormatPerMille } from "./NumberFormatPerMille.js";
import type { NumberFormatPrePostFix } from "./NumberFormatPrePostFix.js";
import type { NumberFormatUnit } from "./NumberFormatUnit.js";
export interface NumberFormatter_base {
  type: "base";
  base: NumberFormatBase;
}

export interface NumberFormatter_percentage {
  type: "percentage";
  percentage: NumberFormatPercentage;
}

export interface NumberFormatter_perMille {
  type: "perMille";
  perMille: NumberFormatPerMille;
}

export interface NumberFormatter_ordinal {
  type: "ordinal";
  ordinal: NumberFormatOrdinal;
}

export interface NumberFormatter_currency {
  type: "currency";
  currency: NumberFormatCurrency;
}

export interface NumberFormatter_unit {
  type: "unit";
  unit: NumberFormatUnit;
}

export interface NumberFormatter_customUnit {
  type: "customUnit";
  customUnit: NumberFormatCustomUnit;
}

export interface NumberFormatter_prePost {
  type: "prePost";
  prePost: NumberFormatPrePostFix;
}
export type NumberFormatter =
  | NumberFormatter_base
  | NumberFormatter_percentage
  | NumberFormatter_perMille
  | NumberFormatter_ordinal
  | NumberFormatter_currency
  | NumberFormatter_unit
  | NumberFormatter_customUnit
  | NumberFormatter_prePost;
