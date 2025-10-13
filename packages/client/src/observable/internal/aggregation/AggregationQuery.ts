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

import type {
  AggregateOpts,
  AggregationsResults,
  DerivedProperty,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  WhereClause,
} from "@osdk/api";
import type { Connectable, Observable, Subject } from "rxjs";
import { BehaviorSubject, connectable, map } from "rxjs";
import { additionalContext } from "../../../Client.js";
import type {
  CommonObserveOptions,
  Status,
} from "../../ObservableClient/common.js";
import type { BatchContext } from "../BatchContext.js";
import type { Canonical } from "../Canonical.js";
import type { Changes } from "../Changes.js";
import type { Entry } from "../Layer.js";
import { Query } from "../Query.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import {
  AGGREGATE_IDX,
  type AggregationCacheKey,
  API_NAME_IDX,
  INTERSECT_IDX,
  RDP_IDX,
  WHERE_IDX,
} from "./AggregationCacheKey.js";

export interface AggregationPayload<
  Q extends ObjectOrInterfaceDefinition,
  A extends AggregateOpts<Q>,
> {
  result: AggregationsResults<Q, A> | undefined;
  status: Status;
  lastUpdated: number;
  error?: Error;
}

export interface AggregationQueryOptions<
  Q extends ObjectOrInterfaceDefinition,
  A extends AggregateOpts<Q>,
> extends CommonObserveOptions {
  type: Q;
  where?: WhereClause<Q, Record<string, any>>;
  withProperties?: DerivedProperty.Clause<Q>;
  intersectWith?: Array<{
    where: WhereClause<Q, Record<string, any>>;
  }>;
  aggregate: A;
}

export class AggregationQuery<
  Q extends ObjectOrInterfaceDefinition,
  A extends AggregateOpts<Q>,
> extends Query<
  AggregationCacheKey,
  AggregationPayload<Q, A>,
  CommonObserveOptions
> {
  #type: Q;
  #apiName: string;
  #where: Canonical<SimpleWhereClause>;
  #rdpConfig: Canonical<Rdp> | undefined;
  #intersectWith: Canonical<Array<Canonical<SimpleWhereClause>>> | undefined;
  #aggregate: Canonical<A>;

  constructor(
    store: Store,
    subject: Subject<SubjectPayload<AggregationCacheKey>>,
    cacheKey: AggregationCacheKey,
    opts: AggregationQueryOptions<Q, A>,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
      process.env.NODE_ENV !== "production"
        ? (
          store.client[additionalContext].logger?.child({}, {
            msgPrefix: `AggregationQuery<${
              cacheKey.otherKeys.map(x => JSON.stringify(x)).join(", ")
            }>`,
          })
        )
        : undefined,
    );
    this.#type = opts.type;
    this.#apiName = cacheKey.otherKeys[API_NAME_IDX];
    this.#where = cacheKey.otherKeys[WHERE_IDX];
    this.#rdpConfig = cacheKey.otherKeys[RDP_IDX];
    this.#intersectWith = cacheKey.otherKeys[INTERSECT_IDX];
    this.#aggregate = cacheKey.otherKeys[AGGREGATE_IDX] as Canonical<A>;
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<AggregationCacheKey>>,
  ): Connectable<AggregationPayload<Q, A>> {
    return connectable<AggregationPayload<Q, A>>(
      subject.pipe(
        map((x) => {
          return {
            status: x.status,
            result: x.value as AggregationsResults<Q, A> | undefined,
            lastUpdated: x.lastUpdated,
            error: x.status === "error"
              ? new Error("Aggregation failed")
              : undefined,
          };
        }),
      ),
      {
        connector: () =>
          new BehaviorSubject<AggregationPayload<Q, A>>({
            status: "init",
            result: undefined,
            lastUpdated: 0,
          }),
      },
    );
  }

  async _fetchAndStore(): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "_fetchAndStore" }).debug(
        "calling _fetchAndStore",
      );
    }

    try {
      // Type safety note: We use runtime-stored canonicalized types (this.#type, this.#rdpConfig, etc.)
      // The Client API has strict compile-time type constraints that cannot be satisfied with
      // generic runtime types. These type assertions are safe because:
      // 1. Types are validated when the query is created through AggregationsHelper
      // 2. All values are canonicalized to ensure consistency
      // 3. The Observable pattern ensures data integrity through the subscription lifecycle
      let objectSet: ObjectSet = this.store.client(
        this.#type as any,
      ) as ObjectSet<Q>;

      if (this.#rdpConfig) {
        objectSet = objectSet.withProperties(
          this.#rdpConfig as DerivedProperty.Clause<Q>,
        );
      }

      objectSet = objectSet.where(this.#where as WhereClause<Q>);

      if (this.#intersectWith && this.#intersectWith.length > 0) {
        const intersectSets = this.#intersectWith.map((whereClause) => {
          let intersectSet: ObjectSet = this.store.client(
            this.#type as any,
          ) as ObjectSet<Q>;
          if (this.#rdpConfig) {
            intersectSet = intersectSet.withProperties(
              this.#rdpConfig as DerivedProperty.Clause<Q>,
            );
          }
          return intersectSet.where(whereClause as WhereClause<Q>);
        });
        objectSet = objectSet.intersect(...intersectSets);
      }

      const result = await objectSet.aggregate(this.#aggregate as any);

      this.store.batch({}, (batch) => {
        this.writeToStore(result, "loaded", batch);
      });
    } catch (err) {
      this.store.batch({}, (batch) => {
        this.writeToStore(undefined, "error", batch);
      });
    }
  }

  // Type safety note: The base Query class has a union type for all possible storage types.
  // We use `any` here to satisfy the interface, but we know at runtime this will only
  // receive AggregationsResults because this method is only called from _fetchAndStore.
  writeToStore(
    data: any,
    status: Status,
    batch: BatchContext,
  ): Entry<AggregationCacheKey> {
    batch.write(this.cacheKey, data, status);
    batch.changes.modified.add(this.cacheKey);
    return batch.read(this.cacheKey)!;
  }

  invalidateObjectType = (
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void> => {
    if (this.#apiName === objectType) {
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
    }
    return Promise.resolve();
  };
}
