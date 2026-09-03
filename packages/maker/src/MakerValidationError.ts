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
 * A rejection of something the author wrote, as opposed to a bug in maker.
 *
 * The message is the entire point of these — it is a report the author is expected to read and act
 * on — so `bin/maker.mjs` prints the message alone and suppresses the stack, which would otherwise
 * bury it. Everything else keeps its stack, so a real bug stays debuggable.
 *
 * `bin/maker.mjs` discriminates on `name` rather than `instanceof`, which keeps this class off the
 * package's public API. Renaming the class means renaming the string there too.
 */
export class MakerValidationError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "MakerValidationError";
  }
}
