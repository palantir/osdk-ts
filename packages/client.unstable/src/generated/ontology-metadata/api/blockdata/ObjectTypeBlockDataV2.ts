/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectType } from "../ObjectType.js";
import type { ObjectTypeDatasource } from "../ObjectTypeDatasource.js";
import type { MarketplaceObjectTypeEntityMetadata } from "./MarketplaceObjectTypeEntityMetadata.js";
import type { ObjectsWritebackDataset } from "./ObjectsWritebackDataset.js";
import type { SchemaMigrationBlockData } from "./SchemaMigrationBlockData.js";
export interface ObjectTypeBlockDataV2 {
  objectType: ObjectType;
  datasources: Array<ObjectTypeDatasource>;
  writebackDatasets: Array<ObjectsWritebackDataset>;
  entityMetadata: MarketplaceObjectTypeEntityMetadata | undefined;
  schemaMigrations: SchemaMigrationBlockData | undefined;
}
