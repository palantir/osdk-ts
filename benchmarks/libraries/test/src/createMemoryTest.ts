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

import { neverOptimizeFunction } from "@osdk/benchmarks.lib.v8";
import { getOneMessage, sendMessage } from "execa";
import deepEqual from "fast-deep-equal";
import invariant from "tiny-invariant";
import { multiGc } from "./multiGc.js";

neverOptimizeFunction(createMemoryTest);
export async function createMemoryTest<T>(
  fn: () => Promise<T>,
): Promise<{
  result: Awaited<T>;
  outMsg: {
    type: "result";
    time: number;
    heapUsed: number;
    rss: number;
  };
}> {
  const msg = await getOneMessage();
  invariant(deepEqual(msg, { "type": "start" }));

  await multiGc(100);

  const initialMemory = process.memoryUsage();
  const start = process.hrtime.bigint();
  const result = await fn();
  const end = process.hrtime.bigint();
  await multiGc(100);
  const finalMemory = process.memoryUsage();

  const outMsg = {
    type: "result" as const,
    time: Number((Number(end - start) / 1_000_000).toFixed(2)),
    heapUsed: finalMemory.heapUsed - initialMemory.heapUsed,
    rss: finalMemory.rss - initialMemory.rss,
  };

  await sendMessage(outMsg);

  return {
    result,
    outMsg,
  };
}
