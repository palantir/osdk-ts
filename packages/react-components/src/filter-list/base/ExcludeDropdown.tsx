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

import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core";
import React, { memo, useCallback } from "react";

import { CheckIcon, ChevronDownIcon, ExcludeIcon } from "./FilterIcons.js";

import styles from "./ExcludeDropdown.module.css";

interface ExcludeDropdownProps {
  isExcluding: boolean;
  onToggleExclude: () => void;
}

function ExcludeDropdownInner({
  isExcluding,
  onToggleExclude,
}: ExcludeDropdownProps): React.ReactElement {
  const label = isExcluding ? "Excluding" : "Keeping";

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
      <Popover
        placement="bottom-start"
        content={
          <Menu>
            <MenuItem
              icon={!isExcluding ? <CheckIcon /> : undefined}
              onClick={handleSelectKeeping}
              text="Keeping"
            />
            <MenuItem
              icon={isExcluding ? <CheckIcon /> : undefined}
              onClick={handleSelectExcluding}
              text="Excluding"
            />
          </Menu>
        }
      >
        <Button
          className={styles.trigger}
          aria-label={label}
          data-excluding={isExcluding || undefined}
          icon={isExcluding ? <ExcludeIcon /> : undefined}
          rightIcon={<ChevronDownIcon />}
          text={label}
          variant="minimal"
        >
          {label}
        </Button>
      </Popover>
    </div>
  );
}

export const ExcludeDropdown: React.MemoExoticComponent<
  typeof ExcludeDropdownInner
> = memo(ExcludeDropdownInner);
