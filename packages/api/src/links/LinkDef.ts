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

import type { WhereClause } from "../aggregate/WhereClause.js";
import type { InterfaceDefinition } from "../ontology/InterfaceDefinition.js";
import type { PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { ShapeDefinition } from "../shapes/ShapeDefinition.js";
import type {
  LinkTraversalDescriptor,
  RecursiveOptions,
} from "./LinkTraversalDescriptor.js";

type Node = ObjectTypeDefinition | InterfaceDefinition;

export interface LinkTraversal<
  Source extends Node,
  Target extends Node,
  Card extends "one" | "many",
> {
  readonly __descriptor: LinkTraversalDescriptor;
  /**
   * The target shape bound by `.project()`, if any. The descriptor only carries
   * the shape id (so it stays plain-data and structurally hashable); this field
   * exposes the actual shape object so compilation can attach it as the derived
   * link's target shape.
   */
  readonly __projectedShape?: ShapeDefinition<Target>;
  where(clause: WhereClause<Target>): LinkTraversal<Source, Target, Card>;
  orderBy(
    spec: { [K in PropertyKeys<Target>]?: "asc" | "desc" },
  ): LinkTraversal<Source, Target, Card>;
  limit(n: number): LinkTraversal<Source, Target, Card>;
  project<S extends ShapeDefinition<Target>>(
    shape: S,
  ): LinkTraversal<Source, Target, Card>;
  /** chain a hop; adjacency (this.target === next.source) checked at the type level. */
  then<NextTarget extends Node, NextCard extends "one" | "many">(
    next: LinkDef<Target, NextTarget, NextCard>,
  ): Path<Source, NextTarget, Card extends "many" ? "many" : NextCard>;
}

export interface LinkDef<
  Source extends Node,
  Target extends Node,
  Card extends "one" | "many",
> extends LinkTraversal<Source, Target, Card> {
  readonly apiName: string;
  readonly sourceType: Source;
  readonly targetType: Target;
  readonly cardinality: Card;
  /** valid only when Source implements Target (self-referential); enforced at runtime + (best-effort) type level. */
  recursive(
    opts?: Partial<RecursiveOptions>,
  ): RecursiveTraversal<Source, Target>;
}

export interface Path<
  Source extends Node,
  EndTarget extends Node,
  Card extends "one" | "many",
> extends LinkTraversal<Source, EndTarget, Card> {
  readonly __descriptor: LinkTraversalDescriptor & { kind: "path" };
}

export interface RecursiveTraversal<Source extends Node, Target extends Node>
  extends LinkTraversal<Source, Target, "many">
{
  readonly __descriptor:
    & LinkTraversalDescriptor
    & { kind: "recursive"; recursive: RecursiveOptions };
}
