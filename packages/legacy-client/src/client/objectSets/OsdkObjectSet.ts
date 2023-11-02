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
import {
  type BaseObjectSetDefinition,
  type FilteredPropertiesTerminalOperations,
  type FilterObjectSetDefinition,
  type ObjectSetDefinition,
} from "../../ontology-runtime";
import type { ClientContext } from "../../ontology-runtime/ontologyProvider/calls/ClientContext";
import { getObject } from "../../ontology-runtime/ontologyProvider/calls/getObject";
import type {
  BaseObjectSet,
  BaseObjectSetOperations,
  ObjectSet,
  ObjectSetOperations,
} from "../interfaces";
import type { SelectableProperties } from "../interfaces/utils/OmitProperties";
import type { OsdkLegacyObjectFrom } from "../OsdkObject";
import { createObjectSetAggregationStep } from "./createObjectSetAggregationStep";
import { createObjectSetBaseOrderByStepMethod } from "./createObjectSetOrderByStep";
import { createObjectSetSearchAround } from "./createObjectSetSearchAround";
import { createObjectSetTerminalLoadStep } from "./createObjectSetTerminalLoadStep";
import { mapPropertiesToSearchFilter } from "./mapPropertiesToSearchFilter";

export function createOsdkObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(
  clientContext: ClientContext,
  apiName: K,
  objectSetDefinition: ObjectSetDefinition,
  ontologyDefinition: O,
): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
  const objectSet: ObjectSetOperations<OsdkLegacyObjectFrom<O, K>> = {
    union(...otherObjectSets): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
      return createOsdkObjectSet(
        clientContext,
        apiName,
        {
          type: "union",
          objectSets: [
            objectSetDefinition,
            ...otherObjectSets.map((s) => s.definition),
          ],
        },
        ontologyDefinition,
      );
    },
    intersect(...otherObjectSets): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
      return createOsdkObjectSet(
        clientContext,
        apiName,
        {
          type: "intersect",
          objectSets: [
            objectSetDefinition,
            ...otherObjectSets.map((s) => s.definition),
          ],
        },
        ontologyDefinition,
      );
    },
    subtract(...otherObjectSets): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
      return createOsdkObjectSet(
        clientContext,
        apiName,
        {
          type: "subtract",
          objectSets: [
            objectSetDefinition,
            ...otherObjectSets.map((s) => s.definition),
          ],
        },
        ontologyDefinition,
      );
    },
    where(predicate): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
      const objectProperties = ontologyDefinition.objects[apiName].properties;
      const filters = mapPropertiesToSearchFilter<OsdkLegacyObjectFrom<O, K>>(
        objectProperties,
      );
      const whereClause = predicate(filters);
      const newDefinition: FilterObjectSetDefinition = {
        type: "filter",
        objectSet: objectSetDefinition,
        where: whereClause,
      };

      return createOsdkObjectSet(
        clientContext,
        apiName,
        newDefinition,
        ontologyDefinition,
      );
    },
    select<T extends keyof SelectableProperties<OsdkLegacyObjectFrom<O, K>>>(
      properties: T[],
    ): FilteredPropertiesTerminalOperations<OsdkLegacyObjectFrom<O, K>, T[]> {
      throw new Error("not implemented");
    },
  };

  return {
    definition: objectSetDefinition,
    ...objectSet,
    ...createObjectSetSearchAround(
      clientContext,
      apiName,
      objectSetDefinition,
      ontologyDefinition,
    ),
    ...createObjectSetBaseOrderByStepMethod(
      clientContext,
      apiName,
      objectSetDefinition,
      ontologyDefinition,
    ),
    ...createObjectSetAggregationStep(
      clientContext,
      apiName,
      objectSetDefinition,
      [],
    ),
    ...createObjectSetTerminalLoadStep(
      clientContext,
      apiName,
      objectSetDefinition,
    ),
  };
}

export function createBaseOsdkObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O> & string,
>(
  clientContext: ClientContext,
  apiName: K,
  ontologyDefinition: O,
): BaseObjectSet<OsdkLegacyObjectFrom<O, K>> {
  const baseObjectSetDefinition: BaseObjectSetDefinition = {
    type: "base",
    objectType: apiName,
  };

  const objectSet: BaseObjectSetOperations<OsdkLegacyObjectFrom<O, K>> = {
    apiName: apiName as string as OsdkLegacyObjectFrom<O, K>["__apiName"],
    description: ontologyDefinition.objects[apiName].description ?? "",
    get(primaryKey) {
      return getObject(clientContext, apiName, primaryKey);
    },
    select(properties) {
      throw new Error("not implemented");
    },
  };

  return {
    ...objectSet,
    ...createOsdkObjectSet<O, K>(
      clientContext,
      apiName,
      baseObjectSetDefinition,
      ontologyDefinition,
    ),
  };
}
