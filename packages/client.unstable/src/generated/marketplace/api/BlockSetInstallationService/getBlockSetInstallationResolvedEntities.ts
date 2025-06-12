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
  BlockSetInstallationResolvedEntities
    as _api_BlockSetInstallationResolvedEntities,
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
} from "../__components.js";

/**
 * A BlockSetInstallation may be spread across multiple BlockSetVersions.
 * Uses BlockSetShapes of BlockSetVersionId of the latest (ongoing) install job.
 * In case of an ongoing/failed upgrade job, Resolved Entities may come from multiple installation jobs.
 */
export async function getBlockSetInstallationResolvedEntities(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
): Promise<_api_BlockSetInstallationResolvedEntities> {
  return conjureFetch(
    ctx,
    `/block-set-installation/resolved-entities/${blockSetInstallationRid}`,
    "GET",
  );
}
