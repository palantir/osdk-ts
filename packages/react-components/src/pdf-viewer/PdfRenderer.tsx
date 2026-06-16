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

import { Error as ErrorIcon, Spin } from "@blueprintjs/icons";
import type { Media } from "@osdk/api";
import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { BasePdfViewer } from "./PdfViewer.js";
import styles from "./PdfViewer.module.css";
import type { PdfViewerProps } from "./types.js";

async function fetchMediaContents(media: Media): Promise<ArrayBuffer> {
  const result = await media.fetchContents();
  return result.arrayBuffer();
}

export interface PdfViewerMediaProps extends Omit<PdfViewerProps, "src"> {
  /** The Media object to fetch PDF contents from */
  media: Media;
}

export function PdfViewer({
  media,
  className,
  ...pdfViewerProps
}: PdfViewerMediaProps): React.ReactElement {
  const [src, setSrc] = useState<ArrayBuffer | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  // This is required until we either support React 19+ or a data fetching hook
  useEffect(function fetchMediaSource() {
    let cancelled = false;
    setLoading(true);
    setError(undefined);
    setSrc(undefined);

    fetchMediaContents(media)
      .then((buffer) => {
        if (!cancelled) {
          setSrc(buffer);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [media]);

  const rootClassName = classnames(styles.pdfViewer, className);

  if (loading) {
    return (
      <div className={rootClassName}>
        <div className={styles.loadingContainer}>
          <Spin className={styles.spinnerIcon} />
          Loading…
        </div>
      </div>
    );
  }

  if (error != null) {
    return (
      <div className={rootClassName}>
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          Failed to load PDF: {error.message}
        </div>
      </div>
    );
  }

  if (src == null) {
    return (
      <div className={rootClassName}>
        <div className={styles.loadingContainer}>No document</div>
      </div>
    );
  }

  return (
    <BasePdfViewer
      src={src}
      className={className}
      {...pdfViewerProps}
    />
  );
}
