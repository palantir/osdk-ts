/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { loadNodeEnvironmentLayers } from "../nodeEnvironmentLayers.js";
import { $setEnvironmentLayerLoader } from "../registry.js";

// Importing this entrypoint anywhere in the process — `import "@osdk/aliases/node"`, or
// `node --import @osdk/aliases/node` — adds the ALIASES_JSON_FILE / RESOURCES_JSON_FILE
// layers to the single module-level registry that every loaded SDK shares. The default
// entrypoint deliberately omits them so `node:fs` stays out of browser bundles.
$setEnvironmentLayerLoader(loadNodeEnvironmentLayers);

export * from "../index.js";
