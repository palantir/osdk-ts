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

function configurationPath(args: readonly string[]): string {
  const index = args.indexOf("--config");
  const value = args[index + 1];
  if (index === -1 || value == null || value.length === 0) {
    throw new TypeError("Missing --config");
  }
  return value;
}

export function cli(
  args: readonly string[] = process.argv.slice(2),
): Promise<void> {
  if (args[0] !== "generate") {
    return Promise.reject(new TypeError("Expected generate command"));
  }
  configurationPath(args);
  return Promise.reject(
    new Error("Platform SDK generation is not implemented yet"),
  );
}
