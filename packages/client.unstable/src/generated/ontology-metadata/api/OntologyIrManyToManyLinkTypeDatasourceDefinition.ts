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

import type { OntologyIrManyToManyLinkTypeDatasetDatasource } from "./OntologyIrManyToManyLinkTypeDatasetDatasource.js";
import type { OntologyIrManyToManyLinkTypeStreamDatasource } from "./OntologyIrManyToManyLinkTypeStreamDatasource.js";
export interface OntologyIrManyToManyLinkTypeDatasourceDefinition_dataset {
  type: "dataset";
  dataset: OntologyIrManyToManyLinkTypeDatasetDatasource;
}

export interface OntologyIrManyToManyLinkTypeDatasourceDefinition_stream {
  type: "stream";
  stream: OntologyIrManyToManyLinkTypeStreamDatasource;
}
/**
 * Wrapper type for all supported many to many link type datasource types.
 */
export type OntologyIrManyToManyLinkTypeDatasourceDefinition =
  | OntologyIrManyToManyLinkTypeDatasourceDefinition_dataset
  | OntologyIrManyToManyLinkTypeDatasourceDefinition_stream;
