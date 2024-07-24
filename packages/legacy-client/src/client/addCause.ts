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

export function addCause(e: Error, cause: any) {
  if (process?.env?.NODE_ENV !== "production") {
    // In case someone is debugging on an older browser or the `.cause` assignment trick
    // does not work in certain environments, we log the cause to the console to aid debugging.
    // eslint-disable-next-line no-console
    console.error("Preparing to throw error due to", cause);
  }

  (e as any).cause = cause;
  return e;
}
