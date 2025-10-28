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
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { ShapeDefinition } from "./ShapeDefinition.js";
import type { ShapeObjectTypeDefinition } from "./ShapeObjectTypeDefinition.js";

function gatherRequiredKeys<
  BASE extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<BASE>,
  MAKE_REQUIRED extends L,
>(
  shape: ShapeDefinition<BASE, L, MAKE_REQUIRED>,
): ReadonlyArray<MAKE_REQUIRED> {
  const gathered: MAKE_REQUIRED[] = [];

  for (
    const list of [
      shape.__requiredOrThrowProps,
      shape.__requiredOrDropProps,
    ]
  ) {
    if (list) {
      for (const prop of list) {
        gathered.push(prop);
      }
    }
  }

  if (shape.__selectWithDefaults) {
    const defaultKeys = Object.keys(shape.__selectWithDefaults);
    for (const key of defaultKeys) {
      gathered.push(key as MAKE_REQUIRED);
    }
  }

  return Array.from(new Set(gathered));
}

/**
 * Converts a ShapeDefinition into a ShapeObjectTypeDefinition that can be used
 * with `client()` and `Osdk.Instance<>`.
 */
export function defineShapeAsType<
  BASE extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<BASE>,
  MAKE_REQUIRED extends L,
>(
  baseType: BASE,
  shape: ShapeDefinition<BASE, L, MAKE_REQUIRED>,
): ShapeObjectTypeDefinition<BASE, L, MAKE_REQUIRED> {
  const shapeMetadata: ShapeDefinition<BASE, L, MAKE_REQUIRED> = {
    ...shape,
    baseObjectType: baseType,
  };

  const requiredProps = gatherRequiredKeys(shapeMetadata);
  const selectProps: ReadonlyArray<L> = shapeMetadata.select ?? [];

  const shaped = Object.create(baseType);

  Object.defineProperties(shaped, {
    shapeType: {
      value: "shape" as const,
      writable: false,
      enumerable: true,
      configurable: false,
    },
    baseObjectType: {
      value: baseType,
      writable: false,
      enumerable: true,
      configurable: false,
    },
    shapeMetadata: {
      value: shapeMetadata,
      writable: false,
      enumerable: true,
      configurable: false,
    },
    __shapeMarker: {
      value: {
        requiredProps,
        selectProps,
      },
      writable: false,
      enumerable: true,
      configurable: false,
    },
  });

  return shaped;
}

export function isShapeObjectType<T extends { shapeType?: string }>(
  type: T,
): type is T & ShapeObjectTypeDefinition.Any {
  return type.shapeType === "shape";
}

/**
 * Extracts the shape metadata object from a shaped type definition.
 */
export function getShapeMetadata<T extends { shapeType?: string }>(
  type: T,
):
  | ShapeDefinition<
    ObjectOrInterfaceDefinition,
    PropertyKeys<ObjectOrInterfaceDefinition>,
    PropertyKeys<ObjectOrInterfaceDefinition>
  >
  | undefined
{
  if (!isShapeObjectType(type)) {
    return undefined;
  }

  return type.shapeMetadata;
}
