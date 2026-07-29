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

import type { ServiceName } from "../generated/cli/__components.js";

const SERVICE_FILE_NAMES = {
  ONTOLOGY: "ontology",
  TYPESCRIPT_FUNCTIONS: "typescript-functions",
  PYTHON_FUNCTIONS: "python-functions",
  APP: "app",
  STATUS_SERVER: "status-server",
  PLATFORM_API_PROXY: "platform-api-proxy",
} as const satisfies Record<ServiceName, string>;

const SERVICE_NAMES_BY_FILE_NAME = new Map<string, ServiceName>(
  Object.entries(SERVICE_FILE_NAMES).map(([name, stem]) => [
    stem,
    name as ServiceName,
  ])
);

export const serviceNameFromFileName = (
  fileName: string
): ServiceName | undefined => {
  const name = fileName.match(/^\.?(?<name>.+)-discovery\.json$/u)?.groups
    ?.name;
  return name === undefined ? undefined : SERVICE_NAMES_BY_FILE_NAME.get(name);
};

/** The name a running service publishes its discovery record under. */
export const discoveryFileName = (name: ServiceName): string =>
  `.${SERVICE_FILE_NAMES[name]}-discovery.json`;
