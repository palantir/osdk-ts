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

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import type {
  ComponentDiscovery,
  ServiceName,
} from "../generated/cli/index.js";
import { discoveryFileName } from "../utils/service.js";

/**
 * Write a discovery file the way a running service would.
 *
 * Defaults `pid` to this process so the record reads as live; pass a dead pid
 * to exercise staleness.
 */
export const writeDiscoveryFile = async (
  projectDir: string,
  name: ServiceName,
  discovery: Partial<ComponentDiscovery> & Pick<ComponentDiscovery, "url">
): Promise<void> => {
  const dir = join(projectDir, ".palantir");
  await mkdir(dir, { recursive: true });
  const contents: ComponentDiscovery = {
    pid: process.pid,
    processStartTimeSecs: Math.floor(Date.now() / 1000),
    ...discovery,
  };
  await writeFile(
    join(dir, discoveryFileName(name)),
    JSON.stringify(contents, null, 2),
    "utf-8"
  );
};
