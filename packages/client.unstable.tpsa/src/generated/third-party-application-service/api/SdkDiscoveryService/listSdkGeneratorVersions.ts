/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type {
  ListSdkGeneratorVersionsResponse as _api_ListSdkGeneratorVersionsResponse,
  PageSize as _api_PageSize,
  SdkGeneratorType as _api_SdkGeneratorType,
  SdkGeneratorVersionPageToken as _api_SdkGeneratorVersionPageToken,
} from "../__components.js";

/**
 * Get all SDK generator versions ordered by version descending.
 *
 * Requires third-party-application:view-sdk-discovery on the service root node.
 */
export async function listSdkGeneratorVersions(
  ctx: ConjureContext,
  sdkGeneratorType: _api_SdkGeneratorType,
  includeRecalled: boolean | null | undefined,
  includeReleaseCandidates: boolean | null | undefined,
  semVerRange: string | null | undefined,
  pageSize: _api_PageSize | null | undefined,
  pageToken: _api_SdkGeneratorVersionPageToken | null | undefined,
): Promise<_api_ListSdkGeneratorVersionsResponse> {
  return conjureFetch(
    ctx,
    `/sdk-discovery/generator/${sdkGeneratorType}/versions`,
    "GET",
    undefined,
    {
      includeRecalled,
      includeReleaseCandidates,
      semVerRange,
      pageSize,
      pageToken,
    },
  );
}
