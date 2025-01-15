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

import type { FunctionGeneratedNotificationBodyModification } from "./FunctionGeneratedNotificationBodyModification.js";
import type { TemplateNotificationBodyModification } from "./TemplateNotificationBodyModification.js";
export interface ActionNotificationBodyModification_templateNotification {
  type: "templateNotification";
  templateNotification: TemplateNotificationBodyModification;
}

export interface ActionNotificationBodyModification_functionGenerated {
  type: "functionGenerated";
  functionGenerated: FunctionGeneratedNotificationBodyModification;
}
/**
 * The body of an action's notification
 */
export type ActionNotificationBodyModification =
  | ActionNotificationBodyModification_templateNotification
  | ActionNotificationBodyModification_functionGenerated;
