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

import type { DerivedProperty, ObjectTypeDefinition } from "@osdk/api";
import { additionalContext } from "../../../Client.js";
import { createObjectSet } from "../../../objectSet/createObjectSet.js";
import {
  type AggregationCacheKey,
  API_NAME_IDX,
  INTERSECT_IDX,
} from "./AggregationCacheKey.js";
import { AggregationQuery } from "./AggregationQuery.js";

export class ObjectAggregationQuery extends AggregationQuery {
  protected async _fetchAggregation(): Promise<
    AggregationCacheKey["__cacheKey"]["value"]
  > {
    const type = this.cacheKey.otherKeys[API_NAME_IDX];
    const intersectWith = this.cacheKey.otherKeys[INTERSECT_IDX];
    const objectTypeDef = {
      type: "object",
      apiName: type,
    } as ObjectTypeDefinition;

    let objectSet;
    if (this.parsedWireObjectSet) {
      objectSet = createObjectSet(
        objectTypeDef,
        this.store.client[additionalContext],
        this.parsedWireObjectSet,
      );
    } else {
      objectSet = this.store.client(objectTypeDef);
    }

    if (this.rdpConfig) {
      objectSet = objectSet.withProperties(
        this.rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
      );
    }

    objectSet = objectSet.where(this.canonicalWhere);

    if (intersectWith != null && intersectWith.length > 0) {
      const intersectSets = intersectWith.map(whereClause => {
        let intersectSet = this.store.client(objectTypeDef);

        if (this.rdpConfig) {
          intersectSet = intersectSet.withProperties(
            this.rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
          );
        }

        return intersectSet.where(whereClause);
      });

      objectSet = objectSet.intersect(...intersectSets);
    }

    return await objectSet.aggregate(
      this.canonicalAggregate as Parameters<typeof objectSet.aggregate>[0],
    );
  }
}
