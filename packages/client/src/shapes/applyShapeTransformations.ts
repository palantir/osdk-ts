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

import type { ObjectOrInterfaceDefinition, Osdk } from "@osdk/api";
import type {
  NullabilityViolation,
  ShapeBaseType,
  ShapeDefinition,
  ShapeInstance,
  ShapePropertyConfig,
} from "@osdk/api/shapes";

/**
 * Result of applying shape transformations to an object.
 */
export interface ShapeTransformResult<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  /** The transformed data, or undefined if dropped due to nullability constraints */
  data: ShapeInstance<S> | undefined;

  /** Whether the object was dropped due to dropIfNull constraints */
  dropped: boolean;

  /** Details about any nullability violations */
  violations: NullabilityViolation[];
}

/**
 * Type-safe property accessor for OSDK objects.
 *
 * This helper centralizes the dynamic property access pattern needed for
 * shape transformations. OSDK objects support arbitrary property access
 * at runtime, but TypeScript can't statically verify this for dynamic keys.
 *
 * @internal
 */
function getObjectProperty<T extends ObjectOrInterfaceDefinition>(
  obj: Osdk.Instance<T>,
  propertyName: string,
): unknown {
  // OSDK instances support dynamic property access via their proxy
  // This is the single location where we bridge runtime dynamism with static types
  return (obj as Osdk.Instance<T> & { [key: string]: unknown })[propertyName];
}

/**
 * Converts a transformed OSDK instance to a ShapeInstance.
 *
 * This function performs the runtime assertion that an OSDK instance
 * with shape transformations applied conforms to the ShapeInstance type.
 *
 * The assertion is valid because:
 * 1. The base object is a valid Osdk.Instance
 * 2. Shape transformations only modify property values, not structure
 * 3. The ShapeInstance type is a projection of the original instance type
 *
 * @internal
 */
function toShapeInstance<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(
  obj: Osdk.Instance<ShapeBaseType<S>>,
): ShapeInstance<S> {
  // ShapeInstance<S> extends the base OSDK instance with type narrowing
  // for properties that have been through require/dropIfNull/withDefault.
  // At runtime the object is the same; this is a type-level projection.
  return obj as Osdk.Instance<ShapeBaseType<S>> & ShapeInstance<S>;
}

/**
 * Applies shape transformations to a raw OSDK object.
 *
 * Transformation pipeline order:
 * 1. Filter phase (dropIfNull) - check if object should be filtered out
 * 2. Default phase - apply default values for null properties
 * 3. Transform phase - apply custom transform functions
 * 4. Validation phase (require) - check required properties are non-null AFTER transforms
 *
 * IMPORTANT: The `require` check happens AFTER defaults and transforms are applied.
 * This allows patterns like `.withDefault("city", "Unknown").require("city")` to work
 * correctly - the default is applied first, then require passes because the value exists.
 *
 * @param shape - The shape definition specifying transformations
 * @param rawObject - The raw OSDK object to transform
 * @returns The transformation result with data (if valid) and any violations
 */
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

    const originalValue = getObjectProperty(rawObject, prop);
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
    }
  }

  // Clone the object with transformed properties if any were modified
  const clonedObject = Object.keys(transformedProps).length > 0
    ? rawObject.$clone(
      transformedProps as Partial<Osdk.Instance<ShapeBaseType<S>>>,
    )
    : rawObject;

  // Phase 4: Check require constraints on the TRANSFORMED object
  // This allows withDefault + require to work together correctly
  const violations: NullabilityViolation[] = [];
  for (const prop of requireProps) {
    const value = getObjectProperty(clonedObject, prop);
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
    data: toShapeInstance<S>(clonedObject),
    dropped: false,
    violations: [],
  };
}

/**
 * Applies shape transformations to an array of raw OSDK objects.
 *
 * @param shape - The shape definition specifying transformations
 * @param rawObjects - The raw OSDK objects to transform
 * @returns Array of transformation results (dropped objects are excluded)
 */
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
