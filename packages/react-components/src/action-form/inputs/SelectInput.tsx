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

import React from "react";
import { Select } from "../../base-components/select/Select.js";

interface SelectInputProps {
  value: string | undefined;
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
}

export function SelectInput({
  value,
  onChange,
  options,
  placeholder,
}: SelectInputProps): React.ReactElement {
  const handleValueChange = React.useCallback(
    (newValue: string | null) => {
      if (newValue != null) {
        onChange(newValue);
      }
    },
    [onChange],
  );

  return (
    <Select.Root<string> value={value} onValueChange={handleValueChange}>
      <Select.Trigger placeholder={placeholder} />
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                {option.label}
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
