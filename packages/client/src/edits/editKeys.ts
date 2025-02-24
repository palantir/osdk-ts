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

import type { ObjectLocator } from "./types.js";

export type ObjectLocatorKey = string & {
  readonly __brand: "ObjectLocatorKey";
};
export type LinkLocatorKey = string & { readonly __brand: "LinkLocatorKey" };

export function objectLocatorKey(obj: ObjectLocator): ObjectLocatorKey {
  return `${obj.apiName}:${obj.primaryKey}` as ObjectLocatorKey;
}

export function linkLocatorKey(
  source: ObjectLocator,
  apiName: string,
  target: ObjectLocator,
): LinkLocatorKey {
  return `${objectLocatorKey(source)}:${apiName}:${
    objectLocatorKey(target)
  }` as LinkLocatorKey;
}
