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

import type { QueryTypeV2 } from "@osdk/gateway/types";

export const addOneQueryType: QueryTypeV2 = {
  apiName: "addOne",
  displayName: "myFunction",
  parameters: {
    n: {
      dataType: {
        type: "integer",
      },
    },
  },
  output: {
    type: "integer",
  },
  rid:
    "ri.function-registry.main.function.abd64ff3-276e-48c5-afee-5a6ef0b2ea47",
  version: "0.0.9",
};

export const queryTypeReturnsStruct: QueryTypeV2 = {
  apiName: "incrementPersonAge",
  displayName: "incrementAge",
  parameters: {
    person: {
      dataType: {
        type: "struct",
        fields: [
          {
            name: "firstName",
            fieldType: {
              type: "string",
            },
          },
          {
            name: "lastName",
            fieldType: {
              type: "string",
            },
          },
          {
            name: "age",
            fieldType: {
              type: "union",
              unionTypes: [
                {
                  type: "integer",
                },
                {
                  type: "null",
                },
              ],
            },
          },
        ],
      },
    },
  },
  output: {
    type: "struct",
    fields: [
      {
        name: "firstName",
        fieldType: {
          type: "string",
        },
      },
      {
        name: "lastName",
        fieldType: {
          type: "string",
        },
      },
      {
        name: "age",
        fieldType: {
          type: "union",
          unionTypes: [
            {
              type: "integer",
            },
            {
              type: "null",
            },
          ],
        },
      },
    ],
  },
  rid:
    "ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d",
  version: "0.0.9",
};

export const queryTypeReturnsTimestamp: QueryTypeV2 = {
  apiName: "returnsTimestamp",
  displayName: "returnsTimestamp",
  parameters: {},
  output: {
    type: "timestamp",
  },
  rid:
    "ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d",
  version: "0.0.9",
};

export const queryTypeReturnsDate: QueryTypeV2 = {
  apiName: "returnsDate",
  displayName: "returnsDate",
  parameters: {},
  output: {
    type: "date",
  },
  rid:
    "ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d",
  version: "0.0.9",
};

export const queryTypeReturnsObject: QueryTypeV2 = {
  apiName: "returnsObject",
  displayName: "returnsObject",
  parameters: {},
  output: {
    type: "object",
    objectApiName: "Employee",
    objectTypeApiName: "Employee",
  },
  rid:
    "ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d",
  version: "0.0.9",
};

export const queryTypeThreeDimensionalAggregation: QueryTypeV2 = {
  apiName: "threeDimensionalAggregationFunction",
  displayName: "threeDimensionalAggregation",
  parameters: {},
  output: {
    type: "threeDimensionalAggregation",
    keyType: {
      type: "string",
    },
    valueType: {
      keyType: {
        type: "range",
        subType: {
          type: "timestamp",
        },
      },
      valueType: {
        type: "double",
      },
    },
  },
  rid:
    "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968",
  version: "0.11.0",
};

export const queryTypeTwoDimensionalAggregation: QueryTypeV2 = {
  apiName: "twoDimensionalAggregationFunction",
  displayName: "twoDimensionalAggregation",
  parameters: {},
  output: {
    type: "twoDimensionalAggregation",
    keyType: {
      type: "string",
    },
    valueType: {
      type: "double",
    },
  },
  rid:
    "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968",
  version: "0.11.0",
};

export const queryTypes: QueryTypeV2[] = [
  addOneQueryType,
  queryTypeReturnsStruct,
  queryTypeReturnsDate,
  queryTypeReturnsObject,
  queryTypeReturnsTimestamp,
  queryTypeTwoDimensionalAggregation,
  queryTypeThreeDimensionalAggregation,
];
