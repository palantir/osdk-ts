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

import { consola } from "consola";

import * as fs from "node:fs";

// Environment variable names
const JEMMA_JOB_CUSTOM_METADATA_PATH = "JEMMA_JOB_CUSTOM_METADATA_PATH";

/**
 * Writes the site link to the custom metadata file (if the path is provided by the JEMMA_JOB_CUSTOM_METADATA_PATH environment variable).
 *
 * The custom metadata file will be updated with the following format:
 *
 * {
 *   "siteLink": "https://example.com",
 *   "siteVersion": "1.0.0"
 * }
 *
 * @param siteLink The site link to write to the custom metadata file.
 * @param siteVersion The site version to write to the custom metadata file.
 */
export function maybeUpdateJemmaCustomMetadata({
  siteLink,
  siteVersion,
}: {
  siteLink: string;
  siteVersion: string;
}): void {
  const jemmaCustomMetadataFilePath = getJemmaCustomMetadataFilePath();
  if (jemmaCustomMetadataFilePath == null) {
    return;
  }

  try {
    // Read or create the custom metadata file
    const customMetadata = getOrCreateCustomMetadata(
      jemmaCustomMetadataFilePath,
    );

    // Set the site link in the custom metadata
    customMetadata.siteLink = siteLink;
    customMetadata.siteVersion = siteVersion;

    // Write the custom metadata to the file
    writeCustomMetadata(jemmaCustomMetadataFilePath, customMetadata);
  } catch (err) {
    consola.error(
      `Failed to update custom metadata file at ${jemmaCustomMetadataFilePath}`,
    );
  }
}

function getJemmaCustomMetadataFilePath(): string | undefined {
  return process.env[JEMMA_JOB_CUSTOM_METADATA_PATH];
}

function getOrCreateCustomMetadata(jemmaCustomMetadataFilePath: string): {
  [key: string]: unknown;
} {
  try {
    const parsedValue = JSON.parse(
      fs.readFileSync(jemmaCustomMetadataFilePath, "utf-8"),
    );
    return typeof parsedValue === "object" && parsedValue != null
      ? parsedValue
      : {};
  } catch (e) {
    return {};
  }
}

function writeCustomMetadata(
  jemmaCustomMetadataFilePath: string,
  customMetadata: { [key: string]: unknown },
) {
  fs.writeFileSync(
    jemmaCustomMetadataFilePath,
    JSON.stringify(customMetadata, null, 2),
  );
}
