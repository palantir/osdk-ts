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

import type { SlsLogger, SlsLogParams } from "./SlsLogger.js";

export async function logDuration<T>(
  logger: SlsLogger,
  message: string,
  fn: () => Promise<T>,
  extraParams?: SlsLogParams,
): Promise<T> {
  logger.info(`${message}...`, extraParams);
  const start = Date.now();
  try {
    const result = await fn();
    logger.info(`${message} complete.`, {
      params: { ...extraParams?.params, durationMs: Date.now() - start },
      unsafeParams: extraParams?.unsafeParams,
    });
    return result;
  } catch (e) {
    logger.error(
      `${message} failed.`,
      {
        params: { ...extraParams?.params, durationMs: Date.now() - start },
        unsafeParams: extraParams?.unsafeParams,
      },
      e instanceof Error ? e : undefined,
    );
    throw e;
  }
}
