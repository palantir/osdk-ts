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

import type { ActionRevert } from "./ActionRevert.js";
import type { OntologyIrActionLogic } from "./OntologyIrActionLogic.js";
import type { OntologyIrActionNotification } from "./OntologyIrActionNotification.js";
import type { OntologyIrActionValidation } from "./OntologyIrActionValidation.js";
import type { OntologyIrActionWebhooks } from "./OntologyIrActionWebhooks.js";
export interface OntologyIrActionTypeLogic {
  logic: OntologyIrActionLogic;
  validation: OntologyIrActionValidation;
  revert: ActionRevert | undefined;
  webhooks: OntologyIrActionWebhooks | undefined;
  notifications: Array<OntologyIrActionNotification>;
}
