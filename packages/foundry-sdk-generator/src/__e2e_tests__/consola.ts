/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

/* eslint-disable no-console */

import chalk from "chalk";
import type { Consola, LogType } from "consola";
import type { ColorName } from "consola/utils";
import { colorize } from "consola/utils";

const levels: Partial<
  Record<LogType, {
    color: ColorName;
  }>
> = {
  success: {
    color: "green",
  },
  info: {
    color: "blue",
  },
  log: {
    color: "cyan",
  },
  warn: {
    color: "yellow",
  },
  error: {
    color: "red",
  },
  silent: {
    color: "gray",
  },
  start: {
    color: "magenta",
  },
};

const consola: Record<string, (...args: any[]) => void> = {};

for (const [key, data] of Object.entries(levels)) {
  consola[key as LogType] = (...args: any[]) => {
    (key === "fatal" || key === "error" ? console.error : console.log)(
      `[${chalk[data.color](key.toUpperCase())}]`,
      ...args,
    );
  };
}

export { consola };
