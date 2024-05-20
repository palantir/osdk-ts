/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import * as path from "node:path";
import type { MinimalFs } from "../../../../MinimalFs.js";
import { formatTs } from "../../../../util/test/formatTs.js";
import { reexportTypes } from "../../util/reexportTypes.js";

export async function generateErrors(
  fs: MinimalFs,
  ontologyProviderDir: string,
) {
  await fs.writeFile(
    path.join(ontologyProviderDir, "Errors.ts"),
    await formatTs(
      reexportTypes([
        "PermissionDenied",
        "Unauthorized",
        "InvalidAggregationRangeValue",
        "MalformedPropertyFilters",
        "PropertiesNotFilterable",
        "ParametersNotFound",
        "ApplyActionFailed",
        "PropertyTypesSearchNotSupported",
        "InvalidParameterValue",
        "QueryTimeExceededLimit",
        "CompositePrimaryKeyNotSupported",
        "PropertyBaseTypeNotSupported",
        "PropertiesNotSearchable",
        "AttachmentNotFound",
        "ObjectTypeNotFound",
        "InvalidGroupId",
        "OntologySyncing",
        "ActionNotFound",
        "ParameterObjectSetRidNotFound",
        "LinkTypeNotFound",
        "InvalidRangeQuery",
        "ActionParameterObjectNotFound",
        "InvalidPropertyValue",
        "PropertiesNotSortable",
        "FunctionExecutionTimedOut",
        "InvalidFields",
        "ActionTypeNotFound",
        "ObjectTypeNotSynced",
        "OntologyEditsExceededLimit",
        "AggregationGroupCountExceededLimit",
        "InvalidContentType",
        "PropertiesNotFound",
        "FunctionInvalidInput",
        "InvalidSortOrder",
        "QueryDepthExceededLimit",
        "InvalidPropertyFiltersCombination",
        "ObjectsExceededLimit",
        "DuplicateOrderBy",
        "FunctionEncounteredUserFacingError",
        "InvalidUserId",
        "QueryNotFound",
        "InvalidAggregationRange",
        "ParameterObjectNotFound",
        "QueryMemoryExceededLimit",
        "InvalidContentLength",
        "OntologyNotFound",
        "ActionParameterObjectTypeNotFound",
        "UnknownParameter",
        "InvalidSortType",
        "PropertyFiltersNotSupported",
        "ActionValidationFailed",
        "MultipleGroupByOnFieldNotSupported",
        "LinkedObjectNotFound",
        "ActionEditedPropertiesNotFound",
        "InvalidPropertyFilterValue",
        "QueryEncounteredUserFacingError",
        "AttachmentSizeExceededLimit",
        "ObjectNotFound",
        "PropertyApiNameNotFound",
        "ParameterTypeNotSupported",
        "InvalidAggregationRangePropertyType",
        "MissingParameter",
      ]),
    ),
  );
}
