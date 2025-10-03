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

import Mustache from "mustache";
import { toErrorResult } from "../errors/generator-errors.js";
import type { BaseTemplateContext } from "../types/context.js";
import type { Result } from "../types/index.js";

// Cache compiled templates to avoid recompilation
const templateCache = new Map<string, string>();

export interface ProcessTemplateOptions {
  /** Template identifier for better error messages */
  templateId?: string;
  /** Whether to use template caching */
  useCache?: boolean;
  /** Whether to validate context before processing */
  validateContext?: boolean;
}

/**
 * Process a template with the given context using Result type for error handling
 */
export function processTemplateV2(
  template: string,
  context: BaseTemplateContext,
  options: ProcessTemplateOptions = {},
): Result<string> {
  const { templateId = "unknown", useCache = true } = options;

  try {
    // Process the template with Mustache
    const result = Mustache.render(template, context);

    return { success: true, value: result };
  } catch (error) {
    return toErrorResult(error);
  }
}

/**
 * Batch process multiple templates
 */
export function batchProcessTemplates(
  templates: Array<{
    id: string;
    content: string;
    context: BaseTemplateContext;
    options?: ProcessTemplateOptions;
  }>,
): Result<Map<string, string>> {
  const results = new Map<string, string>();
  const errors: Array<{ id: string; error: any }> = [];

  // Process templates synchronously
  for (const { id, content, context, options } of templates) {
    const result = processTemplateV2(content, context, {
      ...options,
      templateId: id,
    });
    if (result.success) {
      results.set(id, result.value);
    } else {
      errors.push({ id, error: result.error });
    }
  }

  if (errors.length > 0) {
    const errorMessage = errors
      .map(e => `${e.id}: ${e.error.message}`)
      .join("\n");
    return toErrorResult(
      new Error(`Failed to process templates:\n${errorMessage}`),
    );
  }

  return { success: true, value: results };
}
