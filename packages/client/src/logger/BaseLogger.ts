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

import type { Logger } from "@osdk/api";

export function noop(): any {
}

interface LoggerConstructor {
  new(
    bindings: Record<string, any>,
    options?: { level?: string; msgPrefix?: string },
  ): Logger;
}

const levels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};

export abstract class BaseLogger implements Logger {
  protected bindings: Record<string, any>;
  protected options: { level?: string; msgPrefix?: string } | undefined;
  #factory: LoggerConstructor;

  constructor(
    bindings: Record<string, any>,
    options: { level?: string; msgPrefix?: string } = {},
    factory: LoggerConstructor,
  ) {
    this.bindings = bindings;
    this.options = options;
    this.#factory = factory;

    for (
      const k of ["trace", "debug", "info", "warn", "error", "fatal"] as const
    ) {
      if (this.options?.level && !this.isLevelEnabled(k)) {
        continue;
      }
      this[k] = this.createLogMethod(k, bindings);
    }
  }

  protected abstract createLogMethod(
    name: "trace" | "debug" | "info" | "warn" | "error" | "fatal",
    bindings: Record<string, any>,
  ): Logger.LogFn;

  trace: Logger.LogFn = noop;
  debug: Logger.LogFn = noop;
  warn: Logger.LogFn = noop;
  info: Logger.LogFn = noop;
  error: Logger.LogFn = noop;
  fatal: Logger.LogFn = noop;

  child(
    bindings: Record<string, any>,
    options?: { level?: string; msgPrefix?: string },
  ): Logger {
    return new this.#factory({
      ...this.bindings,
      ...bindings,
    }, {
      level: options?.level ?? this.options?.level,
      msgPrefix: [this.options?.msgPrefix, options?.msgPrefix].filter(x => x)
        .join(" "),
    });
  }

  isLevelEnabled(level: string): boolean {
    const ourLevel = (this.options?.level ?? "info") as keyof typeof levels;

    return level in levels && ourLevel in levels
      && levels[level as keyof typeof levels] >= levels[ourLevel];
  }
}
