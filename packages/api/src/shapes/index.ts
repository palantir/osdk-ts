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

// Core types
export type {
  DerivedLinkConfig,
  LinkLoadConfig,
  LinkStatus,
  NullabilityOp,
  NullabilityViolation,
  PropertyType,
  RequiredProperty,
  ShapeBaseType,
  ShapeBuilder,
  ShapeDefinition,
  ShapeDerivedLinkDef,
  ShapeDerivedLinks,
  ShapeInstance,
  ShapeLinkBuilder,
  ShapeLinkObjectSetDef,
  ShapeLinkOrderBy,
  ShapeLinkResult,
  ShapeLinkSegment,
  ShapePropertyConfig,
  ShapeSelectedProps,
} from "./ShapeDefinition.js";

// Inline shape config types
export type {
  InferInlineLinks,
  InferInlineProps,
  InferShapeDefinition,
  InlineLinkConfig,
  InlineShapeConfig,
} from "./InlineShapeConfig.js";

// Error types and runtime values
export {
  isSourcePkSymbol,
  ShapeNullabilityError,
  SourcePrimaryKeySymbol,
} from "./ShapeDefinition.js";

// Builder functions
export { createShapeBuilder } from "./ShapeBuilder.js";

// Inline config converter
export { configToShapeDefinition } from "./configToShapeDefinition.js";

// Inline config converter uses computeShapeId internally but it is not part of the public API.

// Re-import for namespace
import { createShapeBuilder } from "./ShapeBuilder.js";

/**
 * OSDK namespace interface for shapes API.
 * Provides type definition for the `osdk` namespace object.
 */
export interface OsdkShapesNamespace {
  /**
   * Creates a new ShapeBuilder for the given base type.
   *
   * @param baseType - The base ObjectTypeDefinition or InterfaceDefinition
   * @param debugName - Optional name for debugging in DevTools
   */
  readonly shape: typeof createShapeBuilder;
}

/**
 * OSDK namespace for shapes API.
 * Provides a convenient `osdk.shape()` entry point matching the RFC syntax.
 *
 * @example
 * ```typescript
 * import { osdk } from "@osdk/api/shapes";
 *
 * const SlimPlayer = osdk.shape(Player, "SlimPlayer")
 *   .require("name", "age")
 *   .withDefault("position", "Unknown")
 *   .deriveLink("teammates", p =>
 *     p.pivotTo("team")
 *       .pivotTo("players")
 *       .where({ playerId: { $neq: p.$primaryKey } })
 *       .as(SlimPlayer)
 *   )
 *   .build();
 * ```
 */
export const osdk: OsdkShapesNamespace = {
  shape: createShapeBuilder,
};
