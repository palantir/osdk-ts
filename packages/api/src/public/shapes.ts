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

/**
 * @module @osdk/api/shapes
 *
 * Shapes are frontend-only type projections derived from Ontology types with:
 * - Nullability constraints (remove `| undefined` when appropriate)
 * - Field defaults and transformations
 * - Runtime derived links (computed ObjectSet operations)
 * - Composability (shapes can reference other shapes)
 *
 * @example
 * ```typescript
 * import { osdk } from "@osdk/api/shapes";
 *
 * // Define a basic shape with nullability handling
 * const SlimPlayer = osdk.shape(Player, "SlimPlayer")
 *   .require("name", "age")
 *   .withDefault("position", "Unknown")
 *   .build();
 *
 * // Add derived links for related data
 * const PlayerWithTeammates = osdk.shape(Player, "PlayerWithTeammates")
 *   .require("name", "age")
 *   .deriveLink("teammates", p =>
 *     p.pivotTo("team")
 *       .pivotTo("players")
 *       .where({ playerId: { $neq: p.$primaryKey } })
 *       .as(SlimPlayer)
 *   )
 *   .build();
 * ```
 */

export {
  configToShapeDefinition,
  createShapeBuilder,
  isSourcePkSymbol,
  osdk,
  ShapeNullabilityError,
  SourcePrimaryKeySymbol,
} from "../shapes/index.js";

export type {
  DerivedLinkConfig,
  InferInlineLinks,
  InferInlineProps,
  InferShapeDefinition,
  InlineLinkConfig,
  InlineShapeConfig,
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
} from "../shapes/index.js";
