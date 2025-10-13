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
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";

export interface FormatPropertyOptions {
  locale?: string;
  timezoneId?: string;
}

/**
 * Applies formatting rules to object properties and returns a record
 * of property names to their formatted string values.
 *
 * Only properties with formatting rules will be included in the result.
 * Properties that cannot be formatted due to missing references will be undefined.
 *
 * @experimental This is a stub implementation that returns an empty record.
 * The actual formatting logic will be implemented later.
 */
export function applyPropertyFormatters(
  _objectDef: FetchedObjectTypeDefinition,
  _objectData: SimpleOsdkProperties,
  _options: FormatPropertyOptions = {},
): Record<string, string> {
  // Stub implementation - return empty record
  // The actual formatting logic will be added later
  return {};
}
