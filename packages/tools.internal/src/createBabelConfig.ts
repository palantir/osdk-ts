/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { ConfigFunction } from "@babel/core";
import { convertMapVersionToEnvVars } from "./utils/convertMapVersionToEnvVars.mjs";
import { readPackageInfoFromWorkspace } from "./utils/readPackageInfoFromWorkspace.js";

export default async (ourOptions?: {
  mapVersions?: {
    [envName: string]: string; /* package name */
  };
}) => {
  const { manifest, exportableManifest } = await readPackageInfoFromWorkspace(
    process.cwd(),
  );
  const versionEnvVars = convertMapVersionToEnvVars(
    ourOptions?.mapVersions,
    exportableManifest,
  );

  Object.assign(process.env, versionEnvVars);

  process.env.PACKAGE_VERSION = manifest.version;
  process.env.TARGET ??= "node";
  process.env.MODE = process.env.production ? "production" : "development";

  const config: ConfigFunction = function(api) {
    api.cache.never();

    return {
      sourceMaps: true,
      plugins: [
        ["babel-plugin-dev-expression"],
        ["babel-plugin-transform-inline-environment-variables", {
          "include": [
            "PACKAGE_VERSION",
            "TARGET",
            "MODE",
            ...Object.keys(versionEnvVars),
          ],
        }],
        ["minify-dead-code-elimination"],
      ],
    };
  };

  return config;
};
