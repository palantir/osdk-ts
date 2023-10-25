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

import type { LocalDate } from "../ontology-runtime/baseTypes";

export interface OntologyDefinition<K extends string> {
  metadata: OntologyMetadata;
  objects: {
    [KK in K]: ObjectDefinition<KK, K>;
  };
}

export interface OntologyMetadata {
}

export interface ObjectDefinition<N extends K, K extends string> {
  apiName: N;
  properties: Record<string, PropertyDefinition>;
}

export interface PropertyDefinition {
  isPrimaryKey: boolean;
  type: PropertyType;
}

interface PropertyType {
  string: string;
  datetime: LocalDate;
  double: number;
  boolean: boolean;
}
