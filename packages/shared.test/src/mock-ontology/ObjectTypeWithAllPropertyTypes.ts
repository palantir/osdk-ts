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

import type { ObjectTypeDefinition } from "@osdk/api";

export const ObjectTypeWithAllPropertyTypes = {
  type: "object",
  apiName: "ObjectTypeWithAllPropertyTypes",
  primaryKeyType: "integer",
  links: {},
  properties: {
    id: {
      multiplicity: false,
      type: "integer",
    },
    string: {
      multiplicity: false,
      type: "string",
    },
    boolean: {
      multiplicity: false,
      type: "boolean",
    },
    date: {
      multiplicity: false,
      type: "datetime",
    },
    dateTime: {
      multiplicity: false,
      type: "timestamp",
    },
    decimal: {
      multiplicity: false,
      type: "decimal",
    },
    integer: {
      multiplicity: false,
      type: "integer",
    },
    long: {
      multiplicity: false,
      type: "long",
    },
    short: {
      multiplicity: false,
      type: "short",
    },
    float: {
      multiplicity: false,
      type: "float",
    },
    double: {
      multiplicity: false,
      type: "double",
    },
    byte: {
      multiplicity: false,
      type: "byte",
    },
    attachment: {
      multiplicity: false,
      type: "attachment",
    },
    geoPoint: {
      multiplicity: false,
      type: "geopoint",
    },
    geoShape: {
      multiplicity: false,
      type: "geoshape",
    },
    stringArray: {
      multiplicity: true,
      type: "string",
    },
    booleanArray: {
      multiplicity: true,
      type: "boolean",
    },
    dateArray: {
      multiplicity: true,
      type: "datetime",
    },
    dateTimeArray: {
      multiplicity: true,
      type: "timestamp",
    },
    decimalArray: {
      multiplicity: true,
      type: "decimal",
    },
    integerArray: {
      multiplicity: true,
      type: "integer",
    },
    longArray: {
      multiplicity: true,
      type: "long",
    },
    shortArray: {
      multiplicity: true,
      type: "short",
    },
    floatArray: {
      multiplicity: true,
      type: "float",
    },
    doubleArray: {
      multiplicity: true,
      type: "double",
    },
    byteArray: {
      multiplicity: true,
      type: "byte",
    },
    attachmentArray: {
      multiplicity: true,
      type: "attachment",
    },
    geoPointArray: {
      multiplicity: true,
      type: "geopoint",
    },
    geoShapeArray: {
      multiplicity: true,
      type: "geoshape",
    },
  },
} satisfies ObjectTypeDefinition<
  "ObjectTypeWithAllPropertyTypes"
>;
