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
import type { ObjectSetDefinition } from "../baseTypes";
import type { ObjectSetTerminalLoadStep } from "../interfaces";
import { loadAllObjects } from "../net/loadObjects";
import { loadObjectsPage } from "../net/loadObjectsPage";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject";
import type { OrderByClause } from "./filters";

export function createObjectSetTerminalLoadStep<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(
  client: ClientContext<O>,
  apiName: K,
  objectSet: ObjectSetDefinition,
  selectedProperties: string[] = [],
  orderByClauses: OrderByClause[] = [],
): ObjectSetTerminalLoadStep<OsdkLegacyObjectFrom<O, K>> {
  return {
    async page(options) {
      return loadObjectsPage<O, K, OsdkLegacyObjectFrom<O, K>>(
        client,
        apiName,
        objectSet,
        orderByClauses,
        selectedProperties,
        options,
      );
    },
    async all() {
      return loadAllObjects<O, K, OsdkLegacyObjectFrom<O, K>>(
        client,
        apiName,
        objectSet,
        orderByClauses,
        selectedProperties,
      );
    },
  };
}
