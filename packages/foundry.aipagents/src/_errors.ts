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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The given Agent could not be found.
 *
 * Log Safety: SAFE
 */
export interface AgentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AgentNotFound";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
  };
}

/**
 * The given AgentVersion could not be found.
 *
 * Log Safety: SAFE
 */
export interface AgentVersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AgentVersionNotFound";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    agentVersionString: unknown;
  };
}

/**
   * The provided version string is not a valid format for an Agent version.

   *
   * Log Safety: SAFE
   */
export interface InvalidAgentVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidAgentVersion";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    version: unknown;
  };
}

/**
   * Failed to retrieve the latest published version of the Agent because the Agent has no published versions.

   *
   * Log Safety: SAFE
   */
export interface NoPublishedAgentVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "NoPublishedAgentVersion";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
  };
}
