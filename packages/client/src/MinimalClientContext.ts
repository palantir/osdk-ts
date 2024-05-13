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

import type { SharedClientContext } from "@osdk/shared.net";
import type { Logger } from "pino";
import type { ObjectSetFactory } from "./objectSet/ObjectSetFactory.js";
import type { OntologyProvider } from "./ontology/OntologyProvider.js";

export interface MinimalClient extends SharedClientContext {
  ontologyRid: string;
  ontologyProvider: OntologyProvider;
  logger?: Logger;
  objectSetFactory: ObjectSetFactory<any, any>;
}

export type MinimalClientParams = {
  metadata: MinimalClientMetadata;
  provider: OntologyProvider;
};

export interface MinimalClientMetadata {
  ontologyRid: string;
}
