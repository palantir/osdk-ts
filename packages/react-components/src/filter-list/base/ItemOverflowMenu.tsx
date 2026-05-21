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
import classnames from "classnames";
import React, { memo } from "react";
import {
  CheckIcon,
  ExcludeIcon,
  OverflowMenuIcon,
  RemoveIcon,
  ResetIcon,
  SearchIcon,
} from "./FilterIcons.js";
import { useFilterListBoundary } from "./FilterListBoundaryContext.js";
import styles from "./ItemOverflowMenu.module.css";

interface ItemOverflowMenuProps {
  triggerClassName: string;
  triggerAriaLabel: string;
  /** Label used in the `Remove <label> filter` menu item aria-label. */
  filterLabel: string;
  showSearchInMenu: boolean;
  onSearchInMenu: () => void;
  showKeepExclude: boolean;
  isExcluding: boolean;
  onToggleExclude: () => void;
  showClearAll: boolean;
  onClearAll: () => void;
  showRemove: boolean;
  onRemove: () => void;
}

function ItemOverflowMenuInner({
  triggerClassName,
  triggerAriaLabel,
  filterLabel,
  showSearchInMenu,
  onSearchInMenu,
  showKeepExclude,
  isExcluding,
  onToggleExclude,
  showClearAll,
  onClearAll,
  showRemove,
  onRemove,
}: ItemOverflowMenuProps): React.ReactElement | null {
  const collisionBoundary = useFilterListBoundary();

  if (!showSearchInMenu && !showKeepExclude && !showClearAll && !showRemove) {
    return null;
  }

  return (
    <Menu.Root>
      <Menu.Trigger
        className={triggerClassName}
        aria-label={triggerAriaLabel}
      >
        <OverflowMenuIcon />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          className={styles.positioner}
          sideOffset={4}
          align="end"
          collisionBoundary={collisionBoundary}
        >
          <Menu.Popup className={styles.popup}>
            {showSearchInMenu && (
              <>
                <Menu.Item
                  className={styles.menuItem}
                  onClick={onSearchInMenu}
                >
                  <span className={styles.menuItemIcon}>
                    <SearchIcon />
                  </span>
                  Search values
                </Menu.Item>
                {(showKeepExclude || showClearAll || showRemove) && (
                  <div className={styles.separator} />
                )}
              </>
            )}
            {showKeepExclude && (
              <>
                <Menu.Item
                  className={styles.menuItem}
                  onClick={isExcluding ? onToggleExclude : undefined}
                  data-active={!isExcluding || undefined}
                >
                  <span className={styles.menuItemIcon}>
                    {!isExcluding && <CheckIcon />}
                  </span>
                  Keep matching values
                </Menu.Item>
                <Menu.Item
                  className={styles.menuItem}
                  onClick={isExcluding ? undefined : onToggleExclude}
                  data-active={isExcluding || undefined}
                >
                  <span className={styles.menuItemIcon}>
                    {isExcluding
                      ? <CheckIcon />
                      : <ExcludeIcon />}
                  </span>
                  Exclude matching values
                </Menu.Item>
                {(showClearAll || showRemove) && (
                  <div className={styles.separator} />
                )}
              </>
            )}
            {showClearAll && (
              <Menu.Item
                className={classnames(styles.menuItem, styles.menuItemAction)}
                onClick={onClearAll}
              >
                <span className={styles.menuItemIcon}>
                  <ResetIcon />
                </span>
                Clear all selections
              </Menu.Item>
            )}
            {showRemove && (
              <Menu.Item
                className={classnames(styles.menuItem, styles.menuItemAction)}
                onClick={onRemove}
                aria-label={`Remove ${filterLabel} filter`}
              >
                <span className={styles.menuItemIcon}>
                  <RemoveIcon />
                </span>
                Remove filter
              </Menu.Item>
            )}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

export const ItemOverflowMenu: React.MemoExoticComponent<
  typeof ItemOverflowMenuInner
> = memo(ItemOverflowMenuInner);
