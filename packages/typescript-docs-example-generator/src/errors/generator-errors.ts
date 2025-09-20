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

export abstract class GeneratorError extends Error {
  abstract readonly code: string;
  abstract getSuggestion(): string;
}

export class TemplateVariableError extends GeneratorError {
  readonly code = 'TEMPLATE_VARIABLE_ERROR';

  constructor(
    public readonly templateId: string,
    public readonly variableName: string,
    public readonly reason: string
  ) {
    super(`Template "${templateId}" error: Variable "${variableName}" ${reason}`);
    this.name = 'TemplateVariableError';
  }

  getSuggestion(): string {
    if (this.reason.includes('missing')) {
      return `Add "${this.variableName}" to your context object`;
    }
    if (this.reason.includes('type')) {
      return `Ensure "${this.variableName}" is the correct type`;
    }
    return 'Check your template context configuration';
  }
}

export class TemplateParseError extends GeneratorError {
  readonly code = 'TEMPLATE_PARSE_ERROR';

  constructor(
    public readonly templateId: string,
    public readonly parseError: string,
    public readonly line?: number,
    public readonly column?: number
  ) {
    const location = line && column ? ` at line ${line}, column ${column}` : '';
    super(`Failed to parse template "${templateId}"${location}: ${parseError}`);
    this.name = 'TemplateParseError';
  }

  getSuggestion(): string {
    if (this.parseError.includes('closing')) {
      return 'Check that all blocks are properly closed with {{/blockName}}';
    }
    if (this.parseError.includes('syntax')) {
      return 'Verify Handlebars syntax - use {{variable}} for variables and {{#block}}...{{/block}} for blocks';
    }
    return 'Check template syntax and review Handlebars documentation for correct syntax';
  }
}

export class FileWriteError extends GeneratorError {
  readonly code = 'FILE_WRITE_ERROR';

  constructor(
    public readonly filePath: string,
    public readonly reason: string,
    public readonly cause?: Error | undefined
  ) {
    super(`Failed to write file "${filePath}": ${reason}`);
    this.name = 'FileWriteError';
  }

  getSuggestion(): string {
    if (this.reason.includes('permission')) {
      return 'Check file permissions and ensure the directory is writable';
    }
    if (this.reason.includes('exist')) {
      return 'Ensure the parent directory exists';
    }
    return 'Check disk space and file system permissions';
  }
}

export class ConfigurationError extends GeneratorError {
  readonly code = 'CONFIGURATION_ERROR';

  constructor(
    public readonly configKey: string,
    public readonly issue: string
  ) {
    super(`Configuration error for "${configKey}": ${issue}`);
    this.name = 'ConfigurationError';
  }

  getSuggestion(): string {
    return `Review your configuration and ensure "${this.configKey}" is properly set`;
  }
}

export class TemplateNotFoundError extends GeneratorError {
  readonly code = 'TEMPLATE_NOT_FOUND';

  constructor(
    public readonly templateName: string,
    public readonly searchedLocations: string[]
  ) {
    super(`Template "${templateName}" not found. Searched in: ${searchedLocations.join(', ')}`);
    this.name = 'TemplateNotFoundError';
  }

  getSuggestion(): string {
    return 'Ensure the template exists and the name is spelled correctly';
  }
}

export class ValidationError extends GeneratorError {
  readonly code = 'VALIDATION_ERROR';

  constructor(
    public readonly validationErrors: Array<{
      field: string;
      message: string;
    }>
  ) {
    const errorList = validationErrors
      .map(e => `  - ${e.field}: ${e.message}`)
      .join('\n');
    super(`Validation failed:\n${errorList}`);
    this.name = 'ValidationError';
  }

  getSuggestion(): string {
    return 'Fix the validation errors listed above';
  }
}

/**
 * Helper to create error results
 */
export function toErrorResult(error: unknown): { success: false; error: GeneratorError } {
  if (error instanceof GeneratorError) {
    return { success: false, error };
  }
  
  // Wrap unknown errors
  const message = error instanceof Error ? error.message : String(error);
  const wrappedError = new class extends GeneratorError {
    readonly code = 'UNKNOWN_ERROR';
    getSuggestion() {
      return 'Check the error message for details';
    }
  }(message);
  
  return { success: false, error: wrappedError };
}