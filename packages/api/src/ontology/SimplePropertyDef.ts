/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import type { ObjectMetadata, PropertyDef } from "./ObjectTypeDefinition.js";
import type { WirePropertyTypes } from "./WirePropertyTypes.js";

export type SimplePropertyDef =
  | WirePropertyTypes
  | undefined
  | Array<WirePropertyTypes>;

export namespace SimplePropertyDef {
  export type Make<
    T extends WirePropertyTypes,
    N extends boolean | undefined,
    M extends boolean | undefined,
  > =
    // while it is cleaner to just do this as the union of two conditionals, it
    // actually makes it so that it can't be derived inline which we want
    // to keep things simple so instead of :
    // | (P["multiplicity"] extends true ? Array<P["type"]> : P["type"])
    // | (P["nullable"] extends true ? undefined : never);
    // we do:
    M extends true ? N extends true ? Array<T> | undefined
      : Array<T>
      : N extends true ? T | undefined
      : T;

  export type FromPropertyMetadata<
    P extends ObjectMetadata.Property,
  > = Make<P["type"], P["nullable"], P["multiplicity"]>;

  // exported for testing
  export type ExtractMultiplicity<
    T extends
      | WirePropertyTypes
      | undefined
      | Array<WirePropertyTypes>,
  > = NonNullable<T> extends Array<any> ? "array" : "single";

  // exported for testing
  export type ExtractWirePropertyType<
    T extends SimplePropertyDef,
  > = T extends Array<infer Z> ? NonNullable<Z> : NonNullable<T>;

  // exported for testing
  export type ExtractNullable<
    T extends SimplePropertyDef,
  > = [undefined] extends [T] ? "nullable"
    : [[undefined]] extends [T] ? "nullable"
    : "non-nullable";

  export type ToPropertyDef<S extends SimplePropertyDef> = PropertyDef<
    SimplePropertyDef.ExtractWirePropertyType<S>,
    SimplePropertyDef.ExtractNullable<S>,
    SimplePropertyDef.ExtractMultiplicity<S>
  >;

  export type ExtractRuntimeBaseType<S extends SimplePropertyDef> =
    GetClientPropertyValueFromWire<
      SimplePropertyDef.ExtractWirePropertyType<S>
    >;

  export type ToRuntimeProperty<S extends SimplePropertyDef> =
    ExtractMultiplicity<S> extends "array"
      ? ExtractNullable<S> extends "nullable"
        ? Array<ExtractRuntimeBaseType<S>> | undefined
      : Array<ExtractRuntimeBaseType<S>>
      : ExtractNullable<S> extends "nullable"
        ? ExtractRuntimeBaseType<S> | undefined
      : ExtractRuntimeBaseType<S>;
}
