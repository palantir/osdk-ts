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

import classnames from "classnames";
import React, { memo } from "react";
import { Switch } from "../../../base-components/switch/Switch.js";
import styles from "./ToggleInput.module.css";

interface ToggleInputProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

function ToggleInputInner({
  enabled,
  onChange,
  label,
  className,
  style,
}: ToggleInputProps): React.ReactElement {
  const rootClassName = classnames(styles.toggleInput, className);

  return (
    <div className={rootClassName} style={style} data-enabled={enabled}>
      <label className={styles.toggleLabel}>
        <Switch checked={enabled} onCheckedChange={onChange} />
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
    </div>
  );
}

export const ToggleInput: React.NamedExoticComponent<ToggleInputProps> = memo(
  ToggleInputInner,
);
