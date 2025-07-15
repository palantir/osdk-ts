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

import chalk from "chalk";
import type { Logger as ViteLogger } from "vite";

export enum Level {
  debug = 0,
  info = 1,
  warn = 2,
  error = 3,
}

export class Logger {
  #level: Level;
  #viteLogger: ViteLogger;

  constructor(
    { level, viteLogger }: {
      level: Level | keyof typeof Level;
      viteLogger: ViteLogger;
    },
  ) {
    this.#level = typeof level === "string" ? Level[level] : level;
    this.#viteLogger = viteLogger;
  }

  debug(message: string): void {
    if (this.#level <= Level.debug) {
      this.#viteLogger.info(
        `${chalk.cyan("[osdk]")} ${chalk.gray(`DEBUG: ${message}`)}`,
        { timestamp: true },
      );
    }
  }

  info(message: string): void {
    if (this.#level <= Level.info) {
      this.#viteLogger.info(`${chalk.cyan("[osdk]")} ${message}`, {
        timestamp: true,
      });
    }
  }

  error(message: string): void {
    if (this.#level <= Level.error) {
      this.#viteLogger.error(`${chalk.cyan("[osdk]")} ${chalk.red(message)}`, {
        timestamp: true,
      });
    }
  }

  warn(message: string): void {
    if (this.#level <= Level.warn) {
      this.#viteLogger.warn(
        `${chalk.cyan("[osdk]")} ${chalk.yellow(message)}`,
        { timestamp: true },
      );
    }
  }
}
