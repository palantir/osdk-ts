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
  type OntologyIrOntologyBlockDataV2,
  OntologyIrToFullMetadataConverter,
} from "@osdk/generator-converters.ontologyir";
import { execa } from "execa";
import * as fs from "node:fs";
import * as path from "node:path";
import type { Logger } from "vite";
import { syncDirectories } from "./syncDirectories.js";

export const NOISY = false;

export interface GenerateOntologyAssetsOptions {
  logger: Logger;
  ontologyDir: string;
  workDir: string;
}

/**
 * Generate all ontology assets: IR, full metadata, and OSDK.
 * This function contains the core generation logic extracted from watchOntologyAsCode
 * so it can be used both in dev mode (via file watching) and build mode.
 */
export async function generateOntologyAssets(
  opts: GenerateOntologyAssetsOptions,
): Promise<void> {
  const { ontologyDir, logger } = opts;
  // Ensure the ontology directory exists
  if (!fs.existsSync(ontologyDir)) {
    fs.mkdirSync(ontologyDir, { recursive: true });
    logger.info("Created .ontology directory", { timestamp: true });
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
  { logger, ontologyDir, workDir }: GenerateOntologyAssetsOptions,
): Promise<void> {
  if (NOISY) {
    logger.info("Generating Ontology IR", { timestamp: true });
  }

  const { stdout, stderr, exitCode } = await execa("pnpm", [
    "exec",
    "maker",
    "-i",
    `${ontologyDir}/ontology.mts`,
    "-o",
    ontologyIrPath(workDir),
  ]);

  if (exitCode !== 0) {
    logger.error(`Ontology IR generation failed with exit code ${exitCode}`, {
      timestamp: true,
    });
    if (stderr) {
      logger.error(`Command stderr: ${stderr}`, { timestamp: true });
    }
    throw new Error(`Failed to generate ontology IR: exit code ${exitCode}`);
  }

  // Log stdout for debugging if needed
  if (stdout && NOISY) {
    logger.info(`Ontology IR generation output: ${stdout}`, {
      timestamp: true,
    });
  }
}

/**
 * Convert IR to full metadata format
 */
async function ontologyIrToFullMetadata(
  { logger, workDir }: GenerateOntologyAssetsOptions,
): Promise<void> {
  if (NOISY) {
    logger.info("Converting IR to Full metadata", { timestamp: true });
  }

  try {
    const irContent = await fs.promises.readFile(ontologyIrPath(workDir), {
      encoding: "utf-8",
    });
    const blockData = JSON.parse(irContent)
      .blockData as OntologyIrOntologyBlockDataV2;

    const fullMeta = OntologyIrToFullMetadataConverter.getFullMetadataFromIr(
      blockData,
    );

    await fs.promises.writeFile(
      ontologyFullMetadataPath(workDir),
      JSON.stringify(fullMeta, null, 2),
    );

    if (NOISY) {
      logger.info("Successfully converted IR to full metadata", {
        timestamp: true,
      });
    }
  } catch (error) {
    logger.error(
      `Failed to convert IR to full metadata: ${
        error instanceof Error ? error.message : String(error)
      }`,
      { timestamp: true },
    );
    throw error;
  }
}

/**
 * Generate OSDK from full metadata
 */
async function fullMetadataToOsdk(
  { logger, workDir }: GenerateOntologyAssetsOptions,
): Promise<void> {
  if (NOISY) {
    logger.info("Generating OSDK from full metadata", { timestamp: true });
  }

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

    if (stdout && NOISY) {
      logger.info(`OSDK generation output: ${stdout}`, { timestamp: true });
    }
    if (stderr) {
      logger.error(`OSDK generation stderr: ${stderr}`, { timestamp: true });
    }

    // Then if it was successful, synchronize the generated code with the target directory
    if (exitCode === 0) {
      // TODO we should just generate this whole thing into the work dir?
      const targetDir = ".osdk/src";
      try {
        if (NOISY) {
          logger.info(
            "OSDK generation successful, synchronizing with target directory",
            {
              timestamp: true,
            },
          );
        }

        // Use granular synchronization instead of wholesale replacement
        await syncDirectories(tempSrcDir, targetDir, logger);

        if (NOISY) {
          logger.info(
            `Successfully synchronized ${targetDir} with newly generated code`,
            {
              timestamp: true,
            },
          );
        }
        await compileOsdk(logger);

        // Clean up temporary directory after successful sync
        await fs.promises.rm(tempDir, { recursive: true, force: true });
      } catch (error) {
        logger.error(
          `Failed to synchronize ${targetDir} directory: ${
            error instanceof Error ? error.message : String(error)
          }`,
          { timestamp: true },
        );
        logger.error(`Temporary files left at: ${tempDir}`, {
          timestamp: true,
        });
        throw error;
      }
    } else {
      logger.error(`OSDK generation failed with exit code ${exitCode}`, {
        timestamp: true,
      });
      logger.error(`Temporary files left at: ${tempDir}`, { timestamp: true });
      throw new Error(`OSDK generation failed with exit code ${exitCode}`);
    }
  } catch (error) {
    // Make sure to clean up temp directory even if there's an error
    try {
      await fs.promises.rm(tempDir, { recursive: true, force: true });
    } catch (cleanupError) {
      logger.warn(
        `Failed to clean up temporary directory: ${
          cleanupError instanceof Error
            ? cleanupError.message
            : String(cleanupError)
        }`,
        { timestamp: true },
      );
    }
    throw error;
  }
}

async function compileOsdk(logger: Logger) {
  const { stdout, stderr, exitCode } = await execa("pnpm", [
    "exec",
    "tsc",
  ]);

  if (stdout && NOISY) {
    logger.info(`OSDK generation output: ${stdout}`, {
      timestamp: true,
    });
  }
  if (stderr) {
    logger.error(`OSDK generation stderr: ${stderr}`, {
      timestamp: true,
    });
  }
  return exitCode;
}
