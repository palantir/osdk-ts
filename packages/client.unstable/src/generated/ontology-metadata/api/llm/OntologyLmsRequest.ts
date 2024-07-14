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

import type { ActionTypeDescriptionGeneratorPluginRequest } from "./ActionTypeDescriptionGeneratorPluginRequest.js";
import type { StringPluginRequest } from "./StringPluginRequest.js";
export interface OntologyLmsRequest_stringPlugin {
  type: "stringPlugin";
  stringPlugin: StringPluginRequest;
}

export interface OntologyLmsRequest_actionTypeDescriptionGeneratorPlugin {
  type: "actionTypeDescriptionGeneratorPlugin";
  actionTypeDescriptionGeneratorPlugin:
    ActionTypeDescriptionGeneratorPluginRequest;
}
/**
 * Union wrapping the various plugins that we have for the Ontology LMS app.
 * The plugin determines how we structure a prompt and validate the response.
 */
export type OntologyLmsRequest =
  | OntologyLmsRequest_stringPlugin
  | OntologyLmsRequest_actionTypeDescriptionGeneratorPlugin;
