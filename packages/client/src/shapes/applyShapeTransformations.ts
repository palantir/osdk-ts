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

import type {
  CompileTimeMetadata,
  ObjectOrInterfaceDefinition,
  Osdk,
} from "@osdk/api";
import type { ShapePropertyConfig } from "@osdk/api/shapes-internal";
import type {
  NullabilityViolation,
  ShapeBaseType,
  ShapeDefinition,
  ShapeInstance,
} from "@osdk/api/unstable";

export interface ShapeTransformResult<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  data: ShapeInstance<S> | undefined;
  dropped: boolean;
  violations: NullabilityViolation[];
}

export function applyShapeTransformations<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(
  shape: S,
  rawObject: Osdk.Instance<ShapeBaseType<S>> | undefined,
): ShapeTransformResult<S> {
  if (rawObject === undefined) {
    return {
      data: undefined,
      dropped: false,
      violations: [],
    };
  }

  const primaryKey = rawObject.$primaryKey;
  const transformedProps: Record<string, unknown> = {};
  const requireProps: string[] = [];

  // Phase 1-3: Filter (dropIfNull), apply defaults and transforms
  // Collect require props to check after cloning
  for (const prop of Object.keys(shape.__props)) {
    const config = shape.__props[prop] as ShapePropertyConfig | undefined;
    if (!config) {
      continue;
    }

    const originalValue = (rawObject as Record<string, unknown>)[prop];
    const op = config.nullabilityOp;

    switch (op.type) {
      case "dropIfNull": {
        if (originalValue == null) {
          return {
            data: undefined,
            dropped: true,
            violations: [
              {
                property: prop,
                primaryKey,
                constraint: "dropIfNull",
              },
            ],
          };
        }
        break;
      }
      case "withDefault": {
        transformedProps[prop] = originalValue ?? op.defaultValue;
        break;
      }
      case "withTransform": {
        try {
          transformedProps[prop] = op.transform(originalValue);
        } catch (e) {
          if (process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.error(`Shape transform error for property "${prop}":`, e);
          }
          return {
            data: undefined,
            dropped: false,
            violations: [{
              property: prop,
              primaryKey,
              constraint: "transformError",
            }],
          };
        }
        break;
      }
      case "require": {
        // Collect for phase 4 - check AFTER clone with transforms applied
        requireProps.push(prop);
        break;
      }
      case "select":
        // No transformation needed
        break;
      default: {
        const _exhaustive: never = op;
      }
    }
  }

  // Clone the object with transformed properties if any were modified
  const clonedObject = Object.keys(transformedProps).length > 0
    ? rawObject.$clone(
      transformedProps as Partial<
        CompileTimeMetadata<ShapeBaseType<S>>["props"]
      >,
    )
    : rawObject;

  // Phase 4: Check require constraints on the TRANSFORMED object
  // This allows withDefault + require to work together correctly
  const violations: NullabilityViolation[] = [];
  for (const prop of requireProps) {
    const value = (clonedObject as Record<string, unknown>)[prop];
    if (value == null) {
      violations.push({
        property: prop,
        primaryKey,
        constraint: "require",
      });
    }
  }

  if (violations.length > 0) {
    return {
      data: undefined,
      dropped: false,
      violations,
    };
  }

  return {
    data: clonedObject as Osdk.Instance<ShapeBaseType<S>> & ShapeInstance<S>,
    dropped: false,
    violations: [],
  };
}

export function applyShapeTransformationsToArray<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(
  shape: S,
  rawObjects: Osdk.Instance<ShapeBaseType<S>>[],
): {
  data: ShapeInstance<S>[];
  droppedCount: number;
  violations: NullabilityViolation[];
} {
  const results: ShapeInstance<S>[] = [];
  let droppedCount = 0;
  const allViolations: NullabilityViolation[] = [];

  for (const rawObject of rawObjects) {
    const result = applyShapeTransformations(shape, rawObject);

    if (result.dropped) {
      droppedCount++;
    } else if (result.data !== undefined) {
      results.push(result.data);
    }

    allViolations.push(...result.violations);
  }

  return {
    data: results,
    droppedCount,
    violations: allViolations,
  };
}
