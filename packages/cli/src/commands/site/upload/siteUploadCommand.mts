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

import archiver from "archiver";
import { consola } from "consola";
import * as fs from "node:fs";
import { Readable } from "node:stream";
import { ExitProcessError } from "../../../ExitProcessError.js";
import { artifacts } from "../../../net/index.mjs";

import type { UploadArgs } from "./UploadArgs.js";

export default async function invokeSiteUpload(args: UploadArgs) {
  if (args.dir == null) {
    consola.error("No directory specified");
    throw new ExitProcessError(1);
  }

  const stat = await fs.promises.stat(args.dir);
  if (!stat.isDirectory()) {
    consola.error("Specified path is not a directory");
    throw new ExitProcessError(2);
  }

  consola.start("Zippping site files");

  const archive = archiver("zip").directory(args.dir, false);

  await Promise.all([
    artifacts.SiteAssetArtifactsService.uploadZippedSiteAsset(
      args.baseUrl,
      args.appRid,
      args.siteVersion,
      Readable.toWeb(archive) as ReadableStream<any>, // This cast is because the dom fetch doesnt align type wise with streams
    ),
    archive.finalize(),
  ]);

  consola.success("Upload complete");
}
