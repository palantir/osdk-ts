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

import { throttling } from "@octokit/plugin-throttling";
import { Octokit } from "octokit";

export const setupOctokit = (githubToken: string) => {
  const Github = Octokit.plugin(throttling);
  type Opts = Parameters<typeof throttling>[1];

  return new Github({
    throttle: {
      onRateLimit: (
        retryAfter: any,
        options: any,
        octokit: any,
        retryCount: any,
      ) => {
        octokit.log.warn(
          `Request quota exhausted for request ${options.method} ${options.url}`,
        );

        octokit.log.warn(`Retrying after ${retryAfter} seconds!`);
        octokit.log.warn(`Retry Count: ${retryCount}`);

        if (retryCount < 1) {
          // only retries once
          octokit.log.info(`Retrying after ${retryAfter} seconds!`);
          return true;
        }
      },
      onSecondaryRateLimit: (retryAfter: any, options: any, octokit: any) => {
        // does not retry, only logs a warning
        octokit.log.warn(
          `SecondaryRateLimit detected for request ${options.method} ${options.url}`,
        );
      },
    },
  });
};
