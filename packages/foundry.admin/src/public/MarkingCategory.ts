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

import type { PageSize, PageToken, PreviewMode } from "@osdk/foundry.core";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type {
  ListMarkingCategoriesResponse,
  MarkingCategory,
  MarkingCategoryId,
} from "../_components.js";

//

const _listMarkingCategories: $FoundryPlatformMethod<
  ($queryParams?: {
    pageSize?: PageSize | undefined;
    pageToken?: PageToken | undefined;
    preview?: PreviewMode | undefined;
  }) => Promise<ListMarkingCategoriesResponse>
> = [0, "/v2/admin/markingCategories", 2];

/**
 * Maximum page size 100.
 *
 * @alpha
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/admin/markingCategories
 */
export function listMarkingCategories(
  $ctx: $Client | $ClientContext,
  ...args: [
    $queryParams?: {
      pageSize?: PageSize | undefined;
      pageToken?: PageToken | undefined;
      preview?: PreviewMode | undefined;
    },
  ]
): Promise<ListMarkingCategoriesResponse> {
  return $foundryPlatformFetch($ctx, _listMarkingCategories, ...args);
}

const _getMarkingCategory: $FoundryPlatformMethod<
  (
    markingCategoryId: MarkingCategoryId,
    $queryParams?: { preview?: PreviewMode | undefined },
  ) => Promise<MarkingCategory>
> = [0, "/v2/admin/markingCategories/{0}", 2];

/**
 * Get the MarkingCategory with the specified id.
 *
 * @alpha
 *
 * Required Scopes: [api:security-read]
 * URL: /v2/admin/markingCategories/{markingCategoryId}
 */
export function getMarkingCategory(
  $ctx: $Client | $ClientContext,
  ...args: [
    markingCategoryId: MarkingCategoryId,

    $queryParams?: { preview?: PreviewMode | undefined },
  ]
): Promise<MarkingCategory> {
  return $foundryPlatformFetch($ctx, _getMarkingCategory, ...args);
}
