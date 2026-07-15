/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { BaseEdge, type EdgeProps } from "@xyflow/react";
import React from "react";

/** How far each edge of a reciprocal pair bows from the straight line, in px. */
const BOW_PX = 30;

/**
 * Edge for one side of a reciprocal pair (both `A -> B` and `B -> A` exist).
 * React Flow's default edge draws both along the same path and stacks their
 * labels at the midpoint, so they overlap. This draws a quadratic curve that
 * bows perpendicular to the source→target line, and places the label at the
 * curve's apex. The perpendicular points to opposite sides for the two
 * directions of a reciprocal pair (they run antiparallel), so they separate.
 */
export function BidirectionalEdge(
  { id, sourceX, sourceY, targetX, targetY, label, markerEnd }: EdgeProps,
): React.ReactElement {
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const length = Math.hypot(dx, dy) || 1;
  // Perpendicular unit vector (90° CCW from the source→target direction). The
  // two directions of a reciprocal pair run opposite ways (A→B vs B→A), so this
  // vector already points to opposite sides for them — no extra sign needed.
  const perpX = -dy / length;
  const perpY = dx / length;

  const midX = (sourceX + targetX) / 2;
  const midY = (sourceY + targetY) / 2;
  // Control point offset by 2×bow so the curve's t=0.5 apex bows by ~BOW_PX.
  const controlX = midX + perpX * BOW_PX * 2;
  const controlY = midY + perpY * BOW_PX * 2;

  const path =
    `M ${sourceX},${sourceY} Q ${controlX},${controlY} ${targetX},${targetY}`;
  const labelX = 0.25 * sourceX + 0.5 * controlX + 0.25 * targetX;
  const labelY = 0.25 * sourceY + 0.5 * controlY + 0.25 * targetY;

  return (
    <BaseEdge
      id={id}
      path={path}
      label={label}
      labelX={labelX}
      labelY={labelY}
      markerEnd={markerEnd}
    />
  );
}
