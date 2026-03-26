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

declare const ShapeLinkResultBrand: unique symbol;

/** Configuration for how a derived link is loaded at runtime. */
export interface DerivedLinkConfig {
  defer?: boolean;
}

/** The result of calling `ShapeLinkBuilder.as()`, binding a link traversal to a target shape. */
export interface ShapeLinkResult<
  TARGET_SHAPE extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  readonly __linkResultBrand: typeof ShapeLinkResultBrand;
  readonly targetShape: TARGET_SHAPE;
  readonly objectSetDef: ShapeLinkObjectSetDef;
  readonly config: DerivedLinkConfig;
}

/** A single link traversal step in a derived link's object set definition. */
export interface ShapeLinkSegment {
  readonly type: "pivotTo";
  readonly linkName: string;
  readonly sourceType?: string;
  readonly targetType?: string;
}

/** Sort clause for a derived link's result set. */
export interface ShapeLinkOrderBy {
  readonly property: string;
  readonly direction: "asc" | "desc";
}

/** A set operation (union/intersect/subtract) applied to a derived link's object set. */
export interface ShapeLinkSetOperation {
  readonly type: "union" | "intersect" | "subtract";
  readonly other: ShapeLinkObjectSetDef;
}

/** Serializable definition of a derived link's object set: link traversals, filters, ordering, and set operations. */
export interface ShapeLinkObjectSetDef {
  readonly segments: readonly ShapeLinkSegment[];
  readonly where?: WhereClause<ObjectOrInterfaceDefinition>;
  readonly orderBy?: readonly ShapeLinkOrderBy[];
  readonly limit?: number;
  readonly distinct?: boolean;
  readonly setOperations?: readonly ShapeLinkSetOperation[];
}

/** How a shape handles null values for a selected property. */
export type NullabilityOp =
  | { type: "require" }
  | { type: "dropIfNull" }
  | { type: "withDefault"; defaultValue: unknown }
  | { type: "withTransform"; transform: (value: unknown) => unknown }
  | { type: "select" };

/** Per-property configuration stored in a shape's `__props` map. */
export interface ShapePropertyConfig {
  readonly nullabilityOp: NullabilityOp;
}

/** A derived link definition stored in a shape's `__derivedLinks` array. */
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
 * Type projection from an OSDK type. `__props` is the single source of truth for property config.
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
  readonly __shapeId: string;
  readonly __debugName: string | undefined;
  readonly __baseType: BASE;
  readonly __baseTypeApiName: string;
  readonly __props: Readonly<Record<string, unknown>>;
  readonly __derivedLinks: readonly unknown[];
  readonly __selectedPropsType: SELECTED_PROPS;
  readonly __derivedLinksType: DERIVED_LINKS;
}

export type ShapeBaseType<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> = S extends ShapeDefinition<infer BASE, infer _P, infer _L> ? BASE : never;

export type ShapeSelectedProps<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> = S extends ShapeDefinition<infer _B, infer PROPS, infer _L> ? PROPS : never;

export type ShapeDerivedLinks<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> = S extends ShapeDefinition<infer _B, infer _P, infer LINKS> ? LINKS : never;

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

export type PropertyType<
  BASE extends ObjectOrInterfaceDefinition,
  K extends PropertyKeys<BASE>,
> = CompileTimeMetadata<BASE>["props"][K];

export type RequiredProperty<T> = NonNullable<T>;

export interface ShapeLinkBuilder<
  SOURCE extends ObjectOrInterfaceDefinition,
  CURRENT extends ObjectOrInterfaceDefinition,
> {
  pivotTo<L extends LinkNames<CURRENT>>(
    link: L,
  ): ShapeLinkBuilder<SOURCE, LinkedType<CURRENT, L>>;

  where(clause: WhereClause<CURRENT>): ShapeLinkBuilder<SOURCE, CURRENT>;

  union(
    ...others: ShapeLinkBuilder<SOURCE, CURRENT>[]
  ): ShapeLinkBuilder<SOURCE, CURRENT>;

  intersect(
    ...others: ShapeLinkBuilder<SOURCE, CURRENT>[]
  ): ShapeLinkBuilder<SOURCE, CURRENT>;

  subtract(
    ...others: ShapeLinkBuilder<SOURCE, CURRENT>[]
  ): ShapeLinkBuilder<SOURCE, CURRENT>;

  orderBy<K extends PropertyKeys<CURRENT>>(
    property: K,
    direction?: "asc" | "desc",
  ): ShapeLinkBuilder<SOURCE, CURRENT>;

  limit(n: number): ShapeLinkBuilder<SOURCE, CURRENT>;

  distinct(): ShapeLinkBuilder<SOURCE, CURRENT>;

  as<TARGET_SHAPE extends ShapeDefinition<CURRENT>>(
    shape: TARGET_SHAPE,
    config?: DerivedLinkConfig,
  ): ShapeLinkResult<TARGET_SHAPE>;

  readonly $primaryKey: symbol;
}

export interface ShapeLinkBuilderInternal
  extends
    ShapeLinkBuilder<ObjectOrInterfaceDefinition, ObjectOrInterfaceDefinition>
{
  toObjectSetDef(): ShapeLinkObjectSetDef;
}

export interface ShapeBuilder<
  BASE extends ObjectOrInterfaceDefinition,
  PROPS extends Record<string, unknown> = {},
  LINKS extends Record<
    string,
    ShapeDefinition<ObjectOrInterfaceDefinition>
  > = {},
> {
  select<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>>(
    ...props: K[]
  ): ShapeBuilder<
    BASE,
    PROPS & { [P in K]: PropertyType<BASE, P> },
    LINKS
  >;

  require<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>>(
    ...props: K[]
  ): ShapeBuilder<
    BASE,
    PROPS & { [P in K]: RequiredProperty<PropertyType<BASE, P>> },
    LINKS
  >;

  dropIfNull<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>>(
    ...props: K[]
  ): ShapeBuilder<
    BASE,
    PROPS & { [P in K]: RequiredProperty<PropertyType<BASE, P>> },
    LINKS
  >;

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

  withTransform<
    K extends Exclude<PropertyKeys<BASE>, keyof PROPS>,
    R,
  >(
    prop: K,
    transform: (value: PropertyType<BASE, K>) => R,
  ): ShapeBuilder<BASE, PROPS & { [P in K]: R }, LINKS>;

  deriveLink<
    NAME extends string,
    TARGET_SHAPE extends ShapeDefinition<ObjectOrInterfaceDefinition>,
  >(
    name: NAME,
    builder: (
      linkBuilder: ShapeLinkBuilder<BASE, BASE>,
    ) => ShapeLinkResult<TARGET_SHAPE>,
  ): ShapeBuilder<BASE, PROPS, LINKS & { [K in NAME]: TARGET_SHAPE }>;

  build(): ShapeDefinition<BASE, PROPS, LINKS>;
}

export interface LinkLoadConfig {
  pageSize?: number;
  autoFetchMore?: boolean | number;
  streamUpdates?: boolean;
  defer?: boolean;
}

export interface LinkStatus {
  isLoading: boolean;
  error: Error | undefined;
  hasMore: boolean;
  fetchMore: () => Promise<void>;
}

export interface NullabilityViolation {
  property: string;
  primaryKey: unknown;
  constraint: "require" | "dropIfNull" | "transformError";
}

export class ShapeNullabilityError extends Error {
  constructor(
    public readonly shape: ShapeDefinition<ObjectOrInterfaceDefinition>,
    public readonly violations: readonly NullabilityViolation[],
  ) {
    const props = violations.map((v) => v.property).join(", ");
    // shape IDs are 8-char hex strings, so this is the full ID
    const shapeName = shape.__debugName ?? shape.__shapeId.slice(0, 8);
    super(
      `Shape "${shapeName}" requires these properties to be non-null: ${props}`,
    );
    this.name = "ShapeNullabilityError";
  }
}
