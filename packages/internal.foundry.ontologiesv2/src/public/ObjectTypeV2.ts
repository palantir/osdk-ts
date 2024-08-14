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
  LinkTypeApiName,
  LinkTypeSideV2,
  ListObjectTypesV2Response,
  ListOutgoingLinkTypesResponseV2,
  ObjectTypeApiName,
  ObjectTypeV2,
  OntologyIdentifier,
  PageSize,
  PageToken,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _listObjectTypesV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
    },
  ) => Promise<ListObjectTypesV2Response>
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
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes
 */
export function listObjectTypesV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,

    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
    },
  ]
): Promise<ListObjectTypesV2Response> {
  return $foundryPlatformFetch($ctx, _listObjectTypesV2, ...args);
}

const _getObjectTypeV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
  ) => Promise<ObjectTypeV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}"];

/**
 * Gets a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}
 */
export function getObjectTypeV2(
  $ctx: $Client | $ClientContext,
  ...args: [ontology: OntologyIdentifier, objectType: ObjectTypeApiName]
): Promise<ObjectTypeV2> {
  return $foundryPlatformFetch($ctx, _getObjectTypeV2, ...args);
}

const _listOutgoingLinkTypesV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
    },
  ) => Promise<ListOutgoingLinkTypesResponseV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes", 2];

/**
 * List the outgoing links for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/outgoingLinkTypes
 */
export function listOutgoingLinkTypesV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,

    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
    },
  ]
): Promise<ListOutgoingLinkTypesResponseV2> {
  return $foundryPlatformFetch($ctx, _listOutgoingLinkTypesV2, ...args);
}

const _getOutgoingLinkTypeV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    linkType: LinkTypeApiName,
  ) => Promise<LinkTypeSideV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes/{2}"];

/**
 * Get an outgoing link for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/outgoingLinkTypes/{linkType}
 */
export function getOutgoingLinkTypeV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    linkType: LinkTypeApiName,
  ]
): Promise<LinkTypeSideV2> {
  return $foundryPlatformFetch($ctx, _getOutgoingLinkTypeV2, ...args);
}
