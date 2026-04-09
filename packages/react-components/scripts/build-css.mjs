#!/usr/bin/env node
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

/* eslint-disable no-console */

import { promises as fs } from "fs";
import path from "path";
import postcss from "postcss";
import postcssImport from "postcss-import";
import postcssModules from "postcss-modules";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(__dirname, "..", "build", "browser");
const srcDir = path.join(__dirname, "..", "src");

async function findCssModules(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return findCssModules(fullPath);
    } else if (entry.name.endsWith(".module.css")) {
      return fullPath;
    }
    return null;
  }));
  return files.flat().filter(Boolean);
}

async function findJsFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return findJsFiles(fullPath);
    } else if (
      entry.name.endsWith(".js") && !entry.name.endsWith(".test.js")
      && !entry.name.endsWith(".module.css.js")
    ) {
      return fullPath;
    }
    return null;
  }));
  return files.flat().filter(Boolean);
}

async function rewriteCssImports() {
  const jsFiles = await findJsFiles(buildDir);

  for (const jsFile of jsFiles) {
    let content = await fs.readFile(jsFile, "utf8");

    // Replace CSS module imports to point to .js files
    const updatedContent = content.replace(
      /from\s+["']([^"']+\.module\.css)["']/g,
      "from \"$1.js\"",
    );

    if (content !== updatedContent) {
      await fs.writeFile(jsFile, updatedContent, "utf8");
    }
  }
}

async function buildTokenCss() {
  const tokensEntry = path.join(srcDir, "tokens.css");
  const content = await fs.readFile(tokensEntry, "utf8");
  const result = await postcss([postcssImport()]).process(content, {
    from: tokensEntry,
  });
  return result.css;
}

async function processCssModules() {
  // Build token CSS from src/tokens.css (resolves all @import chains)
  const tokenCss = await buildTokenCss();

  // Process component CSS modules
  const cssFiles = await findCssModules(buildDir);
  let componentCss = "/* @osdk/react-components - Component styles */\n\n";

  for (const cssFile of cssFiles) {
    const content = await fs.readFile(cssFile, "utf8");
    const relativePath = path.relative(buildDir, cssFile);

    let exportedClasses = {};
    const result = await postcss([
      postcssModules({
        generateScopedName: "[name]__[local]___[hash:base64:8]",
        getJSON(cssFileName, json) {
          exportedClasses = json;
        },
      }),
    ]).process(content, { from: cssFile });

    // Write JS proxy file
    const jsContent = `// CSS Module proxy for ${path.basename(cssFile)}
const styles = ${JSON.stringify(exportedClasses, null, 2)};

export default styles;
`;
    await fs.writeFile(cssFile + ".js", jsContent, "utf8");

    // Add to combined CSS
    componentCss += `/* ${relativePath} */\n${result.css}\n\n`;
  }

  // Write combined styles.css with CSS layers
  const combinedCss =
    `/* @osdk/react-components - Combined styles with design tokens */

@layer osdk.tokens, osdk.components;

@layer osdk.tokens {
${tokenCss}
}

@layer osdk.components {
${componentCss}
}
`;

  await fs.writeFile(path.join(buildDir, "styles.css"), combinedCss, "utf8");

  // Write standalone tokens.css for users who only want design tokens
  await fs.writeFile(path.join(buildDir, "tokens.css"), tokenCss, "utf8");

  // Rewrite imports in JS files
  await rewriteCssImports();

  console.log("✨ CSS build complete");
}

processCssModules().catch(console.error);
