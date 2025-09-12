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

import Handlebars from "handlebars";

/**
 * Process a template using Handlebars
 * @param {string} template The template string
 * @param {Object} context The context object with template variables
 * @returns {string} The processed template
 */
export function processTemplate(template, context) {
  try {
    // Fix spacing issues in package imports before processing
    // This addresses the issue where the typescript-sdk-docs package has spaces around the curly braces in imports
    // e.g.: "import { Timestamp } from \"{ {{packageName}} }\";"
    const fixedTemplate = template.replace(/\{\s+\{\{packageName\}\}\s+\}/g, "{{packageName}}");
    
    // Compile and execute the template with the provided context
    const compiledTemplate = Handlebars.compile(fixedTemplate);
    return compiledTemplate(context);
  } catch (error) {
    // Instead of console.log, throw an error that can be caught by caller
    throw new Error(`Error processing template: ${error.message}`);
  }
}