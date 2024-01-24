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
  ObjectSetDefinition,
  SearchAroundObjectSetDefinition,
} from "../baseTypes/index.js";
import type { ObjectSet } from "../interfaces/objectSet.js";
import type { SearchAround } from "../interfaces/searchAround.js";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject.js";
import { createOsdkObjectSet } from "./OsdkObjectSet.js";

export function createObjectSetSearchAround<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(
  client: ClientContext<O>,
  sourceApiName: K,
  objectSet: ObjectSetDefinition,
): SearchAround<OsdkLegacyObjectFrom<O, K>> {
  const result = {} as SearchAround<OsdkLegacyObjectFrom<O, K>>;
  const objectDefinition = client.ontology.objects[sourceApiName];

  for (const [link, { targetType }] of Object.entries(objectDefinition.links)) {
    const key = `searchAround${capitalize(link)}`;

    result[key as keyof typeof result] = (() => {
      const definition = {
        type: "searchAround",
        objectSet,
        link,
      } satisfies SearchAroundObjectSetDefinition;

      const objSet = createOsdkObjectSet(
        client,
        targetType,
        definition,
      );

      return objSet as ObjectSet<any>;
    }) as any;
  }

  return result;
}

function capitalize<S extends string>(s: S): Capitalize<S> {
  return (s.charAt(0).toUpperCase() + s.substring(1)) as Capitalize<S>;
}
