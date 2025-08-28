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

import type { InterfaceDefinition, ObjectTypeDefinition } from "@osdk/api";
import type { ObjectPayload } from "../../ObjectPayload.js";
import type { ObserveObjectOptions } from "../../ObservableClient.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import { type ObjectCacheKey, ObjectQuery } from "../ObjectQuery.js";
import type { QuerySubscription } from "../QuerySubscription.js";

export class ObjectsHelper extends AbstractHelper<
  ObjectQuery,
  ObserveObjectOptions<any>
> {
  observe<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveObjectOptions<T>,
    subFn: Observer<ObjectPayload>,
  ): QuerySubscription<ObjectQuery> {
    return super.observe(options, subFn);
  }

  getQuery<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveObjectOptions<T>,
  ): ObjectQuery {
    const apiName = typeof options.apiName === "string"
      ? options.apiName
      : options.apiName.apiName;
    const { pk } = options;

    const objectCacheKey = this.store.getCacheKey<ObjectCacheKey>(
      "object",
      apiName,
      pk,
    );

    return this.store.getQuery(objectCacheKey, () =>
      new ObjectQuery(
        this.store,
        this.store.getSubject(objectCacheKey),
        apiName,
        pk,
        objectCacheKey,
        { dedupeInterval: 0 },
      ));
  }
}
