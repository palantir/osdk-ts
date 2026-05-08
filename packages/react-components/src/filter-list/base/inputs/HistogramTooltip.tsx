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

import React, { memo } from "react";
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
}

function HistogramTooltipInner({
  text,
  cx,
  barTop,
  svgWidth,
  svgHeight,
}: HistogramTooltipProps): React.ReactElement {
  // Position via percent of the wrapper's rendered size — wrapper width
  // matches SVG width and the SVG's aspect-ratio fixes its height, so the
  // percent map to viewBox coordinates 1:1.
  return (
    <div
      className={styles.tooltip}
      style={{
        left: `${(cx / svgWidth) * 100}%`,
        top: `${(barTop / svgHeight) * 100}%`,
      }}
    >
      {text}
    </div>
  );
}

export const HistogramTooltip: React.NamedExoticComponent<
  HistogramTooltipProps
> = memo(HistogramTooltipInner);
