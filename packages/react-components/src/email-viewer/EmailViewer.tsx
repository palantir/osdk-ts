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

import { Error as ErrorIcon, Spin } from "@blueprintjs/icons";
import classnames from "classnames";
import React from "react";
import { useMediaContents } from "../shared/hooks/useMediaContents.js";
import { BaseEmailViewer } from "./BaseEmailViewer.js";
import styles from "./BaseEmailViewer.module.css";
import type { EmailViewerMediaProps, ParsedEmail } from "./EmailViewerApi.js";
import { parseEmailFromResponse } from "./parseEmail.js";

export function EmailViewer({
  media,
  className,
  ...emailViewerProps
}: EmailViewerMediaProps): React.ReactElement {
  const { data: email, loading, error } = useMediaContents<ParsedEmail>(
    media,
    parseEmailFromResponse,
  );

  const rootClassName = classnames(styles.container, className);

  return (
    <div className={rootClassName}>
      {loading && (
        <div className={styles.loadingContainer}>
          <Spin className={styles.spinnerIcon} />
          Loading…
        </div>
      )}
      {error != null && (
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          Failed to load email: {error.message}
        </div>
      )}
      {email != null && <BaseEmailViewer email={email} {...emailViewerProps} />}
    </div>
  );
}
