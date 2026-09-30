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

import type { AgentDefinitionVersion } from "@osdk/foundry.agents";
import type * as gateway from "@osdk/foundry.ontologies";

export interface WireAgentDefinition extends AgentDefinitionVersion {
  apiName: string;
}

export interface WireOntologyDefinition extends gateway.OntologyFullMetadata {
  // TODO(merge9): Rename to agents
  // TODO(merge9): Use loosely branded string like the other types in OntologyFullMetadata
  // TODO(merge9): Can this contain the full agent definition metadata, so that it
  //  behaves more like the other ontology types?
  agentTypes?: Record<string, WireAgentDefinition>;
}
