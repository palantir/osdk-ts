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

const _applyActionV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    action: $C.ActionTypeApiName,
    $body: $C.ApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.SyncApplyActionResponseV2>
> = [1, "/v2/ontologies/{0}/actions/{1}/apply", 1];

/**
 * Applies an action using the given parameters.
 *
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 *
 * Required Scopes: [api:read-data, api:write-data]
 * URL: /v2/ontologies/{ontology}/actions/{action}/apply
 */
export function applyActionV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    action: $C.ActionTypeApiName,
    $body: $C.ApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.SyncApplyActionResponseV2> {
  return $omniFetch($ctx, _applyActionV2, ...args);
}

const _applyActionBatchV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    action: $C.ActionTypeApiName,
    $body: $C.BatchApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.BatchApplyActionResponseV2>
> = [1, "/v2/ontologies/{0}/actions/{1}/applyBatch", 1];

/**
 * Applies multiple actions (of the same Action Type) using the given parameters.
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Up to 20 actions may be applied in one call. Actions that only modify objects in Object Storage v2 and do not
 * call Functions may receive a higher limit.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 *
 * Required Scopes: [api:read-data, api:write-data]
 * URL: /v2/ontologies/{ontology}/actions/{action}/applyBatch
 */
export function applyActionBatchV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    action: $C.ActionTypeApiName,
    $body: $C.BatchApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.BatchApplyActionResponseV2> {
  return $omniFetch($ctx, _applyActionBatchV2, ...args);
}

const _applyActionAsyncV2: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    action: $C.ActionTypeApiName,
    $body: $C.AsyncApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ) => Promise<$C.AsyncApplyActionResponseV2>
> = [1, "/v2/ontologies/{0}/actions/{1}/applyAsync", 1];

/**
 * Applies an action using the given parameters.
 *
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 *
 * Required Scopes: [api:read-data, api:write-data]
 * URL: /v2/ontologies/{ontology}/actions/{action}/applyAsync
 */
export function applyActionAsyncV2(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    action: $C.ActionTypeApiName,
    $body: $C.AsyncApplyActionRequestV2,
    $queryParams?: {
      artifactRepository?: $C.ArtifactRepositoryRid;
      packageName?: $C.SdkPackageName;
    },
  ]
): Promise<$C.AsyncApplyActionResponseV2> {
  return $omniFetch($ctx, _applyActionAsyncV2, ...args);
}
