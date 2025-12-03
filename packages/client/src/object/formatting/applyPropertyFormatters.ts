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

import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";

export interface FormatPropertyOptions {
  locale?: string;
  timezoneId?: string;
}

/**
 * Applies formatting rules to a property value and returns the formatted string value.
 *
 * @param propertyValue - The value of the property to format
 * @returns The formatted string value, or undefined if the property cannot be formatted
 *
 * @experimental This is a stub implementation that returns undefined.
 * The actual formatting logic will be implemented later.
 */
export function applyPropertyFormatter(
  _objectDef: FetchedObjectTypeDefinition,
  _propertyValue:
    | string
    | Array<string>
    | number
    | Array<number>
    | boolean
    | Array<boolean>
    | undefined,
  _options: FormatPropertyOptions = {},
): string | undefined {
  // Stub implementation - return undefined
  // The actual formatting logic will be added later
  return undefined;
}
