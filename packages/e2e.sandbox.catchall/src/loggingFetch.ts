/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import { logger } from "./logger.js";

export async function loggingFetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
): Promise<Response> {
  let url = new URL(
    (typeof input === "string")
      ? input
      : (input instanceof URL)
      ? input.toString()
      : input.url,
  );

  const cleaned = url.pathname.replace(/ri.ontology..*?\//, "{rid}/");

  logger.debug(`fetch(${chalk.blue(cleaned)})`);
  return await fetch(input, init);
}
