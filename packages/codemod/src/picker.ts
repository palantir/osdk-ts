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

import { intro, isCancel, outro, select } from "@clack/prompts";
import { TRANSFORMS } from "./transforms/index.js";

export async function runPicker(): Promise<string | null> {
  intro("@osdk/codemod");

  const result = await select({
    message: "Which transform would you like to run?",
    options: TRANSFORMS.map((t) => ({
      value: t.name,
      label: t.name,
      hint: t.description,
    })),
  });

  if (isCancel(result)) {
    outro("Cancelled.");
    return null;
  }

  return result;
}
