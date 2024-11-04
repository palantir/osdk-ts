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
} from "@osdk/internal.foundry.core";
import stableStringify from "json-stable-stringify";
import {
  employeeInterfaceScoped,
  employeeInterfaceScoped2,
  FooInterface,
} from "./interfaces.js";

const baseObjectSet: LoadObjectSetV2MultipleObjectTypesRequest = {
  objectSet: { type: "interfaceBase", interfaceType: FooInterface.apiName },
  select: [],
  excludeRid: true,
};

const baseObjectSetSelect: LoadObjectSetV2MultipleObjectTypesRequest = {
  objectSet: { type: "interfaceBase", interfaceType: FooInterface.apiName },
  select: ["fullName"],
  excludeRid: true,
};

const eqSearchBody: LoadObjectSetV2MultipleObjectTypesRequest = {
  objectSet: {
    type: "filter",
    objectSet: { type: "interfaceBase", interfaceType: FooInterface.apiName },
    where: {
      type: "eq",
      field: "fooSpt",
      value: "The Grinch",
    },
  },
  select: [],
  excludeRid: true,
};

const baseObjectSetResponse: LoadObjectSetV2MultipleObjectTypesResponse = {
  data: [employeeInterfaceScoped],
  interfaceToObjectTypeMappings: {
    FooInterface: { Employee: { fooSpt: "fullName" } },
  },
  totalCount: "1",
};

const equalsObjectSetResponse: LoadObjectSetV2MultipleObjectTypesResponse = {
  data: [employeeInterfaceScoped2],
  interfaceToObjectTypeMappings: {
    FooInterface: { Employee: { fooSpt: "fullName" } },
  },
  totalCount: "1",
};

export const loadInterfaceObjectSetHandlers: {
  [key: string]: LoadObjectSetV2MultipleObjectTypesResponse;
} = {
  [stableStringify(baseObjectSet)]: baseObjectSetResponse,
  [stableStringify(eqSearchBody)]: equalsObjectSetResponse,
  [stableStringify(baseObjectSetSelect)]: baseObjectSetResponse,
};
