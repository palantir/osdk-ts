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


import fs from "fs";
import path from "path";
import * as sass from "sass";

/**
 * Generate CSS theme from SCSS tokenization folder using Dart Sass compiler
 *
 * This approach:
 * 1. Reads SCSS files to extract variable names using simple regex
 * 2. Generates SCSS template that outputs variables as CSS custom properties
 * 3. Uses Dart Sass compiler to properly resolve all SCSS logic (imports, functions, etc.)
 * 4. Returns clean CSS with all variables resolved
 *
 * @param {string} tokenizationPath - Path to tokenization folder
 * @returns {string} Generated CSS
 */
function generateTheme(tokenizationPath) {
  const variablesPath = path.join(tokenizationPath, "_variables.scss");

  if (!fs.existsSync(variablesPath)) {
    throw new Error(`_variables.scss not found in ${tokenizationPath}`);
  }

  // Read all SCSS files to extract variable names
  const allScss = readAllScssFiles(tokenizationPath);

  // Extract variable names using regex (just the names, not values)
  const lightVarNames = extractVariableNames(
    allScss,
    /\$pt-(?!dark-)([a-zA-Z0-9-]+):/g,
  );
  const darkVarNames = extractVariableNames(
    allScss,
    /\$pt-dark-([a-zA-Z0-9-]+):/g,
  );

  // Generate SCSS template that will output these as CSS variables
  // The #{...} syntax tells Sass to interpolate the variable value
  // Import in the correct order as defined in index.scss
  const scssTemplate = `
@import "colors";
@import "flex";
@import "variables";
@import "color-aliases";
@import "mixins";
@import "variables-extended";

/* Light Mode */
:root {
${lightVarNames.map(name => `  --pt-${name}: #{$pt-${name}};`).join("\n")}
}

/* Dark Mode */
.dark {
${
    lightVarNames.map(name => {
      // Check if dark variant exists, otherwise use light value
      if (darkVarNames.includes(name)) {
        return `  --pt-${name}: #{$pt-dark-${name}};`;
      } else {
        return `  --pt-${name}: #{$pt-${name}};`;
      }
    }).join("\n")
  }
}
`;

  // Compile SCSS to CSS using Dart Sass
  // This properly handles all SCSS features: imports, functions, calculations, etc.
  try {
    const result = sass.compileString(scssTemplate, {
      loadPaths: [tokenizationPath],
      style: "expanded",
      logger: sass.Logger.silent, // Suppress deprecation warnings
    });

    // Add header comment
    const timestamp = new Date().toISOString();
    const header = `/**
 * Custom Theme
 * Generated from: ${tokenizationPath}
 * Generated at: ${timestamp}
 */

`;

    // Clean up the output: remove lines with "null" or unresolved variables
    const cleanedCss = cleanupGeneratedCss(result.css);

    return header + cleanedCss;
  } catch (error) {
    // If Sass compilation fails, provide helpful error message
    const errorMessage = error.span?.context
      ? `${error.message}\n\nContext:\n${error.span.context}`
      : error.message;

    throw new Error(
      `SCSS compilation failed: ${errorMessage}\n\nThis usually means there are forward references in your SCSS files. Variables must be defined before they are used.\n\nTo fix this, restructure your SCSS files so that:\n1. _colors.scss contains only color primitives\n2. _color-aliases.scss contains semantic color mappings (and any variables it references)\n3. _variables.scss contains remaining variables\n\nMake sure each file only references variables defined earlier in the import chain.`,
    );
  }
}

/**
 * Read all SCSS files in the tokenization folder
 * @param {string} tokenizationPath - Path to tokenization folder
 * @returns {string} Combined SCSS content
 */
function readAllScssFiles(tokenizationPath) {
  const files = [
    "_colors.scss",
    "_color-aliases.scss",
    "_variables.scss",
    "_variables-extended.scss",
  ];

  let scss = "";
  for (const file of files) {
    const filePath = path.join(tokenizationPath, file);
    if (fs.existsSync(filePath)) {
      scss += fs.readFileSync(filePath, "utf-8") + "\n";
    }
  }

  return scss;
}

/**
 * Extract variable names from SCSS using regex
 *
 * This only extracts the names, not the values. The Sass compiler
 * will resolve the actual values, including all SCSS logic.
 *
 * @param {string} scss - SCSS content
 * @param {RegExp} pattern - Regex pattern to match variable declarations
 * @returns {string[]} Array of variable names (without $ prefix)
 */
function extractVariableNames(scss, pattern) {
  const names = new Set();

  // Split into lines and filter out comments
  const lines = scss.split("\n");
  const activeLines = lines.filter(line => {
    const trimmed = line.trim();
    // Skip empty lines and comment lines
    return trimmed && !trimmed.startsWith("//");
  });

  const filteredScss = activeLines.join("\n");

  let match;
  while ((match = pattern.exec(filteredScss)) != null) {
    if (match[1]) {
      names.add(match[1]);
    }
  }
  return Array.from(names).sort();
}

/**
 * Clean up generated CSS by removing lines with null values or malformed content
 * @param {string} css - Generated CSS
 * @returns {string} Cleaned CSS
 */
function cleanupGeneratedCss(css) {
  const lines = css.split("\n");
  const cleanedLines = lines.filter(line => {
    const trimmed = line.trim();

    // Keep comments, selectors, braces, empty lines
    if (
      !trimmed || trimmed.startsWith("/*") || trimmed.startsWith("*")
      || trimmed === "*/" || line.includes(":root") || line.includes(".dark")
      || trimmed === "}" || trimmed === "{"
    ) {
      return true;
    }

    // Skip lines with null values (variables that weren't defined)
    if (trimmed.includes(": null;")) {
      return false;
    }

    // Skip lines that still contain SCSS variables (shouldn't happen with proper compilation)
    if (trimmed.includes("$")) {
      return false;
    }

    // Keep all other lines (should be valid CSS variable declarations)
    return true;
  });

  return cleanedLines.join("\n");
}

export { extractVariableNames, generateTheme };
