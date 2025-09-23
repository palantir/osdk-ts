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

import {
  OntologyIrToFullMetadataConverter,
} from "@osdk/generator-converters.ontologyir";
import { execa } from "execa";
import * as fs from "node:fs";
import * as path from "node:path";
import { inspect } from "node:util";
import type { OacContext } from "./OacContext.js";
import { syncDirectories } from "./syncDirectories.js";

/**
 * Generate all ontology assets: IR, full metadata, and OSDK.
 * This function contains the core generation logic extracted from watchOntologyAsCode
 * so it can be used both in dev mode (via file watching) and build mode.
 */
export async function generateOntologyAssets(
  opts: OacContext,
): Promise<void> {
  const { ontologyDir, logger } = opts;
  await fs.promises.mkdir(opts.workDir, { recursive: true });

  // Ensure the ontology directory exists
  if (!fs.existsSync(ontologyDir)) {
    fs.mkdirSync(ontologyDir, { recursive: true });
    logger.info("Created .ontology directory");
  }

  // Generate the assets in sequence
  await ontologyJsToIr(opts);
  await ontologyIrToFullMetadata(opts);
  await fullMetadataToOsdk(opts);
}

export function ontologyIrPath(workDir: string): string {
  return path.join(workDir, ".ontology.ir.json");
}

export function ontologyFullMetadataPath(workDir: string): string {
  return path.join(workDir, ".ontology.json");
}

/**
 * Convert ontology.mjs to IR format using the maker tool
 */
async function ontologyJsToIr(
  { logger, ontologyDir, workDir }: OacContext,
): Promise<void> {
  logger.debug("Generating Ontology IR");

  const { stdout, stderr, exitCode } = await execa("pnpm", [
    "exec",
    "maker",
    "-i",
    `${ontologyDir}/ontology.mts`,
    "-o",
    ontologyIrPath(workDir),
  ]);

  if (exitCode !== 0) {
    logger.error(`Ontology IR generation failed with exit code ${exitCode}`);
    if (stderr) {
      logger.error(`Command stderr: ${stderr}`);
    }
    throw new Error(`Failed to generate ontology IR: exit code ${exitCode}`);
  }

  // Log stdout for debugging if needed
  if (stdout) {
    logger.debug(`Ontology IR generation output: ${stdout}`);
  }
}

/**
 * Convert IR to full metadata format
 */
async function ontologyIrToFullMetadata(
  { logger, workDir }: OacContext,
): Promise<void> {
  logger.debug("Converting IR to Full metadata");

  try {
    const irContent = await fs.promises.readFile(ontologyIrPath(workDir), {
      encoding: "utf-8",
    });
    const blockData = JSON.parse(irContent).ontology;

    const fullMeta = OntologyIrToFullMetadataConverter.getFullMetadataFromIr(
      blockData,
    );

    await fs.promises.writeFile(
      ontologyFullMetadataPath(workDir),
      JSON.stringify(fullMeta, null, 2),
    );

    logger.debug("Successfully converted IR to full metadata");
  } catch (error) {
    logger.error(
      `Failed to convert IR to full metadata: ${inspect(error)}`,
    );
    throw error;
  }
}

/**
 * Generate OSDK from full metadata
 */
async function fullMetadataToOsdk(
  { logger, workDir }: OacContext,
): Promise<void> {
  logger.debug("Generating OSDK from full metadata");

  // First create a clean temporary directory to generate the SDK into
  const tempDir = path.join(
    workDir,
    ".osdkGenerationTmp",
    "src",
  );
  await fs.promises.rm(tempDir, { recursive: true, force: true });
  await fs.promises.mkdir(tempDir, { recursive: true });

  // The osdk cli currently mutes package.json files which we don't want in this case
  // so we give it a fake package.json file
  await fs.promises.writeFile(
    path.join(tempDir, "..", "package.json"),
    JSON.stringify({}, null, 2),
    { encoding: "utf-8" },
  );

  try {
    // Then generate the source code for the osdk
    const tempSrcDir = path.join(tempDir, "src");
    const { stdout, stderr, exitCode } = await execa("pnpm", [
      "exec",
      "osdk",
      "unstable",
      "typescript",
      "generate",
      "--outDir",
      tempSrcDir,
      "--ontologyPath",
      ontologyFullMetadataPath(workDir),
      "--beta",
      "true",
      "--packageType",
      "module",
      "--version",
      "dev",
    ]);

    logger.debug(`OSDK generation output: ${stdout}`);

    if (stderr) {
      logger.error(`OSDK generation stderr: ${stderr}`);
    }

    // Then if it was successful, synchronize the generated code with the target directory
    if (exitCode === 0) {
      // TODO we should just generate this whole thing into the work dir?
      const targetDir = ".osdk/src";
      try {
        logger.debug(
          "OSDK generation successful, synchronizing with target directory",
        );

        // Use granular synchronization instead of wholesale replacement
        await syncDirectories(tempSrcDir, targetDir, logger);

        logger.debug(
          `Successfully synchronized ${targetDir} with newly generated code`,
        );

        // Clean up temporary directory after successful sync
        await fs.promises.rm(tempDir, { recursive: true, force: true });
      } catch (error) {
        logger.error(
          `Failed to synchronize ${targetDir} directory: ${inspect(error)}`,
        );
        logger.error(`Temporary files left at: ${tempDir}`);
        throw error;
      }
    } else {
      logger.error(`OSDK generation failed with exit code ${exitCode}`);
      logger.error(`Temporary files left at: ${tempDir}`);
      throw new Error(`OSDK generation failed with exit code ${exitCode}`);
    }
  } catch (error) {
    // Make sure to clean up temp directory even if there's an error
    try {
      await fs.promises.rm(tempDir, { recursive: true, force: true });
    } catch (cleanupError) {
      logger.warn(
        `Failed to clean up temporary directory: ${inspect(cleanupError)}`,
      );
    }
    throw error;
  }
}
