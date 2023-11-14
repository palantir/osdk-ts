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

import type { Page } from "../../..";
import type { GetObjectError, LoadObjectSetError } from "../../errors";
import type { Result } from "../../Result";
import type { OntologyObject } from "../OntologyObject";

export type FilteredPropertiesTerminalOperations<
  T extends OntologyObject,
  V extends Array<keyof T>,
> = {
  all(): Promise<
    Result<
      Array<Pick<T, V[number] | "__apiName" | "__primaryKey">>,
      LoadObjectSetError
    >
  >;
  page(options?: {
    pageSize?: number;
    pageToken?: string;
  }): Promise<
    Result<
      Page<Pick<T, V[number] | "__apiName" | "__primaryKey">>,
      LoadObjectSetError
    >
  >;
};

export type FilteredPropertiesTerminalOperationsWithGet<
  T extends OntologyObject,
  V extends Array<keyof T>,
> = FilteredPropertiesTerminalOperations<T, V> & {
  get(
    primaryKey: T["__primaryKey"],
  ): Promise<
    Result<Pick<T, V[number] | "__apiName" | "__primaryKey">, GetObjectError>
  >;
};
