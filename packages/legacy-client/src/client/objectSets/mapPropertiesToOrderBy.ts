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
import type { ObjectSetOrderByArg } from "../interfaces/ordering.js";
import { OrderByOption } from "../objectSets/filters/index.js";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject.js";
import { isReservedKeyword } from "../utils/reservedKeywords.js";

export function mapPropertiesToOrderBy<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(ontology: O, type: K) {
  return Object.entries(ontology.objects[type].properties).reduce(
    (acc, [propertyName]) => {
      acc[propertyName] = OrderByOption(propertyName);
      if (isReservedKeyword(propertyName)) {
        acc[`${propertyName}_`] = acc[propertyName];
      }
      return acc;
    },
    {} as {
      [key: string]: OrderByOption;
    },
  ) as ObjectSetOrderByArg<OsdkLegacyObjectFrom<O, K>>;
}
