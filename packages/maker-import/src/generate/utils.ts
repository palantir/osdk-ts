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

/**
 * Strips namespace prefix from an apiName.
 * "com.example.Employee" -> "Employee"
 * "Employee" -> "Employee"
 */
export function withoutNamespace(apiName: string): string {
  const lastDot = apiName.lastIndexOf(".");
  if (lastDot === -1) {
    return apiName;
  }
  return apiName.substring(lastDot + 1);
}

/**
 * Converts a dot-separated apiName to camelCase, including namespace segments.
 * "com.example.Employee" -> "comExampleEmployee"
 * "Employee" -> "employee"
 */
export function fullCamel(apiName: string): string {
  return camel(apiName.replace(/\./g, "-"));
}

/**
 * Converts an apiName to camelCase variable name.
 * "Employee" -> "employee"
 * "create-employee" -> "createEmployee"
 */
export function camel(str: string): string {
  if (!str) {
    return str;
  }
  let result = str.replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
  result = result.charAt(0).toLowerCase() + result.slice(1);
  return result;
}
