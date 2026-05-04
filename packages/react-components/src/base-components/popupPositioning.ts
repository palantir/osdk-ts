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

// Keep popups visually detached from their trigger so dropdowns and calendars
// never appear to overlap the input that opened them.
export const POPUP_SIDE_OFFSET = 8;

// Leave a small viewport gutter when Base UI shifts a popup to avoid clipping.
export const POPUP_COLLISION_PADDING = 8;
