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

import type { CreateLinkRule } from "./CreateLinkRule.js";
import type { CreateObjectRule } from "./CreateObjectRule.js";
import type { DeleteLinkRule } from "./DeleteLinkRule.js";
import type { DeleteObjectRule } from "./DeleteObjectRule.js";
import type { ModifyObjectRule } from "./ModifyObjectRule.js";

export interface LogicRule_CreateObject extends CreateObjectRule {
  type: "createObject";
}

export interface LogicRule_ModifyObject extends ModifyObjectRule {
  type: "modifyObject";
}

export interface LogicRule_DeleteObject extends DeleteObjectRule {
  type: "deleteObject";
}

export interface LogicRule_CreateLink extends CreateLinkRule {
  type: "createLink";
}

export interface LogicRule_DeleteLink extends DeleteLinkRule {
  type: "deleteLink";
}

export type LogicRule =
  | LogicRule_CreateObject
  | LogicRule_ModifyObject
  | LogicRule_DeleteObject
  | LogicRule_CreateLink
  | LogicRule_DeleteLink;
