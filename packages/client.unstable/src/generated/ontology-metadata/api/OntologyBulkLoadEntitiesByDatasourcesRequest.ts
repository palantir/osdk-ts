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

import type { DatasourceBackingRid } from "./DatasourceBackingRid.js";

/**
 * Request to batch load Ontology entities by their backing datasource rids. If any of the requested
 * entities are not available in the latest version of any Ontology or the user is
 * missing permissions to see them, the corresponding entry in the
 * response will be empty. Upper limit for number of datasource rids is 500 for this request.
 */
export interface OntologyBulkLoadEntitiesByDatasourcesRequest {
  datasourceBackingRids: Array<DatasourceBackingRid>;
  loadRedacted: boolean | undefined;
  includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
