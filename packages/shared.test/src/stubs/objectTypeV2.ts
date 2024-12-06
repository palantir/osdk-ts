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
      rid: "rid",
    },
    fullName: {
      dataType: {
        type: "string",
      },
      rid: "rid",
    },
    office: {
      description:
        "The unique \"ID\" of the employee's \\\"primary\\\" assigned office.\n This is some more text.",
      dataType: {
        type: "string",
      },
      rid: "rid",
    },
    startDate: {
      description:
        "The date the employee was hired (most recently, if they were re-hired)",
      dataType: {
        type: "date",
      },
      rid: "rid",
    },
    employeeStatus: {
      description: "TimeSeries of the status of the employee",
      dataType: {
        type: "timeseries",
        itemType: {
          type: "string",
        },
      },
      rid: "rid",
    },
    employeeSensor: {
      description: "TimeSeries sensor of the status of the employee",
      dataType: {
        type: "timeseries",
      },
      rid: "rid",
    },
    employeeLocation: {
      description: "Geotime series reference of the location of the employee",
      dataType: {
        type: "geotimeSeriesReference",
      },
      rid: "rid",
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
      rid: "rid",
    },
    entrance: {
      dataType: {
        type: "geopoint",
      },
      rid: "rid",
    },
    occupiedArea: {
      description: "The occupied area of the Office",
      dataType: {
        type: "geoshape",
      },
      rid: "rid",
    },
    name: {
      description: "The Name of the Office",
      dataType: {
        type: "string",
      },
      rid: "rid",
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
      rid: "rid",
    },
    type: {
      dataType: {
        type: "string",
      },
      rid: "rid",
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
      rid: "rid",
    },
    value: {
      dataType: {
        type: "string",
      },
      rid: "rid",
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
      rid: "rid",
    },
    string: {
      dataType: {
        type: "string",
      },
      rid: "rid",
    },
    boolean: {
      dataType: {
        type: "boolean",
      },
      rid: "rid",
    },
    date: {
      dataType: {
        type: "date",
      },
      rid: "rid",
    },
    dateTime: {
      dataType: {
        type: "timestamp",
      },
      rid: "rid",
    },
    decimal: {
      dataType: {
        type: "decimal",
      },
      rid: "rid",
    },
    integer: {
      dataType: {
        type: "integer",
      },
      rid: "rid",
    },
    long: {
      dataType: {
        type: "long",
      },
      rid: "rid",
    },
    short: {
      dataType: {
        type: "short",
      },
      rid: "rid",
    },
    float: {
      dataType: {
        type: "float",
      },
      rid: "rid",
    },
    double: {
      dataType: {
        type: "double",
      },
      rid: "rid",
    },
    byte: {
      dataType: {
        type: "byte",
      },
      rid: "rid",
    },
    attachment: {
      dataType: {
        type: "attachment",
      },
      rid: "rid",
    },
    attachment2: {
      dataType: {
        type: "attachment",
      },
      rid: "rid",
    },
    geoPoint: {
      dataType: {
        type: "geopoint",
      },
      rid: "rid",
    },
    geoShape: {
      dataType: {
        type: "geoshape",
      },
      rid: "rid",
    },
    stringArray: {
      dataType: {
        type: "array",
        subType: {
          type: "string",
        },
      },
      rid: "rid",
    },
    booleanArray: {
      dataType: {
        type: "array",
        subType: {
          type: "boolean",
        },
      },
      rid: "rid",
    },
    dateArray: {
      dataType: {
        type: "array",
        subType: {
          type: "date",
        },
      },
      rid: "rid",
    },
    dateTimeArray: {
      dataType: {
        type: "array",
        subType: {
          type: "timestamp",
        },
      },
      rid: "rid",
    },
    decimalArray: {
      dataType: {
        type: "array",
        subType: {
          type: "decimal",
        },
      },
      rid: "rid",
    },
    integerArray: {
      dataType: {
        type: "array",
        subType: {
          type: "integer",
        },
      },
      rid: "rid",
    },
    longArray: {
      dataType: {
        type: "array",
        subType: {
          type: "long",
        },
      },
      rid: "rid",
    },
    shortArray: {
      dataType: {
        type: "array",
        subType: {
          type: "short",
        },
      },
      rid: "rid",
    },
    floatArray: {
      dataType: {
        type: "array",
        subType: {
          type: "float",
        },
      },
      rid: "rid",
    },
    doubleArray: {
      dataType: {
        type: "array",
        subType: {
          type: "double",
        },
      },
      rid: "rid",
    },
    byteArray: {
      dataType: {
        type: "array",
        subType: {
          type: "byte",
        },
      },
      rid: "rid",
    },
    attachmentArray: {
      dataType: {
        type: "array",
        subType: {
          type: "attachment",
        },
      },
      rid: "rid",
    },
    geoPointArray: {
      dataType: {
        type: "array",
        subType: {
          type: "geopoint",
        },
      },
      rid: "rid",
    },
    geoShapeArray: {
      dataType: {
        type: "array",
        subType: {
          type: "geoshape",
        },
      },
      rid: "rid",
    },
    mediaReference: {
      dataType: {
        type: "mediaReference",
      },
      rid: "rid",
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
      rid: "rid",
    },

    name: {
      dataType: { type: "string" },
      rid: "rid",
    },
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
      rid: "rid",
    },
    text: {
      dataType: {
        type: "string",
      },
      rid: "rid",
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
      rid: "rid",
    },
    name: {
      dataType: {
        type: "string",
      },
      rid: "rid",
    },
  },
  rid: "ri.person",
  status: "ACTIVE",
  titleProperty: "name",
};
