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
import type {
  ObjectOrInterfaceDefinition,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";
import type {
  CollectWithPropAggregations,
  MinMaxWithPropAggregateOption,
} from "./WithPropertiesAggregationOptions.js";

declare const DerivedPropertyDefinitionBrand: unique symbol;

export namespace DerivedProperty {
  export interface Definition<
    T extends SimplePropertyDef,
    Q extends ObjectOrInterfaceDefinition,
  > {
    readonly [DerivedPropertyDefinitionBrand]: true;
  }

  export type Clause<
    Q extends ObjectOrInterfaceDefinition,
  > = {
    [key: string]: DerivedPropertyCreator<Q, SimplePropertyDef>;
  };

  interface BaseBuilder<
    Q extends ObjectOrInterfaceDefinition,
    CONSTRAINED extends boolean,
  > extends Filterable<Q, CONSTRAINED>, Pivotable<Q, CONSTRAINED> {
  }

  export interface Builder<
    Q extends ObjectOrInterfaceDefinition,
    CONSTRAINED extends boolean,
  > extends BaseBuilder<Q, CONSTRAINED> {
  }

  export interface AggregateBuilder<
    Q extends ObjectOrInterfaceDefinition,
    CONSTRAINED extends boolean,
  > extends BaseBuilder<Q, CONSTRAINED>, Aggregatable<Q> {
  }

  // export interface SelectPropertyBuilder<
  //   Q extends ObjectOrInterfaceDefinition,
  //   CONSTRAINED extends boolean,
  // > extends AggregateBuilder<Q, CONSTRAINED> {
  // }
}

export type DerivedPropertyCreator<
  Q extends ObjectOrInterfaceDefinition,
  T extends SimplePropertyDef,
> = (
  baseObjectSet: DerivedProperty.Builder<Q, false>,
) => DerivedProperty.Definition<T, Q>;

type BuilderTypeFromConstraint<
  Q extends ObjectOrInterfaceDefinition,
  CONSTRAINED extends boolean,
> = CONSTRAINED extends true ? DerivedProperty.AggregateBuilder<Q, true>
  : DerivedProperty.AggregateBuilder<Q, false>;

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
    : DerivedProperty.AggregateBuilder<LinkedType<Q, L>, false>;
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
      ? P extends CollectWithPropAggregations ? SimplePropertyDef.Make<
          CompileTimeMetadata<Q>["properties"][N]["type"],
          "nullable",
          "array"
        >
      : P extends MinMaxWithPropAggregateOption ? SimplePropertyDef.Make<
          CompileTimeMetadata<Q>["properties"][N]["type"],
          "nullable",
          "single"
        >
      : P extends "approximateDistinct" | "exactDistinct"
        ? SimplePropertyDef.Make<
          "integer",
          "non-nullable",
          "single"
        >
      : SimplePropertyDef.Make<
        "double",
        "nullable",
        "single"
      >
      : V extends "$count" ? SimplePropertyDef.Make<
          "integer",
          "non-nullable",
          "single"
        >
      : never,
    Q
  >;
};

// type Selectable<Q extends ObjectOrInterfaceDefinition> = {
//   readonly selectProperty: <R extends PropertyKeys<Q>>(
//     propertyName: R,
//   ) => DefinitionForType<
//     Q,
//     SimplePropertyDef.Make<
//       CompileTimeMetadata<Q>["properties"][R]["type"],
//       CompileTimeMetadata<Q>["properties"][R]["nullable"] extends true
//         ? "nullable"
//         : "non-nullable",
//       CompileTimeMetadata<Q>["properties"][R]["multiplicity"] extends true
//         ? "array"
//         : "single"
//     >
//   >;
// };
