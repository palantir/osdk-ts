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

import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { ActionTypeStatusFilter } from "./ActionTypeStatusFilter.js";
import type { FullTextStringPredicate } from "./FullTextStringPredicate.js";
import type { LogicRuleTypeFilter } from "./LogicRuleTypeFilter.js";
import type { TypeClassPredicate } from "./TypeClassPredicate.js";
export interface ActionTypeClause_and {
  type: "and";
  and: Array<ActionTypeClause>;
}

export interface ActionTypeClause_or {
  type: "or";
  or: Array<ActionTypeClause>;
}

export interface ActionTypeClause_affectedObjectTypeRid {
  type: "affectedObjectTypeRid";
  affectedObjectTypeRid: ObjectTypeRid;
}

export interface ActionTypeClause_inputObjectTypeRid {
  type: "inputObjectTypeRid";
  inputObjectTypeRid: ObjectTypeRid;
}

export interface ActionTypeClause_actionTypeApiName {
  type: "actionTypeApiName";
  actionTypeApiName: FullTextStringPredicate;
}

export interface ActionTypeClause_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: ActionTypeRid;
}

export interface ActionTypeClause_actionTypeDisplayName {
  type: "actionTypeDisplayName";
  actionTypeDisplayName: FullTextStringPredicate;
}

export interface ActionTypeClause_typeClasses {
  type: "typeClasses";
  typeClasses: TypeClassPredicate;
}

export interface ActionTypeClause_actionTypeDescription {
  type: "actionTypeDescription";
  actionTypeDescription: FullTextStringPredicate;
}

export interface ActionTypeClause_status {
  type: "status";
  status: ActionTypeStatusFilter;
}

export interface ActionTypeClause_logicRule {
  type: "logicRule";
  logicRule: LogicRuleTypeFilter;
}

export interface ActionTypeClause_hasActionLog {
  type: "hasActionLog";
  hasActionLog: boolean;
}

export interface ActionTypeClause_hasWebhook {
  type: "hasWebhook";
  hasWebhook: boolean;
}
/**
 * Data structure to represent search query for ActionTypes. Supports filters for various ActionType features.
 */
export type ActionTypeClause =
  | ActionTypeClause_and
  | ActionTypeClause_or
  | ActionTypeClause_affectedObjectTypeRid
  | ActionTypeClause_inputObjectTypeRid
  | ActionTypeClause_actionTypeApiName
  | ActionTypeClause_actionTypeRid
  | ActionTypeClause_actionTypeDisplayName
  | ActionTypeClause_typeClasses
  | ActionTypeClause_actionTypeDescription
  | ActionTypeClause_status
  | ActionTypeClause_logicRule
  | ActionTypeClause_hasActionLog
  | ActionTypeClause_hasWebhook;
