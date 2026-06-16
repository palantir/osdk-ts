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

export function extractPayloadError(
  payload: { error?: Error; status?: string } | undefined | null,
  fallbackMessage: string,
): Error | undefined {
  if (payload && "error" in payload && payload.error) {
    return payload.error;
  }
  if (payload?.status === "error") {
    return new Error(fallbackMessage);
  }
  return undefined;
}

export function isPayloadLoading(
  payload: { status?: string } | undefined | null,
  enabled: boolean,
): boolean {
  if (!enabled) {
    return false;
  }
  return payload?.status === "loading" || payload?.status === "init"
    || !payload;
}
