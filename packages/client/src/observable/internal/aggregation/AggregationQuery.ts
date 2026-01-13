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
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
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
import { getObjectTypesThatInvalidate } from "../getObjectTypesThatInvalidate.js";
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
  RDP_IDX,
  WHERE_IDX,
  WIRE_OBJECT_SET_IDX,
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
  RDPs extends Record<string, SimplePropertyDef> = {},
> extends CommonObserveOptions {
  type: Q;
  where?: WhereClause<Q, RDPs>;
  withProperties?: DerivedProperty.Clause<Q>;
  aggregate: A;
}

export interface AggregationPayloadBase {
  result:
    | AggregationsResults<
      ObjectOrInterfaceDefinition,
      AggregateOpts<ObjectOrInterfaceDefinition>
    >
    | undefined;
  status: Status;
  lastUpdated: number;
  error?: Error;
}

export abstract class AggregationQuery extends Query<
  AggregationCacheKey,
  AggregationPayloadBase,
  CommonObserveOptions
> {
  protected apiName: string;
  protected canonicalWhere: Canonical<SimpleWhereClause>;
  protected canonicalAggregate: Canonical<
    AggregateOpts<ObjectOrInterfaceDefinition>
  >;
  protected rdpConfig: Canonical<Rdp> | undefined;
  #invalidationTypes: Set<string>;
  // Async computation of object types that should trigger invalidation (for pivoted object sets)
  #invalidationTypesPromise: Promise<Set<string>> | undefined;

  constructor(
    store: Store,
    subject: Subject<SubjectPayload<AggregationCacheKey>>,
    cacheKey: AggregationCacheKey,
    opts: CommonObserveOptions,
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
    this.apiName = cacheKey.otherKeys[API_NAME_IDX];
    this.canonicalWhere = cacheKey.otherKeys[WHERE_IDX];
    this.rdpConfig = cacheKey.otherKeys[RDP_IDX];
    this.canonicalAggregate = cacheKey.otherKeys[AGGREGATE_IDX];

    const serializedObjectSet = cacheKey.otherKeys[WIRE_OBJECT_SET_IDX];
    if (serializedObjectSet) {
      const wireObjectSet = JSON.parse(serializedObjectSet) as WireObjectSet;
      this.#invalidationTypes = new Set([this.apiName]);
      this.#invalidationTypesPromise = this.#computeInvalidationTypes(
        wireObjectSet,
      );
    } else {
      this.#invalidationTypes = new Set([this.apiName]);
    }
  }

  async #computeInvalidationTypes(
    wireObjectSet: WireObjectSet,
  ): Promise<Set<string>> {
    try {
      const { invalidationSet } = await getObjectTypesThatInvalidate(
        this.store.client[additionalContext],
        wireObjectSet,
      );
      return new Set([this.apiName, ...invalidationSet]);
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        this.store.logger?.error(
          "Failed to compute invalidation types for aggregation, falling back to base type only",
          error,
        );
      }
      return new Set([this.apiName]);
    }
  }

  async ensureInvalidationTypesReady(): Promise<void> {
    if (this.#invalidationTypesPromise) {
      this.#invalidationTypes = await this.#invalidationTypesPromise;
      this.#invalidationTypesPromise = undefined;
    }
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<AggregationCacheKey>>,
  ): Connectable<AggregationPayloadBase> {
    return connectable<AggregationPayloadBase>(
      subject.pipe(
        map((x) => {
          return {
            status: x.status,
            result: x.value,
            lastUpdated: x.lastUpdated,
            error: x.status === "error"
              ? new Error("Aggregation failed")
              : undefined,
          };
        }),
      ),
      {
        connector: () =>
          new BehaviorSubject<AggregationPayloadBase>({
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
      const result = await this._fetchAggregation();

      this.store.batch({}, (batch) => {
        this.writeToStore(result, "loaded", batch);
      });
    } catch (err) {
      this.store.batch({}, (batch) => {
        this.writeToStore(undefined, "error", batch);
      });
    }
  }

  protected abstract _fetchAggregation(): Promise<
    AggregationCacheKey["__cacheKey"]["value"]
  >;

  writeToStore(
    data: AggregationCacheKey["__cacheKey"]["value"],
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
    if (this.#invalidationTypes.has(objectType)) {
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
    }
    return Promise.resolve();
  };
}
