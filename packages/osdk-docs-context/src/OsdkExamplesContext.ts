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

import {
  type NestedExampleMetadata,
  TYPESCRIPT_OSDK_EXAMPLES,
} from "./generated/inlinedExamples.js";

// Type alias for compatibility
type ExampleMetadata = NestedExampleMetadata;

// Types for working with the original flat examples hierarchy
export interface VersionExamples {
  examples: {
    [exampleName: string]: ExampleMetadata;
  };
}

export interface ExamplesHierarchy {
  kind: "examples";
  versions: {
    [version: string]: VersionExamples;
  };
}

/**
 * Utility class for working with the original flat examples structure
 */
export class OsdkExamplesContext {
  /**
   * Get all available versions in the examples hierarchy
   */
  static getAvailableVersions(): string[] {
    return Object.keys(TYPESCRIPT_OSDK_EXAMPLES.versions);
  }

  /**
   * Get all example names for a specific version
   */
  static getExamplesForVersion(version: string): string[] {
    const versionData = TYPESCRIPT_OSDK_EXAMPLES
      .versions[version as keyof typeof TYPESCRIPT_OSDK_EXAMPLES.versions];
    return versionData ? Object.keys(versionData.examples) : [];
  }

  /**
   * Get example metadata for a specific version and example name
   */
  static getExample(
    version: string,
    exampleName: string,
  ): ExampleMetadata | undefined {
    const versionData = TYPESCRIPT_OSDK_EXAMPLES
      .versions[version as keyof typeof TYPESCRIPT_OSDK_EXAMPLES.versions];
    return versionData
      ?.examples[exampleName as keyof typeof versionData.examples] as
        | ExampleMetadata
        | undefined;
  }

  /**
   * Get the code content for a specific example
   */
  static getExampleCode(
    version: string,
    exampleName: string,
  ): string | undefined {
    const example = this.getExample(version, exampleName);
    return example?.code;
  }

  /**
   * Search for examples by name pattern across all versions
   */
  static searchExamples(
    pattern: string,
  ): Array<
    { version: string; exampleName: string; metadata: ExampleMetadata }
  > {
    const results: Array<
      { version: string; exampleName: string; metadata: ExampleMetadata }
    > = [];
    const regex = new RegExp(pattern, "i");

    for (
      const [version, versionData] of Object.entries(
        TYPESCRIPT_OSDK_EXAMPLES.versions,
      )
    ) {
      for (
        const [exampleName, metadata] of Object.entries(versionData.examples)
      ) {
        if (regex.test(exampleName)) {
          results.push({
            version,
            exampleName,
            metadata: metadata as ExampleMetadata,
          });
        }
      }
    }

    return results;
  }

  /**
   * Get examples that contain specific code patterns
   */
  static findExamplesByCodePattern(
    pattern: string,
  ): Array<
    { version: string; exampleName: string; metadata: ExampleMetadata }
  > {
    const results: Array<
      { version: string; exampleName: string; metadata: ExampleMetadata }
    > = [];
    const regex = new RegExp(pattern, "i");

    for (
      const [version, versionData] of Object.entries(
        TYPESCRIPT_OSDK_EXAMPLES.versions,
      )
    ) {
      for (
        const [exampleName, metadata] of Object.entries(versionData.examples)
      ) {
        const typedMetadata = metadata as ExampleMetadata;
        if (regex.test(typedMetadata.code)) {
          results.push({
            version,
            exampleName,
            metadata: typedMetadata,
          });
        }
      }
    }

    return results;
  }
}
