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

const COMPACT_NUMBER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

/**
 * Compact locale-aware formatter for filter-list bucket and null-row counts
 * (e.g. "1.2K", "1.5M"). Call sites should pair this with
 * `title={n.toLocaleString()}` so the full count remains discoverable.
 */
export function formatCompactCount(n: number): string {
  return COMPACT_NUMBER.format(n);
}
