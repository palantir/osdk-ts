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

import type { BranchId } from "./BranchId.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";
import type { TableRid } from "./TableRid.js";

/**
 * Object type datasource that is backed by a table in foundry, uniquely identified by its locator.
 * Supports edit only property types through PropertyTypeMappingInfo.
 */
export interface OntologyIrObjectTypeTableDatasource {
  branchId: BranchId;
  propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
  tableRid: TableRid;
}
