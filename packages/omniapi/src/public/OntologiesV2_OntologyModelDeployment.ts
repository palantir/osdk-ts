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

const _listDeployments: $OmniMethod<
  (ontology: $C.OntologyIdentifier) => Promise<$C.ListDeploymentsResponse>
> = [0, "/v2/ontologies/{0}/models/deployments"];

/**
 * Fetches a list of the available model deployments within a given Ontology.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/models/deployments
 */
export function listDeployments(
  $ctx: $ClientContext<any>,
  ...args: [ontology: $C.OntologyIdentifier]
): Promise<$C.ListDeploymentsResponse> {
  return $omniFetch($ctx, _listDeployments, ...args);
}

const _getDeployment: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    deployment: $C.DeploymentApiName,
  ) => Promise<$C.DeploymentMetadata>
> = [0, "/v2/ontologies/{0}/models/deployments/{1}"];

/**
 * Fetches information about a model deployment within a given Ontology.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/models/deployments/{deployment}
 */
export function getDeployment(
  $ctx: $ClientContext<any>,
  ...args: [ontology: $C.OntologyIdentifier, deployment: $C.DeploymentApiName]
): Promise<$C.DeploymentMetadata> {
  return $omniFetch($ctx, _getDeployment, ...args);
}

const _transformDeployment: $OmniMethod<
  (
    ontology: $C.OntologyIdentifier,
    deployment: $C.DeploymentApiName,
    $body: $C.TransformDataRequest,
  ) => Promise<$C.TransformDataResponse>
> = [1, "/v2/ontologies/{0}/models/deployments/{1}/transform", 1];

/**
 * Use a given model deployment to transform the provided data.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/models/deployments/{deployment}/transform
 */
export function transformDeployment(
  $ctx: $ClientContext<any>,
  ...args: [
    ontology: $C.OntologyIdentifier,
    deployment: $C.DeploymentApiName,
    $body: $C.TransformDataRequest,
  ]
): Promise<$C.TransformDataResponse> {
  return $omniFetch($ctx, _transformDeployment, ...args);
}
