/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { conjureFetch, type ConjureContext } from "conjure-lite";

import type { ClearMigrationInformationRequest as _api_modification_ClearMigrationInformationRequest } from "../../../modification/__components.js";
import type { OntologyModificationResponse as _api_modification_OntologyModificationResponse } from "../../../modification/__components.js";

/**
 * Finalizes an OSv1 to OSv2 migration for the provided entities. For each entity whose current target storage
 * backend differs from the requested one, this clears the migration configuration from the target storage
 * backend, updates the entity config / patch settings, and strips writeback datasets from the entity's
 * datasources. Historically this transform ran in objects-data-funnel against the public modifyOntology
 * endpoint; moving it here lets it run with migration-relaxed validations, matching the internal OSv2 migrator.
 */
export async function clearMigrationInformation(
  ctx: ConjureContext,
  request: _api_modification_ClearMigrationInformationRequest,
): Promise<_api_modification_OntologyModificationResponse> {
  return conjureFetch(
    ctx,
    `/ontology/internal/modification/v1/migration/clear-information`,
    "POST",
    request,
  );
}
