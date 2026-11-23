/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { Result } from "../../../shared/Result.js";
import { getValueType } from "./getValueType.js";

/**
 * The paired conversion an adapter applies between the parameter value held
 * in form state and the field value its component displays and emits.
 */
export interface FieldValueConverter<F> {
  /**
   * Turns the stored parameter value into the field value to display, or
   * reports why the component can't display it.
   */
  toFieldValue: (parameterValue: unknown) => FieldValueResult<F>;
  /** Turns the field value the component emits into the value to store. */
  toParameterValue: (fieldValue: F) => unknown;
}

export type FieldValueResult<F> = Result<F, UnexpectedValueError>;

/** Why a field component can't display the stored parameter value. */
export interface UnexpectedValueError {
  /** The complete message shown to the user, e.g. "Expected a number, received: string" */
  message: string;
}

/** Stores the emitted field value unchanged. */
export function passThroughFieldValue<F>(fieldValue: F): F {
  return fieldValue;
}

/** Shows a stored string as text; used by the text input and text area. */
export const TEXT_CONVERTER: FieldValueConverter<string | null> = {
  toFieldValue: (value) => {
    if (value == null) {
      return Result.ok("");
    }
    if (typeof value === "string") {
      return Result.ok(value);
    }
    return Result.err({
      message: `Expected text, received: ${getValueType(value)}`,
    });
  },
  toParameterValue: passThroughFieldValue,
};
