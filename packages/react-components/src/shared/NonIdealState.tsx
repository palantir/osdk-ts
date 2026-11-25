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

import classNames from "classnames";
import React from "react";

import styles from "./NonIdealState.module.css";

interface NonIdealStateProps {
  /** Text, or text with inline content such as a button that resolves the state. */
  message: string | React.ReactElement;
  className?: string;
}

export function NonIdealState({
  message,
  className,
}: NonIdealStateProps): React.ReactElement {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.message}>{message}</div>
    </div>
  );
}
