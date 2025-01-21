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

import type { OntologyIrCarbonWorkspaceUrlTarget } from "./OntologyIrCarbonWorkspaceUrlTarget.js";
import type { OntologyIrLogicRuleValue } from "./OntologyIrLogicRuleValue.js";
import type { OntologyIrNewObjectUrlTarget } from "./OntologyIrNewObjectUrlTarget.js";
import type { OntologyIrRidUrlTarget } from "./OntologyIrRidUrlTarget.js";
export interface OntologyIrUrlTarget_logicRuleValue {
  type: "logicRuleValue";
  logicRuleValue: OntologyIrLogicRuleValue;
}

export interface OntologyIrUrlTarget_rid {
  type: "rid";
  rid: OntologyIrRidUrlTarget;
}

export interface OntologyIrUrlTarget_relativeUrlString {
  type: "relativeUrlString";
  relativeUrlString: string;
}

export interface OntologyIrUrlTarget_newObject {
  type: "newObject";
  newObject: OntologyIrNewObjectUrlTarget;
}

export interface OntologyIrUrlTarget_carbonWorkspace {
  type: "carbonWorkspace";
  carbonWorkspace: OntologyIrCarbonWorkspaceUrlTarget;
}
/**
 * The target for generating a URL.
 */
export type OntologyIrUrlTarget =
  | OntologyIrUrlTarget_logicRuleValue
  | OntologyIrUrlTarget_rid
  | OntologyIrUrlTarget_relativeUrlString
  | OntologyIrUrlTarget_newObject
  | OntologyIrUrlTarget_carbonWorkspace;
