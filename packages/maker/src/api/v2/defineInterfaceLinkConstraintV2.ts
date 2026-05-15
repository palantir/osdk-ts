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

import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import type { InterfaceV2Def } from "./defineInterfaceV2.js";

/**
 * Many-cardinality interface link constraint.
 */
export interface InterfaceLinkConstraintManyV2Config {
  apiName: string;
  from: InterfaceV2Def;
  toMany: InterfaceV2Def;
  displayName?: string;
  description?: string;
  required?: boolean;
}

/**
 * Single-cardinality interface link constraint.
 */
export interface InterfaceLinkConstraintOneV2Config {
  apiName: string;
  from: InterfaceV2Def;
  toOne: InterfaceV2Def;
  displayName?: string;
  description?: string;
  required?: boolean;
}

export type InterfaceLinkConstraintV2Config =
  | InterfaceLinkConstraintManyV2Config
  | InterfaceLinkConstraintOneV2Config;

/**
 * Define a link constraint on a v2 interface. Mutates the `from`
 * interface's underlying v1 `links` array. Delegates to v1
 * `defineInterfaceLinkConstraint` for validation and registration.
 */
export function defineInterfaceLinkConstraintV2(
  config: InterfaceLinkConstraintV2Config,
): void {
  if ("toMany" in config) {
    defineInterfaceLinkConstraint({
      apiName: config.apiName,
      from: config.from.__v1Def,
      toMany: config.toMany.__v1Def,
      displayName: config.displayName,
      description: config.description,
      required: config.required,
    });
  } else {
    defineInterfaceLinkConstraint({
      apiName: config.apiName,
      from: config.from.__v1Def,
      toOne: config.toOne.__v1Def,
      displayName: config.displayName,
      description: config.description,
      required: config.required,
    });
  }
}
