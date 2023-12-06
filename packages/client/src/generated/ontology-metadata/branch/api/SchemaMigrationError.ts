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

import type { MissingDatasourceMigrationError } from "./MissingDatasourceMigrationError.js";
import type { MissingDeletedPropertyTypeSchemaMigrationError } from "./MissingDeletedPropertyTypeSchemaMigrationError.js";
import type { MissingPropertyDataTypeSchemaMigrationError } from "./MissingPropertyDataTypeSchemaMigrationError.js";
export interface SchemaMigrationError_propertyDataType {
  type: "propertyDataType";
  propertyDataType: MissingPropertyDataTypeSchemaMigrationError;
}

export interface SchemaMigrationError_deletedPropertyType {
  type: "deletedPropertyType";
  deletedPropertyType: MissingDeletedPropertyTypeSchemaMigrationError;
}

export interface SchemaMigrationError_datasource {
  type: "datasource";
  datasource: MissingDatasourceMigrationError;
}
export type SchemaMigrationError =
  | SchemaMigrationError_propertyDataType
  | SchemaMigrationError_deletedPropertyType
  | SchemaMigrationError_datasource;
