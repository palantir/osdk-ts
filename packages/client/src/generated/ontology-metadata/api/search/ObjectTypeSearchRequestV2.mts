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

import type { ObjectTypeRid } from "../ObjectTypeRid.mjs";
import type { OntologyRid } from "../OntologyRid.mjs";
import type { ObjectTypeClause } from "./ObjectTypeClause.mjs";
import type { ObjectTypeFuzziness } from "./ObjectTypeFuzziness.mjs";
import type { ObjectTypeSearchPageTokenV2 } from "./ObjectTypeSearchPageTokenV2.mjs";
import type { ObjectTypeSort } from "./ObjectTypeSort.mjs";

export interface ObjectTypeSearchRequestV2 {
  clause: ObjectTypeClause;
  ontologyRids: Array<OntologyRid>;
  excludedObjectTypeRids: Array<ObjectTypeRid>;
  sort: ObjectTypeSort | undefined;
  fuzziness: ObjectTypeFuzziness | undefined;
  pageToken: ObjectTypeSearchPageTokenV2 | undefined;
  pageSizeLimit: string;
  loadRedacted: boolean | undefined;
  includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
