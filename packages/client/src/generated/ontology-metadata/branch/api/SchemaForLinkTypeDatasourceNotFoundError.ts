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

import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";

/**
 * An error representing when the schema for a datasource on a link type cannot be found. For most datasources, the datasource identifier on the master branch is used to load the schema. On non-default branches for datasources that are datasets, the datasource BranchId is used (if one is configured for the branch); if the schema cannot be loaded in this case, the master branch of the dataset will be used instead.
 */
export interface SchemaForLinkTypeDatasourceNotFoundError {
  datasource: DatasourceRid;
  linkType: LinkTypeRid;
}
