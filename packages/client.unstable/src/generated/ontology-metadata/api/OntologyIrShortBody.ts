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

import type { OntologyIrStructuredShortBody } from "./OntologyIrStructuredShortBody.js";
export interface OntologyIrShortBody_basic {
  type: "basic";
  basic: OntologyIrStructuredShortBody;
}
/**
 * An action notification's short body. Generally used for in-platform notifications. Uses Handlebars
 * templating.
 */
export type OntologyIrShortBody = OntologyIrShortBody_basic;
