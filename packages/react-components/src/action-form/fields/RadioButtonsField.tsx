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
import React, { memo, type ReactElement, useCallback, useMemo } from "react";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { Option, RadioButtonsFieldProps } from "../FormFieldApi.js";
import styles from "./RadioButtonsField.module.css";

export const RadioButtonsField: <V>(
  props: RadioButtonsFieldProps<V>,
) => ReactElement = typedReactMemo(function RadioButtonsFieldFn<V,>({
  id,
  value,
  onChange,
  options,
}: RadioButtonsFieldProps<V>): ReactElement {
  const selectedLabel = useMemo(
    () =>
      value != null
        ? options.find((opt) => opt.value === value)?.label
        : undefined,
    [options, value],
  );

  const handleValueChange = useCallback(
    (nextLabel: unknown) => {
      const match = options.find((opt) => opt.label === nextLabel);
      onChange?.(match?.value ?? null);
    },
    [options, onChange],
  );

  return (
    <RadioGroup
      id={id}
      className={styles.osdkRadioGroup}
      value={selectedLabel}
      onValueChange={handleValueChange}
    >
      {options.map((option) => (
        <RadioItem key={option.label} option={option} />
      ))}
    </RadioGroup>
  );
});

const RadioItem = memo(function RadioItemFn({
  option,
}: {
  option: Option<unknown>;
}): ReactElement {
  return (
    <label className={styles.osdkRadioItem}>
      <Radio.Root value={option.label} className={styles.osdkRadioRoot}>
        <Radio.Indicator className={styles.osdkRadioIndicator} />
      </Radio.Root>
      <span className={styles.osdkRadioLabel}>{option.label}</span>
    </label>
  );
});
