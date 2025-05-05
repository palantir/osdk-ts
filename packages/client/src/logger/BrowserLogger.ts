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
import { BaseLogger } from "./BaseLogger.js";
function createStyle({ color }: { color: string }) {
  return `color: ${color}; border: 1px solid ${color}; padding: 2px; border-radius: 3px;`;
}

const levelStyles = {
  debug: createStyle({
    color: "LightBlue",
  }),
  error: createStyle({
    color: "red",
  }),
  fatal: createStyle({
    color: "red",
  }),
  info: createStyle({
    color: "green",
  }),
  trace: createStyle({
    color: "gray",
  }),
  warn: createStyle({
    color: "orange",
  }),
};

export class BrowserLogger extends BaseLogger implements Logger {
  constructor(
    bindings: Record<string, any> = {},
    options: { level?: string; msgPrefix?: string } = {},
  ) {
    super(
      bindings,
      { ...options, level: options.level ?? "error" },
      BrowserLogger,
    );
  }

  protected createLogMethod(
    name: "trace" | "debug" | "info" | "warn" | "error" | "fatal",
    bindings: Record<string, any>,
  ): Logger.LogFn {
    const msgs: string[] = [`%c${name}%c`];
    const styles: string[] = [levelStyles[name], ""];

    if (this.options?.msgPrefix) {
      msgs.push(`%c${this.options.msgPrefix}%c`);
      styles.push(
        "font-style: italic; color: gray",
        "",
      );
    }

    if (typeof bindings === "object" && "methodName" in bindings) {
      msgs.push(`%c.${bindings.methodName}()%c`);
      styles.push(
        "font-style: italic;color: orchid",
        "",
      );
    }

    return (...args: any[]): any => {
      // eslint-disable-next-line no-console
      console[name === "fatal" ? "error" : name](
        msgs.join(" "),
        ...styles,
        ...args,
      );
    };
  }
}
