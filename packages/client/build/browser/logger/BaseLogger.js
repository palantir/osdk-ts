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

function noop() {}
const levels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
};
export class BaseLogger {
  #factory;
  constructor(bindings, options = {}, factory) {
    this.bindings = bindings;
    this.options = options;
    this.#factory = factory;
  }
  trace = noop;
  debug = noop;
  warn = noop;
  info = noop;
  error = noop;
  fatal = noop;
  child(bindings, options) {
    return new this.#factory({
      ...this.bindings,
      ...bindings
    }, {
      level: (options ?? this.options)?.level,
      msgPrefix: [this.options?.msgPrefix, options?.msgPrefix].filter(x => x).join(" ")
    });
  }
  isLevelEnabled(level) {
    const ourLevel = this.options?.level ?? "info";
    return level in levels && ourLevel in levels && levels[level] >= levels[ourLevel];
  }
}
//# sourceMappingURL=BaseLogger.js.map