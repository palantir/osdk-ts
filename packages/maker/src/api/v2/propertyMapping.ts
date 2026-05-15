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

import type { BaseWirePropertyTypes, WirePropertyTypes } from "@osdk/api";
import type { Analyzer } from "@osdk/client.unstable";
import type {
  PropertyTypeType,
  PropertyTypeTypePrimitive,
} from "../properties/PropertyTypeType.js";

/**
 * Fields shared by every object-form variant of PropertyV2Config.
 */
interface PropertyV2Common {
  nullable?: boolean;
  array?: boolean;
  description?: string;
  displayName?: string;
}

/**
 * Flat-form configuration for a string property, carrying v1's
 * isLongText/analyzer/search-flag options without nesting.
 */
export interface PropertyV2StringConfig extends PropertyV2Common {
  type: "string";
  isLongText?: boolean;
  supportsEfficientLeadingWildcard?: boolean;
  supportsExactMatching?: boolean;
  supportsFullTextRegex?: boolean;
  enableAsciiFolding?: boolean;
  analyzerOverride?: Analyzer;
}

/**
 * Flat-form configuration for a decimal property.
 */
export interface PropertyV2DecimalConfig extends PropertyV2Common {
  type: "decimal";
  precision?: number;
  scale?: number;
}

/**
 * Flat-form configuration for a marking property. `markingType` and
 * `markingInputGroupName` are required by v1.
 */
export interface PropertyV2MarkingConfig extends PropertyV2Common {
  type: "marking";
  markingType: "MANDATORY" | "CBAC";
  markingInputGroupName: string;
}

/**
 * Simplified property config for V2 APIs. Accepts:
 *  - a primitive/exotic string shorthand (`"string"`, `"integer"`, …),
 *  - a flat object form for string/decimal/marking that exposes v1's
 *    per-type options at the top level (e.g. `{ type: "string", isLongText }`),
 *  - the generic nested form `{ type: PropertyTypeType, … }` for struct
 *    properties and back-compat with the v1 `PropertyTypeType` object shape.
 */
export type PropertyV2Config =
  | PropertyTypeTypePrimitive
  | "geopoint"
  | "geoshape"
  | "mediaReference"
  | "geotimeSeries"
  | PropertyV2StringConfig
  | PropertyV2DecimalConfig
  | PropertyV2MarkingConfig
  | (PropertyV2Common & {
    type: PropertyTypeType;
  });

/**
 * Type-level mapping from maker PropertyTypeType to client WirePropertyTypes.
 */
export type MakerToWire<T> = T extends "date" ? "datetime"
  : T extends "geotimeSeries" ? "geotimeSeriesReference"
  : T extends { type: "marking" } ? "marking"
  : T extends { type: "string" } ? "string"
  : T extends { type: "decimal" } ? "decimal"
  : T extends { type: infer U extends string } ? MakerToWire<U>
  : T extends BaseWirePropertyTypes ? T
  : WirePropertyTypes;

/**
 * Runtime version of MakerToWire — maps maker property type strings to client wire types.
 */
export function makerToWire(type: PropertyTypeType): string {
  if (typeof type === "string") {
    if (type === "date") {
      return "datetime";
    }
    if (type === "geotimeSeries") {
      return "geotimeSeriesReference";
    }
    return type;
  }
  if (type.type === "struct") {
    return "string";
  }
  return type.type;
}

const STRING_OPTION_KEYS = [
  "isLongText",
  "supportsEfficientLeadingWildcard",
  "supportsExactMatching",
  "supportsFullTextRegex",
  "enableAsciiFolding",
  "analyzerOverride",
] as const satisfies ReadonlyArray<keyof PropertyV2StringConfig>;

const DECIMAL_OPTION_KEYS = [
  "precision",
  "scale",
] as const satisfies ReadonlyArray<keyof PropertyV2DecimalConfig>;

/** Copy `keys` from `source` into a fresh object when defined. */
function pickDefined<T extends object, K extends keyof T>(
  source: T,
  keys: ReadonlyArray<K>,
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}

/**
 * Reconstruct the v1 PropertyTypeType from a PropertyV2Config. Flat-form
 * variants (`{ type: "string", isLongText: true }`) are folded back into the
 * nested object shape v1 expects; the nested form passes through unchanged.
 */
export function extractPropertyType(
  config: PropertyV2Config,
): PropertyTypeType {
  if (typeof config === "string") {
    return config;
  }
  if (typeof config.type !== "string") {
    return config.type;
  }
  if (config.type === "string") {
    const opts = pickDefined(
      config as PropertyV2StringConfig,
      STRING_OPTION_KEYS,
    );
    return Object.keys(opts).length === 0
      ? "string"
      : { type: "string", ...opts };
  }
  if (config.type === "decimal") {
    const opts = pickDefined(
      config as PropertyV2DecimalConfig,
      DECIMAL_OPTION_KEYS,
    );
    return Object.keys(opts).length === 0
      ? "decimal"
      : { type: "decimal", ...opts };
  }
  if (config.type === "marking") {
    const marking = config as PropertyV2MarkingConfig;
    return {
      type: "marking",
      markingType: marking.markingType,
      markingInputGroupName: marking.markingInputGroupName,
    };
  }
  return config.type;
}
