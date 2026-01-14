/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  LoadObjectSetV2MultipleObjectTypesRequest,
  LoadObjectSetV2MultipleObjectTypesResponse,
  ObjectSet,
} from "@osdk/foundry.ontologies";
import stableStringify from "json-stable-stringify";
import {
  employeeFullObjectScoped,
  employeeFullObjectScoped2,
  employeeInterfaceScoped,
  employeeInterfaceScoped2,
} from "./interfaces.js";
import { FooInterface } from "./interfaceTypes.js";

const baseObjectSet: LoadObjectSetV2MultipleObjectTypesRequest = {
  objectSet: {
    type: "interfaceBase",
    interfaceType: FooInterface.apiName,
  },
  select: [],
  selectV2: [],
  excludeRid: true,
};

const baseObjectSetFullObject: LoadObjectSetV2MultipleObjectTypesRequest = {
  objectSet: {
    type: "intersect",
    objectSets: [
      { type: "interfaceBase", interfaceType: FooInterface.apiName },
      {
        type: "interfaceBase",
        interfaceType: FooInterface.apiName,
        includeAllBaseObjectProperties: true,
      },
    ],
  },
  select: [],
  selectV2: [],
  excludeRid: true,
};

function wrapWithEmptyFilter(objectSet: ObjectSet): ObjectSet {
  return {
    type: "filter",
    objectSet,
    where: { type: "and", value: [] },
  };
}

const baseObjectSetEmptyFilter: LoadObjectSetV2MultipleObjectTypesRequest = {
  ...baseObjectSet,
  objectSet: wrapWithEmptyFilter(baseObjectSet.objectSet),
};

const baseObjectSetSelect: LoadObjectSetV2MultipleObjectTypesRequest = {
  objectSet: {
    type: "interfaceBase",
    interfaceType: FooInterface.apiName,
  },
  select: ["fullName"],
  selectV2: [],
  excludeRid: true,
};

const baseObjectSetSelectFullObject: LoadObjectSetV2MultipleObjectTypesRequest =
  {
    objectSet: {
      type: "intersect",
      objectSets: [
        { type: "interfaceBase", interfaceType: FooInterface.apiName },
        {
          type: "interfaceBase",
          interfaceType: FooInterface.apiName,
          includeAllBaseObjectProperties: true,
        },
      ],
    },
    select: ["fullName"],
    selectV2: [],
    excludeRid: true,
  };

const eqSearchBody: LoadObjectSetV2MultipleObjectTypesRequest = {
  objectSet: {
    type: "filter",
    objectSet: {
      type: "interfaceBase",
      interfaceType: FooInterface.apiName,
    },
    where: {
      type: "eq",
      field: "fooSpt",
      value: "The Grinch",
    },
  },
  select: [],
  selectV2: [],
  excludeRid: true,
};

const eqSearchBodyFullScope: LoadObjectSetV2MultipleObjectTypesRequest = {
  objectSet: {
    type: "intersect",
    objectSets: [{
      type: "filter",
      objectSet: {
        type: "interfaceBase",
        interfaceType: FooInterface.apiName,
      },
      where: {
        type: "eq",
        field: "fooSpt",
        value: "The Grinch",
      },
    }, {
      type: "interfaceBase",
      interfaceType: FooInterface.apiName,
      includeAllBaseObjectProperties: true,
    }],
  },
  select: [],
  selectV2: [],
  excludeRid: true,
};

const baseObjectSetResponse: LoadObjectSetV2MultipleObjectTypesResponse = {
  data: [employeeInterfaceScoped],
  interfaceToObjectTypeMappings: {
    FooInterface: { Employee: { fooSpt: "fullName" } },
  },
  interfaceToObjectTypeMappingsV2: {
    FooInterface: {
      Employee: {
        fooSpt: {
          type: "localPropertyImplementation",
          propertyApiName: "fullName",
        },
        fooIdp: {
          type: "localPropertyImplementation",
          propertyApiName: "office",
        },
      },
    },
  },
  totalCount: "1",
  propertySecurities: [],
};

const equalsObjectSetResponse: LoadObjectSetV2MultipleObjectTypesResponse = {
  data: [employeeInterfaceScoped2],
  interfaceToObjectTypeMappings: {
    FooInterface: { Employee: { fooSpt: "fullName" } },
  },
  interfaceToObjectTypeMappingsV2: {
    FooInterface: {
      Employee: {
        fooSpt: {
          type: "localPropertyImplementation",
          propertyApiName: "fullName",
        },
        fooIdp: {
          type: "localPropertyImplementation",
          propertyApiName: "office",
        },
      },
    },
  },
  totalCount: "1",
  propertySecurities: [],
};

const baseObjectFullScopeSetResponse:
  LoadObjectSetV2MultipleObjectTypesResponse = {
    data: [employeeFullObjectScoped],
    interfaceToObjectTypeMappings: {
      FooInterface: { Employee: { fooSpt: "fullName" } },
    },
    interfaceToObjectTypeMappingsV2: {
      FooInterface: {
        Employee: {
          fooSpt: {
            type: "localPropertyImplementation",
            propertyApiName: "fullName",
          },
          fooIdp: {
            type: "localPropertyImplementation",
            propertyApiName: "office",
          },
        },
      },
    },
    totalCount: "1",
    propertySecurities: [],
  };

const equalsFullScopeObjectSetResponse:
  LoadObjectSetV2MultipleObjectTypesResponse = {
    data: [employeeFullObjectScoped2],
    interfaceToObjectTypeMappings: {
      FooInterface: { Employee: { fooSpt: "fullName" } },
    },
    interfaceToObjectTypeMappingsV2: {
      FooInterface: {
        Employee: {
          fooSpt: {
            type: "localPropertyImplementation",
            propertyApiName: "fullName",
          },
          fooIdp: {
            type: "localPropertyImplementation",
            propertyApiName: "office",
          },
        },
      },
    },
    totalCount: "1",
    propertySecurities: [],
  };

export const loadInterfaceObjectSetHandlers: {
  [key: string]: LoadObjectSetV2MultipleObjectTypesResponse;
} = {
  [stableStringify(baseObjectSet)!]: baseObjectSetResponse,
  [stableStringify(baseObjectSetFullObject)!]: baseObjectFullScopeSetResponse,
  [stableStringify(baseObjectSetEmptyFilter)!]: baseObjectSetResponse,
  [stableStringify(eqSearchBody)!]: equalsObjectSetResponse,
  [stableStringify(baseObjectSetSelect)!]: baseObjectSetResponse,
  [stableStringify(baseObjectSetSelectFullObject)!]:
    baseObjectFullScopeSetResponse,
  [stableStringify(eqSearchBodyFullScope)!]: equalsFullScopeObjectSetResponse,
};
