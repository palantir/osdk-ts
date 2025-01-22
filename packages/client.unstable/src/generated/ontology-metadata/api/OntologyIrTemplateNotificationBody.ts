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

import type { HandlebarsInputName } from "./HandlebarsInputName.js";
import type { OntologyIrEmailBody } from "./OntologyIrEmailBody.js";
import type { OntologyIrNotificationTemplateInputValue } from "./OntologyIrNotificationTemplateInputValue.js";
import type { OntologyIrShortBody } from "./OntologyIrShortBody.js";

/**
 * The body of a notification based on a template.
 */
export interface OntologyIrTemplateNotificationBody {
  inputs: Record<HandlebarsInputName, OntologyIrNotificationTemplateInputValue>;
  emailBody: OntologyIrEmailBody;
  shortBody: OntologyIrShortBody;
}
