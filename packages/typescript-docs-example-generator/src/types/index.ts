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

export interface TemplateVariable {
  name: string;
  type: "string" | "boolean" | "number" | "object";
  required: boolean;
  defaultValue?: unknown;
}

export interface ParsedTemplate {
  id: string;
  rawContent: string;
  variables: TemplateVariable[];
  blocks: BlockVariable[];
}

export interface BlockVariable {
  name: string;
  isInverted: boolean;
  content: string;
}

export interface ValidationError {
  type: "missing-variable" | "type-mismatch" | "invalid-block";
  message: string;
  template?: string;
  variable?: string;
  expected?: string;
  actual?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export interface TemplateAnalysis {
  variables: TemplateVariable[];
  blocks: BlockVariable[];
  dependencies: string[];
  complexity: number;
}

export type Result<T, E = Error> =
  | { success: true; value: T }
  | { success: false; error: E };

export interface ProcessingError {
  message: string;
  templateId?: string;
  cause?: Error;
}

export interface GenerationReport {
  successful: number;
  failed: number;
  errors: Array<{
    templateId: string;
    error: any; // GeneratorError from errors/generator-errors.ts
  }>;
  warnings: string[];
  versions: string[];
  totalVariations: number;
}

export interface ExampleCollection {
  examples: Map<string, any>; // GeneratedExample - defined locally in generateExamples
  versions: string[];
  totalExamples: number;
  totalVariations: number;
}

export interface GenerationSummary {
  successful: number;
  failed: number;
  errors: Array<{ templateId: string; error: any }>; // GeneratorError
  warnings: string[];
  totalVariations: number;
}
