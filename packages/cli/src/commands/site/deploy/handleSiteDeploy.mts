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

import {
  ArtifactsSitesAdminV2Service,
  createConjureContext,
  thirdPartyApplicationService,
 artifacts } from "#net";
import type { SiteDeployArgs } from "./siteDeployArgs.js";
import archiver from "archiver";
import * as fs from "node:fs";
import { Readable } from "node:stream";
import { ExitProcessError } from "../../../ExitProcessError.js";
import {getAutoVersion} from "../../../utils/versionUtils.js";

export default async function handleSiteDeploy(
  {  version, application, foundryUrl, autoVersion, uploadOnly, directory }: SiteDeployArgs,
) {
  // Shouldn't be possible but additional safeguard
  if (!version && !autoVersion) {
    throw new ExitProcessError(2, "Either version or autoVersion must be specified");
  }

  const siteVersion = !version ? await getAutoVersion() : version;
  if (!version) {
    consola.info(`No version was specified, and autoVersion is enabled. Inferred version: ${siteVersion}`);
  }

  const stat = await fs.promises.stat(directory);
  if (!stat.isDirectory()) {
    consola.error("Specified path is not a directory");
    throw new ExitProcessError(2);
  }

  consola.start("Zippping site files");

  const archive = archiver("zip").directory(directory, false);

  await Promise.all([
    artifacts.SiteAssetArtifactsService.uploadZippedSiteAsset(
      foundryUrl,
      application,
      siteVersion,
      Readable.toWeb(archive) as ReadableStream<any>, // This cast is because the dom fetch doesnt align type wise with streams
    ),
    archive.finalize(),
  ]);

  consola.success("Upload complete");

  if (uploadOnly === false) {

    const repositoryRid = await thirdPartyApplicationService
      .fetchWebsiteRepositoryRid(foundryUrl, application);

    const ctx = createConjureContext(foundryUrl, "/artifacts/api");
    await ArtifactsSitesAdminV2Service.updateDeployedVersion(
      ctx,
      repositoryRid,
      { siteVersion: { version: siteVersion } },
    );

   consola.success(`Deployed ${siteVersion} successfully`);
  }
    
}
