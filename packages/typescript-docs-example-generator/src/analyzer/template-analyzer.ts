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

import Handlebars from "handlebars";
import type {
  BlockStatement,
  HandlebarsAST,
  MustacheStatement,
  PathExpression,
  Program,
} from "../types/handlebars-ast.js";
import type {
  BlockVariable,
  ProcessingError,
  Result,
  TemplateAnalysis,
  TemplateVariable,
} from "../types/index.js";

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
   * Analyzes a Handlebars template and extracts comprehensive information
   */
  analyze(template: string): Result<TemplateAnalysis, ProcessingError> {
    try {
      const ast = this.parseTemplate(template);
      if (!ast.success) {
        return ast;
      }

      const variables = this.extractVariables(ast.value);
      const blocks = this.extractBlocks(ast.value);
      const dependencies = this.findDependencies(ast.value);
      const complexity = this.calculateComplexity(ast.value);

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
   * Parses a template string into an AST
   */
  private parseTemplate(
    template: string,
  ): Result<HandlebarsAST, ProcessingError> {
    try {
      const ast = Handlebars.parse(template) as unknown as HandlebarsAST;

      // Also try to compile and execute the template to catch semantic errors like "#if requires exactly one argument"
      const compiled = Handlebars.compile(template);
      // Try executing with an empty context to catch execution-time errors
      compiled({});

      return { success: true, value: ast };
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
   * Extracts all variables from the AST with type inference
   */
  private extractVariables(ast: HandlebarsAST): TemplateVariable[] {
    const variables = new Map<string, TemplateVariable>();
    const requiredVars = new Set<string>();

    this.traverseAST(ast, {
      onMustache: (node: MustacheStatement) => {
        if ("original" in node.path && node.path.original) {
          const name = node.path.original;
          if (!variables.has(name)) {
            variables.set(name, {
              name,
              type: this.inferVariableType(name),
              required: true,
              defaultValue: undefined,
            });
          }
          requiredVars.add(name);
        }
      },
      onBlock: (node: BlockStatement) => {
        if (node.path?.original) {
          const name = node.path.original;
          if (!variables.has(name)) {
            variables.set(name, {
              name,
              type: "boolean", // Block variables are typically boolean
              required: false, // Blocks are optional by nature
              defaultValue: false,
            });
          }
        }
      },
      onPath: (node: PathExpression) => {
        if (node.original && !node.original.includes(".")) {
          const name = node.original;
          if (!variables.has(name)) {
            variables.set(name, {
              name,
              type: this.inferVariableType(name),
              required: true,
              defaultValue: undefined,
            });
          }
        }
      },
    });

    return Array.from(variables.values());
  }

  /**
   * Extracts block variables from the AST
   */
  private extractBlocks(ast: HandlebarsAST): BlockVariable[] {
    const blocks: BlockVariable[] = [];

    this.traverseAST(ast, {
      onBlock: (node: BlockStatement) => {
        if (node.path?.original) {
          const name = node.path.original;
          const isInverted = !node.program && !!node.inverse;

          blocks.push({
            name: isInverted ? `^${name}` : `#${name}`,
            isInverted,
            content: this.extractBlockContent(
              isInverted ? node.inverse : node.program,
            ),
          });
        }
      },
    });

    return blocks;
  }

  /**
   * Finds template dependencies (e.g., partials, helpers)
   */
  private findDependencies(ast: HandlebarsAST): string[] {
    const dependencies = new Set<string>();

    this.traverseAST(ast, {
      onPartial: (name: string) => {
        dependencies.add(`partial:${name}`);
      },
      onHelper: (name: string) => {
        // Exclude built-in helpers
        if (!["if", "unless", "each", "with", "lookup", "log"].includes(name)) {
          dependencies.add(`helper:${name}`);
        }
      },
    });

    return Array.from(dependencies);
  }

  /**
   * Calculates template complexity score
   */
  private calculateComplexity(ast: HandlebarsAST): number {
    let complexity = 1; // Base complexity

    this.traverseAST(ast, {
      onBlock: () => complexity += 2, // Blocks add complexity
      onMustache: () => complexity += 1, // Variables add minimal complexity
      onPartial: () => complexity += 3, // Partials add significant complexity
      onHelper: () => complexity += 2, // Helpers add moderate complexity
    });

    return complexity;
  }

  /**
   * Generic AST traversal with callbacks
   */
  private traverseAST(
    node: any,
    callbacks: {
      onMustache?: (node: MustacheStatement) => void;
      onBlock?: (node: BlockStatement) => void;
      onPath?: (node: PathExpression) => void;
      onPartial?: (name: string) => void;
      onHelper?: (name: string) => void;
    },
  ): void {
    if (!node) return;

    switch (node.type) {
      case "Program":
        const program = node as Program;
        program.body?.forEach(stmt => this.traverseAST(stmt, callbacks));
        break;

      case "MustacheStatement":
        const mustache = node as MustacheStatement;
        callbacks.onMustache?.(mustache);
        if ("original" in mustache.path && mustache.params.length > 0) {
          callbacks.onHelper?.(mustache.path.original);
        }
        break;

      case "BlockStatement":
        const block = node as BlockStatement;
        callbacks.onBlock?.(block);
        this.traverseAST(block.program, callbacks);
        if (block.inverse) {
          this.traverseAST(block.inverse, callbacks);
        }
        break;

      case "PartialStatement":
        if ("original" in node.name) {
          callbacks.onPartial?.(node.name.original);
        }
        break;

      case "PathExpression":
        callbacks.onPath?.(node as PathExpression);
        break;

      case "SubExpression":
        if (node.path) {
          this.traverseAST(node.path, callbacks);
        }
        node.params?.forEach((param: any) =>
          this.traverseAST(param, callbacks)
        );
        break;
    }
  }

  /**
   * Extracts content from a block program
   */
  private extractBlockContent(program: Program | undefined): string {
    if (!program) return "";

    return program.body
      .map(stmt => {
        switch (stmt.type) {
          case "ContentStatement":
            return stmt.value;
          case "MustacheStatement":
            return `{{${(stmt as any).path?.original || ""}}}`;
          default:
            return "";
        }
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
      "hasStructSubProperty",
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
