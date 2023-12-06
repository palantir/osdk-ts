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

import type { ActionLogic } from "./ActionLogic.js";
import type { ActionNotification } from "./ActionNotification.js";
import type { ActionRevert } from "./ActionRevert.js";
import type { ActionValidation } from "./ActionValidation.js";
import type { ActionWebhooks } from "./ActionWebhooks.js";
export interface ActionTypeLogic {
  logic: ActionLogic;
  validation: ActionValidation;
  revert: ActionRevert | undefined;
  webhooks: ActionWebhooks | undefined;
  notifications: Array<ActionNotification>;
}
