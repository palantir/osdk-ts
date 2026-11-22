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

import type { FunctionExecution } from "@osdk/api/unstable";
import type { ExecuteQueryAsyncResponse } from "@osdk/foundry.functions";
import * as Executions from "@osdk/foundry.functions/Execution";

import type { MinimalClient } from "../MinimalClientContext.js";

export async function createFunctionExecutionHandle<T>(
  client: MinimalClient,
  submission: ExecuteQueryAsyncResponse,
  decode: (value: unknown) => Promise<T>,
): Promise<FunctionExecution<T>> {
  const executionId =
    submission.type === "submitted" ? submission.executionId : undefined;
  let success =
    submission.type === "completed"
      ? { type: "succeeded" as const, value: await decode(submission.value) }
      : undefined;

  return {
    executionId,
    async getResult({ $timeoutSeconds = 0 } = {}) {
      if (!Number.isInteger($timeoutSeconds) || $timeoutSeconds < 0) {
        throw new Error("$timeoutSeconds must be a non-negative integer");
      }
      if (executionId != null && success == null) {
        const result = await Executions.getResult(
          client,
          executionId,
          { branch: client.branch, timeout: Math.min($timeoutSeconds, 280) },
          { preview: true },
        );
        if (result.type === "succeeded") {
          const value = await decode(result.value);
          success ??= { type: "succeeded", value };
        }
      }
      return success ?? { type: "running" };
    },
    async cancel() {
      if (executionId != null && success == null) {
        await Executions.cancel(client, executionId, { preview: true });
      }
    },
  };
}
