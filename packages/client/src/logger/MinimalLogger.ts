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

import type { LogFn, Logger } from "@osdk/api";
import { BaseLogger } from "./BaseLogger.js";

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
  }

  createLogMethod(
    name: "trace" | "debug" | "info" | "warn" | "error" | "fatal",
    bindings: Record<string, any>,
  ): LogFn {
    const msgs: string[] = [name];

    if (this.options?.msgPrefix) {
      msgs.push(this.options.msgPrefix);
    }

    if (typeof bindings === "object" && "methodName" in bindings) {
      msgs.push(`.${bindings.methodName}()`);
    }

    return (...args: any[]) => {
      // eslint-disable-next-line no-console
      console[name === "fatal" ? "error" : name](msgs.join(" "), ...args);
    };
  }
}
