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

import type { CarbonWorkspaceUrlTarget } from "./CarbonWorkspaceUrlTarget.js";
import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { NewObjectUrlTarget } from "./NewObjectUrlTarget.js";
import type { RidUrlTarget } from "./RidUrlTarget.js";
export interface UrlTarget_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: LogicRuleValue;
}

export interface UrlTarget_rid {
  type: "rid";
  rid: RidUrlTarget;
}

export interface UrlTarget_relativeUrlString {
  type: "relativeUrlString";
  relativeUrlString: string;
}

export interface UrlTarget_newObject {
  type: "newObject";
  newObject: NewObjectUrlTarget;
}

export interface UrlTarget_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: CarbonWorkspaceUrlTarget;
}
/**
 * The target for generating a URL.
 */
export type UrlTarget =
  | UrlTarget_logicRuleValue
  | UrlTarget_rid
  | UrlTarget_relativeUrlString
  | UrlTarget_newObject
  | UrlTarget_carbonWorkspace;
