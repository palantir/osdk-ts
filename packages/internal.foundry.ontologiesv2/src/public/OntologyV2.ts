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

import type * as _Core from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _list: $FoundryPlatformMethod<
  () => Promise<_Core.ListOntologiesV2Response>
> = [0, "/v2/ontologies"];

/**
 * Lists the Ontologies visible to the current user.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies
 */
export function list(
  $ctx: $Client | $ClientContext,
  ...args: []
): Promise<_Core.ListOntologiesV2Response> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _get: $FoundryPlatformMethod<
  (ontology: _Core.OntologyIdentifier) => Promise<_Core.OntologyV2>
> = [0, "/v2/ontologies/{0}"];

/**
 * Gets a specific ontology with the given Ontology RID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [ontology: _Core.OntologyIdentifier]
): Promise<_Core.OntologyV2> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getFullMetadata: $FoundryPlatformMethod<
  (ontology: _Core.OntologyIdentifier) => Promise<_Core.OntologyFullMetadata>
> = [0, "/v2/ontologies/{0}/fullMetadata"];

/**
 * Get the full Ontology metadata. This includes the objects, links, actions, queries, and interfaces.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/fullMetadata
 */
export function getFullMetadata(
  $ctx: $Client | $ClientContext,
  ...args: [ontology: _Core.OntologyIdentifier]
): Promise<_Core.OntologyFullMetadata> {
  return $foundryPlatformFetch($ctx, _getFullMetadata, ...args);
}
