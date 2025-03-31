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

import type { ValidAggregationKeys } from "../aggregate/AggregatableKeys.js";
import type { WhereClause } from "../aggregate/WhereClause.js";
import type { FilteredPropertyKeys } from "../ontology/FilteredPropertyKeys.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";
import type {
  CollectWithPropAggregations,
  MinMaxWithPropAggregateOption,
} from "./WithPropertiesAggregationOptions.js";

export namespace DerivedProperty {
  export interface Definition<
    T extends SimplePropertyDef,
    Q extends ObjectOrInterfaceDefinition,
  > {
    type: T;
  }

  export interface NumericPropertyDefinition<
    T extends SimplePropertyDef,
    Q extends ObjectOrInterfaceDefinition,
  > extends Definition<T, Q>, NumericExpressions<Q> {}

  export interface DatetimePropertyDefinition<
    T extends SimplePropertyDef,
    Q extends ObjectOrInterfaceDefinition,
  > extends Definition<T, Q>, DatetimeExpressions<Q> {}
  export interface TimestampPropertyDefinition<
    T extends SimplePropertyDef,
    Q extends ObjectOrInterfaceDefinition,
  > extends Definition<T, Q>, TimestampExpressions<Q> {}

  export type Clause<
    Q extends ObjectOrInterfaceDefinition,
  > = {
    [key: string]: Selector<Q, SimplePropertyDef>;
  };

  export type Selector<
    Q extends ObjectOrInterfaceDefinition,
    T extends SimplePropertyDef,
  > = (
    baseObjectSet: DerivedProperty.Builder<Q, false>,
  ) =>
    | Definition<T, Q>
    | NumericPropertyDefinition<T, Q>
    | DatetimePropertyDefinition<T, Q>
    | TimestampPropertyDefinition<T, Q>;

  export interface Builder<
    Q extends ObjectOrInterfaceDefinition,
    CONSTRAINED extends boolean,
  > extends Filterable<Q, CONSTRAINED>, Pivotable<Q, CONSTRAINED> {
  }

  export interface AggregateBuilder<
    Q extends ObjectOrInterfaceDefinition,
    CONSTRAINED extends boolean,
  > extends Builder<Q, CONSTRAINED>, Aggregatable<Q> {
  }

  export interface SelectPropertyBuilder<
    Q extends ObjectOrInterfaceDefinition,
    CONSTRAINED extends boolean,
  > extends AggregateBuilder<Q, CONSTRAINED>, Selectable<Q> {
  }

  export type ValidParts =
    | "year"
    | "month"
    | "day"
    | "hour"
    | "minute"
    | "second";
}

type BuilderTypeFromConstraint<
  Q extends ObjectOrInterfaceDefinition,
  CONSTRAINED extends boolean,
> = CONSTRAINED extends true ? DerivedProperty.AggregateBuilder<Q, true>
  : DerivedProperty.SelectPropertyBuilder<Q, false>;

type Filterable<
  Q extends ObjectOrInterfaceDefinition,
  CONSTRAINED extends boolean,
> = {
  readonly where: (
    clause: WhereClause<Q>,
  ) => BuilderTypeFromConstraint<Q, CONSTRAINED>;
};

type Pivotable<
  Q extends ObjectOrInterfaceDefinition,
  CONSTRAINED extends boolean,
> = {
  readonly pivotTo: <L extends LinkNames<Q>>(
    type: L,
  ) => CONSTRAINED extends true
    ? DerivedProperty.AggregateBuilder<LinkedType<Q, L>, true>
    : NonNullable<CompileTimeMetadata<Q>["links"][L]["multiplicity"]> extends
      true ? DerivedProperty.AggregateBuilder<LinkedType<Q, L>, true>
    : DerivedProperty.SelectPropertyBuilder<LinkedType<Q, L>, false>;
};

type Aggregatable<
  Q extends ObjectOrInterfaceDefinition,
> = {
  readonly aggregate: <
    V extends ValidAggregationKeys<
      Q,
      "withPropertiesAggregate"
    >,
  >(
    aggregationSpecifier: V,
    opts?: V extends `${any}:${infer P}`
      ? P extends CollectWithPropAggregations ? { limit: number }
      : P extends "approximatePercentile" ? { percentile: number }
      : never
      : never,
  ) => DerivedProperty.Definition<
    V extends `${infer N}:${infer P}`
      ? P extends CollectWithPropAggregations
        ? Array<CompileTimeMetadata<Q>["properties"][N]["type"]> | undefined
      : P extends MinMaxWithPropAggregateOption
        ? CompileTimeMetadata<Q>["properties"][N]["type"] | undefined
      : P extends "approximateDistinct" | "exactDistinct" | "$count" ? "integer"
      : "double" | undefined
      : V extends "$count" ? "integer"
      : never,
    Q
  >;
};

type Selectable<Q extends ObjectOrInterfaceDefinition> = {
  readonly selectProperty: <R extends PropertyKeys<Q>>(
    propertyName: R,
  ) => DefinitionForType<
    Q,
    SimplePropertyDef.Make<
      CompileTimeMetadata<Q>["properties"][R]["type"],
      CompileTimeMetadata<Q>["properties"][R]["nullable"],
      CompileTimeMetadata<Q>["properties"][R]["multiplicity"]
    >
  >;
};

// TODO: Fix arrays
// TODO: Fix base type
type DefinitionForType<
  Q extends ObjectOrInterfaceDefinition,
  T extends SimplePropertyDef,
> = number extends SimplePropertyDef.ExtractRuntimeBaseType<T>
  ? DerivedProperty.NumericPropertyDefinition<T, Q>
  : SimplePropertyDef.ExtractRuntimeBaseType<T> extends "datetime"
    ? DerivedProperty.DatetimePropertyDefinition<T, Q>
  : DerivedProperty.Definition<T, Q>;

type NumericProperties =
  | "decimal"
  | "integer"
  | "double"
  | "float"
  | "short"
  | "long"
  | "byte";

type NumericExpressionArgArray<Q extends ObjectOrInterfaceDefinition> = Array<
  | number
  | FilteredPropertyKeys<Q, NumericProperties>
  | DerivedProperty.NumericPropertyDefinition<any, any>
>;

type DatetimeExpressionArgArray<Q extends ObjectOrInterfaceDefinition> = Array<
  | string
  | PropertyKeys<Q>
  | DerivedProperty.DatetimePropertyDefinition<any, any>
>;

type NumericExpressions<Q extends ObjectOrInterfaceDefinition> = {
  readonly add: (
    ...args: NumericExpressionArgArray<Q>
  ) => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"integer", false, false>,
    Q
  >;

  readonly subtract: (
    left:
      | number
      | PropertyKeys<Q>
      | DerivedProperty.NumericPropertyDefinition<any, any>,
    right:
      | number
      | PropertyKeys<Q>
      | DerivedProperty.NumericPropertyDefinition<any, any>,
  ) => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"integer", false, false>,
    Q
  >;

  readonly multiply: (
    ...args: NumericExpressionArgArray<Q>
  ) => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"integer", false, false>,
    Q
  >;

  readonly divide: (
    left:
      | number
      | PropertyKeys<Q>
      | DerivedProperty.NumericPropertyDefinition<any, any>,
    right:
      | number
      | PropertyKeys<Q>
      | DerivedProperty.NumericPropertyDefinition<any, any>,
  ) => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"integer", false, false>,
    Q
  >;

  readonly abs: () => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"integer", false, false>,
    Q
  >;

  readonly negate: () => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"integer", false, false>,
    Q
  >;

  readonly max: (
    ...args: NumericExpressionArgArray<Q>
  ) => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"integer", false, false>,
    Q
  >;

  readonly min: (
    ...args: NumericExpressionArgArray<Q>
  ) => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"integer", false, false>,
    Q
  >;
};

type DatetimeExpressions<Q extends ObjectOrInterfaceDefinition> = {
  readonly min: (
    ...args: DatetimeExpressionArgArray<Q>
  ) => DerivedProperty.DatetimePropertyDefinition<
    SimplePropertyDef.Make<"datetime", false, false>,
    Q
  >;
  readonly max: (
    ...args: DatetimeExpressionArgArray<Q>
  ) => DerivedProperty.DatetimePropertyDefinition<
    SimplePropertyDef.Make<"datetime", false, false>,
    Q
  >;
  readonly extractPart: (
    part: DerivedProperty.ValidParts,
  ) => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"string", false, false>,
    Q
  >;
};

type TimestampExpressions<Q extends ObjectOrInterfaceDefinition> = {
  readonly min: (
    ...args: DatetimeExpressionArgArray<Q>
  ) => DerivedProperty.DatetimePropertyDefinition<
    SimplePropertyDef.Make<"timestamp", false, false>,
    Q
  >;
  readonly max: (
    ...args: DatetimeExpressionArgArray<Q>
  ) => DerivedProperty.DatetimePropertyDefinition<
    SimplePropertyDef.Make<"timestamp", false, false>,
    Q
  >;
  readonly extractPart: (
    part: DerivedProperty.ValidParts,
  ) => DerivedProperty.NumericPropertyDefinition<
    SimplePropertyDef.Make<"string", false, false>,
    Q
  >;
};
