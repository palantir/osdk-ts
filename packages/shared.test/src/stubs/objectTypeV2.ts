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

import type { ObjectTypeV2 } from "@osdk/internal.foundry.core";

export const employeeObjectType: ObjectTypeV2 = {
  apiName: "Employee",
  displayName: "Employee",
  pluralDisplayName: "Employees",
  icon: { type: "blueprint", color: "blue", name: "person" },
  description: "A full-time or part-time \n\n employee of our firm",
  primaryKey: "employeeId",
  titleProperty: "fullName",
  visibility: "NORMAL",
  properties: {
    employeeId: {
      dataType: {
        type: "integer",
      },
    },
    fullName: {
      dataType: {
        type: "string",
      },
    },
    office: {
      description:
        "The unique \"ID\" of the employee's \\\"primary\\\" assigned office.\n This is some more text.",
      dataType: {
        type: "string",
      },
    },
    startDate: {
      description:
        "The date the employee was hired (most recently, if they were re-hired)",
      dataType: {
        type: "date",
      },
    },
    employeeStatus: {
      description: "TimeSeries of the status of the employee",
      dataType: {
        type: "timeseries",
        itemType: {
          type: "string",
        },
      },
    },
    employeeLocation: {
      description: "Geotime series reference of the location of the employee",
      dataType: {
        type: "geotimeSeriesReference",
      },
    },
  },
  rid: "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44",
  status: "ACTIVE",
};

export const officeObjectType: ObjectTypeV2 = {
  apiName: "Office",
  displayName: "Office",
  pluralDisplayName: "Office",
  icon: { type: "blueprint", color: "blue", name: "office" },
  description: "A office in our Company",
  primaryKey: "officeId",
  titleProperty: "officeId",
  properties: {
    officeId: {
      dataType: {
        type: "string",
      },
    },
    entrance: {
      dataType: {
        type: "geopoint",
      },
    },
    occupiedArea: {
      description: "The occupied area of the Office",
      dataType: {
        type: "geoshape",
      },
    },
    name: {
      description: "The Name of the Office",
      dataType: {
        type: "string",
      },
    },
  },
  rid: "ri.ontology.main.object-type.404ac022-89eb-4591-8b7e-1a912b9efb45",
  status: "ACTIVE",
};

export const equipmentObjectType: ObjectTypeV2 = {
  apiName: "equipment",
  displayName: "Equipment",
  pluralDisplayName: "Equipment",
  icon: { type: "blueprint", color: "blue", name: "gear" },
  primaryKey: "equipmentId",
  titleProperty: "type",
  properties: {
    equipmentId: {
      description: "The id of an equipment",
      dataType: {
        type: "string",
      },
    },
    type: {
      dataType: {
        type: "string",
      },
    },
  },
  rid: "ri.ontology.main.object-type.808ac022-89eb-4591-8b7e-1a912b9efb45",
  status: "ACTIVE",
};

export const objectTypeWithTimestampPrimaryKey: ObjectTypeV2 = {
  apiName: "ObjectWithTimestampPrimaryKey",
  displayName: "ObjectWithTimestampPrimaryKey",
  pluralDisplayName: "ObjectWithTimestampPrimaryKeys",
  icon: { type: "blueprint", color: "blue", name: "person" },
  description: "Object Type With Timestamp Primary Key",
  primaryKey: "timestamp",
  titleProperty: "value",
  properties: {
    timestamp: {
      dataType: {
        type: "timestamp",
      },
    },
    value: {
      dataType: {
        type: "string",
      },
    },
  },
  rid: "ri.ontology.main.object-type.32bb9402-9cab-4705-81bb-edb65a4a6806",
  status: "ACTIVE",
};

export const objectTypeWithAllPropertyTypes: ObjectTypeV2 = {
  apiName: "objectTypeWithAllPropertyTypes",
  displayName: "objectTypeWithAllPropertyType",
  pluralDisplayName: "objectTypeWithAllPropertyTypes",
  icon: { type: "blueprint", color: "blue", name: "person" },
  description: "An object type with all property types",
  primaryKey: "id",
  titleProperty: "string",
  properties: {
    id: {
      dataType: {
        type: "integer",
      },
    },
    string: {
      dataType: {
        type: "string",
      },
    },
    boolean: {
      dataType: {
        type: "boolean",
      },
    },
    date: {
      dataType: {
        type: "date",
      },
    },
    dateTime: {
      dataType: {
        type: "timestamp",
      },
    },
    decimal: {
      dataType: {
        type: "decimal",
      },
    },
    integer: {
      dataType: {
        type: "integer",
      },
    },
    long: {
      dataType: {
        type: "long",
      },
    },
    short: {
      dataType: {
        type: "short",
      },
    },
    float: {
      dataType: {
        type: "float",
      },
    },
    double: {
      dataType: {
        type: "double",
      },
    },
    byte: {
      dataType: {
        type: "byte",
      },
    },
    attachment: {
      dataType: {
        type: "attachment",
      },
    },
    attachment2: {
      dataType: {
        type: "attachment",
      },
    },
    geoPoint: {
      dataType: {
        type: "geopoint",
      },
    },
    geoShape: {
      dataType: {
        type: "geoshape",
      },
    },
    stringArray: {
      dataType: {
        type: "array",
        subType: {
          type: "string",
        },
      },
    },
    booleanArray: {
      dataType: {
        type: "array",
        subType: {
          type: "boolean",
        },
      },
    },
    dateArray: {
      dataType: {
        type: "array",
        subType: {
          type: "date",
        },
      },
    },
    dateTimeArray: {
      dataType: {
        type: "array",
        subType: {
          type: "timestamp",
        },
      },
    },
    decimalArray: {
      dataType: {
        type: "array",
        subType: {
          type: "decimal",
        },
      },
    },
    integerArray: {
      dataType: {
        type: "array",
        subType: {
          type: "integer",
        },
      },
    },
    longArray: {
      dataType: {
        type: "array",
        subType: {
          type: "long",
        },
      },
    },
    shortArray: {
      dataType: {
        type: "array",
        subType: {
          type: "short",
        },
      },
    },
    floatArray: {
      dataType: {
        type: "array",
        subType: {
          type: "float",
        },
      },
    },
    doubleArray: {
      dataType: {
        type: "array",
        subType: {
          type: "double",
        },
      },
    },
    byteArray: {
      dataType: {
        type: "array",
        subType: {
          type: "byte",
        },
      },
    },
    attachmentArray: {
      dataType: {
        type: "array",
        subType: {
          type: "attachment",
        },
      },
    },
    geoPointArray: {
      dataType: {
        type: "array",
        subType: {
          type: "geopoint",
        },
      },
    },
    geoShapeArray: {
      dataType: {
        type: "array",
        subType: {
          type: "geoshape",
        },
      },
    },
  },
  rid: "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44",
  status: "ACTIVE",
};

export const ObjectTypesV2: ObjectTypeV2[] = [
  employeeObjectType,
  objectTypeWithAllPropertyTypes,
  objectTypeWithTimestampPrimaryKey,
  officeObjectType,
  equipmentObjectType,
];

export const taskObjectType: ObjectTypeV2 = {
  apiName: "Task",
  displayName: "Task",
  pluralDisplayName: "Tasks",
  icon: { type: "blueprint", color: "blue", name: "box" },
  primaryKey: "id",
  properties: {
    id: {
      dataType: {
        type: "integer",
      },
    },

    name: { dataType: { type: "string" } },
  },
  status: "ACTIVE",
  rid: "ri.task",
  titleProperty: "name",
};

export const todoObjectType: ObjectTypeV2 = {
  apiName: "Todo",
  displayName: "Todo",
  pluralDisplayName: "ManyTodo",
  icon: { type: "blueprint", color: "blue", name: "box" },
  primaryKey: "id",
  properties: {
    id: {
      dataType: {
        type: "integer",
      },
    },
    text: {
      dataType: {
        type: "string",
      },
    },
  },
  rid: "ri.todo",
  status: "ACTIVE",
  titleProperty: "text",
};

export const personObjectType: ObjectTypeV2 = {
  apiName: "Person",
  displayName: "Person",
  pluralDisplayName: "Persons",
  icon: { type: "blueprint", color: "blue", name: "person" },
  primaryKey: "id",
  properties: {
    id: {
      dataType: {
        type: "integer",
      },
    },
    name: {
      dataType: {
        type: "string",
      },
    },
  },
  rid: "ri.person",
  status: "ACTIVE",
  titleProperty: "name",
};
