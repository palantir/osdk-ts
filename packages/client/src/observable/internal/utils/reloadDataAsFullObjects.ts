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
import invariant from "tiny-invariant";
import { type Client } from "../../../Client.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";

function groupBy<T>(arr: T[], fn: (item: T) => string): Record<string, T[]> {
  const result: Record<string, T[]> = {};
  for (const item of arr) {
    const key = fn(item);
    (result[key] ??= []).push(item);
  }
  return result;
}

// Hopefully this can go away when we can just request the full object properties on first load
export async function reloadDataAsFullObjects(
  client: Client,
  data: Osdk.Instance<any>[],
): Promise<Osdk.Instance<any>[]> {
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
            $in: objects.map((x) => x.$primaryKey),
          },
        };

        const result = await client(objectDef as ObjectTypeDefinition)
          .where(
            where as Parameters<ObjectSet<ObjectTypeDefinition>["where"]>[0],
          )
          .fetchPage({ $includeRid: true });
        return [
          apiName,
          Object.fromEntries(result.data.map((x) => [x.$primaryKey, x])),
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
