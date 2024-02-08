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
import { artifacts } from "../../../../net/index.mjs";
import type { SiteVersionArgs } from "../SiteVersionArgs.js";

export default async function versionDeleteCommand(
  { version, application, foundryUrl }: SiteVersionArgs,
) {
  consola.start(`Deleting version ${version}`);
  await artifacts.SiteAssetArtifactsService.deleteSiteVersion(
    foundryUrl,
    application,
    version,
  );
  consola.success(
    `Deleted version ${version}`,
  );
}
