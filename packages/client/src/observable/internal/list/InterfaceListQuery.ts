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
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import groupBy from "object.groupby";
import invariant from "tiny-invariant";
import type { Client } from "../../../Client.js";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import {
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { Changes } from "../Changes.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { Store } from "../Store.js";
import { ListQuery, RDP_IDX } from "./ListQuery.js";

type ExtractRelevantObjectsResult = Record<"added" | "modified", {
  all: (ObjectHolder | InterfaceHolder)[];
  strictMatches: Set<(ObjectHolder | InterfaceHolder)>;
  sortaMatches: Set<(ObjectHolder | InterfaceHolder)>;
}>;

export class InterfaceListQuery extends ListQuery {
  protected createObjectSet(store: Store): ObjectSet<ObjectTypeDefinition> {
    const rdpConfig = this.cacheKey.otherKeys[RDP_IDX];
    if (rdpConfig != null) {
      return store.client({
        type: "interface" as const,
        apiName: this.apiName,
      } as ObjectOrInterfaceDefinition as ObjectTypeDefinition)
        // Note: order matters here, we need to apply withProperties before the where clause
        .withProperties(
          rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
        )
        .where(
          this.canonicalWhere as Parameters<
            ObjectSet<ObjectTypeDefinition>["where"]
          >[0],
        );
    }

    return store.client({
      type: "interface" as const,
      apiName: this.apiName,
    } as ObjectOrInterfaceDefinition as ObjectTypeDefinition)
      .where(
        this.canonicalWhere as Parameters<
          ObjectSet<ObjectTypeDefinition>["where"]
        >[0],
      );
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
        // to keep InternalSimpleOsdkInstance simple, we make both the `ObjectDefRef` and
        // the `InterfaceDefRef` optional but we know that the right one is on there
        // thus we can `!`
        const objectDef = (objects[0] as ObjectHolder)[UnderlyingOsdkObject][
          ObjectDefRef
        ]!;
        const where: SimpleWhereClause = {
          [objectDef.primaryKeyApiName]: {
            $in: objects.map(x => x.$primaryKey),
          },
        };

        const result = await client(
          objectDef as ObjectTypeDefinition,
        ).where(
          where as Parameters<ObjectSet<ObjectTypeDefinition>["where"]>[0],
        ).fetchPage();
        return [
          apiName,
          Object.fromEntries(result.data.map(
            x => [x.$primaryKey, x],
          )),
        ];
      }),
    ),
  );

  data = data.map((obj) => {
    invariant(
      objectTypeToPrimaryKeyToObject[obj.$objectType][obj.$primaryKey],
      `Could not find object ${obj.$objectType} ${obj.$primaryKey}`,
    );
    return objectTypeToPrimaryKeyToObject[obj.$objectType][obj.$primaryKey];
  });

  return data;
}
