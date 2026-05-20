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

import { Menu } from "@base-ui/react/menu";
import React, { memo, useCallback } from "react";
import styles from "./ExcludeDropdown.module.css";
import { CheckIcon, ExcludeIcon, OverflowMenuIcon } from "./FilterIcons.js";
import { useFilterListBoundary } from "./FilterListBoundaryContext.js";
import itemStyles from "./FilterListItem.module.css";

export interface FilterOverflowMenuProps {
  /**
   * Whether the wrapped filter supports a Keep/Exclude toggle. When `false`,
   * the menu skips the keep/exclude items.
   */
  supportsExcluding: boolean;
  /**
   * Current exclude state (drawn from the inner filter state for
   * `linkedProperty` filters).
   */
  isExcluding: boolean;
  /**
   * Toggle exclude/keep. Already unwraps/re-wraps `linkedProperty` state.
   */
  onToggleExclude: () => void;
  /**
   * Whether the wrapped filter currently has a clearable selection.
   */
  hasSelection: boolean;
  /**
   * Clear the active selection. When omitted (or when `hasSelection` is
   * false), the "Clear all selections" item is omitted.
   */
  onClearSelection?: () => void;
  /**
   * Removes the filter row entirely. When provided, the menu renders a
   * "Remove filter" item at the bottom.
   */
  onRemove?: () => void;
  /**
   * Accessible label for the trigger button. Defaults to "More actions".
   */
  triggerAriaLabel?: string;
}

function FilterOverflowMenuInner({
  supportsExcluding,
  isExcluding,
  onToggleExclude,
  hasSelection,
  onClearSelection,
  onRemove,
  triggerAriaLabel = "More actions",
}: FilterOverflowMenuProps): React.ReactElement | null {
  const collisionBoundary = useFilterListBoundary();

  const handleKeep = useCallback(() => {
    if (isExcluding) {
      onToggleExclude();
    }
  }, [isExcluding, onToggleExclude]);

  const handleExclude = useCallback(() => {
    if (!isExcluding) {
      onToggleExclude();
    }
  }, [isExcluding, onToggleExclude]);

  const handleClear = useCallback(() => {
    onClearSelection?.();
  }, [onClearSelection]);

  const handleRemove = useCallback(() => {
    onRemove?.();
  }, [onRemove]);

  const showClear = hasSelection && onClearSelection != null;
  const showRemove = onRemove != null;
  const hasAnyItems = supportsExcluding || showClear || showRemove;
  if (!hasAnyItems) {
    return null;
  }

  return (
    <Menu.Root>
      <Menu.Trigger
        className={itemStyles.headerActionButton}
        aria-label={triggerAriaLabel}
      >
        <OverflowMenuIcon />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          className={styles.positioner}
          sideOffset={4}
          collisionBoundary={collisionBoundary}
        >
          <Menu.Popup className={styles.popup}>
            {supportsExcluding && (
              <>
                <Menu.Item
                  className={styles.menuItem}
                  onClick={handleKeep}
                >
                  <span className={styles.menuItemCheck}>
                    {!isExcluding && <CheckIcon />}
                  </span>
                  Keep matching
                </Menu.Item>
                <Menu.Item
                  className={styles.menuItem}
                  onClick={handleExclude}
                >
                  <span className={styles.menuItemCheck}>
                    {isExcluding && <ExcludeIcon />}
                  </span>
                  Exclude matching
                </Menu.Item>
              </>
            )}
            {showClear && (
              <Menu.Item
                className={styles.menuItem}
                onClick={handleClear}
              >
                <span className={styles.menuItemCheck} />
                Clear all selections
              </Menu.Item>
            )}
            {showRemove && (
              <Menu.Item
                className={styles.menuItem}
                onClick={handleRemove}
              >
                <span className={styles.menuItemCheck} />
                Remove filter
              </Menu.Item>
            )}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

export const FilterOverflowMenu: React.MemoExoticComponent<
  typeof FilterOverflowMenuInner
> = memo(FilterOverflowMenuInner);
