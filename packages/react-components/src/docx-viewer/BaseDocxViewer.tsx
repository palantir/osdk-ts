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

import { Error as ErrorIcon } from "@blueprintjs/icons";
import classnames from "classnames";
import { renderAsync } from "docx-preview";
import React, { useEffect, useRef, useState } from "react";
import { useEventCallback } from "../shared/hooks/useEventCallback.js";
import styles from "./BaseDocxViewer.module.css";
import type { BaseDocxViewerProps } from "./DocxViewerApi.js";

export function BaseDocxViewer({
  src,
  className,
  onError,
}: BaseDocxViewerProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const handleError = useEventCallback(() => {
    onError?.();
  });

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (container == null) {
      return;
    }
    container.innerHTML = "";
    setError(undefined);

    renderAsync(src, container, undefined, {
      className: "docx-viewer-content",
      inWrapper: true,
      ignoreWidth: false,
      ignoreHeight: false,
      renderHeaders: true,
      renderFooters: true,
      renderFootnotes: true,
      renderEndnotes: true,
    }).catch(() => {
      if (!cancelled) {
        setError("Failed to render document");
        handleError();
      }
    });

    return () => {
      cancelled = true;
    };
  }, [src, handleError]);

  const rootClassName = classnames(styles.container, className);

  return (
    <div className={rootClassName}>
      {error != null && (
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          {error}
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}
