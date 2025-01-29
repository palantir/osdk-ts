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

import type { DataSetName } from "./blockdata/DataSetName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";

/**
 * Object type datasource supporting edit only property types, that is backed by a dataset in foundry,
 * uniquely identified by its rid and branch. It is only compatible with object storage v2, hence does not
 * have a writeback dataset. Its property types are mapped to PropertyTypeMappingInfo instead of column names.
 */
export interface OntologyIrObjectTypeDatasetDatasourceV2 {
  datasetRid: DataSetName;
  propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeMappingInfo>;
}
