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

import type { ObjectTypesFrom, OntologyDefinition } from "@osdk/api";
import type {
  ObjectSetDefinition,
  OrderByClause,
} from "../../ontology-runtime";
import type { ClientContext } from "../../ontology-runtime/ontologyProvider/calls/ClientContext";
import type { ObjectSetOrderByStep } from "../interfaces";
import type { OsdkLegacyObjectFrom } from "../OsdkObject";
import { createObjectSetTerminalLoadStep } from "./createObjectSetTerminalLoadStep";
import { mapPropertiesToOrderBy } from "./mapPropertiesToOrderBy";

export function createObjectSetBaseOrderByStepMethod<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(
  clientContext: ClientContext,
  apiName: K,
  objectSet: ObjectSetDefinition,
  ontologyDefinition: O,
  orderByClauses: OrderByClause[] = [],
): Omit<ObjectSetOrderByStep<OsdkLegacyObjectFrom<O, K>>, "all" | "page"> {
  return {
    orderBy(predicate) {
      const objectProperties = ontologyDefinition.objects[apiName].properties;
      const orderBy = mapPropertiesToOrderBy<OsdkLegacyObjectFrom<O, K>>(
        objectProperties,
      );
      const orderByClause = predicate(orderBy);

      return createObjectSetOrderByStep(
        clientContext,
        apiName,
        objectSet,
        ontologyDefinition,
        [...orderByClauses, orderByClause],
      );
    },
  };
}

function createObjectSetOrderByStep<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(
  clientContext: ClientContext,
  apiName: K,
  objectSet: ObjectSetDefinition,
  ontologyDefinition: O,
  orderByClauses: OrderByClause[] = [],
): ObjectSetOrderByStep<OsdkLegacyObjectFrom<O, K>> {
  return {
    ...createObjectSetBaseOrderByStepMethod(
      clientContext,
      apiName,
      objectSet,
      ontologyDefinition,
      orderByClauses,
    ),
    ...createObjectSetTerminalLoadStep(
      clientContext,
      apiName,
      objectSet,
      [],
      orderByClauses,
    ),
  };
}
