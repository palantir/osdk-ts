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

import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";
export function useOsdkObjects(type, {
  pageSize,
  orderBy,
  dedupeIntervalMs,
  where = {},
  streamUpdates
} = {}) {
  const {
    observableClient
  } = React.useContext(OsdkContext2);

  /*  We want the canonical where clause so that the use of `React.useMemo`
      is stable. No real added cost as we canonicalize internal to
      the ObservableClient anyway.
   */
  const canonWhere = observableClient.canonicalizeWhereClause(where ?? {});
  const {
    subscribe,
    getSnapShot
  } = React.useMemo(() => makeExternalStore(observer => observableClient.observeList({
    type,
    where: canonWhere,
    dedupeInterval: dedupeIntervalMs ?? 2_000,
    pageSize,
    orderBy,
    streamUpdates
  }, observer), process.env.NODE_ENV !== "production" ? `list ${type.apiName} ${JSON.stringify(canonWhere)}` : void 0), [observableClient, type, canonWhere, dedupeIntervalMs]);
  const listPayload = React.useSyncExternalStore(subscribe, getSnapShot);
  // TODO: we need to expose the error in the result
  return {
    fetchMore: listPayload?.fetchMore,
    error: listPayload && "error" in listPayload ? listPayload?.error : undefined,
    data: listPayload?.resolvedList,
    isLoading: listPayload?.status === "loading",
    isOptimistic: listPayload?.isOptimistic ?? false
  };
}
//# sourceMappingURL=useOsdkObjects.js.map