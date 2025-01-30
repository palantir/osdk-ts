/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { FormatterUserId } from "./FormatterUserId.js";
import type { RidFormatter } from "./RidFormatter.js";
export interface KnownFormatter_userId {
  type: "userId";
  userId: FormatterUserId;
}

export interface KnownFormatter_ridFormatter {
  type: "ridFormatter";
  ridFormatter: RidFormatter;
}
/**
 * Contains a known format that informs the Front-End consumer to use a specific formatter.
 */
export type KnownFormatter =
  | KnownFormatter_userId
  | KnownFormatter_ridFormatter;
