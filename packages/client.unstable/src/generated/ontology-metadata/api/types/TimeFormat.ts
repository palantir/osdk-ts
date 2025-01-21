/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { TimeFormat12Hour } from "./TimeFormat12Hour.js";
import type { TimeFormat24Hour } from "./TimeFormat24Hour.js";
export interface TimeFormat_timeFormat24Hour {
  type: "timeFormat24Hour";
  timeFormat24Hour: TimeFormat24Hour;
}

export interface TimeFormat_timeFormat12Hour {
  type: "timeFormat12Hour";
  timeFormat12Hour: TimeFormat12Hour;
}
export type TimeFormat =
  | TimeFormat_timeFormat24Hour
  | TimeFormat_timeFormat12Hour;
