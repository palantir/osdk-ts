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

import type { AddLinkRule } from "./AddLinkRule.js";
import type { DeleteLinkRule } from "./DeleteLinkRule.js";
import type { DeleteObjectRule } from "./DeleteObjectRule.js";
import type { OntologyIrAddInterfaceLinkRule } from "./OntologyIrAddInterfaceLinkRule.js";
import type { OntologyIrAddInterfaceRule } from "./OntologyIrAddInterfaceRule.js";
import type { OntologyIrAddObjectRule } from "./OntologyIrAddObjectRule.js";
import type { OntologyIrAddOrModifyObjectRule } from "./OntologyIrAddOrModifyObjectRule.js";
import type { OntologyIrAddOrModifyObjectRuleV2 } from "./OntologyIrAddOrModifyObjectRuleV2.js";
import type { OntologyIrBatchedFunctionRule } from "./OntologyIrBatchedFunctionRule.js";
import type { OntologyIrDeleteInterfaceLinkRule } from "./OntologyIrDeleteInterfaceLinkRule.js";
import type { OntologyIrFunctionRule } from "./OntologyIrFunctionRule.js";
import type { OntologyIrModifyInterfaceRule } from "./OntologyIrModifyInterfaceRule.js";
import type { OntologyIrModifyObjectRule } from "./OntologyIrModifyObjectRule.js";
export interface OntologyIrLogicRule_addObjectRule {
  type: "addObjectRule";
  addObjectRule: OntologyIrAddObjectRule;
}

export interface OntologyIrLogicRule_addOrModifyObjectRule {
  type: "addOrModifyObjectRule";
  addOrModifyObjectRule: OntologyIrAddOrModifyObjectRule;
}

export interface OntologyIrLogicRule_addOrModifyObjectRuleV2 {
  type: "addOrModifyObjectRuleV2";
  addOrModifyObjectRuleV2: OntologyIrAddOrModifyObjectRuleV2;
}

export interface OntologyIrLogicRule_modifyObjectRule {
  type: "modifyObjectRule";
  modifyObjectRule: OntologyIrModifyObjectRule;
}

export interface OntologyIrLogicRule_deleteObjectRule {
  type: "deleteObjectRule";
  deleteObjectRule: DeleteObjectRule;
}

export interface OntologyIrLogicRule_addInterfaceRule {
  type: "addInterfaceRule";
  addInterfaceRule: OntologyIrAddInterfaceRule;
}

export interface OntologyIrLogicRule_modifyInterfaceRule {
  type: "modifyInterfaceRule";
  modifyInterfaceRule: OntologyIrModifyInterfaceRule;
}

export interface OntologyIrLogicRule_addLinkRule {
  type: "addLinkRule";
  addLinkRule: AddLinkRule;
}

export interface OntologyIrLogicRule_deleteLinkRule {
  type: "deleteLinkRule";
  deleteLinkRule: DeleteLinkRule;
}

export interface OntologyIrLogicRule_addInterfaceLinkRule {
  type: "addInterfaceLinkRule";
  addInterfaceLinkRule: OntologyIrAddInterfaceLinkRule;
}

export interface OntologyIrLogicRule_deleteInterfaceLinkRule {
  type: "deleteInterfaceLinkRule";
  deleteInterfaceLinkRule: OntologyIrDeleteInterfaceLinkRule;
}

export interface OntologyIrLogicRule_functionRule {
  type: "functionRule";
  functionRule: OntologyIrFunctionRule;
}

export interface OntologyIrLogicRule_batchedFunctionRule {
  type: "batchedFunctionRule";
  batchedFunctionRule: OntologyIrBatchedFunctionRule;
}
export type OntologyIrLogicRule =
  | OntologyIrLogicRule_addObjectRule
  | OntologyIrLogicRule_addOrModifyObjectRule
  | OntologyIrLogicRule_addOrModifyObjectRuleV2
  | OntologyIrLogicRule_modifyObjectRule
  | OntologyIrLogicRule_deleteObjectRule
  | OntologyIrLogicRule_addInterfaceRule
  | OntologyIrLogicRule_modifyInterfaceRule
  | OntologyIrLogicRule_addLinkRule
  | OntologyIrLogicRule_deleteLinkRule
  | OntologyIrLogicRule_addInterfaceLinkRule
  | OntologyIrLogicRule_deleteInterfaceLinkRule
  | OntologyIrLogicRule_functionRule
  | OntologyIrLogicRule_batchedFunctionRule;
