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

import type { SharedClientContext } from "@osdk/shared.client";
import type { Logger } from "./Logger.js";
import type { ObjectSetFactory } from "./objectSet/ObjectSetFactory.js";
import type { OntologyProvider } from "./ontology/OntologyProvider.js";

declare const tag: unique symbol;

export type ClientCacheKey = {} & { readonly [tag]: void };

export type RequestContext = {
  finalMethodCall?: string;
};

export interface MinimalClient extends SharedClientContext {
  ontologyRid: string | Promise<string>;
  ontologyProvider: OntologyProvider;
  logger?: Logger;
  /** @internal */
  objectSetFactory: ObjectSetFactory<any, any>;
  clientCacheKey: ClientCacheKey;
  requestContext: RequestContext;
}

export type MinimalClientParams = {
  metadata: MinimalClientMetadata;
  provider: OntologyProvider;
};

export interface MinimalClientMetadata {
  ontologyRid: string | Promise<string>;
}
