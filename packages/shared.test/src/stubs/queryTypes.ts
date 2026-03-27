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

import type { QueryTypeV2 } from "@osdk/foundry.ontologies";

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

export const addOneQueryTypeOlderVersion: QueryTypeV2 = {
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
  version: "0.0.1",
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

export const queryTypeReturnsComplexStruct: QueryTypeV2 = {
  apiName: "incrementPersonAgeComplex",
  displayName: "incrementAgeComplex",
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
          {
            name: "object",
            fieldType: {
              type: "object",
              objectApiName: "Employee",
              objectTypeApiName: "Employee",
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
      {
        name: "object",
        fieldType: {
          type: "object",
          objectApiName: "Employee",
          objectTypeApiName: "Employee",
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

export const queryTypeAcceptsTwoDimensionalAggregation: QueryTypeV2 = {
  apiName: "acceptsTwoDimensionalAggregationFunction",
  displayName: "acceptsTwoDimensionalAggregation",
  parameters: {
    aggFunction: {
      dataType: {
        type: "twoDimensionalAggregation",
        keyType: {
          type: "string",
        },
        valueType: {
          type: "double",
        },
      },
    },
  },
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

export const queryTypeAcceptsThreeDimensionalAggregation: QueryTypeV2 = {
  apiName: "acceptsThreeDimensionalAggregationFunction",
  displayName: "acceptsThreeDimensionalAggregation",
  parameters: {
    aggFunction: {
      dataType: {
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
    },
  },
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

export const queryTypeAcceptsObjects: QueryTypeV2 = {
  apiName: "queryAcceptsObject",
  description: "description of the query that takes object types",
  displayName: "QueryAcceptsObject",
  parameters: {
    object: {
      dataType: {
        type: "object",
        objectApiName: "Employee",
        objectTypeApiName: "Employee",
      },
    },
  },
  output: {
    type: "object",
    objectApiName: "Employee",
    objectTypeApiName: "Employee",
  },
  rid:
    "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968",
  version: "0.11.0",
};

export const queryTypeAcceptsInterfaces: QueryTypeV2 = {
  apiName: "queryAcceptsInterface",
  description: "description of the query that takes interface types",
  displayName: "QueryAcceptsObject",
  parameters: {
    interfaceObject: {
      dataType: {
        type: "interfaceObject",
        interfaceTypeApiName: "FooInterface",
      },
    },
  },
  output: {
    type: "interfaceObject",
    interfaceTypeApiName: "FooInterface",
  },
  rid:
    "ri.function-registry.main.function.9b35870a-63c7-4d48-8f06-9617c0805968",
  version: "0.11.0",
};

export const queryTypeAcceptsInterfaceObjectSet: QueryTypeV2 = {
  apiName: "queryAcceptsInterfaceObjectSet",
  displayName: "description of the query that takes interface type object sets",
  parameters: {
    interfaceObjectSet: {
      dataType: {
        type: "interfaceObjectSet",
        interfaceTypeApiName: "FooInterface",
      },
    },
  },
  output: {
    type: "string",
  },
  rid:
    "ri.function-registry.main.function.4db06290-aab9-43fd-a22d-608b7ecc1849",
  version: "0.14.0",
};

export const queryTypeOutputsInterfaceObjectSet: QueryTypeV2 = {
  apiName: "queryOutputsInterface",
  displayName: "description of the query that outputs interface type",
  parameters: {
    idToLook: {
      dataType: {
        type: "string",
      },
    },
  },
  output: {
    type: "interfaceObjectSet",
    interfaceTypeApiName: "FooInterface",
  },
  rid:
    "ri.function-registry.main.function.4db06290-7bb9-43fd-a22d-60sdf7ecc1849",
  version: "0.14.0",
};

export const queryTypeAcceptsObjectSets: QueryTypeV2 = {
  apiName: "queryAcceptsObjectSets",
  description: "description of the query that takes objectSet types",
  displayName: "QueryAcceptsObjectSets",
  parameters: {
    objectSet: {
      dataType: {
        type: "objectSet",
        objectApiName: "Employee",
        objectTypeApiName: "Employee",
      },
    },
  },
  output: {
    type: "objectSet",
    objectApiName: "Employee",
    objectTypeApiName: "Employee",
  },
  rid:
    "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968",
  version: "0.11.0",
};

export const queryTypeReturnsArray: QueryTypeV2 = {
  "apiName": "queryTypeReturnsArray",
  "output": {
    "type": "array",
    "subType": { "type": "string" },
  },
  "parameters": {
    "people": {
      "dataType": {
        "type": "array",
        "subType": { "type": "string" },
      },
    },
  },
  "rid":
    "ri.function-registry.main.function.c3e58d52-8430-44ee-9f0b-3785d9a9bdda",
  "version": "0.1.1",
};

export const queryTypeReturnsArrayOfObjects: QueryTypeV2 = {
  "apiName": "queryTypeReturnsArrayOfObjects",
  "output": {
    "type": "array",
    "subType": {
      type: "object",
      objectApiName: "Employee",
      objectTypeApiName: "Employee",
    },
  },
  "parameters": {
    "people": {
      "dataType": {
        "type": "array",
        "subType": { "type": "string" },
      },
    },
  },
  "rid":
    "ri.function-registry.main.function.c3e58d52-8430-44ee-9f0b-3785d9a9bdda",
  "version": "0.1.1",
};

export const queryTypeReturnsMap: QueryTypeV2 = {
  "apiName": "queryTypeReturnsMap",
  "output": {
    "type": "entrySet",
    "keyType": {
      type: "object",
      objectApiName: "Employee",
      objectTypeApiName: "Employee",
    },
    valueType: {
      type: "float",
    },
  },
  "parameters": {
    "peopleMap": {
      "dataType": {
        "type": "entrySet",
        "keyType": {
          type: "object",
          objectApiName: "Employee",
          objectTypeApiName: "Employee",
        },
        valueType: {
          type: "string",
        },
      },
    },
  },
  "rid":
    "ri.function-registry.main.function.c3e58d52-8430-44ee-9f0b-3785d9a9bdd2",
  "version": "0.1.1",
};
