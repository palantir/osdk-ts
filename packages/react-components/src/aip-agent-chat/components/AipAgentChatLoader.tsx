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

import classNames from "classnames";
import * as React from "react";
import styles from "../AipAgentChat.module.css";

export interface AipAgentChatLoaderProps {
  className?: string;
  label?: string;
}

/**
 * Three-dot bouncing animation rendered while the agent is responding.
 */
export function AipAgentChatLoader(
  { className, label = "Assistant is responding" }: AipAgentChatLoaderProps,
): React.ReactElement {
  return (
    <div
      aria-label={label}
      aria-live="polite"
      className={classNames(styles.loader, className)}
      role="status"
    >
      <span aria-hidden="true" className={styles.loaderDot} />
      <span aria-hidden="true" className={styles.loaderDot} />
      <span aria-hidden="true" className={styles.loaderDot} />
    </div>
  );
}
