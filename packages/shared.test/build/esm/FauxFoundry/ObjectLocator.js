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

import invariant from "tiny-invariant";
export function objectLocator(obj) {
  return `${obj.__apiName}:${obj.__primaryKey}`;
}
export function parseLocator(locator) {
  const [objectType, primaryKey] = locator?.split(":") ?? [];
  !(objectType && primaryKey) ? process.env.NODE_ENV !== "production" ? invariant(false, `Invalid locator format:  ${locator}`) : invariant(false) : void 0;
  return {
    objectType,
    primaryKey
  };
}
//# sourceMappingURL=ObjectLocator.js.map