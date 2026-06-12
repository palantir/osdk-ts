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
  LinkDef,
  LinkTraversal,
  Path,
  RecursiveTraversal,
} from "./LinkDef.js";
import type {
  LinkHopDescriptor,
  LinkTraversalDescriptor,
  RecursiveOptions,
} from "./LinkTraversalDescriptor.js";

type Node = ObjectTypeDefinition | InterfaceDefinition;

const DEFAULT_RECURSIVE_OPTIONS: RecursiveOptions = {
  maxDepth: 10,
  maxNodes: 1000,
};

function withLastHop(
  descriptor: LinkTraversalDescriptor,
  patch: Partial<LinkHopDescriptor>,
): LinkTraversalDescriptor {
  const hops = descriptor.hops.slice();
  const last = hops[hops.length - 1];
  hops[hops.length - 1] = { ...last, ...patch };
  return { ...descriptor, hops };
}

function cardinalityOf(
  descriptor: LinkTraversalDescriptor,
): "one" | "many" {
  return descriptor.hops.some((hop) => hop.multiplicity) ? "many" : "one";
}

function assertLinkInvariant(ok: boolean, message: string): void {
  if (!ok) {
    throw new Error(message);
  }
}

function buildTraversal<
  Source extends Node,
  Target extends Node,
  Card extends "one" | "many",
>(
  descriptor: LinkTraversalDescriptor,
  projectedShape?: ShapeDefinition<Target>,
): LinkDef<Source, Target, Card> {
  const hops = descriptor.hops;
  const lastHop = hops[hops.length - 1];
  const firstHop = hops[0];

  const patchLastHop = (
    patch: Partial<LinkHopDescriptor>,
    projected?: ShapeDefinition<Target>,
  ): LinkTraversal<Source, Target, Card> =>
    buildTraversal<Source, Target, Card>(
      withLastHop(descriptor, patch),
      projected,
    );

  return {
    __descriptor: descriptor,
    __projectedShape: projectedShape,
    apiName: lastHop.linkApiName,
    sourceType: {} as Source,
    targetType: {} as Target,
    cardinality: cardinalityOf(descriptor) as Card,

    where(clause: WhereClause<Target>): LinkTraversal<Source, Target, Card> {
      return patchLastHop({ where: clause as WhereClause<never> });
    },

    orderBy(
      spec: { [K in PropertyKeys<Target>]?: "asc" | "desc" },
    ): LinkTraversal<Source, Target, Card> {
      const orderBy = Object.entries(spec).map(([property, direction]) => ({
        property,
        direction: direction as "asc" | "desc",
      }));
      return patchLastHop({ orderBy });
    },

    limit(n: number): LinkTraversal<Source, Target, Card> {
      return patchLastHop({ limit: n });
    },

    project<S extends ShapeDefinition<Target>>(
      shape: S,
    ): LinkTraversal<Source, Target, Card> {
      return patchLastHop({ projectShapeId: shape.__shapeId }, shape);
    },

    then<NextTarget extends Node, NextCard extends "one" | "many">(
      next: LinkDef<Target, NextTarget, NextCard>,
    ): Path<Source, NextTarget, Card extends "many" ? "many" : NextCard> {
      const nextFirstHop = next.__descriptor.hops[0];
      assertLinkInvariant(
        lastHop.targetTypeApiName === nextFirstHop.sourceTypeApiName,
        `Invalid link adjacency: cannot chain "${lastHop.linkApiName}" `
          + `(target "${lastHop.targetTypeApiName}") to "${nextFirstHop.linkApiName}" `
          + `(source "${nextFirstHop.sourceTypeApiName}")`,
      );
      const pathDescriptor: LinkTraversalDescriptor = {
        kind: "path",
        hops: [...descriptor.hops, ...next.__descriptor.hops],
      };
      const built = buildTraversal<
        Source,
        NextTarget,
        Card extends "many" ? "many" : NextCard
      >(pathDescriptor);
      return built as Path<
        Source,
        NextTarget,
        Card extends "many" ? "many" : NextCard
      >;
    },

    recursive(
      opts?: Partial<RecursiveOptions>,
    ): RecursiveTraversal<Source, Target> {
      assertLinkInvariant(
        firstHop.sourceTypeApiName === lastHop.targetTypeApiName,
        `recursive() requires a self-referential link: source `
          + `"${firstHop.sourceTypeApiName}" must equal target `
          + `"${lastHop.targetTypeApiName}"`,
      );
      const recursive: RecursiveOptions = {
        ...DEFAULT_RECURSIVE_OPTIONS,
        ...opts,
      };
      const recursiveDescriptor: LinkTraversalDescriptor = {
        kind: "recursive",
        hops: descriptor.hops,
        recursive,
      };
      const built = buildTraversal<Source, Target, "many">(recursiveDescriptor);
      return built as RecursiveTraversal<Source, Target>;
    },
  };
}

export function createLinkDef<
  Source extends Node = Node,
  Target extends Node = Node,
  M extends boolean = boolean,
>(
  sourceTypeApiName: string,
  linkApiName: string,
  targetTypeApiName: string,
  multiplicity: M,
  sourceIsInterface: boolean,
): LinkDef<Source, Target, M extends true ? "many" : "one"> {
  const descriptor: LinkTraversalDescriptor = {
    kind: "single",
    hops: [{
      sourceTypeApiName,
      linkApiName,
      targetTypeApiName,
      multiplicity,
      sourceIsInterface,
    }],
  };
  return buildTraversal<
    Source,
    Target,
    M extends true ? "many" : "one"
  >(descriptor);
}
