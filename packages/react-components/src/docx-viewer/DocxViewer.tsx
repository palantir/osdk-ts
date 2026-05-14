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
import { BaseDocxViewer } from "./BaseDocxViewer.js";
import styles from "./BaseDocxViewer.module.css";
import type { DocxViewerMediaProps } from "./DocxViewerApi.js";

const transformToArrayBuffer = async (
  response: Response,
): Promise<ArrayBuffer> => {
  return response.arrayBuffer();
};

export function DocxViewer({
  media,
  className,
  ...docxViewerProps
}: DocxViewerMediaProps): React.ReactElement {
  const { data: src, loading, error } = useMediaContents(
    media,
    transformToArrayBuffer,
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
          Failed to load document: {error.message}
        </div>
      )}
      {src != null && <BaseDocxViewer src={src} {...docxViewerProps} />}
    </div>
  );
}
