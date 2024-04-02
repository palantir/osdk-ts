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

const _listObjectTypesV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    $queryParams?: { pageSize?: $C.PageSize; pageToken?: $C.PageToken },
  ) => Promise<$C.ListObjectTypesV2Response>
> = [0, "/v2/ontologies/{0}/objectTypes"];

/**
 * Lists the object types for the given Ontology.
 *
 * Each page may be smaller or larger than the requested page size. However, it is guaranteed that if there are
 * more results available, at least one result will be present in the
 * response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objectTypes
 */
export function listObjectTypesV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,

    $queryParams?: { pageSize?: $C.PageSize; pageToken?: $C.PageToken },
  ]
): Promise<$C.ListObjectTypesV2Response> {
  return $omniFetch($ctx, _listObjectTypesV2, ...args);
}

const _getObjectTypeV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
  ) => Promise<$C.ObjectTypeV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}"];

/**
 * Gets a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}
 */
export function getObjectTypeV2(
  $ctx: $ClientContext<any>,
  ...args: [ontology: $C.OntologyIdentifier, objectType: $C.ObjectTypeApiName]
): Promise<$C.ObjectTypeV2> {
  return $omniFetch($ctx, _getObjectTypeV2, ...args);
}

const _listOutgoingLinkTypesV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    $queryParams?: { pageSize?: $C.PageSize; pageToken?: $C.PageToken },
  ) => Promise<$C.ListOutgoingLinkTypesResponseV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes"];

/**
 * List the outgoing links for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/outgoingLinkTypes
 */
export function listOutgoingLinkTypesV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,

    $queryParams?: { pageSize?: $C.PageSize; pageToken?: $C.PageToken },
  ]
): Promise<$C.ListOutgoingLinkTypesResponseV2> {
  return $omniFetch($ctx, _listOutgoingLinkTypesV2, ...args);
}

const _getOutgoingLinkTypeV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    linkType: $C.LinkTypeApiName,
  ) => Promise<$C.LinkTypeSideV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes/{2}"];

/**
 * Get an outgoing link for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/outgoingLinkTypes/{linkType}
 */
export function getOutgoingLinkTypeV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    objectType: $C.ObjectTypeApiName,
    linkType: $C.LinkTypeApiName,
  ]
): Promise<$C.LinkTypeSideV2> {
  return $omniFetch($ctx, _getOutgoingLinkTypeV2, ...args);
}
