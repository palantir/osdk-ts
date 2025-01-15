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

import type { AddInterfaceLinkRuleModification } from "./AddInterfaceLinkRuleModification.js";
import type { AddInterfaceRuleModification } from "./AddInterfaceRuleModification.js";
import type { AddLinkRule } from "./AddLinkRule.js";
import type { AddObjectRuleModification } from "./AddObjectRuleModification.js";
import type { AddOrModifyObjectRuleModification } from "./AddOrModifyObjectRuleModification.js";
import type { AddOrModifyObjectRuleModificationV2 } from "./AddOrModifyObjectRuleModificationV2.js";
import type { BatchedFunctionRuleModification } from "./BatchedFunctionRuleModification.js";
import type { DeleteInterfaceLinkRuleModification } from "./DeleteInterfaceLinkRuleModification.js";
import type { DeleteLinkRule } from "./DeleteLinkRule.js";
import type { DeleteObjectRule } from "./DeleteObjectRule.js";
import type { FunctionRuleModification } from "./FunctionRuleModification.js";
import type { ModifyInterfaceRuleModification } from "./ModifyInterfaceRuleModification.js";
import type { ModifyObjectRuleModification } from "./ModifyObjectRuleModification.js";
export interface LogicRuleModification_addObjectRule {
  type: "addObjectRule";
  addObjectRule: AddObjectRuleModification;
}

export interface LogicRuleModification_addOrModifyObjectRule {
  type: "addOrModifyObjectRule";
  addOrModifyObjectRule: AddOrModifyObjectRuleModification;
}

export interface LogicRuleModification_addOrModifyObjectRuleV2 {
  type: "addOrModifyObjectRuleV2";
  addOrModifyObjectRuleV2: AddOrModifyObjectRuleModificationV2;
}

export interface LogicRuleModification_modifyObjectRule {
  type: "modifyObjectRule";
  modifyObjectRule: ModifyObjectRuleModification;
}

export interface LogicRuleModification_deleteObjectRule {
  type: "deleteObjectRule";
  deleteObjectRule: DeleteObjectRule;
}

export interface LogicRuleModification_addInterfaceRule {
  type: "addInterfaceRule";
  addInterfaceRule: AddInterfaceRuleModification;
}

export interface LogicRuleModification_modifyInterfaceRule {
  type: "modifyInterfaceRule";
  modifyInterfaceRule: ModifyInterfaceRuleModification;
}

export interface LogicRuleModification_addLinkRule {
  type: "addLinkRule";
  addLinkRule: AddLinkRule;
}

export interface LogicRuleModification_deleteLinkRule {
  type: "deleteLinkRule";
  deleteLinkRule: DeleteLinkRule;
}

export interface LogicRuleModification_addInterfaceLinkRule {
  type: "addInterfaceLinkRule";
  addInterfaceLinkRule: AddInterfaceLinkRuleModification;
}

export interface LogicRuleModification_deleteInterfaceLinkRule {
  type: "deleteInterfaceLinkRule";
  deleteInterfaceLinkRule: DeleteInterfaceLinkRuleModification;
}

export interface LogicRuleModification_functionRule {
  type: "functionRule";
  functionRule: FunctionRuleModification;
}

export interface LogicRuleModification_batchedFunctionRule {
  type: "batchedFunctionRule";
  batchedFunctionRule: BatchedFunctionRuleModification;
}
export type LogicRuleModification =
  | LogicRuleModification_addObjectRule
  | LogicRuleModification_addOrModifyObjectRule
  | LogicRuleModification_addOrModifyObjectRuleV2
  | LogicRuleModification_modifyObjectRule
  | LogicRuleModification_deleteObjectRule
  | LogicRuleModification_addInterfaceRule
  | LogicRuleModification_modifyInterfaceRule
  | LogicRuleModification_addLinkRule
  | LogicRuleModification_deleteLinkRule
  | LogicRuleModification_addInterfaceLinkRule
  | LogicRuleModification_deleteInterfaceLinkRule
  | LogicRuleModification_functionRule
  | LogicRuleModification_batchedFunctionRule;
