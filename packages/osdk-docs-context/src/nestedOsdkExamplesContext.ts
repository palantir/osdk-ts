/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import semver from "semver";
import {
  type NestedExampleEntry,
  type NestedExampleMetadata,
  TYPESCRIPT_OSDK_CONTEXT,
} from "./generated/inlinedExamples.js";

// Type alias for compatibility
type ExampleMetadata = NestedExampleMetadata;

/**
 * Utility class for working with the nested examples context
 */
export class NestedOsdkExamplesContext {
  /**
   * Get compatible versions for a given version (versions <= target version)
   * Uses the official semver package for proper semantic version comparison
   */
  private static getCompatibleVersions(targetVersion: string): string[] {
    const availableVersions = this.getAvailableVersions();

    // Validate target version
    if (!semver.valid(targetVersion)) {
      return [targetVersion]; // Fallback for invalid versions
    }

    // Find all versions <= target version using semver
    const compatible = availableVersions.filter(v => {
      return semver.valid(v) && semver.lte(v, targetVersion);
    });

    // Sort by version descending (latest first) using semver
    return compatible.sort((a, b) => semver.rcompare(a, b));
  }

  /**
   * Merge examples from multiple compatible versions
   */
  private static mergeVersionExamples(
    versions: string[],
  ): { [exampleName: string]: NestedExampleEntry } {
    const merged: { [exampleName: string]: NestedExampleEntry } = {};

    // Process versions in reverse order (oldest first) so newer versions override
    for (const version of versions.reverse()) {
      const versionData = TYPESCRIPT_OSDK_CONTEXT.versions[version];
      if (!versionData) continue;

      for (const [exampleName, entry] of Object.entries(versionData)) {
        if (!merged[exampleName]) {
          merged[exampleName] = entry;
        } else {
          // If both are nested structures, merge them
          const existing = merged[exampleName];
          if (!("code" in existing) && !("code" in entry)) {
            merged[exampleName] = { ...existing, ...entry };
          } // If one is direct and one is nested, keep the newer one (current entry)
          else {
            merged[exampleName] = entry;
          }
        }
      }
    }

    return merged;
  }
  /**
   * Get all available versions
   */
  static getAvailableVersions(): string[] {
    return Object.keys(TYPESCRIPT_OSDK_CONTEXT.versions);
  }

  /**
   * Get all base example names for a version (top-level keys)
   * Includes examples from compatible versions (same major, lower minor versions)
   */
  static getBaseExamplesForVersion(version: string): string[] {
    const compatibleVersions = this.getCompatibleVersions(version);
    const mergedExamples = this.mergeVersionExamples(compatibleVersions);
    return Object.keys(mergedExamples);
  }

  /**
   * Get a specific example or nested variation
   * Uses version fallback to find examples from compatible versions
   */
  static getExample(
    version: string,
    examplePath: string[],
  ): ExampleMetadata | undefined {
    const compatibleVersions = this.getCompatibleVersions(version);
    const mergedExamples = this.mergeVersionExamples(compatibleVersions);

    let current: NestedExampleEntry | {
      [exampleName: string]: NestedExampleEntry;
    } = mergedExamples;

    for (const pathSegment of examplePath) {
      if (
        typeof current === "object" && current != null && !("code" in current)
      ) {
        current = current[pathSegment];
        if (!current) return undefined;
      } else {
        return undefined;
      }
    }

    // Check if this is an ExampleMetadata object
    if (current && typeof current === "object" && "code" in current) {
      return current as ExampleMetadata;
    }

    return undefined;
  }

  /**
   * Get all variations for a base example
   * Uses version fallback to find variations from compatible versions
   */
  static getVariations(
    version: string,
    baseName: string,
  ): { [variationKey: string]: ExampleMetadata } | undefined {
    const compatibleVersions = this.getCompatibleVersions(version);
    const mergedExamples = this.mergeVersionExamples(compatibleVersions);

    const baseExample = mergedExamples[baseName];

    // Check if this is a nested structure (not a direct ExampleMetadata)
    if (
      baseExample && typeof baseExample === "object" && !("code" in baseExample)
    ) {
      return baseExample as { [variationKey: string]: ExampleMetadata };
    }

    return undefined;
  }

  /**
   * Check if an example has variations
   */
  static hasVariations(version: string, baseName: string): boolean {
    return this.getVariations(version, baseName) !== undefined;
  }

  /**
   * Get examples with version fallback information
   */
  static getExamplesWithVersionInfo(version: string): Array<{
    name: string;
    example: NestedExampleEntry;
    availableInVersions: string[];
  }> {
    const compatibleVersions = this.getCompatibleVersions(version);
    const mergedExamples = this.mergeVersionExamples(compatibleVersions);

    return Object.entries(mergedExamples).map(([name, example]) => {
      // Find which versions contain this example
      const availableInVersions = compatibleVersions.filter(v => {
        const versionData = TYPESCRIPT_OSDK_CONTEXT.versions[v];
        return versionData && versionData[name];
      });

      return {
        name,
        example,
        availableInVersions,
      };
    });
  }

  /**
   * Flatten the nested structure back to the original format for compatibility
   */
  static flatten(): {
    kind: "examples";
    versions: {
      [version: string]: {
        examples: {
          [exampleName: string]: ExampleMetadata;
        };
      };
    };
  } {
    const result: {
      kind: "examples";
      versions: {
        [version: string]: {
          examples: {
            [exampleName: string]: ExampleMetadata;
          };
        };
      };
    } = {
      kind: "examples",
      versions: {},
    };

    for (
      const [version, versionData] of Object.entries(
        TYPESCRIPT_OSDK_CONTEXT.versions,
      )
    ) {
      result.versions[version] = { examples: {} };
      const flatExamples = result.versions[version].examples;

      for (const [baseName, entry] of Object.entries(versionData)) {
        if ("code" in entry) {
          // Direct example
          flatExamples[baseName] = entry as ExampleMetadata;
        } else {
          // Nested variations
          for (
            const [variationKey, metadata] of Object.entries(
              entry as { [key: string]: ExampleMetadata },
            )
          ) {
            flatExamples[`${baseName}_${variationKey}`] = metadata;
          }
        }
      }
    }

    return result;
  }

  /**
   * Search examples by pattern, including nested variations
   * When searching within a specific version, includes results from compatible versions
   */
  static searchExamples(pattern: string, targetVersion?: string): Array<{
    version: string;
    baseName: string;
    variationKey?: string;
    fullPath: string[];
    metadata: ExampleMetadata;
    sourceVersion: string; // The actual version where this example was found
  }> {
    const results: Array<{
      version: string;
      baseName: string;
      variationKey?: string;
      fullPath: string[];
      metadata: ExampleMetadata;
      sourceVersion: string;
    }> = [];
    const regex = new RegExp(pattern, "i");

    if (targetVersion) {
      // Search within compatible versions for the target version
      const compatibleVersions = this.getCompatibleVersions(targetVersion);

      for (const version of compatibleVersions) {
        const versionData = TYPESCRIPT_OSDK_CONTEXT.versions[version];
        if (!versionData) continue;

        for (const [baseName, entry] of Object.entries(versionData)) {
          if ("code" in entry) {
            // Direct example
            if (regex.test(baseName)) {
              results.push({
                version: targetVersion,
                baseName,
                fullPath: [baseName],
                metadata: entry as ExampleMetadata,
                sourceVersion: version,
              });
            }
          } else {
            // Nested variations
            for (
              const [variationKey, metadata] of Object.entries(
                entry as { [key: string]: ExampleMetadata },
              )
            ) {
              const fullName = `${baseName}_${variationKey}`;
              if (
                regex.test(fullName) || regex.test(baseName)
                || regex.test(variationKey)
              ) {
                results.push({
                  version: targetVersion,
                  baseName,
                  variationKey,
                  fullPath: [baseName, variationKey],
                  metadata: metadata as ExampleMetadata,
                  sourceVersion: version,
                });
              }
            }
          }
        }
      }
    } else {
      // Search across all versions
      for (
        const [version, versionData] of Object.entries(
          TYPESCRIPT_OSDK_CONTEXT.versions,
        )
      ) {
        for (const [baseName, entry] of Object.entries(versionData)) {
          if ("code" in entry) {
            // Direct example
            if (regex.test(baseName)) {
              results.push({
                version,
                baseName,
                fullPath: [baseName],
                metadata: entry as ExampleMetadata,
                sourceVersion: version,
              });
            }
          } else {
            // Nested variations
            for (
              const [variationKey, metadata] of Object.entries(
                entry as { [key: string]: ExampleMetadata },
              )
            ) {
              const fullName = `${baseName}_${variationKey}`;
              if (
                regex.test(fullName) || regex.test(baseName)
                || regex.test(variationKey)
              ) {
                results.push({
                  version,
                  baseName,
                  variationKey,
                  fullPath: [baseName, variationKey],
                  metadata: metadata as ExampleMetadata,
                  sourceVersion: version,
                });
              }
            }
          }
        }
      }
    }

    return results;
  }
}
