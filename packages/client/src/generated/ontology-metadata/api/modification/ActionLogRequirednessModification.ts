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

import type { ActionLogNotRequiredModification } from "./ActionLogNotRequiredModification.js";
import type { ActionLogRequiredModification } from "./ActionLogRequiredModification.js";
export interface ActionLogRequirednessModification_actionLogNotRequired {
  type: "actionLogNotRequired";
  actionLogNotRequired: ActionLogNotRequiredModification;
}

export interface ActionLogRequirednessModification_actionLogRequired {
  type: "actionLogRequired";
  actionLogRequired: ActionLogRequiredModification;
}
/**
 * The constraints on Action Log requiredness when the ObjectType is being edited. Currently logging is either
 * required or it is not, but further types of constraint may be added in the future.
 */
export type ActionLogRequirednessModification =
  | ActionLogRequirednessModification_actionLogNotRequired
  | ActionLogRequirednessModification_actionLogRequired;
