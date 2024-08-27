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
  ArtifactRepositoryRid,
  AttachmentMetadataResponse,
  AttachmentRid,
  AttachmentV2,
  ObjectTypeApiName,
  OntologyIdentifier,
  PropertyApiName,
  PropertyValueEscapedString,
  SdkPackageName,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _listPropertyAttachments: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<AttachmentMetadataResponse>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}", 2];

/**
 * Get the metadata of attachments parented to the given object.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}
 */
export function listPropertyAttachments(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<AttachmentMetadataResponse> {
  return $foundryPlatformFetch($ctx, _listPropertyAttachments, ...args);
}

const _getAttachmentPropertyByRidV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    attachmentRid: AttachmentRid,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<AttachmentV2>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/{4}", 2];

/**
 * Get the metadata of a particular attachment in an attachment list.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/{attachmentRid}
 */
export function getAttachmentPropertyByRidV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    attachmentRid: AttachmentRid,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<AttachmentV2> {
  return $foundryPlatformFetch($ctx, _getAttachmentPropertyByRidV2, ...args);
}

const _getAttachmentPropertyContentV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<Blob>
> = [
  0,
  "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/content",
  2,
  ,
  "*/*",
];

/**
 * Get the content of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/content
 */
export function getAttachmentPropertyContentV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch($ctx, _getAttachmentPropertyContentV2, ...args);
}

const _getAttachmentPropertyContentByRidV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    attachmentRid: AttachmentRid,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<Blob>
> = [
  0,
  "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/{4}/content",
  2,
  ,
  "*/*",
];

/**
 * Get the content of an attachment by its RID.
 *
 * The RID must exist in the attachment array of the property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/{attachmentRid}/content
 */
export function getAttachmentPropertyContentByRidV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    objectType: ObjectTypeApiName,
    primaryKey: PropertyValueEscapedString,
    property: PropertyApiName,
    attachmentRid: AttachmentRid,

    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<Blob> {
  return $foundryPlatformFetch(
    $ctx,
    _getAttachmentPropertyContentByRidV2,
    ...args,
  );
}
