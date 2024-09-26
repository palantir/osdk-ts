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
  (
    ontology: _Core.OntologyIdentifier,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Core.ListObjectTypesV2Response>
> = [0, "/v2/ontologies/{0}/objectTypes", 2];

/**
 * Lists the object types for the given Ontology.
 *
 * Each page may be smaller or larger than the requested page size. However, it is guaranteed that if there are
 * more results available, at least one result will be present in the
 * response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes
 */
export function list(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Core.ListObjectTypesV2Response> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,
  ) => Promise<_Core.ObjectTypeV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}"];

/**
 * Gets a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,
  ]
): Promise<_Core.ObjectTypeV2> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getFullMetadata: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Core.ObjectTypeFullMetadata>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/fullMetadata", 2];

/**
 * Gets the full metadata for a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/fullMetadata
 */
export function getFullMetadata(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Core.ObjectTypeFullMetadata> {
  return $foundryPlatformFetch($ctx, _getFullMetadata, ...args);
}

const _listOutgoingLinkTypes: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Core.ListOutgoingLinkTypesResponseV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes", 2];

/**
 * List the outgoing links for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/outgoingLinkTypes
 */
export function listOutgoingLinkTypes(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Core.ListOutgoingLinkTypesResponseV2> {
  return $foundryPlatformFetch($ctx, _listOutgoingLinkTypes, ...args);
}

const _getOutgoingLinkType: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,
    linkType: _Core.LinkTypeApiName,
  ) => Promise<_Core.LinkTypeSideV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes/{2}"];

/**
 * Get an outgoing link for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/outgoingLinkTypes/{linkType}
 */
export function getOutgoingLinkType(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,
    linkType: _Core.LinkTypeApiName,
  ]
): Promise<_Core.LinkTypeSideV2> {
  return $foundryPlatformFetch($ctx, _getOutgoingLinkType, ...args);
}
