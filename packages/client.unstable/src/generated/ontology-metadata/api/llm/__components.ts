/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeModificationRequest as _api_ActionTypeModificationRequest } from "../__components.js";

/**
 * Request for ActionTypeDescriptionGenerator Plugin which takes in an Action Type and summarizes what the
 * actionType is set up to do and generates a human readable description.
 * The plugin will generate a few suggestions that the user could then accept and save to the actionType.
 */
export interface ActionTypeDescriptionGeneratorPluginRequest {
  actionType: _api_ActionTypeModificationRequest;
}
/**
 * Response to the ActionTypeDescriptionGenerator Plugin.
 */
export interface ActionTypeDescriptionGeneratorPluginResponse {
  descriptions: Array<string>;
}
export type LanguageModelApiName = string;

/**
 * The configuration settings for the LLM.
 * This is used to override the default settings used to query the LLM for optimal performance.
 */
export interface LlmConfig {
  languageModelApiName?: LanguageModelApiName | null | undefined;
  maxTokens?: number | null | undefined;
  temperature?: number | "NaN" | "Infinity" | "-Infinity" | null | undefined;
}
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

/**
 * Request to use pass in a string prompt that will be directly used as the prompt for the LMS and have the
 * resulting string returned. This plugin has little validation and is mostly used for testing new prompts.
 * Once tested and accepted, prompts should be used to create a new bespoke plugin, with additional validation
 * and type checking.
 */
export interface StringPluginRequest {
  config?: LlmConfig | null | undefined;
  userPrompt: string;
}
/**
 * Response to the string plugin request. This is the string that was returned from the LMS
 */
export interface StringPluginResponse {
  response: string;
}
