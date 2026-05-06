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

import classnames from "classnames";
import React from "react";
import styles from "./NoValueLabel.module.css";

interface NoValueLabelProps {
  className?: string;
}

/**
 * Canonical "No value" rendering for empty/null filter values.
 * Italic, muted span used in dropdowns, listogram buckets, NullValueWrapper,
 * and horizontal-trigger summaries.
 *
 * Style is configurable via the `--osdk-filter-no-value-color` and
 * `--osdk-filter-no-value-font-style` CSS variables.
 */
export function NoValueLabel(
  { className }: NoValueLabelProps,
): React.ReactElement {
  return (
    <span className={classnames(styles.noValue, className)}>
      No value
    </span>
  );
}
