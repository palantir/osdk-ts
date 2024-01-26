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

import type { ListObjectsResponseV2 } from "@osdk/gateway/types";

import {
  employee1,
  employee2,
  employee3,
  objectWithAllPropertyTypes1,
  objectWithAllPropertyTypesEmptyEntries,
} from "./objects";

export const loadRequestHandlersV2: {
  [objectTypeApiName: string]: ListObjectsResponseV2["data"];
} = {
  Employee: [employee1, employee2, employee3],
  objectTypeWithAllPropertyTypes: [
    objectWithAllPropertyTypes1,
    objectWithAllPropertyTypesEmptyEntries,
  ],
};
