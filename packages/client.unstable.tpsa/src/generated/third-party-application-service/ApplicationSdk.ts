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

import type { ApplicationSdkInputs } from "./ApplicationSdkInputs.js";
import type { ArtifactsRepositoryRid } from "./ArtifactsRepositoryRid.js";
import type { CondaSdk } from "./CondaSdk.js";
import type { MavenSdk } from "./MavenSdk.js";
import type { NpmSdk } from "./NpmSdk.js";
import type { PypiSdk } from "./PypiSdk.js";
import type { SdkVersion } from "./SdkVersion.js";

/**
 * An SDK for the application generated using specified input versions. It may
 * include one or more package managers for various languages.
 */
export interface ApplicationSdk {
  repositoryRid: ArtifactsRepositoryRid;
  version: SdkVersion;
  inputs: ApplicationSdkInputs;
  npm: NpmSdk | undefined;
  pypi: PypiSdk | undefined;
  conda: CondaSdk | undefined;
  maven: MavenSdk | undefined;
}
