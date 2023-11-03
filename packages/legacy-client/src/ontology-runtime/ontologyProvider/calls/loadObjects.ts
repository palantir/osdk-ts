/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  ObjectTypesFrom,
  OntologyDefinition,
  ThinClient,
} from "@osdk/api";
import type { OsdkLegacyObjectFrom } from "../../../client/OsdkObject";
import type { ObjectSetDefinition } from "../../baseTypes";
import type { OrderByClause } from "../../filters";
import type { Page } from "../../paging";
import type { LoadObjectSetError } from "../Errors";
import type { Result } from "../Result";
import { loadObjectsPage } from "./loadObjectsPage";

export async function loadAllObjects<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  T extends OsdkLegacyObjectFrom<O, K>,
>(
  client: ThinClient<O>,
  objectApiName: K,
  objectSetDefinition: ObjectSetDefinition,
  orderByClauses: OrderByClause[],
  selectedProperties: Array<keyof T> = [],
): Promise<Result<T[], LoadObjectSetError>> {
  const allObjects: T[] = [];
  let page:
    | Result<Page<T>, LoadObjectSetError>
    | undefined;

  do {
    page = await loadObjectsPage<O, K, T>(
      client,
      objectApiName,
      objectSetDefinition,
      orderByClauses,
      selectedProperties,
      page?.type === "ok" && page.value.nextPageToken !== undefined
        ? {
          pageToken: page.value.nextPageToken,
        }
        : undefined,
    );

    if (page.type === "error") {
      return page;
    }

    for (const object of page.value.data) {
      allObjects.push(object);
    }
  } while (page.value.nextPageToken !== undefined);

  return { type: "ok", value: allObjects };
}
