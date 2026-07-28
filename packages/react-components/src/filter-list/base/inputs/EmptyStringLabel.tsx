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

import classnames from "classnames";
import React, { memo } from "react";

// Shares the muted/italic styling used by NoValueLabel so the two special
// option rows ("No value" and "(empty string)") read as visually consistent.
import styles from "./NoValueLabel.module.css";

interface EmptyStringLabelProps {
  className?: string;
}

/**
 * Canonical rendering for a literal empty-string (`""`) filter value, shown as
 * "(empty string)". Distinct from {@link NoValueLabel}, which renders null/undefined
 * ("No value").
 */
function EmptyStringLabelInner({
  className,
}: EmptyStringLabelProps): React.ReactElement {
  return (
    <span className={classnames(styles.noValue, className)}>
      (empty string)
    </span>
  );
}

export const EmptyStringLabel = memo(
  EmptyStringLabelInner
) as typeof EmptyStringLabelInner;
