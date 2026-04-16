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
import React, { memo, useCallback, useMemo, useState } from "react";
import { SearchBar } from "../search-bar/SearchBar.js";
import styles from "./SearchableMenu.module.css";

export interface SearchableMenuItem {
  key: string;
  label: string;
}

interface SearchableMenuProps {
  items: SearchableMenuItem[];
  onItemSelected: (key: string) => void;
  trigger: React.ReactNode;
  triggerClassName?: string;
  disabled?: boolean;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
}

function SearchableMenuInner({
  items,
  onItemSelected,
  trigger,
  triggerClassName,
  disabled,
  searchPlaceholder = "Search",
  emptyMessage = "No matching items",
  className,
}: SearchableMenuProps): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return items;
    return items.filter((item) => item.label.toLowerCase().includes(query));
  }, [items, searchQuery]);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    [],
  );

  const handleMenuOpenChange = useCallback((open: boolean) => {
    if (open) {
      setSearchQuery("");
    }
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      event.stopPropagation();
    },
    [],
  );

  return (
    <Menu.Root onOpenChange={handleMenuOpenChange}>
      <Menu.Trigger className={triggerClassName} disabled={disabled}>
        {trigger}
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          className={classnames(styles.positioner, className)}
          sideOffset={4}
        >
          <Menu.Popup className={styles.popup}>
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className={styles.searchContainer}
              onKeyDown={handleKeyDown}
            />
            {filteredItems.map((item) => (
              <SearchableMenuItemRow
                key={item.key}
                item={item}
                onItemSelected={onItemSelected}
              />
            ))}
            {filteredItems.length === 0 && (
              <div className={styles.emptyState}>{emptyMessage}</div>
            )}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

export const SearchableMenu: React.MemoExoticComponent<
  typeof SearchableMenuInner
> = memo(SearchableMenuInner);

function SearchableMenuItemRowInner({
  item,
  onItemSelected,
}: {
  item: SearchableMenuItem;
  onItemSelected: (key: string) => void;
}): React.ReactElement {
  const handleClick = useCallback(
    () => onItemSelected(item.key),
    [onItemSelected, item.key],
  );

  return (
    <Menu.Item className={styles.menuItem} onClick={handleClick}>
      {item.label}
    </Menu.Item>
  );
}

const SearchableMenuItemRow = memo(SearchableMenuItemRowInner);
