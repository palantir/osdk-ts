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

import type { OntologyRid } from "../OntologyRid.js";
import type { SharedPropertyTypeClause } from "./SharedPropertyTypeClause.js";
import type { SharedPropertyTypeFuzziness } from "./SharedPropertyTypeFuzziness.js";
import type { SharedPropertyTypeSearchPageToken } from "./SharedPropertyTypeSearchPageToken.js";
import type { SharedPropertyTypeSort } from "./SharedPropertyTypeSort.js";

/**
 * Request to search for SharedPropertyTypes based on the given clause. SharedPropertyTypes are searched across
 * all ontologies the user has access to.
 */
export interface SharedPropertyTypeSearchRequest {
  clause: SharedPropertyTypeClause;
  excludedSharedPropertyTypeRids: Array<string>;
  ontologyRids: Array<OntologyRid>;
  sort: SharedPropertyTypeSort | undefined;
  fuzziness: SharedPropertyTypeFuzziness | undefined;
  pageToken: SharedPropertyTypeSearchPageToken | undefined;
  pageSizeLimit: string;
}
