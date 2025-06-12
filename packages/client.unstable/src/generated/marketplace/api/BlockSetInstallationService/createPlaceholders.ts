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
  CreatePlaceholdersRequest as _api_CreatePlaceholdersRequest,
  CreatePlaceholdersResponse as _api_CreatePlaceholdersResponse,
} from "../__components.js";

/**
 * Creates placeholders based on a set of unresolved blockSet input shapes passed in the request. Placeholders
 * are "dummy" resources that fulfill the given input shapes, and can be used when inputs cannot be mapped
 * directly to existing resources. Currently only supports dataset placeholders,
 * so the passed shapes must be either tabular datasource or datasource column shapes.
 *
 * Creation of placeholders is performed using the user token. For example, creating a placeholder for a
 * tabular datasource shape will require the permissions to create datasets in the given location.
 *
 * Markings provided in the request will be applied to the placeholder datasets.
 *
 * Returns the resolved input shapes fulfilling the shapes, based on the created resources.
 *
 * Throws `PlaceholdersRequestedLimitExceeded` if more than 10_000 input shapes, or more than 100 tabular datasource
 * input shapes, are passed in the request.
 * Throws `MissingCompassFolderInPlaceholdersLocation` if the compass folder is ommitted from the requested
 * placeholder location.
 * Throws `PlaceholdersRequestedForUnsupportedInputShapeTypes` if placeholders are requested for input shape
 * types that are not supported.
 * Throws `PlaceholdersRequestedForNonDatasetTabularDatasourceShapes` if the requested tabular datasource shapes
 * cannot be satisifed by datasets, and hence placeholders cannot be created.
 * Throws `PlacholdersRequestedForMalformedShapes` if the requested shapes are structurally incorrect, for
 * example if a tabular datasource is requested without simulatenously requesting all the column shapes,
 * or if two tabular datasources reference the same column.
 * Throws `PlaceholderCreationNotSupported` if creating placeholders is not supported for the deployment,
 * for example edge deployments
 * Throws `PlaceholderCreationTimedOut` if creating placeholders datasets took longer than 5 minutes
 */
export async function createPlaceholders(
  ctx: ConjureContext,
  request: _api_CreatePlaceholdersRequest,
): Promise<_api_CreatePlaceholdersResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/placeholders`,
    "POST",
    request,
  );
}
