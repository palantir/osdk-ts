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

import { Input } from "@base-ui/react/input";
import { Search } from "@blueprintjs/icons";
import classNames from "classnames";
import React from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  "aria-label"?: string;
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search",
  "aria-label": ariaLabel,
  className,
  onKeyDown,
}: SearchBarProps): React.ReactElement {
  return (
    <div className={classNames(styles.searchBar, className)}>
      <Search className={styles.searchIcon} />
      <Input
        type="text"
        placeholder={placeholder}
        aria-label={ariaLabel ?? placeholder}
        value={value}
        onChange={onChange}
        className={styles.searchInput}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
