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

// `FailedWithUserMessage` is a deliberate name (thrown at ~10 call sites and
// surfaced in vitest error snapshots); appending "Error" would be churn with no
// behavioral benefit.
// oxlint-disable-next-line unicorn/custom-error-definition
export class FailedWithUserMessage extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FailedWithUserMessage";
  }
}
