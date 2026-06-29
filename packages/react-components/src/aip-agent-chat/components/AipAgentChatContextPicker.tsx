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

import { Database } from "@blueprintjs/icons";
import * as React from "react";
import { Combobox } from "../../base-components/combobox/Combobox.js";
import styles from "../AipAgentChat.module.css";

export interface AipAgentChatContextPickerProps {
  /** API names of the object types available to select. */
  objectTypes: ReadonlyArray<string>;

  /** Currently selected object type API names. */
  selected: ReadonlyArray<string>;

  /** Fires with the next selection whenever the user toggles a type. */
  onChange: (next: ReadonlyArray<string>) => void;

  /** Disables interaction (e.g. while a request is in flight). */
  disabled?: boolean;
}

/**
 * Multi-select dropdown rendered in the composer footer that lets the user
 * choose which object types to load into the conversation as context.
 * Presentational only — operates on object type API names and reports
 * selection changes upward; the OSDK wrapper handles fetching.
 */
export function AipAgentChatContextPicker({
  objectTypes,
  selected,
  onChange,
  disabled,
}: AipAgentChatContextPickerProps): React.ReactElement | null {
  const selectedValues = React.useMemo(() => [...selected], [selected]);

  const handleValueChange = React.useCallback(
    (next: Array<string>) => {
      onChange(next);
    },
    [onChange],
  );

  const renderItem = React.useCallback(
    (apiName: string) => (
      <Combobox.Item
        key={apiName}
        value={apiName}
        className={styles.contextPickerItem}
      >
        <Combobox.ItemIndicator />
        <span>{apiName}</span>
      </Combobox.Item>
    ),
    [],
  );

  if (objectTypes.length === 0) {
    return null;
  }

  const triggerLabel = selected.length === 0
    ? "Add object context"
    : `${selected.length} object type${selected.length === 1 ? "" : "s"}`;

  return (
    <Combobox.Root<string, true>
      multiple={true}
      value={selectedValues}
      onValueChange={handleValueChange}
      items={objectTypes as Array<string>}
      disabled={disabled}
    >
      <Combobox.Trigger
        className={styles.contextPickerTrigger}
        disabled={disabled}
      >
        <Database className={styles.contextPickerIcon} size={14} />
        <span className={styles.contextPickerLabel}>{triggerLabel}</span>
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Positioner>
          <Combobox.Popup>
            <Combobox.Empty>No object types</Combobox.Empty>
            <Combobox.List>{renderItem}</Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}
