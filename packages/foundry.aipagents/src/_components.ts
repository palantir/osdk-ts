/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type * as _Core from "@osdk/foundry.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: UNSAFE
 */
export interface Agent {
  rid: AgentRid;
  version: AgentVersionString;
  metadata: AgentMetadata;
  parameters: Record<ParameterId, Parameter>;
}

/**
 * Metadata for an Agent.
 *
 * Log Safety: UNSAFE
 */
export interface AgentMetadata {
  displayName: string;
  description?: string;
  inputPlaceholder?: string;
  suggestedPrompts: Array<string>;
}

/**
 * A RID identifying an AIP Agent created in AIP Agent Studio.
 *
 * Log Safety: SAFE
 */
export type AgentRid = LooselyBrandedString<"AgentRid">;

/**
 * Log Safety: SAFE
 */
export interface AgentVersion {
  string: AgentVersionString;
  version: AgentVersionDetails;
}

/**
 * Semantic version details for an Agent.
 *
 * Log Safety: SAFE
 */
export interface AgentVersionDetails {
  major: number;
  minor: number;
}

/**
 * The semantic version of the Agent, formatted as ".".
 *
 * Log Safety: SAFE
 */
export type AgentVersionString = LooselyBrandedString<"AgentVersionString">;

/**
 * Log Safety: UNSAFE
 */
export interface ListAgentVersionsResponse {
  data: Array<AgentVersion>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetParameter {
  expectedObjectTypes: Array<_Core.ObjectTypeId>;
}

/**
 * A parameter configured for an Agent in AIP Agent Studio.
 *
 * Log Safety: UNSAFE
 */
export interface Parameter {
  parameterType: ParameterType;
  access: ParameterAccessMode;
  description?: string;
}

/**
   * READ_ONLY: Allows the parameter to be read by the Agent, but the Agent cannot generate updates for it.
READ_WRITE: Allows the parameter to be read and updated by the Agent.
   *
   * Log Safety: SAFE
   */
export type ParameterAccessMode = "READ_ONLY" | "READ_WRITE";

/**
 * The unique identifier for a parameter, as configured in AIP Agent Studio.
 *
 * Log Safety: UNSAFE
 */
export type ParameterId = LooselyBrandedString<"ParameterId">;

/**
 * Log Safety: UNSAFE
 */
export type ParameterType =
  | ({ type: "string" } & StringParameter)
  | ({ type: "objectSet" } & ObjectSetParameter);

/**
 * Log Safety: UNSAFE
 */
export interface StringParameter {
  defaultValue?: string;
}
