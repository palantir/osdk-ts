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
import type { Media } from "@osdk/api";
import React from "react";
import { useMediaContents } from "../../shared/hooks/useMediaContents.js";
import { TiffRenderer } from "./TiffRenderer.js";
import styles from "./TiffRenderer.module.css";
import type { TiffRendererProps } from "./types.js";

export interface TiffViewerMediaProps
  extends Omit<TiffRendererProps, "content">
{
  /** The Media object to fetch TIFF contents from */
  media: Media;
  /** Additional CSS class name for the root element */
  className?: string;
}

const transformToUint8Array = async (
  response: Response,
): Promise<Uint8Array> => {
  const buffer = await response.arrayBuffer();
  return new Uint8Array(buffer);
};

export function TiffViewerMedia({
  media,
  className,
  ...tiffRendererProps
}: TiffViewerMediaProps): React.ReactElement {
  const { data: content, loading, error } = useMediaContents(
    media,
    transformToUint8Array,
  );

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
      {content != null && (
        <TiffRenderer content={content} {...tiffRendererProps} />
      )}
    </div>
  );
}
