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

const _getLatestValue: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,
    primaryKey: _Core.PropertyValueEscapedString,
    propertyName: _Core.PropertyApiName,
    $queryParams?: {
      artifactRepository?: _Core.ArtifactRepositoryRid | undefined;
      packageName?: _Core.SdkPackageName | undefined;
    },
  ) => Promise<_Core.TimeseriesEntry | undefined>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/latestValue", 2];

/**
 * Get the latest value of a property backed by a timeseries. If a specific geotime series integration has both a history and a live integration, we will give precedence to the live integration.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 *
 * @alpha
 *
 * Required Scopes: [api:read-data]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/timeseries/{propertyName}/latestValue
 */
export function getLatestValue(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,
    objectType: _Core.ObjectTypeApiName,
    primaryKey: _Core.PropertyValueEscapedString,
    propertyName: _Core.PropertyApiName,

    $queryParams?: {
      artifactRepository?: _Core.ArtifactRepositoryRid | undefined;
      packageName?: _Core.SdkPackageName | undefined;
    },
  ]
): Promise<_Core.TimeseriesEntry | undefined> {
  return $foundryPlatformFetch($ctx, _getLatestValue, ...args);
}
