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

import React, { useCallback, useRef } from "react";

import { usePersistedState } from "../../hooks/usePersistedState.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import { CacheInspectorTab } from "../CacheInspectorTab.js";
import { CacheTimeline } from "./CacheTimeline.js";

import styles from "./CacheSplitView.module.scss";

const MIN_FRACTION = 0.2;
const MAX_FRACTION = 0.8;

export interface CacheSplitViewProps {
  monitorStore: MonitorStore;
}

export const CacheSplitView: React.FC<CacheSplitViewProps> = ({
  monitorStore,
}) => {
  const [splitFraction, setSplitFraction] = usePersistedState<number>(
    "osdk-cache-split",
    0.5
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragAbortRef = useRef<AbortController | null>(null);
  const setSplitFractionRef = useRef(setSplitFraction);
  setSplitFractionRef.current = setSplitFraction;

  const attachDragListeners = useCallback(() => {
    dragAbortRef.current?.abort();
    const controller = new AbortController();
    dragAbortRef.current = controller;
    const { signal } = controller;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) {
        return;
      }
      const container = containerRef.current;
      if (!container) {
        return;
      }
      const rect = container.getBoundingClientRect();
      if (rect.height === 0) {
        return;
      }
      const fraction = (e.clientY - rect.top) / rect.height;
      const clamped = Math.max(MIN_FRACTION, Math.min(MAX_FRACTION, fraction));
      setSplitFractionRef.current(clamped);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      controller.abort();
      dragAbortRef.current = null;
    };

    document.addEventListener("mousemove", handleMouseMove, { signal });
    document.addEventListener("mouseup", handleMouseUp, { signal });
  }, []);

  const handleDividerMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isDragging.current = true;
      e.preventDefault();
      attachDragListeners();
    },
    [attachDragListeners]
  );

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={styles.topPane}
        style={{ flexBasis: `${splitFraction * 100}%` }}
      >
        <CacheInspectorTab monitorStore={monitorStore} />
      </div>
      <div className={styles.divider} onMouseDown={handleDividerMouseDown} />
      <div className={styles.bottomPane}>
        <CacheTimeline monitorStore={monitorStore} />
      </div>
    </div>
  );
};
