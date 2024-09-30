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
    ontologyRid: _Core.OntologyRid,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Core.ListObjectTypesResponse>
> = [0, "/v1/ontologies/{0}/objectTypes", 2];

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
 * URL: /v1/ontologies/{ontologyRid}/objectTypes
 */
export function list(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Core.ListObjectTypesResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
  ) => Promise<_Core.ObjectType>
> = [0, "/v1/ontologies/{0}/objectTypes/{1}"];

/**
 * Gets a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/objectTypes/{objectType}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [ontologyRid: _Core.OntologyRid, objectType: _Core.ObjectTypeApiName]
): Promise<_Core.ObjectType> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _listOutgoingLinkTypes: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Core.ListOutgoingLinkTypesResponse>
> = [0, "/v1/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes", 2];

/**
 * List the outgoing links for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/objectTypes/{objectType}/outgoingLinkTypes
 */
export function listOutgoingLinkTypes(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Core.ListOutgoingLinkTypesResponse> {
  return $foundryPlatformFetch($ctx, _listOutgoingLinkTypes, ...args);
}

const _getOutgoingLinkType: $FoundryPlatformMethod<
  (
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    linkType: _Core.LinkTypeApiName,
  ) => Promise<_Core.LinkTypeSide>
> = [0, "/v1/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes/{2}"];

/**
 * Get an outgoing link for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/objectTypes/{objectType}/outgoingLinkTypes/{linkType}
 */
export function getOutgoingLinkType(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontologyRid: _Core.OntologyRid,
    objectType: _Core.ObjectTypeApiName,
    linkType: _Core.LinkTypeApiName,
  ]
): Promise<_Core.LinkTypeSide> {
  return $foundryPlatformFetch($ctx, _getOutgoingLinkType, ...args);
}
