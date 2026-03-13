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
import type { Option } from "../FormFieldApi.js";
import { SelectInput } from "./SelectInput.js";

const EMPTY_OPTIONS: Array<{ label: string; value: string }> = [];

interface DropdownInputProps {
  value: string | undefined;
  onChange: (value: string) => void;
  options?: Option<unknown>[];
  placeholder?: string;
  className?: string;
}

export function DropdownInput({
  value,
  onChange,
  options,
  placeholder,
  className,
}: DropdownInputProps): React.ReactElement {
  const mappedOptions = React.useMemo(
    () =>
      options?.map((option) => ({
        label: option.label,
        value: String(option.value),
      })) ?? EMPTY_OPTIONS,
    [options],
  );

  return (
    <SelectInput
      value={value}
      onChange={onChange}
      options={mappedOptions}
      placeholder={placeholder}
      className={className}
    />
  );
}
