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

import type { OntologyRid } from "../OntologyRid.mjs";
import type { TypeGroupRid } from "../TypeGroupRid.mjs";
import type { TypeGroupClause } from "./TypeGroupClause.mjs";
import type { TypeGroupFuzziness } from "./TypeGroupFuzziness.mjs";
import type { TypeGroupSearchPageToken } from "./TypeGroupSearchPageToken.mjs";
import type { TypeGroupSort } from "./TypeGroupSort.mjs";

export interface TypeGroupSearchRequest {
  clause: TypeGroupClause;
  excludedTypeGroupRids: Array<TypeGroupRid>;
  ontologyRids: Array<OntologyRid>;
  sort: TypeGroupSort | undefined;
  fuzziness: TypeGroupFuzziness | undefined;
  pageToken: TypeGroupSearchPageToken | undefined;
  pageSizeLimit: string;
}
