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

import type { ActionLogRule } from "./ActionLogRule.js";
import type { LogicRule } from "./LogicRule.js";

/**
 * The ActionLogic in an ActionType map the Parameters to what edits should be made in Phonograph. It employs
 * LogicRules for the core Action logic and, optionally, an ActionLogRule for capturing a record of the Action
 * execution. We don't allow the mixing of FunctionRule with other LogicRules in the same ActionType.
 */
export interface ActionLogic {
  rules: Array<LogicRule>;
  actionLogRule: ActionLogRule | undefined;
}
