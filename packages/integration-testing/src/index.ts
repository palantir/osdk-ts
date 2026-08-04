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

/**
 * The published name of this package.
 *
 * Placeholder entry point for `@osdk/integration-testing`. Integration-testing
 * helpers will be exported from here as they are implemented.
 */

export type {
  IntegrationClient,
  IntegrationClientConfig,
} from "./IntegrationClient.js";
export type {
  IntegrationServer,
  IntegrationServerConfig,
} from "./IntegrationServer.js";

export { createIntegrationClient } from "./IntegrationClient.js";
export { createIntegrationServer } from "./IntegrationServer.js";

export { FoundryCLIInstallation, checkFoundryCli } from "./utils/version.js";
