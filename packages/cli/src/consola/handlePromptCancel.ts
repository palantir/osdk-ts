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

import { consola } from "consola";

export function handlePromptCancel(promptResponse: any) {
  const isFalse = typeof promptResponse === "boolean" && !promptResponse;
  // https://github.com/unjs/consola/issues/251
  const isSigInt = typeof promptResponse === "symbol"
    && promptResponse.toString() === "Symbol(clack:cancel)";
  if (isSigInt || isFalse) {
    consola.fail("Operation cancelled");
    process.exit(0);
  }
}
