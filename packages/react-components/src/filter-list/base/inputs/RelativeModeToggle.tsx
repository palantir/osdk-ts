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

import React, { memo } from "react";

import { Switch } from "../../../base-components/switch/Switch.js";

import styles from "./shared.module.css";

interface RelativeModeToggleProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

function RelativeModeToggleInner({
  checked,
  onCheckedChange,
}: RelativeModeToggleProps): React.ReactElement {
  return (
    <div className={styles.toggleRow}>
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label="Toggle relative date mode"
      />
      <span className={styles.toggleRowLabel}>Relative to today</span>
    </div>
  );
}

export const RelativeModeToggle = memo(
  RelativeModeToggleInner,
) as typeof RelativeModeToggleInner;
