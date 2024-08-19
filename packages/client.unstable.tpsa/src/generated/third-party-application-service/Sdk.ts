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

import type { ArtifactsRepositoryRid } from "./ArtifactsRepositoryRid.js";
import type { CondaSdk } from "./CondaSdk.js";
import type { MavenSdk } from "./MavenSdk.js";
import type { NpmSdk } from "./NpmSdk.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";
import type { PackageName } from "./PackageName.js";
import type { PypiSdk } from "./PypiSdk.js";
import type { SdkInputs } from "./SdkInputs.js";
import type { SdkPackageRid } from "./SdkPackageRid.js";
import type { SdkVersion } from "./SdkVersion.js";

/**
 * An SDK generated using the specified data scope. It may
 * include one or more package managers for various languages.
 */
export interface Sdk {
  sdkPackageRid: SdkPackageRid;
  repositoryRid: ArtifactsRepositoryRid;
  packageName: PackageName;
  version: SdkVersion;
  inputs: SdkInputs;
  npm: NpmSdk | undefined;
  pypi: PypiSdk | undefined;
  conda: CondaSdk | undefined;
  maven: MavenSdk | undefined;
  ontologyPackageRid: OntologyPackageRid | undefined;
}
