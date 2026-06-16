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
  LinkLoadConfig,
  LinkStatus,
  NullabilityViolation,
  PropertyType,
  RequiredProperty,
  ShapeBaseType,
  ShapeBuilder,
  ShapeDefinition,
  ShapeDerivedLinks,
  ShapeInstance,
  ShapeLinkBuilder,
  ShapeLinkResult,
} from "./ShapeDefinition.js";

// Inline shape config types
export type {
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
