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
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  WhereClause,
} from "@osdk/api";
import { additionalContext } from "../../../Client.js";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import { ObjectDefRef } from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ListPayload } from "../../ListPayload.js";
import type { CollectionConnectableParams } from "../base-list/BaseCollectionQuery.js";
import type { Changes } from "../Changes.js";
import type { PivotInfo } from "../PivotCanonicalizer.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import type { Store } from "../Store.js";
import { reloadDataAsFullObjects } from "../utils/reloadDataAsFullObjects.js";
import { ListQuery, PIVOT_IDX, RDP_IDX, RIDS_IDX } from "./ListQuery.js";

type ExtractRelevantObjectsResult = Record<
  "added" | "modified",
  {
    all: (ObjectHolder | InterfaceHolder)[];
    strictMatches: Set<ObjectHolder | InterfaceHolder>;
    sortaMatches: Set<ObjectHolder | InterfaceHolder>;
  }
>;

export class InterfaceListQuery extends ListQuery {
  protected createObjectSet(store: Store): ObjectSet<ObjectTypeDefinition> {
    const rdpConfig = this.cacheKey.otherKeys[RDP_IDX];
    const pivotInfo = this.cacheKey.otherKeys[PIVOT_IDX];
    const rids = this.cacheKey.otherKeys[RIDS_IDX];

    if (pivotInfo != null) {
      const sourceSet = createSourceSetForPivot(store, pivotInfo, rids);

      let objectSet = sourceSet.where(this.canonicalWhere as WhereClause<any>)
        .pivotTo(pivotInfo.linkName);

      if (rdpConfig != null) {
        objectSet = objectSet.withProperties(
          rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
        );
      }

      // intersectWith for pivot queries is deferred to fetchPageData
      // where the target type can be resolved asynchronously
      return objectSet;
    }

    const type: string = "interface" as const;
    const objectTypeDef = {
      type,
      apiName: this.apiName,
    } as ObjectTypeDefinition;

    const clientCtx = store.client[additionalContext];
    let objectSet: ObjectSet<ObjectTypeDefinition>;
    if (rids != null) {
      objectSet = clientCtx.objectSetFactory(objectTypeDef, clientCtx, {
        type: "static",
        objects: [...rids],
      });
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

  private wrapObject(object: ObjectHolder): ObjectHolder | InterfaceHolder {
    return this.options.resolveToObjectType ? object : object.$as(this.apiName);
  }

  protected createPayload(params: CollectionConnectableParams): ListPayload {
    const resolvedList = params.resolvedData?.map(
      (obj: ObjectHolder) => this.wrapObject(obj),
    );

    return {
      ...super.createPayload(params),
      resolvedList,
    };
  }

  protected extractRelevantObjects(
    changes: Changes,
  ): ExtractRelevantObjectsResult {
    const matchesApiName = ([, object]: [unknown, ObjectHolder]) => {
      return this.apiName in object[ObjectDefRef].interfaceMap;
    };

    const added = Array.from(changes.addedObjects)
      .filter(matchesApiName)
      .map(([, object]) => this.wrapObject(object));

    const modified = Array.from(changes.modifiedObjects)
      .filter(matchesApiName)
      .map(([, object]) => this.wrapObject(object));

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

function createSourceSetForPivot(
  store: Store,
  pivotInfo: PivotInfo,
  rids: string[] | undefined,
): ObjectSet<ObjectOrInterfaceDefinition> {
  const clientCtx = store.client[additionalContext];

  if (rids != null) {
    return clientCtx.objectSetFactory(
      {
        type: "object",
        apiName: pivotInfo.sourceType,
      } as ObjectTypeDefinition,
      clientCtx,
      { type: "static", objects: [...rids] },
    );
  }

  if (pivotInfo.sourceTypeKind === "interface") {
    return store.client({
      type: "interface",
      apiName: pivotInfo.sourceType,
    } as InterfaceDefinition) as ObjectSet<ObjectOrInterfaceDefinition>;
  }

  return store.client({
    type: "object",
    apiName: pivotInfo.sourceType,
  } as ObjectTypeDefinition) as ObjectSet<ObjectOrInterfaceDefinition>;
}
