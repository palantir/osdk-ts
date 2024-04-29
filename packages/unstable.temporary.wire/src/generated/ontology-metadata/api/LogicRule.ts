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

import type { AddLinkRule } from "./AddLinkRule.js";
import type { AddObjectRule } from "./AddObjectRule.js";
import type { AddOrModifyObjectRule } from "./AddOrModifyObjectRule.js";
import type { BatchedFunctionRule } from "./BatchedFunctionRule.js";
import type { DeleteLinkRule } from "./DeleteLinkRule.js";
import type { DeleteObjectRule } from "./DeleteObjectRule.js";
import type { FunctionRule } from "./FunctionRule.js";
import type { ModifyObjectRule } from "./ModifyObjectRule.js";
export interface LogicRule_addObjectRule {
  type: "addObjectRule";
  addObjectRule: AddObjectRule;
}

export interface LogicRule_addOrModifyObjectRule {
  type: "addOrModifyObjectRule";
  addOrModifyObjectRule: AddOrModifyObjectRule;
}

export interface LogicRule_modifyObjectRule {
  type: "modifyObjectRule";
  modifyObjectRule: ModifyObjectRule;
}

export interface LogicRule_deleteObjectRule {
  type: "deleteObjectRule";
  deleteObjectRule: DeleteObjectRule;
}

export interface LogicRule_addLinkRule {
  type: "addLinkRule";
  addLinkRule: AddLinkRule;
}

export interface LogicRule_deleteLinkRule {
  type: "deleteLinkRule";
  deleteLinkRule: DeleteLinkRule;
}

export interface LogicRule_functionRule {
  type: "functionRule";
  functionRule: FunctionRule;
}

export interface LogicRule_batchedFunctionRule {
  type: "batchedFunctionRule";
  batchedFunctionRule: BatchedFunctionRule;
}
export type LogicRule =
  | LogicRule_addObjectRule
  | LogicRule_addOrModifyObjectRule
  | LogicRule_modifyObjectRule
  | LogicRule_deleteObjectRule
  | LogicRule_addLinkRule
  | LogicRule_deleteLinkRule
  | LogicRule_functionRule
  | LogicRule_batchedFunctionRule;
