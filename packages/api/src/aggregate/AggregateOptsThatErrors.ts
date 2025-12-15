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

import type { SingleKeyObject } from "type-fest";
import type { GroupByClause } from "../groupby/GroupByClause.js";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type { AggregateOpts } from "./AggregateOpts.js";
import type { UnorderedAggregationClause } from "./AggregationsClause.js";

export type AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<
  Q extends ObjectOrInterfaceDefinition,
  AO extends AggregateOpts<Q, RDPs>,
  RDPs extends Record<string, SimplePropertyDef> = {},
> = ContainsExactMatchWithNull<AO["$groupBy"]> extends true ? {
    $groupBy: AO["$groupBy"];
    $select: UnorderedAggregationClause<Q, RDPs>;
  }
  : SingleKeyObject<AO["$groupBy"]> extends never ? (
      AO["$select"] extends UnorderedAggregationClause<Q, RDPs>
        ? AggregateOptsThatErrors<Q, AO, RDPs>
        : {} extends AO["$groupBy"] ? AggregateOptsThatErrors<Q, AO, RDPs>
        : {
          $groupBy: AO["$groupBy"];
          $select: UnorderedAggregationClause<Q, RDPs>;
        }
    )
  : AggregateOptsThatErrors<Q, AO, RDPs>;

type ContainsExactMatchWithNull<
  GB extends GroupByClause<any, any> | undefined,
> = undefined extends GB ? false : {} extends GB ? false : {
  [P in keyof GB]: GB[P] extends { $exact: { $includeNullValue: true } } ? true
    : false;
}[keyof GB];

type AggregateOptsThatErrors<
  Q extends ObjectOrInterfaceDefinition,
  AO extends AggregateOpts<Q, RDPs>,
  RDPs extends Record<string, SimplePropertyDef>,
> =
  & AO
  & {
    $select:
      & Pick<
        AO["$select"],
        keyof AggregateOpts<Q, RDPs>["$select"] & keyof AO["$select"]
      >
      & Record<
        Exclude<keyof AO["$select"], keyof AggregateOpts<Q, RDPs>["$select"]>,
        never
      >;
  }
  & (unknown extends AO["$groupBy"] ? {}
    : Exclude<AO["$groupBy"], undefined> extends never ? {}
    : {
      $groupBy:
        & Pick<
          AO["$groupBy"],
          keyof GroupByClause<Q, RDPs> & keyof AO["$groupBy"]
        >
        & Record<
          Exclude<keyof AO["$groupBy"], keyof GroupByClause<Q, RDPs>>,
          never
        >;
    });
