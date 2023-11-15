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
  ObjectInfoFrom,
  ObjectTypesFrom,
  OntologyDefinition,
  OsdkObjectPropertyType,
  PropertyKeysFrom,
} from "./Definition";

export type OsdkObjectFrom<
  T_ObjectTypeKey extends ObjectTypesFrom<T_Ontology>,
  T_Ontology extends OntologyDefinition<any>,
  T_PropertyKeys extends PropertyKeysFrom<T_Ontology, T_ObjectTypeKey> =
    PropertyKeysFrom<T_Ontology, T_ObjectTypeKey>,
> =
  // & {
  //   "$raw": {
  //     [P in T_PropertyKeys]: OsdkObjectRawPropertyType<
  //       ObjectInfoFrom<T_Ontology, T_ObjectTypeKey>["properties"][P]
  //     >;
  //   };
  // }
  & {
    [P in T_PropertyKeys]: OsdkObjectPropertyType<
      ObjectInfoFrom<T_Ontology, T_ObjectTypeKey>["properties"][P]
    >;
  }
  & {
    /**@deprecated Use __apiName */
    __name: T_ObjectTypeKey;

    __apiName: T_ObjectTypeKey;
    __primaryKey: ObjectInfoFrom<T_Ontology, T_ObjectTypeKey>["primaryKeyType"];
    /**
     * Future versions will require explicitly asking for this field. For now we are marking
     * as always optional to avoid breaking changes.
     */
    __rid?: string;
  }; // TODO
