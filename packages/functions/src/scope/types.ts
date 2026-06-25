/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  InterfaceDefinition,
  ObjectTypeDefinition,
  QueryDefinition,
} from "@osdk/client";

/**
 * Declare which resources a function needs access to.
 *
 * For `objects`, `interfaces` and `queries`, you may provide either:
 * - A string alias from resources.json (e.g. `"myObject"`)
 * - An OSDK type reference imported from your generated ontology SDK (e.g. `Employee`)
 *
 * For `links`, `datasets`, `mediaSets` and `models`, only string aliases are supported.
 */
export interface ScopeResources {
  queries?: Array<string | QueryDefinition>;
  objects?: Array<string | ObjectTypeDefinition>;
  interfaces?: Array<string | InterfaceDefinition>;
  links?: string[];
  models?: string[];
  datasets?: string[];
  mediaSets?: string[];
  streams?: string[];
}

/**
 * Helpers for declaring resource scope.
 *
 * Or use these helpers:
 *   `resources: ScopeResources.defaultScopeResources`  — use the repo's default scope from resources.json
 */
export namespace ScopeResources {
  /**
   * Sentinel value: discovery populates scope from `defaultResources` declared in functions.json.
   */
  export const defaultResources: unique symbol = Symbol(
    "ScopeResources.defaultResources",
  );
}

/**
 * Declare read-only marking requirements for callers of this function.
 */
export interface ScopeReadAuthorization {
  read: string[];
}

/**
 * Declare read and write marking requirements for callers of this function.
 */
export interface ScopeReadWriteAuthorization extends ScopeReadAuthorization {
  write: string[];
}

/**
 * Helpers for declaring authorization scope.
 *
 * Or use these helpers:
 *   `authorization: ScopeAuthorization.defaultRead`  — use the repo's default read authorization from functions.json
 */
export namespace ScopeAuthorization {
  /**
   * Sentinel value: discovery uses `defaultAuthorization.read` declared in functions.json.
   */
  export const defaultRead: unique symbol = Symbol(
    "ScopeAuthorization.defaultRead",
  );
}

/**
 * The scope declaration for a function.
 * Accepts plain object literals or the sentinel/factory helpers from `ScopeResources` and `ReadOnlyAuthorization`.
 */
export interface Scope {
  resources: ScopeResources | typeof ScopeResources.defaultResources;
  authorization:
    | ScopeReadAuthorization
    | ScopeReadWriteAuthorization
    | typeof ScopeAuthorization.defaultRead;
}
