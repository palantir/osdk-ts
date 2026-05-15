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

import { defineInterface } from "../defineInterface.js";
import type { InterfaceDefinedProperty } from "../interface/InterfacePropertyType.js";
import type { InterfaceType } from "../interface/InterfaceType.js";
import {
  extractPropertyType,
  type PropertyV2Config,
} from "./propertyMapping.js";

/**
 * Input configuration for defineInterfaceV2.
 *
 * Mirrors `ObjectV2Config` so an interface and an object look the same in
 * application code; all property kinds accepted by `defineObjectV2` are
 * accepted here, including arrays, structs, and markings.
 */
export interface InterfaceV2Config {
  apiName: string;
  displayName: string;
  pluralDisplayName: string;
  description?: string;
  properties: Record<string, PropertyV2Config>;
  extends?: InterfaceV2Def[];
}

/**
 * Branded intermediate type returned by `defineInterfaceV2`.
 *
 * `__v1Def` carries the registered v1 `InterfaceType` so `defineObjectV2`'s
 * `implements` plumbing can wire object → interface mappings without
 * re-resolving the interface from the ontology state.
 */
export type InterfaceV2Def<T extends InterfaceV2Config = InterfaceV2Config> =
  & T
  & {
    readonly __brand: "InterfaceV2Def";
    /** @internal v1 InterfaceType reference for finalize-time wiring */
    readonly __v1Def: InterfaceType;
  };

/**
 * Convert a `PropertyV2Config` into an `InterfaceDefinedProperty` for v1
 * `defineInterface`. Mirrors `convertPropertyToV1` in `defineObjectV2`,
 * with `required` derived from `nullable` (nullable → optional, default
 * is required).
 */
function convertPropertyToInterfaceProperty(
  config: PropertyV2Config,
): InterfaceDefinedProperty {
  if (typeof config === "string") {
    return { type: config, required: true };
  }
  const result: InterfaceDefinedProperty = {
    type: extractPropertyType(config),
    required: config.nullable !== true,
  };
  if (config.array !== undefined) {
    result.array = config.array;
  }
  if (config.description !== undefined) {
    result.description = config.description;
  }
  if (config.displayName !== undefined) {
    result.displayName = config.displayName;
  }
  if (config.nullable === false) {
    result.nullability = { noNulls: true, noEmptyCollections: false };
  }
  return result;
}

/**
 * Define an interface type that produces types compatible with the OSDK
 * client. Delegates to v1 `defineInterface` for state registration and
 * returns a branded def for use with `finalizeTypes`.
 */
export function defineInterfaceV2<const T extends InterfaceV2Config>(
  config: T,
): InterfaceV2Def<T> {
  const v1Properties: Record<string, InterfaceDefinedProperty> = {};
  for (const [key, prop] of Object.entries(config.properties)) {
    v1Properties[key] = convertPropertyToInterfaceProperty(prop);
  }

  const v1Registered = defineInterface({
    apiName: config.apiName,
    displayName: config.displayName,
    description: config.description,
    properties: v1Properties,
    extends: config.extends?.map(e => e.__v1Def),
  });

  return ({
    ...config,
    __brand: "InterfaceV2Def" as const,
    __v1Def: v1Registered,
  }) as InterfaceV2Def<T>;
}
