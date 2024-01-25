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
import type { Properties } from "../interfaces/utils/Properties.js";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject.js";

export function createPropertyDescriptions<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O> & string,
>(
  ontology: O,
  type: K,
): Properties<OsdkLegacyObjectFrom<O, K>> {
  const properties = ontology.objects[type].properties;
  return Object.fromEntries(
    Object.entries(properties).map((
      [propertyName, property],
    ) => [propertyName, {
      apiName: propertyName,
      description: property.description ?? "",
    }]),
  ) as unknown as Properties<OsdkLegacyObjectFrom<O, K>>;
}
