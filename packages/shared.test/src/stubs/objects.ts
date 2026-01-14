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

import type { GeoJsonObject } from "@osdk/foundry.geo";
import type { PropertySecurities } from "@osdk/foundry.ontologies";
import { employeeInterfaceScoped } from "./interfaces.js";

export const employee50050: {
  __rid: string;
  __primaryKey: number;
  __apiName: string;
  fullName: string;
  employeeId: number;
  office: string;
  class: string;
  startDate: string;
} = {
  __rid: employeeInterfaceScoped.$rid,
  __primaryKey: employeeInterfaceScoped.$primaryKey,
  __apiName: employeeInterfaceScoped.$apiName,
  fullName: "Santa Claus",
  employeeId: employeeInterfaceScoped.$primaryKey,
  office: "NYC",
  class: "Red",
  startDate: "2019-01-01",
};

export const employee1 = {
  __rid:
    "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-7725c5f18b61",
  __primaryKey: 50030,
  __apiName: "Employee",
  employeeId: 50030,
  fullName: "John Doe",
  office: "NYC",
  class: "Red",
  startDate: "2019-01-01",
  employeeStatus: "TimeSeries<String>",
  employeeSensor: "TimeSeries<>",
  employeeLocation: "GeotimeSeriesReferencePlaceholder",
} as const;
export const employee1_50030_JohnDoe: typeof employee1 = employee1;

export const employee2 = {
  __rid:
    "ri.phonograph2-objects.main.object.ae6a0b9a-9b9a-4b9e-8b0a-2b0b9a9a0b9a",
  __primaryKey: 50031,
  __apiName: "Employee",
  __title: "Jane Doe",
  employeeId: 50031,
  fullName: "Jane Doe",
  office: "SEA",
  class: "Blue",
  startDate: "2012-02-12",
  employeeStatus: "TimeSeries<String>",
  employeeSensor: "TimeSeries<>",
  employeeLocation: "GeotimeSeriesReferencePlaceholder",
} as const;
export const employee2_50031_JaneDoe: typeof employee2 = employee2;

export const employee3 = {
  __rid:
    "ri.phonograph2-objects.main.object.b9a0b2b0-0a2b-0b8b-9e4b-a9a9b9a0b9a0",
  __primaryKey: 50032,
  __apiName: "Employee",
  __title: "Jack Smith",
  employeeId: 50032,
  fullName: "Jack Smith",
  office: "LON",
  class: "Red",
  startDate: "2015-05-15",
  employeeStatus: "TimeSeries<String>",
  employeeSensor: "TimeSeries<>",
  employeeLocation: "GeotimeSeriesReferencePlaceholder",
};
export const employee3_Jack_50032: typeof employee3 = employee3;

// DELETE THIS
export const employee4withDerived = {
  __rid:
    "ri.phonograph2-objects.main.object.b9a0b2xb0-0a2b-0b8b-9e4b-a9a9b9a0b9a0",
  __primaryKey: 50035,
  __apiName: "Employee",
  __title: "Jack Smith",
  employeeId: 50035,
  fullName: "Jack Smith",
  office: "LON",
  class: "Red",
  startDate: "2015-05-15",
  derivedPropertyName: 1,
  employeeStatus: "TimeSeries<String>",
  employeeSensor: "TimeSeries<>",
  employeeLocation: "GeotimeSeriesReferencePlaceholder",
};

export const employee5withUndefinedDerived = {
  __rid:
    "ri.phonograph2-objects.main.object.b9a0cb2b0-0a2b-0b8b-9e4b-a9a9b9a0b9a0",
  __primaryKey: 50036,
  __apiName: "Employee",
  __title: "Jack Smith",
  employeeId: 50036,
  fullName: "Jack Smith",
  office: "LON",
  class: "Red",
  startDate: "2015-05-15",
  derivedPropertyName: undefined,
  employeeStatus: "TimeSeries<String>",
  employeeSensor: "TimeSeries<>",
  employeeLocation: "GeotimeSeriesReferencePlaceholder",
};

export const employeePassesStrict = {
  __rid:
    "ri.phonograph2-objects.main.object.b9a0b2b0-0aa2b-0b8b-9e4b-a9a9b9a0b9a0",
  __primaryKey: 50033,
  __apiName: "Employee",
  __title: "Jack Smith",
  employeeId: 50033,
  fullName: "Jack Smith",
  office: "LON",
  class: "Red",
  startDate: "2015-05-15",
  employeeStatus: "TimeSeries<String>",
  employeeSensor: "TimeSeries<>",
  employeeLocation: "GeotimeSeriesReferencePlaceholder",
};

export const officeAreaGeoJson: GeoJsonObject = {
  coordinates: [
    [
      [1.0, 1.0],
      [1.0, 2.0],
      [2.0, 2.0],
      [2.0, 1.0],
      [1.0, 1.0],
    ],
  ],
  type: "Polygon",
};

export const nycOffice = {
  __rid:
    "ri.phonograph2-objects.main.object.c0c0c0c0-c0c0-c0c0-c0c0-c0c0c0c0c0c0",
  __primaryKey: "NYC",
  __apiName: "Office",
  __title: "New York City",
  officeId: "NYC",
  name: "New York City",
  entrance: { type: "Point", coordinates: [1.1, 1.1] as const },
  occupiedArea: officeAreaGeoJson as GeoJsonObject,
};

export const travisPlayer = {
  __rid:
    "ri.phonograph2-objects.main.object.c0c0c3c0-c0c0-c0c0-c0c0-c0c0c0c0c0c0",
  __primaryKey: "tkelce",
  __apiName: "BgaoNflPlayer",
  __title: "tkelce",
  gamesPlayed: 171,
  name: "Travis Kelce",
  number: 87,
  wikiUrl: "myKelce.com",
  address: {
    addressLine1: "15 Muppets Lane",
    addressLine2: "Resort No 4",
    city: "Memphis",
    state: "TN",
    zipCode: 11100,
  },
  id: "tkelce",
};

export const objectWithAllPropertyTypes1 = {
  __rid:
    "ri.phonograph2-objects.main.object.401ac022-89eb-4591-8b7e-0a912b9efb44",
  __primaryKey: 1,
  __apiName: "objectTypeWithAllPropertyTypes",
  __title: "1",
  id: 1,
  string: "string",
  boolean: true,
  date: "2019-01-01",
  dateTime: "2019-01-01T01:01:01.000Z",
  decimal: 1.1,
  integer: 1,
  attachment: {
    rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
  },
  attachment2: {
    rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a80",
  },
  attachmentArray: [
    {
      rid:
        "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
    },
    {
      rid:
        "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a80",
    },
  ],
  long: 1,
  short: 1,
  float: 1.1,
  double: 1.1,
  byte: 1,
  geoPoint: { type: "Point", coordinates: [1.1, 1.1] },
  geoShape: {
    coordinates: [
      [
        [1.0, 1.0],
        [1.0, 2.0],
        [2.0, 2.0],
        [2.0, 1.0],
        [1.0, 1.0],
      ],
    ],
    type: "Polygon",
  },
  stringArray: ["string"],
  booleanArray: [true],
  dateArray: ["2019-01-01"],
  dateTimeArray: ["2019-01-01T01:01:01.000Z"],
  decimalArray: [1.1],
  integerArray: [1],
  longArray: [1],
  shortArray: [1],
  floatArray: [1.1],
  doubleArray: [1.1],
  byteArray: [1],
  geoPointArray: [{ type: "Point", coordinates: [1.1, 1.1] }],
  geoShapeArray: [
    {
      coordinates: [
        [
          [1.0, 1.0],
          [1.0, 2.0],
          [2.0, 2.0],
          [2.0, 1.0],
          [1.0, 1.0],
        ],
      ],
      type: "Polygon",
    },
  ],
  mediaReference: {
    mimeType: "application/pdf",
    reference: {
      type: "mediaSetViewItem",
      mediaSetViewItem: {
        mediaSetRid:
          "ri.mio.main.media-set.4153d42f-ca4b-4e42-8ca5-8e6aa7edb642",
        mediaSetViewRid:
          "ri.mio.main.view.82a798ad-d637-4595-acc6-987bcf16629b",
        mediaItemRid:
          "ri.mio.main.media-item.001ec98b-1620-4814-9e17-8e9c4e536225",
      },
    },
  },
} as const;

export const objectWithAllPropertyTypesEmptyEntries = {
  __rid:
    "ri.phonograph2-objects.main.object.401ac022-89eb-4591-8b7e-0a912b9efb44",
  __primaryKey: 2,
  __apiName: "objectTypeWithAllPropertyTypes",
  __title: "2",
  id: 2,
};

export const objectWithAllPropertyTypes2 = {
  __rid:
    "ri.phonograph2-objects.main.object.401ac022-89eb-4591-8b7e-0a912b9efb44",
  __primaryKey: 5,
  __apiName: "objectTypeWithAllPropertyTypes",
  __title: "5",
  id: 5,
  string: "string",
  boolean: false,
  date: "2020-02-02",
  dateTime: "2020-02-02T02:02:02.000Z",
  decimal: 2.2,
  integer: 2,
  attachment: {
    rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a81",
  },
  attachment2: {
    rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a82",
  },
  attachmentArray: [
    {
      rid:
        "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a81",
    },
    {
      rid:
        "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a82",
    },
  ],
  long: 2,
  short: 2,
  float: 2.2,
  double: 2.2,
  byte: 2,
  geoPoint: { type: "Point", coordinates: [2.2, 2.2] },
  geoShape: {
    coordinates: [
      [
        [2.0, 2.0],
        [2.0, 3.0],
        [3.0, 3.0],
        [3.0, 2.0],
        [2.0, 2.0],
      ],
    ],
    type: "Polygon",
  },
  stringArray: ["string2"],
  booleanArray: [false],
  dateArray: ["2020-02-02"],
  dateTimeArray: ["2020-02-02T02:02:02.000Z"],
  decimalArray: [2.2],
  integerArray: [2],
  longArray: [2],
  shortArray: [2],
  floatArray: [2.2],
  doubleArray: [2.2],
  byteArray: [2],
  geoPointArray: [{ type: "Point", coordinates: [2.2, 2.2] }],
  geoShapeArray: [
    {
      coordinates: [
        [
          [2.0, 2.0],
          [2.0, 3.0],
          [3.0, 3.0],
          [3.0, 2.0],
          [2.0, 2.0],
        ],
      ],
      type: "Polygon",
    },
  ],
  mediaReference: "ri.MediaReferencePlaceholder2",
} as const;

export const basicPropertySecurities: PropertySecurities[] = [
  {
    disjunction: [
      {
        type: "propertyMarkingSummary" as const,
        conjunctive: ["CONFIDENTIAL", "INTERNAL"] as const,
        disjunctive: [["SECRET"], ["TOP_SECRET"]] as const,
      },
    ],
  },
  {
    disjunction: [
      {
        type: "unsupportedPolicy" as const,
      },
    ],
  },
  {
    disjunction: [
      {
        type: "errorComputingSecurity" as const,
      },
    ],
  },
];

export const unsecuredEmployee = {
  __rid: "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-as3der",
  __primaryKey: 20003,
  __apiName: "Employee",
  __title: "Bruce Banner",
  employeeId: 20003,
  fullName: "Bruce Banner",
  office: "NYC",
  class: "Red",
  startDate: "2003-01-01",
} as const;

export const securedEmployee = {
  __rid: "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-as3der",
  __primaryKey: 20003,
  __apiName: "Employee",
  __title: "Bruce Banner",
  employeeId: {
    value: 20003,
    propertySecurityIndex: 0,
  },
  fullName: {
    value: "Bruce Banner",
    propertySecurityIndex: 0,
  },
  office: {
    value: "NYC",
    propertySecurityIndex: 1,
  },
  class: {
    value: "Red",
    propertySecurityIndex: 2,
  },
  startDate: {
    value: "2003-01-01",
    propertySecurityIndex: 0,
  },
  favoriteRestaurants: [{ value: "Pasta Place", propertySecurityIndex: 1 }, {
    value: "Sushi Spot",
    propertySecurityIndex: 0,
  }],
} as const;

// Mixed secured and regular properties for testing
export const employeeMixedSecurity = {
  __rid:
    "ri.phonograph2-objects.main.object.ae6a0b9a-9b9a-4b9e-8b0a-2b0b9a9a0b9a",
  __primaryKey: 50031,
  __apiName: "Employee",
  __title: "Jane Doe",
  employeeId: {
    value: 50031,
    propertySecurityIndex: 0,
  },
  fullName: "Jane Doe", // Regular property without security
  office: {
    value: "SEA",
    propertySecurityIndex: 1,
  },
  class: "Blue", // Regular property without security
  startDate: {
    value: "2012-02-12",
    propertySecurityIndex: 0,
  },
} as const;
