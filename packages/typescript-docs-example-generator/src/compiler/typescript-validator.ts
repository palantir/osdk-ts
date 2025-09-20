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

import * as ts from "typescript";
import type { Result } from "../types/index.js";
import { toErrorResult } from "../errors/generator-errors.js";

export interface TypeScriptDiagnostic {
  file?: string;
  line?: number;
  column?: number;
  length?: number;
  messageText: string;
  category: 'error' | 'warning' | 'suggestion' | 'message';
  code: number;
}

export interface CompilationResult {
  success: boolean;
  diagnostics: TypeScriptDiagnostic[];
  generatedJs?: string;
}

export interface ValidationOptions {
  /** Module kind for compilation */
  module?: ts.ModuleKind;
  /** Target JavaScript version */
  target?: ts.ScriptTarget;
  /** Whether to include JavaScript output */
  includeJs?: boolean;
  /** TypeScript compiler options to merge */
  compilerOptions?: ts.CompilerOptions;
}

/**
 * TypeScript validator that uses the TypeScript Compiler API to verify generated code
 */
export class TypeScriptValidator {
  private readonly defaultOptions: ts.CompilerOptions;

  constructor(options: ValidationOptions = {}) {
    this.defaultOptions = {
      module: options.module ?? ts.ModuleKind.ESNext,
      target: options.target ?? ts.ScriptTarget.ES2022,
      strict: true, // Enable strict mode for proper type checking
      noEmitOnError: false,
      skipLibCheck: true,
      skipDefaultLibCheck: true, // Skip default lib to avoid missing DOM types
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      resolveJsonModule: true,
      isolatedModules: true,
      useDefineForClassFields: true,
      // Allow missing imports but catch type errors
      noResolve: true, // Don't try to resolve imports, just check syntax and types
      ...options.compilerOptions,
    };
  }

  /**
   * Validates TypeScript code and returns compilation results
   */
  validateTypeScriptCode(
    code: string,
    fileName: string = "example.ts",
    options?: ValidationOptions
  ): Result<CompilationResult> {
    try {
      const compilerOptions = options?.compilerOptions
        ? { ...this.defaultOptions, ...options.compilerOptions }
        : this.defaultOptions;

      // Use the simpler transpileModule for validation which is more reliable
      const result = ts.transpileModule(code, {
        compilerOptions,
        fileName,
        reportDiagnostics: true,
      });

      const diagnostics = (result.diagnostics || []).map(d => this.formatDiagnostic(d));
      const hasErrors = diagnostics.some(d => d.category === 'error');

      let generatedJs: string | undefined;
      if (options?.includeJs) {
        generatedJs = result.outputText;
      }

      return {
        success: true,
        value: {
          success: !hasErrors,
          diagnostics,
          generatedJs,
        },
      };
    } catch (error) {
      console.error('TypeScript validation error:', error);
      return toErrorResult(error);
    }
  }

  /**
   * Batch validate multiple TypeScript code snippets
   */
  async batchValidate(
    items: Array<{ id: string; code: string; fileName?: string }>
  ): Promise<Result<Map<string, CompilationResult>>> {
    const results = new Map<string, CompilationResult>();
    const errors: Array<{ id: string; error: any }> = [];

    for (const { id, code, fileName } of items) {
      const result = this.validateTypeScriptCode(code, fileName || `${id}.ts`);
      if (result.success) {
        results.set(id, result.value);
      } else {
        errors.push({ id, error: result.error });
      }
    }

    if (errors.length > 0) {
      const errorMessage = errors
        .map(e => `${e.id}: ${e.error.message}`)
        .join('\n');
      return toErrorResult(new Error(`Failed to validate TypeScript code:\n${errorMessage}`));
    }

    return { success: true, value: results };
  }


  /**
   * Formats a TypeScript diagnostic into our standard format
   */
  private formatDiagnostic(diagnostic: ts.Diagnostic): TypeScriptDiagnostic {
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');

    let file: string | undefined;
    let line: number | undefined;
    let column: number | undefined;
    let length: number | undefined;

    if (diagnostic.file && diagnostic.start !== undefined) {
      file = diagnostic.file.fileName;
      const { line: lineNumber, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      line = lineNumber + 1; // Convert to 1-based
      column = character + 1; // Convert to 1-based
      length = diagnostic.length;
    }

    return {
      file,
      line,
      column,
      length,
      messageText: message,
      category: this.getCategoryName(diagnostic.category),
      code: diagnostic.code,
    };
  }

  /**
   * Converts TypeScript diagnostic category to string
   */
  private getCategoryName(category: ts.DiagnosticCategory): 'error' | 'warning' | 'suggestion' | 'message' {
    switch (category) {
      case ts.DiagnosticCategory.Error:
        return 'error';
      case ts.DiagnosticCategory.Warning:
        return 'warning';
      case ts.DiagnosticCategory.Suggestion:
        return 'suggestion';
      case ts.DiagnosticCategory.Message:
        return 'message';
      default:
        return 'error';
    }
  }
}

/**
 * Factory function to create a validator with default options
 */
export function createTypeScriptValidator(options?: ValidationOptions): TypeScriptValidator {
  return new TypeScriptValidator(options);
}

/**
 * Validate TypeScript code with default options
 */
export function validateTypeScriptCode(
  code: string,
  fileName?: string,
  options?: ValidationOptions
): Result<CompilationResult> {
  const validator = createTypeScriptValidator(options);
  return validator.validateTypeScriptCode(code, fileName, options);
}