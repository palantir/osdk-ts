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

import type {
  LoadObjectSetRequestV2,
  LoadObjectSetResponseV2,
} from "@osdk/gateway/types";
import stableStringify from "json-stable-stringify";
import {
  employee1,
  employee2,
  employee3,
  nycOffice,
  objectWithAllPropertyTypes1,
  objectWithAllPropertyTypesEmptyEntries,
} from "./objects";
import { employeeObjectType, officeObjectType } from "./objectTypes";

const baseObjectSet: LoadObjectSetRequestV2 = {
  objectSet: { type: "base", objectType: employeeObjectType.apiName },
  select: [],
};

const baseObjectSetSelect: LoadObjectSetRequestV2 = {
  objectSet: { type: "base", objectType: employeeObjectType.apiName },
  select: ["fullName"],
};

const unionedObjectSet: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "union",
    objectSets: [
      { type: "base", objectType: employeeObjectType.apiName },
      { type: "base", objectType: employeeObjectType.apiName },
    ],
  },
  select: [],
};

const intersectedObjectSet: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "intersect",
    objectSets: [
      { type: "base", objectType: employeeObjectType.apiName },
      { type: "base", objectType: employeeObjectType.apiName },
    ],
  },
  select: [],
};

const subtractedObjectSet: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "subtract",
    objectSets: [
      { type: "base", objectType: employeeObjectType.apiName },
      {
        type: "filter",
        objectSet: { type: "base", objectType: employeeObjectType.apiName },
        where: {
          type: "eq",
          field: "employeeId",
          value: 50030,
        },
      },
    ],
  },
  select: [],
};

const eqSearchBody: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: employeeObjectType.apiName },
    where: {
      type: "eq",
      field: "employeeId",
      value: 50030,
    },
  },
  select: [],
};

const eqSearchBodyWithSelect: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: employeeObjectType.apiName },
    where: {
      type: "eq",
      field: "employeeId",
      value: 50030,
    },
  },
  select: ["fullName"],
};

const andSearchBody: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: employeeObjectType.apiName },
    where: {
      type: "and",
      value: [
        {
          type: "gt",
          field: "employeeId",
          value: 50030,
        },
        {
          type: "lt",
          field: "employeeId",
          value: 50032,
        },
      ],
    },
  },
  select: [],
};

const geoPointSearchBody: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: officeObjectType.apiName },
    where: {
      type: "withinBoundingBox",
      field: "entrance",
      value: {
        topLeft: {
          type: "Point",
          coordinates: [0.9, 1.1],
        },
        bottomRight: {
          type: "Point",
          coordinates: [1.9, 2.1],
        },
      },
    },
  },
  select: [],
};

const geoPointSearchBodyWithinDistanceOf: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: officeObjectType.apiName },
    where: {
      type: "withinDistanceOf",
      field: "entrance",
      value: {
        center: {
          type: "Point",
          coordinates: [0.9, 1.1],
        },
        distance: {
          value: 100,
          unit: "FEET",
        },
      },
    },
  },
  select: [],
};

const geoPointSearchBodyWithinPolygon: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: officeObjectType.apiName },
    where: {
      type: "withinPolygon",
      field: "entrance",
      value: {
        type: "Polygon",
        coordinates: [
          [
            [1.1, 0.9],
            [0.9, 0.9],
            [1.1, 1.1],
            [1.1, 0.9],
          ],
        ],
      },
    },
  },
  select: [],
};

const geoShapeIntersectsPolygonSearchBody: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: officeObjectType.apiName },
    where: {
      type: "intersectsPolygon",
      field: "occupiedArea",
      value: {
        type: "Polygon",
        coordinates: [
          [
            [1.1, 0.9],
            [0.9, 0.9],
            [1.1, 1.1],
            [1.1, 0.9],
          ],
        ],
      },
    },
  },
  select: [],
};

const geoShapeIntersectsBoundingBoxSearchBody: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: officeObjectType.apiName },
    where: {
      type: "intersectsBoundingBox",
      field: "occupiedArea",
      value: {
        topLeft: {
          type: "Point",
          coordinates: [0.9, 1.1],
        },
        bottomRight: {
          type: "Point",
          coordinates: [1.9, 2.1],
        },
      },
    },
  },
  select: [],
};

const searchOrderByBody: LoadObjectSetRequestV2 = {
  objectSet: { type: "base", objectType: employeeObjectType.apiName },
  orderBy: {
    fields: [
      {
        field: "employeeId",
        direction: "asc",
      },
    ],
  },
  select: [],
};

const searchOrderByBodyAndFilter: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: employeeObjectType.apiName },
    where: {
      type: "eq",
      field: "employeeId",
      value: 50030,
    },
  },
  orderBy: {
    fields: [
      {
        field: "employeeId",
        direction: "asc",
      },
    ],
  },
  select: [],
};

const searchOrderByBodyFilterAndSelect: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: { type: "base", objectType: employeeObjectType.apiName },
    where: {
      type: "eq",
      field: "employeeId",
      value: 50030,
    },
  },
  orderBy: {
    fields: [
      {
        field: "employeeId",
        direction: "asc",
      },
    ],
  },
  select: ["fullName"],
};

const searchAroundObjectSet: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "searchAround",
    objectSet: { type: "base", objectType: employeeObjectType.apiName },
    link: "officeLink",
  },
  select: [],
};

const searchAroundFilteredObjectSet: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: {
      type: "searchAround",
      objectSet: { type: "base", objectType: employeeObjectType.apiName },
      link: "officeLink",
    },
    where: {
      type: "eq",
      field: "officeId",
      value: "NYC",
    },
  },
  select: [],
};

const objectWithAllPropertyTypes: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: {
      type: "base",
      objectType: "objectTypeWithAllPropertyTypes",
    },
    where: { type: "eq", field: "id", value: 1 },
  },
  "select": [],
};

const emptyObjectWithAllPropertyTypes: LoadObjectSetRequestV2 = {
  objectSet: {
    type: "filter",
    objectSet: {
      type: "base",
      objectType: "objectTypeWithAllPropertyTypes",
    },
    where: { type: "eq", field: "id", value: 2 },
  },
  "select": [],
};

export const loadObjectSetRequestHandlers: {
  [key: string]: LoadObjectSetResponseV2["data"];
} = {
  [stableStringify(baseObjectSet)]: [employee1, employee2, employee3],
  [stableStringify(unionedObjectSet)]: [employee1, employee2],
  [stableStringify(intersectedObjectSet)]: [employee3],
  [stableStringify(subtractedObjectSet)]: [employee2, employee3],
  [stableStringify(eqSearchBody)]: [employee1],
  [stableStringify(eqSearchBodyWithSelect)]: [employee1],
  [stableStringify(andSearchBody)]: [employee2],
  [stableStringify(geoPointSearchBody)]: [nycOffice],
  [stableStringify(geoPointSearchBodyWithinDistanceOf)]: [nycOffice],
  [stableStringify(geoPointSearchBodyWithinPolygon)]: [nycOffice],
  [stableStringify(geoShapeIntersectsPolygonSearchBody)]: [nycOffice],
  [stableStringify(geoShapeIntersectsBoundingBoxSearchBody)]: [nycOffice],
  [stableStringify(searchOrderByBody)]: [employee1, employee2, employee3],
  [stableStringify(searchOrderByBodyAndFilter)]: [employee1],
  [stableStringify(searchOrderByBodyFilterAndSelect)]: [employee1],
  [stableStringify(searchAroundObjectSet)]: [nycOffice],
  [stableStringify(searchAroundFilteredObjectSet)]: [nycOffice],
  [stableStringify(baseObjectSetSelect)]: [employee1, employee2, employee3],
  [stableStringify(objectWithAllPropertyTypes)]: [objectWithAllPropertyTypes1],
  [stableStringify(emptyObjectWithAllPropertyTypes)]: [
    objectWithAllPropertyTypesEmptyEntries,
  ],
};
