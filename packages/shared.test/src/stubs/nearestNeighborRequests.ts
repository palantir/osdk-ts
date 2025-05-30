/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import stableStringify from "json-stable-stringify";
import type { BaseServerObject } from "../FauxFoundry/BaseServerObject.js";
import { employee1, employee2, employee3 } from "./objects.js";
import { employeeObjectType } from "./objectTypeV2.js";

type NearestNeighborType = OntologiesV2.ObjectSetNearestNeighborsType & {
  type: "nearestNeighbors";
};

const nearestNeighborsObjectSet: NearestNeighborType = {
  type: "nearestNeighbors",
  objectSet: {
    type: "base",
    objectType: employeeObjectType.apiName,
  },
  propertyIdentifier: {
    type: "property",
    apiName: "skillSetEmbedding",
  },
  numNeighbors: 3,
  query: {
    type: "text",
    value: "python3",
  },
};

const nearestNeighborsObjectSetVectorQuery: NearestNeighborType = {
  type: "nearestNeighbors",
  objectSet: {
    type: "base",
    objectType: employeeObjectType.apiName,
  },
  propertyIdentifier: {
    type: "property",
    apiName: "skillSetEmbedding",
  },
  numNeighbors: 3,
  query: {
    type: "vector",
    value: Array.from({ length: 1536 }, () => 0.3),
  },
};

export const nearestNeighborRequestHandlers: Record<
  string,
  BaseServerObject[]
> = {
  [stableStringify(nearestNeighborsObjectSet)]: [
    employee1,
    employee2,
    employee3,
  ],
  [stableStringify(nearestNeighborsObjectSetVectorQuery)]: [
    employee1,
    employee2,
    employee3,
  ],
};
