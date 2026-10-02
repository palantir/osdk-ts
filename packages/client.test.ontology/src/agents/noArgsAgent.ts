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

import type { AgentDefinition, AgentSession, VersionBound } from "@osdk/api";

import type { $ExpectedClientVersion } from "../generatedNoCheck/OntologyMetadata.js";
import { $osdkMetadata } from "../generatedNoCheck/OntologyMetadata.js";

// TODO(mhogberg): Replace this handwritten fixture with generated output once agent generation is supported.
/** @experimental */
export namespace noArgsAgent {
  export interface Signatures {
    createSession(): Promise<AgentSession>;
  }
}

/** @experimental */
export interface noArgsAgent
  extends
    AgentDefinition<noArgsAgent.Signatures>,
    VersionBound<$ExpectedClientVersion> {
  type: "agent";
  apiName: "noArgsAgent";
  version: "1.2.3";
  osdkMetadata: typeof $osdkMetadata;
  __DefinitionMetadata?: {
    type: "agent";
    apiName: "noArgsAgent";
    version: "1.2.3";
    arguments: {};
    signatures: noArgsAgent.Signatures;
  };
}

/** @experimental */
export const noArgsAgent: noArgsAgent = {
  type: "agent",
  apiName: "noArgsAgent",
  version: "1.2.3",
  osdkMetadata: $osdkMetadata,
};
