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

import Mustache from "mustache";
import type {
  BlockVariable,
  ProcessingError,
  Result,
  TemplateAnalysis,
  TemplateVariable,
} from "../types/index.js";

/**
 * NOTE: This analyzer still uses Mustache types internally for implementation.
 * The public API exports abstract token types via types/index.ts to avoid
 * coupling consumers to the Mustache library. In a future refactor, we could
 * use the TokenConverter to work with abstract tokens throughout.
 */
import type { MustacheToken } from "../types/mustache-tokens.js";
import {
  isBlockToken,
  isInvertedSectionToken,
  isNameToken,
  isSectionToken,
  isTextToken,
  isUnescapedToken,
  isVariableToken,
  TokenAccessor,
} from "../types/mustache-tokens.js";

export class TemplateAnalyzer {
  private readonly variableTypeCache = new Map<
    string,
    "string" | "boolean" | "number" | "object"
  >();

  constructor() {
    // Initialize with known variable types
    this.initializeKnownTypes();
  }

  /**
   * Analyzes a Mustache template and extracts comprehensive information
   */
  analyze(template: string): Result<TemplateAnalysis, ProcessingError> {
    try {
      const parseResult = this.parseTemplate(template);
      if (!parseResult.success) {
        return parseResult;
      }

      const tokens = parseResult.value;
      const variables = this.extractVariables(tokens);
      const blocks = this.extractBlocks(tokens);
      const dependencies = this.findDependencies(tokens);
      const complexity = this.calculateComplexity(tokens);

      return {
        success: true,
        value: {
          variables,
          blocks,
          dependencies,
          complexity,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: `Failed to analyze template: ${
            error instanceof Error ? error.message : String(error)
          }`,
          cause: error instanceof Error ? error : undefined,
        },
      };
    }
  }

  /**
   * Parses a template string into Mustache tokens
   */
  private parseTemplate(
    template: string,
  ): Result<MustacheToken[], ProcessingError> {
    try {
      // Parse template using Mustache
      const tokens = Mustache.parse(template) as MustacheToken[];

      // Also try to render the template to catch semantic errors
      Mustache.render(template, {});

      return { success: true, value: tokens };
    } catch (error) {
      return {
        success: false,
        error: {
          message: `Failed to parse template: ${
            error instanceof Error ? error.message : String(error)
          }`,
          cause: error instanceof Error ? error : undefined,
        },
      };
    }
  }

  /**
   * Extracts all variables from Mustache tokens with type inference
   */
  private extractVariables(tokens: MustacheToken[]): TemplateVariable[] {
    const variables = new Map<string, TemplateVariable>();

    this.traverseTokens(tokens, (token) => {
      if (isVariableToken(token)) {
        const name = TokenAccessor.getName(token);
        if (!variables.has(name)) {
          variables.set(name, {
            name,
            type: this.inferVariableType(name),
            required: true,
            defaultValue: undefined,
          });
        }
      } else if (isBlockToken(token)) {
        const name = TokenAccessor.getName(token);
        if (!variables.has(name)) {
          variables.set(name, {
            name,
            type: "boolean", // Block variables are typically boolean
            required: false, // Blocks are optional by nature
            defaultValue: false,
          });
        }
      }
    });

    return Array.from(variables.values());
  }

  /**
   * Extracts block variables from Mustache tokens
   */
  private extractBlocks(tokens: MustacheToken[]): BlockVariable[] {
    const blocks: BlockVariable[] = [];

    this.traverseTokens(tokens, (token) => {
      if (isSectionToken(token)) {
        const name = TokenAccessor.getName(token);
        const content = this.extractTokenContent(
          TokenAccessor.getChildren(token),
        );
        blocks.push({
          name: `#${name}`,
          isInverted: false,
          content,
        });
      } else if (isInvertedSectionToken(token)) {
        const name = TokenAccessor.getName(token);
        const content = this.extractTokenContent(
          TokenAccessor.getChildren(token),
        );
        blocks.push({
          name: `^${name}`,
          isInverted: true,
          content,
        });
      }
    });

    return blocks;
  }

  /**
   * Finds template dependencies (Mustache has no partials or helpers)
   */
  private findDependencies(tokens: MustacheToken[]): string[] {
    // Mustache doesn't support partials or helpers, so no dependencies
    return [];
  }

  /**
   * Calculates template complexity score
   */
  private calculateComplexity(tokens: MustacheToken[]): number {
    let complexity = 1; // Base complexity

    this.traverseTokens(tokens, (token) => {
      if (isBlockToken(token)) {
        complexity += 2; // Blocks add complexity
      } else if (isVariableToken(token)) {
        complexity += 1; // Variables add minimal complexity
      }
    });

    return complexity;
  }

  /**
   * Simple token traversal for Mustache tokens
   */
  private traverseTokens(
    tokens: MustacheToken[],
    callback: (token: MustacheToken) => void,
  ): void {
    for (const token of tokens) {
      callback(token);

      // If it's a section or inverted section, traverse child tokens
      if (isBlockToken(token)) {
        this.traverseTokens(TokenAccessor.getChildren(token), callback);
      }
    }
  }

  /**
   * Extracts content from child tokens
   */
  private extractTokenContent(tokens: MustacheToken[]): string {
    return tokens
      .map(token => {
        if (isTextToken(token)) {
          return TokenAccessor.getText(token);
        }
        if (isNameToken(token)) {
          return `{{${TokenAccessor.getName(token)}}}`;
        }
        if (isUnescapedToken(token)) {
          return `{{{${TokenAccessor.getName(token)}}}}`;
        }
        if (isSectionToken(token)) {
          const name = TokenAccessor.getName(token);
          const children = TokenAccessor.getChildren(token);
          return `{{#${name}}}${
            this.extractTokenContent(children)
          }}{{/${name}}}`;
        }
        if (isInvertedSectionToken(token)) {
          const name = TokenAccessor.getName(token);
          const children = TokenAccessor.getChildren(token);
          return `{{^${name}}}${
            this.extractTokenContent(children)
          }}{{/${name}}}`;
        }
        return "";
      })
      .join("");
  }

  /**
   * Infers variable type based on naming conventions and known patterns
   */
  private inferVariableType(
    name: string,
  ): "string" | "boolean" | "number" | "object" {
    // Check cache first
    const cached = this.variableTypeCache.get(name);
    if (cached) return cached;

    // Boolean indicators
    if (
      name.startsWith("has") || name.startsWith("is")
      || name.startsWith("should")
    ) {
      return "boolean";
    }

    // Number indicators
    if (
      name.includes("Count") || name.includes("Size") || name.includes("Index")
      || name.includes("Value") && name.includes("Incremented")
    ) {
      return "number";
    }

    // Object indicators
    if (name.endsWith("V2") && name.includes("Property")) {
      return "object";
    }

    // Array indicators
    if (name.includes("Names") && name.endsWith("Names")) {
      return "object";
    }

    // Default to string
    return "string";
  }

  /**
   * Initializes known variable types from the base context
   */
  private initializeKnownTypes(): void {
    // Booleans
    [
      "isLinkManySided",
      "durationText",
      "hasMediaParameter",
      "hasAttachmentUpload",
      "hasAttachmentProperty",
      "hasParameters",
      "last",
      "needsImports",
      "isUnary",
      "isExtractPart",
    ].forEach(
      name => this.variableTypeCache.set(name, "boolean"),
    );

    // Numbers
    ["propertyValueIncrementedV2", "vectorDimensionSize"].forEach(
      name => this.variableTypeCache.set(name, "number"),
    );

    // Objects
    [
      "primaryKeyPropertyV2",
      "linkedPrimaryKeyPropertyV2",
      "linkedOneSidePropertyV2",
      "linkedManySidePropertyV2",
      "rawLinkedPrimaryKeyProperty",
      "propertyNames",
      "actionParameterSampleValuesV2",
    ].forEach(
      name => this.variableTypeCache.set(name, "object"),
    );
  }
}
