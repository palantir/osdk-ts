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

import {
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  type Edge,
  type NodeChange,
  type NodeTypes,
  type OnEdgesChange,
  type OnNodesChange,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";
import React, { useCallback, useMemo, useState } from "react";

import type { OntologyTypeInfo } from "../../store/OntologyGraphModel.js";
import { getLayoutedElements } from "./getLayoutedElements.js";
import {
  OBJECT_TYPE_NODE,
  type ObjectTypeNode as ObjectTypeNodeType,
  toFlowElements,
} from "./graphElements.js";
import { ObjectTypeNode } from "./ObjectTypeNode.js";

import styles from "./OntologyGraphFlow.module.scss";

const nodeTypes: NodeTypes = { [OBJECT_TYPE_NODE]: ObjectTypeNode };

export interface OntologyGraphFlowProps {
  types: OntologyTypeInfo[];
  theme: "light" | "dark";
  selectedApiName: string | null;
  onSelect: (apiName: string | null) => void;
}

function changesIncludeUserInteractions(
  changes: NodeChange<ObjectTypeNodeType>[]
): boolean {
  return changes.some(({ type }) => type === "position" || type === "select");
}

function OntologyGraphFlowInner({
  types,
  theme,
  selectedApiName,
  onSelect,
}: OntologyGraphFlowProps): React.ReactElement {
  const layouted = useMemo(() => {
    const { nodes, edges } = toFlowElements(types);
    return getLayoutedElements(nodes, edges);
  }, [types]);

  const [nodes, setNodes] = useState<ObjectTypeNodeType[]>(layouted.nodes);
  const [edges, setEdges] = useState<Edge[]>(layouted.edges);
  const [renderedLayout, setRenderedLayout] = useState(layouted);

  // Re-seed local node/edge state whenever a new layout is computed (new types
  // loaded). Adjusting state during render is React's supported alternative to
  // an effect for "reset state when a prop changes".
  if (renderedLayout !== layouted) {
    setRenderedLayout(layouted);
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
  }

  const reactFlow = useReactFlow();

  const onNodesChange: OnNodesChange<ObjectTypeNodeType> = useCallback(
    (changes) => {
      setNodes((prev) => applyNodeChanges(changes, prev));
      if (!changesIncludeUserInteractions(changes)) {
        reactFlow.fitView();
      }
    },
    [reactFlow]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((prev) => applyEdgeChanges(changes, prev)),
    []
  );

  const displayNodes = useMemo(
    () =>
      nodes.map((node) => ({
        ...node,
        selected: node.id === selectedApiName,
      })),
    [nodes, selectedApiName]
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
  props: OntologyGraphFlowProps
): React.ReactElement {
  return (
    <ReactFlowProvider>
      <OntologyGraphFlowInner {...props} />
    </ReactFlowProvider>
  );
}
