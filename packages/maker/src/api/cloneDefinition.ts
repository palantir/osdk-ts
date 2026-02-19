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

/**
 * Shallow-clones a definition object, copying any array-valued properties
 * to prevent shared-array mutation bugs (e.g. when users pass the same
 * datasources constant to multiple defineObject calls).
 *
 * Does NOT deep-clone nested objects so that entity references (interfaces,
 * link types, etc.) preserve their identity for registry lookups.
 */
export function cloneDefinition<T extends object>(
  input: T,
): T {
  const clone = { ...input };
  for (const key in clone) {
    if (
      Object.prototype.hasOwnProperty.call(clone, key)
      && Array.isArray(clone[key])
    ) {
      (clone as any)[key] = [...(clone[key] as unknown[])];
    }
  }
  return clone;
}
