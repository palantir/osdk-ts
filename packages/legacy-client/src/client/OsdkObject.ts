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
  LinkDefinitionFrom,
  LinkKeysFrom,
  LinkTargetTypeFrom,
  ObjectTypesFrom,
  OntologyDefinition,
  OsdkObjectPropertyType,
  PropertyDefinitionFrom,
  PropertyKeysFrom,
} from "@osdk/api";
import type {
  MultiLink,
  OntologyObject,
  SingleLink,
} from "../ontology-runtime/baseTypes";

export type OsdkLegacyPropertiesFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  [P in PropertyKeysFrom<O, K>]: OsdkObjectPropertyType<
    PropertyDefinitionFrom<O, K, P>
  >;
};

export type OsdkLegacyLinksFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  [L in LinkKeysFrom<O, K>]: LinkTargetTypeFrom<O, K, L> extends
    keyof O["objects"]
    ? LinkDefinitionFrom<O, K, L>["multiplicity"] extends true
      ? MultiLink<OsdkLegacyObjectFrom<O, LinkTargetTypeFrom<O, K, L>>>
    : SingleLink<
      OsdkLegacyObjectFrom<O, LinkTargetTypeFrom<O, K, L>>
    >
    : never;
};

export type OsdkLegacyObjectFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = K extends string ?
    & OsdkLegacyPropertiesFrom<O, K>
    & OsdkLegacyLinksFrom<O, K>
    & OntologyObject<K>
  : never;
