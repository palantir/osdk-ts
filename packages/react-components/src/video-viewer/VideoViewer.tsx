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
import React, { useMemo } from "react";
import { useMediaContents } from "../shared/hooks/useMediaContents.js";
import { BaseVideoViewer } from "./BaseVideoViewer.js";
import styles from "./BaseVideoViewer.module.css";
import type { VideoViewerMediaProps } from "./VideoViewerApi.js";

const transformToObjectUrl = async (response: Response): Promise<string> => {
  const blob = await response.blob();
  return URL.createObjectURL(blob);
};

const cleanupObjectUrl = (url: string): void => {
  URL.revokeObjectURL(url);
};

export function VideoViewer({
  media,
  className,
  ...videoViewerProps
}: VideoViewerMediaProps): React.ReactElement {
  const { data: src, loading, error } = useMediaContents(
    media,
    transformToObjectUrl,
    cleanupObjectUrl,
  );

  const mimeType = useMemo(
    () => videoViewerProps.mimeType ?? media.getMediaReference().mimeType,
    [videoViewerProps.mimeType, media],
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
          Failed to load video: {error.message}
        </div>
      )}
      {src != null && (
        <BaseVideoViewer src={src} mimeType={mimeType} {...videoViewerProps} />
      )}
    </div>
  );
}
