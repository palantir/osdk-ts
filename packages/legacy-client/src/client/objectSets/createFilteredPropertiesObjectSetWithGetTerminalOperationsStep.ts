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

import type { ObjectTypeKeysFrom, OntologyDefinition } from "@osdk/api";
import type { ClientContext } from "@osdk/shared.net";
import type {
  FilteredPropertiesTerminalOperationsWithGet,
  ObjectSetDefinition,
} from "..";
import type { SelectableProperties } from "../interfaces/utils/OmitProperties";
import { getObject } from "../net/getObject";
import { loadAllObjects } from "../net/loadObjects";
import { loadObjectsPage } from "../net/loadObjectsPage";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject";
import type { OrderByClause } from "./filters";

export function createFilteredPropertiesObjectSetWithGetTerminalOperationsStep<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
  T extends keyof SelectableProperties<OsdkLegacyObjectFrom<O, K>>,
>(
  client: ClientContext<O>,
  apiName: K,
  objectSetDefinition: ObjectSetDefinition,
  properties: ReadonlyArray<T>,
  orderByClause: OrderByClause[] = [],
): FilteredPropertiesTerminalOperationsWithGet<
  OsdkLegacyObjectFrom<O, K>,
  T[]
> {
  return {
    all() {
      return loadAllObjects(
        client,
        apiName,
        objectSetDefinition,
        orderByClause,
        properties,
      );
    },
    page(options) {
      return loadObjectsPage(
        client,
        apiName,
        objectSetDefinition,
        orderByClause,
        properties,
        options,
      );
    },
    get(primaryKey) {
      return getObject(client, apiName as string, primaryKey, properties);
    },
  };
}
