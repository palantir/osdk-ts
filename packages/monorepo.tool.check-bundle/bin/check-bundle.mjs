#!/usr/bin/env node
// @ts-check

import { execFileSync } from "node:child_process";
import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  statSync,
  symlinkSync,
} from "node:fs";
import { tmpdir } from "node:os";
import * as path from "node:path";

const pkgJson = JSON.parse(readFileSync("package.json", "utf-8"));

const binEntries = typeof pkgJson.bin === "string"
  ? { [pkgJson.name]: pkgJson.bin }
  : pkgJson.bin ?? {};

if (Object.keys(binEntries).length === 0) {
  console.log("No bin entries found, skipping check-bundle.");
  process.exit(0);
}

const filesField = pkgJson.files ?? [];
if (filesField.length === 0) {
  console.error(
    "No files field in package.json, cannot determine published files.",
  );
  process.exit(1);
}

const tempDir = mkdtempSync(path.join(tmpdir(), "check-bundle-"));

try {
  // Copy items listed in "files" field (what npm publish would include)
  for (const pattern of filesField) {
    if (pattern.includes("*")) {
      // Handle simple glob patterns like "*.d.ts"
      const ext = pattern.replace("*", "");
      const matches = readdirSync(".").filter((f) => f.endsWith(ext));
      for (const f of matches) {
        cpSync(f, path.join(tempDir, f));
      }
    } else {
      try {
        const stat = statSync(pattern);
        if (stat.isDirectory()) {
          cpSync(pattern, path.join(tempDir, pattern), { recursive: true });
        } else {
          cpSync(pattern, path.join(tempDir, pattern));
        }
      } catch {
        // File/dir may not exist (e.g. templates dir), skip
      }
    }
  }

  // Copy package.json (needed for module resolution)
  cpSync("package.json", path.join(tempDir, "package.json"));

  // Copy bin files (npm auto-includes files referenced by the bin field)
  for (const binPath of Object.values(binEntries)) {
    const binDir = path.dirname(/** @type {string} */ (binPath));
    try {
      mkdirSync(path.join(tempDir, binDir), { recursive: true });
      cpSync(
        /** @type {string} */ (binPath),
        path.join(tempDir, /** @type {string} */ (binPath)),
      );
    } catch {
      console.error(`WARNING: bin file ${binPath} not found, skipping.`);
    }
  }

  // Symlink dependencies into temp node_modules.
  // This simulates what npm does when a user installs the package:
  // only "dependencies" are installed, not "devDependencies".
  // If a devDependency was incorrectly externalized (not bundled),
  // it won't be in this node_modules and the bin will fail.
  const deps = Object.keys(pkgJson.dependencies ?? {});
  if (deps.length > 0) {
    const tempNodeModules = path.join(tempDir, "node_modules");
    mkdirSync(tempNodeModules, { recursive: true });

    for (const dep of deps) {
      try {
        // Resolve the dependency from the real workspace node_modules
        const depPkgJsonPath = path.dirname(
          realpathSync(
            path.resolve("node_modules", dep, "package.json"),
          ),
        );

        // Handle scoped packages (@scope/name)
        const depDir = path.join(tempNodeModules, dep);
        mkdirSync(path.dirname(depDir), { recursive: true });
        symlinkSync(depPkgJsonPath, depDir);
      } catch {
        console.warn(
          `  WARNING: could not resolve dependency "${dep}", skipping symlink.`,
        );
      }
    }
  }

  // Run each bin entry with --help in the isolated temp dir
  let failed = false;
  for (const [name, binPath] of Object.entries(binEntries)) {
    const fullBinPath = path.join(tempDir, /** @type {string} */ (binPath));
    console.log(`Checking bin "${name}" -> ${binPath}`);

    try {
      execFileSync(process.execPath, [fullBinPath, "--help"], {
        cwd: tempDir,
        timeout: 15_000,
        stdio: ["ignore", "pipe", "pipe"],
        env: {
          // Minimal env — no NODE_PATH or workspace paths that could resolve modules
          PATH: process.env.PATH,
          HOME: process.env.HOME,
        },
      });
      console.log(`  PASS`);
    } catch (e) {
      const stderr = e.stderr?.toString() ?? "";
      const stdout = e.stdout?.toString() ?? "";
      const output = stderr + stdout;

      if (
        output.includes("ERR_MODULE_NOT_FOUND")
        || output.includes("MODULE_NOT_FOUND")
        || output.includes("Cannot find module")
        || output.includes("Cannot find package")
      ) {
        console.error(`  FAIL: missing module in bundle`);
        console.error(output);
        failed = true;
      } else {
        // Non-zero exit for other reasons (e.g. yargs prints help to stdout
        // and exits 0, but some CLIs might exit 1 for --help)
        console.log(`  PASS`);
      }
    }
  }

  if (failed) {
    console.error(
      "\nBundle isolation check failed. A devDependency is externalized but not bundled.",
    );
    console.error("Ensure the dependency is either:");
    console.error(
      "  1. Moved to 'dependencies' (so npm installs it for consumers), or",
    );
    console.error(
      "  2. Added to 'noExternalList' in monorepo.tool.transpile (to bundle it in)",
    );
    process.exit(1);
  }

  console.log("\nAll bin entries passed bundle isolation check.");
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
