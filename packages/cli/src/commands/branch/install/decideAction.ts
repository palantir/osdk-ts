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

export type Action =
  | { kind: "noop"; reason: string }
  | { kind: "install"; version: string };

/**
 * Decide whether to install: no-op when the declared version already equals the
 * resolved one (idempotent, keeps the tree clean), otherwise install the exact
 * resolved version.
 */
export function decideAction({
  current,
  resolved,
}: {
  current: string | undefined;
  resolved: string;
}): Action {
  if (current === resolved) {
    return { kind: "noop", reason: `already in sync at ${resolved}` };
  }
  return { kind: "install", version: resolved };
}
