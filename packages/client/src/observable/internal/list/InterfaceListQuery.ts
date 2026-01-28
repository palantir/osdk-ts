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
  InterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import groupBy from "object.groupby";
import invariant from "tiny-invariant";
import type { Client } from "../../../Client.js";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import { ObjectDefRef } from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ListPayload } from "../../ListPayload.js";
import type { CollectionConnectableParams } from "../base-list/BaseCollectionQuery.js";
import type { Changes } from "../Changes.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { Store } from "../Store.js";
import { INTERSECT_IDX, ListQuery, PIVOT_IDX, RDP_IDX } from "./ListQuery.js";

type ExtractRelevantObjectsResult = Record<"added" | "modified", {
  all: (ObjectHolder | InterfaceHolder)[];
  strictMatches: Set<(ObjectHolder | InterfaceHolder)>;
  sortaMatches: Set<(ObjectHolder | InterfaceHolder)>;
}>;

export class InterfaceListQuery extends ListQuery {
  protected createObjectSet(store: Store): ObjectSet<ObjectTypeDefinition> {
    const rdpConfig = this.cacheKey.otherKeys[RDP_IDX];
    const intersectWith = this.cacheKey.otherKeys[INTERSECT_IDX];
    const pivotInfo = this.cacheKey.otherKeys[PIVOT_IDX];

    // Handle pivotTo case - when pivoting from object/interface via a link
    if (pivotInfo != null) {
      // Use the source type kind from pivot info (can be "object" or "interface")
      // Cast to ObjectSet because runtime supports pivotTo for both types
      // but the type system only exposes it on ObjectSet<ObjectTypeDefinition>
      const sourceSet = (pivotInfo.sourceTypeKind === "interface"
        ? store.client({
          type: "interface",
          apiName: pivotInfo.sourceType,
        } as InterfaceDefinition)
        : store.client({
          type: "object",
          apiName: pivotInfo.sourceType,
        } as ObjectTypeDefinition)) as ObjectSet<ObjectTypeDefinition>;

      let objectSet = sourceSet.pivotTo(pivotInfo.linkName);

      // RDPs must be applied before where clauses
      if (rdpConfig != null) {
        objectSet = objectSet.withProperties(
          rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
        );
      }

      objectSet = objectSet.where(this.canonicalWhere);

      if (intersectWith != null && intersectWith.length > 0) {
        const intersectSets = intersectWith.map(whereClause => {
          // Use this.apiName as the target type since InterfaceListQuery is created
          // for the target interface of the link (same as this.apiName)
          const intersectSet = store.client({
            type: "interface",
            apiName: this.apiName,
          } as InterfaceDefinition);

          // Note: RDPs on interface intersect sets not supported currently
          return intersectSet.where(whereClause);
        });

        objectSet = objectSet.intersect(...intersectSets);
      }

      return objectSet;
    }

    // Non-pivot case - direct interface query
    const type: string = "interface" as const;
    const objectTypeDef = {
      type,
      apiName: this.apiName,
    } as ObjectTypeDefinition;

    if (rdpConfig != null) {
      return store.client(objectTypeDef)
        .withProperties(rdpConfig as Rdp)
        .where(this.canonicalWhere);
    }

    return store.client(objectTypeDef)
      .where(this.canonicalWhere);
  }

  async revalidateObjectType(apiName: string): Promise<void> {
    const objectMetadata = await this.store.client.fetchMetadata({
      type: "object",
      apiName,
    });

    if (this.apiName in objectMetadata.interfaceMap) {
      await this.revalidate(/* force */ true);
    }
  }

  protected async postProcessFetchedData(
    data: Osdk.Instance<any>[],
  ): Promise<Osdk.Instance<any>[]> {
    return reloadDataAsFullObjects(this.store.client, data);
  }

  protected createPayload(
    params: CollectionConnectableParams,
  ): ListPayload {
    const resolvedList = params.resolvedData.map((obj: ObjectHolder) =>
      obj.$as(this.apiName)
    );

    return {
      resolvedList,
      isOptimistic: params.isOptimistic,
      fetchMore: this.fetchMore,
      hasMore: this.nextPageToken != null,
      status: params.status,
      lastUpdated: params.lastUpdated,
    };
  }

  protected extractRelevantObjects(
    changes: Changes,
  ): ExtractRelevantObjectsResult {
    const matchesApiName = ([, object]: [unknown, ObjectHolder]) => {
      return this.apiName in object[ObjectDefRef].interfaceMap;
    };

    const added = Array.from(changes.addedObjects).filter(matchesApiName).map((
      [, object],
    ) => object.$as(this.apiName));

    const modified = Array.from(changes.modifiedObjects).filter(matchesApiName)
      .map((
        [, object],
      ) => object.$as(this.apiName));

    return {
      added: {
        all: added,
        strictMatches: new Set(),
        sortaMatches: new Set(),
      },
      modified: {
        all: modified,
        strictMatches: new Set(),
        sortaMatches: new Set(),
      },
    };
  }
}

// Hopefully this can go away when we can just request the full object properties on first load
async function reloadDataAsFullObjects(
  client: Client,
  data: Osdk.Instance<any>[],
) {
  if (data.length === 0) {
    return data;
  }

  const groups = groupBy(data, (x) => x.$objectType);
  const objectTypeToPrimaryKeyToObject = Object.fromEntries(
    await Promise.all(
      Object.entries(groups).map<
        Promise<
          [
            /** objectType **/ string,
            Record<string | number, Osdk.Instance<ObjectTypeDefinition>>,
          ]
        >
      >(async ([apiName, objects]) => {
        // Interface query results don't have ObjectDefRef, so we fetch metadata to get primaryKeyApiName
        const objectDef = await client.fetchMetadata({
          type: "object",
          apiName,
        });
        const where: SimpleWhereClause = {
          [objectDef.primaryKeyApiName]: {
            $in: objects.map(x => x.$primaryKey),
          },
        };

        const result = await client(
          objectDef as ObjectTypeDefinition,
        ).where(
          where as Parameters<ObjectSet<ObjectTypeDefinition>["where"]>[0],
        ).fetchPage({ $includeRid: true });
        return [
          apiName,
          Object.fromEntries(result.data.map(
            x => [x.$primaryKey, x],
          )),
        ];
      }),
    ),
  );

  return data.map((obj) => {
    const fullObject =
      objectTypeToPrimaryKeyToObject[obj.$objectType][obj.$primaryKey];
    invariant(
      fullObject,
      `Could not find object ${obj.$objectType} ${obj.$primaryKey}`,
    );
    return fullObject;
  });
}
