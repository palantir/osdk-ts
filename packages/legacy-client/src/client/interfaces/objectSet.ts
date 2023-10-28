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

import type {
  ListObjectsError,
  OntologyObject,
  Page,
  Result,
} from "../../ontology-runtime";
import type { ObjectTypeFilterFunction } from "./filters";
import type { SearchAround } from "./searchAround";

export type ObjectSet<O extends OntologyObject> = {
  where(
    predicate: ObjectTypeFilterFunction<O>,
  ): ObjectSet<O>;

  /**
   * Get a page of objects of this type.
   */
  page(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<Result<Page<O>, ListObjectsError>>;
} & SearchAround<O>;
