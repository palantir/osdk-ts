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

import type { BaseFormFieldProps } from "@osdk/react-components/experimental";
import React, { memo, useCallback } from "react";
import styles from "./ThemedSliderField.module.css";

export const THEMED_SLIDER_DEFAULT_VALUE = 50;
const MIN_SLIDER_VALUE = 0;
const MAX_SLIDER_VALUE = 100;

export const ThemedSliderField = memo(function ThemedSliderFieldFn({
  disabled,
  id,
  onChange,
  value,
}: BaseFormFieldProps<unknown>): React.ReactElement {
  const numericValue = getNumericSliderValue(value);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.currentTarget.valueAsNumber);
    },
    [onChange],
  );

  return (
    <div className={styles.sliderField}>
      <input
        aria-valuetext={`${numericValue}% complete`}
        className={styles.sliderInput}
        disabled={disabled}
        id={id}
        max={MAX_SLIDER_VALUE}
        min={MIN_SLIDER_VALUE}
        onChange={handleChange}
        type="range"
        value={numericValue}
      />
      <output className={styles.sliderValue} htmlFor={id}>
        {numericValue}% complete
      </output>
    </div>
  );
});

function getNumericSliderValue(value: unknown): number {
  return typeof value === "number" ? value : THEMED_SLIDER_DEFAULT_VALUE;
}
