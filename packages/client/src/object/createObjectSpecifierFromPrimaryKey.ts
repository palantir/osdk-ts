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

import type {
  ObjectSpecifier,
  ObjectTypeDefinition,
  PrimaryKeyType,
} from "@osdk/api";

/**
 * An ObjectSpecifier is a string that uniquely identifies an object in the system,
 * even when loading an interface object where primary key uniqueness is not guaranteed.
 *
 * @param objectDef - An Object Type Definition
 * @param primaryKey - The value you want to use as the primary key
 * @returns An Object Specifier
 */
export function createObjectSpecifierFromPrimaryKey<
  Q extends ObjectTypeDefinition,
>(objectDef: Q, primaryKey: PrimaryKeyType<Q>): ObjectSpecifier<Q> {
  return `${objectDef.apiName}:${primaryKey}` as ObjectSpecifier<Q>;
}
