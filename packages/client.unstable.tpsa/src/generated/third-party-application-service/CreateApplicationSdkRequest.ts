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

import type { ApplicationVersion } from "./ApplicationVersion.js";
import type { OntologyVersion } from "./OntologyVersion.js";

/**
 * A request for a new SDK to be generated. At least one package manager
 * type must be requested for the SDK.
 *
 * Application SDK settings from the requested application version will
 * be used as defaults. Any settings specified within this request will
 * override the defaults.
 */
export interface CreateApplicationSdkRequest {
  ontologyVersion: OntologyVersion | undefined;
  applicationVersion: ApplicationVersion;
  npm: boolean | undefined;
  pypi: boolean | undefined;
  conda: boolean | undefined;
}
