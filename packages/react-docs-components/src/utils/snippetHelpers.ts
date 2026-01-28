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

import type { SdkSnippet, SdkSnippets } from "@osdk/docs-spec-core";
import type { OSDK_SNIPPETS_SPEC } from "@osdk/docs-spec-sdk";

/**
 * Get the latest version of a snippet from the documentation.
 * Searches across all versions and returns the snippet from the most recent version that contains it.
 */
export function getLatestSnippetVersion(
  snippets: SdkSnippets<typeof OSDK_SNIPPETS_SPEC>,
  snippetName: string,
): SdkSnippet | undefined {
  const versionsObj = snippets.versions as Record<string, { snippets: Record<string, SdkSnippet[]> }>;
  const versionKeys = Object.keys(versionsObj).sort((a, b) => {
    // Simple semver-like comparison (descending order - latest first)
    const aParts = a.split(".").map(Number);
    const bParts = b.split(".").map(Number);

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aNum = aParts[i] || 0;
      const bNum = bParts[i] || 0;
      if (aNum !== bNum) {
        return bNum - aNum; // Descending order
      }
    }
    return 0;
  });

  // Search from latest version to oldest to find the snippet
  for (const version of versionKeys) {
    const versionData = versionsObj[version];
    if (versionData) {
      const snippetArray = versionData.snippets[snippetName];
      if (snippetArray && snippetArray.length > 0) {
        return snippetArray[0];
      }
    }
  }

  return undefined;
}

/**
 * Extract required and optional variables from the spec for a given snippet
 */
export function getRequiredVariables(
  spec: typeof OSDK_SNIPPETS_SPEC,
  snippetName: string,
): { required: string[]; optional: string[] } {
  const snippetSpec = spec.snippets[snippetName as keyof typeof spec.snippets];
  if (!snippetSpec) {
    return { required: [], optional: [] };
  }

  const variables = snippetSpec.variables;
  const required: string[] = [];
  const optional: string[] = [];

  for (const [name, requirement] of Object.entries(variables)) {
    if (requirement === "required") {
      required.push(name);
    } else {
      optional.push(name);
    }
  }

  return { required, optional };
}

/**
 * Convert API name to camelCase
 */
export function toCamelCase(apiName: string): string {
  return apiName
    .split(/[_\s-]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

/**
 * Convert string to snake_case
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "");
}

/**
 * Convert string to ALL_CAPS_SNAKE_CASE
 */
export function toAllCapsSnakeCase(str: string): string {
  return toSnakeCase(str).toUpperCase();
}
