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
  ExecuteQueryRequest,
  ExecuteQueryResponse,
} from "@osdk/gateway/types";
import { employee1 } from "./objects.js";
import {
  addOneQueryType,
  queryTypeReturnsDate,
  queryTypeReturnsObject,
  queryTypeReturnsStruct,
  queryTypeReturnsTimestamp,
  queryTypeThreeDimensionalAggregation,
  queryTypeTwoDimensionalAggregation,
} from "./queryTypes.js";

export const addOneQueryRequest: ExecuteQueryRequest = {
  parameters: {
    n: 2,
  },
};

export const addOneQueryResponse: ExecuteQueryResponse = {
  value: 3,
};

export const queryTypeReturnsStructRequest: ExecuteQueryRequest = {
  parameters: {
    person: {
      firstName: "John",
      lastName: "Doe",
      age: 42,
    },
  },
};

export const queryTypeReturnsStructResponse: ExecuteQueryResponse = {
  value: {
    firstName: "John",
    lastName: "Doe",
    age: 43,
  },
};

export const queryTypeReturnsTimestampResponse: ExecuteQueryResponse = {
  value: "2019-01-01T00:00:00.000Z",
};

export const queryTypeReturnsDateResponse: ExecuteQueryResponse = {
  value: "2019-01-01",
};

export const queryTypeReturnsObjectResponse: ExecuteQueryResponse = {
  value: employee1.__primaryKey,
};

export const queryTypeThreeDimensionalAggregationResponse:
  ExecuteQueryResponse = {
    value: {
      groups: [
        {
          key: "Q-AFN",
          groups: [
            {
              key: {
                startValue: "2010-10-01T00:00:00Z",
                endValue: "2010-10-02T00:00:00Z",
              },
              value: 65.0,
            },
          ],
        },
        {
          key: "Q-AFO",
          groups: [],
        },
      ],
    },
  };

export const queryTypeTwoDimensionalAggregationResponse: ExecuteQueryResponse =
  {
    value: {
      groups: [
        {
          key: "Q-AFN",
          value: 1,
        },
        {
          key: "Q-AFO",
          value: 2,
        },
      ],
    },
  };

export const emptyBody = JSON.stringify({
  parameters: {},
});

export const queryRequestHandlers: {
  [queryApiName: string]: {
    [queryBody: string]: ExecuteQueryResponse;
  };
} = {
  [addOneQueryType.apiName]: {
    [JSON.stringify(addOneQueryRequest)]: addOneQueryResponse,
  },
  [queryTypeReturnsStruct.apiName]: {
    [JSON.stringify(queryTypeReturnsStructRequest)]:
      queryTypeReturnsStructResponse,
  },
  [queryTypeReturnsTimestamp.apiName]: {
    [emptyBody]: queryTypeReturnsTimestampResponse,
  },
  [queryTypeReturnsDate.apiName]: {
    [emptyBody]: queryTypeReturnsDateResponse,
  },
  [queryTypeReturnsObject.apiName]: {
    [emptyBody]: queryTypeReturnsObjectResponse,
  },
  [queryTypeTwoDimensionalAggregation.apiName]: {
    [emptyBody]: queryTypeTwoDimensionalAggregationResponse,
  },
  [queryTypeThreeDimensionalAggregation.apiName]: {
    [emptyBody]: queryTypeThreeDimensionalAggregationResponse,
  },
};
