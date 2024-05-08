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

export function getResults<T extends { results: any[] }>(x: T): T["results"] {
  return x.results;
}
export function applyPageToken<
  X,
  T extends { pageToken: X | undefined },
>(
  payload: T,
  { pageToken }: { pageToken: X | undefined },
): typeof payload | undefined {
  return pageToken
    ? {
      ...payload,
      pageToken,
    }
    : undefined;
}
export async function* pageRequestAsAsyncIter<P, Z, R>(
  call: (payload: P) => Promise<R>,
  values: (x: R) => Iterable<Z>,
  nextArgs: (previousPayload: P, previousResult: R) => P | undefined,
  initialPayload: P,
) {
  let payload: P | undefined = initialPayload;

  while (payload) {
    const r = await call(payload);
    for (const q of values(r)) {
      yield q;
    }
    payload = nextArgs(payload, r);
  }
}
