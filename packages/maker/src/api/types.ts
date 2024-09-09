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

import type { OntologyIrInterfaceType , OntologyIrValueTypeBlockDataEntry } from "@osdk/client.unstable";
import type * as Gateway from "@osdk/gateway/types";

export interface Ontology extends
  Omit<
    Gateway.OntologyFullMetadata,
    "ontology" | "sharedPropertyTypes" | "interfaceTypes"
  >
{
  interfaceTypes: Record<string, InterfaceType>;
  sharedPropertyTypes: Record<string, SharedPropertyType>;
  valueTypes: Record<string, OntologyIrValueTypeBlockDataEntry>
}

export interface InterfaceType extends
  Omit<
    OntologyIrInterfaceType,
    // we want our simplified representation
    | "properties"
    // these things don't need to exist as the system works fine without them (I'm told)
    | "allProperties"
    | "allLinks"
    | "allExtendsInterfaces"
  >
{
  properties: Record<string, SharedPropertyType>;
}

export interface PropertyType {
  type: PropertyTypeType;
  array?: boolean;
  description?: string;
  displayName?: string;
}

export interface SharedPropertyType extends PropertyType {
  apiName: string;
}

export type PropertyTypeType =
  | "boolean"
  | "byte"
  | "date"
  | "decimal"
  | "double"
  | "float"
  | "geopoint"
  | "geoshape"
  | "integer"
  | "long"
  | "marking"
  | "short"
  | "string"
  | "timestamp";


export type OntologyIrPackagedValueType =  {
  version: ValueTypeVersion
  baseType: BaseType
  constraints: list<ValueTypeDataConstraint>
  exampleValues: list<ExampleValue>
}