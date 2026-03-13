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

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const previousTrigger = useRef(trigger);

  useEffect(() => {
    if (trigger && !previousTrigger.current) {
      setIsVisible(true);
      setOpacity(1);

      const fadeTimer = setTimeout(() => {
        setOpacity(0);
      }, 50);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, FLASH_DURATION_MS);

      previousTrigger.current = trigger;

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }

    previousTrigger.current = trigger;
  }, [trigger]);

  if (!isVisible || !bounds) {
    return null;
  }

  return (
    <div
      data-osdk-devtools-ignore
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
        opacity,
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
    <div data-osdk-devtools-ignore style={containerStyle}>
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
