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

import type { VersionBound } from "@osdk/api";
import type { AgentDefinition, AgentSession } from "@osdk/api/unstable";

import type { $ExpectedClientVersion } from "../generatedNoCheck/OntologyMetadata.js";
import { $osdkMetadata } from "../generatedNoCheck/OntologyMetadata.js";

// TODO(mhogberg): Replace this handwritten fixture with generated output once agent generation is supported.
/** @beta */
export namespace osdkTestFixture {
  export interface Signatures {
    createSession(args: osdkTestFixture.Params): Promise<AgentSession>;
  }

  export interface Params {
    readonly defaultCity: string;
  }
}

/** @beta */
export interface osdkTestFixture
  extends
    AgentDefinition<osdkTestFixture.Signatures>,
    VersionBound<$ExpectedClientVersion> {
  type: "agent";
  apiName: "osdkTestFixture";
  version: "0.5.0";
  osdkMetadata: typeof $osdkMetadata;
  __DefinitionMetadata?: {
    signatures: osdkTestFixture.Signatures;
  };
}

/** @beta */
export const osdkTestFixture: osdkTestFixture = {
  type: "agent",
  apiName: "osdkTestFixture",
  version: "0.5.0",
  osdkMetadata: $osdkMetadata,
};
