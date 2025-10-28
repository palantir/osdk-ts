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

import { generateFileHeader } from "./generateFileHeader.js";

// Types from the existing codebase
export interface ExamplesHierarchy {
  kind: "examples";
  versions: {
    [version: string]: {
      examples: {
        [exampleName: string]: {
          code: string;
        };
      };
    };
  };
}

export interface NestedExampleMetadata {
  code: string;
}

export type NestedExampleEntry = NestedExampleMetadata | {
  [variationKey: string]: NestedExampleMetadata | NestedExampleEntry;
};

export interface NestedVersionExamples {
  [exampleName: string]: NestedExampleEntry;
}

export interface NestedExamplesHierarchy {
  kind: "examples";
  versions: {
    [version: string]: NestedVersionExamples;
  };
}

/**
 * Builds both flat and nested hierarchy structures simultaneously
 * Eliminates the need for two-pass processing and file I/O between passes
 */
export class HierarchyBuilder {
  private flatHierarchy: ExamplesHierarchy = {
    kind: "examples",
    versions: {},
  };

  private nestedHierarchy: NestedExamplesHierarchy = {
    kind: "examples",
    versions: {},
  };

  /**
   * Add a direct example (non-variation) to both hierarchies
   * @param version The version this example belongs to
   * @param name The example name
   * @param code The generated code content
   */
  addExample(version: string, name: string, code: string): void {
    this.ensureVersionExists(version);

    // Add to flat hierarchy
    this.flatHierarchy.versions[version].examples[name] = { code };

    // Add to nested hierarchy (direct examples are not nested)
    this.nestedHierarchy.versions[version][name] = { code };
  }

  /**
   * Add a template variation to both hierarchies
   * @param version The version this variation belongs to
   * @param baseName The base template name (e.g., "myTemplate")
   * @param variation The variation suffix (e.g., "#withFeature" or "^withoutFeature")
   * @param code The generated code content
   */
  addVariation(
    version: string,
    baseName: string,
    variation: string,
    code: string,
  ): void {
    this.ensureVersionExists(version);

    const variationKey = `${baseName}_${variation}`;

    // Add to flat hierarchy
    this.flatHierarchy.versions[version].examples[variationKey] = { code };

    // Add to nested hierarchy
    if (!this.nestedHierarchy.versions[version][baseName]) {
      this.nestedHierarchy.versions[version][baseName] = {};
    }

    // Ensure the base name entry is an object, not a direct example
    const baseEntry = this.nestedHierarchy.versions[version][baseName];
    if ("code" in baseEntry) {
      throw new Error(
        `Cannot add variation ${variation} to ${baseName}: base name already exists as direct example`,
      );
    }

    (baseEntry as Record<string, NestedExampleMetadata>)[variation] = { code };
  }

  /**
   * Get the flat hierarchy structure
   */
  getFlatHierarchy(): ExamplesHierarchy {
    return structuredClone(this.flatHierarchy);
  }

  /**
   * Get the nested hierarchy structure
   */
  getNestedHierarchy(): NestedExamplesHierarchy {
    return structuredClone(this.nestedHierarchy);
  }

  /**
   * Generate the content for both hierarchy files
   * @returns Object with flat and nested file contents
   */
  generateHierarchyFiles(): { flat: string; nested: string } {
    const flatContent = `${
      generateFileHeader(
        undefined,
        "Generated examples hierarchy for SDK documentation\n * This provides a mapping of example names to their file paths\n * similar to how TYPESCRIPT_OSDK_SNIPPETS works for templates",
      )
    }export const TYPESCRIPT_OSDK_EXAMPLES = ${
      JSON.stringify(this.flatHierarchy, null, 2)
    } as const;
`;

    const nestedContent = `${generateFileHeader()}/**
 * Metadata for a single example
 */
export interface NestedExampleMetadata {
  code: string;
}

/**
 * A nested example entry that can either be a direct example or contain nested variations
 */
export type NestedExampleEntry = NestedExampleMetadata | {
  [variationKey: string]: NestedExampleMetadata | NestedExampleEntry;
};

/**
 * Version-specific nested examples structure
 */
export interface NestedVersionExamples {
  [exampleName: string]: NestedExampleEntry;
}

/**
 * Complete nested examples hierarchy
 */
export interface NestedExamplesHierarchy {
  kind: "examples";
  versions: {
    [version: string]: NestedVersionExamples;
  };
}

/**
 * The nested OSDK documentation context with template variations grouped under their base names.
 * Generated from TYPESCRIPT_OSDK_EXAMPLES.
 */
export const TYPESCRIPT_OSDK_CONTEXT: NestedExamplesHierarchy = ${
      JSON.stringify(this.nestedHierarchy, null, 2)
    } as const;
`;

    return { flat: flatContent, nested: nestedContent };
  }

  /**
   * Clear all data from both hierarchies
   */
  clear(): void {
    this.flatHierarchy = { kind: "examples", versions: {} };
    this.nestedHierarchy = { kind: "examples", versions: {} };
  }

  /**
   * Get statistics about the current hierarchies
   */
  getStats(): { versions: number; totalExamples: number; variations: number } {
    const versions = Object.keys(this.flatHierarchy.versions).length;
    let totalExamples = 0;
    let variations = 0;

    for (const versionData of Object.values(this.flatHierarchy.versions)) {
      const examples = Object.keys(versionData.examples);
      totalExamples += examples.length;
      variations += examples.filter(name => name.includes("_")).length;
    }

    return { versions, totalExamples, variations };
  }

  /**
   * Ensure a version exists in both hierarchies
   */
  private ensureVersionExists(version: string): void {
    if (!this.flatHierarchy.versions[version]) {
      this.flatHierarchy.versions[version] = { examples: {} };
    }

    if (!this.nestedHierarchy.versions[version]) {
      this.nestedHierarchy.versions[version] = {};
    }
  }
}
