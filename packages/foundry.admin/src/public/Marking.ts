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
  MarkingId,
  PageSize,
  PageToken,
  PreviewMode,
} from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type { ListMarkingsResponse, Marking } from "../_components.js";

//

const _listMarkings: $FoundryPlatformMethod<
  ($queryParams?: {
    pageSize?: PageSize | undefined;
    pageToken?: PageToken | undefined;
    preview?: PreviewMode | undefined;
  }) => Promise<ListMarkingsResponse>
> = [0, "/v2/admin/markings", 2];

/**
 * Maximum page size 100.
 *
 * @alpha
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/admin/markings
 */
export function listMarkings(
  $ctx: $Client | $ClientContext,
  ...args: [
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListMarkingsResponse> {
  return $foundryPlatformFetch($ctx, _listMarkings, ...args);
}

const _getMarking: $FoundryPlatformMethod<
  (
    markingId: MarkingId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<Marking>
> = [0, "/v2/admin/markings/{0}", 2];

/**
 * Get the Marking with the specified id.
 *
 * @alpha
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/admin/markings/{markingId}
 */
export function getMarking(
  $ctx: $Client | $ClientContext,
  ...args: [
    markingId: MarkingId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<Marking> {
  return $foundryPlatformFetch($ctx, _getMarking, ...args);
}
