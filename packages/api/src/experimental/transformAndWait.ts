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

import type { MediaReference } from "../object/Media.js";
import type { Experiment } from "./Experiment.js";
import type { MediaTransformation } from "./MediaTransformation.js";

/**
 * Options for polling a media transformation job.
 *
 * @experimental
 */
export interface TransformOptions {
  /** Milliseconds between status polls. Defaults to 3000. */
  pollIntervalMs?: number;
  /** Maximum milliseconds to wait before timing out. Defaults to 30000. */
  pollTimeoutMs?: number;
}

/**
 * @experimental This feature is experimental and might change in the future.
 *
 * Submits a transformation job for a media item, polls until completion,
 * and returns the transformed content.
 *
 * @param args.mediaReference - The media reference to transform
 * @param args.transformation - The transformation to apply (e.g. from `@osdk/foundry.mediasets`)
 * @param args.options - Polling options (interval and timeout)
 *
 * @returns The transformed media content as a Response
 */
type transformAndWait = (args: {
  mediaReference: MediaReference;
  transformation: MediaTransformation;
  options?: TransformOptions;
}) => Promise<Response>;

export const __EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait: Experiment<
  "2.8.0",
  "__EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait",
  { transformAndWait: transformAndWait }
> = {
  name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__transformAndWait",
  type: "experiment",
  version: "2.8.0",
};
