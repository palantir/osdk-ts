/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  OntologyIrBaseParameterType_decimal,
  OntologyIrBaseParameterType_decimalList,
  OntologyIrBaseParameterType_interfaceReference,
  OntologyIrBaseParameterType_interfaceReferenceList,
  OntologyIrBaseParameterType_objectReference,
  OntologyIrBaseParameterType_objectReferenceList,
  OntologyIrBaseParameterType_objectSetRid,
  OntologyIrBaseParameterType_objectTypeReference,
  OntologyIrBaseParameterType_struct,
  OntologyIrBaseParameterType_structList,
  OntologyIrBaseParameterType_timestamp,
  OntologyIrBaseParameterType_timestampList,
} from "@osdk/client.unstable";

export type ActionParameterTypePrimitive =
  | "boolean"
  | "booleanList"
  | "integer"
  | "integerList"
  | "long"
  | "longList"
  | "double"
  | "doubleList"
  | "string"
  | "stringList"
  | "decimal"
  | "decimalList"
  | "timestamp"
  | "timestampList"
  | "geohash"
  | "geohashList"
  | "geoshape"
  | "geoshapeList"
  | "timeSeriesReference"
  | "date"
  | "dateList"
  | "objectTypeReference"
  | "attachment"
  | "attachmentList"
  | "marking"
  | "markingList"
  | "mediaReference"
  | "mediaReferenceList"
  | "geotimeSeriesReference"
  | "geotimeSeriesReferenceList";

// FIXME: these should not use conjure types
type ActionParameterTypeComplex =
  | OntologyIrBaseParameterType_decimal
  | OntologyIrBaseParameterType_decimalList
  | OntologyIrBaseParameterType_timestamp
  | OntologyIrBaseParameterType_timestampList
  | OntologyIrBaseParameterType_objectReference
  | OntologyIrBaseParameterType_objectReferenceList
  | OntologyIrBaseParameterType_objectSetRid
  | OntologyIrBaseParameterType_objectTypeReference
  | OntologyIrBaseParameterType_objectReference
  | OntologyIrBaseParameterType_interfaceReference
  | OntologyIrBaseParameterType_interfaceReferenceList
  | OntologyIrBaseParameterType_struct
  | OntologyIrBaseParameterType_structList;

export type ActionParameterType =
  | ActionParameterTypePrimitive
  | ActionParameterTypeComplex;
export function isActionParameterTypePrimitive(
  type: string,
): type is ActionParameterTypePrimitive {
  return [
    "boolean",
    "booleanList",
    "integer",
    "integerList",
    "long",
    "longList",
    "double",
    "doubleList",
    "string",
    "stringList",
    "decimal",
    "decimalList",
    "timestamp",
    "timestampList",
    "geohash",
    "geohashList",
    "geoshape",
    "geoshapeList",
    "timeSeriesReference",
    "date",
    "dateList",
    "objectTypeReference",
    "objectReference",
    "attachment",
    "attachmentList",
    "marking",
    "markingList",
    "mediaReference",
    "mediaReferenceList",
    "geotimeSeriesReference",
    "geotimeSeriesReferenceList",
  ].includes(type);
}
