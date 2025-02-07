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

import type { CarbonWorkspaceUrlTarget } from "./CarbonWorkspaceUrlTarget.js";
import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { NewObjectUrlTargetModification } from "./NewObjectUrlTargetModification.js";
import type { RidUrlTargetModification } from "./RidUrlTargetModification.js";
export interface UrlTargetModification_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: LogicRuleValueModification;
}

export interface UrlTargetModification_rid {
  type: "rid";
  rid: RidUrlTargetModification;
}

export interface UrlTargetModification_relativeUrlString {
  type: "relativeUrlString";
  relativeUrlString: string;
}

export interface UrlTargetModification_newObject {
  type: "newObject";
  newObject: NewObjectUrlTargetModification;
}

export interface UrlTargetModification_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: CarbonWorkspaceUrlTarget;
}
/**
 * The target for generating a URL.
 */
export type UrlTargetModification =
  | UrlTargetModification_logicRuleValue
  | UrlTargetModification_rid
  | UrlTargetModification_relativeUrlString
  | UrlTargetModification_newObject
  | UrlTargetModification_carbonWorkspace;
