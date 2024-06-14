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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { SingleKeyObject } from "type-fest";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { UnorderedAggregationClause } from "../query/aggregations/AggregationsClause.js";
import type { GroupByClause } from "../query/aggregations/GroupByClause.js";

export type AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<
  Q extends ObjectOrInterfaceDefinition,
  AO extends AggregateOpts<Q>,
> = SingleKeyObject<AO["$groupBy"]> extends never ? (
    AO["$select"] extends UnorderedAggregationClause<Q>
      ? AggregateOptsThatErrors<Q, AO>
      : {} extends AO["$groupBy"] ? AggregateOptsThatErrors<Q, AO>
      : {
        $groupBy: AO["$groupBy"];
        $select: UnorderedAggregationClause<Q>;
        $where?: AO["$where"];
      }
  )
  : AggregateOptsThatErrors<Q, AO>;

type AggregateOptsThatErrors<
  Q extends ObjectOrInterfaceDefinition,
  AO extends AggregateOpts<Q>,
> =
  & AO
  & {
    $select:
      & Pick<
        AO["$select"],
        keyof AggregateOpts<Q>["$select"] & keyof AO["$select"]
      >
      & Record<
        Exclude<keyof AO["$select"], keyof AggregateOpts<Q>["$select"]>,
        never
      >;
  }
  & (unknown extends AO["$groupBy"] ? {}
    : Exclude<AO["$groupBy"], undefined> extends never ? {}
    : {
      $groupBy:
        & Pick<
          AO["$groupBy"],
          keyof GroupByClause<Q> & keyof AO["$groupBy"]
        >
        & Record<
          Exclude<keyof AO["$groupBy"], keyof GroupByClause<Q>>,
          never
        >;
    });
