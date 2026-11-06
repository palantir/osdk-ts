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
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import type { Connectable, Observable, Subject } from "rxjs";
import { BehaviorSubject, connectable, map } from "rxjs";

import { additionalContext } from "../../../Client.js";
import {
  createObjectSet,
  getWireObjectSet,
} from "../../../objectSet/createObjectSet.js";
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
  INTERSECT_IDX,
  RDP_IDX,
  TYPE_IDX,
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

export class AggregationQuery extends Query<
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
  protected parsedWireObjectSet: WireObjectSet | undefined;
  #invalidationTypes: Set<string> | undefined;
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
        ? store.client[additionalContext].logger?.child(
            {},
            {
              msgPrefix: `AggregationQuery<${cacheKey.otherKeys
                .map((x) => JSON.stringify(x))
                .join(", ")}>`,
            },
          )
        : undefined,
    );
    this.apiName = cacheKey.otherKeys[API_NAME_IDX];
    this.canonicalWhere = cacheKey.otherKeys[WHERE_IDX];
    this.rdpConfig = cacheKey.otherKeys[RDP_IDX];
    this.canonicalAggregate = cacheKey.otherKeys[AGGREGATE_IDX];

    const serializedObjectSet = cacheKey.otherKeys[WIRE_OBJECT_SET_IDX];
    if (serializedObjectSet) {
      this.parsedWireObjectSet = JSON.parse(
        serializedObjectSet,
      ) as WireObjectSet;
    }
    if (
      this.cacheKey.otherKeys[TYPE_IDX] === "object" &&
      !this.parsedWireObjectSet &&
      !this.rdpConfig
    ) {
      this.#invalidationTypes = new Set([this.apiName]);
    } else {
      void this.ensureInvalidationTypesReady().catch(() => undefined);
    }
  }

  async ensureInvalidationTypesReady(): Promise<Set<string>> {
    if (this.#invalidationTypes) {
      return this.#invalidationTypes;
    }
    this.#invalidationTypesPromise ??= getObjectTypesThatInvalidate(
      this.store.client[additionalContext],
      getWireObjectSet(this.createObjectSet()),
    )
      .then(({ counts, interfaceInvalidationSet }) => {
        this.#invalidationTypes = new Set([
          ...Object.keys(counts),
          ...interfaceInvalidationSet,
        ]);
        return this.#invalidationTypes;
      })
      .finally(() => {
        this.#invalidationTypesPromise = undefined;
      });
    return await this.#invalidationTypesPromise;
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
            error:
              x.status === "error"
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
      this.logger
        ?.child({ methodName: "_fetchAndStore" })
        .debug("calling _fetchAndStore");
    }

    try {
      const objectSet = this.createObjectSet();
      const [result] = await Promise.all([
        objectSet.aggregate(
          this.canonicalAggregate as Parameters<typeof objectSet.aggregate>[0],
        ),
        this.ensureInvalidationTypesReady(),
      ]);
      this.store.batch({}, (batch) => {
        this.writeToStore(result, "loaded", batch);
      });
    } catch (err) {
      this.store.batch({}, (batch) => {
        this.writeToStore(undefined, "error", batch);
      });
    }
  }

  private createObjectSet(): ObjectSet<ObjectOrInterfaceDefinition> {
    const type = this.cacheKey.otherKeys[API_NAME_IDX];
    const intersectWith = this.cacheKey.otherKeys[INTERSECT_IDX];
    const rdpConfig: Rdp | undefined = this.rdpConfig;
    const objectTypeDef = {
      type: this.cacheKey.otherKeys[TYPE_IDX],
      apiName: type,
    } as ObjectOrInterfaceDefinition;

    let objectSet = createObjectSet(
      objectTypeDef,
      this.store.client[additionalContext],
      this.parsedWireObjectSet,
    );

    if (rdpConfig) {
      objectSet = objectSet.withProperties(rdpConfig);
    }

    objectSet = objectSet.where(this.canonicalWhere);

    if (intersectWith != null && intersectWith.length > 0) {
      const intersectSets = intersectWith.map((whereClause) => {
        let intersectSet = createObjectSet(
          objectTypeDef,
          this.store.client[additionalContext],
        );

        if (rdpConfig) {
          intersectSet = intersectSet.withProperties(rdpConfig);
        }

        return intersectSet.where(whereClause);
      });

      objectSet = objectSet.intersect(...intersectSets);
    }

    return objectSet;
  }

  writeToStore(
    data: AggregationCacheKey["__cacheKey"]["value"],
    status: Status,
    batch: BatchContext,
  ): Entry<AggregationCacheKey> {
    batch.write(this.cacheKey, data, status);
    batch.changes.modified.add(this.cacheKey);
    return batch.read(this.cacheKey)!;
  }

  invalidateObjectType = async (
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void> => {
    let invalidationTypes: Set<string>;
    try {
      invalidationTypes = await this.ensureInvalidationTypesReady();
    } catch {
      changes?.modified.add(this.cacheKey);
      this.store.batch({}, (batch) => {
        this.writeToStore(undefined, "error", batch);
      });
      return;
    }

    if (invalidationTypes.has(objectType)) {
      changes?.modified.add(this.cacheKey);
      if (this.pendingFetch) {
        await this.pendingFetch;
      }
      return this.revalidate(true);
    }
  };
}
