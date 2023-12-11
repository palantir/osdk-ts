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
  InterfaceKeysFrom,
  InterfacePropertyDefinitionFrom,
  InterfacePropertyKeysFrom,
  ObjectTypeDefinitionFrom,
  ObjectTypeKeysFrom,
  ObjectTypePropertyKeysFrom,
  OntologyDefinition,
  WirePropertyTypes,
} from "@osdk/api";
import type { OsdkObjectPropertyType } from "./Definitions.js";

export type OsdkObjectPrimaryKeyType<
  TObjectName,
  O extends OntologyDefinition<any>,
> = TObjectName extends ObjectTypeKeysFrom<O> ? WirePropertyTypes[
    ObjectTypeDefinitionFrom<O, TObjectName>["primaryKeyType"]
  ]
  : never;

export type OsdkObjectFrom<
  T_ObjectTypeKey extends ObjectTypeKeysFrom<T_Ontology>,
  T_Ontology extends OntologyDefinition<any>,
  T_PropertyKeys extends ObjectTypePropertyKeysFrom<
    T_Ontology,
    T_ObjectTypeKey
  > = ObjectTypePropertyKeysFrom<T_Ontology, T_ObjectTypeKey>,
> =
  & {
    [P in T_PropertyKeys]: OsdkObjectPropertyType<
      ObjectTypeDefinitionFrom<T_Ontology, T_ObjectTypeKey>["properties"][P]
    >;
  }
  & {
    __apiName: T_ObjectTypeKey;
    __primaryKey: OsdkObjectPrimaryKeyType<T_ObjectTypeKey, T_Ontology>;
    /**
     * Future versions will require explicitly asking for this field. For now we are marking
     * as always optional to avoid breaking changes.
     */
    __rid?: string;
  }; // TODO

export type OsdkInterfaceFrom<
  T_InterfaceKey extends InterfaceKeysFrom<T_Ontology>,
  T_Ontology extends OntologyDefinition<any>,
  T_PropertyKeys extends InterfacePropertyKeysFrom<
    T_Ontology,
    T_InterfaceKey
  > = InterfacePropertyKeysFrom<T_Ontology, T_InterfaceKey>,
> =
  & {
    [P in T_PropertyKeys]: OsdkObjectPropertyType<
      InterfacePropertyDefinitionFrom<T_Ontology, T_InterfaceKey, P>
    >;
  }
  & {
    __apiName: T_InterfaceKey;
    __primaryKey: unknown;
    // $uniqueId: string; // will be dynamic
    /**
     * Future versions will require explicitly asking for this field. For now we are marking
     * as always optional to avoid breaking changes.
     */
    __rid?: string;
  }; // TODO
