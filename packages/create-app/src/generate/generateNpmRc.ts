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

export function generateNpmRc({
  osdkPackage,
  osdkRegistryUrl,
}: {
  osdkPackage: string | undefined;
  osdkRegistryUrl: string | undefined;
}): string {
  // pnpm requires a trailing slash in .npmrc
  // https://github.com/pnpm/pnpm/issues/5941
  const osdkRegistryUrlOrDefault = osdkRegistryUrl
    ?? "https://<OSDK registry URL>";

  const withTrailingSlash = osdkRegistryUrlOrDefault.endsWith("/")
    ? osdkRegistryUrlOrDefault
    : osdkRegistryUrlOrDefault + "/";
  const withoutProtocol = withTrailingSlash.replace(/^https:\/\//, "");

  const osdkPackageOrDefault = osdkPackage
    ?? "<OSDK package name>";
  const packageScope = osdkPackageOrDefault.split("/")[0];

  return `//${withoutProtocol}:_authToken=\${FOUNDRY_TOKEN}\n`
    + `${packageScope}:registry=${withTrailingSlash}\n`;
}
