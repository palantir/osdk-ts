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
import type {
  LinkHopDescriptor,
  LinkTraversalDescriptor,
} from "../links/LinkTraversalDescriptor.js";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import { computeShapeId } from "./computeShapeId.js";
import type {
  InferShapeDefinition,
  InlineShapeConfig,
} from "./InlineShapeConfig.js";
import { createShapeBuilder, createShapeLinkBuilder } from "./ShapeBuilder.js";
import type {
  NullabilityOp,
  ShapeDefinition,
  ShapeDerivedLinkDef,
  ShapeLinkBuilderInternal,
  ShapeLinkObjectSetDef,
  ShapeLinkOrderBy,
  ShapeLinkSegment,
  ShapePropertyConfig,
} from "./ShapeDefinition.js";

function hopToSegment(hop: LinkHopDescriptor): ShapeLinkSegment {
  return {
    type: "pivotTo",
    linkName: hop.linkApiName,
    sourceType: hop.sourceTypeApiName,
    targetType: hop.targetTypeApiName,
  };
}

/**
 * Translates a token `LinkTraversalDescriptor` into a `ShapeLinkObjectSetDef`.
 * Each hop becomes one `pivotTo` segment. `where`/`orderBy`/`limit` come from
 * the endpoint (last) hop, matching the top-level filter semantics of
 * `ShapeLinkObjectSetDef`.
 */
function descriptorToObjectSetDef(
  descriptor: LinkTraversalDescriptor,
): ShapeLinkObjectSetDef {
  const segments = descriptor.hops.map(hopToSegment);
  const lastHop = descriptor.hops[descriptor.hops.length - 1];
  const where = lastHop.where as
    | WhereClause<ObjectOrInterfaceDefinition>
    | undefined;
  const orderBy = lastHop.orderBy as readonly ShapeLinkOrderBy[] | undefined;
  return {
    segments: Object.freeze(segments),
    where,
    orderBy: orderBy && orderBy.length > 0
      ? Object.freeze([...orderBy])
      : undefined,
    limit: lastHop.limit,
    recursive: descriptor.recursive,
  };
}

/**
 * Synthesizes the default target shape for a recursive `follow` entry that was
 * not given an explicit `.project(shape)`. The projection is intentionally
 * minimal: each node carries only its `$primaryKey`/`$title` (always present via
 * `OsdkBase`, so no selected props are needed) and no nested derived links. The
 * recursion itself is driven by the parent derived link's
 * `objectSetDef.recursive`, and the flat-plus-adjacency batched store
 * reconstructs nesting, so a self-referential link here is neither required nor
 * desirable.
 */
function minimalRecursiveShape(
  baseType: ObjectOrInterfaceDefinition,
): ShapeDefinition<ObjectOrInterfaceDefinition> {
  return createShapeBuilder(baseType).build();
}

export function configToShapeDefinition<
  BASE extends ObjectOrInterfaceDefinition,
  const C extends InlineShapeConfig<BASE>,
>(
  baseType: BASE,
  config: C,
): InferShapeDefinition<BASE, C> {
  const baseTypeApiName = baseType.apiName;
  const props: Record<string, ShapePropertyConfig> = {};

  const seen = new Set<string>();
  function addProp(prop: string, config2: ShapePropertyConfig) {
    if (seen.has(prop)) {
      throw new Error(`Property "${prop}" appears in multiple config arrays`);
    }
    seen.add(prop);
    props[prop] = config2;
  }

  if (config.require) {
    for (const prop of config.require) {
      addProp(prop as string, { nullabilityOp: { type: "require" } });
    }
  }

  if (config.select) {
    for (const prop of config.select) {
      addProp(prop as string, { nullabilityOp: { type: "select" } });
    }
  }

  if (config.dropIfNull) {
    for (const prop of config.dropIfNull) {
      addProp(prop as string, { nullabilityOp: { type: "dropIfNull" } });
    }
  }

  if (config.defaults) {
    for (const [prop, defaultValue] of Object.entries(config.defaults)) {
      addProp(prop, {
        nullabilityOp: {
          type: "withDefault",
          defaultValue,
        } as NullabilityOp,
      });
    }
  }

  if (config.fallbacks) {
    for (const [prop, defaultValue] of Object.entries(config.fallbacks)) {
      addProp(prop, {
        nullabilityOp: {
          type: "withDefault",
          defaultValue,
        } as NullabilityOp,
      });
    }
  }

  if (config.transforms) {
    for (const [prop, transform] of Object.entries(config.transforms)) {
      if (typeof transform !== "function") {
        throw new Error(
          `transforms["${prop}"] must be a function, got: ${typeof transform}`,
        );
      }
      addProp(prop, {
        nullabilityOp: {
          type: "withTransform",
          transform,
        } as NullabilityOp,
      });
    }
  }

  const derivedLinks: ShapeDerivedLinkDef[] = [];

  if (config.links) {
    for (const [name, linkConfig] of Object.entries(config.links)) {
      const linkBuilder = createShapeLinkBuilder(baseTypeApiName);
      const traversed = linkConfig.via(linkBuilder as ShapeLinkBuilderInternal);
      const objectSetDef: ShapeLinkObjectSetDef =
        (traversed as ShapeLinkBuilderInternal).toObjectSetDef();

      const targetShape: ShapeDefinition<ObjectOrInterfaceDefinition> =
        linkConfig.target;

      derivedLinks.push({
        name,
        objectSetDef,
        targetShape,
        config: { defer: linkConfig.defer },
      });
    }
  }

  if (config.follow) {
    const linkNames = new Set(derivedLinks.map((l) => l.name));
    for (const [name, traversal] of Object.entries(config.follow)) {
      if (linkNames.has(name)) {
        throw new Error(`Derived link "${name}" is defined more than once`);
      }
      linkNames.add(name);

      const objectSetDef = descriptorToObjectSetDef(traversal.__descriptor);
      const isRecursive = traversal.__descriptor.kind === "recursive";
      const targetShape = traversal.__projectedShape
        ?? (isRecursive ? minimalRecursiveShape(baseType) : undefined);
      if (targetShape == null) {
        throw new Error(
          `follow["${name}"] must be projected with .project(shape)`,
        );
      }

      derivedLinks.push({
        name,
        objectSetDef,
        targetShape,
        config: {},
      });
    }
  }

  const shapeId = computeShapeId({
    baseTypeApiName,
    props,
    derivedLinks,
  });

  return {
    __shapeId: shapeId,
    __debugName: undefined,
    __baseType: baseType,
    __baseTypeApiName: baseTypeApiName,
    __props: Object.freeze({ ...props }),
    __derivedLinks: Object.freeze([...derivedLinks]),
    __selectedPropsType: {} as InferShapeDefinition<
      BASE,
      C
    >["__selectedPropsType"],
    __derivedLinksType: {} as InferShapeDefinition<
      BASE,
      C
    >["__derivedLinksType"],
  } as InferShapeDefinition<BASE, C>;
}
