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
  ClientContext as $ClientContext,
  OmniMethod as $OmniMethod,
} from "@osdk/shared.net";
import { omniFetch as $omniFetch } from "@osdk/shared.net";
import type * as $C from "../generated/components.js";

const _listOntologiesV2: $OmniMethod<
  () => Promise<$C.ListOntologiesV2Response>
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
  $ctx: $ClientContext<any>,
  ...args: []
): Promise<$C.ListOntologiesV2Response> {
  return $omniFetch($ctx, _listOntologiesV2, ...args);
}

const _getOntologyV2: $OmniMethod<
  (ontology: $C.OntologyIdentifier) => Promise<$C.OntologyV2>
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
  $ctx: $ClientContext<any>,
  ...args: [ontology: $C.OntologyIdentifier]
): Promise<$C.OntologyV2> {
  return $omniFetch($ctx, _getOntologyV2, ...args);
}

const _getOntologyFullMetadata: $OmniMethod<
  (ontology: $C.OntologyIdentifier) => Promise<$C.OntologyFullMetadata>
> = [0, "/v2/ontologies/{0}/fullMetadata"];

/**
 * Get the full Ontology metadata. This includes the objects, links, actions, queries, and interfaces.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/fullMetadata
 */
export function getOntologyFullMetadata(
  $ctx: $ClientContext<any>,
  ...args: [ontology: $C.OntologyIdentifier]
): Promise<$C.OntologyFullMetadata> {
  return $omniFetch($ctx, _getOntologyFullMetadata, ...args);
}
