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

import type { OntologyMetadata } from "@osdk/api";
import type { ClientContext } from "@osdk/shared.net";
import type { OntologyProvider } from "./ontology/OntologyProvider.js";
import type { VersionString } from "./SatisfiesSemver.js";

/*
 * We don't yet know exactly what the client context will look like,
 * so for now its a subset of the full ontology shape. This will change.
 */
export interface MinimalClient extends ClientContext<MinimalClientParams> {}

export type MinimalClientParams = {
  metadata: MinimalClientMetadata<any>;

  provider: OntologyProvider;
};

export interface MinimalClientMetadata<V extends VersionString<any, any, any>>
  extends OntologyMetadata<V>
{
  expectsClientVersion: V;
  userAgent: string;
  ontologyApiName: string;

  /** @deprecated this is only for transitional code. Do not rely on this for production */
  ontologyRid: string;
}
