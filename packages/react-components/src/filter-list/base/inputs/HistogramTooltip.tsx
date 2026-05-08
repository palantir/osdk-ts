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

import React, { memo, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./RangeInput.module.css";

export interface HistogramTooltipProps {
  text: string;
  /** Center x of the bar in viewBox units. */
  cx: number;
  /** Top y of the bar in viewBox units. */
  barTop: number;
  /** SVG viewBox width. */
  svgWidth: number;
  /** SVG viewBox height. */
  svgHeight: number;
  /** The SVG element used to map viewBox coordinates to viewport pixels. */
  svgElement: SVGSVGElement | null;
}

const GAP_PX = 6;

function HistogramTooltipInner({
  text,
  cx,
  barTop,
  svgWidth,
  svgHeight,
  svgElement,
}: HistogramTooltipProps): React.ReactElement | null {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<
    { left: number; top: number } | null
  >(null);

  // Portal-positioned tooltip: needs the SVG's viewport rect plus the
  // rendered tooltip's height to flip above/below the bar without
  // overflowing the page. Both are post-render measurements, so this is
  // the canonical `useLayoutEffect` + `getBoundingClientRect` pattern.
  // Approved exception to the project-wide "no useEffect" guidance.
  useLayoutEffect(() => {
    if (svgElement == null) {
      setPosition(null);
      return;
    }
    const rect = svgElement.getBoundingClientRect();
    const scaleX = rect.width / svgWidth;
    const scaleY = rect.height / svgHeight;
    const anchorX = rect.left + cx * scaleX;
    const barTopPx = rect.top + barTop * scaleY;
    const tooltipHeight = tooltipRef.current?.offsetHeight ?? 0;
    const aboveTop = barTopPx - GAP_PX - tooltipHeight;
    const top = aboveTop < 0 ? barTopPx + GAP_PX : aboveTop;
    setPosition({ left: anchorX, top });
  }, [svgElement, cx, barTop, svgWidth, svgHeight, text]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      ref={tooltipRef}
      className={styles.tooltip}
      data-state={position == null ? "hidden" : "visible"}
      style={position == null
        ? { left: 0, top: 0 }
        : { left: position.left, top: position.top }}
    >
      {text}
    </div>,
    document.body,
  );
}

export const HistogramTooltip: React.NamedExoticComponent<
  HistogramTooltipProps
> = memo(HistogramTooltipInner);
