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

import type { ObjectDefinition } from "@osdk/api";

export const ObjectTypeWithAllPropertyTypes = {
  apiName: "ObjectTypeWithAllPropertyTypes",
  description: "A type with all property types",
  primaryKeyType: "integer",
  links: {},
  properties: {
    id: {
      multiplicity: false,
      type: "integer",
      nullable: false,
    },
    string: {
      multiplicity: false,
      type: "string",
      nullable: true,
    },
    boolean: {
      multiplicity: false,
      type: "boolean",
      nullable: true,
    },
    date: {
      multiplicity: false,
      type: "datetime",
      nullable: true,
    },
    dateTime: {
      multiplicity: false,
      type: "timestamp",
      nullable: true,
    },
    decimal: {
      multiplicity: false,
      type: "decimal",
      nullable: true,
    },
    integer: {
      multiplicity: false,
      type: "integer",
      nullable: true,
    },
    long: {
      multiplicity: false,
      type: "long",
      nullable: true,
    },
    short: {
      multiplicity: false,
      type: "short",
      nullable: true,
    },
    float: {
      multiplicity: false,
      type: "float",
      nullable: true,
    },
    double: {
      multiplicity: false,
      type: "double",
      nullable: true,
    },
    byte: {
      multiplicity: false,
      type: "byte",
      nullable: true,
    },
    attachment: {
      multiplicity: false,
      type: "attachment",
      nullable: true,
    },
    geoPoint: {
      multiplicity: false,
      type: "geopoint",
      nullable: true,
    },
    geoShape: {
      multiplicity: false,
      type: "geoshape",
      nullable: true,
    },
    stringArray: {
      multiplicity: true,
      type: "string",
      nullable: true,
    },
    booleanArray: {
      multiplicity: true,
      type: "boolean",
      nullable: true,
    },
    dateArray: {
      multiplicity: true,
      type: "datetime",
      nullable: true,
    },
    dateTimeArray: {
      multiplicity: true,
      type: "timestamp",
      nullable: true,
    },
    decimalArray: {
      multiplicity: true,
      type: "decimal",
      nullable: true,
    },
    integerArray: {
      multiplicity: true,
      type: "integer",
      nullable: true,
    },
    longArray: {
      multiplicity: true,
      type: "long",
      nullable: true,
    },
    shortArray: {
      multiplicity: true,
      type: "short",
      nullable: true,
    },
    floatArray: {
      multiplicity: true,
      type: "float",
      nullable: true,
    },
    doubleArray: {
      multiplicity: true,
      type: "double",
      nullable: true,
    },
    byteArray: {
      multiplicity: true,
      type: "byte",
      nullable: true,
    },
    attachmentArray: {
      multiplicity: true,
      type: "attachment",
      nullable: true,
    },
    geoPointArray: {
      multiplicity: true,
      type: "geopoint",
      nullable: true,
    },
    geoShapeArray: {
      multiplicity: true,
      type: "geoshape",
      nullable: true,
    },
    numericTimeseries: {
      multiplicity: false,
      type: "numericTimeseries",
      nullable: true,
    },
    stringTimeseries: {
      multiplicity: false,
      type: "stringTimeseries",
      nullable: true,
    },
  },
} satisfies ObjectDefinition<"ObjectTypeWithAllPropertyTypes", never>;
