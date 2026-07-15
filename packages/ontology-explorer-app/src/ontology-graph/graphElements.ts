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

import type { Edge, Node } from "@xyflow/react";

import {
  entityNodeId,
  type OntologyActionInfo,
  type OntologyEntity,
  type OntologyQueryInfo,
  type OntologyTypeInfo,
} from "./OntologyGraphModel.js";

export const OBJECT_TYPE_NODE = "objectType";
export const ACTION_TYPE_NODE = "actionType";
export const QUERY_TYPE_NODE = "queryType";
export const SELF_LOOP_EDGE = "selfLoop";
export const BIDIRECTIONAL_EDGE = "bidirectional";

export type ObjectTypeNodeData = { info: OntologyTypeInfo };
export type ObjectTypeNode = Node<ObjectTypeNodeData, typeof OBJECT_TYPE_NODE>;

export type ActionTypeNodeData = { info: OntologyActionInfo };
export type ActionTypeNode = Node<ActionTypeNodeData, typeof ACTION_TYPE_NODE>;

export type QueryTypeNodeData = { info: OntologyQueryInfo };
export type QueryTypeNode = Node<QueryTypeNodeData, typeof QUERY_TYPE_NODE>;

export type GraphNode = ObjectTypeNode | ActionTypeNode | QueryTypeNode;

function operationLabel(operation: "create" | "modify"): string {
  return operation === "create" ? "Creates" : "Modifies";
}

/**
 * Transforms the ontology entities into React Flow nodes and edges. Object
 * types render link edges (self-referential links use {@link SELF_LOOP_EDGE});
 * action types render edges to the object types they create or modify. Query
 * types render as standalone nodes. Positions are left at the origin here;
 * `getLayoutedElements` assigns them.
 */
export function toFlowElements(entities: OntologyEntity[]): {
  nodes: GraphNode[];
  edges: Edge[];
} {
  const objectIds = new Set(
    entities
      .filter((entity) => entity.kind === "object")
      .map((entity) => entityNodeId(entity)),
  );

  const nodes: GraphNode[] = entities.map((info) => {
    const base = { id: entityNodeId(info), position: { x: 0, y: 0 } };
    switch (info.kind) {
      case "action":
        return { ...base, type: ACTION_TYPE_NODE, data: { info } };
      case "query":
        return { ...base, type: QUERY_TYPE_NODE, data: { info } };
      case "object":
        return { ...base, type: OBJECT_TYPE_NODE, data: { info } };
    }
  });

  const edges: Edge[] = [];
  const seen = new Set<string>();
  const pushEdge = (
    sourceId: string,
    targetId: string,
    key: string,
    label: string,
    type?: string,
  ) => {
    if (!objectIds.has(targetId)) {
      return;
    }
    const id = `${sourceId}--${key}-->${targetId}`;
    if (seen.has(id)) {
      return;
    }
    seen.add(id);
    edges.push({
      id,
      source: sourceId,
      target: targetId,
      label,
      animated: false,
      type,
    });
  };

  for (const entity of entities) {
    const sourceId = entityNodeId(entity);
    if (entity.kind === "object") {
      for (const link of entity.links) {
        const targetId = entityNodeId({
          kind: "object",
          apiName: link.targetType,
        });
        pushEdge(
          sourceId,
          targetId,
          link.apiName,
          link.apiName,
          sourceId === targetId ? SELF_LOOP_EDGE : undefined,
        );
      }
    } else if (entity.kind === "action") {
      for (const operation of entity.operations) {
        const targetId = entityNodeId({
          kind: "object",
          apiName: operation.targetType,
        });
        pushEdge(
          sourceId,
          targetId,
          operation.operation,
          operationLabel(operation.operation),
        );
      }
    }
  }

  // Mark reciprocal edges (both `A -> B` and `B -> A` between distinct nodes) so
  // they render as curves bowing to opposite sides — otherwise their labels
  // stack at the shared midpoint and overlap.
  const directed = new Set(
    edges.map((edge) => `${edge.source}->${edge.target}`),
  );
  for (const edge of edges) {
    if (
      edge.type === undefined
      && edge.source !== edge.target
      && directed.has(`${edge.target}->${edge.source}`)
    ) {
      edge.type = BIDIRECTIONAL_EDGE;
    }
  }

  return { nodes, edges };
}
