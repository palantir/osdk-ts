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
import type { ObjectSetOrderByStep } from "../interfaces";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject";
import { createCachedOntologyTransform } from "./createCachedOntologyTransform";
import { createFilteredPropertiesObjectSetWithGetTerminalOperationsStep } from "./createFilteredPropertiesObjectSetWithGetTerminalOperationsStep";
import { createObjectSetTerminalLoadStep } from "./createObjectSetTerminalLoadStep";
import type { OrderByClause } from "./filters";
import { mapPropertiesToOrderBy } from "./mapPropertiesToOrderBy";

const getOrderByProperties = createCachedOntologyTransform(
  mapPropertiesToOrderBy,
);

export function createObjectSetBaseOrderByStepMethod<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(
  client: ClientContext<O>,
  apiName: K,
  objectSet: ObjectSetDefinition,
  orderByClauses: OrderByClause[] = [],
): Omit<
  ObjectSetOrderByStep<OsdkLegacyObjectFrom<O, K>>,
  "all" | "page" | "select" | "fetchPage" | "fetchPageWithErrors" | "asyncIter"
> {
  return {
    orderBy(predicate) {
      const orderBy = getOrderByProperties(client.ontology, apiName);
      const orderByClause = predicate(orderBy);

      return createObjectSetOrderByStep(
        client,
        apiName,
        objectSet,
        [...orderByClauses, orderByClause],
      );
    },
  };
}

function createObjectSetOrderByStep<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(
  client: ClientContext<O>,
  apiName: K,
  objectSet: ObjectSetDefinition,
  orderByClauses: OrderByClause[] = [],
): ObjectSetOrderByStep<OsdkLegacyObjectFrom<O, K>> {
  return {
    ...createObjectSetBaseOrderByStepMethod(
      client,
      apiName,
      objectSet,
      orderByClauses,
    ),
    ...createObjectSetTerminalLoadStep(
      client,
      apiName,
      objectSet,
      [],
      orderByClauses,
    ),
    select(properties) {
      return createFilteredPropertiesObjectSetWithGetTerminalOperationsStep(
        client,
        apiName,
        objectSet,
        properties,
        orderByClauses,
      );
    },
  };
}
