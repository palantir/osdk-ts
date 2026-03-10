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

import type { FormFieldType } from "./BaseActionForm.js";

/**
 * Converts a raw form value to the expected display type for a given field type.
 *
 * Overloads ensure TypeScript infers the exact return type — no `typeof`
 * narrowing needed after calling.
 */
export function convertToFieldValue(
  value: unknown,
  fieldType: "boolean",
): boolean;
export function convertToFieldValue(
  value: unknown,
  fieldType:
    | "integer"
    | "long"
    | "double"
    | "float"
    | "short"
    | "byte"
    | "decimal",
): number | null;
export function convertToFieldValue(
  value: unknown,
  fieldType: "select",
): string | undefined;
export function convertToFieldValue(
  value: unknown,
  fieldType: "string" | "datetime" | "timestamp" | "textarea",
): string;
export function convertToFieldValue(
  value: unknown,
  fieldType: FormFieldType,
): string;
export function convertToFieldValue(
  value: unknown,
  fieldType: FormFieldType,
): string | number | boolean | null | undefined {
  switch (fieldType) {
    case "boolean":
      return value === true;
    case "select":
      return typeof value === "string" ? value : undefined;
    case "string":
    case "datetime":
    case "timestamp":
    case "textarea":
      return typeof value === "string" ? value : "";
    case "integer":
    case "long":
    case "double":
    case "float":
    case "short":
    case "byte":
    case "decimal":
      return typeof value === "number" ? value : null;
    case "attachment":
    case "marking":
    case "mediaReference":
    case "objectType":
    case "geoshape":
    case "geohash":
    case "object":
    case "objectSet":
    case "interface":
    case "struct":
      return typeof value === "string" ? value : "";
  }
}

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
  fieldType: FormFieldType,
): unknown;
export function convertToActionValue(
  value: unknown,
  fieldType: FormFieldType,
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
