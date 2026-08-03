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

import type { AliasesCollector } from "../aliases/AliasesCollector.js";
import type { MinimalFs } from "../MinimalFs.js";
import type { EnhancedOntologyDefinition } from "./EnhancedOntologyDefinition.js";

export interface GenerateContext {
  ontology: EnhancedOntologyDefinition;

  /**
   * Accumulates the source-environment wire api names of every entity that gets
   * generated. Written out last, by `generateAliasesFile`.
   */
  aliases: AliasesCollector;

  /**
   * Identifies this SDK in the alias registry. Two SDKs over the same ontology
   * are the normal case, so this has to distinguish them: the registry rejects
   * one id registering two different alias files.
   */
  sdkId: string;

  importExt?: string;
  fs: MinimalFs;

  outDir: string;
  fixedVersionQueryTypes: string[];
  ontologyApiNamespace?: string | undefined;
  apiNamespacePackageMap?: Map<string, string>;
  forInternalUse?: boolean;
}
