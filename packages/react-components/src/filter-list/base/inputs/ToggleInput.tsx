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

import React, { memo } from "react";
import type { ToggleInputClassNames } from "../../types/ClassNameOverrides.js";

interface ToggleInputProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label?: string;
  classNames?: ToggleInputClassNames;
}

export const ToggleInput = memo(function ToggleInput({
  enabled,
  onChange,
  label,
  classNames,
}: ToggleInputProps): React.ReactElement {
  return (
    <div className={classNames?.root} data-enabled={enabled}>
      <label className={classNames?.switch}>
        <input
          type="checkbox"
          role="switch"
          aria-checked={enabled}
          checked={enabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={classNames?.switchIndicator} />
        <span className={classNames?.label}>{label}</span>
      </label>
    </div>
  );
});
