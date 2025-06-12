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
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
  BlockSetVersionId as _api_BlockSetVersionId,
  PreviewCleanupUnusedShapesResponse as _api_PreviewCleanupUnusedShapesResponse,
} from "../__components.js";

/**
 * For more details about Cleanup of Unused Shapes, please see CleanupUnusedShapesSettings docs.
 * Returns the output shapes that will be cleaned up along with their respective soft-delete modes
 * when the specified installation is upgraded or downgraded to the given version.
 * Specifically, we identify shapes that are present in the current version(s) of the given installation
 * but are absent in the target version. If the specified installation spans multiple current versions (due to
 * a previous failed job), the computation is performed for each version individually and then combined
 * (using a union operation).
 */
export async function previewCleanupUnusedShapes(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
  targetVersionId: _api_BlockSetVersionId,
): Promise<_api_PreviewCleanupUnusedShapesResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/${blockSetInstallationRid}/cleanup-unused-shapes/preview/${targetVersionId}`,
    "GET",
  );
}
