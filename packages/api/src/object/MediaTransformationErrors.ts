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

/**
 * Base error for media transformation failures.
 * @beta
 */
export class MediaTransformationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MediaTransformationError";
  }
}

/**
 * Thrown when a media transformation job exceeds the poll timeout.
 * @beta
 */
export class MediaTransformationTimeoutError extends MediaTransformationError {
  constructor(jobId: string) {
    super(`Transformation job ${jobId} timed out polling status`);
    this.name = "MediaTransformationTimeoutError";
  }
}

/**
 * Thrown when a media transformation job status is FAILED.
 * @beta
 */
export class MediaTransformationFailedError extends MediaTransformationError {
  constructor(jobId: string) {
    super(`Transformation job ${jobId} failed`);
    this.name = "MediaTransformationFailedError";
  }
}
