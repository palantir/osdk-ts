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
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { ShapeDefinition } from "./ShapeDefinition.js";

export interface ShapeRuntimeMarker<
  BASE extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<BASE>,
  MAKE_REQUIRED extends L,
> {
  readonly shapeType: "shape";
  readonly baseObjectType: BASE;
  readonly shapeMetadata: ShapeDefinition<BASE, L, MAKE_REQUIRED>;
  readonly __shapeMarker: {
    readonly requiredProps: readonly MAKE_REQUIRED[];
    readonly selectProps: readonly L[];
  };
}

export type ShapeObjectTypeDefinition<
  BASE extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<BASE>,
  MAKE_REQUIRED extends L,
> = BASE & ShapeRuntimeMarker<BASE, L, MAKE_REQUIRED>;

export type ExtractBaseType<T> = T extends ShapeObjectTypeDefinition<
  infer BASE extends ObjectOrInterfaceDefinition,
  infer _L,
  infer _MAKE_REQUIRED
> ? BASE
  : never;

export type ExtractShapeRequiredKeys<T> = T extends ShapeObjectTypeDefinition<
  infer _BASE extends ObjectOrInterfaceDefinition,
  infer _L,
  infer MAKE_REQUIRED
> ? MAKE_REQUIRED
  : never;

export type ExtractShapeSelectKeys<T> = T extends ShapeObjectTypeDefinition<
  infer _BASE extends ObjectOrInterfaceDefinition,
  infer L,
  infer _MAKE_REQUIRED
> ? L
  : never;

export type ShapeAwareDefinition =
  | ObjectOrInterfaceDefinition
  | ShapeObjectTypeDefinition<
    ObjectOrInterfaceDefinition,
    PropertyKeys<ObjectOrInterfaceDefinition>,
    PropertyKeys<ObjectOrInterfaceDefinition>
  >;

export namespace ShapeObjectTypeDefinition {
  export type Any = ShapeObjectTypeDefinition<
    ObjectOrInterfaceDefinition,
    PropertyKeys<ObjectOrInterfaceDefinition>,
    PropertyKeys<ObjectOrInterfaceDefinition>
  >;
}

export type ShapeCompileTimeProps<
  T extends ShapeObjectTypeDefinition.Any,
> = CompileTimeMetadata<T>["props"];
