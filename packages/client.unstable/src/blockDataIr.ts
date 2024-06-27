/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  InterfaceTypeBlockDataV2,
  OntologyBlockDataV2,
  SharedPropertyTypeBlockDataV2,
} from "./generated/ontology-metadata/api/blockdata/index.js";
import type { InterfaceLinkType } from "./generated/ontology-metadata/api/InterfaceLinkType.js";
import type { InterfaceType } from "./generated/ontology-metadata/api/InterfaceType.js";
import type { SharedPropertyType } from "./generated/ontology-metadata/api/SharedPropertyType.js";

export type InterfaceTypeApiName = string;
export type ObjectTypeFieldApiName = string;
export type InterfaceLinkTypeApiName = string;

export interface OntologyIrOntologyBlockDataV2 extends
  ReplaceKeys<
    Omit<
      OntologyBlockDataV2,
      | "knownIdentifiers"
      | "objectTypes"
      | "linkTypes"
      | "ruleSets"
      | "actionTypes"
      | "blockOutputCompassLocations"
    >,
    {
      interfaceTypes: Record<string, OntologyIrInterfaceTypeBlockDataV2>;
      sharedPropertyTypes: Record<
        string,
        OntologyIrSharedPropertyTypeBlockDataV2
      >;
    }
  >
{
}

export interface OntologyIrInterfaceType
  extends
    ReplaceKeys<Omit<InterfaceType, "rid">, {
      properties: OntologyIrSharedPropertyType[];
      allProperties: OntologyIrSharedPropertyType[];
      extendsInterfaces: string[];
      allExtendsInterfaces: string[];
      links: OntologyIrInterfaceLinkType[];
      allLinks: OntologyIrInterfaceLinkType[];
    }>
{}

export interface OntologyIrSharedPropertyType
  extends Omit<SharedPropertyType, "rid">
{}

export interface OntologyIrInterfaceLinkType
  extends Omit<InterfaceLinkType, "rid">
{}

export type OntologyIrInterfaceTypeBlockDataV2 = ReplaceKeys<
  InterfaceTypeBlockDataV2,
  {
    interfaceType: OntologyIrInterfaceType;
  }
>;

export interface OntologyIrSharedPropertyTypeBlockDataV2 extends
  ReplaceKeys<
    SharedPropertyTypeBlockDataV2,
    {
      sharedPropertyType: OntologyIrSharedPropertyType;
    }
  >
{}

type ReplaceKeys<T, Z extends { [K in keyof T]?: unknown }> = {
  [K in keyof T]: K extends keyof Z ? Z[K] : T[K];
};
