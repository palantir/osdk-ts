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
  ActionTypeApiName,
  ApplyActionRequestV2,
  ArtifactRepositoryRid,
  AsyncApplyActionRequestV2,
  AsyncApplyActionResponseV2,
  BatchApplyActionRequestV2,
  BatchApplyActionResponseV2,
  OntologyIdentifier,
  SdkPackageName,
  SyncApplyActionResponseV2,
} from "@osdk/internal.foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";

//

const _applyActionV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    action: ActionTypeApiName,
    $body: ApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<SyncApplyActionResponseV2>
> = [1, "/v2/ontologies/{0}/actions/{1}/apply", 3];

/**
 * Applies an action using the given parameters.
 *
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Note that [parameter default values](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read api:ontologies-write`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read, api:ontologies-write]
 * URL: /v2/ontologies/{ontology}/actions/{action}/apply
 */
export function applyActionV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    action: ActionTypeApiName,
    $body: ApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<SyncApplyActionResponseV2> {
  return $foundryPlatformFetch($ctx, _applyActionV2, ...args);
}

const _applyActionAsyncV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    action: ActionTypeApiName,
    $body: AsyncApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<AsyncApplyActionResponseV2>
> = [1, "/v2/ontologies/{0}/actions/{1}/applyAsync", 3];

/**
 * Applies an action using the given parameters.
 *
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Note that [parameter default values](https://www.palantir.com/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read api:ontologies-write`.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read, api:ontologies-write]
 * URL: /v2/ontologies/{ontology}/actions/{action}/applyAsync
 */
export function applyActionAsyncV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    action: ActionTypeApiName,
    $body: AsyncApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<AsyncApplyActionResponseV2> {
  return $foundryPlatformFetch($ctx, _applyActionAsyncV2, ...args);
}

const _applyActionBatchV2: $FoundryPlatformMethod<
  (
    ontology: OntologyIdentifier,
    action: ActionTypeApiName,
    $body: BatchApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ) => Promise<BatchApplyActionResponseV2>
> = [1, "/v2/ontologies/{0}/actions/{1}/applyBatch", 3];

/**
 * Applies multiple actions (of the same Action Type) using the given parameters.
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Up to 20 actions may be applied in one call. Actions that only modify objects in Object Storage v2 and do not
 * call Functions may receive a higher limit.
 *
 * Note that [notifications](https://www.palantir.com/docs/foundry/action-types/notifications/) are not currently supported by this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read api:ontologies-write`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read, api:ontologies-write]
 * URL: /v2/ontologies/{ontology}/actions/{action}/applyBatch
 */
export function applyActionBatchV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: OntologyIdentifier,
    action: ActionTypeApiName,
    $body: BatchApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: ArtifactRepositoryRid | undefined;
      packageName?: SdkPackageName | undefined;
    },
  ]
): Promise<BatchApplyActionResponseV2> {
  return $foundryPlatformFetch($ctx, _applyActionBatchV2, ...args);
}
