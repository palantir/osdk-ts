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

import React from "react";
import styles from "./common.module.css";

export interface ErrorBannerProps {
  message: string | undefined;
  context?: string;
}

/** Inline error banner. Renders nothing when there is no message. */
export function ErrorBanner(props: ErrorBannerProps): React.JSX.Element | null {
  const { message, context } = props;
  if (message == null || message === "") {
    return null;
  }
  return (
    <div className={styles.errorBanner} role="alert">
      {context != null ? `${context}: ` : ""}
      {message}
    </div>
  );
}
