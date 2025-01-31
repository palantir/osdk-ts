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

import { createInternalClientContext, widgetRegistry } from "#net";
import { ExitProcessError } from "@osdk/cli.common";
import type { WidgetSetManifest } from "@osdk/widget-api.unstable";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget-api.unstable";
import archiver from "archiver";
import { consola } from "consola";
import * as fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import prettyBytes from "pretty-bytes";
import type { StemmaRepositoryRid } from "../../../net/StemmaRepositoryRid.js";
import type { WidgetSetRid } from "../../../net/WidgetSetRid.js";
import { loadToken } from "../../../util/token.js";
import type { WidgetSetDeployArgs } from "./WidgetSetDeployArgs.js";

export default async function widgetSetDeployCommand(
  {
    widgetSet,
    foundryUrl,
    directory,
    repository,
    token,
    tokenFile,
  }: WidgetSetDeployArgs,
): Promise<void> {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);

  consola.debug(
    `Using directory for widget set files: "${path.resolve(directory)}`,
  );
  const stat = await fs.promises.stat(directory);
  if (!stat.isDirectory()) {
    throw new ExitProcessError(
      2,
      "Specified path exists but is not a directory",
    );
  }

  const widgetSetVersion = await findWidgetSetVersion(directory);
  consola.info(`Found version from manifest: ${widgetSetVersion}`);

  consola.start("Zipping widget set files");
  const archive = archiver("zip").directory(directory, false);
  logArchiveStats(archive);

  let deployRid: WidgetSetRid | StemmaRepositoryRid = widgetSet;
  if (repository != null) {
    deployRid = repository;
    consola.debug(`Deploying to repository ${repository} for ${widgetSet}`);
  }

  consola.start("Uploading widget set files");
  await Promise.all([
    widgetRegistry.uploadSiteVersion(
      clientCtx,
      deployRid,
      widgetSetVersion,
      Readable.toWeb(archive) as ReadableStream<any>, // This cast is because the dom fetch doesn't align type wise with streams
    ),
    archive.finalize(),
  ]);
  consola.success("Upload complete");

  consola.start("Publishing widget set manifest");
  try {
    await widgetRegistry.publishManifest(
      clientCtx,
      deployRid,
      widgetSetVersion,
    );
    consola.success(`Deployed ${widgetSetVersion} successfully`);
  } catch (e) {
    consola.fail("Failed to publish manifest, cleaning up");
    await widgetRegistry.deleteSiteVersion(
      clientCtx,
      deployRid,
      widgetSetVersion,
    );
    throw e;
  }
}

async function findWidgetSetVersion(
  directory: string,
): Promise<string> {
  try {
    const manifestContent = await fs.promises.readFile(
      path.resolve(directory, MANIFEST_FILE_LOCATION),
      "utf8",
    );
    const manifest: WidgetSetManifest = JSON.parse(manifestContent);
    if (manifest.widgetSet == null || manifest.widgetSet.version == null) {
      throw new Error(`Unable to find widget set version in manifest`);
    }
    return manifest.widgetSet.version;
  } catch (e) {
    throw new ExitProcessError(
      2,
      `Unable to process manifest at ${MANIFEST_FILE_LOCATION}${
        e instanceof Error ? `: ${e.message}` : ""
      }`,
    );
  }
}
function logArchiveStats(archive: archiver.Archiver): void {
  let archiveStats = { fileCount: 0, bytes: 0 };
  archive.on("progress", (progress) => {
    archiveStats = {
      fileCount: progress.entries.total,
      bytes: progress.fs.totalBytes,
    };
  });
  archive.on("finish", () => {
    consola.info(
      `Zipped ${
        prettyBytes(archiveStats.bytes, { binary: true })
      } total over ${archiveStats.fileCount} files`,
    );
  });
}
