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
import type { WithPropertyDefinition } from "./WithPropertiesClause.js";

export interface WithPropertyObjectSet<Q extends ObjectOrInterfaceDefinition>
  extends
    BaseWithPropertyObjectSet<Q>,
    AggregatableWithPropertyObjectSet<Q>,
    SingleLinkWithPropertyObjectSet<Q>
{}

export interface BaseWithPropertyObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> extends FilterableWithPropertyObjectSet<Q> {
  readonly pivotTo: <L extends LinkNames<Q>>(
    type: L,
  ) => NonNullable<CompileTimeMetadata<Q>["links"][L]["multiplicity"]> extends
    false ? SingleLinkWithPropertyObjectSet<LinkedType<Q, L>>
    : ManyLinkWithPropertyObjectSet<LinkedType<Q, L>>;
}

interface FilterableWithPropertyObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> {
  readonly where: (
    clause: WhereClause<Q>,
  ) => this;
}
export type CollectWithPropAggregations = "collectSet" | "collectList";

export type BaseWithPropAggregations =
  | "approximateDistinct"
  | "exactDistinct"
  | "approximatePercentile";

export type StringWithPropAggregateOption =
  | BaseWithPropAggregations
  | CollectWithPropAggregations;

export type NumericWithPropAggregateOption =
  | "min"
  | "max"
  | "sum"
  | "avg"
  | BaseWithPropAggregations
  | CollectWithPropAggregations;

interface AggregatableWithPropertyObjectSet<
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
  ) => WithPropertyDefinition<
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

interface SingleLinkWithPropertyObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> extends
  AggregatableWithPropertyObjectSet<Q>,
  FilterableWithPropertyObjectSet<Q>,
  BaseWithPropertyObjectSet<Q>
{
  readonly selectProperty: <R extends PropertyKeys<Q>>(
    propertyName: R,
  ) => WithPropertyDefinition<
    SimplePropertyDef.Make<
      CompileTimeMetadata<Q>["properties"][R]["type"],
      CompileTimeMetadata<Q>["properties"][R]["nullable"],
      CompileTimeMetadata<Q>["properties"][R]["multiplicity"]
    >
  >;
}

/*
 * The ManyLinkWithPropertyObjectSet overrides the pivotTo operation because once we traverse a single link,
 * we cannot use the "selectProperty" operation again for the entire chain. The parent pivotTo class will create
 * this object set once the user pivots to a many link/
 */

interface ManyLinkWithPropertyObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> extends
  AggregatableWithPropertyObjectSet<Q>,
  FilterableWithPropertyObjectSet<Q>
{
  readonly pivotTo: <L extends LinkNames<Q>>(
    type: L,
  ) => ManyLinkWithPropertyObjectSet<LinkedType<Q, L>>;
}
