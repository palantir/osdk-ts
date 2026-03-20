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

const RESERVED_KEYWORDS = new Set([
  "ontology",
  "object",
  "property",
  "link",
  "relation",
  "rid",
  "primarykey",
  "typeid",
  "ontologyobject",
]);
export const OBJECT_API_NAME_PATTERN: RegExp = /^([a-zA-Z][a-zA-Z0-9]*)$/;
export const API_NAME_PATTERN: RegExp = /^([a-zA-Z][a-zA-Z0-9_]*)$/;
export const MAX_API_NAME_LENGTH = 100;

export function isValidApiName(apiName: string): boolean {
  return API_NAME_PATTERN.test(apiName)
    && apiName.length <= MAX_API_NAME_LENGTH
    && !RESERVED_KEYWORDS.has(apiName.toLowerCase());
}

export function isValidObjectApiName(apiName: string): boolean {
  return OBJECT_API_NAME_PATTERN.test(apiName)
    && apiName.length <= MAX_API_NAME_LENGTH
    && !RESERVED_KEYWORDS.has(apiName.toLowerCase());
}
