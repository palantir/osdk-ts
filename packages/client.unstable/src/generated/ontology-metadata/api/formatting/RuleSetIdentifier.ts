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

import type { RuleSetRid } from "../RuleSetRid.js";
import type { RuleSetIdInRequest } from "./RuleSetIdInRequest.js";
export interface RuleSetIdentifier_existingRuleSetRid {
  type: "existingRuleSetRid";
  existingRuleSetRid: RuleSetRid;
}

export interface RuleSetIdentifier_ruleSetIdInRequest {
  type: "ruleSetIdInRequest";
  ruleSetIdInRequest: RuleSetIdInRequest;
}
export type RuleSetIdentifier =
  | RuleSetIdentifier_existingRuleSetRid
  | RuleSetIdentifier_ruleSetIdInRequest;
