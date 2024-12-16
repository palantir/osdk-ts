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

import type { ObjectType } from "@osdk/internal.foundry.core";

export const employeeObjectType: ObjectType = {
  apiName: "Employee",
  description: "A full-time or part-time \n\n employee of our firm",
  primaryKey: ["employeeId"],
  properties: {
    employeeId: {
      baseType: "Integer",
    },
    class: {
      baseType: "String",
    },
    fullName: {
      baseType: "String",
    },
    office: {
      description:
        "The unique \"ID\" of the employee's \\\"primary\\\" assigned office.\n This is some more text.",
      baseType: "String",
    },
    startDate: {
      description:
        "The date the employee was hired (most recently, if they were re-hired)",
      baseType: "LocalDate",
    },
    employeeStatus: {
      description: "TimeSeries of the status of the employee",
      baseType: "TimeSeries<String>",
    },
  },
  rid: "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44",
  status: "ACTIVE",
};

export const officeObjectType: ObjectType = {
  apiName: "Office",
  description: "A office in our Company",
  primaryKey: ["officeId"],
  properties: {
    officeId: {
      baseType: "String",
    },
    entrance: {
      baseType: "GeoPoint",
    },
    occupiedArea: {
      description: "The occupied area of the Office",
      baseType: "GeoShape",
    },
    name: {
      description: "The Name of the Office",
      baseType: "String",
    },
  },
  rid: "ri.ontology.main.object-type.404ac022-89eb-4591-8b7e-1a912b9efb45",
  status: "ACTIVE",
};

export const equipmentObjectType: ObjectType = {
  apiName: "equipment",
  primaryKey: ["equipmentId"],
  properties: {
    equipmentId: {
      baseType: "String",
      description: "The id of an equipment",
    },
    type: {
      baseType: "String",
    },
  },
  rid: "ri.ontology.main.object-type.808ac022-89eb-4591-8b7e-1a912b9efb45",
  status: "ACTIVE",
};

export const objectTypeWithTimestampPrimaryKey: ObjectType = {
  apiName: "ObjectWithTimestampPrimaryKey",
  description: "Object Type With Timestamp Primary Key",
  primaryKey: ["timestamp"],
  properties: {
    timestamp: {
      baseType: "Timestamp",
    },
    value: {
      baseType: "String",
    },
  },
  rid: "ri.ontology.main.object-type.32bb9402-9cab-4705-81bb-edb65a4a6806",
  status: "ACTIVE",
};

export const objectTypeWithAllPropertyTypes: ObjectType = {
  apiName: "objectTypeWithAllPropertyTypes",
  description: "An object type with all property types",
  primaryKey: ["id"],
  properties: {
    id: {
      baseType: "Integer",
    },
    string: {
      baseType: "String",
    },
    boolean: {
      baseType: "Boolean",
    },
    date: {
      baseType: "LocalDate",
    },
    dateTime: {
      baseType: "Timestamp",
    },
    decimal: {
      baseType: "Decimal",
    },
    integer: {
      baseType: "Integer",
    },
    long: {
      baseType: "Long",
    },
    short: {
      baseType: "Short",
    },
    float: {
      baseType: "Float",
    },
    double: {
      baseType: "Double",
    },
    byte: {
      baseType: "Byte",
    },
    attachment: {
      baseType: "Attachment",
    },
    attachment2: {
      baseType: "Attachment",
    },
    geoPoint: {
      baseType: "GeoPoint",
    },
    geoShape: {
      baseType: "GeoShape",
    },
    stringArray: {
      baseType: "Array<String>",
    },
    booleanArray: {
      baseType: "Array<Boolean>",
    },
    dateArray: {
      baseType: "Array<LocalDate>",
    },
    dateTimeArray: {
      baseType: "Array<Timestamp>",
    },
    decimalArray: {
      baseType: "Array<Decimal>",
    },
    integerArray: {
      baseType: "Array<Integer>",
    },
    longArray: {
      baseType: "Array<Long>",
    },
    shortArray: {
      baseType: "Array<Short>",
    },
    floatArray: {
      baseType: "Array<Float>",
    },
    doubleArray: {
      baseType: "Array<Double>",
    },
    byteArray: {
      baseType: "Array<Byte>",
    },
    attachmentArray: {
      baseType: "Array<Attachment>",
    },
    geoPointArray: {
      baseType: "Array<GeoPoint>",
    },
    geoShapeArray: {
      baseType: "Array<GeoShape>",
    },
    struct: {
      baseType: "Struct<{ firstName: String, lastName: String }>",
    },
  },
  rid: "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44",
  status: "ACTIVE",
};

export const ObjectTypes: ObjectType[] = [
  employeeObjectType,
  objectTypeWithAllPropertyTypes,
  officeObjectType,
  objectTypeWithTimestampPrimaryKey,
  equipmentObjectType,
];
