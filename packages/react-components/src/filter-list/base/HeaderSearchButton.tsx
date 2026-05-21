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

import { Button } from "@base-ui/react/button";
import classnames from "classnames";
import React, { memo } from "react";
import { SearchIcon } from "./FilterIcons.js";
import styles from "./FilterListItem.module.css";

interface HeaderSearchButtonProps {
  placement: "header-start" | "header-end";
  pressed: boolean;
  onToggle: () => void;
}

function HeaderSearchButtonInner({
  placement,
  pressed,
  onToggle,
}: HeaderSearchButtonProps): React.ReactElement {
  return (
    <Button
      className={classnames(styles.headerActionButton, {
        [styles.headerActionButtonStart]: placement === "header-start",
      })}
      onClick={onToggle}
      aria-label="Search values"
      aria-pressed={pressed}
    >
      <SearchIcon />
    </Button>
  );
}

export const HeaderSearchButton: React.MemoExoticComponent<
  typeof HeaderSearchButtonInner
> = memo(HeaderSearchButtonInner);
