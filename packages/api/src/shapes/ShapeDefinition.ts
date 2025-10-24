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
import type { DerivedProperty } from "../derivedProperties/DerivedProperty.js";
import type { InterfaceDefinition } from "../ontology/InterfaceDefinition.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import { defineShapeAsType } from "./defineShapeAsType.js";
import type { ShapeObjectTypeDefinition } from "./ShapeObjectTypeDefinition.js";

export type ShapeHelperFunction<
  T extends ObjectOrInterfaceDefinition,
  R = void,
> = (this: Osdk.Instance<T>, instance: Osdk.Instance<T>) => R;

export type ShapeHelpers<
  T extends ObjectOrInterfaceDefinition,
> = Readonly<Record<string, ShapeHelperFunction<T>>>;

type DefaultValueMap<
  T extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<T>,
> = Readonly<
  Partial<
    {
      [K in L]:
        | NonNullable<T["__DefinitionMetadata"]>["props"][K]
        | ((
          value:
            | NonNullable<T["__DefinitionMetadata"]>["props"][K]
            | null
            | undefined,
        ) => NonNullable<T["__DefinitionMetadata"]>["props"][K]);
    }
  >
>;

/**
 * Represents a predefined query shape for an object or interface type.
 * Shapes encapsulate common query patterns for reuse across components.
 */
export interface ShapeDefinition<
  T extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<T> = PropertyKeys<T>,
  MAKE_REQUIRED extends L = never,
> {
  readonly name?: string;
  readonly description?: string;
  readonly where?: WhereClause<T>;
  readonly orderBy?: { [K in L]?: "asc" | "desc" };
  readonly pageSize?: number;
  readonly streamUpdates?: boolean;
  readonly dedupeIntervalMs?: number;
  readonly select?: readonly L[];
  readonly baseObjectType?: T;
  readonly __shapeId?: string;
  readonly __requiredOrThrowProps?: readonly MAKE_REQUIRED[];
  readonly __requiredOrDropProps?: readonly MAKE_REQUIRED[];
  readonly __selectWithDefaults?: DefaultValueMap<T, L>;
  readonly __withProperties?: Readonly<DerivedProperty.Clause<T>>;
  readonly __helpers?: ShapeHelpers<T>;
  readonly __prefetchInterfaces?: readonly InterfaceDefinition[];
}

export interface ShapeDefinitionBuilder<
  T extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<T> = PropertyKeys<T>,
  MAKE_REQUIRED extends L = never,
> extends ShapeDefinition<T, L, MAKE_REQUIRED> {
  withName(name: string): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;
  withDescription(
    description: string,
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;
  withWhere(
    where: WhereClause<T>,
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;
  and(where: WhereClause<T>): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;
  or(where: WhereClause<T>): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;
  withOrderBy(
    orderBy: { [K in L]?: "asc" | "desc" },
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;
  withPageSize(size: number): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;
  withStreamUpdates(
    enabled?: boolean,
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;
  withDedupeInterval(ms: number): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;
  withSelect(...properties: L[]): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;

  extend<OTHER_REQUIRED extends L>(
    other:
      | ShapeDefinition<T, L, OTHER_REQUIRED>
      | ShapeDefinitionBuilder<T, L, OTHER_REQUIRED>,
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED | OTHER_REQUIRED>;

  requiredOrThrow<K extends L>(
    ...props: K[]
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED | K>;

  requiredOrDrop<K extends L>(
    ...props: K[]
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED | K>;

  selectWithDefaults<
    DEFAULTS extends DefaultValueMap<T, L>,
  >(
    defaults: DEFAULTS,
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED | Extract<keyof DEFAULTS, L>>;

  withProperties(
    clause: Readonly<DerivedProperty.Clause<T>>,
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;

  helpers(
    helpers: ShapeHelpers<T>,
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;

  prefetchInterfaces(
    ...interfaces: readonly InterfaceDefinition[]
  ): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED>;

  asType<BASE extends T & ObjectOrInterfaceDefinition>(
    baseType: BASE,
  ): ShapeObjectTypeDefinition<BASE, L, MAKE_REQUIRED>;
}

/**
 * A collection of predefined shapes for an object type.
 */
export type ShapeCollection<T extends ObjectOrInterfaceDefinition> = {
  readonly [key: string]:
    | ShapeDefinition<T>
    | ShapeDefinitionBuilder<T>
    | ShapeFactory<T>;
};

/**
 * Factory function for creating parameterized shapes.
 */
export type ShapeFactory<
  T extends ObjectOrInterfaceDefinition,
  P extends readonly [] = readonly [],
> = (...params: P) => ShapeDefinition<T>;

/**
 * Options that can override shape definitions when using them.
 */
export interface ShapeOverrides<
  T extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<T> = PropertyKeys<T>,
> {
  where?: WhereClause<T>;
  orderBy?: { [K in L]?: "asc" | "desc" };
  pageSize?: number;
  streamUpdates?: boolean;
  dedupeIntervalMs?: number;
}

export function defineShape<
  T extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<T> = PropertyKeys<T>,
  MAKE_REQUIRED extends L = never,
>(
  shape: Partial<ShapeDefinition<T, L, MAKE_REQUIRED>> = {},
): ShapeDefinitionBuilder<T, L, MAKE_REQUIRED> {
  const initial: ShapeDefinition<T, L, MAKE_REQUIRED> = {
    ...shape,
  };

  return createBuilder(initial);
}

export function defineShapeFactory<
  T extends ObjectOrInterfaceDefinition,
  P extends readonly [] = readonly [],
>(factory: ShapeFactory<T, P>): ShapeFactory<T, P> {
  return factory;
}

export function mergeShapeWithOverrides<
  T extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<T> = PropertyKeys<T>,
  MAKE_REQUIRED extends L = never,
>(
  shape: ShapeDefinition<T, L, MAKE_REQUIRED>,
  overrides?: ShapeOverrides<T, L>,
): ShapeDefinition<T, L, MAKE_REQUIRED> {
  if (!overrides) {
    return shape;
  }

  return {
    ...shape,
    where: overrides.where ?? shape.where,
    orderBy: overrides.orderBy ?? shape.orderBy,
    pageSize: overrides.pageSize ?? shape.pageSize,
    streamUpdates: overrides.streamUpdates ?? shape.streamUpdates,
    dedupeIntervalMs: overrides.dedupeIntervalMs ?? shape.dedupeIntervalMs,
  };
}

export function combineWhereClausesAnd<T extends ObjectOrInterfaceDefinition>(
  ...clauses: (WhereClause<T> | undefined)[]
): WhereClause<T> | undefined {
  const filtered = clauses.filter((clause): clause is WhereClause<T> =>
    clause != null
  );

  if (filtered.length === 0) {
    return undefined;
  }

  if (filtered.length === 1) {
    return filtered[0];
  }

  return { $and: filtered };
}

export function combineWhereClausesOr<T extends ObjectOrInterfaceDefinition>(
  ...clauses: (WhereClause<T> | undefined)[]
): WhereClause<T> | undefined {
  const filtered = clauses.filter((clause): clause is WhereClause<T> =>
    clause != null
  );

  if (filtered.length === 0) {
    return undefined;
  }

  if (filtered.length === 1) {
    return filtered[0];
  }

  return { $or: filtered };
}

function createBuilder<
  T extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<T>,
  R extends L,
>(
  state: ShapeDefinition<T, L, R>,
): ShapeDefinitionBuilder<T, L, R> {
  const withState = <NEXT extends L>(
    next: ShapeDefinition<T, L, NEXT>,
  ) => createBuilder<T, L, NEXT>(next);

  const mergeRequiredSets = <A extends L, B extends L>(
    first: readonly A[] | undefined,
    second: readonly B[] | undefined,
  ): ReadonlyArray<A | B> => {
    const merged: (A | B)[] = [];
    if (first) {
      merged.push(...first);
    }
    if (second) {
      merged.push(...second);
    }
    return Array.from(new Set(merged));
  };

  const mergeDefaultMaps = (
    first: DefaultValueMap<T, L> | undefined,
    second: Partial<DefaultValueMap<T, L>> | undefined,
  ): DefaultValueMap<T, L> | undefined => {
    if (!first && !second) {
      return undefined;
    }
    return Object.freeze({
      ...(first ?? {}),
      ...(second ?? {}),
    });
  };

  const mergeHelpersMaps = (
    first: ShapeHelpers<T> | undefined,
    second: ShapeHelpers<T> | undefined,
  ): ShapeHelpers<T> | undefined => {
    if (!first && !second) {
      return undefined;
    }
    return {
      ...(first ?? {}),
      ...(second ?? {}),
    };
  };

  const mergeDerivedProperties = (
    first: Readonly<DerivedProperty.Clause<T>> | undefined,
    second: Readonly<DerivedProperty.Clause<T>> | undefined,
  ): Readonly<DerivedProperty.Clause<T>> | undefined => {
    if (!first && !second) {
      return undefined;
    }
    return {
      ...(first ?? {}),
      ...(second ?? {}),
    };
  };

  const mergePrefetches = (
    first: readonly InterfaceDefinition[] | undefined,
    second: readonly InterfaceDefinition[] | undefined,
  ): readonly InterfaceDefinition[] | undefined => {
    const merged = new Set<InterfaceDefinition>();
    (first ?? []).forEach(value => merged.add(value));
    (second ?? []).forEach(value => merged.add(value));
    return merged.size > 0 ? Array.from(merged) : undefined;
  };

  const builder: ShapeDefinitionBuilder<T, L, R> = {
    ...state,

    withName(name: string) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        name,
        __shapeId: undefined,
      };
      return withState(next);
    },

    withDescription(description: string) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        description,
        __shapeId: undefined,
      };
      return withState(next);
    },

    withWhere(where: WhereClause<T>) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        where,
        __shapeId: undefined,
      };
      return withState(next);
    },

    and(where: WhereClause<T>) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        where: combineWhereClausesAnd(state.where, where),
        __shapeId: undefined,
      };
      return withState(next);
    },

    or(where: WhereClause<T>) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        where: combineWhereClausesOr(state.where, where),
        __shapeId: undefined,
      };
      return withState(next);
    },

    withOrderBy(orderBy: { [K in L]?: "asc" | "desc" }) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        orderBy,
        __shapeId: undefined,
      };
      return withState(next);
    },

    withPageSize(size: number) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        pageSize: size,
        __shapeId: undefined,
      };
      return withState(next);
    },

    withStreamUpdates(enabled = true) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        streamUpdates: enabled,
        __shapeId: undefined,
      };
      return withState(next);
    },

    withDedupeInterval(ms: number) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        dedupeIntervalMs: ms,
        __shapeId: undefined,
      };
      return withState(next);
    },

    withSelect(...properties: L[]) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        select: properties,
        __shapeId: undefined,
      };
      return withState(next);
    },

    extend<OTHER extends L>(
      other:
        | ShapeDefinition<T, L, OTHER>
        | ShapeDefinitionBuilder<T, L, OTHER>,
    ) {
      type NEXT = R | OTHER;

      const nextRequiredOrThrow = mergeRequiredSets<R, OTHER>(
        state.__requiredOrThrowProps,
        other.__requiredOrThrowProps,
      );
      const nextRequiredOrDrop = mergeRequiredSets<R, OTHER>(
        state.__requiredOrDropProps,
        other.__requiredOrDropProps,
      );
      const nextDefaults = mergeDefaultMaps(
        state.__selectWithDefaults,
        other.__selectWithDefaults,
      );
      const nextDerivedProps = mergeDerivedProperties(
        state.__withProperties,
        other.__withProperties,
      );
      const nextHelpers = mergeHelpersMaps(state.__helpers, other.__helpers);
      const nextPrefetch = mergePrefetches(
        state.__prefetchInterfaces,
        other.__prefetchInterfaces,
      );

      const next: ShapeDefinition<T, L, NEXT> = {
        ...state,
        ...other,
        where: combineWhereClausesAnd(state.where, other.where),
        select: other.select ?? state.select,
        __shapeId: undefined,
        __requiredOrThrowProps: nextRequiredOrThrow.length > 0
          ? nextRequiredOrThrow
          : undefined,
        __requiredOrDropProps: nextRequiredOrDrop.length > 0
          ? nextRequiredOrDrop
          : undefined,
        __selectWithDefaults: nextDefaults,
        __withProperties: nextDerivedProps,
        __helpers: nextHelpers,
        __prefetchInterfaces: nextPrefetch,
      };

      return withState(next);
    },

    requiredOrThrow<K extends L>(...props: K[]) {
      type NEXT = R | K;
      const nextRequired = mergeRequiredSets<R, K>(
        state.__requiredOrThrowProps,
        props,
      );

      const next: ShapeDefinition<T, L, NEXT> = {
        ...state,
        __shapeId: undefined,
        __requiredOrThrowProps: nextRequired,
      };

      return withState(next);
    },

    requiredOrDrop<K extends L>(...props: K[]) {
      type NEXT = R | K;
      const nextRequired = mergeRequiredSets<R, K>(
        state.__requiredOrDropProps,
        props,
      );

      const next: ShapeDefinition<T, L, NEXT> = {
        ...state,
        __shapeId: undefined,
        __requiredOrDropProps: nextRequired,
      };

      return withState(next);
    },

    selectWithDefaults(defaults) {
      type NEXT = R | Extract<keyof typeof defaults, L>;
      const nextDefaults = mergeDefaultMaps(
        state.__selectWithDefaults,
        defaults,
      );

      const next: ShapeDefinition<T, L, NEXT> = {
        ...state,
        __shapeId: undefined,
        __selectWithDefaults: nextDefaults,
      };

      return withState(next);
    },

    withProperties(clause) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        __shapeId: undefined,
        __withProperties: mergeDerivedProperties(
          state.__withProperties,
          clause,
        ),
      };

      return withState(next);
    },

    helpers(helpers) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        __shapeId: undefined,
        __helpers: mergeHelpersMaps(state.__helpers, helpers),
      };

      return withState(next);
    },

    prefetchInterfaces(...interfaces) {
      const next: ShapeDefinition<T, L, R> = {
        ...state,
        __shapeId: undefined,
        __prefetchInterfaces: mergePrefetches(
          state.__prefetchInterfaces,
          interfaces,
        ),
      };

      return withState(next);
    },

    asType<BASE extends T & ObjectOrInterfaceDefinition>(baseType: BASE) {
      const nextState = {
        ...state,
        baseObjectType: baseType,
      } as ShapeDefinition<BASE, L, R>;

      return defineShapeAsType(baseType, nextState);
    },
  };

  return builder;
}
