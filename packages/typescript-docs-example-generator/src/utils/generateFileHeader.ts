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

/**
 * Generates a standardized file header for generated files
 *
 * @param snippetKey Optional snippet key/name for individual example files
 * @param description Optional description - used as JSDoc comment if snippetKey is not provided, or as variation detail if snippetKey is provided
 * @returns The formatted file header
 */
export function generateFileHeader(
  snippetKey?: string,
  description?: string,
): string {
  const commentStyle = snippetKey ? "/**" : "/*";
  const commentEnd = snippetKey ? " */" : " */";
  const descriptionText = description ? ` (${description})` : "";

  return `${commentStyle}
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
 *
 * WARNING: This file is generated automatically by the generateExamples.ts script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
${commentEnd}

${snippetKey ? `// Example: ${snippetKey}${descriptionText}\n` : ""}${
    !snippetKey && description ? `/**\n * ${description}\n */\n` : ""
  }`;
}
