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

import { createInternalClientContext } from "#net";
import { ExitProcessError } from "@osdk/cli.common";
import type { WidgetSetManifest } from "@osdk/widget-api.unstable";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget-api.unstable";
import archiver from "archiver";
import * as fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import prettyBytes from "pretty-bytes";
import { createFetch } from "../../../net/createFetch.mjs";
import type { InternalClientContext } from "../../../net/internalClientContext.mjs";
import type { WidgetSetRid } from "../../../net/WidgetSetRid.js";
import { loadToken } from "../../../util/token.js";
import type { WidgetDeployArgs } from "./WidgetDeployArgs.js";

export default async function widgetDeployCommand(
  {
    rid,
    foundryUrl,
    directory,
    token,
    tokenFile,
  }: WidgetDeployArgs,
): Promise<void> {
  const loadedToken = await loadToken(token, tokenFile);
  const tokenProvider = () => loadedToken;
  const clientCtx = createInternalClientContext(foundryUrl, tokenProvider);

  consola.debug(
    `Using directory for widget files: "${path.resolve(directory)}`,
  );
  const stat = await fs.promises.stat(directory);
  if (!stat.isDirectory()) {
    throw new ExitProcessError(
      2,
      "Specified path exists but is not a directory",
    );
  }

  const widgetSetVersion = await findWidgetSetVersion(directory);

  consola.start("Zipping widget files");
  const archive = archiver("zip").directory(directory, false);
  logArchiveStats(archive);

  consola.start("Uploading widget files");
  await Promise.all([
    uploadVersion(
      clientCtx,
      rid,
      widgetSetVersion,
      Readable.toWeb(archive) as ReadableStream<any>, // This cast is because the dom fetch doesn't align type wise with streams
    ),
    archive.finalize(),
  ]);
  consola.success("Upload complete");

  consola.start("Publishing widget manifest");
  await publishManifest(clientCtx, rid, widgetSetVersion);
  consola.success(`Deployed ${widgetSetVersion} successfully`);
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

async function uploadVersion(
  ctx: InternalClientContext,
  // TODO: make repository rid
  widgetSetRid: WidgetSetRid,
  version: string,
  zipFile: ReadableStream | Blob | BufferSource,
): Promise<void> {
  const fetch = createFetch(ctx.tokenProvider);
  const url =
    `${ctx.foundryUrl}/artifacts/api/repositories/${widgetSetRid}/contents/release/siteasset/versions/zip/${version}`;

  await fetch(
    url,
    {
      method: "PUT",
      body: zipFile,
      headers: {
        "Content-Type": "application/octet-stream",
      },
      duplex: "half", // Node hates me
    } satisfies RequestInit & { duplex: "half" } as any,
  );
}

async function publishManifest(
  ctx: InternalClientContext,
  // TODO: make repository rid
  widgetSetRid: WidgetSetRid,
  version: string,
): Promise<void> {
  const fetch = createFetch(ctx.tokenProvider);
  const url =
    `${ctx.foundryUrl}/widget-registry/api/repositories/${widgetSetRid}/publish-manifest`;

  await fetch(
    url,
    {
      method: "POST",
      body: JSON.stringify({ version }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
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
