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

/**
 * Native-select model picker rendered in the composer footer when the
 * OSDK wrapper is given an `availableModels` list. Operates on Foundry
 * LMS model API names. Renders a read-only label when exactly one model
 * is available so the active model stays visible without offering a
 * dropdown the user can't act on; renders nothing when the list is empty.
 */
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
      <span className={classNames(styles.modelPickerLabel, className)}>
        Model: {activeModel}
      </span>
    );
  }

  return (
    <select
      aria-label="Active model"
      className={classNames(styles.modelPicker, className)}
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
  );
}
