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

import { CaretDown } from "@blueprintjs/icons";
import classNames from "classnames";
import * as React from "react";

import styles from "../AipAgentChat.module.css";

export interface AipAgentChatModelPickerProps {
  models: ReadonlyArray<string>;
  activeModel: string;
  onModelChange: (model: string) => void;
  disabled?: boolean;
  className?: string;
}

export function AipAgentChatModelPicker({
  models,
  activeModel,
  onModelChange,
  disabled,
  className,
}: AipAgentChatModelPickerProps): React.ReactElement | null {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onModelChange(event.target.value);
    },
    [onModelChange]
  );

  if (models.length === 0) {
    return null;
  }

  if (models.length === 1) {
    return (
      <span className={classNames(styles.modelPicker, className)}>
        <span className={styles.modelPickerPrefix}>Model:</span>
        <span className={styles.modelPickerValue}>{activeModel}</span>
      </span>
    );
  }

  return (
    <span className={classNames(styles.modelPicker, className)}>
      <span className={styles.modelPickerPrefix}>Model:</span>
      <span className={styles.modelPickerControl}>
        <span className={styles.modelPickerValue}>{activeModel}</span>
        <CaretDown className={styles.modelPickerCaret} size={14} />
        <select
          aria-label="Active model"
          className={styles.modelPickerNativeSelect}
          disabled={disabled}
          onChange={handleChange}
          value={activeModel}
        >
          {models.map((modelName) => (
            <option key={modelName} value={modelName}>
              {modelName}
            </option>
          ))}
        </select>
      </span>
    </span>
  );
}
