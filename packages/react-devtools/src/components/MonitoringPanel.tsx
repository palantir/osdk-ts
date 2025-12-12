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
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePersistedState } from "../hooks/usePersistedState.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { PanelPosition } from "../types/index.js";
import { ComputeTab } from "./ComputeTab.js";
import { DebuggingTab } from "./DebuggingTab.js";
import { MockingTab } from "./MockingTab.js";
import { MonitorErrorBoundary } from "./MonitorErrorBoundary.js";
import styles from "./MonitoringPanel.module.scss";
import { PerformanceTab } from "./PerformanceTab.js";

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
  monitorStore: MonitorStore;
}

export const MonitoringPanel: React.FC<MonitoringPanelProps> = ({
  monitorStore,
}) => {
  const metricsStore = monitorStore.getMetricsStore();
  const computeStore = monitorStore.getComputeStore();
  const [activeTab, setActiveTab] = useState<
    | "performance"
    | "compute"
    | "mocking"
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

  // Clamp position to viewport bounds on mount to handle stale localStorage
  useEffect(() => {
    if (position.dockMode === "floating") {
      const maxX = window.innerWidth - position.width;
      const maxY = window.innerHeight - position.height;
      if (
        position.x > maxX || position.y > maxY || position.x < 0
        || position.y < 0
      ) {
        setPosition((prev) => ({
          ...prev,
          x: Math.max(0, Math.min(prev.x, maxX)),
          y: Math.max(0, Math.min(prev.y, maxY)),
        }));
      }
    }
  }, []); // Only run on mount

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

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest(`.${styles.controls}`)) {
        return;
      }
      // Disable dragging when docked
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
    },
    [position],
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
    },
    [position],
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

  // Set up drag/resize event listeners
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const deltaX = e.clientX - dragStart.current.x;
        const deltaY = e.clientY - dragStart.current.y;
        setPosition((prev) => ({
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

        setPosition((prev) => {
          // Handle docked-bottom: only resize height from top
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

          // Handle docked-right: only resize width from left
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

          // Handle floating: existing resize logic
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
    };

    // Always add listeners, they'll check the refs internally
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [setPosition]);

  // Handle window resize for docked modes
  useEffect(() => {
    const handleWindowResize = () => {
      setPosition((prev) => {
        if (prev.dockMode === "docked-bottom") {
          return {
            ...prev,
            width: window.innerWidth,
            y: window.innerHeight - prev.height,
          };
        } else if (prev.dockMode === "docked-right") {
          return {
            ...prev,
            height: window.innerHeight,
            x: window.innerWidth - prev.width,
          };
        }
        return prev;
      });
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [setPosition]);

  if (position.collapsed) {
    return createPortal(
      <Tooltip
        content="View OSDK Devtools"
        placement="left"
        hoverOpenDelay={UI_CONSTANTS.TOOLTIP_HOVER_DELAY}
      >
        <div
          className={styles.minimized}
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
    Classes.DARK,
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
      style={{
        left: position.dockMode === "docked-bottom" ? 0 : position.x,
        top: position.dockMode === "docked-right" ? 0 : position.y,
        width: position.width,
        height: position.height,
        right: position.dockMode === "docked-right" ? 0 : undefined,
        bottom: position.dockMode === "docked-bottom" ? 0 : undefined,
      }}
    >
      {/* Conditionally render resize handles based on dock mode */}
      {position.dockMode === "floating" && (
        <>
          <div
            className={classNames(
              styles.resizeHandle,
              styles.horizontal,
              styles.top,
            )}
            onMouseDown={(e) => handleResizeMouseDown(e, "top")}
          />
          <div
            className={classNames(
              styles.resizeHandle,
              styles.horizontal,
              styles.bottom,
            )}
            onMouseDown={(e) => handleResizeMouseDown(e, "bottom")}
          />
          <div
            className={classNames(
              styles.resizeHandle,
              styles.vertical,
              styles.left,
            )}
            onMouseDown={(e) => handleResizeMouseDown(e, "left")}
          />
          <div
            className={classNames(
              styles.resizeHandle,
              styles.vertical,
              styles.right,
            )}
            onMouseDown={(e) => handleResizeMouseDown(e, "right")}
          />
          <div
            className={classNames(
              styles.resizeHandle,
              styles.corner,
              styles.topLeft,
            )}
            onMouseDown={(e) => handleResizeMouseDown(e, "topLeft")}
          />
          <div
            className={classNames(
              styles.resizeHandle,
              styles.corner,
              styles.topRight,
            )}
            onMouseDown={(e) => handleResizeMouseDown(e, "topRight")}
          />
          <div
            className={classNames(
              styles.resizeHandle,
              styles.corner,
              styles.bottomLeft,
            )}
            onMouseDown={(e) => handleResizeMouseDown(e, "bottomLeft")}
          />
          <div
            className={classNames(
              styles.resizeHandle,
              styles.corner,
              styles.bottomRight,
            )}
            onMouseDown={(e) => handleResizeMouseDown(e, "bottomRight")}
          />
        </>
      )}
      {position.dockMode === "docked-bottom" && (
        <div
          className={classNames(
            styles.resizeHandle,
            styles.horizontal,
            styles.top,
          )}
          onMouseDown={(e) => handleResizeMouseDown(e, "top")}
        />
      )}
      {position.dockMode === "docked-right" && (
        <div
          className={classNames(
            styles.resizeHandle,
            styles.vertical,
            styles.left,
          )}
          onMouseDown={(e) => handleResizeMouseDown(e, "left")}
        />
      )}

      <div className={styles.header} onMouseDown={handleMouseDown}>
        <h3 className={styles.title}>
          OSDK Devtools
          <span className={styles.badge}>Beta</span>
        </h3>
        <div className={styles.controls}>
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
          />
          <Button
            variant="minimal"
            size="small"
            icon="reset"
            onClick={() => metricsStore.reset()}
            title="Reset metrics"
          />
          <Button
            variant="minimal"
            size="small"
            icon="minimize"
            onClick={() =>
              setPosition((prev) => ({ ...prev, collapsed: true }))}
            title="Minimize"
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.tabs}>
          <button
            type="button"
            className={classNames(
              styles.tabButton,
              activeTab === "performance" && styles.tabButtonActive,
            )}
            onClick={() => setActiveTab("performance")}
          >
            Performance
          </button>
          <button
            type="button"
            className={classNames(
              styles.tabButton,
              activeTab === "compute" && styles.tabButtonActive,
            )}
            onClick={() => setActiveTab("compute")}
          >
            Compute
          </button>
          <button
            type="button"
            className={classNames(
              styles.tabButton,
              activeTab === "mocking" && styles.tabButtonActive,
            )}
            onClick={() => setActiveTab("mocking")}
          >
            Mocking
          </button>
          <button
            type="button"
            className={classNames(
              styles.tabButton,
              activeTab === "debugging" && styles.tabButtonActive,
            )}
            onClick={() => setActiveTab("debugging")}
          >
            Debugging
          </button>
        </div>

        {activeTab === "performance"
          ? (
            <PerformanceTab
              metricsStore={metricsStore}
              monitorStore={monitorStore}
            />
          )
          : activeTab === "compute"
          ? <ComputeTab computeStore={computeStore} />
          : activeTab === "mocking"
          ? <MockingTab monitorStore={monitorStore} />
          : activeTab === "debugging"
          ? <DebuggingTab monitorStore={monitorStore} />
          : null}
      </div>
    </div>,
    document.body,
  );
};

/**
 * MonitoringPanel wrapped with error boundary for safe usage.
 * Prevents monitor crashes from breaking the application.
 */
export const SafeMonitoringPanel: React.FC<MonitoringPanelProps> = (props) => (
  <MonitorErrorBoundary>
    <MonitoringPanel {...props} />
  </MonitorErrorBoundary>
);
