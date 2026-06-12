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

/** Canonical, heterogeneous-safe identity for a stored object instance. */
export interface ObjectRef {
  readonly $objectType: string;
  readonly $primaryKey: string | number;
}

/**
 * U+0000 separator avoids collisions between e.g. ("A", "1:2") and ("A:1", "2")
 * since neither apiName nor primary key contains a null character.
 */
const SEPARATOR = String.fromCharCode(0);

/** Stable string key for an ObjectRef. Used internally for Map keys / dedupe. */
export function objectRefKey(ref: ObjectRef): string {
  return `${ref.$objectType}${SEPARATOR}${ref.$primaryKey}`;
}

export function objectRefOf(
  instance: { $objectType: string; $primaryKey: string | number },
): ObjectRef {
  return {
    $objectType: instance.$objectType,
    $primaryKey: instance.$primaryKey,
  };
}

export function objectRefEquals(a: ObjectRef, b: ObjectRef): boolean {
  return a.$objectType === b.$objectType && a.$primaryKey === b.$primaryKey;
}
