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
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";
import { computeShapeId } from "./computeShapeId.js";
import { SourcePrimaryKeySymbol } from "./ShapeDefinition.js";
import type {
  DerivedLinkConfig,
  NullabilityOp,
  PropertyType,
  RequiredProperty,
  ShapeBuilder,
  ShapeDefinition,
  ShapeDerivedLinkDef,
  ShapeLinkBuilder,
  ShapeLinkObjectSetDef,
  ShapeLinkOrderBy,
  ShapeLinkResult,
  ShapeLinkSegment,
  ShapeLinkSetOperation,
  ShapePropertyConfig,
} from "./ShapeDefinition.js";

interface ShapeBuilderState {
  readonly baseType: ObjectOrInterfaceDefinition;
  readonly baseTypeApiName: string;
  readonly debugName: string | undefined;
  readonly props: Record<string, ShapePropertyConfig>;
  readonly derivedLinks: ShapeDerivedLinkDef[];
}

class ShapeBuilderImpl<
  BASE extends ObjectOrInterfaceDefinition,
  PROPS extends Record<string, unknown>,
  LINKS extends Record<string, ShapeDefinition<ObjectOrInterfaceDefinition>>,
> implements ShapeBuilder<BASE, PROPS, LINKS> {
  readonly #state: ShapeBuilderState;

  constructor(state: ShapeBuilderState) {
    this.#state = state;
  }

  #addProps(
    props: string[],
    type: NullabilityOp["type"],
  ): Record<string, ShapePropertyConfig> {
    const newProps = { ...this.#state.props };
    for (const prop of props) {
      newProps[prop] = { nullabilityOp: { type } };
    }
    return newProps;
  }

  select<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>>(
    ...props: K[]
  ): ShapeBuilder<BASE, PROPS & { [P in K]: PropertyType<BASE, P> }, LINKS> {
    return new ShapeBuilderImpl({
      ...this.#state,
      props: this.#addProps(props as string[], "select"),
    });
  }

  require<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>>(
    ...props: K[]
  ): ShapeBuilder<
    BASE,
    PROPS & { [P in K]: RequiredProperty<PropertyType<BASE, P>> },
    LINKS
  > {
    return new ShapeBuilderImpl({
      ...this.#state,
      props: this.#addProps(props as string[], "require"),
    });
  }

  dropIfNull<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>>(
    ...props: K[]
  ): ShapeBuilder<
    BASE,
    PROPS & { [P in K]: RequiredProperty<PropertyType<BASE, P>> },
    LINKS
  > {
    return new ShapeBuilderImpl({
      ...this.#state,
      props: this.#addProps(props as string[], "dropIfNull"),
    });
  }

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
  > {
    return new ShapeBuilderImpl({
      ...this.#state,
      props: {
        ...this.#state.props,
        [prop as string]: {
          nullabilityOp: { type: "withDefault", defaultValue } as NullabilityOp,
        },
      },
    });
  }

  withTransform<K extends Exclude<PropertyKeys<BASE>, keyof PROPS>, R>(
    prop: K,
    transform: (value: PropertyType<BASE, K>) => R,
  ): ShapeBuilder<BASE, PROPS & { [P in K]: R }, LINKS> {
    return new ShapeBuilderImpl({
      ...this.#state,
      props: {
        ...this.#state.props,
        [prop as string]: {
          nullabilityOp: { type: "withTransform", transform } as NullabilityOp,
        },
      },
    });
  }

  deriveLink<
    NAME extends string,
    TARGET_SHAPE extends ShapeDefinition<ObjectOrInterfaceDefinition>,
  >(
    name: NAME,
    builder: (
      linkBuilder: ShapeLinkBuilder<BASE, BASE>,
    ) => ShapeLinkResult<TARGET_SHAPE>,
  ): ShapeBuilder<BASE, PROPS, LINKS & { [K in NAME]: TARGET_SHAPE }> {
    const linkBuilder = createShapeLinkBuilder<BASE, BASE>(
      this.#state.baseTypeApiName,
    );
    const linkResult = builder(linkBuilder);
    return new ShapeBuilderImpl({
      ...this.#state,
      props: { ...this.#state.props },
      derivedLinks: [
        ...this.#state.derivedLinks,
        {
          name,
          objectSetDef: linkResult.objectSetDef,
          targetShape: linkResult.targetShape,
          config: linkResult.config,
        },
      ],
    });
  }

  build(): ShapeDefinition<BASE, PROPS, LINKS> {
    const shapeId = computeShapeId({
      baseTypeApiName: this.#state.baseTypeApiName,
      props: this.#state.props,
      derivedLinks: this.#state.derivedLinks,
    });

    return {
      __shapeId: shapeId,
      __debugName: this.#state.debugName,
      __baseType: this.#state.baseType as BASE,
      __baseTypeApiName: this.#state.baseTypeApiName,
      __props: Object.freeze({ ...this.#state.props }),
      __derivedLinks: Object.freeze([...this.#state.derivedLinks]),
      __selectedPropsType: {} as PROPS,
      __derivedLinksType: {} as LINKS,
    } as ShapeDefinition<BASE, PROPS, LINKS>;
  }
}

interface ShapeLinkBuilderState {
  readonly sourceTypeApiName: string;
  readonly currentTypeApiName: string;
  readonly segments: ShapeLinkSegment[];
  readonly where?: WhereClause<ObjectOrInterfaceDefinition>;
  readonly orderBy: ShapeLinkOrderBy[];
  readonly limit?: number;
  readonly distinct: boolean;
  readonly setOperations: ShapeLinkSetOperation[];
}

class ShapeLinkBuilderImpl<
  SOURCE extends ObjectOrInterfaceDefinition,
  CURRENT extends ObjectOrInterfaceDefinition,
> implements ShapeLinkBuilder<SOURCE, CURRENT> {
  readonly #state: ShapeLinkBuilderState;
  readonly $primaryKey: symbol = SourcePrimaryKeySymbol;

  constructor(state: ShapeLinkBuilderState) {
    this.#state = state;
  }

  pivotTo<L extends LinkNames<CURRENT>>(
    link: L,
  ): ShapeLinkBuilder<SOURCE, LinkedType<CURRENT, L>> {
    const newSegments: ShapeLinkSegment[] = [
      ...this.#state.segments,
      {
        type: "pivotTo",
        linkName: link as string,
        sourceType: this.#state.currentTypeApiName,
        // targetType is resolved at link execution time when link metadata is available
      },
    ];

    return new ShapeLinkBuilderImpl({
      ...this.#state,
      segments: newSegments,
      // currentTypeApiName is a hint for debugging; actual type resolution happens at execution
      currentTypeApiName: `${this.#state.currentTypeApiName}.${link as string}`,
    });
  }

  /** Sets the where filter for this link. Calling multiple times replaces the previous clause (last-write-wins). */
  where(clause: WhereClause<CURRENT>): ShapeLinkBuilder<SOURCE, CURRENT> {
    return new ShapeLinkBuilderImpl({
      ...this.#state,
      where: clause as WhereClause<ObjectOrInterfaceDefinition>,
    });
  }

  #setOp(
    type: "union" | "intersect" | "subtract",
    others: ShapeLinkBuilder<SOURCE, CURRENT>[],
  ): ShapeLinkBuilder<SOURCE, CURRENT> {
    return new ShapeLinkBuilderImpl({
      ...this.#state,
      setOperations: [
        ...this.#state.setOperations,
        ...others.map((other) => ({
          type,
          other: (other as ShapeLinkBuilderImpl<SOURCE, CURRENT>)
            .toObjectSetDef(),
        })),
      ],
    });
  }

  union(
    ...others: ShapeLinkBuilder<SOURCE, CURRENT>[]
  ): ShapeLinkBuilder<SOURCE, CURRENT> {
    return this.#setOp("union", others);
  }

  intersect(
    ...others: ShapeLinkBuilder<SOURCE, CURRENT>[]
  ): ShapeLinkBuilder<SOURCE, CURRENT> {
    return this.#setOp("intersect", others);
  }

  subtract(
    ...others: ShapeLinkBuilder<SOURCE, CURRENT>[]
  ): ShapeLinkBuilder<SOURCE, CURRENT> {
    return this.#setOp("subtract", others);
  }

  orderBy<K extends PropertyKeys<CURRENT>>(
    property: K,
    direction: "asc" | "desc" = "asc",
  ): ShapeLinkBuilder<SOURCE, CURRENT> {
    return new ShapeLinkBuilderImpl({
      ...this.#state,
      orderBy: [
        ...this.#state.orderBy,
        { property: property as string, direction },
      ],
    });
  }

  limit(n: number): ShapeLinkBuilder<SOURCE, CURRENT> {
    if (!Number.isFinite(n) || n <= 0) {
      throw new Error(
        `ShapeLinkBuilder.limit() requires a positive finite number, got: ${n}`,
      );
    }
    return new ShapeLinkBuilderImpl({
      ...this.#state,
      limit: n,
    });
  }

  distinct(): ShapeLinkBuilder<SOURCE, CURRENT> {
    return new ShapeLinkBuilderImpl({
      ...this.#state,
      distinct: true,
    });
  }

  as<TARGET_SHAPE extends ShapeDefinition<CURRENT>>(
    shape: TARGET_SHAPE,
    config: DerivedLinkConfig = {},
  ): ShapeLinkResult<TARGET_SHAPE> {
    // The brand is a compile-time only marker, at runtime it's just undefined
    return {
      targetShape: shape,
      objectSetDef: this.toObjectSetDef(),
      config,
    } as ShapeLinkResult<TARGET_SHAPE>;
  }

  toObjectSetDef(): ShapeLinkObjectSetDef {
    return {
      segments: Object.freeze([...this.#state.segments]),
      where: this.#state.where,
      orderBy: this.#state.orderBy.length > 0
        ? Object.freeze([...this.#state.orderBy])
        : undefined,
      limit: this.#state.limit,
      distinct: this.#state.distinct || undefined,
      setOperations: this.#state.setOperations.length > 0
        ? Object.freeze([...this.#state.setOperations])
        : undefined,
    };
  }
}

export function createShapeLinkBuilder<
  SOURCE extends ObjectOrInterfaceDefinition,
  CURRENT extends ObjectOrInterfaceDefinition,
>(sourceTypeApiName: string): ShapeLinkBuilder<SOURCE, CURRENT> {
  return new ShapeLinkBuilderImpl({
    sourceTypeApiName,
    currentTypeApiName: sourceTypeApiName,
    segments: [],
    orderBy: [],
    distinct: false,
    setOperations: [],
  });
}

/**
 * Creates a new ShapeBuilder for the given base type.
 *
 * @param baseType - The base ObjectTypeDefinition or InterfaceDefinition
 * @param debugName - Optional name for debugging in DevTools
 *
 * @example
 * ```typescript
 * const SlimPlayer = createShapeBuilder(Player, "SlimPlayer")
 *   .require("name", "age")
 *   .withDefault("position", "Unknown")
 *   .build();
 * ```
 */
export function createShapeBuilder<BASE extends ObjectOrInterfaceDefinition>(
  baseType: BASE,
  debugName?: string,
): ShapeBuilder<BASE, {}, {}> {
  const state: ShapeBuilderState = {
    baseType,
    baseTypeApiName: baseType.apiName,
    debugName,
    props: {},
    derivedLinks: [],
  };

  return new ShapeBuilderImpl(state);
}
