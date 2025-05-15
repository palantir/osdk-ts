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

export function updateViteConfigTs(
  viteConfigFile: string,
  osdkPackage: string,
): string {
  // Define the alias to check for and add
  const aliasToAdd =
    `"${osdkPackage}": path.resolve(__dirname, 'node_modules/@{{APPLICATION_PACKAGE_NAME}}/sdk')`;

  // Check if resolve section already exists
  const resolveIndex = viteConfigFile.indexOf("resolve:");
  if (resolveIndex !== -1) {
    // Resolve section exists, check if the alias section exists
    const aliasStartIndex = viteConfigFile.indexOf("alias:", resolveIndex);
    if (aliasStartIndex !== -1) {
      // Check if the specific alias already exists within the alias section
      const aliasSectionStart = viteConfigFile.indexOf("{", aliasStartIndex);
      const aliasSectionEnd = viteConfigFile.indexOf("}", aliasSectionStart);
      const aliasSectionContent = viteConfigFile.substring(
        aliasSectionStart + 1,
        aliasSectionEnd,
      );

      // Normalize the alias section content to handle whitespace variations
      const normalize = (str: string) => str.replace(/\s+/g, "").trim();
      if (
        normalize(aliasSectionContent).includes(normalize(`"${osdkPackage}":`))
      ) {
        return viteConfigFile; // Alias already exists, don't modify
      }

      // Alias section exists, but the specific alias does not exist
      // Insert the new alias immediately after the opening brace
      const firstPart = viteConfigFile.substring(0, aliasSectionStart + 1);
      const lastPart = viteConfigFile.substring(aliasSectionStart + 1);
      const aliasInsertion = ` ${aliasToAdd},`;
      return firstPart + aliasInsertion + lastPart;
    } else {
      // Alias section does not exist, add it within the resolve section
      const resolveBraceIndex = viteConfigFile.indexOf("{", resolveIndex);
      if (resolveBraceIndex !== -1) {
        // Insert the alias section after the resolve opening brace
        const firstPart = viteConfigFile.substring(0, resolveBraceIndex + 1);
        const lastPart = viteConfigFile.substring(resolveBraceIndex + 1);
        const aliasSection = `
        alias: {
          ${aliasToAdd},
        },`;
        return firstPart + aliasSection + lastPart;
      }
    }
  }

  // Find the position to insert the resolve section if it doesn't exist
  const startToken = "defineConfig({";
  const defineConfig = viteConfigFile.indexOf(startToken);
  if (defineConfig === -1) return viteConfigFile; // Can't find where to insert

  // Split the string at the insertion point
  const firstPart = viteConfigFile.substring(
    0,
    defineConfig + startToken.length,
  );
  const lastPart = viteConfigFile.substring(defineConfig + startToken.length);

  // Insert the entire resolve section with the alias as the first entry
  const resolveSection = `
  resolve: {
    alias: {
      ${aliasToAdd},
    },
  },`;

  return firstPart + resolveSection + lastPart;
}
