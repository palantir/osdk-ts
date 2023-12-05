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

import type { LinkTypeId } from "../LinkTypeId.mjs";
import type { ObjectTypeApiName } from "../ObjectTypeApiName.mjs";
import type { ObjectTypeId } from "../ObjectTypeId.mjs";
export interface PerOntologyUniqueIdentifier_objectTypeId {
  type: "objectTypeId";
  objectTypeId: ObjectTypeId;
}

export interface PerOntologyUniqueIdentifier_objectTypeApiName {
  type: "objectTypeApiName";
  objectTypeApiName: ObjectTypeApiName;
}

export interface PerOntologyUniqueIdentifier_linkTypeId {
  type: "linkTypeId";
  linkTypeId: LinkTypeId;
}

export type PerOntologyUniqueIdentifier =
  | PerOntologyUniqueIdentifier_objectTypeId
  | PerOntologyUniqueIdentifier_objectTypeApiName
  | PerOntologyUniqueIdentifier_linkTypeId;
