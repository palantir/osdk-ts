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
import styles from "./BaseDocxViewer.module.css";
import type { BaseDocxViewerProps } from "./types.js";

export function BaseDocxViewer({
  src,
  className,
  onError,
}: BaseDocxViewerProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderError, setRenderError] = useState<string | undefined>(undefined);
  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (container == null) {
      return;
    }
    setRenderError(undefined);

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
        setRenderError("Failed to render document");
        onErrorRef.current?.();
      }
    });

    return () => {
      cancelled = true;
    };
  }, [src]);

  const rootClassName = classnames(styles.container, className);

  return (
    <div className={rootClassName}>
      {renderError != null && (
        <div className={styles.errorContainer}>
          <ErrorIcon className={styles.errorIcon} />
          {renderError}
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}
