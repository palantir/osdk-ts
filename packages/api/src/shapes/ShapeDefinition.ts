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

import type { WhereClause } from "../aggregate/WhereClause.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { OsdkBase } from "../OsdkBase.js";
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";

/**
 * Brand symbol for shape definitions to ensure type safety.
 */
export const SourcePrimaryKeySymbol: unique symbol = Symbol.for(
  "osdk.query.$sourcePk",
);

const LegacyShapesSymbol = Symbol.for("osdk.shapes.$primaryKey");

export function isSourcePkSymbol(value: unknown): value is symbol {
  return (
    typeof value === "symbol"
    && (value === SourcePrimaryKeySymbol || value === LegacyShapesSymbol)
  );
}

declare const ShapeDefinitionBrand: unique symbol;

/**
 * Brand symbol for shape link results.
 */
declare const ShapeLinkResultBrand: unique symbol;

/**
 * Configuration for a derived link in a shape.
 */
export interface DerivedLinkConfig {
  /** Whether this link should be deferred (loaded on demand) by default */
  defer?: boolean;
}

/**
 * Result of building a derived link definition.
 */
export interface ShapeLinkResult<
  TARGET_SHAPE extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  readonly __linkResultBrand: typeof ShapeLinkResultBrand;
  readonly targetShape: TARGET_SHAPE;
  readonly objectSetDef: ShapeLinkObjectSetDef;
  readonly config: DerivedLinkConfig;
}

export interface ShapeLinkSegment {
  readonly type: "pivotTo";
  readonly linkName: string;
  readonly sourceType?: string;
  readonly targetType?: string;
}

export interface ShapeLinkOrderBy {
  readonly property: string;
  readonly direction: "asc" | "desc";
}

export interface ShapeLinkSetOperation {
  readonly type: "union" | "intersect" | "subtract";
  readonly other: ShapeLinkObjectSetDef;
}

export interface ShapeLinkObjectSetDef {
  readonly segments: readonly ShapeLinkSegment[];
  readonly where?: WhereClause<ObjectOrInterfaceDefinition>;
  readonly whereCallback?: (
    vars: Record<string, unknown>,
  ) => WhereClause<ObjectOrInterfaceDefinition>;
  readonly orderBy?: readonly ShapeLinkOrderBy[];
  readonly limit?: number;
  readonly distinct?: boolean;
  readonly setOperations?: readonly ShapeLinkSetOperation[];
}

/**
 * Nullability operation applied to a property.
 */
export type NullabilityOp =
  | { type: "require" }
  | { type: "dropIfNull" }
  | { type: "withDefault"; defaultValue: unknown }
  | { type: "withTransform"; transform: (value: unknown) => unknown }
  | { type: "select" };

/**
 * Internal representation of property configuration in a shape.
 */
export interface ShapePropertyConfig {
  readonly nullabilityOp: NullabilityOp;
}

/**
 * Internal representation of a derived link in a shape.
 */
export interface ShapeDerivedLinkDef<
  TARGET_SHAPE extends ShapeDefinition<ObjectOrInterfaceDefinition> =
    ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  readonly name: string;
  readonly objectSetDef: ShapeLinkObjectSetDef;
  readonly targetShape: TARGET_SHAPE;
  readonly config: DerivedLinkConfig;
}

/**
 * Core shape definition that captures the projection from an OSDK type.
 *
 * Property configuration is stored in `__props`, which is the single source of truth.
 * All property-related information (required, dropIfNull, defaults, transforms) can be
 * derived from the `nullabilityOp` field in each property's config.
 *
 * @typeParam BASE - The base ObjectTypeDefinition or InterfaceDefinition
 * @typeParam SELECTED_PROPS - Record of selected properties and their transformed types
 * @typeParam DERIVED_LINKS - Record of derived link names to their result types
 */
export interface ShapeDefinition<
  BASE extends ObjectOrInterfaceDefinition,
  SELECTED_PROPS extends Record<string, unknown> = {},
  DERIVED_LINKS extends Record<
    string,
    ShapeDefinition<ObjectOrInterfaceDefinition>
  > = {},
> {
  readonly [ShapeDefinitionBrand]: true;

  /** Content-based unique identifier for cache key stability */
  readonly __shapeId: string;

  /** Optional debug name for DevTools */
  readonly __debugName: string | undefined;

  /** The base object type this shape is derived from */
  readonly __baseType: BASE;

  /** API name of the base type */
  readonly __baseTypeApiName: string;

  /**
   * Property configurations (nullability ops, transforms).
   * This is the single source of truth for all property-related information.
   * - Keys are the selected property names
   * - Each config contains the nullabilityOp with type-specific data (defaultValue, transform)
   */
  readonly __props: Readonly<Record<string, ShapePropertyConfig>>;

  /** Derived link definitions */
  readonly __derivedLinks: readonly ShapeDerivedLinkDef[];

  /** Phantom type markers for TypeScript inference */
  readonly __selectedPropsType: SELECTED_PROPS;
  readonly __derivedLinksType: DERIVED_LINKS;
}

/**
 * Extracts the base type from a ShapeDefinition.
 */
export type ShapeBaseType<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> = S extends ShapeDefinition<infer BASE, infer _P, infer _L> ? BASE : never;

/**
 * Extracts the selected props type from a ShapeDefinition.
 */
export type ShapeSelectedProps<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> = S extends ShapeDefinition<infer _B, infer PROPS, infer _L> ? PROPS : never;

/**
 * Extracts the derived links type from a ShapeDefinition.
 */
export type ShapeDerivedLinks<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> = S extends ShapeDefinition<infer _B, infer _P, infer LINKS> ? LINKS : never;

/**
 * Gets the instance type produced by a shape.
 * Combines base OSDK instance properties with shape transformations.
 */
export type ShapeInstance<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> = S extends ShapeDefinition<infer BASE, infer PROPS, infer LINKS> ?
    & OsdkBase<BASE>
    & { readonly $rid: string }
    & PROPS
    & {
      [K in keyof LINKS]: LINKS[K] extends
        ShapeDefinition<ObjectOrInterfaceDefinition> ? ShapeInstance<LINKS[K]>[]
        : never;
    }
  : never;

/**
 * Type helper to get property type from a base type.
 */
export type PropertyType<
  BASE extends ObjectOrInterfaceDefinition,
  K extends PropertyKeys<BASE>,
> = CompileTimeMetadata<BASE>["props"][K];

/**
 * Type helper to make a property non-nullable.
 */
export type RequiredProperty<T> = NonNullable<T>;

/**
 * Builder interface for creating derived links with m:m support.
 * Unlike DerivedProperty.Builder, this has no m:m restrictions.
 */
export interface ShapeLinkBuilder<
  SOURCE extends ObjectOrInterfaceDefinition,
  CURRENT extends ObjectOrInterfaceDefinition,
> {
  /**
   * Pivot to a linked type. No m:m restrictions - any link can be followed.
   */
  pivotTo<L extends LinkNames<CURRENT>>(
    link: L,
  ): ShapeLinkBuilder<SOURCE, LinkedType<CURRENT, L>>;

  /**
   * Filter the current object set.
   */
  where(clause: WhereClause<CURRENT>): ShapeLinkBuilder<SOURCE, CURRENT>;

  /**
   * Union with other link builders of the same target type.
   */
  union(
    ...others: ShapeLinkBuilder<SOURCE, CURRENT>[]
  ): ShapeLinkBuilder<SOURCE, CURRENT>;

  /**
   * Intersect with other link builders of the same target type.
   */
  intersect(
    ...others: ShapeLinkBuilder<SOURCE, CURRENT>[]
  ): ShapeLinkBuilder<SOURCE, CURRENT>;

  /**
   * Subtract other link builders from this one.
   */
  subtract(
    ...others: ShapeLinkBuilder<SOURCE, CURRENT>[]
  ): ShapeLinkBuilder<SOURCE, CURRENT>;

  /**
   * Order the results.
   */
  orderBy<K extends PropertyKeys<CURRENT>>(
    property: K,
    direction?: "asc" | "desc",
  ): ShapeLinkBuilder<SOURCE, CURRENT>;

  /**
   * Limit the number of results.
   */
  limit(n: number): ShapeLinkBuilder<SOURCE, CURRENT>;

  /**
   * Remove duplicate objects from the result.
   */
  distinct(): ShapeLinkBuilder<SOURCE, CURRENT>;

  /**
   * Terminal operation: apply a shape to the results.
   */
  as<TARGET_SHAPE extends ShapeDefinition<CURRENT>>(
    shape: TARGET_SHAPE,
    config?: DerivedLinkConfig,
  ): ShapeLinkResult<TARGET_SHAPE>;

  /**
   * Symbol for referencing the source object's primary key in where clauses.
   */
  readonly $primaryKey: symbol;
}

/**
 * Internal interface exposing toObjectSetDef() for use by configToShapeDefinition.
 * At runtime, ShapeLinkBuilderImpl satisfies this interface.
 */
export interface ShapeLinkBuilderInternal
  extends
    ShapeLinkBuilder<ObjectOrInterfaceDefinition, ObjectOrInterfaceDefinition>
{
  toObjectSetDef(): ShapeLinkObjectSetDef;
}

/**
 * Chainable builder for creating shape definitions.
 * Each method returns a new builder with updated type information.
 */
export interface ShapeBuilder<
  BASE extends ObjectOrInterfaceDefinition,
  PROPS extends Record<string, unknown> = {},
  LINKS extends Record<
    string,
    ShapeDefinition<ObjectOrInterfaceDefinition>
  > = {},
> {
  /**
   * Select properties without any nullability transformation.
   * Properties keep their original type (T | undefined).
   */
  select<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>>(
    ...props: K[]
  ): ShapeBuilder<
    BASE,
    PROPS & { [P in K]: PropertyType<BASE, P> },
    LINKS
  >;

  /**
   * Mark properties as required. Throws an error if any are null.
   * Removes | undefined from the property type.
   */
  require<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>>(
    ...props: K[]
  ): ShapeBuilder<
    BASE,
    PROPS & { [P in K]: RequiredProperty<PropertyType<BASE, P>> },
    LINKS
  >;

  /**
   * Filter out objects where these properties are null.
   * Removes | undefined from the property type.
   */
  dropIfNull<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>>(
    ...props: K[]
  ): ShapeBuilder<
    BASE,
    PROPS & { [P in K]: RequiredProperty<PropertyType<BASE, P>> },
    LINKS
  >;

  /**
   * Provide a default value for a property when it's null.
   * The property type becomes the default value's type.
   */
  withDefault<
    K extends Exclude<PropertyKeys<BASE>, keyof PROPS>,
    V extends NonNullable<PropertyType<BASE, K>>,
  >(
    prop: K,
    defaultValue: V,
  ): ShapeBuilder<
    BASE,
    PROPS & { [P in K]: NonNullable<PropertyType<BASE, P>> },
    LINKS
  >;

  /**
   * Transform a property value using a custom function.
   * The property type becomes the return type of the transform function.
   */
  withTransform<
    K extends Exclude<PropertyKeys<BASE>, keyof PROPS>,
    R,
  >(
    prop: K,
    transform: (value: PropertyType<BASE, K>) => R,
  ): ShapeBuilder<BASE, PROPS & { [P in K]: R }, LINKS>;

  /**
   * Define a derived link that loads related objects via ObjectSet operations.
   * Unlike DerivedProperty, this has no m:m restrictions.
   */
  deriveLink<
    NAME extends string,
    TARGET_SHAPE extends ShapeDefinition<ObjectOrInterfaceDefinition>,
  >(
    name: NAME,
    builder: (
      linkBuilder: ShapeLinkBuilder<BASE, BASE>,
    ) => ShapeLinkResult<TARGET_SHAPE>,
  ): ShapeBuilder<BASE, PROPS, LINKS & { [K in NAME]: TARGET_SHAPE }>;

  /**
   * Finalize the shape definition.
   */
  build(): ShapeDefinition<BASE, PROPS, LINKS>;
}

/**
 * Configuration for loading a derived link.
 */
export interface LinkLoadConfig {
  /** Number of items per page */
  pageSize?: number;

  /** Automatically fetch more pages (true = all, number = up to N) */
  autoFetchMore?: boolean | number;

  /** Enable WebSocket subscription for updates */
  streamUpdates?: boolean;

  /** Override the shape's default defer setting */
  defer?: boolean;
}

/**
 * Status for a single derived link.
 */
export interface LinkStatus {
  isLoading: boolean;
  error: Error | undefined;
  hasMore: boolean;
  fetchMore: () => Promise<void>;
}

/**
 * Details about a nullability constraint violation.
 */
export interface NullabilityViolation {
  property: string;
  primaryKey: unknown;
  constraint: "require" | "dropIfNull" | "transformError";
}

/**
 * Error thrown when required properties are null.
 */
export class ShapeNullabilityError extends Error {
  constructor(
    public readonly shape: ShapeDefinition<ObjectOrInterfaceDefinition>,
    public readonly violations: readonly NullabilityViolation[],
  ) {
    const props = violations.map((v) => v.property).join(", ");
    const shapeName = shape.__debugName ?? shape.__shapeId.slice(0, 8);
    super(`Shape "${shapeName}" requires non-null: ${props}`);
    this.name = "ShapeNullabilityError";
  }
}
