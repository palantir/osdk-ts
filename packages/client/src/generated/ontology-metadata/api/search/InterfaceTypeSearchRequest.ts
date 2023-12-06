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
import type { InterfaceTypeClause } from "./InterfaceTypeClause.js";
import type { InterfaceTypeFuzziness } from "./InterfaceTypeFuzziness.js";
import type { InterfaceTypeSearchPageToken } from "./InterfaceTypeSearchPageToken.js";
import type { InterfaceTypeSort } from "./InterfaceTypeSort.js";

/**
 * Request to search for InterfaceTypes based on the given clause. InterfaceTypes are searched across
 * all ontologies the user has access to.
 */
export interface InterfaceTypeSearchRequest {
  clause: InterfaceTypeClause;
  excludedInterfaceTypeRids: Array<string>;
  ontologyRids: Array<OntologyRid>;
  sort: InterfaceTypeSort | undefined;
  fuzziness: InterfaceTypeFuzziness | undefined;
  pageToken: InterfaceTypeSearchPageToken | undefined;
  pageSizeLimit: string;
}
