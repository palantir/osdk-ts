/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: UNSAFE
 */
export interface ApiDefinition {
  version: IrVersion;
  rid: ApiDefinitionRid;
  name: ApiDefinitionName;
  deprecated: ApiDefinitionDeprecated;
  ir: Array<any>;
}

/**
 * Log Safety: SAFE
 */
export type ApiDefinitionDeprecated = boolean;

/**
 * Log Safety: UNSAFE
 */
export type ApiDefinitionName = LooselyBrandedString<"ApiDefinitionName">;

/**
 * Log Safety: SAFE
 */
export type ApiDefinitionRid = LooselyBrandedString<"ApiDefinitionRid">;

/**
 * Log Safety: SAFE
 */
export type IrVersion = "v1" | "v2";
