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
  artifacts,
  ArtifactsSitesAdminV2Service,
  createConjureContext,
  thirdPartyApplicationService,
} from "#net";
import archiver from "archiver";
import * as fs from "node:fs";
import { Readable } from "node:stream";
import { ExitProcessError } from "../../../ExitProcessError.js";
import { autoVersion as findAutoVersion } from "../../../util/autoVersion.js";
import type { SiteDeployArgs } from "./SiteDeployArgs.js";

export default async function siteDeployCommand(
  {
    version,
    application,
    foundryUrl,
    autoVersion,
    gitTagPrefix,
    uploadOnly,
    directory,
  }: SiteDeployArgs,
) {
  if (version == null && autoVersion == null) {
    throw new Error(
      "Either version or autoVersion must be specified",
    );
  }

  // version has a priority over autoVersion. Both could be defined at the same time when
  // autoVersion is present in the config file (it assigns that as a default value to argv.autoVersion)
  // and --version is passed as an argument
  let siteVersion: string;
  if (version != null) {
    siteVersion = version;
  } else {
    siteVersion = await findAutoVersion(gitTagPrefix);
    consola.info(
      `Auto version inferred next version to be: ${siteVersion}`,
    );
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

  if (!uploadOnly) {
    const repositoryRid = await thirdPartyApplicationService
      .fetchWebsiteRepositoryRid(foundryUrl, application);

    const ctx = createConjureContext(foundryUrl, "/artifacts/api");
    await ArtifactsSitesAdminV2Service.updateDeployedVersion(
      ctx,
      repositoryRid,
      { siteVersion: { version: siteVersion } },
    );

    consola.success(`Deployed ${siteVersion} successfully`);
  } else {
    consola.debug("Upload only mode enabled, skipping deployment");
  }
}
