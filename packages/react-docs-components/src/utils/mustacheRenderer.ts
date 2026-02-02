/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

/**
 * Render a Mustache template with the provided variables and computed variables
 */
export function renderMustacheTemplate(
  template: string,
  variables: Record<string, unknown>,
  computedVariables: Record<string, unknown>,
): string {
  try {
    // Merge variables and computed variables
    const context = {
      ...variables,
      ...computedVariables,
    };

    // Render the template
    const rendered = Mustache.render(template, context);
    return rendered;
  } catch (error) {
    return `Error rendering template: ${error instanceof Error ? error.message : String(error)}`;
  }
}
