#!/usr/bin/env node

/**
 * Compares bundle sizes between baseline and current builds.
 * Generates a markdown report showing size deltas.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASELINE_PATH = process.argv[2] || path.join(__dirname, "..", "baseline-bundle-sizes.json");
const CURRENT_PATH = process.argv[3] || path.join(__dirname, "..", "bundle-sizes.json");
const THRESHOLD_PERCENT = parseFloat(process.env.BUNDLE_SIZE_THRESHOLD || "5");

function formatBytes(bytes) {
  if (bytes === null || bytes === undefined) return "N/A";
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function formatDelta(current, baseline) {
  if (baseline === null || baseline === undefined || baseline === 0) {
    return { delta: current, percent: 0, formatted: formatBytes(current) };
  }

  const delta = current - baseline;
  const percent = (delta / baseline) * 100;

  let formatted = "";
  if (delta > 0) {
    formatted = `+${formatBytes(delta)} (+${percent.toFixed(2)}%)`;
  } else if (delta < 0) {
    formatted = `${formatBytes(delta)} (${percent.toFixed(2)}%)`;
  } else {
    formatted = "No change";
  }

  return { delta, percent, formatted };
}

function getStatusEmoji(percent, threshold) {
  if (Math.abs(percent) < 0.1) return "⚪"; // No significant change
  if (percent > threshold) return "🔴"; // Significant increase
  if (percent > 0) return "🟡"; // Small increase
  if (percent < -threshold) return "🟢"; // Significant decrease
  return "🔵"; // Small decrease
}

function comparePackages(baseline, current) {
  const results = [];
  const allPackages = new Set([
    ...Object.keys(baseline.packages || {}),
    ...Object.keys(current.packages || {}),
  ]);

  for (const pkgName of allPackages) {
    const baselinePkg = baseline.packages?.[pkgName];
    const currentPkg = current.packages?.[pkgName];

    if (!currentPkg) {
      results.push({
        package: `@osdk/${pkgName}`,
        status: "removed",
        message: "Package no longer has CJS bundles",
      });
      continue;
    }

    if (!baselinePkg) {
      results.push({
        package: `@osdk/${pkgName}`,
        status: "new",
        totalRaw: currentPkg.totalRaw,
        totalGzip: currentPkg.totalGzip,
      });
      continue;
    }

    // Compare gzipped sizes (most relevant for actual impact)
    const gzipDelta = formatDelta(currentPkg.totalGzip, baselinePkg.totalGzip);
    const rawDelta = formatDelta(currentPkg.totalRaw, baselinePkg.totalRaw);

    // Find bundles with significant changes
    const significantChanges = [];
    for (const [bundlePath, currentBundle] of Object.entries(currentPkg.cjsBundles)) {
      const baselineBundle = baselinePkg.cjsBundles?.[bundlePath];
      if (!baselineBundle) continue;

      const bundleGzipDelta = formatDelta(currentBundle.gzipSize, baselineBundle.gzipSize);
      if (Math.abs(bundleGzipDelta.percent) > THRESHOLD_PERCENT) {
        significantChanges.push({
          path: bundlePath,
          ...bundleGzipDelta,
        });
      }
    }

    results.push({
      package: `@osdk/${pkgName}`,
      status: "compared",
      baselineGzip: baselinePkg.totalGzip,
      currentGzip: currentPkg.totalGzip,
      gzipDelta,
      rawDelta,
      significantChanges,
    });
  }

  return results;
}

function generateMarkdownReport(baseline, current, comparison) {
  const lines = [];

  lines.push("# Bundle Size Report\n");

  // Overall summary
  const totalGzipDelta = formatDelta(
    current.summary?.totalGzip || 0,
    baseline.summary?.totalGzip || 0
  );

  lines.push("## Summary\n");
  lines.push(`- **Baseline**: ${baseline.commit?.substring(0, 7) || "unknown"} (${baseline.branch || "unknown"})`);
  lines.push(`- **Current**: ${current.commit?.substring(0, 7) || "unknown"} (${current.branch || "unknown"})`);
  lines.push(`- **Total Gzipped Size**: ${formatBytes(current.summary?.totalGzip || 0)} (${totalGzipDelta.formatted})`);
  lines.push(`- **Threshold**: ±${THRESHOLD_PERCENT}%\n`);

  // Check if any packages exceed threshold
  const exceedsThreshold = comparison.some(
    (pkg) => pkg.status === "compared" && Math.abs(pkg.gzipDelta.percent) > THRESHOLD_PERCENT
  );

  if (exceedsThreshold) {
    lines.push("⚠️ **Warning**: Some packages exceed the size change threshold!\n");
  } else {
    lines.push("✅ All bundle size changes are within acceptable limits.\n");
  }

  // Package details
  lines.push("## Package Details\n");
  lines.push("| Package | Status | Baseline (gzip) | Current (gzip) | Delta |");
  lines.push("|---------|--------|-----------------|----------------|-------|");

  for (const pkg of comparison) {
    const emoji = pkg.status === "compared"
      ? getStatusEmoji(pkg.gzipDelta.percent, THRESHOLD_PERCENT)
      : pkg.status === "new"
      ? "🆕"
      : "❌";

    if (pkg.status === "compared") {
      lines.push(
        `| ${pkg.package} | ${emoji} | ${formatBytes(pkg.baselineGzip)} | ${formatBytes(pkg.currentGzip)} | ${pkg.gzipDelta.formatted} |`
      );
    } else if (pkg.status === "new") {
      lines.push(`| ${pkg.package} | ${emoji} | - | ${formatBytes(pkg.totalGzip)} | New package |`);
    } else {
      lines.push(`| ${pkg.package} | ${emoji} | - | - | ${pkg.message} |`);
    }
  }

  // Significant changes detail
  const packagesWithSignificantChanges = comparison.filter(
    (pkg) => pkg.significantChanges && pkg.significantChanges.length > 0
  );

  if (packagesWithSignificantChanges.length > 0) {
    lines.push("\n## Bundles Exceeding Threshold\n");

    for (const pkg of packagesWithSignificantChanges) {
      lines.push(`### ${pkg.package}\n`);
      lines.push("| Bundle | Delta (gzip) |");
      lines.push("|--------|--------------|");

      for (const change of pkg.significantChanges) {
        const emoji = getStatusEmoji(change.percent, THRESHOLD_PERCENT);
        lines.push(`| ${emoji} ${change.path} | ${change.formatted} |`);
      }
      lines.push("");
    }
  }

  return lines.join("\n");
}

function main() {
  console.log("📊 Comparing bundle sizes...\n");

  // Load data
  if (!fs.existsSync(BASELINE_PATH)) {
    console.error(`❌ Baseline file not found: ${BASELINE_PATH}`);
    console.log("\n💡 This is expected on the first run or when there's no cached baseline.");
    console.log("   Skipping comparison. Bundle sizes have been captured for future comparisons.\n");
    process.exit(0);
  }

  if (!fs.existsSync(CURRENT_PATH)) {
    console.error(`❌ Current bundle sizes file not found: ${CURRENT_PATH}`);
    console.log("   Run 'node scripts/capture-bundle-sizes.mjs' first.\n");
    process.exit(1);
  }

  const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, "utf-8"));
  const current = JSON.parse(fs.readFileSync(CURRENT_PATH, "utf-8"));

  // Compare
  const comparison = comparePackages(baseline, current);

  // Generate report
  const report = generateMarkdownReport(baseline, current, comparison);

  // Write report
  const reportPath = path.join(__dirname, "..", "bundle-size-report.md");
  fs.writeFileSync(reportPath, report);

  console.log(`✅ Comparison complete: ${reportPath}\n`);

  // Print summary to console
  console.log(report);

  // Exit with error code if threshold exceeded
  const exceedsThreshold = comparison.some(
    (pkg) => pkg.status === "compared" && Math.abs(pkg.gzipDelta.percent) > THRESHOLD_PERCENT
  );

  if (exceedsThreshold) {
    console.log(`\n⚠️  Bundle size changes exceed ${THRESHOLD_PERCENT}% threshold`);
    console.log("   This is informational only - build will not fail.\n");
  }

  process.exit(0);
}

main();
