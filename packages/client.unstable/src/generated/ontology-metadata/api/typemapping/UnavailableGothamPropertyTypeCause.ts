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

import type { GothamPropertyTypeUnavailableConverterError } from "./GothamPropertyTypeUnavailableConverterError.js";
import type { GothamPropertyTypeUnavailableDeprecated } from "./GothamPropertyTypeUnavailableDeprecated.js";
import type { GothamPropertyTypeUnavailableHasCustomMakers } from "./GothamPropertyTypeUnavailableHasCustomMakers.js";
import type { GothamPropertyTypeUnavailableInTransfer } from "./GothamPropertyTypeUnavailableInTransfer.js";
import type { GothamPropertyTypeUnavailableIsComposite } from "./GothamPropertyTypeUnavailableIsComposite.js";
import type { GothamPropertyTypeUnavailableNonIndexedProperty } from "./GothamPropertyTypeUnavailableNonIndexedProperty.js";
import type { GothamPropertyTypeUnavailableSystemProperty } from "./GothamPropertyTypeUnavailableSystemProperty.js";
import type { GothamPropertyTypeUnavailableUnknown } from "./GothamPropertyTypeUnavailableUnknown.js";
import type { GothamPropertyTypeUnavailableUnsupportedBaseValidators } from "./GothamPropertyTypeUnavailableUnsupportedBaseValidators.js";
import type { GothamPropertyTypeUnavailableUnsupportedMaxValueLength } from "./GothamPropertyTypeUnavailableUnsupportedMaxValueLength.js";
export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableIsComposite {
  type: "gothamPropertyTypeUnavailableIsComposite";
  gothamPropertyTypeUnavailableIsComposite:
    GothamPropertyTypeUnavailableIsComposite;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableInTransfer {
  type: "gothamPropertyTypeUnavailableInTransfer";
  gothamPropertyTypeUnavailableInTransfer:
    GothamPropertyTypeUnavailableInTransfer;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableConverterError {
  type: "gothamPropertyTypeUnavailableConverterError";
  gothamPropertyTypeUnavailableConverterError:
    GothamPropertyTypeUnavailableConverterError;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableDeprecated {
  type: "gothamPropertyTypeUnavailableDeprecated";
  gothamPropertyTypeUnavailableDeprecated:
    GothamPropertyTypeUnavailableDeprecated;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableSystemProperty {
  type: "gothamPropertyTypeUnavailableSystemProperty";
  gothamPropertyTypeUnavailableSystemProperty:
    GothamPropertyTypeUnavailableSystemProperty;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableNonIndexedProperty {
  type: "gothamPropertyTypeUnavailableNonIndexedProperty";
  gothamPropertyTypeUnavailableNonIndexedProperty:
    GothamPropertyTypeUnavailableNonIndexedProperty;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnsupportedBaseValidators {
  type: "gothamPropertyTypeUnavailableUnsupportedBaseValidators";
  gothamPropertyTypeUnavailableUnsupportedBaseValidators:
    GothamPropertyTypeUnavailableUnsupportedBaseValidators;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnsupportedMaxValueLength {
  type: "gothamPropertyTypeUnavailableUnsupportedMaxValueLength";
  gothamPropertyTypeUnavailableUnsupportedMaxValueLength:
    GothamPropertyTypeUnavailableUnsupportedMaxValueLength;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableHasCustomMakers {
  type: "gothamPropertyTypeUnavailableHasCustomMakers";
  gothamPropertyTypeUnavailableHasCustomMakers:
    GothamPropertyTypeUnavailableHasCustomMakers;
}

export interface UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnknown {
  type: "gothamPropertyTypeUnavailableUnknown";
  gothamPropertyTypeUnavailableUnknown: GothamPropertyTypeUnavailableUnknown;
}
export type UnavailableGothamPropertyTypeCause =
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableIsComposite
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableInTransfer
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableConverterError
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableDeprecated
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableSystemProperty
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableNonIndexedProperty
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnsupportedBaseValidators
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnsupportedMaxValueLength
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableHasCustomMakers
  | UnavailableGothamPropertyTypeCause_gothamPropertyTypeUnavailableUnknown;
