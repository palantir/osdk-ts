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

import {
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  type Edge,
  type EdgeTypes,
  type NodeChange,
  type NodeTypes,
  type OnEdgesChange,
  type OnNodesChange,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";
import React, { useCallback, useMemo, useState } from "react";

import { ActionTypeNode } from "./ActionTypeNode.js";
import { BidirectionalEdge } from "./BidirectionalEdge.js";
import { getLayoutedElements } from "./getLayoutedElements.js";
import {
  ACTION_TYPE_NODE,
  BIDIRECTIONAL_EDGE,
  type GraphNode,
  OBJECT_TYPE_NODE,
  QUERY_TYPE_NODE,
  SELF_LOOP_EDGE,
  toFlowElements,
} from "./graphElements.js";
import { ObjectTypeNode } from "./ObjectTypeNode.js";
import type { OntologyEntity } from "./OntologyGraphModel.js";
import { QueryTypeNode } from "./QueryTypeNode.js";
import { SelfLoopEdge } from "./SelfLoopEdge.js";

import styles from "./OntologyGraphFlow.module.scss";

const nodeTypes: NodeTypes = {
  [OBJECT_TYPE_NODE]: ObjectTypeNode,
  [ACTION_TYPE_NODE]: ActionTypeNode,
  [QUERY_TYPE_NODE]: QueryTypeNode,
};
const edgeTypes: EdgeTypes = {
  [SELF_LOOP_EDGE]: SelfLoopEdge,
  [BIDIRECTIONAL_EDGE]: BidirectionalEdge,
};

export interface OntologyGraphFlowProps {
  entities: OntologyEntity[];
  theme: "light" | "dark";
  selectedNodeId: string | null;
  onSelect: (nodeId: string | null) => void;
}

function changesIncludeUserInteractions(
  changes: NodeChange<GraphNode>[],
): boolean {
  return changes.some(({ type }) => type === "position" || type === "select");
}

function OntologyGraphFlowInner({
  entities,
  theme,
  selectedNodeId,
  onSelect,
}: OntologyGraphFlowProps): React.ReactElement {
  const layouted = useMemo(() => {
    const { nodes, edges } = toFlowElements(entities);
    return getLayoutedElements(nodes, edges);
  }, [entities]);

  const [nodes, setNodes] = useState<GraphNode[]>(layouted.nodes);
  const [edges, setEdges] = useState<Edge[]>(layouted.edges);
  const [renderedLayout, setRenderedLayout] = useState(layouted);

  // Re-seed local node/edge state whenever a new layout is computed (new
  // entities loaded). Adjusting state during render is React's supported
  // alternative to an effect for "reset state when a prop changes".
  if (renderedLayout !== layouted) {
    setRenderedLayout(layouted);
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
  }

  const reactFlow = useReactFlow();

  const onNodesChange: OnNodesChange<GraphNode> = useCallback(
    (changes) => {
      setNodes((prev) => applyNodeChanges(changes, prev));
      if (!changesIncludeUserInteractions(changes)) {
        // fire-and-forget view animation; nothing depends on it resolving
        void reactFlow.fitView();
      }
    },
    [reactFlow],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((prev) => applyEdgeChanges(changes, prev)),
    [],
  );

  const displayNodes = useMemo(
    () =>
      nodes.map((node) => ({
        ...node,
        selected: node.id === selectedNodeId,
      })),
    [nodes, selectedNodeId],
  );

  return (
    <ReactFlow
      nodes={displayNodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={(_event, node) => onSelect(node.id)}
      onPaneClick={() => onSelect(null)}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView={true}
      colorMode={theme}
      proOptions={{ hideAttribution: true }}
      className={styles.flow}
    >
      <Background />
      <Controls showInteractive={false} />
    </ReactFlow>
  );
}

export function OntologyGraphFlow(
  props: OntologyGraphFlowProps,
): React.ReactElement {
  return (
    <ReactFlowProvider>
      <OntologyGraphFlowInner {...props} />
    </ReactFlowProvider>
  );
}
