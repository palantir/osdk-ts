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

import type { Intent } from "./Intent.js";
import type { NoColorStyle } from "./NoColorStyle.js";
import type { RgbColor } from "./RgbColor.js";
export interface ColorStyle_intent {
  type: "intent";
  intent: Intent;
}

export interface ColorStyle_primaryRgb {
  type: "primaryRgb";
  primaryRgb: RgbColor;
}

export interface ColorStyle_none {
  type: "none";
  none: NoColorStyle;
}
export type ColorStyle =
  | ColorStyle_intent
  | ColorStyle_primaryRgb
  | ColorStyle_none;
