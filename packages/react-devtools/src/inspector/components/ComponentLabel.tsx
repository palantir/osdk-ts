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

import React, { useCallback, useRef, useState } from "react";
import type { SourceLocation } from "../../fiber/types.js";
import type { ComponentLabelProps, LabelPosition } from "../types.js";
import {
  computeLabelPosition,
  OFFSCREEN_POSITION,
} from "../utils/labelPositioning.js";
import styles from "./ComponentLabel.module.scss";

const ARROW_HEIGHT = 8;
const COPY_FEEDBACK_DURATION_MS = 1500;

interface SizeSnapshot {
  width: number;
  height: number;
}

const EMPTY_SIZE: SizeSnapshot = { width: 0, height: 0 };

function useElementSize(
  ref: React.RefObject<HTMLDivElement | null>,
): SizeSnapshot {
  const sizeRef = useRef<SizeSnapshot>(EMPTY_SIZE);

  const subscribe = React.useCallback((onStoreChange: () => void) => {
    const el = ref.current;
    if (!el) {
      return () => {};
    }

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const next = { width: rect.width, height: rect.height };
      if (
        next.width !== sizeRef.current.width
        || next.height !== sizeRef.current.height
      ) {
        sizeRef.current = next;
        onStoreChange();
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  const getSnapshot = React.useCallback(() => sizeRef.current, []);

  return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function ComponentLabel({
  component,
  bounds,
  mouseX,
  mouseY,
  status,
  onOpenSource,
  visible,
}: ComponentLabelProps): React.ReactElement | null {
  const containerRef = useRef<HTMLDivElement>(null);
  const measuredSize = useElementSize(containerRef);
  const [showCopied, setShowCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const position: LabelPosition = React.useMemo(() => {
    if (!bounds || measuredSize.width === 0 || measuredSize.height === 0) {
      return OFFSCREEN_POSITION;
    }

    return computeLabelPosition(
      bounds,
      measuredSize.width,
      measuredSize.height,
      mouseX,
    );
  }, [bounds, measuredSize.width, measuredSize.height, mouseX]);

  const handleSourceClick = useCallback(() => {
    if (component?.sourceLocation && onOpenSource) {
      onOpenSource(component.sourceLocation);
    }
  }, [component?.sourceLocation, onOpenSource]);

  const handleCopySourceLocation = useCallback(() => {
    if (!component?.sourceLocation) {
      return;
    }

    const loc = component.sourceLocation;
    const fullPath = loc.columnNumber
      ? `${loc.fileName}:${loc.lineNumber}:${loc.columnNumber}`
      : `${loc.fileName}:${loc.lineNumber}`;

    navigator.clipboard.writeText(fullPath).then(() => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }

      setShowCopied(true);
      copyTimeoutRef.current = setTimeout(() => {
        setShowCopied(false);
        copyTimeoutRef.current = null;
      }, COPY_FEEDBACK_DURATION_MS);
    }).catch(() => {
    });
  }, [component?.sourceLocation]);

  if (!component || !visible) {
    return null;
  }

  const arrowStyle: React.CSSProperties = {
    left: `${position.arrowLeft - 8}px`,
    ...(position.arrowPosition === "bottom"
      ? {
        top: `-${ARROW_HEIGHT}px`,
        borderBottom: "8px solid rgba(30, 30, 30, 0.95)",
      }
      : {
        bottom: `-${ARROW_HEIGHT}px`,
        borderTop: "8px solid rgba(30, 30, 30, 0.95)",
      }),
  };

  const formatSourceLocation = (loc: SourceLocation): string => {
    const fileName = loc.fileName.split("/").pop() ?? loc.fileName;
    return loc.columnNumber
      ? `${fileName}:${loc.lineNumber}:${loc.columnNumber}`
      : `${fileName}:${loc.lineNumber}`;
  };

  return (
    <div
      ref={containerRef}
      data-osdk-devtools-ignore={true}
      className={styles.label}
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
        opacity: visible && position.left > -9000 ? 1 : 0,
      }}
    >
      <div className={styles.arrow} style={arrowStyle} />
      <div className={styles.componentName}>
        {"<"}
        {component.name}
        {" />"}
        {component.hookCount > 0 && (
          <span className={styles.hookBadge}>
            {component.hookCount} hook{component.hookCount !== 1 ? "s" : ""}
          </span>
        )}
      </div>
      {component.sourceLocation && (
        <div className={styles.sourceRow}>
          <div
            className={styles.sourceLocation}
            onClick={handleSourceClick}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
            {formatSourceLocation(component.sourceLocation)}
          </div>
          <button
            type="button"
            className={styles.copyButton}
            onClick={handleCopySourceLocation}
            title="Copy source location"
          >
            {showCopied
              ? (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )
              : (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
          </button>
          {showCopied && <span className={styles.copiedText}>Copied!</span>}
        </div>
      )}
    </div>
  );
}
