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

import type { ObjectSet, ObjectTypeDefinition, Osdk } from "@osdk/api";
import groupBy from "object.groupby";
import invariant from "tiny-invariant";
import { additionalContext, type Client } from "../../../Client.js";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import { ObjectDefRef } from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ListPayload } from "../../ListPayload.js";
import type { CollectionConnectableParams } from "../base-list/BaseCollectionQuery.js";
import type { Changes } from "../Changes.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { Store } from "../Store.js";
import { ListQuery, RDP_IDX, RIDS_IDX } from "./ListQuery.js";

type ExtractRelevantObjectsResult = Record<"added" | "modified", {
  all: (ObjectHolder | InterfaceHolder)[];
  strictMatches: Set<(ObjectHolder | InterfaceHolder)>;
  sortaMatches: Set<(ObjectHolder | InterfaceHolder)>;
}>;

export class InterfaceListQuery extends ListQuery {
  protected createObjectSet(store: Store): ObjectSet<ObjectTypeDefinition> {
    const rdpConfig = this.cacheKey.otherKeys[RDP_IDX];
    const rids = this.cacheKey.otherKeys[RIDS_IDX];
    const type: string = "interface" as const;
    const objectTypeDef = {
      type,
      apiName: this.apiName,
    } as ObjectTypeDefinition;

    let objectSet: ObjectSet<ObjectTypeDefinition>;
    if (rids != null) {
      const clientCtx = store.client[additionalContext];
      objectSet = clientCtx.objectSetFactory(
        objectTypeDef,
        clientCtx,
        { type: "static", objects: [...rids] },
      );
    } else {
      objectSet = store.client(objectTypeDef);
    }

    if (rdpConfig != null) {
      objectSet = objectSet.withProperties(rdpConfig as Rdp);
    }

    return objectSet.where(this.canonicalWhere);
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
