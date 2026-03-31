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
import styles from "./AddFilterPopover.module.css";

interface HiddenFilterItem {
  key: string;
  label: string;
}

interface AddFilterPopoverProps {
  hiddenDefinitions: Array<HiddenFilterItem>;
  onShowFilter: (key: string) => void;
  renderTrigger?: () => React.ReactNode;
}

function AddFilterPopoverInner({
  hiddenDefinitions,
  onShowFilter,
  renderTrigger,
}: AddFilterPopoverProps): React.ReactElement {
  const handleItemClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const key = event.currentTarget.dataset.key;
      if (key != null) {
        onShowFilter(key);
      }
    },
    [onShowFilter],
  );

  return (
    <Menu.Root>
      <Menu.Trigger
        className={renderTrigger == null ? styles.trigger : undefined}
      >
        {renderTrigger != null ? renderTrigger() : "+ Add filter"}
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className={styles.positioner} sideOffset={4}>
          <Menu.Popup className={styles.popup}>
            {hiddenDefinitions.map((item) => (
              <Menu.Item
                key={item.key}
                className={styles.menuItem}
                data-key={item.key}
                onClick={handleItemClick}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

export const AddFilterPopover: React.MemoExoticComponent<
  typeof AddFilterPopoverInner
> = memo(AddFilterPopoverInner);
