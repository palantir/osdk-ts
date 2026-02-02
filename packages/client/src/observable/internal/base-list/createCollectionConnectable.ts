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

import {
  asapScheduler,
  combineLatest,
  type Connectable,
  connectable,
  distinctUntilChanged,
  map,
  type Observable,
  of,
  ReplaySubject,
  scheduled,
  switchMap,
} from "rxjs";
import type { CacheKey } from "../CacheKey.js";
import type { ObjectCacheKey } from "../object/ObjectCacheKey.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import type { Subjects } from "../Subjects.js";
import type { CollectionConnectableParams } from "./BaseCollectionQuery.js";

/**
 * Creates a connectable observable for a collection of objects
 *
 * @param subject The subject to connect to
 * @param store The store to use for resolving objects
 * @param createPayload A function that creates the payload from common parameters
 * @returns A connectable observable of the payload type
 */
export function createCollectionConnectable<
  K extends CacheKey<any, any, any, any>,
  P,
>(
  subject: Observable<SubjectPayload<K>>,
  subjects: Subjects,
  createPayload: (params: CollectionConnectableParams) => P,
): Connectable<P> {
  return connectable<P>(
    subject.pipe(
      switchMap(listEntry => {
        const resolvedData = listEntry?.value?.data == null
            || listEntry.value.data.length === 0
          ? of([])
          : combineLatest(
            listEntry.value.data.map((cacheKey: ObjectCacheKey) =>
              subjects.get(cacheKey).pipe(
                map(objectEntry => objectEntry?.value!),
                distinctUntilChanged(),
              )
            ),
          );

        return scheduled(
          combineLatest({
            resolvedData,
            isOptimistic: of(listEntry.isOptimistic),
            status: of(listEntry.status),
            lastUpdated: of(listEntry.lastUpdated),
            totalCount: of(listEntry?.value?.totalCount),
          }).pipe(
            map(params =>
              createPayload({
                resolvedData: Array.isArray(params.resolvedData)
                  ? params.resolvedData
                  : [],
                isOptimistic: params.isOptimistic,
                status: params.status,
                lastUpdated: params.lastUpdated,
                totalCount: params.totalCount,
              })
            ),
          ),
          asapScheduler,
        );
      }),
    ),
    {
      resetOnDisconnect: false,
      connector: () => new ReplaySubject(1),
    },
  );
}
