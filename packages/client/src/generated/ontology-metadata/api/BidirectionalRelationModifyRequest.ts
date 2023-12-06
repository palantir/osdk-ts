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

import type { BidirectionalRelationCreateRequest } from "./BidirectionalRelationCreateRequest.js";
import type { BidirectionalRelationDeleteRequest } from "./BidirectionalRelationDeleteRequest.js";
import type { BidirectionalRelationUpdateRequest } from "./BidirectionalRelationUpdateRequest.js";
export interface BidirectionalRelationModifyRequest_create {
  type: "create";
  create: BidirectionalRelationCreateRequest;
}

export interface BidirectionalRelationModifyRequest_update {
  type: "update";
  update: BidirectionalRelationUpdateRequest;
}

export interface BidirectionalRelationModifyRequest_delete {
  type: "delete";
  delete: BidirectionalRelationDeleteRequest;
}
export type BidirectionalRelationModifyRequest =
  | BidirectionalRelationModifyRequest_create
  | BidirectionalRelationModifyRequest_update
  | BidirectionalRelationModifyRequest_delete;
