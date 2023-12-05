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

import type { LinkTypeLoadResponse } from "./LinkTypeLoadResponse.js";
import type { ObjectTypeLoadResponse } from "./ObjectTypeLoadResponse.js";
export interface EntityLoadByDatasourceResponse_objectType {
  type: "objectType";
  objectType: ObjectTypeLoadResponse;
}

export interface EntityLoadByDatasourceResponse_linkType {
  type: "linkType";
  linkType: LinkTypeLoadResponse;
}
/**
 * A union of ObjectTypeResponse and LinkTypeResponse.
 */
export type EntityLoadByDatasourceResponse =
  | EntityLoadByDatasourceResponse_objectType
  | EntityLoadByDatasourceResponse_linkType;
