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

import type {
  ListOntologiesV2Response,
  OntologyFullMetadata,
  OntologyIdentifier,
  OntologyV2,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _listOntologiesV2: $FoundryPlatformMethod<
  () => Promise<ListOntologiesV2Response>
> = [0, "/v2/ontologies"];

/**
 * Lists the Ontologies visible to the current user.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies
 */
export function listOntologiesV2(
  $ctx: $Client | $ClientContext,
  ...args: []
): Promise<ListOntologiesV2Response> {
  return $foundryPlatformFetch($ctx, _listOntologiesV2, ...args);
}

const _getOntologyV2: $FoundryPlatformMethod<
  (ontology: OntologyIdentifier) => Promise<OntologyV2>
> = [0, "/v2/ontologies/{0}"];

/**
 * Gets a specific ontology with the given Ontology RID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}
 */
export function getOntologyV2(
  $ctx: $Client | $ClientContext,
  ...args: [ontology: OntologyIdentifier]
): Promise<OntologyV2> {
  return $foundryPlatformFetch($ctx, _getOntologyV2, ...args);
}

const _getOntologyFullMetadata: $FoundryPlatformMethod<
  (ontology: OntologyIdentifier) => Promise<OntologyFullMetadata>
> = [0, "/v2/ontologies/{0}/fullMetadata"];

/**
 * Get the full Ontology metadata. This includes the objects, links, actions, queries, and interfaces.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/fullMetadata
 */
export function getOntologyFullMetadata(
  $ctx: $Client | $ClientContext,
  ...args: [ontology: OntologyIdentifier]
): Promise<OntologyFullMetadata> {
  return $foundryPlatformFetch($ctx, _getOntologyFullMetadata, ...args);
}
