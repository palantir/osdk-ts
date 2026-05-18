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

const MAX_PAYLOAD_LENGTH = 10000;

export function stringifyPayload(payload: unknown): string {
  return JSON.stringify(payload);
}

export function truncatePayload(payload: string): string {
  if (payload.length <= MAX_PAYLOAD_LENGTH) {
    return payload;
  }
  return payload.substring(0, MAX_PAYLOAD_LENGTH) + "...";
}

export function hashPayload(payload: unknown): number {
  const str = stringifyPayload(payload);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}
