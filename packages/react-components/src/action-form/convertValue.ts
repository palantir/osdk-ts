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

import type { FieldComponent } from "./FormFieldApi.js";

/**
 * Converts a raw form value to the expected display type for a given field component.
 *
 * Overloads ensure TypeScript infers the exact return type — no `typeof`
 * narrowing needed after calling.
 */
export function convertToFieldValue(
  value: unknown,
  fieldComponent: "RADIO_BUTTONS",
): boolean;
export function convertToFieldValue(
  value: unknown,
  fieldComponent: "NUMBER_INPUT",
): number | null;
export function convertToFieldValue(
  value: unknown,
  fieldComponent: "DROPDOWN",
): string | undefined;
export function convertToFieldValue(
  value: unknown,
  fieldComponent: "TEXT_INPUT" | "TEXT_AREA" | "DATETIME_PICKER",
): string;
export function convertToFieldValue(
  value: unknown,
  fieldComponent: FieldComponent,
): string;
export function convertToFieldValue(
  value: unknown,
  fieldComponent: FieldComponent,
): string | number | boolean | null | undefined {
  switch (fieldComponent) {
    case "RADIO_BUTTONS":
      return value === true;
    case "DROPDOWN":
      return typeof value === "string" ? value : undefined;
    case "TEXT_INPUT":
    case "TEXT_AREA":
    case "DATETIME_PICKER":
      return typeof value === "string" ? value : "";
    case "NUMBER_INPUT":
      return typeof value === "number" ? value : null;
    case "OBJECT_SET":
    case "FILE_PICKER":
    case "CUSTOM":
      return typeof value === "string" ? value : "";
  }
}

/**
 * All OSDK action parameter data types used by convertToActionValue.
 */
type ActionDataType =
  | "boolean"
  | "string"
  | "integer"
  | "long"
  | "double"
  | "float"
  | "short"
  | "byte"
  | "decimal"
  | "datetime"
  | "timestamp"
  | "attachment"
  | "marking"
  | "mediaReference"
  | "objectType"
  | "geoshape"
  | "geohash"
  | "object"
  | "objectSet"
  | "interface"
  | "struct"
  | "textarea"
  | "select";

/**
 * Converts a form field input value back to what `applyAction` expects.
 *
 * Inverse of `convertToFieldValue` — used at change time so state always
 * contains applyAction-compatible values.
 */
export function convertToActionValue(
  value: unknown,
  fieldType: "boolean",
): boolean | undefined;
export function convertToActionValue(
  value: unknown,
  fieldType:
    | "integer"
    | "double"
    | "float"
    | "short"
    | "byte",
): number | undefined;
export function convertToActionValue(
  value: unknown,
  fieldType: "long" | "decimal",
): number | string | undefined;
export function convertToActionValue(
  value: unknown,
  fieldType:
    | "string"
    | "datetime"
    | "timestamp"
    | "marking"
    | "objectType"
    | "textarea"
    | "select",
): string | undefined;
export function convertToActionValue(
  value: unknown,
  fieldType: ActionDataType,
): unknown;
export function convertToActionValue(
  value: unknown,
  fieldType: ActionDataType,
): unknown {
  switch (fieldType) {
    case "boolean":
      return typeof value === "boolean" ? value : undefined;
    case "integer":
    case "double":
    case "float":
    case "short":
    case "byte":
      return typeof value === "number" ? value : undefined;
    case "long":
    case "decimal":
      return typeof value === "number" || typeof value === "string"
        ? value
        : undefined;
    case "string":
    case "datetime":
    case "timestamp":
    case "marking":
    case "objectType":
    case "textarea":
    case "select":
      return typeof value === "string" ? value : undefined;
    case "attachment":
    case "mediaReference":
    case "geohash":
    case "geoshape":
    case "object":
    case "objectSet":
    case "interface":
    case "struct":
      return value;
  }
}
