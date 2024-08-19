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
  ListOntologiesResponse,
  Ontology,
  OntologyRid,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _listOntologies: $FoundryPlatformMethod<
  () => Promise<ListOntologiesResponse>
> = [0, "/v1/ontologies"];

/**
 * Lists the Ontologies visible to the current user.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies
 */
export function listOntologies(
  $ctx: $Client | $ClientContext,
  ...args: []
): Promise<ListOntologiesResponse> {
  return $foundryPlatformFetch($ctx, _listOntologies, ...args);
}

const _getOntology: $FoundryPlatformMethod<
  (ontologyRid: OntologyRid) => Promise<Ontology>
> = [0, "/v1/ontologies/{0}"];

/**
 * Gets a specific ontology with the given Ontology RID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}
 */
export function getOntology(
  $ctx: $Client | $ClientContext,
  ...args: [ontologyRid: OntologyRid]
): Promise<Ontology> {
  return $foundryPlatformFetch($ctx, _getOntology, ...args);
}
