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
  ObjectInfoFrom,
  ObjectTypesFrom,
  OntologyDefinition,
  ValidPropertyTypes,
} from "@osdk/api";
import type { OsdkLegacyObjectFrom } from "../../client/OsdkObject";
import type { ObjectIterator } from "../iterator";
import type {
  GetLinkedObjectError,
  ListLinkedObjectsError,
  Result,
} from "../ontologyProvider";
import type { Page } from "../paging";
import type { OntologyObject } from "./OntologyObject";

export interface SingleLink<T extends OntologyObject = OntologyObject> {
  /**
   * Loads the linked object
   */
  get(): Promise<Result<T, GetLinkedObjectError>>;
}

export interface MultiLink<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> {
  /**
   * Loads the linked object with the given primary key
   *
   * @param primaryKey
   */
  get(
    primaryKey: ValidPropertyTypes[ObjectInfoFrom<O, K>["primaryKeyType"]],
  ): Promise<Result<OsdkLegacyObjectFrom<O, K>, GetLinkedObjectError>>;
  /**
   * Gets all the linked objects
   */
  all(): Promise<
    Result<OsdkLegacyObjectFrom<O, K>[], ListLinkedObjectsError>
  >;
  /**
   * Pages through the linked objects
   */
  page(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<
    Result<Page<OsdkLegacyObjectFrom<O, K>>, ListLinkedObjectsError>
  >;
  /**
   * Iterates through the linked objects
   *
   * @param options
   */
  iterate(options?: {
    pageSize?: number;
  }): ObjectIterator<
    Result<OsdkLegacyObjectFrom<O, K>, ListLinkedObjectsError>
  >;
}
