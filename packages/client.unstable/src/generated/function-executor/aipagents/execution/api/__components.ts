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

/**/

/**
 * The rid and type of an Aip Agent Function. Separated from the AipAgentFunctionLocator to track multiple
 * versions of this function as a FunctionExternalId.
 */
export interface AipAgentFunctionIdentifier {
  aipAgentRid: AipAgentRid;
  functionType: AipAgentFunctionType;
}
export interface AipAgentFunctionLocator {
  id: AipAgentFunctionIdentifier;
  version: AipAgentVersion;
}
export interface AipAgentFunctionType_getAgentCompletion {
  type: "getAgentCompletion";
  getAgentCompletion: GetAgentCompletionFunctionType;
}
/**
 * Each Agent functionality that is published as a Foundry Function. These loosely correspond to endpoints in
 * the aip-agents service; some may correspond to multiple endponts. For example, the getAgentCompletion
 * function type encompasses the createSession() and continueSession() endpoints.
 */
export type AipAgentFunctionType = AipAgentFunctionType_getAgentCompletion;

export type AipAgentMajorVersion = number;
export type AipAgentMinorVersion = number;
export type AipAgentRid = string;
export interface AipAgentVersion {
  major: AipAgentMajorVersion;
  minor: AipAgentMinorVersion;
}
export interface GetAgentCompletionFunctionType {}
