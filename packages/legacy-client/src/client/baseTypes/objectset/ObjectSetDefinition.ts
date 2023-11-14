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

import type { SearchJsonQueryV2 as WhereClauseV2 } from "@osdk/gateway/types";

export interface BaseObjectSetDefinition {
  type: "base";
  objectType: string;
}
export interface ReferenceObjectSetDefinition {
  type: "reference";
  reference: string;
}
export interface StaticObjectSetDefinition {
  type: "static";
  objects: string[];
}
export interface UnionObjectSetDefinition {
  type: "union";
  objectSets: ObjectSetDefinition[];
}
export interface IntersectObjectSetDefinition {
  type: "intersect";
  objectSets: ObjectSetDefinition[];
}
export interface SubtractObjectSetDefinition {
  type: "subtract";
  objectSets: ObjectSetDefinition[];
}
export interface SearchAroundObjectSetDefinition {
  type: "searchAround";
  objectSet: ObjectSetDefinition;
  link: string;
}
export interface FilterObjectSetDefinition {
  type: "filter";
  objectSet: ObjectSetDefinition;
  where: WhereClauseV2;
}
export type ObjectSetDefinition =
  | FilterObjectSetDefinition
  | SearchAroundObjectSetDefinition
  | UnionObjectSetDefinition
  | SubtractObjectSetDefinition
  | IntersectObjectSetDefinition
  | StaticObjectSetDefinition
  | StaticObjectSetDefinition
  | ReferenceObjectSetDefinition
  | BaseObjectSetDefinition;
