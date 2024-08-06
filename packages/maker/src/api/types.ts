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

import type { OntologyIrInterfaceType } from "@osdk/client.unstable";
import type * as Gateway from "@osdk/gateway/types";

export interface Ontology extends
  Omit<
    Gateway.OntologyFullMetadata,
    "ontology" | "sharedPropertyTypes" | "interfaceTypes"
  >
{
  interfaceTypes: Record<string, InterfaceType>;
  sharedPropertyTypes: Record<string, SharedPropertyType>;
}

export interface ValueTypes {
  valueTypes: Record<string, ValueTypeDefinition>;
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
  valueType?: ValueTypeReference;
}

export interface ValueTypeDefinition {
  reference: ValueTypeReference;
  type: ValueTypeBaseType;
  array?: boolean;
  description?: string;
  displayName?: string;
  constraints: ValueTypeDataConstraint[];
  exampleValues: ValueTypeExampleValue[];
}

export interface ValueTypeReference {
  apiName: string;
  version: string;
}

type CommonType =
  | "boolean"
  | "byte"
  | "date"
  | "decimal"
  | "double"
  | "float"
  | "integer"
  | "long"
  | "short"
  | "string"
  | "timestamp";

export type PropertyTypeType =
  | CommonType
  | "geopoint"
  | "geoshape"
  | "marking"
  | "valueType";

export type ValueTypeBaseType = CommonType;

export interface ValueTypeDataConstraint {
}

export interface ValueTypeExampleValue {
}
