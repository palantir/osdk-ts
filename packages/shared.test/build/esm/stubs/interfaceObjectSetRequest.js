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

import stableStringify from "json-stable-stringify";
import { employeeFullObjectScoped, employeeFullObjectScoped2, employeeInterfaceScoped, employeeInterfaceScoped2, FooInterface } from "./interfaces.js";
const baseObjectSet = {
  objectSet: {
    type: "interfaceBase",
    interfaceType: FooInterface.apiName
  },
  select: [],
  excludeRid: true
};
const baseObjectSetFullObject = {
  objectSet: {
    type: "intersect",
    objectSets: [{
      type: "interfaceBase",
      interfaceType: FooInterface.apiName
    }, {
      type: "interfaceBase",
      interfaceType: FooInterface.apiName,
      includeAllBaseObjectProperties: true
    }]
  },
  select: [],
  excludeRid: true
};
function wrapWithEmptyFilter(objectSet) {
  return {
    type: "filter",
    objectSet,
    where: {
      type: "and",
      value: []
    }
  };
}
const baseObjectSetEmptyFilter = {
  ...baseObjectSet,
  objectSet: wrapWithEmptyFilter(baseObjectSet.objectSet)
};
const baseObjectSetSelect = {
  objectSet: {
    type: "interfaceBase",
    interfaceType: FooInterface.apiName
  },
  select: ["fullName"],
  excludeRid: true
};
const baseObjectSetSelectFullObject = {
  objectSet: {
    type: "intersect",
    objectSets: [{
      type: "interfaceBase",
      interfaceType: FooInterface.apiName
    }, {
      type: "interfaceBase",
      interfaceType: FooInterface.apiName,
      includeAllBaseObjectProperties: true
    }]
  },
  select: ["fullName"],
  excludeRid: true
};
const eqSearchBody = {
  objectSet: {
    type: "filter",
    objectSet: {
      type: "interfaceBase",
      interfaceType: FooInterface.apiName
    },
    where: {
      type: "eq",
      field: "fooSpt",
      value: "The Grinch"
    }
  },
  select: [],
  excludeRid: true
};
const eqSearchBodyFullScope = {
  objectSet: {
    type: "intersect",
    objectSets: [{
      type: "filter",
      objectSet: {
        type: "interfaceBase",
        interfaceType: FooInterface.apiName
      },
      where: {
        type: "eq",
        field: "fooSpt",
        value: "The Grinch"
      }
    }, {
      type: "interfaceBase",
      interfaceType: FooInterface.apiName,
      includeAllBaseObjectProperties: true
    }]
  },
  select: [],
  excludeRid: true
};
const baseObjectSetResponse = {
  data: [employeeInterfaceScoped],
  interfaceToObjectTypeMappings: {
    FooInterface: {
      Employee: {
        fooSpt: "fullName"
      }
    }
  },
  totalCount: "1"
};
const equalsObjectSetResponse = {
  data: [employeeInterfaceScoped2],
  interfaceToObjectTypeMappings: {
    FooInterface: {
      Employee: {
        fooSpt: "fullName"
      }
    }
  },
  totalCount: "1"
};
const baseObjectFullScopeSetResponse = {
  data: [employeeFullObjectScoped],
  interfaceToObjectTypeMappings: {
    FooInterface: {
      Employee: {
        fooSpt: "fullName"
      }
    }
  },
  totalCount: "1"
};
const equalsFullScopeObjectSetResponse = {
  data: [employeeFullObjectScoped2],
  interfaceToObjectTypeMappings: {
    FooInterface: {
      Employee: {
        fooSpt: "fullName"
      }
    }
  },
  totalCount: "1"
};
export const loadInterfaceObjectSetHandlers = {
  [stableStringify(baseObjectSet)]: baseObjectSetResponse,
  [stableStringify(baseObjectSetFullObject)]: baseObjectFullScopeSetResponse,
  [stableStringify(baseObjectSetEmptyFilter)]: baseObjectSetResponse,
  [stableStringify(eqSearchBody)]: equalsObjectSetResponse,
  [stableStringify(baseObjectSetSelect)]: baseObjectSetResponse,
  [stableStringify(baseObjectSetSelectFullObject)]: baseObjectFullScopeSetResponse,
  [stableStringify(eqSearchBodyFullScope)]: equalsFullScopeObjectSetResponse
};
//# sourceMappingURL=interfaceObjectSetRequest.js.map