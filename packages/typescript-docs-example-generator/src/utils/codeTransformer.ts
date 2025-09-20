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

export interface TransformOptions {
  fixEsmImports?: boolean;
  trimWhitespace?: boolean;
  replacePlaceholderEllipsis?: boolean;
}

/**
 * Utility class for common code transformations
 */
export class CodeTransformer {
  /**
   * Apply multiple transformations to code
   * @param code The code to transform
   * @param options Transformation options
   * @returns Transformed code
   */
  static transform(code: string, options: TransformOptions = {}): string {
    let result = code;

    if (options.fixEsmImports !== false) {
      result = this.fixEsmImports(result);
    }

    if (options.trimWhitespace) {
      result = result.trim();
    }

    return result;
  }

  /**
   * Fix ESM import statements to include .js extensions
   * This consolidates the logic that was duplicated in:
   * - generateExamples.ts (lines 307-311)
   * - generateBlockVariations.ts (lines 106-110, 150-154)
   *
   * @param code The code to fix
   * @returns Code with fixed ESM imports
   */
  static fixEsmImports(code: string): string {
    return code
      .replace(
        /import { client } from "\.\/client";/g,
        "import { client } from \"./client.js\";",
      );
  }

  /**
   * Apply common transformations that are used across the codebase
   * @param code The code to transform
   * @returns Transformed code
   */
  static applyCommonTransforms(code: string): string {
    return this.transform(code, {
      fixEsmImports: true,
      trimWhitespace: true,
    });
  }

  /**
   * Format code with proper indentation and spacing
   * @param code The code to format
   * @param indentSize Number of spaces for indentation (default: 2)
   * @returns Formatted code
   */
  static formatCode(code: string, indentSize: number = 2): string {
    // Basic formatting - can be enhanced with prettier or similar
    const lines = code.split("\n");
    let indentLevel = 0;
    const indent = " ".repeat(indentSize);

    return lines.map(line => {
      const trimmed = line.trim();

      // Decrease indent for closing braces
      if (
        trimmed.startsWith("}") || trimmed.startsWith("]")
        || trimmed.startsWith(")")
      ) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      const formatted = indentLevel > 0
        ? indent.repeat(indentLevel) + trimmed
        : trimmed;

      // Increase indent for opening braces
      if (
        trimmed.endsWith("{") || trimmed.endsWith("[") || trimmed.endsWith("(")
      ) {
        indentLevel++;
      }

      return formatted;
    }).join("\n");
  }

  /**
   * Remove excess whitespace and normalize line endings
   * @param code The code to normalize
   * @returns Normalized code
   */
  static normalizeWhitespace(code: string): string {
    return code
      .replace(/\r\n/g, "\n") // Normalize line endings
      .replace(/\n{3,}/g, "\n\n") // Reduce multiple empty lines to max 2
      .replace(/[ \t]+$/gm, "") // Remove trailing whitespace
      .trim();
  }
}
