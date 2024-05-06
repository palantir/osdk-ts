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
  PageSize,
  PageToken,
  PreviewMode,
  PrincipalId,
} from "@osdk/foundry.common";
import type { ListGroupMembershipsResponse } from "@osdk/foundry.security";
import type {
  ClientContext as $ClientContext,
  OmniMethod as $OmniMethod,
} from "@osdk/shared.net";
import { omniFetch as $omniFetch } from "@osdk/shared.net";

//

const _listGroupMemberships: $OmniMethod<
  (
    userId: PrincipalId,
    $queryParams?: {
      transitive?: boolean | undefined;
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ) => Promise<ListGroupMembershipsResponse>
> = [0, "/v2/security/users/{0}/groupMemberships", 2];

/**
 * Lists all GroupMemberships
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/security/users/{userId}/groupMemberships
 */
export function listGroupMemberships(
  $ctx: $ClientContext<any>,
  ...args: [
    userId: PrincipalId,

    $queryParams?: {
      transitive?: boolean | undefined;
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListGroupMembershipsResponse> {
  return $omniFetch($ctx, _listGroupMemberships, ...args);
}
