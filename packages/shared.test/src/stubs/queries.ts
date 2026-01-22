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

import type { FauxOntology } from "@osdk/faux";
import type {
  ExecuteQueryRequest,
  ExecuteQueryResponse,
} from "@osdk/foundry.ontologies";
import { createLazyQueryImpl } from "../createLazyQueryImpl.js";
import { employee1, employee2 } from "./objects.js";
import {
  addOneQueryType,
  addOneQueryTypeOlderVersion,
  queryTypeAcceptsInterfaceObjectSet,
  queryTypeAcceptsInterfaces,
  queryTypeAcceptsObjects,
  queryTypeAcceptsObjectSets,
  queryTypeAcceptsThreeDimensionalAggregation,
  queryTypeAcceptsTwoDimensionalAggregation,
  queryTypeOutputsInterfaceObjectSet,
  queryTypeReturnsArray,
  queryTypeReturnsArrayOfObjects,
  queryTypeReturnsComplexStruct,
  queryTypeReturnsDate,
  queryTypeReturnsMap,
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

export const addOneQueryWithOlderVersionRequest: ExecuteQueryRequest = {
  parameters: {
    n: 6,
  },
};

export const addOneQueryRequestWithNoResponse: ExecuteQueryRequest = {
  parameters: {
    n: 3,
  },
};

export const addOneQueryResponse: ExecuteQueryResponse = {
  value: 3,
};

export const addOneQueryWithOlderVersionResponse: ExecuteQueryResponse = {
  value: 7,
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

export const queryTypeReturnsComplexStructRequest: ExecuteQueryRequest = {
  parameters: {
    person: {
      firstName: "John",
      lastName: "Doe",
      age: 42,
      object: employee1.__primaryKey,
    },
  },
};

export const queryTypeReturnsComplexStructResponse: ExecuteQueryResponse = {
  value: {
    firstName: "John",
    lastName: "Doe",
    age: 43,
    object: employee2.__primaryKey,
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

export const queryTypeAcceptsObjectRequest: ExecuteQueryRequest = {
  parameters: { object: employee1.__primaryKey },
};

export const queryTypeAcceptsObjectResponse: ExecuteQueryResponse = {
  value: employee2.__primaryKey,
};

export const queryTypeAcceptsInterfaceRequest: ExecuteQueryRequest = {
  parameters: {
    interfaceObject: {
      objectTypeApiName: "Employee",
      "primaryKeyValue": employee1.__primaryKey,
    },
  },
};

export const queryTypeAcceptsInterfaceResponse: ExecuteQueryResponse = {
  value: {
    objectTypeApiName: "Employee",
    "primaryKeyValue": employee2.__primaryKey,
  },
};

export const queryTypeAcceptsInterfaceObjectSetRequest: ExecuteQueryRequest = {
  parameters: {
    interfaceObjectSet: {
      type: "interfaceBase",
      interfaceType: "FooInterface",
    },
  },
};

export const queryTypeAcceptsInterfaceObjectSetResponse: ExecuteQueryResponse =
  {
    value: employee1.__primaryKey,
  };

export const queryTypeOutputsInterfaceObjectSetRequest: ExecuteQueryRequest = {
  parameters: {
    idToLook: employee1.__primaryKey,
  },
};

export const queryTypeOutputsInterfaceObjectSetResponse: ExecuteQueryResponse =
  {
    value: {
      interfaceObjectSet: {
        type: "interfaceBase",
        interfaceType: "FooInterface",
      },
    },
  };

export const queryTypeAcceptsObjectSetRequest: ExecuteQueryRequest = {
  parameters: {
    objectSet: { type: "base", objectType: "Employee" },
  },
};

export const queryTypeAcceptsObjectSetResponse: ExecuteQueryResponse = {
  value: {
    objectSet: { type: "base", objectType: "Employee" },
  },
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

export const queryTypeAcceptsTwoDimensionalAggregationRequest:
  ExecuteQueryRequest = {
    parameters: {
      aggFunction: {
        groups: [
          {
            key: "testKey1",
            value: 1,
          },
          {
            key: "testKey2",
            value: 2,
          },
        ],
      },
    },
  };

export const queryTypeAcceptsTwoDimensionalAggregationResponse:
  ExecuteQueryResponse = {
    value: {
      groups: [
        {
          key: "responseKey1",
          value: 3,
        },
        {
          key: "responseKey2",
          value: 4,
        },
      ],
    },
  };

export const queryTypeAcceptsThreeDimensionalAggregationRequest:
  ExecuteQueryRequest = {
    parameters: {
      aggFunction: {
        groups: [
          {
            key: "testKey1",
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
            key: "testKey2",
            groups: [],
          },
        ],
      },
    },
  };

export const queryTypeAcceptsThreeDimensionalAggregationResponse:
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

export const queryTypeReturnsArrayRequest: ExecuteQueryRequest = {
  parameters: {
    people: ["Brad", "George", "Ryan"],
  },
};

export const queryTypeReturnsArrayResponse: ExecuteQueryResponse = {
  value: ["Pitt", "Clooney", "Reynolds"],
};

export const queryTypeReturnsMapRequest: ExecuteQueryRequest = {
  parameters: {
    peopleMap: [{ key: "person1", value: "hi" }],
  },
};

export const queryTypeReturnsMapResponse: ExecuteQueryResponse = {
  value: [{ key: "50030", value: "bye" }],
};

export const queryTypeReturnsArrayOfObjectsResponse: ExecuteQueryResponse = {
  value: [
    employee1.__primaryKey,
  ],
};

export const emptyBody: string = JSON.stringify({
  parameters: {},
});

const queryRequestHandlers: {
  [queryApiName: string]: {
    [queryVersion: string]: {
      [queryBody: string]: ExecuteQueryResponse;
    };
  };
} = {
  [addOneQueryType.apiName]: {
    [addOneQueryType.version]: {
      [JSON.stringify(addOneQueryRequest)]: addOneQueryResponse,
      [JSON.stringify(addOneQueryRequestWithNoResponse)]: { value: undefined },
    },
    [addOneQueryTypeOlderVersion.version]: {
      [JSON.stringify(addOneQueryWithOlderVersionRequest)]:
        addOneQueryWithOlderVersionResponse,
    },
  },
  [queryTypeReturnsStruct.apiName]: {
    [queryTypeReturnsStruct.version]: {
      [JSON.stringify(queryTypeReturnsStructRequest)]:
        queryTypeReturnsStructResponse,
    },
  },
  [queryTypeReturnsComplexStruct.apiName]: {
    [queryTypeReturnsComplexStruct.version]: {
      [JSON.stringify(queryTypeReturnsComplexStructRequest)]:
        queryTypeReturnsComplexStructResponse,
    },
  },
  [queryTypeReturnsTimestamp.apiName]: {
    [queryTypeReturnsTimestamp.version]: {
      [emptyBody]: queryTypeReturnsTimestampResponse,
    },
  },
  [queryTypeReturnsDate.apiName]: {
    [queryTypeReturnsDate.version]: {
      [emptyBody]: queryTypeReturnsDateResponse,
    },
  },
  [queryTypeReturnsObject.apiName]: {
    [queryTypeReturnsObject.version]: {
      [emptyBody]: queryTypeReturnsObjectResponse,
    },
  },
  [queryTypeTwoDimensionalAggregation.apiName]: {
    [queryTypeTwoDimensionalAggregation.version]: {
      [emptyBody]: queryTypeTwoDimensionalAggregationResponse,
    },
  },
  [queryTypeThreeDimensionalAggregation.apiName]: {
    [queryTypeThreeDimensionalAggregation.version]: {
      [emptyBody]: queryTypeThreeDimensionalAggregationResponse,
    },
  },
  [queryTypeAcceptsObjects.apiName]: {
    [queryTypeAcceptsObjects.version]: {
      [JSON.stringify(queryTypeAcceptsObjectRequest)]:
        queryTypeAcceptsObjectResponse,
    },
  },
  [queryTypeAcceptsInterfaces.apiName]: {
    [queryTypeAcceptsInterfaces.version]: {
      [JSON.stringify(queryTypeAcceptsInterfaceRequest)]:
        queryTypeAcceptsInterfaceResponse,
    },
  },
  [queryTypeAcceptsObjectSets.apiName]: {
    [queryTypeAcceptsObjectSets.version]: {
      [JSON.stringify(queryTypeAcceptsObjectSetRequest)]:
        queryTypeAcceptsObjectSetResponse,
    },
  },
  [queryTypeAcceptsTwoDimensionalAggregation.apiName]: {
    [queryTypeAcceptsTwoDimensionalAggregation.version]: {
      [JSON.stringify(queryTypeAcceptsTwoDimensionalAggregationRequest)]:
        queryTypeAcceptsTwoDimensionalAggregationResponse,
    },
  },
  [queryTypeAcceptsThreeDimensionalAggregation.apiName]: {
    [queryTypeAcceptsThreeDimensionalAggregation.version]: {
      [JSON.stringify(queryTypeAcceptsThreeDimensionalAggregationRequest)]:
        queryTypeAcceptsThreeDimensionalAggregationResponse,
    },
  },
  [queryTypeReturnsArray.apiName]: {
    [queryTypeReturnsArray.version]: {
      [JSON.stringify(queryTypeReturnsArrayRequest)]:
        queryTypeReturnsArrayResponse,
    },
  },
  [queryTypeReturnsArrayOfObjects.apiName]: {
    [queryTypeReturnsArrayOfObjects.version]: {
      [JSON.stringify(queryTypeReturnsArrayRequest)]:
        queryTypeReturnsArrayOfObjectsResponse,
    },
  },
  [queryTypeReturnsMap.apiName]: {
    [queryTypeReturnsMap.version]: {
      [JSON.stringify(queryTypeReturnsMapRequest)]: queryTypeReturnsMapResponse,
    },
  },
  [queryTypeAcceptsInterfaceObjectSet.apiName]: {
    [queryTypeAcceptsInterfaceObjectSet.version]: {
      [JSON.stringify(queryTypeAcceptsInterfaceObjectSetRequest)]:
        queryTypeAcceptsInterfaceObjectSetResponse,
    },
  },
  [queryTypeOutputsInterfaceObjectSet.apiName]: {
    [queryTypeOutputsInterfaceObjectSet.version]: {
      [JSON.stringify(queryTypeOutputsInterfaceObjectSetRequest)]:
        queryTypeOutputsInterfaceObjectSetResponse,
    },
  },
};

export function registerLazyQueries(fauxOntology: FauxOntology): void {
  const queryTypes = [
    addOneQueryType,
    addOneQueryTypeOlderVersion,
    queryTypeReturnsStruct,
    queryTypeReturnsDate,
    queryTypeReturnsObject,
    queryTypeReturnsTimestamp,
    queryTypeTwoDimensionalAggregation,
    queryTypeThreeDimensionalAggregation,
    queryTypeAcceptsObjects,
    queryTypeAcceptsObjectSets,
    queryTypeAcceptsTwoDimensionalAggregation,
    queryTypeAcceptsThreeDimensionalAggregation,
    queryTypeReturnsArray,
    queryTypeReturnsComplexStruct,
    queryTypeReturnsMap,
    queryTypeAcceptsInterfaces,
    queryTypeAcceptsInterfaceObjectSet,
    queryTypeOutputsInterfaceObjectSet,
    queryTypeReturnsArrayOfObjects,
  ];

  for (const queryType of Object.values(queryTypes)) {
    const lazyHandlerMap =
      queryRequestHandlers[queryType.apiName][queryType.version];
    if (!lazyHandlerMap) {
      throw new Error(
        `Query type ${queryType.apiName} is not registered in queryRequestHandlers`,
      );
    }

    fauxOntology.registerQueryType(
      queryType,
      createLazyQueryImpl(lazyHandlerMap),
    );
  }
}
