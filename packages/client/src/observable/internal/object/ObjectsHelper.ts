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
  InterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObjectPayload } from "../../ObjectPayload.js";
import type { ObserveObjectOptions } from "../../ObservableClient.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { BatchContext } from "../BatchContext.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import { type ObjectCacheKey } from "./ObjectCacheKey.js";
import { ObjectQuery } from "./ObjectQuery.js";

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

    const objectCacheKey = this.cacheKeys.get<ObjectCacheKey>(
      "object",
      apiName,
      pk,
    );

    return this.store.queries.get(objectCacheKey, () =>
      new ObjectQuery(
        this.store,
        this.store.subjects.get(objectCacheKey),
        apiName,
        pk,
        objectCacheKey,
        { dedupeInterval: 0 },
      ));
  }

  /**
   * Internal helper method for writing objects to the store and returning their
   * object keys
   * @internal
   */
  public storeOsdkInstances(
    values: Array<ObjectHolder> | Array<Osdk.Instance<any, any, any>>,
    batch: BatchContext,
  ): ObjectCacheKey[] {
    // update the cache for any object that has changed
    // and save the mapped values to return
    return values.map(v =>
      this.getQuery({
        apiName: v.$apiName,
        pk: v.$primaryKey as string | number,
      }).writeToStore(
        v as ObjectHolder,
        "loaded",
        batch,
      ).cacheKey
    );
  }
}
