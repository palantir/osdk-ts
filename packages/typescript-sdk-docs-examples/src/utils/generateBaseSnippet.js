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

import fs from "fs/promises";
import path from "path";
import { generateFileHeader } from "./generateFileHeader.js";
import { processTemplate } from "./processTemplate.js";

/**
 * Generate the base example file with all blocks processed according to context
 * @param {string} template The template string
 * @param {string} snippetKey The snippet key
 * @param {Object} context The context for template processing
 * @param {string} version The version number
 * @param {string} outputDir The directory to output files to
 */
export async function generateBaseSnippet(
  template, 
  snippetKey, 
  context, 
  version,
  outputDir
) {
  // Process the template with the full context
  const processedCode = processTemplate(template, context);
  
  // Create file content with header
  const fileContent = `${generateFileHeader(snippetKey, "Base version with all blocks processed")}
${processedCode}`;
  
  // Write to file
  const filePath = path.join(outputDir, "typescript", version, `${snippetKey}.ts`);
  await fs.writeFile(filePath, fileContent);
  
  // Log message can be enabled in production but disabled in tests
  // eslint-disable-next-line no-console
  console.log(`✓ Generated base example for ${snippetKey}`);
}