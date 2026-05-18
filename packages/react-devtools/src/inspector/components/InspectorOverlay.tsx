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

import React, { useCallback, useMemo, useRef } from "react";
import type { SourceLocation } from "../../fiber/types.js";
import type { InspectorOverlayProps, OverlayBounds } from "../types.js";
import { ComponentLabel } from "./ComponentLabel.js";
import { SelectionHighlight } from "./SelectionHighlight.js";

const FLASH_DURATION_MS = 500;

interface GrabbedFlashProps {
  bounds: OverlayBounds | null;
  trigger: boolean;
}

function GrabbedFlash(
  { bounds, trigger }: GrabbedFlashProps,
): React.ReactElement | null {
  const previousTriggerRef = useRef(trigger);
  const flashStateRef = useRef<{
    isVisible: boolean;
    opacity: number;
    fadeTimer: ReturnType<typeof setTimeout> | null;
    hideTimer: ReturnType<typeof setTimeout> | null;
  }>({ isVisible: false, opacity: 0, fadeTimer: null, hideTimer: null });

  const subscribe = useCallback((onStoreChange: () => void) => {
    const state = flashStateRef.current;

    if (trigger && !previousTriggerRef.current) {
      if (state.fadeTimer) {
        clearTimeout(state.fadeTimer);
      }
      if (state.hideTimer) {
        clearTimeout(state.hideTimer);
      }

      state.isVisible = true;
      state.opacity = 1;

      state.fadeTimer = setTimeout(() => {
        state.opacity = 0;
        state.fadeTimer = null;
        onStoreChange();
      }, 50);

      state.hideTimer = setTimeout(() => {
        state.isVisible = false;
        state.hideTimer = null;
        onStoreChange();
      }, FLASH_DURATION_MS);

      onStoreChange();
    }

    previousTriggerRef.current = trigger;

    return () => {
      if (state.fadeTimer) {
        clearTimeout(state.fadeTimer);
        state.fadeTimer = null;
      }
      if (state.hideTimer) {
        clearTimeout(state.hideTimer);
        state.hideTimer = null;
      }
    };
  }, [trigger]);

  const getSnapshot = useCallback(() => {
    return flashStateRef.current;
  }, []);

  const state = React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  if (!state.isVisible || !bounds) {
    return null;
  }

  return (
    <div
      data-osdk-devtools-ignore={true}
      style={{
        position: "fixed",
        left: bounds.x,
        top: bounds.y,
        width: bounds.width,
        height: bounds.height,
        borderRadius: bounds.borderRadius,
        transform: bounds.transform,
        border: "3px solid #22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        pointerEvents: "none",
        zIndex: 2147483645,
        opacity: state.opacity,
        transition: `opacity ${FLASH_DURATION_MS}ms ease-out`,
      }}
    />
  );
}

const overlayContainerStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  pointerEvents: "none",
  zIndex: 2147483646,
};

export function InspectorOverlay({
  state,
  eventHandlers,
  animationOptions,
  zIndex,
}: InspectorOverlayProps): React.ReactElement | null {
  const {
    mode,
    selectionBounds,
    inspectedComponent,
    mouseX,
    mouseY,
    labelStatus,
  } = state;

  const isActive = mode !== "inactive";
  const isFrozen = mode === "frozen";

  const effectiveZIndex = zIndex ?? 2147483646;

  const handleOpenSource = useCallback(
    (sourceLocation: SourceLocation) => {
      eventHandlers?.onOpenSource?.(sourceLocation);
    },
    [eventHandlers],
  );

  const containerStyle = useMemo(
    () => ({
      ...overlayContainerStyles,
      zIndex: effectiveZIndex,
    }),
    [effectiveZIndex],
  );

  if (!isActive) {
    return null;
  }

  return (
    <div data-osdk-devtools-ignore={true} style={containerStyle}>
      <GrabbedFlash bounds={selectionBounds} trigger={isFrozen} />

      <SelectionHighlight
        bounds={selectionBounds}
        variant={isFrozen ? "frozen" : "hover"}
        animationOptions={animationOptions}
        visible={!!selectionBounds}
      />

      <ComponentLabel
        component={inspectedComponent}
        bounds={selectionBounds}
        mouseX={mouseX}
        mouseY={mouseY}
        status={labelStatus}
        onOpenSource={handleOpenSource}
        visible={!!inspectedComponent && !!selectionBounds}
      />
    </div>
  );
}
