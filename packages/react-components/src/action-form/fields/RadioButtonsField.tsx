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

import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import React, { memo, useCallback, useMemo } from "react";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { Option, RadioButtonsFieldProps } from "../FormFieldApi.js";
import styles from "./RadioButtonsField.module.css";

export const RadioButtonsField: <V>(
  props: RadioButtonsFieldProps<V>,
) => React.ReactElement = typedReactMemo(function RadioButtonsFieldFn<V,>({
  id,
  value,
  onChange,
  options,
  orientation,
}: RadioButtonsFieldProps<V>): React.ReactElement {
  // Internal state identity uses the option's array index (stringified) so
  // that `option.label` can be any ReactNode without breaking RadioGroup's
  // string-typed `value` contract.
  const selectedIndex = useMemo(
    () => {
      if (value == null) {
        return undefined;
      }
      const idx = options.findIndex((opt) => opt.value === value);
      return idx >= 0 ? String(idx) : undefined;
    },
    [options, value],
  );

  const handleValueChange = useCallback(
    (nextIndex: unknown) => {
      const idx = typeof nextIndex === "string" ? Number(nextIndex) : NaN;
      const match = Number.isInteger(idx) ? options[idx] : undefined;
      onChange?.(match?.value ?? null);
    },
    [options, onChange],
  );

  return (
    <RadioGroup
      id={id}
      className={styles.osdkRadioGroup}
      data-orientation={orientation ?? "vertical"}
      value={selectedIndex}
      onValueChange={handleValueChange}
    >
      {options.map((option, idx) => (
        <RadioItem key={idx} option={option} idx={idx} />
      ))}
    </RadioGroup>
  );
});

const RadioItem = memo(function RadioItemFn({
  option,
  idx,
}: {
  option: Option<unknown>;
  idx: number;
}): React.ReactElement {
  return (
    <label className={styles.osdkRadioItem}>
      <Radio.Root
        value={String(idx)}
        className={styles.osdkRadioRoot}
      >
        <Radio.Indicator className={styles.osdkRadioIndicator} />
      </Radio.Root>
      <span className={styles.osdkRadioLabel}>{option.label}</span>
    </label>
  );
});
