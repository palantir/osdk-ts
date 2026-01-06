#!/usr/bin/env node
// Copyright 2015 Palantir Technologies, Inc. All rights reserved.
// Licensed under the Apache License, Version 2.0.

import { generateTheme } from '../scripts/theme-generator.js';
import fs from 'fs';
import path from 'path';

// Parse CLI arguments
const args = process.argv.slice(2);
let tokenizationPath, outputPath;

if (args.length === 0) {
  console.error('Usage: npx osdk-generate-theme <tokenization-folder> [--output <output-file>]');
  console.error('');
  console.error('Examples:');
  console.error('  npx osdk-generate-theme ./design-tokens/');
  console.error('  npx osdk-generate-theme ./design-tokens/ --output ./src/my-theme.css');
  process.exit(1);
}

if (args.includes('--output')) {
  const outputIndex = args.indexOf('--output');
  outputPath = args[outputIndex + 1];
  tokenizationPath = args[outputIndex - 1] || args[0];
} else {
  tokenizationPath = args[0];
}

if (!tokenizationPath) {
  console.error('Error: No tokenization folder specified');
  console.error('Usage: npx osdk-generate-theme <tokenization-folder> [--output <output-file>]');
  process.exit(1);
}

// Resolve absolute path
tokenizationPath = path.resolve(process.cwd(), tokenizationPath);

// Generate theme
try {
  console.log(`Generating theme from: ${tokenizationPath}`);
  const css = generateTheme(tokenizationPath);

  if (outputPath) {
    const resolvedOutputPath = path.resolve(process.cwd(), outputPath);
    const outputDir = path.dirname(resolvedOutputPath);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(resolvedOutputPath, css);
    console.log(`✓ Theme generated successfully: ${resolvedOutputPath}`);
  } else {
    console.log(css);
  }
} catch (error) {
  console.error('Error generating theme:', error.message);
  if (error.stack) {
    console.error(error.stack);
  }
  process.exit(1);
}
