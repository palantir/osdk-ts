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

import React, { useCallback } from "react";
import { Switch } from "../../base-components/switch/Switch.js";
import type { SwitchFieldProps } from "../FormFieldApi.js";

export const SwitchField: React.NamedExoticComponent<SwitchFieldProps> = React
  .memo(function SwitchFieldFn({
    id,
    value,
    onChange,
    error,
    "aria-label": ariaLabel,
  }: SwitchFieldProps): React.ReactElement {
    const handleCheckedChange = useCallback(
      (checked: boolean) => {
        onChange?.(checked);
      },
      [onChange],
    );

    return (
      <Switch
        id={id}
        checked={value ?? false}
        onCheckedChange={handleCheckedChange}
        aria-invalid={error != null || undefined}
        aria-label={ariaLabel}
      />
    );
  });
