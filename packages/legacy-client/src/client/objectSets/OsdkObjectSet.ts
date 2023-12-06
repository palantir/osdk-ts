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
  BaseObjectSetDefinition,
  FilteredPropertiesTerminalOperationsWithGet,
  FilterObjectSetDefinition,
  ObjectSetDefinition,
} from "../baseTypes";
import type {
  BaseObjectSet,
  BaseObjectSetOperations,
  ObjectSet,
  ObjectSetOperations,
} from "../interfaces";
import type { SelectableProperties } from "../interfaces/utils/OmitProperties";
import { getObject } from "../net/getObject";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject";
import { createCachedOntologyTransform } from "./createCachedOntologyTransform";
import { createFilteredPropertiesObjectSetWithGetTerminalOperationsStep } from "./createFilteredPropertiesObjectSetWithGetTerminalOperationsStep";
import { createObjectSetAggregationStep } from "./createObjectSetAggregationStep";
import { createObjectSetBaseOrderByStepMethod } from "./createObjectSetOrderByStep";
import { createObjectSetSearchAround } from "./createObjectSetSearchAround";
import { createObjectSetTerminalLoadStep } from "./createObjectSetTerminalLoadStep";
import { createPropertyDescriptions } from "./createPropertyDescriptions";
import { mapPropertiesToSearchFilter } from "./mapPropertiesToSearchFilter";

const getSearchProperties = createCachedOntologyTransform(
  mapPropertiesToSearchFilter,
);

export function createOsdkObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(
  client: ClientContext<O>,
  apiName: K,
  objectSetDefinition: ObjectSetDefinition,
): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
  const objectSet: ObjectSetOperations<OsdkLegacyObjectFrom<O, K>> = {
    union(...otherObjectSets): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
      return createOsdkObjectSet(
        client,
        apiName,
        {
          type: "union",
          objectSets: [
            objectSetDefinition,
            ...otherObjectSets.map((s) => s.definition),
          ],
        },
      );
    },
    intersect(...otherObjectSets): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
      return createOsdkObjectSet(
        client,
        apiName,
        {
          type: "intersect",
          objectSets: [
            objectSetDefinition,
            ...otherObjectSets.map((s) => s.definition),
          ],
        },
      );
    },
    subtract(...otherObjectSets): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
      return createOsdkObjectSet(
        client,
        apiName,
        {
          type: "subtract",
          objectSets: [
            objectSetDefinition,
            ...otherObjectSets.map((s) => s.definition),
          ],
        },
      );
    },
    where(predicate): ObjectSet<OsdkLegacyObjectFrom<O, K>> {
      const filters = getSearchProperties(client.ontology, apiName);
      const whereClause = predicate(filters);
      const newDefinition: FilterObjectSetDefinition = {
        type: "filter",
        objectSet: objectSetDefinition,
        where: whereClause,
      };

      return createOsdkObjectSet(
        client,
        apiName,
        newDefinition,
      );
    },
    select<T extends keyof SelectableProperties<OsdkLegacyObjectFrom<O, K>>>(
      properties: T[],
    ): FilteredPropertiesTerminalOperationsWithGet<
      OsdkLegacyObjectFrom<O, K>,
      T[]
    > {
      return createFilteredPropertiesObjectSetWithGetTerminalOperationsStep(
        client,
        apiName,
        objectSetDefinition,
        properties,
      );
    },
  };

  return {
    definition: objectSetDefinition,
    ...objectSet,
    ...createObjectSetSearchAround(
      client,
      apiName,
      objectSetDefinition,
    ),
    ...createObjectSetBaseOrderByStepMethod(
      client,
      apiName,
      objectSetDefinition,
    ),
    ...createObjectSetAggregationStep(
      client,
      apiName,
      objectSetDefinition,
      [],
    ),
    ...createObjectSetTerminalLoadStep(
      client,
      apiName,
      objectSetDefinition,
    ),
  };
}

export function createBaseOsdkObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O> & string,
>(
  client: ClientContext<O>,
  apiName: K,
): BaseObjectSet<OsdkLegacyObjectFrom<O, K>> {
  const baseObjectSetDefinition: BaseObjectSetDefinition = {
    type: "base",
    objectType: apiName,
  };

  const objectSet: BaseObjectSetOperations<OsdkLegacyObjectFrom<O, K>> = {
    apiName: apiName as string as OsdkLegacyObjectFrom<O, K>["__apiName"],

    description: client.ontology.objects[apiName].description ?? "",

    properties: createCachedOntologyTransform(createPropertyDescriptions)(
      client.ontology,
      apiName,
    ),

    get(primaryKey) {
      return getObject(client, apiName, primaryKey);
    },
    select(properties) {
      return createFilteredPropertiesObjectSetWithGetTerminalOperationsStep(
        client,
        apiName,
        baseObjectSetDefinition,
        properties,
      );
    },
  };

  return {
    ...objectSet,
    ...createOsdkObjectSet<O, K>(
      client,
      apiName,
      baseObjectSetDefinition,
    ),
  };
}
