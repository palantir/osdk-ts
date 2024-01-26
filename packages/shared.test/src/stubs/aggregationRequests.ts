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
  AggregateObjectSetRequestV2,
  AggregateObjectsResponseV2,
} from "@osdk/gateway/types";
import stableStringify from "json-stable-stringify";
import { employeeObjectType } from "./objectTypes";

export const aggReq1: AggregateObjectSetRequestV2 = {
  aggregation: [
    {
      type: "max",
      name: "max",
      field: "employeeId",
    },
  ],
  groupBy: [],
  objectSet: {
    type: "base",
    objectType: employeeObjectType.apiName,
  },
};

export const aggReqWithFiltering: AggregateObjectSetRequestV2 = {
  aggregation: [
    {
      type: "max",
      name: "maxId",
      field: "employeeId",
    },
  ],
  groupBy: [
    {
      type: "exact",
      field: "office",
    },
  ],
  objectSet: {
    type: "filter",
    where: {
      type: "eq",
      field: "office",
      value: "NYC",
    },
    objectSet: {
      type: "base",
      objectType: employeeObjectType.apiName,
    },
  },
};

export const aggReq2: AggregateObjectSetRequestV2 = {
  aggregation: [
    {
      type: "max",
      name: "maxId",
      field: "employeeId",
    },
    {
      type: "min",
      name: "minId",
      field: "employeeId",
    },
  ],
  groupBy: [],
  objectSet: {
    type: "base",
    objectType: employeeObjectType.apiName,
  },
};

export const aggReq3: AggregateObjectSetRequestV2 = {
  aggregation: [
    {
      type: "avg",
      name: "avgId",
      field: "employeeId",
    },
    {
      type: "count",
      name: "employeeCount",
    },
  ],
  groupBy: [
    {
      type: "exact",
      field: "office",
    },
  ],
  objectSet: {
    type: "base",
    objectType: employeeObjectType.apiName,
  },
};

export const aggResp1: AggregateObjectsResponseV2 = {
  data: [
    {
      group: {},
      metrics: [
        {
          name: "maxId",
          value: 50032,
        },
      ],
    },
  ],
};
export const aggResp2: AggregateObjectsResponseV2 = {
  data: [
    {
      group: {},
      metrics: [
        {
          name: "maxId",
          value: 50032,
        },
        {
          name: "minId",
          value: 50030,
        },
      ],
    },
  ],
};
export const aggResp3: AggregateObjectsResponseV2 = {
  excludedItems: 5,
  data: [
    {
      group: {
        office: "NYC",
      },
      metrics: [
        {
          name: "avgId",
          value: 50031,
        },
        {
          name: "employeeCount",
          value: 31,
        },
      ],
    },
    {
      group: {
        office: "SF",
      },
      metrics: [
        {
          name: "avgId",
          value: 20045,
        },
        {
          name: "employeeCount",
          value: 12,
        },
      ],
    },
  ],
};

export const aggResp4: AggregateObjectsResponseV2 = {
  excludedItems: 7,
  data: [
    {
      group: {
        office: "NYC",
      },
      metrics: [
        {
          name: "maxId",
          value: 50031,
        },
      ],
    },
  ],
};

export const aggregationRequestHandlers = {
  [stableStringify(aggReq1)]: aggResp1,
  [stableStringify(aggReq2)]: aggResp2,
  [stableStringify(aggReq3)]: aggResp3,
  [stableStringify(aggReqWithFiltering)]: aggResp4,
};
