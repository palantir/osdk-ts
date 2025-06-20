/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import EventEmitter from "node:events";
import * as fs from "node:fs";
import type { FSWatcher, Logger } from "vite";
import { generateOntologyAssets } from "./generateOntologyAssets.js";

export interface WatchOntologyAsCodeEvents {
  generated: [];
}

export function watchOntologyAsCode(
  { watcher, logger, ontologyDir, workDir }: {
    watcher: FSWatcher;
    logger: Logger;
    ontologyDir: string;
    workDir: string;
  },
): EventEmitter<WatchOntologyAsCodeEvents> {
  const emitter = new EventEmitter<WatchOntologyAsCodeEvents>();
  logger.info(`Starting OAC file watcher for ${ontologyDir}`, {
    timestamp: true,
  });

  if (!fs.existsSync(ontologyDir)) {
    fs.mkdirSync(ontologyDir, { recursive: true });
  }

  watcher.add(ontologyDir);

  // Add event listeners
  watcher
    .on("add", handleOacFileChanged)
    .on("change", handleOacFileChanged)
    .on("unlink", handleOacFileChanged);

  // invoke the handler at startup
  handleOacFileChanged(undefined);

  return emitter;

  function handleOacFileChanged(filePath: string | undefined): void {
    if (filePath && !filePath.startsWith(`${ontologyDir}/`)) {
      return;
    }

    if (filePath) {
      logger.info(`File ${filePath} changed.`, { timestamp: true });
    }

    (async () => {
      await fs.promises.mkdir(workDir, { recursive: true });

      await generateOntologyAssets({
        logger,
        ontologyDir,
        workDir,
      });
      emitter.emit("generated");
    })().catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      logger.error(`Error executing command: ${error.message}`, {
        timestamp: true,
      });
    });
  }
}
