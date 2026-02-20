#!/usr/bin/env node

/**
 * Captures bundle sizes for CJS bundles (which are actually bundled by tsup).
 * Tracks raw and gzipped sizes to catch bloat from accidentally bundled dependencies.
 *
 * Outputs a JSON file with size information for later comparison in CI.
 */

import fs from "fs";
import { createReadStream } from "fs";
import { stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Key packages to track (public SDK packages that produce CJS bundles)
const PACKAGES_TO_TRACK = [
  "api",
  "client",
];

async function getFileSize(filePath) {
  try {
    const stats = await stat(filePath);
    return stats.size;
  } catch (error) {
    return null;
  }
}

async function getGzippedSize(filePath) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const gzip = createGzip({ level: 9 });

    createReadStream(filePath)
      .on("error", () => resolve(null))
      .pipe(gzip)
      .on("data", (chunk) => {
        size += chunk.length;
      })
      .on("end", () => resolve(size))
      .on("error", () => resolve(null));
  });
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

async function capturePackageSizes(packageName) {
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

  // Process all files in parallel
  const fileResults = await Promise.all(
    cjsFiles.map(async ({ path: relativePath, fullPath }) => {
      const [rawSize, gzipSize] = await Promise.all([
        getFileSize(fullPath),
        getGzippedSize(fullPath),
      ]);

      if (rawSize !== null && gzipSize !== null) {
        return { relativePath, rawSize, gzipSize };
      }
      return null;
    })
  );

  // Aggregate results
  for (const fileResult of fileResults) {
    if (fileResult) {
      result.cjsBundles[fileResult.relativePath] = {
        rawSize: fileResult.rawSize,
        gzipSize: fileResult.gzipSize,
      };
      result.totalRaw += fileResult.rawSize;
      result.totalGzip += fileResult.gzipSize;
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

async function main() {
  console.log("📦 Capturing CJS bundle sizes (raw + gzipped)...\n");

  const results = {
    timestamp: new Date().toISOString(),
    commit: process.env.GITHUB_SHA || "unknown",
    branch: process.env.GITHUB_REF_NAME || "unknown",
    packages: {},
  };

  // Process all packages in parallel
  const packageResults = await Promise.all(
    PACKAGES_TO_TRACK.map(async (packageName) => ({
      name: packageName,
      sizes: await capturePackageSizes(packageName),
    }))
  );

  // Display results and build final object
  for (const { name: packageName, sizes: packageSizes } of packageResults) {
    console.log(`  Analyzing @osdk/${packageName}...`);

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
