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

import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import { computeShapeId } from "./computeShapeId.js";
import type {
  InferShapeDefinition,
  InlineShapeConfig,
} from "./InlineShapeConfig.js";
import { createShapeLinkBuilder } from "./ShapeBuilder.js";
import type {
  NullabilityOp,
  ShapeDefinition,
  ShapeDerivedLinkDef,
  ShapeLinkBuilderInternal,
  ShapeLinkObjectSetDef,
  ShapePropertyConfig,
} from "./ShapeDefinition.js";

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

  if (config.transforms) {
    for (const [prop, transform] of Object.entries(config.transforms)) {
      if (typeof transform === "function") {
        addProp(prop, {
          nullabilityOp: {
            type: "withTransform",
            transform,
          } as NullabilityOp,
        });
      }
    }
  }

  const derivedLinks: ShapeDerivedLinkDef[] = [];

  if (config.links) {
    for (const [name, linkConfig] of Object.entries(config.links)) {
      const linkBuilder = createShapeLinkBuilder(baseTypeApiName);
      const traversed = linkConfig.via(linkBuilder as ShapeLinkBuilderInternal);
      const objectSetDef: ShapeLinkObjectSetDef =
        (traversed as ShapeLinkBuilderInternal).toObjectSetDef();

      let targetShape: ShapeDefinition<ObjectOrInterfaceDefinition>;
      if (linkConfig.target) {
        targetShape = linkConfig.target;
      } else {
        // Known limitation: without an explicit target, we fall back to the
        // source type as a placeholder. The actual target type can't be
        // resolved from inline configs alone since link metadata isn't
        // available here. Callers should provide `target` for correct
        // link target type resolution.
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            `configToShapeDefinition: link "${name}" has no explicit target shape. `
              + `Falling back to source type "${baseTypeApiName}" as placeholder. `
              + `Provide a target shape for correct link resolution.`,
          );
        }
        targetShape = configToShapeDefinition(
          baseType,
          {} as InlineShapeConfig<BASE>,
        );
      }

      derivedLinks.push({
        name,
        objectSetDef,
        targetShape,
        config: { defer: linkConfig.defer },
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
