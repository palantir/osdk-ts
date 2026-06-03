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

import type { InterfaceDefinition, ObjectTypeDefinition } from "@osdk/client";

/**
 * Declare which resources a function needs access to.
 *
 * For `objects` and `interfaces`, you may provide either:
 * - A string alias from resources.json (e.g. `"myObject"`)
 * - An OSDK type reference imported from your generated ontology SDK (e.g. `Employee`)
 *
 * For `links`, `queries`, and `models`, only string aliases are supported.
 */
export interface ScopeResources {
  objects?: Array<string | ObjectTypeDefinition>;
  interfaces?: Array<string | InterfaceDefinition>;
  links?: string[];
  queries?: string[];
  models?: string[];
}

/**
 * Helpers for declaring resource scope.
 *
 * Or use these helpers:
 *   `resources: ScopeResources.defaultScopeResources`  — use the repo's default scope from resources.json
 *   `resources: ScopeResources.of({ objects: ["myAlias"] })` — equivalent to a plain object literal
 */
export namespace ScopeResources {
  /**
   * Sentinel value: discovery populates scope from `defaultResources` declared in functions.json.
   */
  export const defaultScopeResources: unique symbol = Symbol(
    "ScopeResources.defaultScopeResources",
  );

  export function of(opts: ScopeResources = {}): ScopeResources {
    return opts;
  }
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
 *   `authorization: ScopeAuthorization.of({ read: ["marking1"] })` — equivalent to a plain object literal
 */
export namespace ScopeAuthorization {
  /**
   * Sentinel value: discovery uses `defaultAuthorization.read` declared in functions.json.
   */
  export const defaultRead: unique symbol = Symbol(
    "ScopeAuthorization.defaultRead",
  );

  export function of(
    opts: ScopeReadWriteAuthorization,
  ): ScopeReadWriteAuthorization;
  export function of(opts: ScopeReadAuthorization): ScopeReadAuthorization {
    return opts;
  }
}

/**
 * The scope declaration for a function.
 * Accepts plain object literals or the sentinel/factory helpers from `ScopeResources` and `ReadOnlyAuthorization`.
 */
export interface Scope {
  resources: ScopeResources | typeof ScopeResources.defaultScopeResources;
  authorization:
    | ScopeReadAuthorization
    | ScopeReadWriteAuthorization
    | typeof ScopeAuthorization.defaultRead;
}
