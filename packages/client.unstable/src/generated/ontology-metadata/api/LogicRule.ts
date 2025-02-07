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

import type { AddInterfaceLinkRule } from "./AddInterfaceLinkRule.js";
import type { AddInterfaceRule } from "./AddInterfaceRule.js";
import type { AddLinkRule } from "./AddLinkRule.js";
import type { AddObjectRule } from "./AddObjectRule.js";
import type { AddOrModifyObjectRule } from "./AddOrModifyObjectRule.js";
import type { AddOrModifyObjectRuleV2 } from "./AddOrModifyObjectRuleV2.js";
import type { BatchedFunctionRule } from "./BatchedFunctionRule.js";
import type { DeleteInterfaceLinkRule } from "./DeleteInterfaceLinkRule.js";
import type { DeleteLinkRule } from "./DeleteLinkRule.js";
import type { DeleteObjectRule } from "./DeleteObjectRule.js";
import type { FunctionRule } from "./FunctionRule.js";
import type { ModifyInterfaceRule } from "./ModifyInterfaceRule.js";
import type { ModifyObjectRule } from "./ModifyObjectRule.js";
export interface LogicRule_addObjectRule {
  type: "addObjectRule";
  addObjectRule: AddObjectRule;
}

export interface LogicRule_addOrModifyObjectRule {
  type: "addOrModifyObjectRule";
  addOrModifyObjectRule: AddOrModifyObjectRule;
}

export interface LogicRule_addOrModifyObjectRuleV2 {
  type: "addOrModifyObjectRuleV2";
  addOrModifyObjectRuleV2: AddOrModifyObjectRuleV2;
}

export interface LogicRule_modifyObjectRule {
  type: "modifyObjectRule";
  modifyObjectRule: ModifyObjectRule;
}

export interface LogicRule_deleteObjectRule {
  type: "deleteObjectRule";
  deleteObjectRule: DeleteObjectRule;
}

export interface LogicRule_addInterfaceRule {
  type: "addInterfaceRule";
  addInterfaceRule: AddInterfaceRule;
}

export interface LogicRule_modifyInterfaceRule {
  type: "modifyInterfaceRule";
  modifyInterfaceRule: ModifyInterfaceRule;
}

export interface LogicRule_addLinkRule {
  type: "addLinkRule";
  addLinkRule: AddLinkRule;
}

export interface LogicRule_deleteLinkRule {
  type: "deleteLinkRule";
  deleteLinkRule: DeleteLinkRule;
}

export interface LogicRule_addInterfaceLinkRule {
  type: "addInterfaceLinkRule";
  addInterfaceLinkRule: AddInterfaceLinkRule;
}

export interface LogicRule_deleteInterfaceLinkRule {
  type: "deleteInterfaceLinkRule";
  deleteInterfaceLinkRule: DeleteInterfaceLinkRule;
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
  | LogicRule_addOrModifyObjectRuleV2
  | LogicRule_modifyObjectRule
  | LogicRule_deleteObjectRule
  | LogicRule_addInterfaceRule
  | LogicRule_modifyInterfaceRule
  | LogicRule_addLinkRule
  | LogicRule_deleteLinkRule
  | LogicRule_addInterfaceLinkRule
  | LogicRule_deleteInterfaceLinkRule
  | LogicRule_functionRule
  | LogicRule_batchedFunctionRule;
