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
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";
import type { CollectWithPropAggregations } from "./WithPropertiesAggregationOptions.js";

export namespace DerivedProperty {
  export type SelectorResult<
    T extends SimplePropertyDef,
  > = {
    type: T;
  };

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
  ) => SelectorResult<T>;

  export interface Builder<
    Q extends ObjectOrInterfaceDefinition,
    CONSTRAINED extends boolean,
  > extends Filterable<Q>, Pivotable<Q, CONSTRAINED> {
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
}

interface Filterable<
  Q extends ObjectOrInterfaceDefinition,
> {
  readonly where: (
    clause: WhereClause<Q>,
  ) => this;
}

interface Pivotable<
  Q extends ObjectOrInterfaceDefinition,
  CONSTRAINED extends boolean,
> {
  readonly pivotTo: <L extends LinkNames<Q>>(
    type: L,
  ) => CONSTRAINED extends true
    ? DerivedProperty.AggregateBuilder<LinkedType<Q, L>, true>
    : NonNullable<CompileTimeMetadata<Q>["links"][L]["multiplicity"]> extends
      true ? DerivedProperty.AggregateBuilder<LinkedType<Q, L>, true>
    : DerivedProperty.SelectPropertyBuilder<LinkedType<Q, L>, false>;
}

interface Aggregatable<
  Q extends ObjectOrInterfaceDefinition,
> {
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
  ) => DerivedProperty.SelectorResult<
    V extends `${infer N}:${infer P}`
      ? P extends CollectWithPropAggregations
        ? Array<CompileTimeMetadata<Q>["properties"][N]["type"]> | undefined
      : P extends "approximateDistinct" | "exactDistinct" | "$count"
        ? "integer" | undefined
      : "double" | undefined
      : V extends "$count" ? "integer" | undefined
      : never
  >;
}

interface Selectable<Q extends ObjectOrInterfaceDefinition> {
  readonly selectProperty: <R extends PropertyKeys<Q>>(
    propertyName: R,
  ) => DerivedProperty.SelectorResult<
    SimplePropertyDef.Make<
      CompileTimeMetadata<Q>["properties"][R]["type"],
      CompileTimeMetadata<Q>["properties"][R]["nullable"],
      CompileTimeMetadata<Q>["properties"][R]["multiplicity"]
    >
  >;
}
