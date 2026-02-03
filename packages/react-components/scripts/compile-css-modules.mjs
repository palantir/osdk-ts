#!/usr/bin/env node
// @ts-check
import { readFile, writeFile, readdir, mkdir, copyFile } from "node:fs/promises";
import { resolve, join, relative, dirname, basename } from "node:path";
import postcss from "postcss";
import postcssModules from "postcss-modules";
import autoprefixer from "autoprefixer";

const srcDir = resolve("src");
const buildDirs = ["build/browser", "build/esm", "build/cjs"];

// Map to store class name mappings for JS file updates
const classNameMappings = new Map();

// Collect all CSS module files
async function collectCSSFiles(dir) {
  const cssFiles = [];
  
  async function scanDir(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await scanDir(fullPath);
      } else if (entry.name.endsWith(".module.css")) {
        cssFiles.push(fullPath);
      }
    }
  }
  
  await scanDir(dir);
  return cssFiles;
}

// Process CSS modules and convert to regular CSS with prefixed class names
async function processCSSModules() {
  console.log("Processing CSS modules...");
  
  const cssFiles = await collectCSSFiles(srcDir);
  
  for (const cssFile of cssFiles) {
    const css = await readFile(cssFile, "utf-8");
    const relativePath = relative(srcDir, cssFile);
    
    // Component identifier for unique class names
    const componentId = relativePath
      .replace(/[\/\\]/g, "-")
      .replace(".module.css", "")
      .replace(/\./g, "-");
    
    let processedCSS = css;
    const localClassNames = new Map();
    
    // Process CSS modules
    const result = await postcss([
      postcssModules({
        getJSON: (cssFileName, json) => {
          // Store mappings for this file
          const mappings = {};
          for (const [localName, globalName] of Object.entries(json)) {
            // Create Blueprint-style class names
            const prefixedName = `osdk-${componentId}-${localName}`;
            mappings[localName] = prefixedName;
            localClassNames.set(localName, prefixedName);
          }
          classNameMappings.set(relativePath, mappings);
        },
        generateScopedName: (name) => {
          return `osdk-${componentId}-${name}`;
        },
      }),
      autoprefixer(),
    ]).process(css, { from: cssFile });
    
    processedCSS = result.css;
    
    // Write processed CSS to build directories
    for (const buildDir of buildDirs) {
      const outputPath = join(buildDir, relativePath).replace(".module.css", ".css");
      
      try {
        await mkdir(dirname(outputPath), { recursive: true });
        await writeFile(outputPath, processedCSS);
        console.log(`✓ Processed CSS: ${outputPath}`);
        
        // Also create a JS module that exports the class names
        const jsModulePath = outputPath.replace(".css", ".module.css");
        const jsModuleContent = `/* Auto-generated CSS module exports */
export default ${JSON.stringify(classNameMappings.get(relativePath), null, 2)};
`;
        await writeFile(jsModulePath, jsModuleContent);
        console.log(`✓ Created CSS module exports: ${jsModulePath}`);
      } catch (error) {
        console.warn(`Skipping ${outputPath} - ${error.message}`);
      }
    }
  }
  
  // Create a single bundled CSS file
  await createBundledCSS(cssFiles);
  
  // Copy the main index.css
  const mainIndexCss = join(srcDir, "index.css");
  for (const buildDir of buildDirs) {
    try {
      await copyFile(mainIndexCss, join(buildDir, "index.css"));
    } catch (error) {
      // Index.css might not exist, that's okay
    }
  }
}

// Create a single bundled CSS file like Blueprint
async function createBundledCSS(cssFiles) {
  console.log("\nCreating bundled CSS file...");
  
  let bundledCSS = `/* OSDK React Components - Bundled Styles
 * This file contains all component styles with scoped class names.
 * 
 * Import this file in your application:
 * import '@osdk/react-components/osdk-react-components.css';
 */\n\n`;
  
  // Add normalize.css if needed
  bundledCSS += `/* Base styles */\n`;
  bundledCSS += `* { box-sizing: border-box; }\n\n`;
  
  // Process and bundle all CSS files
  for (const cssFile of cssFiles) {
    const css = await readFile(cssFile, "utf-8");
    const relativePath = relative(srcDir, cssFile);
    const componentId = relativePath
      .replace(/[\/\\]/g, "-")
      .replace(".module.css", "")
      .replace(/\./g, "-");
    
    // Process with CSS modules
    const result = await postcss([
      postcssModules({
        generateScopedName: (name) => `osdk-${componentId}-${name}`,
      }),
      autoprefixer(),
    ]).process(css, { from: cssFile });
    
    bundledCSS += `\n/* Component: ${relativePath} */\n`;
    bundledCSS += result.css;
    bundledCSS += "\n";
  }
  
  // Write bundled CSS to all build directories
  for (const buildDir of buildDirs) {
    const bundledPath = join(buildDir, "osdk-react-components.css");
    
    try {
      await writeFile(bundledPath, bundledCSS);
      console.log(`✓ Created bundled CSS: ${bundledPath}`);
    } catch (error) {
      console.warn(`Skipping ${bundledPath} - ${error.message}`);
    }
  }
}

// Run the processing
processCSSModules().catch(console.error);