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
  ActionDefinition,
} from "@osdk/client";

/**
 * Declare which resources a function needs access to.
 *
 * For `objects`, `interfaces`, `actions` and `queries`, you may provide either:
 * - A string alias from resources.json (e.g. `"myObject"`)
 * - An OSDK type reference imported from your generated ontology SDK (e.g. `Employee`)
 *
 * For `links`, `datasets`, `streams`, `mediasets`, `models` and `agents`, only string aliases are supported.
 */
export interface ScopeResources {
  queries?: Array<string | QueryDefinition>;
  actions?: Array<string | ActionDefinition>;
  objects?: Array<string | ObjectTypeDefinition>;
  interfaces?: Array<string | InterfaceDefinition>;
  links?: string[];
  models?: string[];
  datasets?: string[];
  mediasets?: string[];
  streams?: string[];
  /**
   * @experimental
   */
  agents?: Array<string>;
}

/**
 * Helpers for declaring resource scope.
 *
 * Or use these helpers:
 *   `resources: ScopeResources.defaultResources`  — use the repo's default scope from resources.json
 */
export namespace ScopeResources {
  /**
   * Sentinel value: discovery populates scope from `defaultResources` declared in resources.json.
   */
  export const defaultResources: unique symbol = Symbol(
    "ScopeResources.defaultResources",
  );
}

/**
 * Declare the maximum authorization using the deprecated `read` field.
 *
 * @deprecated Use `ScopeAuthorization` with `max` instead.
 */
export interface ScopeReadAuthorization {
  /** @deprecated Use `max` instead. */
  read: string[] | string[][];
}

/**
 * Declare read and write marking requirements for callers of this function.
 *
 * @deprecated Write authorization is not supported in function scopes.
 */
export interface ScopeReadWriteAuthorization extends ScopeReadAuthorization {
  write: string[];
}

/**
 * Declare minimum and maximum authorization using marking aliases from resources.json.
 * A flat list requires every marking. A list of lists requires at least one marking
 * from each inner list (conjunctive normal form).
 * Omitting a bound imposes no constraint for that bound.
 */
export interface ScopeAuthorization {
  /** The minimum authorization required to execute the function. */
  min?: string[] | string[][];
  /** The maximum authorization the function may execute with. */
  max?: string[] | string[][];
  /** Use `max` instead of combining `read` with `min` or `max`. */
  read?: never;
  /** Write authorization is not supported in function scopes. */
  write?: never;
}

/**
 * Helpers for declaring authorization scope.
 *
 * Or use these helpers:
 *   `authorization: ScopeAuthorization.defaultRead`  — use the repo's default read authorization from resources.json
 */
export namespace ScopeAuthorization {
  /**
   * Sentinel value: the generated function inherits authorization from its caller.
   * @deprecated Omit `authorization` to impose no authorization constraint.
   */
  export const inherit: unique symbol = Symbol("ScopeAuthorization.inherit");

  /**
   * Sentinel value: discovery uses `defaultAuthorization.read` declared in resources.json.
   * Default authorization is only applied when explicitly requested with this sentinel.
   */
  export const defaultRead: unique symbol = Symbol(
    "ScopeAuthorization.defaultRead",
  );
}

/**
 * The scope declaration for a function.
 * Accepts plain object literals or the sentinels from `ScopeResources` and `ScopeAuthorization`.
 */
export interface Scope {
  resources: ScopeResources | typeof ScopeResources.defaultResources;
  /** Omitting authorization or providing an empty object imposes no authorization constraint. */
  authorization?:
    | ScopeAuthorization
    | (ScopeReadAuthorization & {
        min?: never;
        max?: never;
        write?: never;
      })
    | typeof ScopeAuthorization.inherit
    | typeof ScopeAuthorization.defaultRead;
}
