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

import { Button, Classes, Tooltip } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  DegradationNotice,
  useFiberCapabilities,
} from "../fiber/DegradationNotice.js";
import { validateFiberAccess } from "../fiber/validation.js";
import { usePersistedState } from "../hooks/usePersistedState.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { PanelPosition } from "../types/index.js";
import { ComputeTab } from "./ComputeTab.js";
import { DebuggingTab } from "./DebuggingTab.js";
import { InterceptTab } from "./InterceptTab.js";
import { MonitorErrorBoundary } from "./MonitorErrorBoundary.js";
import styles from "./MonitoringPanel.module.scss";
import { PerformanceTab } from "./PerformanceTab.js";

const darkModeMql = typeof window !== "undefined"
  ? window.matchMedia("(prefers-color-scheme: dark)")
  : undefined;

function subscribeDarkMode(callback: () => void): () => void {
  if (darkModeMql) {
    darkModeMql.addEventListener("change", callback);
    return () => darkModeMql.removeEventListener("change", callback);
  }
  return () => {};
}

function getDarkModeSnapshot(): boolean {
  return darkModeMql ? darkModeMql.matches : true;
}

function subscribeWindowSize(callback: () => void): () => void {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

let windowSizeSnapshot = typeof window !== "undefined"
  ? { width: window.innerWidth, height: window.innerHeight }
  : { width: 0, height: 0 };

function getWindowSizeSnapshot(): { width: number; height: number } {
  const current = { width: window.innerWidth, height: window.innerHeight };
  if (
    current.width !== windowSizeSnapshot.width
    || current.height !== windowSizeSnapshot.height
  ) {
    windowSizeSnapshot = current;
  }
  return windowSizeSnapshot;
}

const UI_CONSTANTS = {
  DEFAULT_PANEL_WIDTH: 400,
  DEFAULT_PANEL_HEIGHT: 600,
  DEFAULT_PANEL_RIGHT_OFFSET: 420,
  DEFAULT_PANEL_TOP_OFFSET: 20,
  MIN_PANEL_WIDTH: 320,
  MIN_PANEL_HEIGHT: 200,
  TOOLTIP_HOVER_DELAY: 500,
  DOCKED_BOTTOM_HEIGHT: 400,
  DOCKED_RIGHT_WIDTH: 500,
  MIN_DOCKED_BOTTOM_HEIGHT: 200,
  MIN_DOCKED_RIGHT_WIDTH: 320,
  MAX_DOCKED_BOTTOM_HEIGHT: 800,
  MAX_DOCKED_RIGHT_WIDTH: 800,
};

export interface MonitoringPanelProps {
  /** The MonitorStore instance that provides all metrics, compute, and component tracking data. */
  monitorStore: MonitorStore;
}

export const MonitoringPanel: React.FC<MonitoringPanelProps> = ({
  monitorStore,
}) => {
  const metricsStore = monitorStore.getMetricsStore();
  const computeStore = monitorStore.getComputeStore();
  const fiberCapabilities = useFiberCapabilities();
  const [activeTab, setActiveTab] = useState<
    | "performance"
    | "compute"
    | "intercept"
    | "debugging"
  >("performance");
  const [position, setPosition] = usePersistedState<PanelPosition>(
    "osdk-monitor-position",
    {
      x: window.innerWidth - UI_CONSTANTS.DEFAULT_PANEL_RIGHT_OFFSET,
      y: UI_CONSTANTS.DEFAULT_PANEL_TOP_OFFSET,
      width: UI_CONSTANTS.DEFAULT_PANEL_WIDTH,
      height: UI_CONSTANTS.DEFAULT_PANEL_HEIGHT,
      collapsed: false,
      dockMode: "floating",
    },
  );

  const [themePreference, setThemePreference] = usePersistedState<
    "light" | "dark" | "auto"
  >("osdk-devtools-theme", "dark");

  const systemPrefersDark = React.useSyncExternalStore(
    subscribeDarkMode,
    getDarkModeSnapshot,
  );

  const resolvedTheme = useMemo(
    () =>
      themePreference === "auto"
        ? (systemPrefersDark ? "dark" : "light")
        : themePreference,
    [themePreference, systemPrefersDark],
  );

  const panelRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isResizing = useRef<string | null>(null);
  const dragStart = useRef({ x: 0, y: 0, elemX: 0, elemY: 0 });
  const resizeStart = useRef({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    elemX: 0,
    elemY: 0,
  });

  const setPositionRef = useRef(setPosition);
  setPositionRef.current = setPosition;

  const dragAbortRef = useRef<AbortController | null>(null);

  const attachDragListeners = useCallback(() => {
    dragAbortRef.current?.abort();
    const controller = new AbortController();
    dragAbortRef.current = controller;
    const { signal } = controller;

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const deltaX = e.clientX - dragStart.current.x;
        const deltaY = e.clientY - dragStart.current.y;
        setPositionRef.current((prev) => ({
          ...prev,
          x: Math.max(
            0,
            Math.min(
              window.innerWidth - prev.width,
              dragStart.current.elemX + deltaX,
            ),
          ),
          y: Math.max(
            0,
            Math.min(
              window.innerHeight - prev.height,
              dragStart.current.elemY + deltaY,
            ),
          ),
        }));
      } else if (isResizing.current) {
        const deltaX = e.clientX - resizeStart.current.x;
        const deltaY = e.clientY - resizeStart.current.y;
        const handle = isResizing.current;

        setPositionRef.current((prev) => {
          if (prev.dockMode === "docked-bottom") {
            const newHeight = Math.max(
              UI_CONSTANTS.MIN_DOCKED_BOTTOM_HEIGHT,
              Math.min(
                UI_CONSTANTS.MAX_DOCKED_BOTTOM_HEIGHT,
                resizeStart.current.height - deltaY,
              ),
            );
            return {
              ...prev,
              height: newHeight,
              y: window.innerHeight - newHeight,
            };
          }

          if (prev.dockMode === "docked-right") {
            const newWidth = Math.max(
              UI_CONSTANTS.MIN_DOCKED_RIGHT_WIDTH,
              Math.min(
                UI_CONSTANTS.MAX_DOCKED_RIGHT_WIDTH,
                resizeStart.current.width - deltaX,
              ),
            );
            return {
              ...prev,
              width: newWidth,
              x: window.innerWidth - newWidth,
            };
          }

          let newX = prev.x;
          let newY = prev.y;
          let newWidth = prev.width;
          let newHeight = prev.height;

          if (handle.includes("right")) {
            newWidth = Math.max(
              UI_CONSTANTS.MIN_PANEL_WIDTH,
              resizeStart.current.width + deltaX,
            );
          }
          if (handle.includes("left")) {
            newWidth = Math.max(
              UI_CONSTANTS.MIN_PANEL_WIDTH,
              resizeStart.current.width - deltaX,
            );
            newX = resizeStart.current.elemX + deltaX;
            if (newWidth === UI_CONSTANTS.MIN_PANEL_WIDTH) {
              newX = resizeStart.current.elemX + resizeStart.current.width
                - UI_CONSTANTS.MIN_PANEL_WIDTH;
            }
          }
          if (handle.includes("bottom")) {
            newHeight = Math.max(
              UI_CONSTANTS.MIN_PANEL_HEIGHT,
              resizeStart.current.height + deltaY,
            );
          }
          if (handle.includes("top")) {
            newHeight = Math.max(
              UI_CONSTANTS.MIN_PANEL_HEIGHT,
              resizeStart.current.height - deltaY,
            );
            newY = resizeStart.current.elemY + deltaY;
            if (newHeight === UI_CONSTANTS.MIN_PANEL_HEIGHT) {
              newY = resizeStart.current.elemY + resizeStart.current.height
                - UI_CONSTANTS.MIN_PANEL_HEIGHT;
            }
          }

          return {
            ...prev,
            x: newX,
            y: newY,
            width: newWidth,
            height: newHeight,
          };
        });
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      isResizing.current = null;
      controller.abort();
      dragAbortRef.current = null;
    };

    document.addEventListener("mousemove", handleMouseMove, { signal });
    document.addEventListener("mouseup", handleMouseUp, { signal });
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest(`.${styles.controls}`)) {
        return;
      }
      if (position.dockMode !== "floating") {
        return;
      }
      isDragging.current = true;
      dragStart.current = {
        x: e.clientX,
        y: e.clientY,
        elemX: position.x,
        elemY: position.y,
      };
      e.preventDefault();
      attachDragListeners();
    },
    [position, attachDragListeners],
  );

  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent, handle: string) => {
      isResizing.current = handle;
      resizeStart.current = {
        x: e.clientX,
        y: e.clientY,
        width: position.width,
        height: position.height,
        elemX: position.x,
        elemY: position.y,
      };
      e.preventDefault();
      e.stopPropagation();
      attachDragListeners();
    },
    [position, attachDragListeners],
  );

  const handleDockToggle = useCallback(() => {
    setPosition((prev) => {
      const nextMode = prev.dockMode === "floating"
        ? "docked-bottom"
        : prev.dockMode === "docked-bottom"
        ? "docked-right"
        : "floating";

      if (nextMode === "docked-bottom") {
        return {
          x: 0,
          y: window.innerHeight - UI_CONSTANTS.DOCKED_BOTTOM_HEIGHT,
          width: window.innerWidth,
          height: UI_CONSTANTS.DOCKED_BOTTOM_HEIGHT,
          collapsed: false,
          dockMode: nextMode,
        };
      } else if (nextMode === "docked-right") {
        return {
          x: window.innerWidth - UI_CONSTANTS.DOCKED_RIGHT_WIDTH,
          y: 0,
          width: UI_CONSTANTS.DOCKED_RIGHT_WIDTH,
          height: window.innerHeight,
          collapsed: false,
          dockMode: nextMode,
        };
      } else {
        return {
          x: window.innerWidth - UI_CONSTANTS.DEFAULT_PANEL_RIGHT_OFFSET,
          y: UI_CONSTANTS.DEFAULT_PANEL_TOP_OFFSET,
          width: UI_CONSTANTS.DEFAULT_PANEL_WIDTH,
          height: UI_CONSTANTS.DEFAULT_PANEL_HEIGHT,
          collapsed: false,
          dockMode: nextMode,
        };
      }
    });
  }, [setPosition]);

  const windowSize = React.useSyncExternalStore(
    subscribeWindowSize,
    getWindowSizeSnapshot,
  );

  const effectivePosition = useMemo(() => {
    if (position.dockMode === "floating") {
      const maxX = windowSize.width - position.width;
      const maxY = windowSize.height - position.height;
      return {
        ...position,
        x: Math.max(0, Math.min(position.x, maxX)),
        y: Math.max(0, Math.min(position.y, maxY)),
      };
    }
    if (position.dockMode === "docked-bottom") {
      return {
        ...position,
        width: windowSize.width,
        y: windowSize.height - position.height,
      };
    }
    if (position.dockMode === "docked-right") {
      return {
        ...position,
        height: windowSize.height,
        x: windowSize.width - position.width,
      };
    }
    return position;
  }, [position, windowSize]);

  if (position.collapsed) {
    return createPortal(
      <Tooltip
        content="View OSDK Devtools"
        placement="left"
        hoverOpenDelay={UI_CONSTANTS.TOOLTIP_HOVER_DELAY}
      >
        <div
          className={styles.minimized}
          data-dt-theme={resolvedTheme}
          onClick={() => setPosition((prev) => ({ ...prev, collapsed: false }))}
        >
          <span className={styles.minimizedIcon}>&lt;/&gt;</span>
        </div>
      </Tooltip>,
      document.body,
    );
  }

  const panelClassName = classNames(
    styles.panel,
    resolvedTheme === "dark" ? Classes.DARK : undefined,
    {
      [styles.floating]: position.dockMode === "floating",
      [styles.dockedBottom]: position.dockMode === "docked-bottom",
      [styles.dockedRight]: position.dockMode === "docked-right",
    },
  );
  return createPortal(
    <div
      ref={panelRef}
      className={panelClassName}
      data-dt-theme={resolvedTheme}
      style={{
        left: effectivePosition.dockMode === "docked-bottom"
          ? 0
          : effectivePosition.x,
        top: effectivePosition.dockMode === "docked-right"
          ? 0
          : effectivePosition.y,
        width: effectivePosition.width,
        height: effectivePosition.height,
        right: effectivePosition.dockMode === "docked-right" ? 0 : undefined,
        bottom: effectivePosition.dockMode === "docked-bottom" ? 0 : undefined,
      }}
    >
      {(position.dockMode === "floating"
        ? [
          { cls: [styles.horizontal, styles.top], handle: "top" },
          { cls: [styles.horizontal, styles.bottom], handle: "bottom" },
          { cls: [styles.vertical, styles.left], handle: "left" },
          { cls: [styles.vertical, styles.right], handle: "right" },
          { cls: [styles.corner, styles.topLeft], handle: "topLeft" },
          { cls: [styles.corner, styles.topRight], handle: "topRight" },
          { cls: [styles.corner, styles.bottomLeft], handle: "bottomLeft" },
          { cls: [styles.corner, styles.bottomRight], handle: "bottomRight" },
        ]
        : position.dockMode === "docked-bottom"
        ? [{ cls: [styles.horizontal, styles.top], handle: "top" }]
        : position.dockMode === "docked-right"
        ? [{ cls: [styles.vertical, styles.left], handle: "left" }]
        : []).map(({ cls, handle }) => (
          <div
            key={handle}
            className={classNames(styles.resizeHandle, ...cls)}
            onMouseDown={(e) => handleResizeMouseDown(e, handle)}
          />
        ))}

      <div className={styles.header} onMouseDown={handleMouseDown}>
        <h3 className={styles.title}>
          OSDK Devtools
          <span className={styles.badge}>Beta</span>
        </h3>
        <div className={styles.controls}>
          <Button
            variant="minimal"
            size="small"
            icon={themePreference === "dark"
              ? "moon"
              : themePreference === "light"
              ? "flash"
              : "automatic-updates"}
            onClick={() =>
              setThemePreference(
                themePreference === "dark"
                  ? "light"
                  : themePreference === "light"
                  ? "auto"
                  : "dark",
              )}
            title={`Theme: ${themePreference} (click to cycle)`}
            aria-label={`Theme: ${themePreference}. Click to cycle.`}
          />
          <Button
            variant="minimal"
            size="small"
            icon={position.dockMode === "floating"
              ? "widget"
              : position.dockMode === "docked-bottom"
              ? "layout-sorted-clusters"
              : "layout-hierarchy"}
            onClick={handleDockToggle}
            title={`Dock mode: ${position.dockMode} (click to cycle)`}
            aria-label={`Dock mode: ${position.dockMode}. Click to cycle.`}
          />
          <Button
            variant="minimal"
            size="small"
            icon="reset"
            onClick={() => metricsStore.reset()}
            title="Reset metrics"
            aria-label="Reset metrics"
          />
          <Button
            variant="minimal"
            size="small"
            icon="minimize"
            onClick={() =>
              setPosition((prev) => ({ ...prev, collapsed: true }))}
            title="Minimize"
            aria-label="Minimize devtools panel"
          />
        </div>
      </div>

      <div className={styles.tabs} role="tablist" aria-label="Devtools tabs">
        {(
          ["performance", "compute", "intercept", "debugging"] as const
        ).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={classNames(
              styles.tabButton,
              activeTab === tab && styles.tabButtonActive,
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {(!fiberCapabilities.hookInstalled
          || !fiberCapabilities.fiberAccessWorking) && (
          <DegradationNotice onRetry={() => validateFiberAccess()} />
        )}

        <div
          className={activeTab === "performance"
            ? styles.tabContentVisible
            : styles.tabContentHidden}
        >
          <PerformanceTab
            metricsStore={metricsStore}
            monitorStore={monitorStore}
          />
        </div>
        <div
          className={activeTab === "compute"
            ? styles.tabContentVisible
            : styles.tabContentHidden}
        >
          <ComputeTab computeStore={computeStore} />
        </div>
        <div
          className={activeTab === "intercept"
            ? styles.tabContentVisible
            : styles.tabContentHidden}
        >
          <InterceptTab monitorStore={monitorStore} theme={resolvedTheme} />
        </div>
        <div
          className={activeTab === "debugging"
            ? styles.tabContentVisible
            : styles.tabContentHidden}
        >
          <DebuggingTab monitorStore={monitorStore} />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export const SafeMonitoringPanel: React.FC<MonitoringPanelProps> = (props) => (
  <MonitorErrorBoundary>
    <MonitoringPanel {...props} />
  </MonitorErrorBoundary>
);
