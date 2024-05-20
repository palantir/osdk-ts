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
  GetLinkedObjectError,
  ListLinkedObjectsError,
} from "../errors/index.js";
import type { Page } from "../Page.js";
import type { Result } from "../Result.js";
import type { OntologyObject } from "./OntologyObject.js";

export interface SingleLink<T extends OntologyObject = OntologyObject> {
  /**
   * Loads the linked object
   * @deprecated use fetchOneWithErrors instead
   */
  get(): Promise<Result<T, GetLinkedObjectError>>;
  /**
   * Loads the linked object
   */
  fetchOneWithErrors(): Promise<Result<T, GetLinkedObjectError>>;
  /**
   * Loads the linked object, without a result wrapper
   */
  fetchOne(): Promise<T>;
}

export interface MultiLink<T extends OntologyObject = OntologyObject> {
  /**
   * Loads the linked object with the given primary key
   *
   * @param primaryKey
   * @deprecated use fetchOneWithErrors instead
   */
  get(primaryKey: T["__primaryKey"]): Promise<Result<T, GetLinkedObjectError>>;
  /**
   * Loads the linked object with the given primary key
   *
   * @param primaryKey
   */
  fetchOneWithErrors(
    primaryKey: T["__primaryKey"],
  ): Promise<Result<T, GetLinkedObjectError>>;
  /**
   * Loads the linked object with the given primary key, without a result wrapper
   *
   * @param primaryKey
   */
  fetchOne(
    primaryKey: T["__primaryKey"],
  ): Promise<T>;
  /**
   * Gets all the linked objects
   * @deprecated use asyncIter instead
   */
  all(): Promise<Result<T[], ListLinkedObjectsError>>;

  /**
   * Gets all the linked objects
   */
  asyncIter(): AsyncIterableIterator<T>;
  /**
   * Pages through the linked objects
   * @deprecated use fetchPageWithErrors instead
   */
  page(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<Result<Page<T>, ListLinkedObjectsError>>;

  /**
   * Pages through linked objects, without a result wrapper
   */
  fetchPage(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<Page<T>>;

  /**
   * Pages through the linked objects
   */
  fetchPageWithErrors(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<Result<Page<T>, ListLinkedObjectsError>>;
}
