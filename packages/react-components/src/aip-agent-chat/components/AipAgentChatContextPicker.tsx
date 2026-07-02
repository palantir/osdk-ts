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

import * as React from "react";

import { DropdownField } from "../../action-form/fields/DropdownField.js";

import styles from "../AipAgentChat.module.css";

export interface AipAgentChatContextPickerProps {
  /** Ids of the context items available to select. */
  contextItemIds: ReadonlyArray<string>;

  /** Currently selected context item ids. */
  selected: ReadonlyArray<string>;

  /** Fires with the next selection whenever the user toggles an item. */
  onChange: (next: ReadonlyArray<string>) => void;

  /** Disables interaction (e.g. while a request is in flight). */
  disabled?: boolean;
}

const PLACEHOLDER = "+ Add context";

export function AipAgentChatContextPicker({
  contextItemIds,
  selected,
  onChange,
  disabled,
}: AipAgentChatContextPickerProps): React.ReactElement | null {
  const items = React.useMemo(() => [...contextItemIds], [contextItemIds]);
  const value = React.useMemo(() => [...selected], [selected]);

  const handleChange = React.useCallback(
    (next: Array<string> | null) => {
      onChange(next ?? []);
    },
    [onChange]
  );

  if (contextItemIds.length === 0) {
    return null;
  }

  return (
    <div className={styles.contextPickerWrapper}>
      <DropdownField<string, true>
        items={items}
        value={value}
        onChange={handleChange}
        isMultiple={true}
        isSearchable={true}
        placeholder={PLACEHOLDER}
        disabled={disabled}
      />
    </div>
  );
}
