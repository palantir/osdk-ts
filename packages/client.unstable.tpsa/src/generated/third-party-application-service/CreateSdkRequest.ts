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

import type { CreateCondaSdkOptions } from "./CreateCondaSdkOptions.js";
import type { CreateMavenSdkOptions } from "./CreateMavenSdkOptions.js";
import type { CreateNpmSdkOptions } from "./CreateNpmSdkOptions.js";
import type { CreatePypiSdkOptions } from "./CreatePypiSdkOptions.js";
import type { DataScopeV2 } from "./DataScopeV2.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";

/**
 * A request for a new SDK to be generated. At least one package manager
 * type must be requested for the SDK.
 */
export interface CreateSdkRequest {
  dataScope: DataScopeV2;
  npm: CreateNpmSdkOptions | undefined;
  pypi: CreatePypiSdkOptions | undefined;
  conda: CreateCondaSdkOptions | undefined;
  maven: CreateMavenSdkOptions | undefined;
  ontologyPackageRid: OntologyPackageRid | undefined;
}
