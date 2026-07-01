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

import type { Edge, Node } from "@xyflow/react";

import type { OntologyTypeInfo } from "../../store/OntologyGraphModel.js";

export const OBJECT_TYPE_NODE = "objectType";

export type ObjectTypeNodeData = {
  info: OntologyTypeInfo;
};

export type ObjectTypeNode = Node<ObjectTypeNodeData, typeof OBJECT_TYPE_NODE>;

/**
 * Transforms the ontology type model into React Flow nodes and edges. Positions
 * are left at the origin here; {@link getLayoutedElements} assigns them.
 */
export function toFlowElements(types: OntologyTypeInfo[]): {
  nodes: ObjectTypeNode[];
  edges: Edge[];
} {
  const known = new Set(types.map((t) => t.apiName));

  const nodes: ObjectTypeNode[] = types.map((info) => ({
    id: info.apiName,
    type: OBJECT_TYPE_NODE,
    position: { x: 0, y: 0 },
    data: { info },
  }));

  const edges: Edge[] = [];
  const seen = new Set<string>();
  for (const type of types) {
    for (const link of type.links) {
      if (!known.has(link.targetType)) {
        continue;
      }
      const id = `${type.apiName}--${link.apiName}-->${link.targetType}`;
      if (seen.has(id)) {
        continue;
      }
      seen.add(id);
      edges.push({
        id,
        source: type.apiName,
        target: link.targetType,
        label: link.apiName,
        animated: false,
      });
    }
  }

  return { nodes, edges };
}
