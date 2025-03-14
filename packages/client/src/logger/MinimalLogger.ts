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

import { BaseLogger } from "./BaseLogger.js";
import type { LogFn, Logger } from "./Logger.js";

function createLogMethod(
  name: "trace" | "debug" | "info" | "warn" | "error" | "fatal",
  bindings: Record<string, any>,
  options: { level?: string; msgPrefix?: string },
): LogFn {
  const msgs: string[] = [name];

  if (options?.msgPrefix) {
    msgs.push(options.msgPrefix);
  }

  if (typeof bindings === "object" && "methodName" in bindings) {
    msgs.push(`.${bindings.methodName}()`);
  }

  // eslint-disable-next-line no-console
  return console[name === "fatal" ? "error" : name].bind(
    console,
    msgs.join(" "),
  );
}

export class MinimalLogger extends BaseLogger implements Logger {
  constructor(
    bindings: Record<string, any> = {},
    options: { level?: string; msgPrefix?: string } = {},
  ) {
    super(
      bindings,
      { ...options, level: options.level ?? "error" },
      MinimalLogger,
    );

    for (
      const k of ["trace", "debug", "info", "warn", "error", "fatal"] as const
    ) {
      this[k] = createLogMethod(k, bindings, options);
    }
  }
}
