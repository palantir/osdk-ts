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
 * An error thrown during SDK generation whose message is safe to log directly.
 * User-controlled data (API names, display names, etc.) goes in `unsafeParams`;
 * safe diagnostic context (RIDs, counts, type identifiers) goes in `params`.
 */
export class GeneratorError extends Error {
  readonly params?: Record<string, unknown>;
  readonly unsafeParams?: Record<string, unknown>;

  constructor(
    message: string,
    unsafeParams?: Record<string, unknown>,
    params?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "GeneratorError";
    this.unsafeParams = unsafeParams;
    this.params = params;
  }
}
