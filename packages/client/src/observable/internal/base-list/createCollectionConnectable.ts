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

/** A resolved collection member: its current value and its optimism. */
interface ResolvedMember {
  value: unknown;
  isOptimistic: boolean;
}

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
        // Resolve each member to both its current value and whether that value
        // is itself optimistic. A collection has no write primitive in v1, so a
        // link/list becomes optimistic when one of its members is optimistically
        // edited (e.g. an action's optimistic object edit) even though the
        // membership entry stays on the truth layer.
        const members: Observable<ResolvedMember[] | undefined> =
          listEntry?.value?.data == null
            ? of(undefined)
            : listEntry.value.data.length === 0
            ? of([] as ResolvedMember[])
            : combineLatest<ResolvedMember[]>(
              listEntry.value.data.map((cacheKey: ObjectCacheKey) =>
                subjects.get(cacheKey).pipe(
                  map((objectEntry): ResolvedMember => ({
                    value: objectEntry?.value,
                    isOptimistic: objectEntry?.isOptimistic ?? false,
                  })),
                  distinctUntilChanged(
                    (a, b) =>
                      a.value === b.value && a.isOptimistic === b.isOptimistic,
                  ),
                )
              ),
            );

        return scheduled(
          combineLatest({
            members,
            listOptimistic: of(listEntry.isOptimistic),
            status: of(listEntry.status),
            lastUpdated: of(listEntry.lastUpdated),
            totalCount: of(listEntry?.value?.totalCount),
          }).pipe(
            map(params => {
              const resolvedMembers = params.members;
              return createPayload({
                resolvedData: resolvedMembers === undefined
                  ? undefined
                  : resolvedMembers.map(member => member.value),
                isOptimistic: params.listOptimistic
                  || (resolvedMembers?.some(member => member.isOptimistic)
                    ?? false),
                status: params.status,
                lastUpdated: params.lastUpdated,
                totalCount: params.totalCount,
              });
            }),
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
