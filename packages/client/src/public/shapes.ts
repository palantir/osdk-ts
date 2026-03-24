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
 * @module @osdk/client/shapes
 *
 * Runtime utilities for working with shapes, including:
 * - Applying shape transformations to raw OSDK objects
 * - Nullability validation and filtering
 *
 * @example
 * ```typescript
 * import { applyShapeTransformations } from "@osdk/client/shapes";
 *
 * const result = applyShapeTransformations(SlimPlayer, rawObject);
 * if (result.data) {
 *   // Object passed all nullability constraints
 *   console.log(result.data.name); // string (not string | undefined)
 * } else if (result.dropped) {
 *   // Object was filtered out due to dropIfNull constraint
 * } else if (result.violations.length > 0) {
 *   // Object has require violations
 * }
 * ```
 */

export {
  applyShapeTransformations,
  applyShapeTransformationsToArray,
  buildObjectSetFromLinkDefByType,
  getLinkQueryOptions,
} from "../shapes/index.js";
