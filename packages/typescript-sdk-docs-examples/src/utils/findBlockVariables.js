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
 * Find all block variables in a list of variables
 * @param {string[]} variables Array of variable names
 * @returns {string[]} Array of block variables (with # or ^ prefix)
 */
export function findBlockVariables(variables) {
  // Get all variables that start with # or ^
  const blockVars = variables.filter(variable => variable.startsWith("#") || variable.startsWith("^"));
  
  // Return only the block variables that actually exist in the template
  // Don't automatically add inverted variations if they don't exist
  return blockVars;
}