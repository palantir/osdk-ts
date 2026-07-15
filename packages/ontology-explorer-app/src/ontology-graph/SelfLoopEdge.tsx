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

const LOOP_HEIGHT_PX = 90;

/**
 * Edge for a self-referential link (source and target are the same object
 * type). React Flow's default edge collapses to nothing when source === target
 * because both handles sit on one node, which would hide the relationship. This
 * draws a visible arc that loops over the top of the node instead. Source is on
 * the node's right, target on its left (see {@link ObjectTypeNode}).
 */
export function SelfLoopEdge(
  { id, sourceX, sourceY, targetX, targetY, label, markerEnd }: EdgeProps,
): React.ReactElement {
  const path = `M ${sourceX},${sourceY} C ${sourceX + 60},${
    sourceY - LOOP_HEIGHT_PX
  } ${targetX - 60},${targetY - LOOP_HEIGHT_PX} ${targetX},${targetY}`;
  const labelX = (sourceX + targetX) / 2;
  const labelY = Math.min(sourceY, targetY) - LOOP_HEIGHT_PX;

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
