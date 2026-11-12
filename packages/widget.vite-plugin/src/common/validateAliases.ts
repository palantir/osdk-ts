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

import type { ResourceType } from "./ResourcesJson.js";

const ALIAS_MAX_LENGTH = 50;
const ALIAS_PATTERN = /^([a-z][a-z0-9]*)([A-Z][a-z0-9]*)*$/u;

/**
 * Validates the aliases of all resources declared in resources.json, regardless of resource type,
 * as aliases are used to reference resources in code.
 */
export function validateAliases(
  resources: Record<ResourceType, ReadonlyArray<{ alias: unknown }>>,
): void {
  // Map of alias to the location of the resource that first declared it, e.g. "datasets[0]"
  const aliasLocations = new Map<string, string>();
  for (const [resourceType, resourcesOfType] of Object.entries(resources)) {
    resourcesOfType.forEach(({ alias }, index) => {
      const location = `${resourceType}[${index}]`;
      validateAlias(alias, location);
      const existingLocation = aliasLocations.get(alias);
      if (existingLocation != null) {
        throw new Error(
          `Resource alias "${alias}" is used by more than one resource (${existingLocation} and ${location}). Aliases must be unique across all resources.`,
        );
      }
      aliasLocations.set(alias, location);
    });
  }
}

function validateAlias(
  alias: unknown,
  location: string,
): asserts alias is string {
  if (typeof alias !== "string" || alias.length === 0) {
    throw new Error(`Resource at ${location} must have a non-empty "alias"`);
  }
  if (alias.length > ALIAS_MAX_LENGTH) {
    throw new Error(
      `Resource alias "${alias}" at ${location} length can be at most ${ALIAS_MAX_LENGTH} characters`,
    );
  }
  if (!ALIAS_PATTERN.test(alias)) {
    throw new Error(
      `Resource alias "${alias}" at ${location} does not match allowed pattern (must be camelCase)`,
    );
  }
}
