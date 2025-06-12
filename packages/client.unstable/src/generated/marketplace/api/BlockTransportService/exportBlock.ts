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
  BlockVersionId as _api_BlockVersionId,
  ExportBlockRequest as _api_ExportBlockRequest,
  MarketplaceRid as _api_MarketplaceRid,
} from "../__components.js";

/**
 * Streams the block as a single archive in a standard layout.
 * This streamed archive will contain both block metadata and block data.
 *
 * The data is returned as a zip file (the contents of a `.zip` file) which contains a `VERSION` file, which
 * contains a raw semver string. The only valid value is currently `1.0`. This file MUST be checked.
 *
 * For any file for which the `VERSION` key's value starts with `1.`, there will be a `manifest.v1.json` file,
 * which contains a `BlockManifestV1` object.
 *
 * If there are any failures while generating the container, an `ERROR` file will be generated containing the
 * error message. Any zip file containing an `ERROR` file should be considered failed/invalid. This file MUST
 * be checked.
 *
 * All data/files for a given locator type will be put in the same folder, organized in a
 * standardized layout, as described below.
 *
 * - `FilesLocator`
 * - Folder: `files/`
 * - Layout: the files are laid out as-is in the repository.
 * - `OciLocator`:
 * - Folder: `oci/`
 * - Layout: The contents of this folder represent an OCI image as per
 * [OCI image layout spec](https://github.com/opencontainers/image-spec/blob/v1.0.1/image-layout.md)
 * - `NpmLocator`:
 * - Folder: `npm/`
 * - Layout: Layout to match NPM's public registry, namely:
 * - For scoped packages: `$scope/$package/-/$scope/$package-$version.tgz`
 * - For unscoped packages: `$package/-/$package-$version.tgz`
 */
export async function exportBlock(
  ctx: ConjureContext,
  marketplaceRid: _api_MarketplaceRid,
  blockVersionId: _api_BlockVersionId,
  request: _api_ExportBlockRequest,
): Promise<string> {
  return conjureFetch(
    ctx,
    `/block-transport/${marketplaceRid}/version/${blockVersionId}`,
    "POST",
    request,
    undefined,
    undefined,
    "application/octet-stream",
  );
}
