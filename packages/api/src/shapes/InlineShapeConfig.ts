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

import type { LinkTraversal } from "../links/LinkDef.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type {
  PropertyType,
  RequiredProperty,
  ShapeDefinition,
  ShapeLinkBuilder,
} from "./ShapeDefinition.js";

/** A projected link traversal token usable as a `follow` entry, regardless of source/target node or cardinality. */
export type AnyProjectedTraversal = LinkTraversal<
  ObjectOrInterfaceDefinition,
  ObjectOrInterfaceDefinition,
  "one" | "many"
>;

export interface InlineShapeConfig<
  BASE extends ObjectOrInterfaceDefinition,
> {
  readonly require?: readonly PropertyKeys<BASE>[];
  readonly select?: readonly PropertyKeys<BASE>[];
  readonly dropIfNull?: readonly PropertyKeys<BASE>[];
  readonly defaults?: {
    readonly [K in PropertyKeys<BASE>]?: NonNullable<PropertyType<BASE, K>>;
  };
  /**
   * Substitute a value when the source property is null. Behaves like
   * {@link InlineShapeConfig.defaults} but keeps the substitution visible via
   * `$missingFields` on the resulting instance.
   */
  readonly fallbacks?: {
    readonly [K in PropertyKeys<BASE>]?: NonNullable<PropertyType<BASE, K>>;
  };
  readonly transforms?: {
    readonly [K in PropertyKeys<BASE>]?: (
      value: PropertyType<BASE, K>,
    ) => unknown;
  };
  readonly links?: Record<string, InlineLinkConfig<BASE>>;
  /**
   * Token-driven derived links. Each value is a projected `LinkTraversal`
   * (`Type.links.X.project(Slim)`, `.then(...).project(...)`, or
   * `.recursive(...).project(...)`) compiled into a `ShapeDerivedLinkDef`.
   */
  readonly follow?: Record<string, AnyProjectedTraversal>;
}

export interface InlineLinkConfig<
  SOURCE extends ObjectOrInterfaceDefinition,
> {
  readonly via: (
    builder: ShapeLinkBuilder<SOURCE, SOURCE>,
  ) => ShapeLinkBuilder<SOURCE, ObjectOrInterfaceDefinition>;
  readonly target: ShapeDefinition<ObjectOrInterfaceDefinition>;
  readonly defer?: boolean;
}

// --- Type-level inference helpers ---

type ArrayElement<T> = T extends readonly (infer E)[] ? E : never;

export type InferInlineProps<
  BASE extends ObjectOrInterfaceDefinition,
  C extends InlineShapeConfig<BASE>,
> =
  & {
    [K in ArrayElement<C["require"]> & PropertyKeys<BASE>]: RequiredProperty<
      PropertyType<BASE, K>
    >;
  }
  & {
    [K in ArrayElement<C["select"]> & PropertyKeys<BASE>]: PropertyType<
      BASE,
      K
    >;
  }
  & {
    [K in ArrayElement<C["dropIfNull"]> & PropertyKeys<BASE>]: RequiredProperty<
      PropertyType<BASE, K>
    >;
  }
  & {
    [K in keyof C["defaults"] & PropertyKeys<BASE>]: NonNullable<
      PropertyType<BASE, K>
    >;
  }
  & {
    [K in keyof C["fallbacks"] & PropertyKeys<BASE>]: NonNullable<
      PropertyType<BASE, K>
    >;
  }
  & {
    [K in keyof C["transforms"] & PropertyKeys<BASE>]: C["transforms"] extends
      Record<K, (v: PropertyType<BASE, K>) => infer R> ? R : never;
  };

export type InferInlineLinks<
  BASE extends ObjectOrInterfaceDefinition,
  C extends InlineShapeConfig<BASE>,
> = C["links"] extends Record<string, InlineLinkConfig<BASE>> ? {
    [K in keyof C["links"] & string]: C["links"][K]["target"] extends
      ShapeDefinition<ObjectOrInterfaceDefinition> ? C["links"][K]["target"]
      : ShapeDefinition<ObjectOrInterfaceDefinition>;
  }
  : {};

export type InferInlineFollow<
  BASE extends ObjectOrInterfaceDefinition,
  C extends InlineShapeConfig<BASE>,
> = C["follow"] extends Record<string, AnyProjectedTraversal> ? {
    [K in keyof C["follow"] & string]: NonNullable<
      C["follow"][K]["__projectedShape"]
    > extends ShapeDefinition<ObjectOrInterfaceDefinition>
      ? NonNullable<C["follow"][K]["__projectedShape"]>
      : ShapeDefinition<ObjectOrInterfaceDefinition>;
  }
  : {};

export type InferShapeDefinition<
  BASE extends ObjectOrInterfaceDefinition,
  C extends InlineShapeConfig<BASE>,
> = ShapeDefinition<
  BASE,
  InferInlineProps<BASE, C>,
  InferInlineLinks<BASE, C> & InferInlineFollow<BASE, C>
>;
