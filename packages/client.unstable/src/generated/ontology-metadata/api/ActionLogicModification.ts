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

import type { ActionLogRuleModification } from "./ActionLogRuleModification.js";
import type { LogicRuleModification } from "./LogicRuleModification.js";

/**
 * Same as ActionLogic above, except it uses modification types to allow the usage of ridOrIdInRequest types to
 * reference SharedPropertyTypes and InterfaceTypes in the same modifyOntology request as they are created.
 */
export interface ActionLogicModification {
  rules: Array<LogicRuleModification>;
  actionLogRule: ActionLogRuleModification | undefined;
}
