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

import React from "react";
import { useAnimatedBounds } from "../hooks/useAnimatedBounds.js";
import type { HighlightVariant, SelectionHighlightProps } from "../types.js";
import { INTERPOLATION_FACTORS } from "../utils/interpolation.js";

const variantColors: Record<HighlightVariant, { border: string; bg: string }> =
  {
    hover: {
      border: "rgba(59, 130, 246, 0.8)",
      bg: "rgba(59, 130, 246, 0.1)",
    },
    selected: {
      border: "rgba(34, 197, 94, 0.8)",
      bg: "rgba(34, 197, 94, 0.15)",
    },
    frozen: {
      border: "rgba(168, 85, 247, 0.8)",
      bg: "rgba(168, 85, 247, 0.1)",
    },
  };

const baseStyles: React.CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 2147483646,
  boxSizing: "border-box",
  transition: "opacity 150ms ease-out",
};

export function SelectionHighlight({
  bounds,
  variant,
  animationOptions,
  visible,
}: SelectionHighlightProps): React.ReactElement | null {
  const colors = variantColors[variant];

  const effectiveAnimationOptions = {
    interpolationFactor: animationOptions?.interpolationFactor
      ?? INTERPOLATION_FACTORS.selection,
    convergenceThreshold: animationOptions?.convergenceThreshold,
    enabled: animationOptions?.enabled ?? true,
  };

  const animatedBounds = useAnimatedBounds(bounds, effectiveAnimationOptions);

  if (!animatedBounds || !visible) {
    return null;
  }

  const style: React.CSSProperties = {
    ...baseStyles,
    left: `${animatedBounds.x}px`,
    top: `${animatedBounds.y}px`,
    width: `${animatedBounds.width}px`,
    height: `${animatedBounds.height}px`,
    borderRadius: bounds?.borderRadius ?? "0px",
    transform: bounds?.transform ?? "",
    border: `2px solid ${colors.border}`,
    backgroundColor: colors.bg,
    opacity: visible ? 1 : 0,
  };

  return <div data-osdk-devtools-ignore style={style} />;
}
