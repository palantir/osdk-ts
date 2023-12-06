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

import type { ValidationRuleIdInRequest } from "./ValidationRuleIdInRequest.js";
import type { ValidationRuleRid } from "./ValidationRuleRid.js";
export interface ValidationRuleIdentifier_rid {
  type: "rid";
  rid: ValidationRuleRid;
}

export interface ValidationRuleIdentifier_validationRuleIdInRequest {
  type: "validationRuleIdInRequest";
  validationRuleIdInRequest: ValidationRuleIdInRequest;
}
/**
 * A type to uniquely identify a validation rule in an ActionType.
 */
export type ValidationRuleIdentifier =
  | ValidationRuleIdentifier_rid
  | ValidationRuleIdentifier_validationRuleIdInRequest;
