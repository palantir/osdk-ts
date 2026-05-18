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

import type { LabelPosition, OverlayBounds } from "../types.js";

const VIEWPORT_MARGIN_PX = 8;
const ARROW_HEIGHT = 8;
const LABEL_GAP = 4;
const MIN_ARROW_OFFSET = 12;

export function computeLabelPosition(
  selectionBounds: OverlayBounds,
  labelWidth: number,
  labelHeight: number,
  mouseX: number,
): LabelPosition {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const selectionCenterX = selectionBounds.x + selectionBounds.width / 2;
  const cursorX = mouseX ?? selectionCenterX;
  const selectionBottom = selectionBounds.y + selectionBounds.height;
  const selectionTop = selectionBounds.y;

  let positionLeft = cursorX - labelWidth / 2;
  let positionTop = selectionBottom + ARROW_HEIGHT + LABEL_GAP;
  let arrowPosition: "top" | "bottom" = "bottom";

  if (positionLeft + labelWidth > viewportWidth - VIEWPORT_MARGIN_PX) {
    positionLeft = viewportWidth - labelWidth - VIEWPORT_MARGIN_PX;
  }
  if (positionLeft < VIEWPORT_MARGIN_PX) {
    positionLeft = VIEWPORT_MARGIN_PX;
  }

  const totalHeightNeeded = labelHeight + ARROW_HEIGHT + LABEL_GAP;
  const fitsBelow =
    positionTop + labelHeight <= viewportHeight - VIEWPORT_MARGIN_PX;

  if (!fitsBelow) {
    positionTop = selectionTop - totalHeightNeeded;
    arrowPosition = "top";
  }

  if (positionTop < VIEWPORT_MARGIN_PX) {
    positionTop = VIEWPORT_MARGIN_PX;
  }
  if (positionTop + labelHeight > viewportHeight - VIEWPORT_MARGIN_PX) {
    positionTop = viewportHeight - labelHeight - VIEWPORT_MARGIN_PX;
  }

  const arrowLeft = Math.max(
    MIN_ARROW_OFFSET,
    Math.min(cursorX - positionLeft, labelWidth - MIN_ARROW_OFFSET),
  );

  return {
    left: positionLeft,
    top: positionTop,
    arrowLeft,
    arrowPosition,
  };
}

export const OFFSCREEN_POSITION: LabelPosition = {
  left: -9999,
  top: -9999,
  arrowLeft: 0,
  arrowPosition: "bottom",
};
