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
  UpdatePlaceholdersRequest as _api_UpdatePlaceholdersRequest,
  UpdatePlaceholdersResponse as _api_UpdatePlaceholdersResponse,
} from "../__components.js";

/**
 * Updates placeholders based on a set of unresolved blockSet input shapes passed in the request. Placeholders
 * are "dummy" resources that fulfill the given input shapes, and can be used when inputs cannot be mapped
 * directly to existing resources. Currently only supports dataset placeholders,
 * so the passed shapes must be either tabular datasource or datasource column shapes.
 *
 * Datasets must have no data and no JobSpec to be considered as placeholders that can be updated. The current
 * schema must be compatible with the new schema (columns present in both the current and target schemas must
 * have the same type). If compatible, the updated dataset schema will include the union of columns from the
 * current and target schemas.
 *
 * The update of placeholders is performed using the user token. For example, creating a placeholder for a
 * tabular datasource shape will require the permissions to put a schema in the current placeholder dataset.
 *
 * Returns the resolved input shapes fulfilling the shapes, based on the updated resources.
 *
 * Throws `PlaceholdersRequestedLimitExceeded` if more than 10_000 input shapes, or more than 100 tabular datasource
 * input shapes, are passed in the request.
 * Throws `PlaceholdersRequestedForUnsupportedInputShapeTypes` if placeholders are requested for input shape
 * types that are not supported.
 * Throws `PlaceholdersRequestedForNonDatasetTabularDatasourceShapes` if the requested tabular datasource shapes
 * cannot be satisifed by datasets, and hence placeholders cannot be updated.
 * Throws `PlacholdersRequestedForMalformedShapes` if the requested shapes are structurally incorrect, for
 * example if a tabular datasource is requested without simulatenously requesting all the column shapes,
 * or if two tabular datasources reference the same column.
 * Throws `FailedToReadPlaceholderMetadata` if the user lacked permission to access the provided placeholder or its metadata.
 * Throws `CannotUpdatePlaceholdersWithJobSpec`, `CannotUpdatePlaceholdersWithData`, `CannotUpdatePlaceholdersWithoutSchema`
 * if the provided placeholder dataset has a JobSpec, data, or no schema
 * Throws `InvalidPlaceholderToUpdate` for other errors when processing the provided placeholder dataset.
 * Throws `IncompatiblePlaceholderToUpdate` if the previous placeholder dataset schema is incompatible with the updated one.
 * Throws `PlaceholderUpdateNotSupported` if creating placeholders is not supported for the deployment,
 * for example edge deployments
 * Throws `PlaceholderUpdateTimedOut` if updating placeholders datasets took longer than 5 minutes
 */
export async function updatePlaceholders(
  ctx: ConjureContext,
  request: _api_UpdatePlaceholdersRequest,
): Promise<_api_UpdatePlaceholdersResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/placeholders/update`,
    "POST",
    request,
  );
}
