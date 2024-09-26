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

const _listActionTypesV2: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Core.ListActionTypesResponseV2>
> = [0, "/v2/ontologies/{0}/actionTypes", 2];

/**
 * Lists the action types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/actionTypes
 */
export function listActionTypesV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Core.ListActionTypesResponseV2> {
  return $foundryPlatformFetch($ctx, _listActionTypesV2, ...args);
}

const _getActionTypeV2: $FoundryPlatformMethod<
  (
    ontology: _Core.OntologyIdentifier,
    actionType: _Core.ActionTypeApiName,
  ) => Promise<_Core.ActionTypeV2>
> = [0, "/v2/ontologies/{0}/actionTypes/{1}"];

/**
 * Gets a specific action type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/actionTypes/{actionType}
 */
export function getActionTypeV2(
  $ctx: $Client | $ClientContext,
  ...args: [
    ontology: _Core.OntologyIdentifier,
    actionType: _Core.ActionTypeApiName,
  ]
): Promise<_Core.ActionTypeV2> {
  return $foundryPlatformFetch($ctx, _getActionTypeV2, ...args);
}
