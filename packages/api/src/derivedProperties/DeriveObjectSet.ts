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
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";
import type { DerivedPropertyDefinition } from "./DeriveClause.js";

export interface BaseDeriveObjectSet<Q extends ObjectOrInterfaceDefinition>
  extends FilterableDeriveObjectSet<Q>
{
  readonly pivotTo: <L extends LinkNames<Q>>(
    type: L,
  ) => NonNullable<CompileTimeMetadata<Q>["links"][L]["multiplicity"]> extends
    false ? SingleLinkDeriveObjectSet<LinkedType<Q, L>>
    : ManyLinkDeriveObjectSet<LinkedType<Q, L>>;
}

export interface DeriveObjectSet<Q extends ObjectOrInterfaceDefinition>
  extends
    BaseDeriveObjectSet<Q>,
    AggregatableDeriveObjectSet<Q>,
    SingleLinkDeriveObjectSet<Q>
{}

interface FilterableDeriveObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> {
  readonly where: (
    clause: WhereClause<Q>,
  ) => this;
}

interface AggregatableDeriveObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> extends FilterableDeriveObjectSet<Q> {
  readonly aggregate: (
    aggregationSpecifier: ValidAggregationKeys<Q>,
    opts?: { limit: number },
  ) => DerivedPropertyDefinition;
}

interface SingleLinkDeriveObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> extends AggregatableDeriveObjectSet<Q>, BaseDeriveObjectSet<Q> {
  readonly selectProperty: (
    propertyName: PropertyKeys<Q>,
  ) => DerivedPropertyDefinition;
}

interface ManyLinkDeriveObjectSet<
  Q extends ObjectOrInterfaceDefinition,
> extends AggregatableDeriveObjectSet<Q> {
  readonly pivotTo: <L extends LinkNames<Q>>(
    type: L,
  ) => ManyLinkDeriveObjectSet<LinkedType<Q, L>>;
}
