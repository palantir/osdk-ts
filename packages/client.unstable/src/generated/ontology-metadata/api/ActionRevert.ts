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

import type { ActionRevertEnabledFor } from "./ActionRevertEnabledFor.js";

/**
 * This provides the conditions under which the Action Type can be reverted. Note that matching one of these
 * conditions is necessary but not sufficient for an action to be reverted, as it is also required that none of
 * the modified entities have received further edits after the action was applied.
 *
 * The list of conditions is not permitted to be empty, and any such modifications will fail.
 */
export interface ActionRevert {
  enabledFor: Array<ActionRevertEnabledFor>;
}
