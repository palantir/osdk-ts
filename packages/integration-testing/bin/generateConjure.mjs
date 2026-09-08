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

// @ts-check

import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const GROUP_ID = "com.palantir.foundry-cli";
const ARTIFACT_ID = "cli-api";

/** Relative to this package; `cli-api` minus its `-api` suffix, as the old script did. */
const OUT_DIR = "src/generated/cli";

const packageDir = path.dirname(fileURLToPath(import.meta.url));

/**
 * @param {string} url
 * @returns {Promise<string>}
 */
async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `GET ${url} failed: ${response.status} ${response.statusText}`,
    );
  }
  return await response.text();
}

/**
 * Resolves the artifact's current release version from its maven metadata,
 * i.e. `yq -p xml -r '.metadata.versioning.release'`.
 *
 * @param {string} artifactBaseUrl
 * @returns {Promise<string>}
 */
async function resolveReleaseVersion(artifactBaseUrl) {
  const metadataUrl = `${artifactBaseUrl}/maven-metadata.xml`;
  const metadata = await fetchText(metadataUrl);
  const release = /<release>([^<]+)<\/release>/u.exec(metadata)?.[1]?.trim();
  if (!release) {
    throw new Error(`No <release> version found in ${metadataUrl}`);
  }
  return release;
}

/**
 * Runs `command` in this package, inheriting stdio, and throws if it fails.
 *
 * @param {string} command
 * @param {string[]} args
 * @returns {void}
 */
function run(command, args) {
  const { error, status, signal } = spawnSync(command, args, {
    cwd: path.resolve(packageDir, "../"),
    stdio: "inherit",
  });
  if (error) {
    throw error;
  }
  if (status !== 0) {
    throw new Error(
      `${command} ${args.join(" ")} exited with ${signal ?? status}`,
    );
  }
}

async function generateConjure() {
  const mavenBasePath = process.env.MAVEN_CONJURE_BASE_PATH?.replace(
    /\/+$/u,
    "",
  );
  if (!mavenBasePath) {
    throw new Error(
      "Must set $MAVEN_CONJURE_BASE_PATH (see .envrc.sample at the repo root)",
    );
  }

  const artifactBaseUrl = `${mavenBasePath}/${GROUP_ID.replaceAll(
    ".",
    "/",
  )}/${ARTIFACT_ID}`;

  console.log(
    `Fetching conjure IR\n  Coordinate: ${GROUP_ID}:${ARTIFACT_ID}\n  Path: ${OUT_DIR}`,
  );
  const version = await resolveReleaseVersion(artifactBaseUrl);
  const irUrl = `${artifactBaseUrl}/${version}/${ARTIFACT_ID}-${version}.conjure.json`;
  console.log(`  - Downloading ${irUrl}`);
  const ir = await fetchText(irUrl);

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `${ARTIFACT_ID}-`));
  const outDir = path.join(packageDir, OUT_DIR);
  try {
    const irPath = path.join(tmpDir, `${ARTIFACT_ID}.conjure.json`);
    fs.writeFileSync(irPath, ir);

    fs.rmSync(outDir, { force: true, recursive: true });
    fs.mkdirSync(outDir, { recursive: true });

    console.log("  - Generating typescript");
    // `--header "/**/"` keeps the generated files' leading comment empty so the
    // license header inserted by fix-lint below is the first thing in the file.
    run("conjure-lite", [
      "generate",
      "--ir",
      irPath,
      "--outDir",
      outDir,
      "--header",
      "/**/",
    ]);
  } finally {
    fs.rmSync(tmpDir, { force: true, recursive: true });
  }

  // Adds the license headers and formats the tree; src/generated is linted for
  // this package (see oxlint.config.ts).
  console.log("  - Running fix-lint");
  run("pnpm", ["run", "fix-lint"]);
}

generateConjure().catch((error) => {
  process.exitCode = 1;
  console.error(`\nError: ${error instanceof Error ? error.message : error}`);
});
