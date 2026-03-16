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

import { Menu } from "@base-ui/react/menu";
import React, { memo, useCallback } from "react";
import styles from "./ExcludeDropdown.module.css";
import { CheckIcon, ChevronDownIcon } from "./FilterIcons.js";

interface ExcludeDropdownProps {
  isExcluding: boolean;
  onToggleExclude: () => void;
  selectedValueCount?: number;
  totalValueCount?: number;
}

function ExcludeDropdownInner({
  isExcluding,
  onToggleExclude,
  selectedValueCount,
  totalValueCount,
}: ExcludeDropdownProps): React.ReactElement {
  const label = isExcluding ? "Excluding" : "Keeping";

  const selectedPart = selectedValueCount != null && selectedValueCount > 0
    ? ` ${selectedValueCount.toLocaleString()}`
    : "";
  const totalPart = totalValueCount != null && totalValueCount > 0
    ? ` of ${totalValueCount.toLocaleString()}`
    : "";
  const countLabel = selectedPart
    ? `${selectedPart}${totalPart} values`
    : "";

  const handleSelectKeeping = useCallback(() => {
    if (isExcluding) {
      onToggleExclude();
    }
  }, [isExcluding, onToggleExclude]);

  const handleSelectExcluding = useCallback(() => {
    if (!isExcluding) {
      onToggleExclude();
    }
  }, [isExcluding, onToggleExclude]);

  return (
    <div className={styles.excludeDropdownContainer}>
      <Menu.Root>
        <Menu.Trigger
          className={styles.trigger}
          aria-label={`${label}${countLabel}`}
        >
          <span className={styles.triggerLabel}>
            {label}
            {countLabel}
          </span>
          <ChevronDownIcon />
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className={styles.positioner} sideOffset={4}>
            <Menu.Popup className={styles.popup}>
              <Menu.Item
                className={styles.menuItem}
                onClick={handleSelectKeeping}
              >
                <span className={styles.menuItemCheck}>
                  {!isExcluding && <CheckIcon />}
                </span>
                Keeping
              </Menu.Item>
              <Menu.Item
                className={styles.menuItem}
                onClick={handleSelectExcluding}
              >
                <span className={styles.menuItemCheck}>
                  {isExcluding && <CheckIcon />}
                </span>
                Excluding
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </div>
  );
}

export const ExcludeDropdown: React.MemoExoticComponent<
  typeof ExcludeDropdownInner
> = memo(ExcludeDropdownInner);
