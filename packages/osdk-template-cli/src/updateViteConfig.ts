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
  // Check if resolve section already exists
  if (viteConfigFile.includes("resolve:")) {
    return viteConfigFile; // Already has resolve, don't modify
  }

  // Find the position to insert the resolve section
  const startToken = "defineConfig({";
  const defineConfig = viteConfigFile.indexOf(startToken);
  if (defineConfig === -1) return viteConfigFile; // Can't find where to insert

  // Split the string at the insertion point
  const firstPart = viteConfigFile.substring(
    0,
    defineConfig + startToken.length,
  );
  const lastPart = viteConfigFile.substring(defineConfig + startToken.length);

  // Insert the exact resolve section
  const resolveSection = `
  resolve: { alias: { "${osdkPackage}": path.resolve(__dirname, 'node_modules/@{{APPLICATION_PACKAGE_NAME}}/sdk') }, },`;

  return firstPart + resolveSection + lastPart;
}
