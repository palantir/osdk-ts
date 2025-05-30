/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

export function removeEnvPatternsFromGitignore(
  gitignoreContent: string,
): string {
  // Split the content into lines
  const lines = gitignoreContent.split("\n");

  // Filter out lines that match .env.* patterns
  const filteredLines = lines.filter(line => {
    // Trim the line to handle whitespace
    const trimmedLine = line.trim();

    // Skip empty lines and comments
    if (!trimmedLine || trimmedLine.startsWith("#")) {
      return true;
    }

    // Check if the line is a pattern that would match .env.* files
    return !(
      trimmedLine === ".env.*"
      || trimmedLine === "*.env.*"
      || trimmedLine === ".env*"
      // Check for more specific .env.* patterns
      || /^\.env\.[a-zA-Z0-9_-]+$/.test(trimmedLine)
    );
  });

  // Join the filtered lines back together
  return filteredLines.join("\n");
}
