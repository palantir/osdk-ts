/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Result } from "../types/index.js";
import { toErrorResult } from "../errors/generator-errors.js";

export interface FormatOptions {
  /** Parser to use - typescript, babel, etc */
  parser?: 'typescript' | 'babel' | 'babel-ts';
  /** Use single quotes */
  singleQuote?: boolean;
  /** Trailing comma style */
  trailingComma?: 'none' | 'es5' | 'all';
  /** Tab width */
  tabWidth?: number;
  /** Use semicolons */
  semi?: boolean;
  /** Print width */
  printWidth?: number;
  /** Arrow function parentheses */
  arrowParens?: 'always' | 'avoid';
}

/**
 * Modern code formatter with proper error handling
 * Note: This is a placeholder that should integrate with Prettier when available
 */
export class CodeFormatter {
  private readonly defaultOptions: FormatOptions = {
    parser: 'typescript',
    singleQuote: false,
    trailingComma: 'none',
    tabWidth: 2,
    semi: true,
    printWidth: 100,
    arrowParens: 'always',
  };

  constructor(private readonly options: FormatOptions = {}) {
    this.options = { ...this.defaultOptions, ...options };
  }

  /**
   * Format TypeScript code
   */
  formatTypeScript(code: string): Result<string> {
    return this.format(code, { parser: 'typescript' });
  }

  /**
   * Format JavaScript code
   */
  formatJavaScript(code: string): Result<string> {
    return this.format(code, { parser: 'babel' });
  }

  /**
   * Format code with specific options
   */
  format(code: string, options?: FormatOptions): Result<string> {
    try {
      // For now, use basic formatting until Prettier is integrated
      const formatted = this.basicFormat(code, { ...this.options, ...options });
      return { success: true, value: formatted };
    } catch (error) {
      return toErrorResult(error);
    }
  }

  /**
   * Batch format multiple code snippets
   */
  async batchFormat(
    items: Array<{ id: string; code: string; options?: FormatOptions }>
  ): Promise<Result<Map<string, string>>> {
    const results = new Map<string, string>();
    const errors: Array<{ id: string; error: any }> = [];

    await Promise.all(
      items.map(async ({ id, code, options }) => {
        const result = this.format(code, options);
        if (result.success) {
          results.set(id, result.value);
        } else {
          errors.push({ id, error: result.error });
        }
      })
    );

    if (errors.length > 0) {
      const errorMessage = errors
        .map(e => `${e.id}: ${e.error.message}`)
        .join('\n');
      return toErrorResult(new Error(`Failed to format code:\n${errorMessage}`));
    }

    return { success: true, value: results };
  }

  /**
   * Basic formatting implementation
   * This should be replaced with Prettier integration
   */
  private basicFormat(code: string, options: FormatOptions): string {
    let formatted = code;

    // Basic indentation fixing
    formatted = this.fixIndentation(formatted, options.tabWidth || 2);

    // Quote style
    if (options.singleQuote) {
      formatted = this.convertToSingleQuotes(formatted);
    }

    // Semicolons
    if (options.semi === false) {
      formatted = this.removeSemicolons(formatted);
    }

    // Trailing commas
    if (options.trailingComma === 'all') {
      formatted = this.addTrailingCommas(formatted);
    }

    return formatted.trim();
  }

  private fixIndentation(code: string, tabWidth: number): string {
    const lines = code.split('\n');
    const indent = ' '.repeat(tabWidth);
    let level = 0;
    
    return lines.map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';

      // Decrease level for closing braces
      if (trimmed.match(/^[}\]]/)) {
        level = Math.max(0, level - 1);
      }

      const indented = indent.repeat(level) + trimmed;

      // Increase level for opening braces
      if (trimmed.match(/[{[]$/)) {
        level++;
      }

      return indented;
    }).join('\n');
  }

  private convertToSingleQuotes(code: string): string {
    // Simple conversion - should use proper AST in production
    return code.replace(/"([^"]*)"/g, "'$1'");
  }

  private removeSemicolons(code: string): string {
    // Remove semicolons at end of lines (simplified)
    return code.replace(/;(\s*\n)/g, '$1');
  }

  private addTrailingCommas(code: string): string {
    // Add trailing commas in objects and arrays (simplified)
    // Only add trailing commas to alphanumeric characters, quotes, or closing brackets
    // Exclude ), ;, } characters that shouldn't get trailing commas (function calls, statements, nested blocks)
    return code
      .replace(/([a-zA-Z0-9"'`\]_])\s*\n\s*}/g, '$1,\n}')
      .replace(/([a-zA-Z0-9"'`\]_])\s*\n\s*]/g, '$1,\n]');
  }
}

/**
 * Factory function to create a formatter with default options
 */
export function createFormatter(options?: FormatOptions): CodeFormatter {
  return new CodeFormatter(options);
}

/**
 * Format code with default options
 */
export function formatCode(
  code: string,
  options?: FormatOptions
): Result<string> {
  const formatter = createFormatter(options);
  return formatter.format(code);
}