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
import React from "react";

import { useMediaContents } from "../../shared/hooks/useMediaContents.js";
import { BaseTiffViewer } from "./BaseTiffViewer.js";
import type { TiffViewerProps } from "./TiffViewerApi.js";

import styles from "./BaseTiffViewer.module.css";

const transformToUint8Array = async (
  response: Response,
): Promise<Uint8Array> => {
  const buffer = await response.arrayBuffer();
  return new Uint8Array(buffer);
};

export function TiffViewer({
  media,
  className,
  ...baseTiffViewerProps
}: TiffViewerProps): React.ReactElement {
  const {
    data: bytes,
    loading,
    error,
  } = useMediaContents(media, transformToUint8Array);

  return (
    <div className={className}>
      {loading && (
        <div className={styles.loadingContainer}>
          <Spin className={styles.spinnerIcon} />
          Loading…
        </div>
      )}
      {error != null && (
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          Failed to load TIFF: {error.message}
        </div>
      )}
      {bytes != null && <BaseTiffViewer src={bytes} {...baseTiffViewerProps} />}
    </div>
  );
}
