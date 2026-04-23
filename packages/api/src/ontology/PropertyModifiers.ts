/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { GetClientPropertyValueFromWire } from "../mapping/PropertyValueMapping.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "./ObjectOrInterface.js";
import type {
  CompileTimeMetadata,
  ObjectMetadata,
} from "./ObjectTypeDefinition.js";
import type { WirePropertyTypes } from "./WirePropertyTypes.js";

/** Modifier values users can specify */
export type PropertyModifierValue =
  | "applyMainValue" // For structs - returns struct with only main value fields
  | "applyReducers" // For arrays - returns single element type (not array)
  | "applyReducersAndExtractMainValue"; // For arrays of structs - returns single element with only main value fields

/**
 * Extract the main value struct type from a property.
 * Returns a struct containing only the fields specified in mainValue.fields.
 */
export type MainValueTypeOf<P extends ObjectMetadata.Property> =
  P["mainValue"] extends { fields: readonly (infer F extends string)[] }
    ? P["type"] extends Record<string, WirePropertyTypes> ? {
        [K in F & keyof P["type"]]: GetClientPropertyValueFromWire<
          P["type"][K]
        >;
      }
    : never
    : never;

/**
 * Extract the reduced type from an array property.
 * The reduced type is the element type (non-array).
 */
export type ReducedTypeOf<P extends ObjectMetadata.Property> =
  P["hasReducers"] extends true
    ? P["type"] extends WirePropertyTypes
      ? GetClientPropertyValueFromWire<P["type"]>
    : never
    : never;

/** Get keys of properties that have mainValue defined */
export type PropsWithMainValue<Q extends ObjectOrInterfaceDefinition> = {
  [K in PropertyKeys<Q>]: CompileTimeMetadata<Q>["properties"][K] extends
    { mainValue: { fields: readonly string[] } } ? K
    : never;
}[PropertyKeys<Q>];

/** Get keys of properties that have reducers defined */
export type PropsWithReducers<Q extends ObjectOrInterfaceDefinition> = {
  [K in PropertyKeys<Q>]: CompileTimeMetadata<Q>["properties"][K] extends
    { hasReducers: true } ? K
    : never;
}[PropertyKeys<Q>];

/**
 * Apply a single modifier to a property type.
 * - "applyMainValue" -> returns struct with only main value fields
 * - "applyReducers" -> returns single element type (not array)
 * - "applyReducersAndExtractMainValue" -> returns single element with only main value fields
 */
export type ApplyModifierToProperty<
  P extends ObjectMetadata.Property,
  M extends PropertyModifierValue,
> = M extends "applyMainValue"
  ? MainValueTypeOf<P> | (P["nullable"] extends true ? undefined : never)
  : M extends "applyReducers"
    ? ReducedTypeOf<P> | (P["nullable"] extends true ? undefined : never)
  : M extends "applyReducersAndExtractMainValue"
    ? MainValueOfReduced<P> | (P["nullable"] extends true ? undefined : never)
  : never;

type MainValueOfReduced<P extends ObjectMetadata.Property> =
  P["mainValue"] extends { fields: readonly (infer F extends string)[] }
    ? P["type"] extends Record<string, WirePropertyTypes> ? {
        [K in F & keyof P["type"]]: GetClientPropertyValueFromWire<
          P["type"][K]
        >;
      }
    : never
    : never;

export type PropsWithBoth<Q extends ObjectOrInterfaceDefinition> =
  & PropsWithMainValue<Q>
  & PropsWithReducers<Q>;

export type PropsWithOnlyMainValue<Q extends ObjectOrInterfaceDefinition> =
  Exclude<PropsWithMainValue<Q>, PropsWithReducers<Q>>;

export type PropsWithOnlyReducers<Q extends ObjectOrInterfaceDefinition> =
  Exclude<PropsWithReducers<Q>, PropsWithMainValue<Q>>;

export type ApplyModifiersArg<
  Q extends ObjectOrInterfaceDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
> =
  & {
    [P in PropsWithOnlyMainValue<Q>]?: "applyMainValue";
  }
  & {
    [P in PropsWithOnlyReducers<Q>]?: "applyReducers";
  }
  & {
    [P in PropsWithBoth<Q>]?:
      | "applyMainValue"
      | "applyReducers"
      | "applyReducersAndExtractMainValue";
  };

export type ApplyModifiersToProps<
  Q extends ObjectOrInterfaceDefinition,
  MODIFIERS extends Record<string, PropertyModifierValue>,
> = {
  [K in PropertyKeys<Q>]: K extends keyof MODIFIERS
    ? MODIFIERS[K] extends PropertyModifierValue ? ApplyModifierToProperty<
        CompileTimeMetadata<Q>["properties"][K],
        MODIFIERS[K]
      >
    : CompileTimeMetadata<Q>["props"][K]
    : CompileTimeMetadata<Q>["props"][K];
};
