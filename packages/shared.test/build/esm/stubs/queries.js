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

import { createLazyQueryImpl } from "../handlers/util/createLazyQueryImpl.js";
import { employee1, employee2 } from "./objects.js";
import { addOneQueryType, queryTypeAcceptsObjects, queryTypeAcceptsObjectSets, queryTypeAcceptsThreeDimensionalAggregation, queryTypeAcceptsTwoDimensionalAggregation, queryTypeReturnsArray, queryTypeReturnsComplexStruct, queryTypeReturnsDate, queryTypeReturnsMap, queryTypeReturnsObject, queryTypeReturnsStruct, queryTypeReturnsTimestamp, queryTypeThreeDimensionalAggregation, queryTypeTwoDimensionalAggregation } from "./queryTypes.js";
export const addOneQueryRequest = {
  parameters: {
    n: 2
  }
};
export const addOneQueryRequestWithNoResponse = {
  parameters: {
    n: 3
  }
};
export const addOneQueryResponse = {
  value: 3
};
export const queryTypeReturnsStructRequest = {
  parameters: {
    person: {
      firstName: "John",
      lastName: "Doe",
      age: 42
    }
  }
};
export const queryTypeReturnsStructResponse = {
  value: {
    firstName: "John",
    lastName: "Doe",
    age: 43
  }
};
export const queryTypeReturnsComplexStructRequest = {
  parameters: {
    person: {
      firstName: "John",
      lastName: "Doe",
      age: 42,
      object: employee1.__primaryKey
    }
  }
};
export const queryTypeReturnsComplexStructResponse = {
  value: {
    firstName: "John",
    lastName: "Doe",
    age: 43,
    object: employee2.__primaryKey
  }
};
export const queryTypeReturnsTimestampResponse = {
  value: "2019-01-01T00:00:00.000Z"
};
export const queryTypeReturnsDateResponse = {
  value: "2019-01-01"
};
export const queryTypeReturnsObjectResponse = {
  value: employee1.__primaryKey
};
export const queryTypeAcceptsObjectRequest = {
  parameters: {
    object: employee1.__primaryKey
  }
};
export const queryTypeAcceptsObjectResponse = {
  value: employee2.__primaryKey
};
export const queryTypeAcceptsObjectSetRequest = {
  parameters: {
    objectSet: {
      type: "base",
      objectType: "Employee"
    }
  }
};
export const queryTypeAcceptsObjectSetResponse = {
  value: {
    objectSet: {
      type: "base",
      objectType: "Employee"
    }
  }
};
export const queryTypeThreeDimensionalAggregationResponse = {
  value: {
    groups: [{
      key: "Q-AFN",
      groups: [{
        key: {
          startValue: "2010-10-01T00:00:00Z",
          endValue: "2010-10-02T00:00:00Z"
        },
        value: 65.0
      }]
    }, {
      key: "Q-AFO",
      groups: []
    }]
  }
};
export const queryTypeTwoDimensionalAggregationResponse = {
  value: {
    groups: [{
      key: "Q-AFN",
      value: 1
    }, {
      key: "Q-AFO",
      value: 2
    }]
  }
};
export const queryTypeAcceptsTwoDimensionalAggregationRequest = {
  parameters: {
    aggFunction: {
      groups: [{
        key: "testKey1",
        value: 1
      }, {
        key: "testKey2",
        value: 2
      }]
    }
  }
};
export const queryTypeAcceptsTwoDimensionalAggregationResponse = {
  value: {
    groups: [{
      key: "responseKey1",
      value: 3
    }, {
      key: "responseKey2",
      value: 4
    }]
  }
};
export const queryTypeAcceptsThreeDimensionalAggregationRequest = {
  parameters: {
    aggFunction: {
      groups: [{
        key: "testKey1",
        groups: [{
          key: {
            startValue: "2010-10-01T00:00:00Z",
            endValue: "2010-10-02T00:00:00Z"
          },
          value: 65.0
        }]
      }, {
        key: "testKey2",
        groups: []
      }]
    }
  }
};
export const queryTypeAcceptsThreeDimensionalAggregationResponse = {
  value: {
    groups: [{
      key: "Q-AFN",
      groups: [{
        key: {
          startValue: "2010-10-01T00:00:00Z",
          endValue: "2010-10-02T00:00:00Z"
        },
        value: 65.0
      }]
    }, {
      key: "Q-AFO",
      groups: []
    }]
  }
};
export const queryTypeReturnsArrayRequest = {
  parameters: {
    people: ["Brad", "George", "Ryan"]
  }
};
export const queryTypeReturnsArrayResponse = {
  value: ["Pitt", "Clooney", "Reynolds"]
};
export const queryTypeReturnsMapRequest = {
  parameters: {
    peopleMap: [{
      key: "person1",
      value: "hi"
    }]
  }
};
export const queryTypeReturnsMapResponse = {
  value: [{
    key: "50030",
    value: "bye"
  }]
};
export const emptyBody = JSON.stringify({
  parameters: {}
});
const queryRequestHandlers = {
  [addOneQueryType.apiName]: {
    [JSON.stringify(addOneQueryRequest)]: addOneQueryResponse,
    [JSON.stringify(addOneQueryRequestWithNoResponse)]: {
      value: undefined
    }
  },
  [queryTypeReturnsStruct.apiName]: {
    [JSON.stringify(queryTypeReturnsStructRequest)]: queryTypeReturnsStructResponse
  },
  [queryTypeReturnsComplexStruct.apiName]: {
    [JSON.stringify(queryTypeReturnsComplexStructRequest)]: queryTypeReturnsComplexStructResponse
  },
  [queryTypeReturnsTimestamp.apiName]: {
    [emptyBody]: queryTypeReturnsTimestampResponse
  },
  [queryTypeReturnsDate.apiName]: {
    [emptyBody]: queryTypeReturnsDateResponse
  },
  [queryTypeReturnsObject.apiName]: {
    [emptyBody]: queryTypeReturnsObjectResponse
  },
  [queryTypeTwoDimensionalAggregation.apiName]: {
    [emptyBody]: queryTypeTwoDimensionalAggregationResponse
  },
  [queryTypeThreeDimensionalAggregation.apiName]: {
    [emptyBody]: queryTypeThreeDimensionalAggregationResponse
  },
  [queryTypeAcceptsObjects.apiName]: {
    [JSON.stringify(queryTypeAcceptsObjectRequest)]: queryTypeAcceptsObjectResponse
  },
  [queryTypeAcceptsObjectSets.apiName]: {
    [JSON.stringify(queryTypeAcceptsObjectSetRequest)]: queryTypeAcceptsObjectSetResponse
  },
  [queryTypeAcceptsTwoDimensionalAggregation.apiName]: {
    [JSON.stringify(queryTypeAcceptsTwoDimensionalAggregationRequest)]: queryTypeAcceptsTwoDimensionalAggregationResponse
  },
  [queryTypeAcceptsThreeDimensionalAggregation.apiName]: {
    [JSON.stringify(queryTypeAcceptsThreeDimensionalAggregationRequest)]: queryTypeAcceptsThreeDimensionalAggregationResponse
  },
  [queryTypeReturnsArray.apiName]: {
    [JSON.stringify(queryTypeReturnsArrayRequest)]: queryTypeReturnsArrayResponse
  },
  [queryTypeReturnsMap.apiName]: {
    [JSON.stringify(queryTypeReturnsMapRequest)]: queryTypeReturnsMapResponse
  }
};
export function registerLazyQueries(fauxOntology) {
  const queryTypes = [addOneQueryType, queryTypeReturnsStruct, queryTypeReturnsDate, queryTypeReturnsObject, queryTypeReturnsTimestamp, queryTypeTwoDimensionalAggregation, queryTypeThreeDimensionalAggregation, queryTypeAcceptsObjects, queryTypeAcceptsObjectSets, queryTypeAcceptsTwoDimensionalAggregation, queryTypeAcceptsThreeDimensionalAggregation, queryTypeReturnsArray, queryTypeReturnsComplexStruct, queryTypeReturnsMap];
  for (const queryType of Object.values(queryTypes)) {
    const lazyHandlerMap = queryRequestHandlers[queryType.apiName];
    if (!lazyHandlerMap) {
      throw new Error(`Query type ${queryType.apiName} is not registered in queryRequestHandlers`);
    }
    fauxOntology.registerQueryType(queryType, createLazyQueryImpl(lazyHandlerMap));
  }
}
//# sourceMappingURL=queries.js.map