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

import type { ObjectTypeClause } from "./ObjectTypeClause.js";
import type { ObjectTypeSearchPageToken } from "./ObjectTypeSearchPageToken.js";
import type { ObjectTypeSort } from "./ObjectTypeSort.js";

/**
 * Request to search for ObjectTypes based on the given clause. ObjectTypes are searched across all Ontologies
 * the user has access to.
 */
export interface ObjectTypeSearchRequest {
  clause: ObjectTypeClause;
  sort: ObjectTypeSort | undefined;
  pageToken: ObjectTypeSearchPageToken | undefined;
  pageSizeLimit: string;
  loadRedacted: boolean | undefined;
  includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
