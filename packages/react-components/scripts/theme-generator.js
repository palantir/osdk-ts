// Copyright 2015 Palantir Technologies, Inc. All rights reserved.
// Licensed under the Apache License, Version 2.0.

import fs from 'fs';
import path from 'path';

/**
 * Parse SCSS file and extract variables (handles multi-line values)
 * @param {string} scss - SCSS content
 * @param {string} prefix - Variable prefix to match (e.g., '$pt-', '$pt-dark-', '$')
 * @param {boolean} excludeDark - Whether to exclude -dark- variants (only for pt- prefix)
 * @returns {Map<string, string>} Map of variable names to values
 */
function extractVariables(scss, prefix, excludeDark = false) {
  const variables = new Map();

  // Create regex pattern based on prefix
  let pattern;
  if (prefix === '$pt-' && excludeDark) {
    // Match $pt- but not $pt-dark-
    // Note: Using [^;\n] to avoid matching across lines
    pattern = /\$pt-(?!dark-)([^:]+):\s*([^;\n]+);/g;
  } else if (prefix === '$pt-dark-') {
    // Match $pt-dark-
    pattern = /\$pt-dark-([^:]+):\s*([^;\n]+);/g;
  } else {
    // Match basic color primitives like $blue1, $light-gray5, etc.
    pattern = /\$([a-z][a-z0-9-]*?):\s*([^;\n]+);/g;
  }

  let match;
  while ((match = pattern.exec(scss)) !== null) {
    const [, name, value] = match;
    if (name && value) {
      // Clean up the value: remove !default, trim whitespace, normalize multi-line
      let cleanValue = value
        .replace(/\s*!default\s*$/, '')
        .trim()
        .replace(/\s+/g, ' ') // Normalize whitespace
        .replace(/\s*\n\s*/g, ' '); // Remove line breaks

      variables.set(name.trim(), cleanValue);
    }
  }

  return variables;
}

/**
 * Resolve SCSS variable references recursively
 * @param {string} value - Variable value (may contain $references)
 * @param {Map} allVars - All available variables
 * @param {Set} visited - Track visited variables to prevent infinite loops
 * @returns {string} Resolved value
 */
function resolveReferences(value, allVars, visited = new Set()) {
  // Match $variable-name patterns
  const refPattern = /\$([a-zA-Z0-9-]+)/g;
  let resolved = value;
  let hasReferences = false;

  const matches = [...value.matchAll(refPattern)];
  for (const match of matches) {
    const refName = match[1];
    if (visited.has(refName)) {
      // Circular reference detected, stop resolving
      continue;
    }
    if (allVars.has(refName)) {
      hasReferences = true;
      visited.add(refName);
      const refValue = allVars.get(refName);
      // Recursively resolve nested references
      const resolvedRef = resolveReferences(refValue, allVars, visited);
      resolved = resolved.replace(match[0], resolvedRef);
      visited.delete(refName);
    }
  }

  return resolved;
}

/**
 * Generate CSS theme from SCSS tokenization folder
 * @param {string} tokenizationPath - Path to tokenization folder
 * @returns {string} Generated CSS
 */
function generateTheme(tokenizationPath) {
  // Read SCSS files
  const variablesPath = path.join(tokenizationPath, '_variables.scss');
  const aliasesPath = path.join(tokenizationPath, '_color-aliases.scss');
  const colorsPath = path.join(tokenizationPath, '_colors.scss');

  if (!fs.existsSync(variablesPath)) {
    throw new Error(`_variables.scss not found in ${tokenizationPath}`);
  }

  let scss = '';

  // Read in order: colors first (primitives), then aliases, then variables
  if (fs.existsSync(colorsPath)) {
    scss += fs.readFileSync(colorsPath, 'utf-8') + '\n';
  }
  if (fs.existsSync(aliasesPath)) {
    scss += fs.readFileSync(aliasesPath, 'utf-8') + '\n';
  }
  scss += fs.readFileSync(variablesPath, 'utf-8');

  // Extract all primitive variables first (colors, no $pt- prefix)
  // Match variables like: $blue1: #002A7C !default;
  const colorPrimitives = extractVariables(scss, '$');

  // Extract pt-prefixed variables (excluding dark variants)
  const lightVars = extractVariables(scss, '$pt-', true);

  // Extract dark mode variables ($pt-dark-*)
  const darkVarsRaw = extractVariables(scss, '$pt-dark-');

  // Combine all variables for reference resolution
  const allVars = new Map([...colorPrimitives, ...lightVars, ...darkVarsRaw]);

  // Resolve references and generate CSS
  const timestamp = new Date().toISOString();
  let css = `/**\n * Custom Theme\n * Generated from: ${tokenizationPath}\n * Generated at: ${timestamp}\n */\n\n`;

  // Light mode (:root)
  css += '/* Light Mode */\n:root {\n';
  const sortedLightVars = Array.from(lightVars.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  for (const [name, value] of sortedLightVars) {
    // Skip null values
    if (value === 'null') {
      continue;
    }
    // Skip values that contain newlines or comments (likely malformed)
    if (value.includes('\n') || value.includes('//')) {
      continue;
    }
    try {
      const resolved = resolveReferences(value, allVars);
      // Skip if resolved to null
      if (resolved === 'null') {
        continue;
      }
      // Skip if resolution still contains $ (unresolved reference)
      if (resolved.includes('$')) {
        continue;
      }
      css += `  --pt-${name}: ${resolved};\n`;
    } catch (error) {
      // Skip on error
      continue;
    }
  }
  css += '}\n\n';

  // Dark mode (.dark)
  css += '/* Dark Mode */\n.dark {\n';
  const sortedLightKeys = Array.from(lightVars.keys()).sort();
  for (const name of sortedLightKeys) {
    try {
      // Check if dark variant exists
      if (darkVarsRaw.has(name)) {
        const darkValue = darkVarsRaw.get(name);
        // Skip null values
        if (darkValue === 'null') {
          continue;
        }
        // Skip malformed values
        if (darkValue.includes('\n') || darkValue.includes('//')) {
          continue;
        }
        const resolved = resolveReferences(darkValue, allVars);
        // Skip if resolved to null or has unresolved refs
        if (resolved === 'null' || resolved.includes('$')) {
          continue;
        }
        css += `  --pt-${name}: ${resolved};\n`;
      } else {
        const lightValue = lightVars.get(name);
        // Skip null values
        if (lightValue === 'null') {
          continue;
        }
        // Skip malformed values
        if (lightValue.includes('\n') || lightValue.includes('//')) {
          continue;
        }
        // No dark variant, use light value
        const resolved = resolveReferences(lightValue, allVars);
        // Skip if resolved to null or has unresolved refs
        if (resolved === 'null' || resolved.includes('$')) {
          continue;
        }
        css += `  --pt-${name}: ${resolved};\n`;
      }
    } catch (error) {
      // Just skip on error
      continue;
    }
  }
  css += '}\n';

  // Final cleanup: remove any lines that contain SCSS syntax or malformed CSS
  const lines = css.split('\n');
  const cleanedLines = lines.filter(line => {
    const trimmed = line.trim();

    // Keep empty lines, comments, and CSS selectors
    if (!trimmed || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed === '*/') {
      return true;
    }
    if (line.includes(':root') || line.includes('.dark') || trimmed === '}') {
      return true;
    }

    // Skip lines with SCSS syntax
    if (line.includes('$') || line.includes('!default') || trimmed.startsWith('//')) {
      return false;
    }

    // For CSS variable declarations, validate they're well-formed
    if (line.includes('--pt-')) {
      // Valid CSS variable should be: --pt-name: value;
      // Must have colon, semicolon, and shouldn't end with comma or paren
      if (!trimmed.includes(':') || !trimmed.endsWith(';')) {
        return false;
      }
      // Skip lines that look like partial values (ending with comma, paren, etc before semicolon)
      if (trimmed.match(/[,\(\)]\s*;?\s*$/)) {
        return false;
      }
      return true;
    }

    // Skip everything else
    return false;
  });

  return cleanedLines.join('\n');
}

export { generateTheme, extractVariables, resolveReferences };
