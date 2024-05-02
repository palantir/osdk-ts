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
  FilteredPropertiesTerminalOperationsWithGet,
  OntologyObject,
} from "../baseTypes";
import type { GetObjectError } from "../errors";
import type { Result } from "../Result";
import type { ObjectSet } from "./objectSet";
import type { SelectableProperties } from "./utils/OmitProperties";
import type { Properties } from "./utils/Properties";

export type BaseObjectSet<O extends OntologyObject> =
  & BaseObjectSetOperations<O>
  & ObjectSet<O>;

export type BaseObjectSetOperations<O extends OntologyObject> = {
  apiName: O["$apiName"];

  description: string;

  properties: Properties<O>;

  /** @deprecated use fetchOneWithErrors instead */
  get(primaryKey: O["$primaryKey"]): Promise<Result<O, GetObjectError>>;

  fetchOneWithErrors(
    primaryKey: O["$primaryKey"],
  ): Promise<Result<O, GetObjectError>>;

  fetchOne(
    primaryKey: O["$primaryKey"],
  ): Promise<O>;

  select<T extends keyof SelectableProperties<O>>(
    properties: readonly T[],
  ): FilteredPropertiesTerminalOperationsWithGet<O, T[]>;
};
