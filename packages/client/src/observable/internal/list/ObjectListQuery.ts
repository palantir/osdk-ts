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
  DerivedProperty,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { Changes } from "../Changes.js";
import type { Store } from "../Store.js";
import {
  API_NAME_IDX,
  INTERSECT_IDX,
  ListQuery,
  PIVOT_IDX,
  RDP_IDX,
} from "./ListQuery.js";

type ExtractRelevantObjectsResult = Record<"added" | "modified", {
  all: (ObjectHolder | InterfaceHolder)[];
  strictMatches: Set<(ObjectHolder | InterfaceHolder)>;
  sortaMatches: Set<(ObjectHolder | InterfaceHolder)>;
}>;

export class ObjectListQuery extends ListQuery {
  protected createObjectSet(store: Store): ObjectSet<ObjectTypeDefinition> {
    const rdpConfig = this.cacheKey.otherKeys[RDP_IDX];
    const intersectWith = this.cacheKey.otherKeys[INTERSECT_IDX];
    const pivotInfo = this.cacheKey.otherKeys[PIVOT_IDX];

    if (pivotInfo != null) {
      const sourceSet = store.client({
        type: "object",
        apiName: pivotInfo.sourceType,
      } as ObjectTypeDefinition);

      // Pivot to the target type through the link
      let objectSet = sourceSet.pivotTo(pivotInfo.linkName) as ObjectSet<
        ObjectTypeDefinition
      >;

      // RDPs must be applied before where clauses
      if (rdpConfig != null) {
        objectSet = objectSet.withProperties(
          rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
        );
      }

      objectSet = objectSet.where(this.canonicalWhere);

      if (intersectWith != null && intersectWith.length > 0) {
        const intersectSets = intersectWith.map(whereClause => {
          let intersectSet = store.client({
            type: "object",
            apiName: pivotInfo.targetType,
          } as ObjectTypeDefinition);

          if (rdpConfig != null) {
            intersectSet = intersectSet.withProperties(
              rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
            );
          }

          return intersectSet.where(whereClause);
        });

        objectSet = objectSet.intersect(...intersectSets);
      }

      return objectSet;
    }

    let objectSet = store.client({
      type: "object",
      apiName: this.apiName,
    } as ObjectTypeDefinition);

    if (rdpConfig != null) {
      objectSet = objectSet.withProperties(
        rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
      );
    }

    objectSet = objectSet.where(this.canonicalWhere);

    if (intersectWith != null && intersectWith.length > 0) {
      const intersectSets = intersectWith.map(whereClause => {
        let intersectSet = store.client({
          type: "object",
          apiName: this.apiName,
        } as ObjectTypeDefinition);

        if (rdpConfig != null) {
          intersectSet = intersectSet.withProperties(
            rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
          );
        }

        return intersectSet.where(whereClause);
      });

      objectSet = objectSet.intersect(...intersectSets);
    }

    return objectSet;
  }

  async revalidateObjectType(apiName: string): Promise<void> {
    if (this.apiName === apiName) {
      await this.revalidate(/* force */ true);
    }
  }

  protected postProcessFetchedData(
    data: Osdk.Instance<any>[],
  ): Promise<Osdk.Instance<any>[]> {
    return Promise.resolve(data);
  }

  protected extractRelevantObjects(
    changes: Changes,
  ): ExtractRelevantObjectsResult {
    return {
      added: {
        all: changes.addedObjects.get(this.cacheKey.otherKeys[API_NAME_IDX])
          ?? [],
        strictMatches: new Set(),
        sortaMatches: new Set(),
      },
      modified: {
        all: changes.modifiedObjects.get(this.cacheKey.otherKeys[API_NAME_IDX])
          ?? [],
        strictMatches: new Set(),
        sortaMatches: new Set(),
      },
    };
  }
}
