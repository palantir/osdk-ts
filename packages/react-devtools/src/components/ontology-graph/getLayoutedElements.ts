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

import Dagre from "@dagrejs/dagre";
import type { Edge, Node } from "@xyflow/react";

const DEFAULT_NODE_WIDTH_PX = 200;
const DEFAULT_NODE_HEIGHT_PX = 80;

/**
 * Runs a dagre left-to-right hierarchical layout over the given nodes/edges and
 * returns them with computed `position`s. Adapted from the forge
 * dependencies-visualization-components graph.
 */
export function getLayoutedElements<N extends Node, E extends Edge>(
  nodes: N[],
  edges: E[]
): { nodes: N[]; edges: E[] } {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph({
    rankdir: "LR",
    nodesep: 60,
    edgesep: 10,
    ranksep: 120,
  });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) =>
    g.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? DEFAULT_NODE_WIDTH_PX,
      height: node.measured?.height ?? DEFAULT_NODE_HEIGHT_PX,
    })
  );

  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const position = g.node(node.id);
      // Shift the dagre node position (anchor = center) to the top-left so it
      // matches the React Flow node anchor point.
      // https://reactflow.dev/learn/layouting/layouting#dagre
      const x =
        position.x - (node.measured?.width ?? DEFAULT_NODE_WIDTH_PX) / 2;
      const y =
        position.y - (node.measured?.height ?? DEFAULT_NODE_HEIGHT_PX) / 2;
      return { ...node, position: { x, y } };
    }),
    edges,
  };
}
