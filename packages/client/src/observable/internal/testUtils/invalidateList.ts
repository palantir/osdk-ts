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

import type { ObjectTypeDefinition, WhereClause } from "@osdk/api";
import type { OrderBy } from "../../ObservableClient.js";
import type { Canonical } from "../Canonical.js";
import type { ListCacheKey } from "../list/ListCacheKey.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { Store } from "../Store.js";

export async function invalidateList<T extends ObjectTypeDefinition>(
  store: Store,
  args: {
    type: Pick<T, "apiName" | "type">;
    where?: WhereClause<T> | SimpleWhereClause;
    orderBy?: OrderBy<T>;
  },
): Promise<void> {
  const where = store.whereCanonicalizer.canonicalize(args.where ?? {});
  const orderBy = store.orderByCanonicalizer.canonicalize(args.orderBy ?? {});

  const cacheKey = store.getCacheKey<ListCacheKey>(
    "list",
    args.type.type,
    args.type.apiName,
    where,
    orderBy as Canonical<OrderBy<T>>,
  );

  await store.peekQuery(cacheKey)?.revalidate(true);
}
