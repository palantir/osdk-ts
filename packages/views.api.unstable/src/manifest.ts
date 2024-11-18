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

import type {
  EventDefinition,
  ParameterConfig,
  ParameterDefinition,
} from "./config.js";

export interface ViewManifest {
  views: Record<string, ViewManifestConfig>;
}

export interface ViewManifestConfig {
  rid: string;
  version: string;
  entrypointJs: string[];
  entrypointCss?: string[];
  parameters: Record<string, ParameterDefinition>;
  events: Record<string, EventDefinition<ParameterConfig>>;
}

export const MANIFEST_FILE_LOCATION = ".palantir/view-config.json";
