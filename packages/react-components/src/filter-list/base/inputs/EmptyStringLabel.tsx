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
import React, { memo } from "react";
import styles from "./EmptyStringLabel.module.css";

interface EmptyStringLabelProps {
  className?: string;
}

/**
 * Canonical "(empty)" rendering for literal empty-string filter values.
 * Italic, muted span used to distinguish a real `""` value from a SQL null
 * (which renders via `<NoValueLabel />`).
 *
 * Style is configurable via the `--osdk-filter-empty-string-color` and
 * `--osdk-filter-empty-string-font-style` CSS variables.
 */
function EmptyStringLabelInner(
  { className }: EmptyStringLabelProps,
): React.ReactElement {
  return (
    <span className={classnames(styles.emptyString, className)}>
      (empty)
    </span>
  );
}

export const EmptyStringLabel = memo(
  EmptyStringLabelInner,
) as typeof EmptyStringLabelInner;
