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
import * as React from "react";
import styles from "./TypingIndicator.module.css";

export interface TypingIndicatorProps {
  /** Accessible label announced by screen readers. Defaults to "Loading". */
  label?: string;
  /**
   * Additional CSS class for the root element. Use this to override theming
   * tokens (`--osdk-typing-indicator-color`, `--osdk-typing-indicator-size`,
   * `--osdk-typing-indicator-gap`, `--osdk-typing-indicator-bounce`,
   * `--osdk-typing-indicator-duration`).
   */
  className?: string;
}

const DEFAULT_LABEL = "Loading";

export const TypingIndicator: React.NamedExoticComponent<
  TypingIndicatorProps
> = React.memo(function TypingIndicator({
  label = DEFAULT_LABEL,
  className,
}: TypingIndicatorProps): React.ReactElement {
  const rootClassName = classnames(styles.indicator, className);
  return (
    <span className={rootClassName} role="status" aria-label={label}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.dot} aria-hidden="true" />
    </span>
  );
});
