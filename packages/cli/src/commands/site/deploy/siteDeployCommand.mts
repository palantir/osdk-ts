/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { createInternalClientContext, thirdPartyApplications } from "#net";
import { ExitProcessError } from "@osdk/cli.common";
import archiver from "archiver";
import { colorize } from "consola/utils";
import * as fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import prettyBytes from "pretty-bytes";
import type { InternalClientContext } from "../../../net/internalClientContext.mjs";
import type { ThirdPartyAppRid } from "../../../net/ThirdPartyAppRid.js";
import { autoVersion as findAutoVersion } from "../../../util/autoVersion.js";
import type { AutoVersionConfig } from "../../../util/config.js";
import { loadToken } from "../../../util/token.js";
import type { SiteDeployArgs } from "./SiteDeployArgs.js";

interface SiteDeployInternalArgs
  extends Omit<SiteDeployArgs, "version" | "autoVersion" | "gitTagPrefix">
{
  selectedVersion: string | AutoVersionConfig;
}

export default async function siteDeployCommand(
  {
    selectedVersion,
    application,
    foundryUrl,
    uploadOnly,
    snapshot,
    snapshotId,
    directory,
    token,
    tokenFile,
  }: SiteDeployInternalArgs,
) {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);

  let siteVersion: string;
  if (typeof selectedVersion === "string") {
    siteVersion = selectedVersion;
  } else {
    siteVersion = await findAutoVersion(selectedVersion.tagPrefix);
    consola.info(
      `Auto version inferred next version to be: ${siteVersion}`,
    );
  }

  consola.debug(`Using directory for site files: "${path.resolve(directory)}`);
  const stat = await fs.promises.stat(directory);
  if (!stat.isDirectory()) {
    throw new ExitProcessError(
      2,
      "Specified path exists but is not a directory",
    );
  }

  consola.start("Zipping site files");
  const archive = archiver("zip").directory(directory, false);
  logArchiveStats(archive);

  if (snapshot) {
    await uploadSnapshot(
      clientCtx,
      application,
      siteVersion,
      snapshotId ?? "",
      archive,
    );
    consola.info("Snapshot mode enabled, skipping deployment");
    return;
  }

  await upload(
    clientCtx,
    application,
    siteVersion,
    archive,
  );

  if (!uploadOnly) {
    const website = await thirdPartyApplications.deployWebsite(
      clientCtx,
      application,
      { version: siteVersion },
    );
    consola.success(`Deployed ${siteVersion} successfully`);
    const domain = website.subdomains[0];
    if (domain != null) {
      logSiteLink(
        "View live site:",
        `https://${domain}`,
      );
    }
  } else {
    const website = await thirdPartyApplications.getWebsite(
      clientCtx,
      application,
    );
    const domain = website?.subdomains[0];
    consola.info("Upload only mode enabled, skipping deployment");
    if (domain != null) {
      logSiteLink(
        "Preview link:",
        `https://${domain}/.system/preview?previewVersion=${siteVersion}`,
      );
    }
  }
}

async function uploadSnapshot(
  clientCtx: InternalClientContext,
  application: ThirdPartyAppRid,
  siteVersion: string,
  snapshotId: string,
  archive: archiver.Archiver,
): Promise<void> {
  consola.start("Uploading snapshot site files");
  await Promise.all([
    thirdPartyApplications.uploadSnapshotVersion(
      clientCtx,
      application,
      siteVersion,
      snapshotId,
      Readable.toWeb(archive) as ReadableStream<any>, // This cast is because the dom fetch doesn't align type wise with streams
    ),
    archive.finalize(),
  ]);
  consola.success("Snapshot upload complete");
}

async function upload(
  clientCtx: InternalClientContext,
  application: ThirdPartyAppRid,
  siteVersion: string,
  archive: archiver.Archiver,
): Promise<void> {
  consola.start("Uploading site files");
  await Promise.all([
    thirdPartyApplications.uploadVersion(
      clientCtx,
      application,
      siteVersion,
      Readable.toWeb(archive) as ReadableStream<any>, // This cast is because the dom fetch doesn't align type wise with streams
    ),
    archive.finalize(),
  ]);
  consola.success("Upload complete");
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

function logSiteLink(title: string, link: string): void {
  consola.box({
    message: `${title}\n\n${colorize("green", link)}`,
    style: {
      padding: 2,
      borderColor: "green",
      borderStyle: "rounded",
    },
  });
}
