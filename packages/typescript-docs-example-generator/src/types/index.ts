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

export interface GeneratedExample {
  templateId: string;
  variation?: string;
  code: string;
  metadata: ExampleMetadata;
}

export interface ExampleMetadata {
  generatedAt: Date;
  context: Record<string, unknown>;
  blockStates: Record<string, boolean>;
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

export interface GeneratedOutput {
  examples: Map<string, GeneratedExample>;
  flatHierarchy: Record<string, any>;
  nestedHierarchy: Record<string, any>;
  metrics?: GenerationMetrics;
}

export interface GenerationMetrics {
  totalTemplates: number;
  totalExamples: number;
  processingTime: number;
  errors: ProcessingError[];
}

export interface GenerationReport {
  successful: number;
  failed: number;
  errors: Array<{
    templateId: string;
    error: GeneratorError;
  }>;
  warnings: string[];
  versions: string[];
  totalVariations: number;
}

export interface ExampleCollection {
  examples: Map<string, GeneratedExample>;
  versions: string[];
  totalExamples: number;
  totalVariations: number;
}

export interface VersionStats {
  version: string;
  templatesProcessed: number;
  examplesGenerated: number;
  errors: number;
}

export interface GeneratorError {
  code: string;
  message: string;
  getSuggestion(): string;
}

export interface TypeScriptDiagnostic {
  file?: string;
  line?: number;
  column?: number;
  length?: number;
  messageText: string;
  category: "error" | "warning" | "suggestion" | "message";
  code: number;
}

export interface CompilationResult {
  success: boolean;
  diagnostics: TypeScriptDiagnostic[];
  generatedJs?: string;
}

export interface GenerationSummary {
  successful: number;
  failed: number;
  errors: Array<{ templateId: string; error: GeneratorError }>;
  warnings: string[];
  totalVariations: number;
}
