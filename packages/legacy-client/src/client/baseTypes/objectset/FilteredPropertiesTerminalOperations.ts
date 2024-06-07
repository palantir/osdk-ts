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

import type { Page } from "../../../index.js";
import type { GetObjectError, LoadObjectSetError } from "../../errors/index.js";
import type { Result } from "../../Result.js";
import type { OntologyObject } from "../OntologyObject.js";

export type FilteredPropertiesTerminalOperations<
  T extends OntologyObject,
  V extends Array<keyof T>,
> = {
  /**
   * @deprecated use asyncIter instead
   */
  all(): Promise<
    Result<
      Array<
        Pick<
          T,
          V[number] | "$apiName" | "$primaryKey" | "__apiName" | "__primaryKey"
        >
      >,
      LoadObjectSetError
    >
  >;
  /**
   * @deprecated use fetchPageWithErrors instead
   */
  page(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<
    Result<
      Page<
        Pick<
          T,
          V[number] | "$apiName" | "$primaryKey" | "__apiName" | "__primaryKey"
        >
      >,
      LoadObjectSetError
    >
  >;

  asyncIter(): AsyncIterableIterator<
    Pick<
      T,
      V[number] | "$apiName" | "$primaryKey" | "__apiName" | "__primaryKey"
    >
  >;

  fetchPage(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<
    Page<
      Pick<
        T,
        V[number] | "$apiName" | "$primaryKey" | "__apiName" | "__primaryKey"
      >
    >
  >;
  fetchPageWithErrors(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<
    Result<
      Page<
        Pick<
          T,
          V[number] | "__apiName" | "__primaryKey" | "$apiName" | "$primaryKey"
        >
      >,
      LoadObjectSetError
    >
  >;
};

export type FilteredPropertiesTerminalOperationsWithGet<
  T extends OntologyObject,
  V extends Array<keyof T>,
> = FilteredPropertiesTerminalOperations<T, V> & {
  /** @deprecated use fetchOneWithErrors */
  get(
    primaryKey: T["$primaryKey"],
  ): Promise<
    Result<
      Pick<
        T,
        V[number] | "$apiName" | "$primaryKey" | "__apiName" | "__primaryKey"
      >,
      GetObjectError
    >
  >;
  fetchOneWithErrors(
    primaryKey: T["$primaryKey"],
  ): Promise<
    Result<
      Pick<
        T,
        V[number] | "$apiName" | "$primaryKey" | "__apiName" | "__primaryKey"
      >,
      GetObjectError
    >
  >;
  fetchOne(
    primaryKey: T["$primaryKey"],
  ): Promise<
    Pick<
      T,
      V[number] | "$apiName" | "$primaryKey" | "__apiName" | "__primaryKey"
    >
  >;
};
