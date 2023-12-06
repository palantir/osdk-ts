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

import type { LinkTypeId } from "./LinkTypeId.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
export interface LinkTypeIdentifier_linkTypeId {
  type: "linkTypeId";
  linkTypeId: LinkTypeId;
}

export interface LinkTypeIdentifier_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: LinkTypeRid;
}
/**
 * Union type to represent the different identifiers for LinkType(s) in load requests.
 */
export type LinkTypeIdentifier =
  | LinkTypeIdentifier_linkTypeId
  | LinkTypeIdentifier_linkTypeRid;
