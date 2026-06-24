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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { InlineShapeConfig, ShapeDefinition } from "@osdk/api/unstable";
import { configToShapeDefinition } from "@osdk/api/unstable";
import React from "react";

/**
 * Resolves the shape definition for a hook's `shape` option.
 *
 * Pre-built shapes already carry a __shapeId and pass through unchanged.
 * Inline configs must stay reactive: the definition is recomputed each render
 * so structural config changes take effect, but the previous definition is
 * reused while its content hash (__shapeId) is unchanged so downstream
 * memoization keyed on the shape identity stays stable.
 */
export function useStableShapeDefinition<
  Q extends ObjectOrInterfaceDefinition,
>(
  type: Q,
  rawShape: InlineShapeConfig<Q> | ShapeDefinition<Q>,
): ShapeDefinition<Q> {
  const derivedShapeRef = React.useRef<
    { id: string; def: ShapeDefinition<Q> } | undefined
  >(undefined);

  const isPreBuilt = typeof rawShape === "object" && rawShape != null
    && "__shapeId" in rawShape;

  if (isPreBuilt) {
    return rawShape as ShapeDefinition<Q>;
  }

  const derived = configToShapeDefinition(
    type,
    rawShape as InlineShapeConfig<Q>,
  );
  if (
    derivedShapeRef.current == null
    || derivedShapeRef.current.id !== derived.__shapeId
  ) {
    derivedShapeRef.current = { id: derived.__shapeId, def: derived };
  }
  return derivedShapeRef.current.def;
}
