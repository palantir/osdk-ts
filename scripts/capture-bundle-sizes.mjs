#!/usr/bin/env node

/**
 * Captures bundle sizes for CJS bundles (which are actually bundled by tsup).
 * Tracks raw and gzipped sizes to catch bloat from accidentally bundled dependencies.
 *
 * Outputs a JSON file with size information for later comparison in CI.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { gzipSync } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Key packages to track (public SDK packages that produce CJS bundles)
const PACKAGES_TO_TRACK = [
  "api",
  "client",
  "client.unstable",
  "react",
  "cli",
  "oauth",
  "functions",
  "maker",
  "widget.api",
  "widget.client",
  "widget.client-react",
];

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return null;
  }
}

function getGzippedSize(filePath) {
  try {
    const content = fs.readFileSync(filePath);
    const gzipped = gzipSync(content, { level: 9 });
    return gzipped.length;
  } catch (error) {
    return null;
  }
}

function formatBytes(bytes) {
  if (bytes === null) return "N/A";
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function getAllCjsFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllCjsFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".cjs")) {
      const relativePath = path.relative(dir, fullPath);
      files.push({ path: relativePath, fullPath });
    }
  }
  return files;
}

function capturePackageSizes(packageName) {
  const packageDir = path.join(__dirname, "..", "packages", packageName);
  const cjsBuildDir = path.join(packageDir, "build", "cjs");

  if (!fs.existsSync(cjsBuildDir)) {
    return null;
  }

  const result = {
    package: `@osdk/${packageName}`,
    cjsBundles: {},
    totalRaw: 0,
    totalGzip: 0,
  };

  // Get all CJS files
  const cjsFiles = getAllCjsFiles(cjsBuildDir);

  if (cjsFiles.length === 0) {
    return null;
  }

  for (const { path: relativePath, fullPath } of cjsFiles) {
    const rawSize = getFileSize(fullPath);
    const gzipSize = getGzippedSize(fullPath);

    if (rawSize !== null && gzipSize !== null) {
      result.cjsBundles[relativePath] = {
        rawSize,
        gzipSize,
      };
      result.totalRaw += rawSize;
      result.totalGzip += gzipSize;
    }
  }

  return Object.keys(result.cjsBundles).length > 0 ? result : null;
}

function calculateTotals(results) {
  let totalRaw = 0;
  let totalGzip = 0;

  for (const pkg of Object.values(results.packages)) {
    totalRaw += pkg.totalRaw;
    totalGzip += pkg.totalGzip;
  }

  return { totalRaw, totalGzip };
}

function main() {
  console.log("📦 Capturing CJS bundle sizes (raw + gzipped)...\n");

  const results = {
    timestamp: new Date().toISOString(),
    commit: process.env.GITHUB_SHA || "unknown",
    branch: process.env.GITHUB_REF_NAME || "unknown",
    packages: {},
  };

  for (const packageName of PACKAGES_TO_TRACK) {
    console.log(`  Analyzing @osdk/${packageName}...`);
    const packageSizes = capturePackageSizes(packageName);

    if (packageSizes) {
      results.packages[packageName] = packageSizes;

      // Show key entry points
      const mainBundle = packageSizes.cjsBundles["index.cjs"];
      if (mainBundle) {
        console.log(
          `    index.cjs:        ${formatBytes(mainBundle.rawSize).padEnd(10)} → ${formatBytes(mainBundle.gzipSize)} (gzip)`
        );
      }

      // Show public exports (these can get bloated)
      const publicBundles = Object.entries(packageSizes.cjsBundles)
        .filter(([path]) => path.startsWith("public/"))
        .sort((a, b) => b[1].rawSize - a[1].rawSize); // Sort by size descending

      for (const [bundlePath, data] of publicBundles.slice(0, 3)) {
        // Show top 3
        console.log(
          `    ${bundlePath.padEnd(18)}: ${formatBytes(data.rawSize).padEnd(10)} → ${formatBytes(data.gzipSize)} (gzip)`
        );
      }

      if (publicBundles.length > 3) {
        console.log(`    ... and ${publicBundles.length - 3} more bundles`);
      }

      console.log(
        `    📊 Total: ${formatBytes(packageSizes.totalRaw)} → ${formatBytes(packageSizes.totalGzip)} (gzip)\n`
      );
    } else {
      console.log(`    ⚠ No CJS build output found\n`);
    }
  }

  // Calculate totals
  const totals = calculateTotals(results);
  results.summary = {
    totalRaw: totals.totalRaw,
    totalGzip: totals.totalGzip,
    packageCount: Object.keys(results.packages).length,
  };

  // Write results
  const outputPath = path.join(__dirname, "..", "bundle-sizes.json");
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`✅ Bundle sizes captured: ${outputPath}`);
  console.log(
    `   Total size: ${formatBytes(totals.totalRaw)} → ${formatBytes(totals.totalGzip)} (gzip)`
  );
  console.log(`   Packages tracked: ${results.summary.packageCount}\n`);

  return results;
}

main();
