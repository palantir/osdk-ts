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
import type {
  PropertyTypeType,
  PropertyTypeTypePrimitive,
} from "../properties/PropertyTypeType.js";

/**
 * Simplified property config for V2 APIs.
 * Accepts either a type string shorthand or an object with options.
 */
export type PropertyV2Config =
  | PropertyTypeTypePrimitive
  | "geopoint"
  | "geoshape"
  | "mediaReference"
  | "geotimeSeries"
  | {
    type: PropertyTypeType;
    nullable?: boolean;
    array?: boolean;
    description?: string;
    displayName?: string;
  };

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
    if (type === "date") return "datetime";
    if (type === "geotimeSeries") return "geotimeSeriesReference";
    return type;
  }
  if (type.type === "marking") return "marking";
  if (type.type === "string") return "string";
  if (type.type === "decimal") return "decimal";
  if (type.type === "struct") return "string"; // structs need special handling
  return (type as { type: string }).type;
}

/**
 * Extract the PropertyTypeType from a PropertyV2Config.
 */
export function extractPropertyType(
  config: PropertyV2Config,
): PropertyTypeType {
  if (typeof config === "string") return config;
  return config.type;
}
