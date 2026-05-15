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

import type { Visibility } from "@osdk/client.unstable";
import { defineObject } from "../defineObject.js";
import type { EditsHistoryConfig } from "../object/EditsHistoryConfig.js";
import type { InterfaceImplementation } from "../object/InterfaceImplementation.js";
import type { ObjectPropertyTypeUserDefinition } from "../object/ObjectPropertyTypeUserDefinition.js";
import type { ObjectTypeDatasourceDefinition } from "../object/ObjectTypeDatasourceDefinition.js";
import type { ObjectTypeDefinition as MakerObjectTypeDefinition } from "../object/ObjectTypeDefinition.js";
import type { ObjectTypeStatus } from "../object/ObjectTypeStatus.js";
import type { InterfaceV2Def } from "./defineInterfaceV2.js";
import {
  extractPropertyType,
  type PropertyV2Config,
} from "./propertyMapping.js";

/**
 * Entry in `ObjectV2Config.implements`. Either an `InterfaceV2Def`
 * (auto-mapped by property name) or `{ interface, propertyMapping }`
 * where `propertyMapping` maps interface property apiNames to object
 * property apiNames when they don't match by name.
 */
export type ObjectV2ImplementsEntry =
  | InterfaceV2Def
  | {
    interface: InterfaceV2Def;
    propertyMapping: Record<string, string>;
  };

/**
 * Object-level dataset datasource. Heavier datasource variants (derived,
 * direct, stream, restrictedView) and granular security policies stay
 * deferred — this v2 surface only models the basic dataset case.
 */
export interface ObjectV2DatasetDatasource {
  type: "dataset";
}

/**
 * Input configuration for defineObjectV2.
 */
export interface ObjectV2Config {
  apiName: string;
  primaryKeyPropertyApiName: string;
  displayName: string;
  pluralDisplayName: string;
  titlePropertyApiName: string;
  description?: string;
  properties: Record<string, PropertyV2Config>;
  visibility?: Visibility;
  status?: ObjectTypeStatus;
  /**
   * Interfaces this object implements. Pass an `InterfaceV2Def` for
   * auto-mapping by property name, or `{ interface, propertyMapping }`
   * to explicitly map interface properties to differently-named object
   * properties.
   */
  implements?: ObjectV2ImplementsEntry[];
  /** Configure the per-object edits-history retention. */
  editsHistoryConfig?: EditsHistoryConfig;
  /**
   * Object-level dataset datasource. Only the `dataset` variant is
   * exposed today; advanced variants and security policies are deferred.
   */
  datasource?: ObjectV2DatasetDatasource;
}

/**
 * Branded intermediate type returned by defineObjectV2.
 * Carries the full config as a type parameter for later use by finalizeTypes.
 * Also stores the V1 definition reference for use by defineLinkV2.
 */
export type ObjectV2Def<T extends ObjectV2Config = ObjectV2Config> = T & {
  readonly __brand: "ObjectV2Def";
  /** @internal V1 ObjectTypeDefinition with namespaced apiName, for link registration */
  readonly __v1Def: MakerObjectTypeDefinition;
};

/**
 * Walk an InterfaceV2Def's `extends` chain and collect every property
 * apiName, including from ancestor interfaces. `visited` tracks
 * already-traversed interface apiNames so a cycle via a mutated
 * `extends` array cannot infinite-loop.
 */
function collectInterfaceProperties(
  iface: InterfaceV2Def,
  props: Set<string> = new Set(),
  visited: Set<string> = new Set(),
): Set<string> {
  if (visited.has(iface.apiName)) {
    return props;
  }
  visited.add(iface.apiName);
  for (const key of Object.keys(iface.properties)) {
    props.add(key);
  }
  for (const parent of iface.extends ?? []) {
    collectInterfaceProperties(parent, props, visited);
  }
  return props;
}

function convertPropertyToV1(
  config: PropertyV2Config,
): ObjectPropertyTypeUserDefinition {
  if (typeof config === "string") {
    return { type: config };
  }
  const result: ObjectPropertyTypeUserDefinition = {
    type: extractPropertyType(config),
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
 * Define an object type that produces types compatible with the OSDK client.
 *
 * Delegates to the existing defineObject() for validation and maker state
 * registration, then returns a branded config for use with finalizeTypes().
 */
export function defineObjectV2<const T extends ObjectV2Config>(
  config: T,
): ObjectV2Def<T> {
  const v1Properties: Record<string, ObjectPropertyTypeUserDefinition> = {};
  if (config.properties) {
    for (const [key, prop] of Object.entries(config.properties)) {
      v1Properties[key] = convertPropertyToV1(prop);
    }
  }

  const implementsInterfaces: InterfaceImplementation[] | undefined = config
      .implements?.length
    ? config.implements.map(entry => {
      if ("__brand" in entry) {
        // Auto-mapping by property name — walk the extends chain so
        // inherited properties also get mapped.
        const allInterfaceProps = collectInterfaceProperties(entry);
        return {
          implements: entry.__v1Def,
          propertyMapping: Array.from(allInterfaceProps)
            .filter(key => key in (config.properties ?? {}))
            .map(key => ({ interfaceProperty: key, mapsTo: key })),
        };
      }
      // Explicit propertyMapping
      return {
        implements: entry.interface.__v1Def,
        propertyMapping: Object.entries(entry.propertyMapping).map((
          [interfaceProperty, mapsTo],
        ) => ({ interfaceProperty, mapsTo })),
      };
    })
    : undefined;

  const datasources: ObjectTypeDatasourceDefinition[] | undefined =
    config.datasource !== undefined
      ? [{ type: config.datasource.type }]
      : undefined;

  const v1Config: MakerObjectTypeDefinition = {
    apiName: config.apiName,
    primaryKeyPropertyApiName: config.primaryKeyPropertyApiName,
    displayName: config.displayName,
    pluralDisplayName: config.pluralDisplayName,
    titlePropertyApiName: config.titlePropertyApiName,
    description: config.description,
    properties: v1Properties,
    visibility: config.visibility,
    status: config.status,
    implementsInterfaces,
    ...(config.editsHistoryConfig !== undefined
      && { editsHistoryConfig: config.editsHistoryConfig }),
    ...(datasources !== undefined && { datasources }),
  };

  const v1Registered = defineObject(v1Config);

  return ({
    ...config,
    __brand: "ObjectV2Def" as const,
    __v1Def: v1Registered,
  }) as ObjectV2Def<T>;
}
