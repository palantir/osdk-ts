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

import type { ActionTypeDescriptionGeneratorPluginResponse } from "./ActionTypeDescriptionGeneratorPluginResponse.js";
import type { StringPluginResponse } from "./StringPluginResponse.js";
export interface OntologyLmsResponse_stringPlugin {
  type: "stringPlugin";
  stringPlugin: StringPluginResponse;
}

export interface OntologyLmsResponse_actionTypeDescriptionGeneratorPlugin {
  type: "actionTypeDescriptionGeneratorPlugin";
  actionTypeDescriptionGeneratorPlugin:
    ActionTypeDescriptionGeneratorPluginResponse;
}
/**
 * Union type for the outputs of the Ontology-LMS app
 */
export type OntologyLmsResponse =
  | OntologyLmsResponse_stringPlugin
  | OntologyLmsResponse_actionTypeDescriptionGeneratorPlugin;
